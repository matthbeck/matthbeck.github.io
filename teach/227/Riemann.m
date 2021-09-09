(*Riemann package by Charles Wells.  November, 1992.*)       

Off[General::spelll]

BeginPackage[ "Riemann`" ]

RiemannData::usage = "RiemannData[expression, range, options]
produces a list consisting of three lists and a number.  The first
list is a partition of the range (which must be in the form
{x,leftend,rightend}).  The partition is either Random or Uniform,
depending on the value of the option Partition. The mesh of a random
partition is determined by the option Mesh.  The number of
subintervals of a uniform partition is determined by the option
Subintervals.  The second list is the value of the expression at some
point in each subinterval in that partition.  Which point is governed
by the option Height, which can be LeftSide, MidPoint, RightSide or
Random.  The third list gives the successive rectangular areas
determined by the widths of the subintervals in the partition and the
given heights.  The final entry is the mesh of the given partition --
the width of the widest subinterval."

PlotRiemann::usage = "PlotRiemann[expression, range,
{plotoptions}, {riemannoptions}] produces a plot of 'expression'
on range 'range', it draws the rectangles corresponding to a
Riemann partition of the range for the expression, and it puts
the correct value of the integral and the value of the Riemann
sum in a label. In the list plotoptions you can put any options
taken by Plot In the list riemannoptions you can set any of the
options Partition, Mesh, Subintervals and Height.\n\n  

Partition -> Random produces a partition with random-sized
subintervals with maximum width bounded by Mesh, which can be set to
any positive real number.  Partition -> Uniform produces a partition
in which all the subintervals have the same width.  The number of
subintervals of a uniform partition is determined by the option
Subintervals, which can be any positive integer (default 12).\n\n 

The option Height determines the point within each subinterval at
which the function is evaluated.  That value becomes the height of
the rectangle over the subinterval.  Height can be set to LeftSide,
MidPoint, RightSide or Random. 

You can omit all options and just type
PlotRiemann[expression, range].  If you want to include the PlotRiemann 
options, you must type an empty list for the Plot options first. 
Example:PlotRiemann[expression, range,{},{Subintervals -> 25}].\n\n

The default options are:\n
   Subintervals -> 12,\n
	Partition -> Uniform,\n
	Mesh -> Length of the interval of integration divided by 6,\n
	Height -> Midpoint\n\n"

RiemannSum::usage = "RiemannSum[expression, range,
options] creates a partition of the given range,
evaluates 'expression' at some point in each
subinterval, and returns the value of the sum.  It does
not draw a graph.  The options are the same as those
allowed by PlotRiemann."

RiemannSumList::usage = "RiemannSumList[expression, range, n]
produces a list of the values of n Riemann sums with random-width
subintervals and random evaluation points in each subinterval.  It
can be inserted into ListPlot to produce a graph showing how smaller
mesh causes the Riemann sum to be a better approximation to the
integral.  This function is slow for large n." 

(* PlotBounded::usage = "PlotBounded[expression,
range, options] works just like the built-in
command Plot except that (1) in addition it draws
vertical lines from the x-axis to the graph of the
curve being plotted and (2) it won't work with a
list of expressions.  The curve is extended to
the left and right of the bounds by a small
amount. All the options for Plot should work here
too.  Improvements needed:  Provide an option
allowing the left and right overhang to be
adjusted."  *)

PlotBounded[expression_, range_, options___] :=
Module[{g, f, left, right, newleft, newright, var,
			leftheight, rightheight, width, newrange}, 
		var=range[[1]];
		f=Function[ReleaseHold[var], expression]; 
		left=range[[2]];
		right=range[[3]];
		width=right-left;
		leftheight=f[left]; 
		rightheight=f[right];
		newleft=left-0.25*width; 
		newright=right+0.25*width;
		newrange={var, newleft,newright};
		g:= Plot[expression, 
				ReleaseHold[newrange], 
				DisplayFunction -> Identity,
                                PlotStyle -> {{ RGBColor[0,0,1]}},
				options];
		Show [ g, 
			Graphics[{Line[{{left,0},{left,leftheight}}],
				Line[{{right,0},{right,rightheight}}]}],
		DisplayFunction -> $DisplayFunction]
	]

