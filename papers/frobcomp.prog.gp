/* check if there are positive m and n such that ma+nb=c given that a,b,c are RPIP */
/* returns true or false */
isredundant(a,b,c)=
{
  local(t);
  t=lift(Mod(c/a,b));
  while(t*a < c && (c-t*a)%b != 0, t += b);
  t*a<c
}

/* The computational version a and b are relatively prime, no assumtion on c
-- returns 0 if insoluble, else multiplier of a in ma+nb=c*/
isredundantp(a,b,c)=
{
  local(t);
  t=lift(Mod(c/a,b));
  if(t==0,t=b,);
  while(t*a < c && (c-t*a)%b != 0, t += b);
  if(t*a<c,t,0)
}
/* test if there exist positive integer m,n,p such that ma+nb+pc=t.  a,b,c are RPIP
returns true if such numbers exist, false otherwise */
solvesystem(t,a,b,c)=
{
  local(d,e);
  d=t-c;
  e=isredundantp(a,b,d);
  while((d>0) && (e == 0),d = d-c;if(d>0,e=isredundantp(a,b,d),e=0));
  (d>0)&&(e!=0)
}
/* The same as above, but print out the answer first */ 
solvesystemReport(t,a,b,c)=
{
  local(d,e);
  d=t-c;
  e=isredundantp(a,b,d);
  while((d>0) && (e == 0),d = d-c;if(d>0,e=isredundantp(a,b,d),e=0));
  if((d>0)&&(e!=0),print(d," ",e," ",(d-t*a)/b," ",(t-d)/c),);
  (d>0)&&(e!=0)
}



/* verify that there is no solution for ma+nb+pc=t but there
   are solutions for t+1 ... t+a */ 
validateSoln(t,a,b,c)=
{
  local(fail,inc);
  if(solvesystem(t,a,b,c)!=0,0,
    fail=0;
    inc=1;
    while((fail == 0) && (inc < (a+3)),
      fail=!solvesystem(t+inc,a,b,c);
      inc=inc+1);
    !fail)
}


rademacher(n,a,b,c)=sum(k=1,a-1,cos((Pi*k/a)*(-2*n+b+c))/(sin(Pi*k*b/a)*sin(Pi*k*c/a)))


/* compute f(a,b,c) using the prescribed algorihm. 
   Store away the rademacher sums as they are computed, also remember which solutions are positive
   In progress, only compute the trig functions once.*/
testtriple(a,b,c)=
{
  local(ba,bb,bc,sa,sb,sc,ma,mb,mc,ra,rb,rc,e0,e1,e2,maxbound,t,y,done,ta,tb,tc);

  /* boolean arrays -- 1 if we know we can solve, 0 otherwise */
  ba=vector(a,k,0);
  bb=vector(b,k,0);
  bc=vector(c,k,0);

  /* sine products for radermacher sums */
  sa=vector(a-1,k,sin(Pi*k*b/a)*sin(Pi*k*c/a));
  sb=vector(b-1,k,sin(Pi*k*a/b)*sin(Pi*k*c/b));
  sc=vector(c-1,k,sin(Pi*k*a/c)*sin(Pi*k*b/c));
 
  /* cosines for rademacher sums */

  /* memoization for rademacher sums 
     The m arrays are boolean -- 1 if we have computed the result  0 if we haven't.
     The r arrays contain the rademacher sum. */
  ma=vector(a,k,0);  
  ra=vector(a,k,0);  

  mb=vector(b,k,0);  
  rb=vector(b,k,0);  

  mc=vector(c,k,0);  
  rc=vector(c,k,0);  

  /* the coefficients of the polynomial part */
  e2 = 1/(2*a*b*c);
  e1 = e2*(a+b+c);
  e0 = (1/12)*(3/a + 3/b + 3/c + a/(b*c) + b/(a*c) + c/(a*b));

  maxbound=floor(sqrt(3*a*b*c+2*a));
  t=maxbound;
  ta=t%a+1;
  tb=t%b+1;
  tc=t%c+1;
  done=0;
  while(!done,
      /* we need the tiny maxbound trick to get around the terminating when
         k+a has been checked and is solveable, but k-a is not.  We should only hit it on
         termination, so it does not seem worth too much extra effort. */
      if(((ba[ta] == 0) && (bb[tb] == 0) && (bc[tc] == 0)) || ((t+a) <= maxbound), 
       if(!ma[ta],ra[ta]= sum(k=1,a-1,cos((Pi*k/a)*(-2*t+b+c))/sa[k]);ma[ta]=1,);
       if(!mb[tb],rb[tb]= sum(k=1,b-1,cos((Pi*k/b)*(-2*t+a+c))/sb[k]);mb[tb]=1,);
       if(!mc[tc],rc[tc]= sum(k=1,c-1,cos((Pi*k/c)*(-2*t+a+b))/sc[k]);mc[tc]=1,);
       y=round(e0 - t*e1 + (t^2)*e2 - ra[ta]/(4*a) - rb[tb]/(4*b) -rc[tc]/(4*c)),
       y=17);
    if(y>0,ba[ta]=1;bb[tb]=1;bc[tc]=1;t--;ta=t%a+1;tb=t%b+1;tc=t%c+1,
      if(maxbound-t<a,
        maxbound=maxbound+a;t=maxbound;ta=t%a+1;tb=t%b+1;tc=t%c+1,
        done=1)); 
  );
  print("found ",a," ",b," ",c," ",t);
  if(!validateSoln(t,a,b,c),print("shift"),); 
  t;
}

/* Find a random triple that is RPIP and that is neither almost arithmetic or redundant
and solve for f(a,b,c) */

genrand(maxrange)=
{
  local(a,b,c,t);
  a=2;
  b=2;
  c=2;
  while(gcd(a,b)!=1 || gcd(b,c)!= 1 || gcd(a,c) != 1 || (2*b-c)%a==0 || isredundant(a,b,c),
    a=random(maxrange)+3;
    b=random(maxrange)+3;
    c=random(maxrange)+3;
    if(a>b,t=a;a=b;b=t,);
    if(a>c,t=a;a=c;c=b;b=t,if(b>c,t=b;b=c;c=t,)));
  testtriple(a,b,c);
}