(* RandomPartition::usage = "RandomPartition[range,
mesh] returns a list consisting of a list and a
number.  The list is a random partition of the
range with maximum possible mesh given by 'mesh'
and the number is the width of the largest
subinterval. In the input to RandomPartition,
`range' is given in the form of range for Plot,
for example {x,1,3}." *)

RandomPartition[range_, mesh_] :=
	Module[{u=range[[2]], top=range[[3]], 
			list={range[[2]]}, v, newlist, actualmesh=0},
			While[u + mesh < top,
				v = u + Random[Real,mesh];
				actualmesh = Max[actualmesh, v-u];
				newlist := Append[list, v];
				u = v;
				list = newlist];
         partitionstring=
           StringJoin["Random partition with maximum mesh ",
              ToString[mesh]]; 
			actualmesh = Max[actualmesh, top - Last[list]]; 
			Return[{Append[list,top], actualmesh}]]

(* UniformPartition::usage = 
"UniformPartition[range_, number_] returns a list
consisting of a list and a mesh number.  The list
is a partition of the range into n equal
subintervals where n is given by 'number' and the
mesh is the width of the largest subinterval. The
range is given in the form of range for Plot, for
example {x,1,3}." *)
UniformPartition[range_, number_] := 
	Module[{bottom=range[[2]] // N, 
			top=range[[3]] // N,
			actualmesh},
		actualmesh = (top - bottom)/number;
      partitionstring=
        StringJoin["Uniform partition into ",
           ToString[number]," subintervals"];
		Return[
			{N[Range[bottom,top, actualmesh]],
			actualmesh}
			]
		]
			


(* Slices::usage = "Slices[expression, variable,
list, options] returns a list of two lists. The
first list gives values of the function at one
point in each of the subintervals determined by
the given list.  The second list gives the areas
of the rectangles with base between successive
entries in the first list and height the
corresponding value in the second list.  The
option Height determines whether the function is
evaluated at the LeftSide, MidPoint, or RightSide
of the subinterval or a Random point in the
subinterval.  For the future:  Allow additional
options MaxValue and MinValue for the Height." *)

Slices[expression_, variable_, list_, 
		options___Rule] :=
	Module[{i=1, startlist=list, leftlist, 
		rightlist, widthlist, selectlist,
		arealist, heightlist, valuelist,
		opt=Height /. {options} /. Options[RiemannData],
		f=Function[variable,expression]},
		leftlist=Drop[list,-1];
		rightlist=Drop[list,1];
		widthlist=rightlist-leftlist;
		selectlist=Switch[opt,
				LeftSide, 
            (heightstring=
              "Left edge of subinterval used for height";leftlist),
				RightSide, 
            (heightstring=
              "Right edge of subinterval used for height";rightlist),
				Midpoint, 
            (heightstring=
              "Midpoint of subinterval used for height";
              leftlist + 0.5*widthlist),
				Random, 
            (heightstring=
              "Random point in subinterval used for height";
               leftlist + (Random[Real,#]& /@ widthlist))];
		heightlist= f /@ selectlist;
		arealist=heightlist*widthlist;
		{heightlist, arealist}]

(* ShowPartition::usage = "ShowPartition[partition]
produces a series of Line statements drawing
short vertical lines on the x-axis at each point
in the given partition." *)

ShowPartition[partition_]  := 
	Block[{length, width, h},
		length = Length[partition];
		width = partition[[length]] - partition[[1]];
		h = 0.05*width;
		Table[Line[{{partition[[i]],-h},
			{partition[[i]],h}}],
			{i, 1, Length[partition]-1}]]

(* Box::usage = "Box[bottom, top, left, right]
produces a series of Line statements which in a
Graphics object will draw a hollow rectangle with
the corners given.  (Note that the built in
command Rectangle draws a solid rectangle.)" *)

Box[bottom_, top_, left_, right_] :=
	Line[{{left, bottom},
		{right, bottom},
		{right, top},
		{left, top},
		{left, bottom}}]

ShowSlices[partition_, heightlist_] :=
	Table[Box[0,heightlist[[i]], partition[[i]],
		partition[[i+1]]], 
	{i, 1, Length[partition]-1} ]	

Options[RiemannData] :=
	{Subintervals -> 12,
	Partition -> Uniform,
	Mesh -> intervallength/6.0,
	Height -> Midpoint}

(* RiemannData::usage = "RiemannData[expression,
range, options] produces a list consisting of
three lists and a number.  The first list is a
partition of the range (which must be in the form
{x,leftend,rightend}).  The partition is either
Random or Uniform, depending on the value of the
option Partition. The mesh of a random partition
is determined by the option Mesh.  The number of
subintervals of a uniform partition is determined
by the option Subintervals.  The second list is
the value of the expression at some point in each
subinterval in that partition.  Which point is
governed by the option Height, which can be
LeftSide, MidPoint, RightSide or Random.  The
third list gives the successive rectangular areas
determined by the widths of the subintervals in
the partition and the given heights.  The final
entry is the mesh of the given partition -- the
width of the widest subinterval." *)

RiemannData[expression_, range_, options___Rule] :=
	Block[{M=Mesh /. {options} 
			/. Options[RiemannData],
		S=Subintervals /. {options} 
			/. Options[RiemannData],
		P=Partition /. {options} 
			/. Options[RiemannData],
		variable=range[[1]],
		intervallength=range[[3]]-range[[2]]},
		list=Switch[P, Uniform, 
			UniformPartition[range, S],
			Random,
			RandomPartition[range, M]
           ]; 
	{list[[1]]} ~Join~ 
		Slices[expression, variable, list[[1]], options]
		~Join~ {list[[2]]}]

RiemannSum[expression_, range_, options___Rule] :=
	Apply[Plus, 
		RiemannData[expression, range, 
		options][[3]]]

PlotRiemann[expression_, range_]  := 
	PlotRiemann[expression, range, {}, {}];

PlotRiemann[expression_, range_, {plotoptions___},
	{riemannoptions___}] := 
	Block[ {g, u, partition, heightlist, sum, mesh,
				integralvalue,outstring},
		(u=RiemannData[expression, 
				range, riemannoptions];
		partition=u[[1]];
		heightlist=u[[2]];
		sum=Apply[Plus, u[[3]]];
		mesh=u[[4]];
		integralvalue=NIntegrate[expression, range];
      outstring=StringJoin[partitionstring, "\n",
            heightstring, "\n",
				"Mesh = ", ToString[mesh],
				"\n", "Riemann Sum = ", ToString[sum],
				"\n", "Definite Integral = ",
				ToString[integralvalue]];
      g:= Plot[ expression, range, 
			  DisplayFunction -> Identity,
			  PlotLabel -> outstring,
           PlotStyle -> {{RGBColor[0,0,1]}},
			  plotoptions];
      h:= Graphics[{RGBColor[.8,.3,0],
                            ShowSlices[partition, heightlist]}];
		Show [g,h,DisplayFunction -> $DisplayFunction]
		)]


RiemannSumList[expression_, range_, n_] := 
	Module[{l={}, s, mesh, a, b, u},
	a = range[[2]]; b = range[[3]];
	Do[(mesh = Random[Real, {0, (b-a)/2.0}];
			u = RiemannData[expression, range,
			   Partition -> Random,
				Mesh -> mesh, Height -> Random];
			s = Apply[Plus, u[[3]]];
			l = Append[l, {u[[4]],s}]),
		{i,1,n}];
	l]

EndPackage[]

(* Acknowledgments:  
This package was produced with the support of the 
Consolidated Natural Gas Corporation.

Thanks to John Gray.  

Author: Charles Wells
Department of Mathematics
Case Western Reserve University
Cleveland, Ohio 44106-7058
216-368-2893
cfw2@po.cwru.edu

Copyright 1992 by Charles Frederick Wells.

Rights to the material in this  package are reserved.  
	
Permission is hereby granted to make copies of this file for any 
purpose other than direct profit or as part of a commercial product, 
provided that this copyright notice is retained.
*)


