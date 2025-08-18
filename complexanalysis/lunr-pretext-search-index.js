var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "About This Book",
  "body": " About This Book   And what is the use of a book, thought Alice, without pictures or conversations?   Lewis Carroll ( Alice in Wonderland )    A First Course in Complex Analysis was written for a one-semester undergraduate course developed at Binghamton University (SUNY) and San Francisco State University, and has been adopted at numerous other institutions. For many of our students, Complex Analysis is their first rigorous analysis (if not mathematics) class they take, and this book reflects this very much. We tried to rely on as few concepts from Real Analysis as possible. In particular, series and sequences are treated from scratch, which has the consequence that power series are introduced late in the course. The goal our book works toward is the Residue Theorem, including some nontraditional applications from both continuous and discrete mathematics. More than 250 exercises and numerous SageMath prompts are spread throughout the text.  A printed paperback version of this open textbook is available from Orthogonal Publishing or your favorite bookseller.  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "About the Authors",
  "body": " About the Authors   The hardest thing being with a mathematician is that they always have problems.  Tendai Chitewere     Matthias Beck is a professor in the Mathematics Department at San Francisco State University. His research interests are in geometric combinatorics and analytic number theory. He is the author of three other books, Computing the Continuous Discretely: Integer-point Enumeration in Polyhedra (with Sinai Robins, Springer 2007 & 2015), The Art of Proof: Basic Training for Deeper Mathematics (with Ross Geoghegan, Springer 2010), and Combinatorial Reciprocity Theorems: An Invitation to Enumerative Geometric Combinatorics (with Raman Sanyal, AMS 2018).     Gerald Marchesi was a lecturer faculty in the Department of Mathematical Sciences at Binghamton University (SUNY).  Dennis Pixton is a professor emeritus in the Department of Mathematical Sciences at Binghamton University (SUNY). His research interests are in dynamical systems and formal languages.  Lucas Sabalka is an applied mathematician at a technology company in Lincoln, Nebraska. He works on 3-dimensional computer vision applications. He was formerly a professor of mathematics at St. Louis University, after postdoctoral positions at UC Davis and Binghamton University (SUNY). His mathematical research interests are in geometric group theory, low dimensional topology, and computational algebra.    "
},
{
  "id": "frontmatter-6",
  "level": "1",
  "url": "frontmatter-6.html",
  "type": "Preface",
  "number": "",
  "title": "A Note to Instructors",
  "body": " A Note to Instructors   There are two versions of math in the lives of many Americans: the strange and boring subject that they encountered in classrooms and an interesting set of ideas that is the math of the world, and is curiously different and surprisingly engaging. Our task is to introduce this second version to today's students, get them excited about math, and prepare them for the future.  Jo Boaler   The material in this book should be more than enough for a typical semester-long undergraduate course in complex analysis; our experience taught us that there is more content in this book than fits into one semester. Depending on the nature of your course and its place in your department's overall curriculum, some sections can be either partially omitted or their definitions and theorems can be assumed true without delving into proofs. contains optional longer homework problems that could also be used as group projects at the end of a course.  We would be happy to hear from anyone who has adopted our book for their course, as well as suggestions, corrections, or other comments.  "
},
{
  "id": "frontmatter-7",
  "level": "1",
  "url": "frontmatter-7.html",
  "type": "Preface",
  "number": "",
  "title": "Acknowledgements",
  "body": " Acknowledgements   Inspiration is constantly in the air. It's up to us to develop the sensitivity to pick up on it.  Herbie Hancock   We thank our students who made many suggestions for and found errors in the text. Special thanks go to Sheldon Axler, Collin Bleak, Pierre-Alexandre Bliman, Matthew Brin, David Covert, Andrew Hwang, Manoj Keshari, Jeff Knisley, John McCleary, Sharma Pallekonda, Joshua Palmatier, and Dmytro Savchuk for comments, suggestions, and additions after teaching from this book.  The PreTeXt conversion of our book was heavily supported by David Austin and Christina Safranski; we owe them much gratitude. David, in particular, provided the graphics (produced via PreFigure ). We thank the PreTeXt support group, in particular Rob Beezer, David Farmer, Oscar Levin, and Andrew Scholer, for sharing their wisdom.  We thank Lon Mitchell for his initiative and support for the print version of our book with Orthogonal Publishing, and Bob Chaffer for allowing us to feature his art on the book's cover.  We are grateful to the American Institute of Mathematics for including our book in their Open Textbook Initiative .  "
},
{
  "id": "sec_defalg",
  "level": "1",
  "url": "sec_defalg.html",
  "type": "Section",
  "number": "1.1",
  "title": "Definitions and Algebraic Properties",
  "body": " Definitions and Algebraic Properties  There are many equivalent ways to think about a complex number, each of which is useful in its own right. In this section, we begin with a formal definition of a complex number. We then interpret this formal definition in more useful and easier-to-work-with algebraic language. Later we will see several more ways of thinking about complex numbers.    The complex numbers are pairs of real numbers, , equipped with the addition  and the multiplication  . complex number  real number  addition  multiplication     One reason to believe that the definitions of these binary operations are acceptable is that is an extension of , in the sense that the complex numbers of the form behave just like real numbers: . binary operation   So we can think of the real numbers being embedded in as those complex numbers whose second coordinate is zero. embedding of into   The following result states the algebraic structure that we established with our definitions.    The set of complex numbers endowed with the operations of addition and multiplication is a field. More specifically, this means that for all complex numbers , , and , field      What we are stating here can be compressed in the language of algebra: equations say that is an Abelian group with identity  ; equations say that is an Abelian group with identity . group  identity   The proof of Proposition is straightforward but nevertheless makes for good practice (see ). We give one sample, for :   By our definition for complex addition and properties of additive inverses in , .   The definition of complex multiplication implies the innocent looking statement .  This identity together with the fact that allows an alternative notation for complex numbers. The latter implies that we can write .  If we think in the spirit of our remark about embedding into of and as the real numbers and , then this means that we can write any complex number as a linear combination of and , with the real coefficients and . Now , in turn, can be thought of as the real number 1. So if we give a special name, say , then the complex number that we used to call can be written as or  .  We invite you to check that the definitions of our binary operations and are coherent with the usual real arithmetic rules if we think of complex numbers as given in the form .  The open-source mathematics software SageMath can handle complex numbers and functions; we will provide sample code throughout this book to get you started. In particular for readers of the print version of this book, you can execute sage commands, e.g., via the SageMathCell .  SageMath     The second complex number in is the (multiplicative) inverse of .     The number is called the real part and the imaginary part These names have historical reasons: people thought of complex numbers as unreal, imagined. of the complex number and are often denoted as and . real part  imaginary part       The identity now reads . In fact, much more can now be said with the introduction of the square root of . It is not just that has a root, but every nonconstant polynomial has a root in : root  polynomial    Fundamental Theorem of Algebra  fundamental theorem of algebra   Every nonconstant polynomial of degree has roots (counting multiplicity) in .    The proof of this theorem requires some (important) machinery, so we defer its proof and an extended discussion of it to (see ).  "
},
{
  "id": "def-complex-number",
  "level": "2",
  "url": "sec_defalg.html#def-complex-number",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  The complex numbers are pairs of real numbers, , equipped with the addition  and the multiplication  . complex number  real number  addition  multiplication    "
},
{
  "id": "alg",
  "level": "2",
  "url": "sec_defalg.html#alg",
  "type": "Proposition",
  "number": "1.1.2",
  "title": "",
  "body": "  The set of complex numbers endowed with the operations of addition and multiplication is a field. More specifically, this means that for all complex numbers , , and , field     "
},
{
  "id": "sec_defalg-10",
  "level": "2",
  "url": "sec_defalg.html#sec_defalg-10",
  "type": "Proof",
  "number": "1.1.1",
  "title": "",
  "body": " By our definition for complex addition and properties of additive inverses in , .  "
},
{
  "id": "sec_defalg-20",
  "level": "2",
  "url": "sec_defalg.html#sec_defalg-20",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  The number is called the real part and the imaginary part These names have historical reasons: people thought of complex numbers as unreal, imagined. of the complex number and are often denoted as and . real part  imaginary part    "
},
{
  "id": "sec_defalg-24",
  "level": "2",
  "url": "sec_defalg.html#sec_defalg-24",
  "type": "Theorem",
  "number": "1.1.4",
  "title": "Fundamental Theorem of Algebra.",
  "body": " Fundamental Theorem of Algebra  fundamental theorem of algebra   Every nonconstant polynomial of degree has roots (counting multiplicity) in .   "
},
{
  "id": "geomprop",
  "level": "1",
  "url": "geomprop.html",
  "type": "Section",
  "number": "1.2",
  "title": "From Algebra to Geometry and Back",
  "body": " From Algebra to Geometry and Back  Although we just introduced a new way of writing complex numbers, let's for a moment return to the -notation. complex plane It suggests that we can think of a complex number as a two-dimensional real vector. vector When plotting these vectors in the plane , we will call the -axis the real axis and the -axis the imaginary axis . imaginary axis  real axis  axis real  axis imaginary The addition that we defined for complex numbers resembles vector addition; see . The analogy stops at multiplication: there is no usual multiplication of two vectors in that gives another vector, and certainly not one that agrees with our definition of the product of two complex numbers.   Addition of complex numbers.      z1=(3,5)  z2=(-4.5,2)  s = z1+z2           z_1       z_2       z_1+z_2         Any vector in is defined by its two coordinates. On the other hand, it is also determined by its length and the angle it encloses with, say, the positive real axis; let's define these concepts thoroughly.    The absolute value (also called the modulus ) of is and an argument of is a number such that . modulus  absolute value  argument      A given complex number has infinitely many possible arguments. For instance, the number lies on the positive real axis, and so has argument , but we could just as well say it has argument , , , or for any integer . The number has modulus , and every real number is an argument. Aside from the exceptional case of , for any complex number , the arguments of all differ by a multiple of , just as we saw for the example .   SageMath returns the argument in the range .    The absolute value of the difference of two vectors has a nice geometric interpretation:    Let be two complex numbers, thought of as vectors in , and let denote the distance between (the endpoints of) the two vectors in (see ). Then . distance of complex numbers      Let and . From geometry we know that .  This is the definition of . Since and , this is also equal to .    Geometry behind the distance between two complex numbers.      z1=(3,5)  z2=(-4.5,2)  d = z1-z2      z_1       z_2       z_1-z_2        geometric interpretation of multiplication   That simply says that the vector from to has the same length as the vector from to .  It is very useful to keep this geometric interpretation in mind when thinking about the absolute value of the difference of two complex numbers.  One reason to introduce the absolute value and argument of a complex number is that they allow us to give a geometric interpretation for the multiplication of two complex numbers. Let's say we have two complex numbers: , with absolute value and argument , and , with absolute value and argument . This means we can write and . To compute the product, we make use of some classic trigonometric identities: trigonometric identities  .  So the absolute value of the product is and one of its arguments is . Geometrically, we are multiplying the lengths of the two vectors representing our two complex numbers and adding their angles measured with respect to the positive real axis. You should convince yourself that there is no problem with the fact that there are many possible arguments for complex numbers, as both cosine and sine are periodic functions with period .    Multiplication of complex numbers.      polar(r,t)=(r*cos(t), r*sin(t))  r1=2  r2=4  t1=0.9  t2=2.7  z1=polar(r1,t1)  z2=polar(r2,t2)  z3=polar(6,t1+t2)     \\phi_1     z_1      \\phi_2     z_2      \\phi_1+\\phi_2     z_1z_2         In view of the above calculation, it should come as no surprise that we will have to deal with quantities of the form (where is some real number) quite a bit. To save space, bytes, ink, etc., we introduce a shortcut notation and define . shows three examples.   Three sample complex numbers of the form .      polar(r,t)=(r*cos(t), r*sin(t))  z1=polar(1,pi\/4)  z2=polar(1,7*pi\/8)  z3=polar(1,3*pi\/2)     e^{\\frac{\\pi i}{4}} = \\frac1{\\sqrt{2}}+i\\frac{1}{\\sqrt{2}}    e^{\\frac{7\\pi i}{8}}    e^{-\\frac{\\pi i}{2}}=-i         At this point, this exponential notation is indeed purely a notation. In particular, while our notation proves  Euler's formula  , this simply follows from the facts and . The connection between the numbers , , , and the complex exponential function (and thus the number ) is somewhat deeper. We'll explore this in . We will later see in that it has an intimate connection to the complex exponential function. For now, we motivate this maybe strange seeming definition by collecting some of its properties:    For any ,                             .       You are encouraged to prove them (see ); again we give a sample (f).   By definition of ,     implies that for any integers and . Thus numbers of the form with play a pivotal role in solving equations of the form , which is reason to give them a special name.    A root of unity is a number of the form for some integers and . root of unity Equivalently (by ), a root of unity is a complex number such that for some positive integer . In this case, we call an root of unity . If is the smallest positive integer with the property , then is a primitive root of unity . root of unity primitive  primitive root of unity       The roots of unity are and . The latter two are primitive roots of unity.     SageMath can picture roots of unity:   With our new notation, the sentence the complex number has absolute value and argument now becomes the identity .  The left-hand side is often called the rectangular form , and the right-hand side the polar form of this complex number. polar form  rectangular form   We now have five different ways of thinking about a complex number: the formal definition, in rectangular form, in polar form, and geometrically, using Cartesian coordinates or polar coordinates. Each of these ways is useful in different situations, and translating between them is an essential ingredient in complex analysis. This list is not exhaustive; see, e.g., .  Various ways of thinking about a complex number  We collect the various ways we've seen of describing a complex number.   Formal definition  A complex number is formally defined to be an ordered pair of real numbers , as given in .    Rectangular form   We frequently represent a complex number as , and we may visualize the number using Cartesian coordinates.       z=(3,4)    x    y    z          Exponential form   Similarly, a complex number also has an exponential form and can be visualized using polar coordinates.       z=(3,4)   \\theta     r    z            "
},
{
  "id": "fig_addition",
  "level": "2",
  "url": "geomprop.html#fig_addition",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Addition of complex numbers.      z1=(3,5)  z2=(-4.5,2)  s = z1+z2           z_1       z_2       z_1+z_2        "
},
{
  "id": "geomprop-5",
  "level": "2",
  "url": "geomprop.html#geomprop-5",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "  The absolute value (also called the modulus ) of is and an argument of is a number such that . modulus  absolute value  argument    "
},
{
  "id": "prop_distance",
  "level": "2",
  "url": "geomprop.html#prop_distance",
  "type": "Proposition",
  "number": "1.2.3",
  "title": "",
  "body": "  Let be two complex numbers, thought of as vectors in , and let denote the distance between (the endpoints of) the two vectors in (see ). Then . distance of complex numbers    "
},
{
  "id": "geomprop-13",
  "level": "2",
  "url": "geomprop.html#geomprop-13",
  "type": "Proof",
  "number": "1.2.1",
  "title": "",
  "body": " Let and . From geometry we know that .  This is the definition of . Since and , this is also equal to .  "
},
{
  "id": "distfig",
  "level": "2",
  "url": "geomprop.html#distfig",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " Geometry behind the distance between two complex numbers.      z1=(3,5)  z2=(-4.5,2)  d = z1-z2      z_1       z_2       z_1-z_2        geometric interpretation of multiplication  "
},
{
  "id": "geomprop-19",
  "level": "2",
  "url": "geomprop.html#geomprop-19",
  "type": "Figure",
  "number": "1.2.5",
  "title": "",
  "body": " Multiplication of complex numbers.      polar(r,t)=(r*cos(t), r*sin(t))  r1=2  r2=4  t1=0.9  t2=2.7  z1=polar(r1,t1)  z2=polar(r2,t2)  z3=polar(6,t1+t2)     \\phi_1     z_1      \\phi_2     z_2      \\phi_1+\\phi_2     z_1z_2        "
},
{
  "id": "fig_rootsof1",
  "level": "2",
  "url": "geomprop.html#fig_rootsof1",
  "type": "Figure",
  "number": "1.2.6",
  "title": "",
  "body": " Three sample complex numbers of the form .      polar(r,t)=(r*cos(t), r*sin(t))  z1=polar(1,pi\/4)  z2=polar(1,7*pi\/8)  z3=polar(1,3*pi\/2)     e^{\\frac{\\pi i}{4}} = \\frac1{\\sqrt{2}}+i\\frac{1}{\\sqrt{2}}    e^{\\frac{7\\pi i}{8}}    e^{-\\frac{\\pi i}{2}}=-i       "
},
{
  "id": "easyexp",
  "level": "2",
  "url": "geomprop.html#easyexp",
  "type": "Proposition",
  "number": "1.2.7",
  "title": "",
  "body": "  For any ,                             .      "
},
{
  "id": "geomprop-26",
  "level": "2",
  "url": "geomprop.html#geomprop-26",
  "type": "Proof",
  "number": "1.2.2",
  "title": "",
  "body": " By definition of ,   "
},
{
  "id": "geomprop-28",
  "level": "2",
  "url": "geomprop.html#geomprop-28",
  "type": "Definition",
  "number": "1.2.8",
  "title": "",
  "body": "  A root of unity is a number of the form for some integers and . root of unity Equivalently (by ), a root of unity is a complex number such that for some positive integer . In this case, we call an root of unity . If is the smallest positive integer with the property , then is a primitive root of unity . root of unity primitive  primitive root of unity    "
},
{
  "id": "geomprop-29",
  "level": "2",
  "url": "geomprop.html#geomprop-29",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": "  The roots of unity are and . The latter two are primitive roots of unity.   "
},
{
  "id": "sec_geometricprops",
  "level": "1",
  "url": "sec_geometricprops.html",
  "type": "Section",
  "number": "1.3",
  "title": "Geometric Properties",
  "body": " Geometric Properties  From the chain of basic inequalities (or, alternatively, by arguing with basic geometric properties of triangles), we obtain the inequalities .  The square of the absolute value has the nice property .  This is one of many reasons to give the process of passing from to a special name.    The number is the (complex) conjugate of . conjugate We denote the conjugate by .     Geometrically, conjugating means reflecting the vector corresponding to with respect to the real axis, as shown in .        z=(3.5,2)  zbar=(3.5,-2)     z    \\overline{z}       The complex conjugate is obtained by reflecting across the real axis.   The following proposition collects some basic properties of the conjugate.    For any ,                                            .       The proofs of these properties are straightforward (see ); once more we give a sample (b).   Let and . Then    We note that the property yields a neat formula for the inverse of a nonzero complex number, which is implicit already in : .  A famous geometric inequality (which holds, more generally, for vectors in ) goes as follows.   Triangle inequality    triangle inequality For any we have .    By drawing a picture in the complex plane, you should be able to come up with a geometric proof of the triangle inequality. Here we proceed algebraically:   We make extensive use of : , where the inequality follows from . Taking square roots on the left- and right-hand sides proves our claim.   For future reference we list several useful variants of the triangle inequality:    For , we have the following relations:   The triangle inequality: .    The reverse triangle inequality: . reverse triangle inequality  triangle inequality reverse     The triangle inequality for sums: .       The first item ( ) is just a rewrite of the original triangle inequality, using the fact that , and ( ) follows by induction. The proof of the reverse triangle inequality is left as .  "
},
{
  "id": "sec_geometricprops-5",
  "level": "2",
  "url": "sec_geometricprops.html#sec_geometricprops-5",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  The number is the (complex) conjugate of . conjugate We denote the conjugate by .   "
},
{
  "id": "fig-conjugate",
  "level": "2",
  "url": "sec_geometricprops.html#fig-conjugate",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": "      z=(3.5,2)  zbar=(3.5,-2)     z    \\overline{z}       The complex conjugate is obtained by reflecting across the real axis.  "
},
{
  "id": "conjugation",
  "level": "2",
  "url": "sec_geometricprops.html#conjugation",
  "type": "Proposition",
  "number": "1.3.3",
  "title": "",
  "body": "  For any ,                                            .      "
},
{
  "id": "sec_geometricprops-12",
  "level": "2",
  "url": "sec_geometricprops.html#sec_geometricprops-12",
  "type": "Proof",
  "number": "1.3.1",
  "title": "",
  "body": " Let and . Then   "
},
{
  "id": "lem_triangleineq",
  "level": "2",
  "url": "sec_geometricprops.html#lem_triangleineq",
  "type": "Proposition",
  "number": "1.3.4",
  "title": "Triangle inequality.",
  "body": " Triangle inequality    triangle inequality For any we have .   "
},
{
  "id": "sec_geometricprops-17",
  "level": "2",
  "url": "sec_geometricprops.html#sec_geometricprops-17",
  "type": "Proof",
  "number": "1.3.2",
  "title": "",
  "body": " We make extensive use of : , where the inequality follows from . Taking square roots on the left- and right-hand sides proves our claim.  "
},
{
  "id": "cor_triangleineq",
  "level": "2",
  "url": "sec_geometricprops.html#cor_triangleineq",
  "type": "Corollary",
  "number": "1.3.5",
  "title": "",
  "body": "  For , we have the following relations:   The triangle inequality: .    The reverse triangle inequality: . reverse triangle inequality  triangle inequality reverse     The triangle inequality for sums: .      "
},
{
  "id": "sec_topologyintro",
  "level": "1",
  "url": "sec_topologyintro.html",
  "type": "Section",
  "number": "1.4",
  "title": "Elementary Topology of the Plane",
  "body": " Elementary Topology of the Plane  In we saw that the complex numbers , which were initially defined algebraically, can be identified with the points in the Euclidean plane . Euclidean plane In this section we collect some definitions and results concerning the topology of the plane. plane  topology    Sample circle and disk.       x  y      C[2+i,2]    D[-2,\\frac13]        In , we interpreted as the distance between the complex numbers and , viewed as points in the plane. So if we fix a complex number and a positive real number , then all satisfying form the set of points at distance from ; that is, this set is the circle with center and radius , which we denote by circle    The inside of this circle is called the open disk with center and radius ; we use the notation . open disk  disk open   Note that does not include the points on . illustrates these definitions.  Next we need some terminology for talking about subsets of .    Suppose is a subset of .   A point is an interior point of if some open disk with center is a subset of . interior point     A point is a boundary point of if every open disk centered at contains a point in and also a point that is not in . boundary point     A point is an accumulation point of if every open disk centered at contains a point of different from . accumulation point     A point is an isolated point of if some open disk centered at contains no point of other than . isolated point        The idea is that if you don't move too far from an interior point of then you remain in ; but at a boundary point you can make an arbitrarily small move and get to a point inside and you can also make an arbitrarily small move and get to a point outside .    A set is open if all its points are interior points. A set is closed if it contains all its boundary points. open set  closed set       For and , the sets and are open. The closed disk  is an example of a closed set. closed disk  disk closed     A given set might be neither open nor closed. The complex plane and the empty set  are (the only sets that are) both open and closed. empty set     The boundary  of a set is the set of all boundary points of . boundary The interior of is the set of all interior points of . The closure of is the set . closure       The closure of the open disk is . The boundary of is the circle .      The set is bounded if for some . bounded     One notion that is somewhat subtle in the complex domain is the idea of connectedness . Intuitively, a set is connected if it is in one piece. In a set is connected if and only if it is an interval, so there is little reason to discuss the matter. However, in the plane there is a vast variety of connected subsets.    Two sets are separated if there are disjoint open sets so that and . separated A set is connected if it is impossible to find two separated nonempty sets whose union is . connected A region is a connected open set. region     The idea of separation is that the two open sets and ensure that and cannot just stick together. It is usually easy to check that a set is not connected. On the other hand, it is hard to use the above definition to show that a set is connected, since we have to rule out any possible separation.    The intervals and on the real axis are separated: There are infinitely many choices for and that work; one choice is and , depicted in . Hence is not connected.   The intervals and are separated.       x  y              One type of connected set that we will use frequently is a path.    A path (or curve ) in is a continuous function , where is a closed interval in . curve  path We may think of as a parametrization of the image that is painted by the path and will often write this parametrization as . The path is smooth  smooth if is differentiable and the derivative is continuous and nonzero. There is a subtlety here, because is defined on a closed interval. For to be smooth, we demand both that exists for all , and that and exist.     This definition uses the calculus notions of continuity and differentiability; that is, being continuous means that for all  , and the derivative of at is defined by .     shows two examples of paths. On the left, we see the path parametrized by while the path shown on the right is    Two paths and their parametrizations; is smooth and is continuous and piecewise smooth (a term which we will define in ).       x  y   f(t)=(-2+2*cos(t), 2*sin(t))  g1(t)=(3,t-2)  g2(t)=(6-t,1\/2*(t-1))  g(t)=chi_co(0,3,t)*g1(t) + chi_cc(3,5,t)*g2(t)       \\gamma_1(t)    \\gamma_2(t)          We remark that each path comes with an orientation , i.e., a sense of direction. orientation For example, the path in is different from , even though both and yield the same picture: features a counter-clockwise orientation, where as that of is clockwise.  It is a customary and practical abuse of notation to use the same letter for the path and its parametrization. We emphasize that a path must have a parametrization, and that the parametrization must be defined and continuous on a closed and bounded interval . Since topologically we may identify with , a path can be specified by giving two continuous real-valued functions of a real variable, and , and setting .    The path is simple if is one-to-one, with the possible exception that (in plain English: the path does not cross itself). A path is closed if . simple  closed path  path closed       The unit circle  , parametrized, e.g., by , is a simple closed path. unit circle     As seems intuitively clear, any path is connected; however, a proof of this fact requires a bit more preparation in topology. The same goes for the following result, which gives a useful property of open connected sets.    If any two points in can be connected by a path in , then is connected. Conversely, if is open and connected, then any two points of can be connected by a path in ; in fact, we can connect any two points of by a chain of horizontal and vertical segments lying in .    Here a chain of segments in means the following: there are points so that and are the endpoints of a horizontal or vertical segment in , for all . chain of segments (It is not hard to parametrize such a chain, so it determines a path.)    Consider the open unit disk  . disk unit  unit disk Any two points in can be connected by a chain of at most two segments in , and so is connected. Now let ; this is the punctured disk obtained by removing the center from . Then is open and it is connected, but now you may need more than two segments to connect points. For example, you need three segments to connect to since we cannot go through .    We remark that the second part of is not generally true if is not open. For example, circles are connected but there is no way to connect two distinct points of a circle by a chain of segments that are subsets of the circle. A more extreme example, discussed in topology texts, is the topologist's sine curve, which is a connected set that contains points that cannot be connected by a path of any sort within .  "
},
{
  "id": "fig_circles",
  "level": "2",
  "url": "sec_topologyintro.html#fig_circles",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " Sample circle and disk.       x  y      C[2+i,2]    D[-2,\\frac13]       "
},
{
  "id": "sec_topologyintro-8",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-8",
  "type": "Definition",
  "number": "1.4.2",
  "title": "",
  "body": "  Suppose is a subset of .   A point is an interior point of if some open disk with center is a subset of . interior point     A point is a boundary point of if every open disk centered at contains a point in and also a point that is not in . boundary point     A point is an accumulation point of if every open disk centered at contains a point of different from . accumulation point     A point is an isolated point of if some open disk centered at contains no point of other than . isolated point       "
},
{
  "id": "sec_topologyintro-10",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-10",
  "type": "Definition",
  "number": "1.4.3",
  "title": "",
  "body": "  A set is open if all its points are interior points. A set is closed if it contains all its boundary points. open set  closed set    "
},
{
  "id": "sec_topologyintro-11",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-11",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  For and , the sets and are open. The closed disk  is an example of a closed set. closed disk  disk closed    "
},
{
  "id": "sec_topologyintro-13",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-13",
  "type": "Definition",
  "number": "1.4.5",
  "title": "",
  "body": "  The boundary  of a set is the set of all boundary points of . boundary The interior of is the set of all interior points of . The closure of is the set . closure    "
},
{
  "id": "sec_topologyintro-14",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-14",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": "  The closure of the open disk is . The boundary of is the circle .   "
},
{
  "id": "sec_topologyintro-15",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-15",
  "type": "Definition",
  "number": "1.4.7",
  "title": "",
  "body": "  The set is bounded if for some . bounded    "
},
{
  "id": "sec_topologyintro-17",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-17",
  "type": "Definition",
  "number": "1.4.8",
  "title": "",
  "body": "  Two sets are separated if there are disjoint open sets so that and . separated A set is connected if it is impossible to find two separated nonempty sets whose union is . connected A region is a connected open set. region    "
},
{
  "id": "sec_topologyintro-19",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-19",
  "type": "Example",
  "number": "1.4.9",
  "title": "",
  "body": "  The intervals and on the real axis are separated: There are infinitely many choices for and that work; one choice is and , depicted in . Hence is not connected.   The intervals and are separated.       x  y             "
},
{
  "id": "def_smooth",
  "level": "2",
  "url": "sec_topologyintro.html#def_smooth",
  "type": "Definition",
  "number": "1.4.11",
  "title": "",
  "body": "  A path (or curve ) in is a continuous function , where is a closed interval in . curve  path We may think of as a parametrization of the image that is painted by the path and will often write this parametrization as . The path is smooth  smooth if is differentiable and the derivative is continuous and nonzero. There is a subtlety here, because is defined on a closed interval. For to be smooth, we demand both that exists for all , and that and exist.    "
},
{
  "id": "example-paths",
  "level": "2",
  "url": "sec_topologyintro.html#example-paths",
  "type": "Example",
  "number": "1.4.12",
  "title": "",
  "body": "   shows two examples of paths. On the left, we see the path parametrized by while the path shown on the right is    Two paths and their parametrizations; is smooth and is continuous and piecewise smooth (a term which we will define in ).       x  y   f(t)=(-2+2*cos(t), 2*sin(t))  g1(t)=(3,t-2)  g2(t)=(6-t,1\/2*(t-1))  g(t)=chi_co(0,3,t)*g1(t) + chi_cc(3,5,t)*g2(t)       \\gamma_1(t)    \\gamma_2(t)         "
},
{
  "id": "sec_topologyintro-26",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-26",
  "type": "Definition",
  "number": "1.4.14",
  "title": "",
  "body": "  The path is simple if is one-to-one, with the possible exception that (in plain English: the path does not cross itself). A path is closed if . simple  closed path  path closed    "
},
{
  "id": "sec_topologyintro-27",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-27",
  "type": "Example",
  "number": "1.4.15",
  "title": "",
  "body": "  The unit circle  , parametrized, e.g., by , is a simple closed path. unit circle    "
},
{
  "id": "connbysegments",
  "level": "2",
  "url": "sec_topologyintro.html#connbysegments",
  "type": "Theorem",
  "number": "1.4.16",
  "title": "",
  "body": "  If any two points in can be connected by a path in , then is connected. Conversely, if is open and connected, then any two points of can be connected by a path in ; in fact, we can connect any two points of by a chain of horizontal and vertical segments lying in .   "
},
{
  "id": "sec_topologyintro-31",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-31",
  "type": "Example",
  "number": "1.4.17",
  "title": "",
  "body": "  Consider the open unit disk  . disk unit  unit disk Any two points in can be connected by a chain of at most two segments in , and so is connected. Now let ; this is the punctured disk obtained by removing the center from . Then is open and it is connected, but now you may need more than two segments to connect points. For example, you need three segments to connect to since we cannot go through .   "
},
{
  "id": "chapter1-exercises",
  "level": "1",
  "url": "chapter1-exercises.html",
  "type": "Exercises",
  "number": "1.5",
  "title": "Exercises",
  "body": "   Let and . Compute the following:                                                                  Find the real and imaginary parts of each of the following:      for any                                for any        Find the absolute value and conjugate of each of the following:           ,             ,             ,             ,        Write in polar form:                                                                                  Write in rectangular form:                                                      Write in both polar and rectangular form:                    Show that the quadratic formula works. That is, for with , prove that the roots of the equation are .  Here we define if the discriminant  is negative. discriminant       Use the quadratic formula to solve the following equations.                                         Find all solutions of the equation .           Fix and . Show that the equation has a solution if and only if . When solutions exist, show the solution set is a circle.      Find all solutions to the following equations:                                            Show that if and only if .      Show that      is a real number if and only if .       is either real or purely imaginary if and only if .       Prove Proposition .      Show that if then or .      Prove Proposition .      Fix a positive integer . Prove that the solutions to the equation are precisely where .    To show that every solution of is of this form, first prove that it must be of the form for some , then write for some integer and some real number , and then argue that has to be zero.      Show that and deduce from this closed formulas for and .     and       Fix a positive integer and a complex number . Find all solutions to .    Write in terms of polar coordinates.      Use Proposition to derive the triple angle formulas:                    Given , define the matrix . Show that and .  (This means that the set , equipped with the usual addition and multiplication of matrices, behaves exactly like .)      Prove Proposition .      Sketch the following sets in the complex plane:                                                              Suppose is a polynomial with real coefficients. polynomial      Prove that .      Prove that if and only if .       Prove the reverse triangle inequality ( ( )) . reverse triangle inequality       Use to show that for every on the circle .      Sketch the sets defined by the following constraints and determine whether they are open, closed, or neither; bounded; connected.                                                What are the boundaries of the sets in ?      Let be the set of points satisfying either is real and , or , or or .     Sketch the set , being careful to indicate exactly the points that are in .      Determine the interior points of .      Determine the boundary points of .      Determine the isolated points of .       The set in can be written in three different ways as the union of two disjoint nonempty separated subsets. Describe them, and in each case say briefly why the subsets are separated.      Show that the union of two regions with nonempty intersection is itself a region.      Show that if and is closed, then . Similarly, if and is open, show that is contained in the interior of .      Find a parametrization for each of the following paths:     the circle , oriented counter-clockwise    For instance: , .      the line segment from to     For instance: , .      the top half of the circle , oriented clockwise    For instance: ,       the rectangle with vertices , oriented counter-clockwise      the ellipse , oriented counter-clockwise       Draw the path parametrized by .      Let be the annulus determined by the inequalities . This is a connected open set. Find the maximum number of horizontal and vertical segments in needed to connect two points of .    "
},
{
  "id": "ex_1_0",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_0",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "  Let and . Compute the following:                                                               "
},
{
  "id": "ex_1_1",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_1",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "  Find the real and imaginary parts of each of the following:      for any                                for any     "
},
{
  "id": "ex_1_2",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_2",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "  Find the absolute value and conjugate of each of the following:           ,             ,             ,             ,     "
},
{
  "id": "ex_1_3",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_3",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": "  Write in polar form:                                                                               "
},
{
  "id": "ex_1_4",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_4",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "",
  "body": "  Write in rectangular form:                                                   "
},
{
  "id": "chapter1-exercises-6",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-6",
  "type": "Exercise",
  "number": "1.5.6",
  "title": "",
  "body": "  Write in both polar and rectangular form:                 "
},
{
  "id": "chapter1-exercises-7",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-7",
  "type": "Exercise",
  "number": "1.5.7",
  "title": "",
  "body": "  Show that the quadratic formula works. That is, for with , prove that the roots of the equation are .  Here we define if the discriminant  is negative. discriminant    "
},
{
  "id": "chapter1-exercises-8",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-8",
  "type": "Exercise",
  "number": "1.5.8",
  "title": "",
  "body": "  Use the quadratic formula to solve the following equations.                                      "
},
{
  "id": "ex_1_6",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_6",
  "type": "Exercise",
  "number": "1.5.9",
  "title": "",
  "body": "  Find all solutions of the equation .        "
},
{
  "id": "chapter1-exercises-10",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-10",
  "type": "Exercise",
  "number": "1.5.10",
  "title": "",
  "body": "  Fix and . Show that the equation has a solution if and only if . When solutions exist, show the solution set is a circle.   "
},
{
  "id": "ex_1_5",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_5",
  "type": "Exercise",
  "number": "1.5.11",
  "title": "",
  "body": "  Find all solutions to the following equations:                                         "
},
{
  "id": "chapter1-exercises-12",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-12",
  "type": "Exercise",
  "number": "1.5.12",
  "title": "",
  "body": "  Show that if and only if .   "
},
{
  "id": "chapter1-exercises-13",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-13",
  "type": "Exercise",
  "number": "1.5.13",
  "title": "",
  "body": "  Show that      is a real number if and only if .       is either real or purely imaginary if and only if .    "
},
{
  "id": "ex_alg",
  "level": "2",
  "url": "chapter1-exercises.html#ex_alg",
  "type": "Exercise",
  "number": "1.5.14",
  "title": "",
  "body": "  Prove Proposition .   "
},
{
  "id": "chapter1-exercises-15",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-15",
  "type": "Exercise",
  "number": "1.5.15",
  "title": "",
  "body": "  Show that if then or .   "
},
{
  "id": "ex_easyexp",
  "level": "2",
  "url": "chapter1-exercises.html#ex_easyexp",
  "type": "Exercise",
  "number": "1.5.16",
  "title": "",
  "body": "  Prove Proposition .   "
},
{
  "id": "ex_rootofunity",
  "level": "2",
  "url": "chapter1-exercises.html#ex_rootofunity",
  "type": "Exercise",
  "number": "1.5.17",
  "title": "",
  "body": "  Fix a positive integer . Prove that the solutions to the equation are precisely where .    To show that every solution of is of this form, first prove that it must be of the form for some , then write for some integer and some real number , and then argue that has to be zero.   "
},
{
  "id": "ex_5throotsof1",
  "level": "2",
  "url": "chapter1-exercises.html#ex_5throotsof1",
  "type": "Exercise",
  "number": "1.5.18",
  "title": "",
  "body": "  Show that and deduce from this closed formulas for and .     and    "
},
{
  "id": "chapter1-exercises-19",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-19",
  "type": "Exercise",
  "number": "1.5.19",
  "title": "",
  "body": "  Fix a positive integer and a complex number . Find all solutions to .    Write in terms of polar coordinates.   "
},
{
  "id": "chapter1-exercises-20",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-20",
  "type": "Exercise",
  "number": "1.5.20",
  "title": "",
  "body": "  Use Proposition to derive the triple angle formulas:                 "
},
{
  "id": "ex_Casmatrices",
  "level": "2",
  "url": "chapter1-exercises.html#ex_Casmatrices",
  "type": "Exercise",
  "number": "1.5.21",
  "title": "",
  "body": "  Given , define the matrix . Show that and .  (This means that the set , equipped with the usual addition and multiplication of matrices, behaves exactly like .)   "
},
{
  "id": "ex_conjugation",
  "level": "2",
  "url": "chapter1-exercises.html#ex_conjugation",
  "type": "Exercise",
  "number": "1.5.22",
  "title": "",
  "body": "  Prove Proposition .   "
},
{
  "id": "chapter1-exercises-23",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-23",
  "type": "Exercise",
  "number": "1.5.23",
  "title": "",
  "body": "  Sketch the following sets in the complex plane:                                                           "
},
{
  "id": "realpolynomialb",
  "level": "2",
  "url": "chapter1-exercises.html#realpolynomialb",
  "type": "Exercise",
  "number": "1.5.24",
  "title": "",
  "body": "  Suppose is a polynomial with real coefficients. polynomial      Prove that .      Prove that if and only if .    "
},
{
  "id": "ex_reversetriangle",
  "level": "2",
  "url": "chapter1-exercises.html#ex_reversetriangle",
  "type": "Exercise",
  "number": "1.5.25",
  "title": "",
  "body": "  Prove the reverse triangle inequality ( ( )) . reverse triangle inequality    "
},
{
  "id": "chapter1-exercises-26",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-26",
  "type": "Exercise",
  "number": "1.5.26",
  "title": "",
  "body": "  Use to show that for every on the circle .   "
},
{
  "id": "ex_complex_inequalities",
  "level": "2",
  "url": "chapter1-exercises.html#ex_complex_inequalities",
  "type": "Exercise",
  "number": "1.5.27",
  "title": "",
  "body": "  Sketch the sets defined by the following constraints and determine whether they are open, closed, or neither; bounded; connected.                                             "
},
{
  "id": "chapter1-exercises-28",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-28",
  "type": "Exercise",
  "number": "1.5.28",
  "title": "",
  "body": "  What are the boundaries of the sets in ?   "
},
{
  "id": "ex_set_G",
  "level": "2",
  "url": "chapter1-exercises.html#ex_set_G",
  "type": "Exercise",
  "number": "1.5.29",
  "title": "",
  "body": "  Let be the set of points satisfying either is real and , or , or or .     Sketch the set , being careful to indicate exactly the points that are in .      Determine the interior points of .      Determine the boundary points of .      Determine the isolated points of .    "
},
{
  "id": "chapter1-exercises-30",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-30",
  "type": "Exercise",
  "number": "1.5.30",
  "title": "",
  "body": "  The set in can be written in three different ways as the union of two disjoint nonempty separated subsets. Describe them, and in each case say briefly why the subsets are separated.   "
},
{
  "id": "chapter1-exercises-31",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-31",
  "type": "Exercise",
  "number": "1.5.31",
  "title": "",
  "body": "  Show that the union of two regions with nonempty intersection is itself a region.   "
},
{
  "id": "chapter1-exercises-32",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-32",
  "type": "Exercise",
  "number": "1.5.32",
  "title": "",
  "body": "  Show that if and is closed, then . Similarly, if and is open, show that is contained in the interior of .   "
},
{
  "id": "ex_parametrizations",
  "level": "2",
  "url": "chapter1-exercises.html#ex_parametrizations",
  "type": "Exercise",
  "number": "1.5.33",
  "title": "",
  "body": "  Find a parametrization for each of the following paths:     the circle , oriented counter-clockwise    For instance: , .      the line segment from to     For instance: , .      the top half of the circle , oriented clockwise    For instance: ,       the rectangle with vertices , oriented counter-clockwise      the ellipse , oriented counter-clockwise    "
},
{
  "id": "ex_diamondpath",
  "level": "2",
  "url": "chapter1-exercises.html#ex_diamondpath",
  "type": "Exercise",
  "number": "1.5.34",
  "title": "",
  "body": "  Draw the path parametrized by .   "
},
{
  "id": "chapter1-exercises-35",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-35",
  "type": "Exercise",
  "number": "1.5.35",
  "title": "",
  "body": "  Let be the annulus determined by the inequalities . This is a connected open set. Find the maximum number of horizontal and vertical segments in needed to connect two points of .   "
},
{
  "id": "sec_optionallab-alt",
  "level": "1",
  "url": "sec_optionallab-alt.html",
  "type": "Worksheet",
  "number": "1.6",
  "title": "Optional Lab",
  "body": " Optional Lab    Convert the following complex numbers into their polar representation, i.e., give the absolute value and the argument of the number.  After you have finished computing these numbers, check your answers with the open-source software platform Geogebra. You might search for geogebra complex function grapher . geogebra     Convert the following complex numbers given in polar representation into their rectangular representation.  After you have finished computing these numbers, check your answers with Geogebra.    Pick your favorite five numbers , , , , and from the ones that you've played around with and put them in the table below, in both rectangular and polar form. Apply the functions listed to your numbers. Think about which representation is more helpful in each instance.                   rectangular         polar                                                                                                                                    Play with other examples until you get a feel for these functions.     "
},
{
  "id": "sec_optionallab-alt-2-1",
  "level": "2",
  "url": "sec_optionallab-alt.html#sec_optionallab-alt-2-1",
  "type": "Worksheet Exercise",
  "number": "1.6.1",
  "title": "",
  "body": " Convert the following complex numbers into their polar representation, i.e., give the absolute value and the argument of the number.  After you have finished computing these numbers, check your answers with the open-source software platform Geogebra. You might search for geogebra complex function grapher . geogebra   "
},
{
  "id": "sec_optionallab-alt-2-2",
  "level": "2",
  "url": "sec_optionallab-alt.html#sec_optionallab-alt-2-2",
  "type": "Worksheet Exercise",
  "number": "1.6.2",
  "title": "",
  "body": " Convert the following complex numbers given in polar representation into their rectangular representation.  After you have finished computing these numbers, check your answers with Geogebra.  "
},
{
  "id": "sec_optionallab-alt-2-3",
  "level": "2",
  "url": "sec_optionallab-alt.html#sec_optionallab-alt-2-3",
  "type": "Worksheet Exercise",
  "number": "1.6.3",
  "title": "",
  "body": " Pick your favorite five numbers , , , , and from the ones that you've played around with and put them in the table below, in both rectangular and polar form. Apply the functions listed to your numbers. Think about which representation is more helpful in each instance.                   rectangular         polar                                                                                                                                 "
},
{
  "id": "sec_optionallab-alt-2-4",
  "level": "2",
  "url": "sec_optionallab-alt.html#sec_optionallab-alt-2-4",
  "type": "Worksheet Exercise",
  "number": "1.6.4",
  "title": "",
  "body": "  Play with other examples until you get a feel for these functions.   "
},
{
  "id": "sec_limitsandcontinuity",
  "level": "1",
  "url": "sec_limitsandcontinuity.html",
  "type": "Section",
  "number": "2.1",
  "title": "Limits and Continuity",
  "body": " Limits and Continuity    A (complex) function  is a map from a subset to ; in this situation we will write and call the domain of . domain  function This means that each element gets mapped to exactly one complex number, called the image of and usually denoted by . image of a point     So far there is nothing that makes complex functions any more special than, say, functions from to . In fact, we can construct many familiar looking functions from the standard calculus repertoire, such as (the identity map ), identity map  , , or . The former three could be defined on all of , whereas for the latter we have to exclude the origin from the domain. On the other hand, we could construct some functions that make use of a certain representation of , for example, , , or .  Next we define limits of a function. The philosophy of the following definition is not restricted to complex functions, but for sake of simplicity we state it only for those functions. limit of a function     Suppose and is an accumulation point of . accumulation point If is a complex number such that for every we can find so that, for all satisfying , we have , then is the limit of as approaches ; in short, .    This definition is the same as is found in most calculus texts. The reason we require that is an accumulation point of the domain is just that we need to be sure that there are points of the domain that are arbitrarily close to . Just as in the real case, our definition (i.e., the part that says ) does not require that is in the domain of and, if is in the domain of , the definition explicitly ignores the value of .    Let's prove that .  Given , we need to determine such that implies . We rewrite .  If we choose , say, smaller than 1 then the factor on the right can be bounded by 3 (draw a picture!). This means that any should do the trick: in this case, implies .  This was a proof written out in a way one might come up with it. Here's a short, neat version:  Given , choose . Then implies from which we conclude that . This proves .     Just as in the real case, the limit is unique if it exists (see ). It is often useful to investigate limits by restricting the way the point approaches . The following result is a direct consequence of the definition.    Suppose and . Suppose and is an accumulation point of . If is the restriction of to , then exists and has the value .    The definition of limit in the complex domain has to be treated with a little more care than its real companion; this is illustrated by the following example.    The limit of as does not exist.  To see this, we try to compute this limit as on the real and on the imaginary axis. In the first case, we can write , and hence .  In the second case, we write where , and then .  So we get a different limit depending on the direction from which we approach 0. Proposition then implies that the limit of as does not exist.    On the other hand, the following usual limit rules are valid for complex functions; the proofs of these rules are everything but trivial and make for nice practice (see ); as usual, we give a sample proof.    Let and be complex functions with domain , let be an accumulation point of , and let . If and exist, then    .     .     .     where in the last identity we also require that .    We will prove ( ). Assume that (otherwise there is nothing to prove), and let and . Then we know that, given , we can find such that and .  Thus, choosing , we infer that implies .  Here we used the triangle inequality ( Proposition ). This proves that , which was our claim.    Because the definition of the limit is somewhat elaborate, the following fundamental definition looks almost trivial. trivial     Suppose . If and either is an isolated point of or then is continuous at . continuous More generally, is continuous on if is continuous at every .    However, in almost all proofs using continuity it is necessary to interpret this in terms of 's and 's. So here is an alternate definition:    Suppose and . Then is continuous at if, for every positive real number , there is a positive real number so that . continuous     See for a proof that these definitions are equivalent.    We already proved (in ) that the function given by is continuous at . You're invited (see ) to extend our proof to show that, in fact, this function is continuous on .  On the other hand, let be given by In we proved that is not continuous at . However, this is its only point of discontinuity (see ).    Just as in the real case, we can take the limit inside a continuous function, by considering composition of functions.    The image of the function is the set . image of a function If the image of is contained in the domain of another function , we define the composition  through . composition       Let with image contained in , and let . Suppose is an accumulation point of , , and is continuous at . Then ; in short, .    Given , we know there is an such that . For this , we also know there is a such that . Stringing these two implications together gives that . We have thus proved that .    "
},
{
  "id": "sec_limitsandcontinuity-2",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#sec_limitsandcontinuity-2",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  A (complex) function  is a map from a subset to ; in this situation we will write and call the domain of . domain  function This means that each element gets mapped to exactly one complex number, called the image of and usually denoted by . image of a point    "
},
{
  "id": "sec_limitsandcontinuity-5",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#sec_limitsandcontinuity-5",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "  Suppose and is an accumulation point of . accumulation point If is a complex number such that for every we can find so that, for all satisfying , we have , then is the limit of as approaches ; in short, .   "
},
{
  "id": "exam_limitexists",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#exam_limitexists",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "  Let's prove that .  Given , we need to determine such that implies . We rewrite .  If we choose , say, smaller than 1 then the factor on the right can be bounded by 3 (draw a picture!). This means that any should do the trick: in this case, implies .  This was a proof written out in a way one might come up with it. Here's a short, neat version:  Given , choose . Then implies from which we conclude that . This proves .   "
},
{
  "id": "restrictedlimit",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#restrictedlimit",
  "type": "Proposition",
  "number": "2.1.4",
  "title": "",
  "body": "  Suppose and . Suppose and is an accumulation point of . If is the restriction of to , then exists and has the value .   "
},
{
  "id": "exam_limitdoesnotexist",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#exam_limitdoesnotexist",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  The limit of as does not exist.  To see this, we try to compute this limit as on the real and on the imaginary axis. In the first case, we can write , and hence .  In the second case, we write where , and then .  So we get a different limit depending on the direction from which we approach 0. Proposition then implies that the limit of as does not exist.   "
},
{
  "id": "limits",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#limits",
  "type": "Proposition",
  "number": "2.1.6",
  "title": "",
  "body": "  Let and be complex functions with domain , let be an accumulation point of , and let . If and exist, then    .     .     .     where in the last identity we also require that .    We will prove ( ). Assume that (otherwise there is nothing to prove), and let and . Then we know that, given , we can find such that and .  Thus, choosing , we infer that implies .  Here we used the triangle inequality ( Proposition ). This proves that , which was our claim.   "
},
{
  "id": "sec_limitsandcontinuity-16",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#sec_limitsandcontinuity-16",
  "type": "Definition",
  "number": "2.1.7",
  "title": "",
  "body": "  Suppose . If and either is an isolated point of or then is continuous at . continuous More generally, is continuous on if is continuous at every .   "
},
{
  "id": "sec_limitsandcontinuity-18",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#sec_limitsandcontinuity-18",
  "type": "Definition",
  "number": "2.1.8",
  "title": "",
  "body": "  Suppose and . Then is continuous at if, for every positive real number , there is a positive real number so that . continuous    "
},
{
  "id": "sec_limitsandcontinuity-20",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#sec_limitsandcontinuity-20",
  "type": "Example",
  "number": "2.1.9",
  "title": "",
  "body": "  We already proved (in ) that the function given by is continuous at . You're invited (see ) to extend our proof to show that, in fact, this function is continuous on .  On the other hand, let be given by In we proved that is not continuous at . However, this is its only point of discontinuity (see ).   "
},
{
  "id": "sec_limitsandcontinuity-22",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#sec_limitsandcontinuity-22",
  "type": "Definition",
  "number": "2.1.10",
  "title": "",
  "body": "  The image of the function is the set . image of a function If the image of is contained in the domain of another function , we define the composition  through . composition    "
},
{
  "id": "funoflimit",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#funoflimit",
  "type": "Proposition",
  "number": "2.1.11",
  "title": "",
  "body": "  Let with image contained in , and let . Suppose is an accumulation point of , , and is continuous at . Then ; in short, .    Given , we know there is an such that . For this , we also know there is a such that . Stringing these two implications together gives that . We have thus proved that .   "
},
{
  "id": "sec_diffholom",
  "level": "1",
  "url": "sec_diffholom.html",
  "type": "Section",
  "number": "2.2",
  "title": "Differentiability and Holomorphicity",
  "body": " Differentiability and Holomorphicity  The fact that simple functions such as do not have limits at certain points illustrates something special about complex numbers that has no parallel in the reals we can express a function in a very compact way in one variable, yet it shows some peculiar behavior in the limit. We will repeatedly notice this kind of behavior; one reason is that when trying to compute a limit of a function as, say, , we have to allow to approach the point in any way. On the real line there are only two directions to approach from the left or from the right (or some combination of those two). In the complex plane, we have an additional dimension to play with. This means that the statement A complex function has a limit is in many senses stronger than the statement A real function has a limit . This difference becomes apparent most baldly when studying derivatives.    Suppose is a complex function and is an interior point of . The derivative of at is defined as , provided this limit exists. derivative In this case, is called differentiable at . differentiable   If is differentiable for all points in an open disk centered at then is called holomorphic Some sources use the term analytic instead of holomorphic . As we will see in Chapter 8, in our context, these two terms are synonymous. Technically, though, these two terms have different definitions. Since we will be using the above definition, we will stick with using the term holomorphic instead of the term analytic . at . holomorphic The function is holomorphic on the open set if it is differentiable (and hence holomorphic) at every point in . Functions that are differentiable (and hence holomorphic) in the whole complex plane are called entire . entire       The function given by is entire, that is, holomorphic in : For any , .    The difference quotient limit can be rewritten as . difference quotient This equivalent definition is sometimes easier to handle. Note that need not be a real number but can rather approach zero from anywhere in the complex plane.  The notions of differentiability and holomorphicity are not interchangeable:    The function given by is differentiable at and nowhere else; in particular, is not holomorphic at . To see why, let's write . Then .  If then taking the limit of as thus means taking the limit of as , which gives , a number that depends on , i.e., on the direction that approaches . Hence this limit does not exist.  On the other hand, if then the right-hand side above equals . Hence , which implies, by , that .      The function given by is nowhere differentiable: , which does not exist, as discussed in .     The basic properties for derivatives are similar to those we know from real calculus. In fact, the following rules follow mostly from properties of the limit.    Suppose and are differentiable at and is differentiable at . Then    for any           provided that      for any nonzero integer      is continuous at      .       We give a sample proof (b):  . Note that we have used the definition of the derivative and Proposition ( ) & ( ) (the addition and multiplication rules for limits).    A prominent application of the differentiation rules is the composition of a complex function with a path . The proof of the following result gives a preview.    Suppose is holomorphic at with and suppose and are two smooth paths that pass through , making an angle of with each other. Then transforms and into smooth paths which meet at , and the transformed paths make an angle of with each other.    In words, a holomorphic function with nonzero derivative preserves angles. Functions that preserve angles in this way are called conformal . conformal  function conformal    Let and be parametrizations of the two paths such that . Then (considered as a vector) is the tangent vector of at the point , and is the tangent vector of at . Moving to the image of and under , the tangent vector of at the point is , and similarly, the tangent vector of at the point is . This means that the action of multiplies the two tangent vectors and by the same nonzero complex number , and so the two tangent vectors got dilated by (which does not affect their direction) and rotated by the same angle (an argument of ).    SageMath allows you to draw images behind complex functions. Try to explain what's behind this picture:   We end this section with yet another differentiation rule, that for inverse functions. As in the real case, this rule is only defined for functions that are bijections. bijection     A function is one-to-one if, for every image , there is a unique such that . one-to-one The function is onto  onto if every has a preimage (that is, there exists such that ). A bijection is a function that is both one-to-one and onto. If is a bijection, then is the inverse of if for all and for all ; in other words, the composition is the identity function on , and is the identity function on .      Suppose are open sets, is a bijection, is the inverse function inverse function of , and . If is differentiable at with and is continuous at , then is differentiable at with .    Since for all , .  Now define and set This is continuous at and by continuity of , so we can apply Proposition :     "
},
{
  "id": "sec_diffholom-3",
  "level": "2",
  "url": "sec_diffholom.html#sec_diffholom-3",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Suppose is a complex function and is an interior point of . The derivative of at is defined as , provided this limit exists. derivative In this case, is called differentiable at . differentiable   If is differentiable for all points in an open disk centered at then is called holomorphic Some sources use the term analytic instead of holomorphic . As we will see in Chapter 8, in our context, these two terms are synonymous. Technically, though, these two terms have different definitions. Since we will be using the above definition, we will stick with using the term holomorphic instead of the term analytic . at . holomorphic The function is holomorphic on the open set if it is differentiable (and hence holomorphic) at every point in . Functions that are differentiable (and hence holomorphic) in the whole complex plane are called entire . entire    "
},
{
  "id": "exam_zcubedentire",
  "level": "2",
  "url": "sec_diffholom.html#exam_zcubedentire",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  The function given by is entire, that is, holomorphic in : For any , .   "
},
{
  "id": "exam_zbarsquareddiff",
  "level": "2",
  "url": "sec_diffholom.html#exam_zbarsquareddiff",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  The function given by is differentiable at and nowhere else; in particular, is not holomorphic at . To see why, let's write . Then .  If then taking the limit of as thus means taking the limit of as , which gives , a number that depends on , i.e., on the direction that approaches . Hence this limit does not exist.  On the other hand, if then the right-hand side above equals . Hence , which implies, by , that .   "
},
{
  "id": "sec_diffholom-8",
  "level": "2",
  "url": "sec_diffholom.html#sec_diffholom-8",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": "  The function given by is nowhere differentiable: , which does not exist, as discussed in .   "
},
{
  "id": "derivativerules",
  "level": "2",
  "url": "sec_diffholom.html#derivativerules",
  "type": "Proposition",
  "number": "2.2.5",
  "title": "",
  "body": "  Suppose and are differentiable at and is differentiable at . Then    for any           provided that      for any nonzero integer      is continuous at      .       We give a sample proof (b):  . Note that we have used the definition of the derivative and Proposition ( ) & ( ) (the addition and multiplication rules for limits).   "
},
{
  "id": "dernonzeroconformal",
  "level": "2",
  "url": "sec_diffholom.html#dernonzeroconformal",
  "type": "Proposition",
  "number": "2.2.6",
  "title": "",
  "body": "  Suppose is holomorphic at with and suppose and are two smooth paths that pass through , making an angle of with each other. Then transforms and into smooth paths which meet at , and the transformed paths make an angle of with each other.   "
},
{
  "id": "sec_diffholom-15",
  "level": "2",
  "url": "sec_diffholom.html#sec_diffholom-15",
  "type": "Proof",
  "number": "2.2.1",
  "title": "",
  "body": " Let and be parametrizations of the two paths such that . Then (considered as a vector) is the tangent vector of at the point , and is the tangent vector of at . Moving to the image of and under , the tangent vector of at the point is , and similarly, the tangent vector of at the point is . This means that the action of multiplies the two tangent vectors and by the same nonzero complex number , and so the two tangent vectors got dilated by (which does not affect their direction) and rotated by the same angle (an argument of ).  "
},
{
  "id": "sec_diffholom-19",
  "level": "2",
  "url": "sec_diffholom.html#sec_diffholom-19",
  "type": "Definition",
  "number": "2.2.7",
  "title": "",
  "body": "  A function is one-to-one if, for every image , there is a unique such that . one-to-one The function is onto  onto if every has a preimage (that is, there exists such that ). A bijection is a function that is both one-to-one and onto. If is a bijection, then is the inverse of if for all and for all ; in other words, the composition is the identity function on , and is the identity function on .   "
},
{
  "id": "inversederivative",
  "level": "2",
  "url": "sec_diffholom.html#inversederivative",
  "type": "Proposition",
  "number": "2.2.8",
  "title": "",
  "body": "  Suppose are open sets, is a bijection, is the inverse function inverse function of , and . If is differentiable at with and is continuous at , then is differentiable at with .    Since for all , .  Now define and set This is continuous at and by continuity of , so we can apply Proposition :    "
},
{
  "id": "sec_Cauchy-Riemann",
  "level": "1",
  "url": "sec_Cauchy-Riemann.html",
  "type": "Section",
  "number": "2.3",
  "title": "The Cauchy–Riemann Equations",
  "body": " The Cauchy Riemann Equations  When considering a real-valued function of two variables, there is no notion of the derivative of a function. For such a function, we instead only have partial derivatives and (and also directional derivatives) which depend on the way in which we approach a point .  For a complex-valued function , we now have a new concept of the derivative , which by definition cannot depend on the way in which we approach a point . It is logical, then, that there should be a relationship between the complex derivative and the partial derivatives   partial derivative  derivative partial (so this definition is exactly as in the real-valued case).  This relationship between the complex derivative and partial derivatives is very strong, and it is a powerful computational tool. It is described by the Cauchy Riemann equations , named after Augustin Louis Cauchy (1789 1857) and Georg Friedrich Bernhard Riemann (1826 1866), even though the equations appeared already in the works of Jean le Rond d'Alembert (1717 1783) and Leonhard Euler (1707 1783). Cauchy Riemann equations        Suppose is differentiable at . Then the partial derivatives of exist and satisfy and the derivative is given by .    Suppose is a complex function such that the partial derivatives and exist in an open disk centered at and are continuous at . If these partial derivatives satisfy then is differentiable at .       Before proving , we note several comments and give two applications. It is traditional, and often convenient, to write the function in terms of its real and imaginary parts. That is, we write where is the real part of and is the imaginary part. Then, using the usual shorthand and , . With this terminology we can rewrite as the pair of equations   As stated, parts (a) and (b) in are not quite converse statements. However, we will show in that if is holomorphic at then and have continuous partials (of any order) at . That is, in we will see that is holomorphic in an open set if and only if and have continuous partials that satisfy in .  If and satisfy and their second partials are also continuous, then , that is, (and an analogous identity for ). Functions with continuous second partials satisfying this partial differential equation on a region (though not necessarily ) are called harmonic on ; we will study such functions in . harmonic Again, as we will see later, if is holomorphic in an open set then the partials of any order of and exist; hence we will show that the real and imaginary parts of a function that is holomorphic in an open set are harmonic on that set.    We revisit Example and again consider given by . So are continuous on and satisfy . Thus by Theorem (b), is entire.      Revisiting Example (you saw that coming, didn't you?), we consider given by . Now , which satisfy only when . (The contrapositive of) (a) thus implies that is not differentiable on .     (a) If is differentiable at then . As we know by now, we must get the same result if we restrict to be on the real axis and if we restrict it to be on the imaginary axis. In the first case, and . In the second case, and . Thus we have shown that .  (b) Suppose the Cauchy Riemann equation holds and the partial derivatives and are continuous in an open disk centered at . Our goal is to prove that . By , . On the other hand, we can rewrite the difference quotient for as . Thus . We claim that both limits on the right-hand side are , so we have achieved our set goal. The fractions and are bounded in absolute value by , so we just need to see that the limits of the expressions in parentheses are . The second term on the right-hand side of has a limit of since, by definition, and taking the limit here as is the same as taking the limit as .  We cannot do something equivalent for the first term in , since now both and are involved, and both change as . Instead we apply the Mean-Value for real functions, We collect several theorems from calculus, such as the Mean-Value Theorem for real-valued functions, in . to the real and imaginary parts and of . gives real numbers such that . Thus . Because and are continuous at , , and so goes to 0 as , which we set out to prove.   "
},
{
  "id": "cre",
  "level": "2",
  "url": "sec_Cauchy-Riemann.html#cre",
  "type": "Theorem",
  "number": "2.3.1",
  "title": "",
  "body": "     Suppose is differentiable at . Then the partial derivatives of exist and satisfy and the derivative is given by .    Suppose is a complex function such that the partial derivatives and exist in an open disk centered at and are continuous at . If these partial derivatives satisfy then is differentiable at .      "
},
{
  "id": "sec_Cauchy-Riemann-9",
  "level": "2",
  "url": "sec_Cauchy-Riemann.html#sec_Cauchy-Riemann-9",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "  We revisit Example and again consider given by . So are continuous on and satisfy . Thus by Theorem (b), is entire.   "
},
{
  "id": "sec_Cauchy-Riemann-10",
  "level": "2",
  "url": "sec_Cauchy-Riemann.html#sec_Cauchy-Riemann-10",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": "  Revisiting Example (you saw that coming, didn't you?), we consider given by . Now , which satisfy only when . (The contrapositive of) (a) thus implies that is not differentiable on .   "
},
{
  "id": "sec_Cauchy-Riemann-11",
  "level": "2",
  "url": "sec_Cauchy-Riemann.html#sec_Cauchy-Riemann-11",
  "type": "Proof",
  "number": "2.3.1",
  "title": "",
  "body": " (a) If is differentiable at then . As we know by now, we must get the same result if we restrict to be on the real axis and if we restrict it to be on the imaginary axis. In the first case, and . In the second case, and . Thus we have shown that .  (b) Suppose the Cauchy Riemann equation holds and the partial derivatives and are continuous in an open disk centered at . Our goal is to prove that . By , . On the other hand, we can rewrite the difference quotient for as . Thus . We claim that both limits on the right-hand side are , so we have achieved our set goal. The fractions and are bounded in absolute value by , so we just need to see that the limits of the expressions in parentheses are . The second term on the right-hand side of has a limit of since, by definition, and taking the limit here as is the same as taking the limit as .  We cannot do something equivalent for the first term in , since now both and are involved, and both change as . Instead we apply the Mean-Value for real functions, We collect several theorems from calculus, such as the Mean-Value Theorem for real-valued functions, in . to the real and imaginary parts and of . gives real numbers such that . Thus . Because and are continuous at , , and so goes to 0 as , which we set out to prove.  "
},
{
  "id": "sec_constantfcts",
  "level": "1",
  "url": "sec_constantfcts.html",
  "type": "Section",
  "number": "2.4",
  "title": "Constant Functions",
  "body": " Constant Functions  As a sample application of the definition of the derivative of a complex function, we consider functions that have a derivative of . In a typical calculus course, one of the first applications of the Mean-Value Theorem for real-valued functions ( ) is to show that if a function has zero derivative everywhere on an interval then it must be constant.    If is an interval and is a real-valued function with defined and equal to for all , then there is a constant such that for all .     The Mean-Value says that for any , for some . Now , so the above equation yields . Since this is true for any , the function must be constant on .   We do not (yet) have a complex version of the Mean-Value Theorem, and so we will use a different argument to prove that a complex function whose derivative is always must be constant.  Our proof of required two key features of the function , both of which are somewhat obviously necessary. The first is that be differentiable everywhere in its domain. In fact, if is not differentiable everywhere, we can construct functions that have zero derivative almost everywhere but that have infinitely many values in their image.  The second key feature is that the interval is connected. It is certainly important for the domain to be connected in both the real and complex cases. For instance, if we define the function through then for all in the domain of , but is not constant. This may seem like a silly example, but it illustrates a pitfall to proving a function is constant that we must be careful of. Recall that a region of is an open connected subset.    If is a region and is a complex-valued function with defined and equal to for all , then is constant.     We will first show that is constant along horizontal segments and along vertical segments in .  Suppose that is a horizontal line segment in . Thus there is some number such that the imaginary part of any is . Now consider the real part of the function , for . Since is constant on , we can consider to be just a function of , the real part of . By assumption, , so for we have . Thus, by Proposition , is constant on .  We can argue the same way to see that the imaginary part of is constant on , since on . Since both the real and imaginary parts of are constant on , the function itself is constant on .  This same argument works for vertical segments, interchanging the roles of the real and imaginary parts. We have thus proved that is constant along horizontal segments and along vertical segments in . Now if and are two points in that can be connected by a path composed of horizontal and vertical segments, we conclude that . But any two points of a region may be connected by finitely many such segments by Theorem , so has the same value at any two points of , thus proving the theorem.   There are a number of surprising applications of ; see, e.g., and .  "
},
{
  "id": "lem_constant",
  "level": "2",
  "url": "sec_constantfcts.html#lem_constant",
  "type": "Proposition",
  "number": "2.4.1",
  "title": "",
  "body": "  If is an interval and is a real-valued function with defined and equal to for all , then there is a constant such that for all .   "
},
{
  "id": "sec_constantfcts-4",
  "level": "2",
  "url": "sec_constantfcts.html#sec_constantfcts-4",
  "type": "Proof",
  "number": "2.4.1",
  "title": "",
  "body": " The Mean-Value says that for any , for some . Now , so the above equation yields . Since this is true for any , the function must be constant on .  "
},
{
  "id": "derivative0",
  "level": "2",
  "url": "sec_constantfcts.html#derivative0",
  "type": "Theorem",
  "number": "2.4.2",
  "title": "",
  "body": "  If is a region and is a complex-valued function with defined and equal to for all , then is constant.   "
},
{
  "id": "sec_constantfcts-9",
  "level": "2",
  "url": "sec_constantfcts.html#sec_constantfcts-9",
  "type": "Proof",
  "number": "2.4.2",
  "title": "",
  "body": " We will first show that is constant along horizontal segments and along vertical segments in .  Suppose that is a horizontal line segment in . Thus there is some number such that the imaginary part of any is . Now consider the real part of the function , for . Since is constant on , we can consider to be just a function of , the real part of . By assumption, , so for we have . Thus, by Proposition , is constant on .  We can argue the same way to see that the imaginary part of is constant on , since on . Since both the real and imaginary parts of are constant on , the function itself is constant on .  This same argument works for vertical segments, interchanging the roles of the real and imaginary parts. We have thus proved that is constant along horizontal segments and along vertical segments in . Now if and are two points in that can be connected by a path composed of horizontal and vertical segments, we conclude that . But any two points of a region may be connected by finitely many such segments by Theorem , so has the same value at any two points of , thus proving the theorem.  "
},
{
  "id": "chapter2-exercises",
  "level": "1",
  "url": "chapter2-exercises.html",
  "type": "Exercises",
  "number": "2.5",
  "title": "Exercises",
  "body": "   Use the definition of limit to show for any that .      Evaluate the following limits or explain why they don't exist.                              Prove that, if a limit exists, then it is unique.      Prove .      Let and suppose is an accumulation point of . Show that if and only if .       is useful for showing that limits do not exist, but it is not at all useful for showing that a limit does exist. For example, define . Show that the limits of at along all straight lines through the origin exist and are equal, but does not exist.    Consider the limit along the parabola .      Suppose that and . Prove that if and only if .      Show that the function given by is continuous on .      Show that the function given by is continuous on .      Determine where each of the following functions is continuous:                    Show that the two definitions of continuity in are equivalent. Consider separately the cases where is an accumulation point of and where is an isolated point of .      Consider the function given by . Apply the definition of the derivative to give a direct proof that .      Prove .      Prove .      Find the derivative of the function , where with . When is ?      Prove that if is given by a polynomial in then is entire. What can you say if is given by a polynomial polynomial in and ?      Prove or find a counterexample: If and are real valued and continuous, then is continuous; if and are (real) differentiable then is (complex) differentiable.      Where are the following functions differentiable? Where are they holomorphic? Determine their derivatives at points where they are differentiable.          Use the Cauchy Riemann equations .    differentiable and holomorphic in with derivative            nowhere differentiable or holomorphic           differentiable only on with derivative , nowhere holomorphic           nowhere differentiable or holomorphic           differentiable and holomorphic in with derivative            nowhere differentiable or holomorphic           differentiable only at with derivative , nowhere holomorphic           differentiable only at with derivative , nowhere holomorphic           differentiable only at with derivative , nowhere holomorphic           differentiable and holomorphic in with derivative            differentiable only at with derivative , nowhere holomorphic           differentiable only at with derivative , nowhere holomorphic       Jacobian The Jacobian of a transformation , is the determinant of the matrix . Show that if is holomorphic then the Jacobian equals .      Define if , and if . Show that satisfies the Cauchy Riemann equation at , yet is not differentiable at . Why doesn't this contradict (b)?      Prove: If is holomorphic in the region and always real valued, then is constant in .    Use the Cauchy Riemann equations to show that .      Prove: If and are both holomorphic in the region then is constant in .      Suppose is entire and can be written as , that is, the real part of depends only on and the imaginary part of depends only on . Prove that for some and .      Suppose is entire, with real and imaginary parts and satisfying for all . Show that is constant.      Prove that the Cauchy Riemann equations take on the following form in polar coordinates: .      For each of the following functions , find a function such that is holomorphic in some region. Maximize that region.                                            Is harmonic on ? What about ?             Consider the general real homogeneous quadratic function , where , and are real constants.     Show that is harmonic if and only if .      If is harmonic then show that it is the real part of a function of the form for some . Give a formula for in terms of , and .       Re-prove by using the formula for given in .      Prove that, If is a region and is a complex-valued function with defined and equal to for all , then for some .    Use to show that , and then use again for the function .    "
},
{
  "id": "chapter2-exercises-1",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-1",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "",
  "body": "  Use the definition of limit to show for any that .   "
},
{
  "id": "ex_2_1",
  "level": "2",
  "url": "chapter2-exercises.html#ex_2_1",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": "  Evaluate the following limits or explain why they don't exist.                           "
},
{
  "id": "ex_limitunique",
  "level": "2",
  "url": "chapter2-exercises.html#ex_limitunique",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": "  Prove that, if a limit exists, then it is unique.   "
},
{
  "id": "ex_limits",
  "level": "2",
  "url": "chapter2-exercises.html#ex_limits",
  "type": "Exercise",
  "number": "2.5.4",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "ex_limiteq0",
  "level": "2",
  "url": "chapter2-exercises.html#ex_limiteq0",
  "type": "Exercise",
  "number": "2.5.5",
  "title": "",
  "body": "  Let and suppose is an accumulation point of . Show that if and only if .   "
},
{
  "id": "chapter2-exercises-6",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-6",
  "type": "Exercise",
  "number": "2.5.6",
  "title": "",
  "body": "   is useful for showing that limits do not exist, but it is not at all useful for showing that a limit does exist. For example, define . Show that the limits of at along all straight lines through the origin exist and are equal, but does not exist.    Consider the limit along the parabola .   "
},
{
  "id": "chapter2-exercises-7",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-7",
  "type": "Exercise",
  "number": "2.5.7",
  "title": "",
  "body": "  Suppose that and . Prove that if and only if .   "
},
{
  "id": "ex_zsquaredcontinuous",
  "level": "2",
  "url": "chapter2-exercises.html#ex_zsquaredcontinuous",
  "type": "Exercise",
  "number": "2.5.8",
  "title": "",
  "body": "  Show that the function given by is continuous on .   "
},
{
  "id": "ex_zbaroverzcont",
  "level": "2",
  "url": "chapter2-exercises.html#ex_zbaroverzcont",
  "type": "Exercise",
  "number": "2.5.9",
  "title": "",
  "body": "  Show that the function given by is continuous on .   "
},
{
  "id": "chapter2-exercises-10",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-10",
  "type": "Exercise",
  "number": "2.5.10",
  "title": "",
  "body": "  Determine where each of the following functions is continuous:                 "
},
{
  "id": "ex_continuitydefs",
  "level": "2",
  "url": "chapter2-exercises.html#ex_continuitydefs",
  "type": "Exercise",
  "number": "2.5.11",
  "title": "",
  "body": "  Show that the two definitions of continuity in are equivalent. Consider separately the cases where is an accumulation point of and where is an isolated point of .   "
},
{
  "id": "chapter2-exercises-12",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-12",
  "type": "Exercise",
  "number": "2.5.12",
  "title": "",
  "body": "  Consider the function given by . Apply the definition of the derivative to give a direct proof that .   "
},
{
  "id": "chapter2-exercises-13",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-13",
  "type": "Exercise",
  "number": "2.5.13",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "ex_diffrules",
  "level": "2",
  "url": "chapter2-exercises.html#ex_diffrules",
  "type": "Exercise",
  "number": "2.5.14",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "chapter2-exercises-15",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-15",
  "type": "Exercise",
  "number": "2.5.15",
  "title": "",
  "body": "  Find the derivative of the function , where with . When is ?   "
},
{
  "id": "polynomialsholomorphic",
  "level": "2",
  "url": "chapter2-exercises.html#polynomialsholomorphic",
  "type": "Exercise",
  "number": "2.5.16",
  "title": "",
  "body": "  Prove that if is given by a polynomial in then is entire. What can you say if is given by a polynomial polynomial in and ?   "
},
{
  "id": "chapter2-exercises-17",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-17",
  "type": "Exercise",
  "number": "2.5.17",
  "title": "",
  "body": "  Prove or find a counterexample: If and are real valued and continuous, then is continuous; if and are (real) differentiable then is (complex) differentiable.   "
},
{
  "id": "ex_2_2",
  "level": "2",
  "url": "chapter2-exercises.html#ex_2_2",
  "type": "Exercise",
  "number": "2.5.18",
  "title": "",
  "body": "  Where are the following functions differentiable? Where are they holomorphic? Determine their derivatives at points where they are differentiable.          Use the Cauchy Riemann equations .    differentiable and holomorphic in with derivative            nowhere differentiable or holomorphic           differentiable only on with derivative , nowhere holomorphic           nowhere differentiable or holomorphic           differentiable and holomorphic in with derivative            nowhere differentiable or holomorphic           differentiable only at with derivative , nowhere holomorphic           differentiable only at with derivative , nowhere holomorphic           differentiable only at with derivative , nowhere holomorphic           differentiable and holomorphic in with derivative            differentiable only at with derivative , nowhere holomorphic           differentiable only at with derivative , nowhere holomorphic    "
},
{
  "id": "chapter2-exercises-19",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-19",
  "type": "Exercise",
  "number": "2.5.19",
  "title": "",
  "body": "  Jacobian The Jacobian of a transformation , is the determinant of the matrix . Show that if is holomorphic then the Jacobian equals .   "
},
{
  "id": "chapter2-exercises-20",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-20",
  "type": "Exercise",
  "number": "2.5.20",
  "title": "",
  "body": "  Define if , and if . Show that satisfies the Cauchy Riemann equation at , yet is not differentiable at . Why doesn't this contradict (b)?   "
},
{
  "id": "ex_realimpliesconst",
  "level": "2",
  "url": "chapter2-exercises.html#ex_realimpliesconst",
  "type": "Exercise",
  "number": "2.5.21",
  "title": "",
  "body": "  Prove: If is holomorphic in the region and always real valued, then is constant in .    Use the Cauchy Riemann equations to show that .   "
},
{
  "id": "ex_fandconjfimpliesconst",
  "level": "2",
  "url": "chapter2-exercises.html#ex_fandconjfimpliesconst",
  "type": "Exercise",
  "number": "2.5.22",
  "title": "",
  "body": "  Prove: If and are both holomorphic in the region then is constant in .   "
},
{
  "id": "chapter2-exercises-23",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-23",
  "type": "Exercise",
  "number": "2.5.23",
  "title": "",
  "body": "  Suppose is entire and can be written as , that is, the real part of depends only on and the imaginary part of depends only on . Prove that for some and .   "
},
{
  "id": "chapter2-exercises-24",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-24",
  "type": "Exercise",
  "number": "2.5.24",
  "title": "",
  "body": "  Suppose is entire, with real and imaginary parts and satisfying for all . Show that is constant.   "
},
{
  "id": "ex_crepolar",
  "level": "2",
  "url": "chapter2-exercises.html#ex_crepolar",
  "type": "Exercise",
  "number": "2.5.25",
  "title": "",
  "body": "  Prove that the Cauchy Riemann equations take on the following form in polar coordinates: .   "
},
{
  "id": "ex_harmconj",
  "level": "2",
  "url": "chapter2-exercises.html#ex_harmconj",
  "type": "Exercise",
  "number": "2.5.26",
  "title": "",
  "body": "  For each of the following functions , find a function such that is holomorphic in some region. Maximize that region.                                         "
},
{
  "id": "ex_225",
  "level": "2",
  "url": "chapter2-exercises.html#ex_225",
  "type": "Exercise",
  "number": "2.5.27",
  "title": "",
  "body": "  Is harmonic on ? What about ?          "
},
{
  "id": "chapter2-exercises-28",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-28",
  "type": "Exercise",
  "number": "2.5.28",
  "title": "",
  "body": "  Consider the general real homogeneous quadratic function , where , and are real constants.     Show that is harmonic if and only if .      If is harmonic then show that it is the real part of a function of the form for some . Give a formula for in terms of , and .    "
},
{
  "id": "ex_diffrulesViaCR",
  "level": "2",
  "url": "chapter2-exercises.html#ex_diffrulesViaCR",
  "type": "Exercise",
  "number": "2.5.29",
  "title": "",
  "body": "  Re-prove by using the formula for given in .   "
},
{
  "id": "ex_2ndderivative0",
  "level": "2",
  "url": "chapter2-exercises.html#ex_2ndderivative0",
  "type": "Exercise",
  "number": "2.5.30",
  "title": "",
  "body": "  Prove that, If is a region and is a complex-valued function with defined and equal to for all , then for some .    Use to show that , and then use again for the function .   "
},
{
  "id": "sec_mobius",
  "level": "1",
  "url": "sec_mobius.html",
  "type": "Section",
  "number": "3.1",
  "title": "Möbius Transformations",
  "body": " Möbius Transformations   Möbius transformation   The first class of functions that we will discuss in some detail are built from linear polynomials.    A linear fractional transformation is a function of the form where . linear fractional transformation If then is called a Möbius Named after August Ferdinand Möbius (1790 1868). transformation .     said that any polynomial in is an entire function, and so the linear fractional transformation is holomorphic in , unless (in which case is entire). If then implies , which means that a Möbius transformation will never take on the value . Our first proposition in this chapter says that with these small observations about the domain and image of a Möbius transformation, we obtain a class of bijections, which are quite special among complex functions. bijection    inverse function of a Möbius transformation     Let with . Then given by has the inverse function given by .    If this reminds you of the inverse of a matrix, you should do .  We remark that the formula for in works also when , except that in this case both domain and image of are ; see . In either case, we note that the inverse of a Möbius transformation is another Möbius transformation.    Consider the linear fractional transformation . This is a Möbius transformation (check the condition!) with domain whose inverse can be computed via , so that , with domain .      We first prove that is one-to-one. If , that is, , then , which can be rearranged to . Since this implies that . This shows that is one-to-one.   verifies that the Möbius transformation is the inverse of , and by what we have just proved, is also one-to-one. But this implies that is onto.   We remark that Möbius transformations provide an immediate application of Proposition , as the derivative of is and thus never zero. Proposition implies that Möbius transformations are conformal, conformal that is, they preserve angles. function conformal   Möbius transformations have even more fascinating geometric properties. En route to an example of such, we introduce some terminology. Special cases of Möbius transformations are translations  , dilations  , and inversion  . translation  dilation  inversion The next result says that if we understand these three special Möbius transformations, we understand them all.    Suppose is a linear fractional transformation. If then , and if then .  In particular, every linear fractional transformation is a composition of translations, dilations, and inversions.     Simplify.     Möbius transformations map circles and lines into circles and lines.     Translations and dilations certainly map circles and lines into circles and lines, so by Proposition , we only have to prove the statement of the theorem for the inversion .  The equation for a circle centered at with radius is , which we can transform to for some real numbers , , , and that satisfy (see ). The form is more convenient for us, because it includes the possibility that the equation describes a line (precisely when ).  Suppose satisfies ; we need to prove that satisfies a similar equation. Since , we can rewrite as . But this equation, in conjunction with , says that lies on a circle or line.     Continuing Example , consider again . For , , which is a real number. Thus Theorem implies that maps the unit circle to the real line.     demonstrates the effect that the inversion has on horizontal and vertical lines. In particular, the vertical line defined by is mapped into the circle of radius centered at .   Inversion maps vertical lines, shown on the left, into the circles centered on the real axis. Horizontal lines are mapped into circles centered on the imaginary axis.      b=4                   b=4     x0=k\/4      y0=k\/4           "
},
{
  "id": "sec_mobius-4",
  "level": "2",
  "url": "sec_mobius.html#sec_mobius-4",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  A linear fractional transformation is a function of the form where . linear fractional transformation If then is called a Möbius Named after August Ferdinand Möbius (1790 1868). transformation .   "
},
{
  "id": "inversemobius",
  "level": "2",
  "url": "sec_mobius.html#inversemobius",
  "type": "Proposition",
  "number": "3.1.2",
  "title": "",
  "body": "  Let with . Then given by has the inverse function given by .   "
},
{
  "id": "ex_mobiusinverse",
  "level": "2",
  "url": "sec_mobius.html#ex_mobiusinverse",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  Consider the linear fractional transformation . This is a Möbius transformation (check the condition!) with domain whose inverse can be computed via , so that , with domain .   "
},
{
  "id": "sec_mobius-12",
  "level": "2",
  "url": "sec_mobius.html#sec_mobius-12",
  "type": "Proof",
  "number": "3.1.1",
  "title": "",
  "body": " We first prove that is one-to-one. If , that is, , then , which can be rearranged to . Since this implies that . This shows that is one-to-one.   verifies that the Möbius transformation is the inverse of , and by what we have just proved, is also one-to-one. But this implies that is onto.  "
},
{
  "id": "transdilinv",
  "level": "2",
  "url": "sec_mobius.html#transdilinv",
  "type": "Proposition",
  "number": "3.1.4",
  "title": "",
  "body": "  Suppose is a linear fractional transformation. If then , and if then .  In particular, every linear fractional transformation is a composition of translations, dilations, and inversions.   "
},
{
  "id": "sec_mobius-16",
  "level": "2",
  "url": "sec_mobius.html#sec_mobius-16",
  "type": "Proof",
  "number": "3.1.2",
  "title": "",
  "body": " Simplify.  "
},
{
  "id": "circlestocircles",
  "level": "2",
  "url": "sec_mobius.html#circlestocircles",
  "type": "Theorem",
  "number": "3.1.5",
  "title": "",
  "body": "  Möbius transformations map circles and lines into circles and lines.   "
},
{
  "id": "sec_mobius-18",
  "level": "2",
  "url": "sec_mobius.html#sec_mobius-18",
  "type": "Proof",
  "number": "3.1.3",
  "title": "",
  "body": " Translations and dilations certainly map circles and lines into circles and lines, so by Proposition , we only have to prove the statement of the theorem for the inversion .  The equation for a circle centered at with radius is , which we can transform to for some real numbers , , , and that satisfy (see ). The form is more convenient for us, because it includes the possibility that the equation describes a line (precisely when ).  Suppose satisfies ; we need to prove that satisfies a similar equation. Since , we can rewrite as . But this equation, in conjunction with , says that lies on a circle or line.  "
},
{
  "id": "ex_mobiusinverse2",
  "level": "2",
  "url": "sec_mobius.html#ex_mobiusinverse2",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": "  Continuing Example , consider again . For , , which is a real number. Thus Theorem implies that maps the unit circle to the real line.   "
},
{
  "id": "fig-inversion",
  "level": "2",
  "url": "sec_mobius.html#fig-inversion",
  "type": "Figure",
  "number": "3.1.7",
  "title": "",
  "body": " Inversion maps vertical lines, shown on the left, into the circles centered on the real axis. Horizontal lines are mapped into circles centered on the imaginary axis.      b=4                   b=4     x0=k\/4      y0=k\/4          "
},
{
  "id": "sec_riemannspere",
  "level": "1",
  "url": "sec_riemannspere.html",
  "type": "Section",
  "number": "3.2",
  "title": "Infinity and the Cross Ratio",
  "body": " Infinity and the Cross Ratio  In the context of Möbius transformations, it is useful to introduce a formal way of saying that a function  blows up in absolute value, and this gives rise to a notion of infinity. infinity  limit infinity     Suppose .    means that for every we can find so that, for all satisfying , we have .     means that for every we can find so that, for all satisfying , we have .     means that for every we can find so that, for all satisfying , we have .     In the first definition we require that be an accumulation point of while in the second and third we require that be an extended accumulation point of , in the sense that for every there is some with .    As in , the limit, in any of these senses, is unique if it exists.    We claim that : Given , let . Then implies .      Let be a Möbius transformation with . Then .  To simplify the notation, introduce the constant . Given , let . Then implies, with the reverse triangle inequality ( ( )), that and so .    We stress that is not a number in , just as are not numbers in . However, we can extend  by adding on , if we are careful. We do so by realizing that we are always talking about a limit when handling . It turns out (see ) that the usual limit rules behave well when we mix complex numbers and . For example, if and is finite then the usual limit of sum = sum of limits rule still holds and gives . The following definition captures the philosophy of this paragraph.    The extended complex plane is the set , together with the following algebraic properties: For any ,        if then               if then .    complex plane extended  extended complex plane   The extended complex plane is also called the Riemann sphere or the complex projective line , denoted . complex projective line  Riemann sphere     If a calculation involving is not covered by the rules above then we must investigate the limit more carefully. For example, it may seem strange that is not defined, but if we take the limit of as we will get , even though the individual limits of and are both .  Now we reconsider Möbius transformations with in mind. For example, is now defined for and , with and , and so we might argue the proper domain for is actually . Let's consider the other basic types of Möbius transformations. A translation is now defined for , with , and a dilation (with ) is also defined for , with . Since every Möbius transformation can be expressed as a composition of translations, dilations and inversions ( ), we see that every Möbius transformation may be interpreted as a transformation of onto . This general case is summarized in the following extension of .    Suppose and , and consider defined through Then is a bijection.    This corollary also holds for if we then define .    Continuing and , consider once more the Möbius transformation . With the definitions and , we can extend to a function .    With on our mind we can also add some insight to . We recall that in , we proved that maps the unit circle to the real line. Essentially the same proof shows that, more generally, any circle passing through gets mapped to a line (see ). The original domain of was , so the point must be excluded from these circles. However, by thinking of as function from to , we can put back into the picture, and so transforms circles that pass through to straight lines plus  . If we remember that corresponds to being arbitrarily far away from any point in , we can visualize a line plus as a circle passing through . If we make this a definition, then can be expressed as: any Möbius transformation of transforms circles to circles .  We can take this remark a step further, based on the idea that three distinct points in determine a unique circle passing through them: If the three points are in and nonlinear, this fact comes straight from Euclidean geometry; if the three points are on a straight line or if one of the points is , then the circle is a straight line plus .    The Möbius transformation given by maps .  The points , , and uniquely determine the unit circle and the points 0, 1, and uniquely determine the real line, viewed as a circle in . Thus implies that maps the unit circle to , which we already concluded in .    Conversely, if we know where three distinct points in are transformed by a Möbius transformation then we should be able to figure out everything about the transformation. There is a computational device that makes this easier to see.    If , , , and are any four points in with , , and distinct, then their cross ratio is defined as . cross ratio This includes the implicit definitions and, if one of , , , or is , then the two terms containing are canceled; e.g., .      Our running example can be written as .      The function defined by is a Möbius transformation that satisfies . Moreover, if is any Möbius transformation with , , and , then and are identical.    Most of this follows from our definition of , but we need to prove the uniqueness statement. By Proposition , the inverse is a Möbius transformation and, by Exercise , the composition is again a Möbius transformation. Note that and, similarly, and . If we write then and so , the identity function. But since , this means that and are identical.    So if we want to map three given points of to , and by a Möbius transformation, then the cross ratio gives us the only way to do it. What if we have three points , and and we want to map them to three other points , and ?    Suppose , and are distinct points in and , and are distinct points in . Then there is a unique Möbius transformation satisfying , , and .    Let where and . Uniqueness follows as in the proof of .    This theorem gives an explicit way to determine from the points and but, in practice, it is often easier to determine directly from the conditions (by solving for , , and ).  "
},
{
  "id": "sec_riemannspere-3",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-3",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "  Suppose .    means that for every we can find so that, for all satisfying , we have .     means that for every we can find so that, for all satisfying , we have .     means that for every we can find so that, for all satisfying , we have .     In the first definition we require that be an accumulation point of while in the second and third we require that be an extended accumulation point of , in the sense that for every there is some with .   "
},
{
  "id": "sec_riemannspere-5",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-5",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  We claim that : Given , let . Then implies .   "
},
{
  "id": "sec_riemannspere-6",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-6",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  Let be a Möbius transformation with . Then .  To simplify the notation, introduce the constant . Given , let . Then implies, with the reverse triangle inequality ( ( )), that and so .   "
},
{
  "id": "sec_riemannspere-8",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-8",
  "type": "Definition",
  "number": "3.2.4",
  "title": "",
  "body": "  The extended complex plane is the set , together with the following algebraic properties: For any ,        if then               if then .    complex plane extended  extended complex plane   The extended complex plane is also called the Riemann sphere or the complex projective line , denoted . complex projective line  Riemann sphere    "
},
{
  "id": "cor_inversemobius",
  "level": "2",
  "url": "sec_riemannspere.html#cor_inversemobius",
  "type": "Corollary",
  "number": "3.2.5",
  "title": "",
  "body": "  Suppose and , and consider defined through Then is a bijection.   "
},
{
  "id": "ex_mobiusinverse3",
  "level": "2",
  "url": "sec_riemannspere.html#ex_mobiusinverse3",
  "type": "Example",
  "number": "3.2.6",
  "title": "",
  "body": "  Continuing and , consider once more the Möbius transformation . With the definitions and , we can extend to a function .   "
},
{
  "id": "sec_riemannspere-16",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-16",
  "type": "Example",
  "number": "3.2.7",
  "title": "",
  "body": "  The Möbius transformation given by maps .  The points , , and uniquely determine the unit circle and the points 0, 1, and uniquely determine the real line, viewed as a circle in . Thus implies that maps the unit circle to , which we already concluded in .   "
},
{
  "id": "sec_riemannspere-18",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-18",
  "type": "Definition",
  "number": "3.2.8",
  "title": "",
  "body": "  If , , , and are any four points in with , , and distinct, then their cross ratio is defined as . cross ratio This includes the implicit definitions and, if one of , , , or is , then the two terms containing are canceled; e.g., .   "
},
{
  "id": "sec_riemannspere-19",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-19",
  "type": "Example",
  "number": "3.2.9",
  "title": "",
  "body": "  Our running example can be written as .   "
},
{
  "id": "crossratio",
  "level": "2",
  "url": "sec_riemannspere.html#crossratio",
  "type": "Proposition",
  "number": "3.2.10",
  "title": "",
  "body": "  The function defined by is a Möbius transformation that satisfies . Moreover, if is any Möbius transformation with , , and , then and are identical.    Most of this follows from our definition of , but we need to prove the uniqueness statement. By Proposition , the inverse is a Möbius transformation and, by Exercise , the composition is again a Möbius transformation. Note that and, similarly, and . If we write then and so , the identity function. But since , this means that and are identical.   "
},
{
  "id": "sec_riemannspere-22",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-22",
  "type": "Corollary",
  "number": "3.2.11",
  "title": "",
  "body": "  Suppose , and are distinct points in and , and are distinct points in . Then there is a unique Möbius transformation satisfying , , and .    Let where and . Uniqueness follows as in the proof of .   "
},
{
  "id": "sec_stereoproj",
  "level": "1",
  "url": "sec_stereoproj.html",
  "type": "Section",
  "number": "3.3",
  "title": "Stereographic Projection",
  "body": " Stereographic Projection  The addition of to the complex plane gives the plane a useful structure. This structure is revealed by a famous function called stereographic projection , which gives us a way of visualizing the extended complex plane that is, with the point at infinity in , as the unit sphere. It also provides a way of seeing that a line in the extended complex plane really is a circle, and of visualizing Möbius functions.  To begin, we think of as the -plane in , that is, . To describe stereographic projection, we will be less concerned with actual complex numbers and more concerned with their coordinates. Consider the unit sphere  . unit sphere The sphere and the complex plane intersect in the set , which corresponds to the equator on the sphere and the unit circle on the complex plane. Let , the north pole of , and let , the south pole . south pole  north pole     The stereographic projection of to from is the map defined as follows. stereographic projection For any point , as the -coordinate of is strictly less than 1, the line through and intersects in exactly one point, which define to be . We also declare that . provides an illustration of this definition.     The definition of stereographic projection.     a=0.35  sa=1\/a^2  b=0.25  sb=1\/b^2  x2=(1-sa)\/(1-sa*sb)  y2=(1-x2)\/sa  int_pt=(sqrt(x2),sqrt(y2))  north=(0,1)  angle=atan(sqrt(y2\/x2))  ell1(t)=(cos(t),a*sin(t))  ell2(t)=(b*cos(t),sin(t))  r=1.7  p1=(r*cos(angle),r*sin(angle))  p2=-p1  e=(r,0)  phiP=(-1.5,-1)  s=0.72  P=s*north+(1-s)*phiP                   N  \\phi(P)  P   {\\mathbb C}          The map is given by It is bijective, with inverse map and .     Given , the straight line through and is parametrized by where . When hits , the third coordinate is , so it must be that . Plugging this value of into the formula for yields as stated.  To see the formula for the inverse map , we begin with a point and solve for a point so that . The point satisfies the equation . The equation tells us that and . Thus, we solve three equations for three unknowns. The latter two equations yield .  Solving for and then plugging this into the identities and proves the desired formula. It is easy to check that and are both the identity map; see .     The stereographic projection takes the set of circles in bijectively to the set of circles in , where for a circle we have (that is, is a line in ) if and only if .     A circle in is the intersection of with some plane . If is a normal vector to , then there is a unique real number so that is given by . By possibly changing , we may assume that . We may also assume that , since if we can replace with , and if then .  Consider the circle of intersection . A point in the complex plane lies on the image of this circle under if and only if satisfies the defining equation for . Using the equations from Proposition for , .  If , this is a straight line in the -plane. Moreover, every line in the -plane can be obtained in this way. Note that if and only if , which is if and only if the image under is a straight line.  If , then completing the square yields . Depending on whether the right hand side of this equation is positive, 0, or negative, this is the equation of a circle, point, or the empty set in the -plane, respectively. These three cases happen when , , and , respectively. Only the first case corresponds to a circle in . verifies that every circle in the -plane arises in this manner.   We can now think of the extended complex plane as a sphere in , the afore-mentioned Riemann sphere .  It is particularly nice to think about the basic Möbius transformations via their effect on the Riemann sphere. We will describe inversion. It is worth thinking about, though beyond the scope of this book, how other Möbius functions behave. For instance, a rotation , composed with , can be seen to be a rotation of . We encourage you to verify this and consider the harder problems of visualizing a real dilation, , or a translation, . We give the hint that a real dilation is in some sense dual to a rotation, in that each moves points along perpendicular sets of circles. Translations can also be visualized via how they move points along sets of circles.  We now use stereographic projection to take another look at . We want to know what this function does to the sphere . We will take a point , project it to the plane by the stereographic projection , apply to the point that results, and then pull this point back to by .  We know which we now regard as the complex number .  We know from a previous calculation that , which gives . Thus . Rather than plug this result into the formulas for , we can just ask what triple of numbers will be mapped to this particular pair using the formulas . The answer is .  Thus we have shown that the effect of on is to take to . This is a rotation around the -axis by 180 degrees.  We now have a second argument that takes circles and lines to circles and lines. A circle or line in is taken to a circle on by . Then rotates the sphere which certainly takes circles to circles. Now takes circles back to circles and lines. We can also say that the circles that go to lines under are the circles through 0, because 0 is mapped to under , and so a circle through 0 in goes to a circle through the south pole in . Now 180-degree rotation about the -axis takes the south pole to the north pole, and our circle is now passing through . But we know that will take this circle to a line in .  We end by mentioning that there is, in fact, a way of putting the complex metric on . It is certainly not the (finite) distance function induced by . Indeed, the origin in the complex plane corresponds to the south pole of . We have to be able to get arbitrarily far away from the origin in , so the complex distance function has to increase greatly with the coordinate. The closer points are to the north pole (corresponding to in ), the larger their distance to the origin, and to each other! In this light, a line in the Riemann sphere corresponds to a circle in through . In the regular sphere, the circle has finite length, but as a line on the Riemann sphere with the complex metric, it has infinite length.  "
},
{
  "id": "sec_stereoproj-4",
  "level": "2",
  "url": "sec_stereoproj.html#sec_stereoproj-4",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  The stereographic projection of to from is the map defined as follows. stereographic projection For any point , as the -coordinate of is strictly less than 1, the line through and intersects in exactly one point, which define to be . We also declare that . provides an illustration of this definition.   "
},
{
  "id": "fig_sphereandplane",
  "level": "2",
  "url": "sec_stereoproj.html#fig_sphereandplane",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": " The definition of stereographic projection.     a=0.35  sa=1\/a^2  b=0.25  sb=1\/b^2  x2=(1-sa)\/(1-sa*sb)  y2=(1-x2)\/sa  int_pt=(sqrt(x2),sqrt(y2))  north=(0,1)  angle=atan(sqrt(y2\/x2))  ell1(t)=(cos(t),a*sin(t))  ell2(t)=(b*cos(t),sin(t))  r=1.7  p1=(r*cos(angle),r*sin(angle))  p2=-p1  e=(r,0)  phiP=(-1.5,-1)  s=0.72  P=s*north+(1-s)*phiP                   N  \\phi(P)  P   {\\mathbb C}       "
},
{
  "id": "prop_coordmaps",
  "level": "2",
  "url": "sec_stereoproj.html#prop_coordmaps",
  "type": "Proposition",
  "number": "3.3.3",
  "title": "",
  "body": "  The map is given by It is bijective, with inverse map and .   "
},
{
  "id": "sec_stereoproj-7",
  "level": "2",
  "url": "sec_stereoproj.html#sec_stereoproj-7",
  "type": "Proof",
  "number": "3.3.1",
  "title": "",
  "body": " Given , the straight line through and is parametrized by where . When hits , the third coordinate is , so it must be that . Plugging this value of into the formula for yields as stated.  To see the formula for the inverse map , we begin with a point and solve for a point so that . The point satisfies the equation . The equation tells us that and . Thus, we solve three equations for three unknowns. The latter two equations yield .  Solving for and then plugging this into the identities and proves the desired formula. It is easy to check that and are both the identity map; see .  "
},
{
  "id": "StereoCircle",
  "level": "2",
  "url": "sec_stereoproj.html#StereoCircle",
  "type": "Theorem",
  "number": "3.3.4",
  "title": "",
  "body": "  The stereographic projection takes the set of circles in bijectively to the set of circles in , where for a circle we have (that is, is a line in ) if and only if .   "
},
{
  "id": "sec_stereoproj-9",
  "level": "2",
  "url": "sec_stereoproj.html#sec_stereoproj-9",
  "type": "Proof",
  "number": "3.3.2",
  "title": "",
  "body": " A circle in is the intersection of with some plane . If is a normal vector to , then there is a unique real number so that is given by . By possibly changing , we may assume that . We may also assume that , since if we can replace with , and if then .  Consider the circle of intersection . A point in the complex plane lies on the image of this circle under if and only if satisfies the defining equation for . Using the equations from Proposition for , .  If , this is a straight line in the -plane. Moreover, every line in the -plane can be obtained in this way. Note that if and only if , which is if and only if the image under is a straight line.  If , then completing the square yields . Depending on whether the right hand side of this equation is positive, 0, or negative, this is the equation of a circle, point, or the empty set in the -plane, respectively. These three cases happen when , , and , respectively. Only the first case corresponds to a circle in . verifies that every circle in the -plane arises in this manner.  "
},
{
  "id": "sec_exptrigfcts",
  "level": "1",
  "url": "sec_exptrigfcts.html",
  "type": "Section",
  "number": "3.4",
  "title": "Exponential and Trigonometric Functions",
  "body": " Exponential and Trigonometric Functions  To define the complex exponential function, we once more borrow concepts from calculus, namely the real exponential function How to define the real exponential function is a nontrivial question. Our preferred way to do this is through a power series: . In light of this definition, you might think we should have simply defined the complex exponential function through a complex power series. In fact, this is possible (and an elegant definition); however, one of the promises of this book is to introduce complex power series as late as possible. We agree with those readers who think that we are cheating at this point, as we borrow the concept of a (real) power series to define the real exponential function. and the real sine and cosine, and we finally make sense of the notation . function exponential     The (complex) exponential function exponential function  is , defined for as .    This definition seems a bit arbitrary. Our first justification is that all exponential rules that we are used to from real numbers carry over to the complex case. exponential rules They mainly follow from Proposition and are collected in the following.    For all ,                             .       Item ( ) is very special and has no counterpart for the real exponential function. It says that the complex exponential function is periodic with period . periodic This has many interesting consequences; one that may not seem too pleasant at first sight is the fact that the complex exponential function is not one-to-one.  Item ( ) is not only remarkable, but we invite you to meditate on its proof below; it gives a strong indication that our definition of is reasonable. We also note that ( ) implies that is entire.  We leave the proof of as Exercise but give one sample.   ( ) The partial derivatives of are . They are continuous in and satisfy the Cauchy Riemann equation : for all . Thus Theorem says that is entire with derivative .   We should make sure that the complex exponential function specializes to the real exponential function for real arguments: indeed, if then .                       size=8        p=(cos(angle), sin(angle))         The domain of the complex exponential function is shown on the left and the codomain on the right. The function maps the blue vertical lines on the left into circles on the right and maps the red dashed horizontal lines on the left into the rays on the right.   The trigonometric functions sine, cosine, tangent, cotangent, etc. also have complex analogues; however, they do not play the same prominent role as in the real case. trigonometric functions  sine  cosine  tangent  cotangent In fact, we can define them as merely being special combinations of the exponential function. function trigonometric     The (complex) sine and cosine are defined as , respectively. The tangent and cotangent are defined as , respectively.    Note that to write tangent and cotangent in terms of the exponential function, we used the fact that . Because is entire, so are and .  As with the exponential function, we should make sure that we're not redefining the real sine and cosine: if then .  A similar calculation holds for the cosine. Not too surprisingly, the following properties follow mostly from .    For all , .    Finally, one word of caution: unlike in the real case, the complex sine and cosine are not bounded consider, for example, as .  We end this section with a remark on hyperbolic trig functions. hyperbolic trig functions The hyperbolic sine , cosine , tangent , and cotangent are defined as in the real case:    .   As such, they are yet more special combinations of the exponential function. They still satisfy the identities you already know, e.g., . Moreover, they are related to the trigonometric functions via .   "
},
{
  "id": "sec_exptrigfcts-3",
  "level": "2",
  "url": "sec_exptrigfcts.html#sec_exptrigfcts-3",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "  The (complex) exponential function exponential function  is , defined for as .   "
},
{
  "id": "expproperties",
  "level": "2",
  "url": "sec_exptrigfcts.html#expproperties",
  "type": "Proposition",
  "number": "3.4.2",
  "title": "",
  "body": "  For all ,                             .      "
},
{
  "id": "sec_exptrigfcts-9",
  "level": "2",
  "url": "sec_exptrigfcts.html#sec_exptrigfcts-9",
  "type": "Proof",
  "number": "3.4.1",
  "title": "",
  "body": " ( ) The partial derivatives of are . They are continuous in and satisfy the Cauchy Riemann equation : for all . Thus Theorem says that is entire with derivative .  "
},
{
  "id": "fig-complex-exponential",
  "level": "2",
  "url": "sec_exptrigfcts.html#fig-complex-exponential",
  "type": "Figure",
  "number": "3.4.3",
  "title": "",
  "body": "                     size=8        p=(cos(angle), sin(angle))         The domain of the complex exponential function is shown on the left and the codomain on the right. The function maps the blue vertical lines on the left into circles on the right and maps the red dashed horizontal lines on the left into the rays on the right.  "
},
{
  "id": "sec_exptrigfcts-13",
  "level": "2",
  "url": "sec_exptrigfcts.html#sec_exptrigfcts-13",
  "type": "Definition",
  "number": "3.4.4",
  "title": "",
  "body": "  The (complex) sine and cosine are defined as , respectively. The tangent and cotangent are defined as , respectively.   "
},
{
  "id": "trigproperties",
  "level": "2",
  "url": "sec_exptrigfcts.html#trigproperties",
  "type": "Proposition",
  "number": "3.4.5",
  "title": "",
  "body": "  For all , .   "
},
{
  "id": "sec_exptrigfcts-20",
  "level": "2",
  "url": "sec_exptrigfcts.html#sec_exptrigfcts-20",
  "type": "Definition",
  "number": "3.4.6",
  "title": "",
  "body": "  .  "
},
{
  "id": "sec_logexp",
  "level": "1",
  "url": "sec_logexp.html",
  "type": "Section",
  "number": "3.5",
  "title": "Logarithms and Complex Exponentials",
  "body": " Logarithms and Complex Exponentials  The complex logarithm is the first function we'll encounter that is of a somewhat tricky nature. logarithm It is motivated as an inverse to the exponential function, that is, we're looking for a function such that . function logarithmic But because is not one-to-one, this is too much to hope for. In fact, given a function that satisfies the first equation in , the function does as well, and so there cannot be an inverse of (which would have to be unique). On the other hand, becomes one-to-one if we restrict its domain, so there is hope for a logarithm if we are careful about its construction and about its domain.    Given a region , any continuous function that satisfies is a branch of the logarithm (on ) . branch of the logarithm     To make sure this definition is not vacuous, let's write, as usual, , and suppose that . Then for the first equation in to hold, we need , that is, and . The latter equation is equivalent to for some , and denoting the natural logarithm of the positive real number by , the former equation is equivalent to . A reasonable definition of a logarithm function would hence be where gives the argument for the complex number according to some convention here is an example.    Let denote the unique argument of that lies in (the principal argument of ). Arg  principal argument Then the principal logarithm is the function defined through . principal logarithm  Log       Here are a few evaluations of to illustrate this function: .     SageMath computes our principal logarithm.    The principal logarithm is not continuous on the negative part of the real line, and so is a branch of the logarithm on . Any branch of the logarithm on a region can be similarly extended to a function defined on . Furthermore, the evaluation of any branch of the logarithm at a specific can differ from only by a multiple of ; the reason for this is once more the periodicity of the exponential function.  So what about the second equation in , namely, ? Let's try the principal logarithm: if then . The right-hand side is equal to if and only if . Something similar will happen with any other branch of the logarithm there will always be many 's for which .  A warning sign pointing in a similar direction concerns the much-cherished real logarithm rule ; it has no analogue in . For example, but .  The problem is that we need to come up with an argument convention to define a logarithm and then stick to this convention. There is quite a bit of subtlety here; e.g., the multi-valued map gives rise to a multi-valued logarithm via . arg  log Neither nor is a function, yet . We invite you to check this thoroughly; in particular, you should note how the periodicity of the exponential function takes care of the multi-valuedness of .  To end our discussion of complex logarithms on a happy note, we prove that any branch of the logarithm has the same derivative; one just has to be cautious with regions of holomorphicity.    If is a branch of the logarithm on , then is differentiable on with .     The idea is to apply to and , but we need to be careful about the domains of these functions. Let , the image of . We apply Proposition with given by and given by ; note that is continuous, and checks that and are inverses of each other. Thus gives .   We finish this section by defining complex exponentials.    Given with , the principal value of principal value of  is defined as .    Naturally, we can just as well define through a different branch of the logarithm; our convention is that we use the principal value unless otherwise stated. explores what happens when we use the multi-valued in the definition of .    One last remark: it now makes sense to talk about the function , where is Euler's Named after Leonard Euler (1707 1783). Continuing our footnote on p. we have now honestly established Euler's formula  . number and can be defined, for example, as . In calculus we can prove the equivalence of the real exponential function (as given, for example, through a power series) and the function . With our definition of , we can now make a similar remark about the complex exponential function. Because is a positive real number and hence , .  A word of caution: this only works out this nicely because we have carefully defined for complex numbers. Using a different branch of logarithm in the definition of can easily lead to .  "
},
{
  "id": "sec_logexp-3",
  "level": "2",
  "url": "sec_logexp.html#sec_logexp-3",
  "type": "Definition",
  "number": "3.5.1",
  "title": "",
  "body": "  Given a region , any continuous function that satisfies is a branch of the logarithm (on ) . branch of the logarithm    "
},
{
  "id": "sec_logexp-5",
  "level": "2",
  "url": "sec_logexp.html#sec_logexp-5",
  "type": "Definition",
  "number": "3.5.2",
  "title": "",
  "body": "  Let denote the unique argument of that lies in (the principal argument of ). Arg  principal argument Then the principal logarithm is the function defined through . principal logarithm  Log    "
},
{
  "id": "sec_logexp-6",
  "level": "2",
  "url": "sec_logexp.html#sec_logexp-6",
  "type": "Example",
  "number": "3.5.3",
  "title": "",
  "body": "  Here are a few evaluations of to illustrate this function: .   "
},
{
  "id": "sec_logexp-15",
  "level": "2",
  "url": "sec_logexp.html#sec_logexp-15",
  "type": "Proposition",
  "number": "3.5.4",
  "title": "",
  "body": "  If is a branch of the logarithm on , then is differentiable on with .   "
},
{
  "id": "sec_logexp-16",
  "level": "2",
  "url": "sec_logexp.html#sec_logexp-16",
  "type": "Proof",
  "number": "3.5.1",
  "title": "",
  "body": " The idea is to apply to and , but we need to be careful about the domains of these functions. Let , the image of . We apply Proposition with given by and given by ; note that is continuous, and checks that and are inverses of each other. Thus gives .  "
},
{
  "id": "sec_logexp-18",
  "level": "2",
  "url": "sec_logexp.html#sec_logexp-18",
  "type": "Definition",
  "number": "3.5.5",
  "title": "",
  "body": "  Given with , the principal value of principal value of  is defined as .   "
},
{
  "id": "chapter3-exercises",
  "level": "1",
  "url": "chapter3-exercises.html",
  "type": "Exercises",
  "number": "3.6",
  "title": "Exercises",
  "body": "   Show that if is a Möbius transformation then .      Complete the picture painted by by considering Möbius transformations with . That is, show that given by is a bijection, with given by the formula in .      Show that is the equation for a circle or line if and only if . Conclude that is a solution to if and only if is a solution to .      Extend by showing that maps any circle passing through to a line.      Prove that any Möbius transformation different from the identity map can have at most two fixed points. (A fixed point of a function is a number such that .) fixed point       Prove .      Show that the Möbius transformation maps the unit circle (minus the point ) onto the imaginary axis.      Suppose that is holomorphic in the region and is a subset of the unit circle. Show that is constant.      Fix with and consider .     Show that is a Möbius transformation.      Show that .      Prove that maps the unit disk to itself in a bijective fashion.       Suppose is a matrix of complex numbers whose determinant is nonzero. Then we can define a corresponding Möbius transformation on by . Show that , where denotes composition and denotes matrix multiplication.      Show that our definition of honors the finite limit rules in Proposition , by proving the following, where :     If and then .      If and then .      If then .      If and then .      If and then .       Fix . Prove that .      Let . Draw two graphs, one showing the following six sets in the -plane and the other showing their images in the -plane. Label the sets. (You should only need to calculate the images of , , , and ; remember that Möbius transformations preserve angles.)     the -axis plus       the -axis plus       the line plus       the circle with radius centered at       the circle with radius centered at       the circle with radius centered at        Find Möbius transformations satisfying each of the following. Write your answers in standard form, as .                                          Using the cross ratio, with different choices of , find two different Möbius transformations that transform onto the real axis plus . In each case, find the image of the center of the circle.      Let be the unit circle. Find a Möbius transformation that transforms onto and transforms to .      Describe the image of the region under the transformation:     The disk under .      The quadrant under .      The strip under .       Find a Möbius transformation that maps the unit disk to .      Find the fixed points in of .      Find each Möbius transformation :      maps , , .       maps , , .       maps the -axis to , the -axis to , and the unit circle to itself.        Find a Möbius transformation that maps the unit circle to .      Find two Möbius transformations that map the unit disk respectively.       Given , show that the image of the line under inversion is the circle with center and radius .      Suppose , and are distinct points in . Show that is on the circle passing through , and if and only if is real or .      Prove that the stereographic projection of is a bijection by verifying that and are the identity map.      Find the image of the following points under the stereographic projection :   .      Consider the plane determined by . What is a unit normal vector to ? Compute the image of under the stereographic projection .      Prove that every circle in the extended complex plane is the image of some circle in under the stereographic projection .      Describe the effect of the basic Möbius transformations rotation, real dilation, and translation on the Riemann sphere.    For the first two, consider all circles in centered on the axis, and all circles through both and . For translation, consider two families of circles through , orthogonal to and perpendicular to the translation.      Prove that and .      Let and show that      .       .       Prove that the zeros of are all real valued. Conclude that they are precisely the integer multiples of .      Describe the images of the following sets under the exponential function :     the line segment defined by       the line segment defined by       the rectangle .       Prove .      Prove .      Let and show that                   If then .      If then .       Show that .      Draw a picture of the images of vertical lines under the sine function. Do the same for the tangent function.      Determine the image of the strip under the sine function.     makes it easy to convert parametric equations for horizontal or vertical lines to parametric equations for their images. Note that the equations and represent an ellipse and the equations and represent a hyperbola. Start by finding the images of the boundary lines of the strip, and then find the images of a few horizontal segments and vertical lines in the strip.      Find the principal values of                              .            Convert the following expressions to the form . (Reason carefully.)                                                       .       Is true for the multiple-valued argument? What about for the principal branch?      For the multiple-valued logarithm, is there a difference between the set of all values of and the set of all values of ?    Try some fixed numbers for .      For each of the following functions, determine all complex numbers for which the function is holomorphic. If you run into a logarithm, use the principal value unless otherwise stated.          differentiable at 0, nowhere holomorphic           differentiable and holomorphic on        where with     differentiable and holomorphic on            nowhere differentiable or holomorphic           differentiable and holomorphic on        .    differentiable and holomorphic in (i.e., entire)       Find all solutions to the following equations:                      there is no solution                                                                   .            Find the image of the annulus under the principal value of the logarithm.      Use to give an alternative proof that is holomorphic in .      Let be a branch of the logarithm on , and let , the image of . Show that is a bijection whose inverse map is given by (i.e., is the exponential function restricted to ).      Show that if is a positive real constant.      Fix . Find the derivative of .           Prove that is single valued if and only if is an integer. (Note that this means that complex exponentials do not clash with monomials , no matter which branch of the logarithm is used.) What can you say if is rational?      Describe the image under of the line with equation . To do this you should find an equation (at least parametrically) for the image (you can start with the parametric form ), plot it reasonably carefully, and explain what happens in the limits as and .      For this problem, .     Show that the image under of a circle centered at the origin is a circle centered at the origin.    Use polar coordinates.      Show that the image under of a ray starting at the origin is a ray starting at the origin.      Let be the figure formed by the horizontal segment from to , the circular arc from to , and then the vertical segment from to . Draw and .      Is the right angle at the origin in ( ) preserved? Is something wrong here?       As in , let . Let be the square with vertices at , , and . Draw and identify the types of image curves corresponding to the segments from to and from to . They are not parts of either straight lines or circles.    You can write the vertical segment parametrically as . Eliminate the parameter in to get a equation for the image curve.) and are related to the cover picture of the print version of this book.    "
},
{
  "id": "prob_mobiusinverse",
  "level": "2",
  "url": "chapter3-exercises.html#prob_mobiusinverse",
  "type": "Exercise",
  "number": "3.6.1",
  "title": "",
  "body": "  Show that if is a Möbius transformation then .   "
},
{
  "id": "ex_inversemobisc_0",
  "level": "2",
  "url": "chapter3-exercises.html#ex_inversemobisc_0",
  "type": "Exercise",
  "number": "3.6.2",
  "title": "",
  "body": "  Complete the picture painted by by considering Möbius transformations with . That is, show that given by is a bijection, with given by the formula in .   "
},
{
  "id": "ex_circlegenau",
  "level": "2",
  "url": "chapter3-exercises.html#ex_circlegenau",
  "type": "Exercise",
  "number": "3.6.3",
  "title": "",
  "body": "  Show that is the equation for a circle or line if and only if . Conclude that is a solution to if and only if is a solution to .   "
},
{
  "id": "exercise_mobiusinverse2",
  "level": "2",
  "url": "chapter3-exercises.html#exercise_mobiusinverse2",
  "type": "Exercise",
  "number": "3.6.4",
  "title": "",
  "body": "  Extend by showing that maps any circle passing through to a line.   "
},
{
  "id": "chapter3-exercises-5",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-5",
  "type": "Exercise",
  "number": "3.6.5",
  "title": "",
  "body": "  Prove that any Möbius transformation different from the identity map can have at most two fixed points. (A fixed point of a function is a number such that .) fixed point    "
},
{
  "id": "chapter3-exercises-6",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-6",
  "type": "Exercise",
  "number": "3.6.6",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "unitcircletoimaginary",
  "level": "2",
  "url": "chapter3-exercises.html#unitcircletoimaginary",
  "type": "Exercise",
  "number": "3.6.7",
  "title": "",
  "body": "  Show that the Möbius transformation maps the unit circle (minus the point ) onto the imaginary axis.   "
},
{
  "id": "unitcircleistoothin",
  "level": "2",
  "url": "chapter3-exercises.html#unitcircleistoothin",
  "type": "Exercise",
  "number": "3.6.8",
  "title": "",
  "body": "  Suppose that is holomorphic in the region and is a subset of the unit circle. Show that is constant.   "
},
{
  "id": "ex_mobiusunitcircletounitcircle",
  "level": "2",
  "url": "chapter3-exercises.html#ex_mobiusunitcircletounitcircle",
  "type": "Exercise",
  "number": "3.6.9",
  "title": "",
  "body": "  Fix with and consider .     Show that is a Möbius transformation.      Show that .      Prove that maps the unit disk to itself in a bijective fashion.    "
},
{
  "id": "ex_mobiusgroup",
  "level": "2",
  "url": "chapter3-exercises.html#ex_mobiusgroup",
  "type": "Exercise",
  "number": "3.6.10",
  "title": "",
  "body": "  Suppose is a matrix of complex numbers whose determinant is nonzero. Then we can define a corresponding Möbius transformation on by . Show that , where denotes composition and denotes matrix multiplication.   "
},
{
  "id": "ex_limitrulesinfty",
  "level": "2",
  "url": "chapter3-exercises.html#ex_limitrulesinfty",
  "type": "Exercise",
  "number": "3.6.11",
  "title": "",
  "body": "  Show that our definition of honors the finite limit rules in Proposition , by proving the following, where :     If and then .      If and then .      If then .      If and then .      If and then .    "
},
{
  "id": "ex_polynomiallimitaszgrows",
  "level": "2",
  "url": "chapter3-exercises.html#ex_polynomiallimitaszgrows",
  "type": "Exercise",
  "number": "3.6.12",
  "title": "",
  "body": "  Fix . Prove that .   "
},
{
  "id": "chapter3-exercises-13",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-13",
  "type": "Exercise",
  "number": "3.6.13",
  "title": "",
  "body": "  Let . Draw two graphs, one showing the following six sets in the -plane and the other showing their images in the -plane. Label the sets. (You should only need to calculate the images of , , , and ; remember that Möbius transformations preserve angles.)     the -axis plus       the -axis plus       the line plus       the circle with radius centered at       the circle with radius centered at       the circle with radius centered at     "
},
{
  "id": "ex314",
  "level": "2",
  "url": "chapter3-exercises.html#ex314",
  "type": "Exercise",
  "number": "3.6.14",
  "title": "",
  "body": "  Find Möbius transformations satisfying each of the following. Write your answers in standard form, as .                                       "
},
{
  "id": "chapter3-exercises-15",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-15",
  "type": "Exercise",
  "number": "3.6.15",
  "title": "",
  "body": "  Using the cross ratio, with different choices of , find two different Möbius transformations that transform onto the real axis plus . In each case, find the image of the center of the circle.   "
},
{
  "id": "chapter3-exercises-16",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-16",
  "type": "Exercise",
  "number": "3.6.16",
  "title": "",
  "body": "  Let be the unit circle. Find a Möbius transformation that transforms onto and transforms to .   "
},
{
  "id": "chapter3-exercises-17",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-17",
  "type": "Exercise",
  "number": "3.6.17",
  "title": "",
  "body": "  Describe the image of the region under the transformation:     The disk under .      The quadrant under .      The strip under .    "
},
{
  "id": "chapter3-exercises-18",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-18",
  "type": "Exercise",
  "number": "3.6.18",
  "title": "",
  "body": "  Find a Möbius transformation that maps the unit disk to .   "
},
{
  "id": "chapter3-exercises-19",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-19",
  "type": "Exercise",
  "number": "3.6.19",
  "title": "",
  "body": "  Find the fixed points in of .   "
},
{
  "id": "chapter3-exercises-20",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-20",
  "type": "Exercise",
  "number": "3.6.20",
  "title": "",
  "body": "  Find each Möbius transformation :      maps , , .       maps , , .       maps the -axis to , the -axis to , and the unit circle to itself.    "
},
{
  "id": "chapter3-exercises-21",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-21",
  "type": "Exercise",
  "number": "3.6.21",
  "title": "",
  "body": "   Find a Möbius transformation that maps the unit circle to .      Find two Möbius transformations that map the unit disk respectively.    "
},
{
  "id": "chapter3-exercises-22",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-22",
  "type": "Exercise",
  "number": "3.6.22",
  "title": "",
  "body": "  Given , show that the image of the line under inversion is the circle with center and radius .   "
},
{
  "id": "chapter3-exercises-23",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-23",
  "type": "Exercise",
  "number": "3.6.23",
  "title": "",
  "body": "  Suppose , and are distinct points in . Show that is on the circle passing through , and if and only if is real or .   "
},
{
  "id": "ex_stereoinverseformula",
  "level": "2",
  "url": "chapter3-exercises.html#ex_stereoinverseformula",
  "type": "Exercise",
  "number": "3.6.24",
  "title": "",
  "body": "  Prove that the stereographic projection of is a bijection by verifying that and are the identity map.   "
},
{
  "id": "chapter3-exercises-25",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-25",
  "type": "Exercise",
  "number": "3.6.25",
  "title": "",
  "body": "  Find the image of the following points under the stereographic projection :   .   "
},
{
  "id": "chapter3-exercises-26",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-26",
  "type": "Exercise",
  "number": "3.6.26",
  "title": "",
  "body": "  Consider the plane determined by . What is a unit normal vector to ? Compute the image of under the stereographic projection .   "
},
{
  "id": "ex_everycircleins2",
  "level": "2",
  "url": "chapter3-exercises.html#ex_everycircleins2",
  "type": "Exercise",
  "number": "3.6.27",
  "title": "",
  "body": "  Prove that every circle in the extended complex plane is the image of some circle in under the stereographic projection .   "
},
{
  "id": "chapter3-exercises-28",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-28",
  "type": "Exercise",
  "number": "3.6.28",
  "title": "",
  "body": "  Describe the effect of the basic Möbius transformations rotation, real dilation, and translation on the Riemann sphere.    For the first two, consider all circles in centered on the axis, and all circles through both and . For translation, consider two families of circles through , orthogonal to and perpendicular to the translation.   "
},
{
  "id": "chapter3-exercises-29",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-29",
  "type": "Exercise",
  "number": "3.6.29",
  "title": "",
  "body": "  Prove that and .   "
},
{
  "id": "ex_sin_x_iy_",
  "level": "2",
  "url": "chapter3-exercises.html#ex_sin_x_iy_",
  "type": "Exercise",
  "number": "3.6.30",
  "title": "",
  "body": "  Let and show that      .       .    "
},
{
  "id": "chapter3-exercises-31",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-31",
  "type": "Exercise",
  "number": "3.6.31",
  "title": "",
  "body": "  Prove that the zeros of are all real valued. Conclude that they are precisely the integer multiples of .   "
},
{
  "id": "chapter3-exercises-32",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-32",
  "type": "Exercise",
  "number": "3.6.32",
  "title": "",
  "body": "  Describe the images of the following sets under the exponential function :     the line segment defined by       the line segment defined by       the rectangle .    "
},
{
  "id": "ex_expproperties",
  "level": "2",
  "url": "chapter3-exercises.html#ex_expproperties",
  "type": "Exercise",
  "number": "3.6.33",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "chapter3-exercises-34",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-34",
  "type": "Exercise",
  "number": "3.6.34",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "ex_abs_cot_",
  "level": "2",
  "url": "chapter3-exercises.html#ex_abs_cot_",
  "type": "Exercise",
  "number": "3.6.35",
  "title": "",
  "body": "  Let and show that                   If then .      If then .    "
},
{
  "id": "chapter3-exercises-36",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-36",
  "type": "Exercise",
  "number": "3.6.36",
  "title": "",
  "body": "  Show that .   "
},
{
  "id": "chapter3-exercises-37",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-37",
  "type": "Exercise",
  "number": "3.6.37",
  "title": "",
  "body": "  Draw a picture of the images of vertical lines under the sine function. Do the same for the tangent function.   "
},
{
  "id": "chapter3-exercises-38",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-38",
  "type": "Exercise",
  "number": "3.6.38",
  "title": "",
  "body": "  Determine the image of the strip under the sine function.     makes it easy to convert parametric equations for horizontal or vertical lines to parametric equations for their images. Note that the equations and represent an ellipse and the equations and represent a hyperbola. Start by finding the images of the boundary lines of the strip, and then find the images of a few horizontal segments and vertical lines in the strip.   "
},
{
  "id": "ex_princval",
  "level": "2",
  "url": "chapter3-exercises.html#ex_princval",
  "type": "Exercise",
  "number": "3.6.39",
  "title": "",
  "body": "  Find the principal values of                              .         "
},
{
  "id": "chapter3-exercises-40",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-40",
  "type": "Exercise",
  "number": "3.6.40",
  "title": "",
  "body": "  Convert the following expressions to the form . (Reason carefully.)                                                       .    "
},
{
  "id": "chapter3-exercises-41",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-41",
  "type": "Exercise",
  "number": "3.6.41",
  "title": "",
  "body": "  Is true for the multiple-valued argument? What about for the principal branch?   "
},
{
  "id": "chapter3-exercises-42",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-42",
  "type": "Exercise",
  "number": "3.6.42",
  "title": "",
  "body": "  For the multiple-valued logarithm, is there a difference between the set of all values of and the set of all values of ?    Try some fixed numbers for .   "
},
{
  "id": "ex_3_1",
  "level": "2",
  "url": "chapter3-exercises.html#ex_3_1",
  "type": "Exercise",
  "number": "3.6.43",
  "title": "",
  "body": "  For each of the following functions, determine all complex numbers for which the function is holomorphic. If you run into a logarithm, use the principal value unless otherwise stated.          differentiable at 0, nowhere holomorphic           differentiable and holomorphic on        where with     differentiable and holomorphic on            nowhere differentiable or holomorphic           differentiable and holomorphic on        .    differentiable and holomorphic in (i.e., entire)    "
},
{
  "id": "ex_3_2",
  "level": "2",
  "url": "chapter3-exercises.html#ex_3_2",
  "type": "Exercise",
  "number": "3.6.44",
  "title": "",
  "body": "  Find all solutions to the following equations:                      there is no solution                                                                   .         "
},
{
  "id": "chapter3-exercises-45",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-45",
  "type": "Exercise",
  "number": "3.6.45",
  "title": "",
  "body": "  Find the image of the annulus under the principal value of the logarithm.   "
},
{
  "id": "chapter3-exercises-46",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-46",
  "type": "Exercise",
  "number": "3.6.46",
  "title": "",
  "body": "  Use to give an alternative proof that is holomorphic in .   "
},
{
  "id": "ex_logexpinv",
  "level": "2",
  "url": "chapter3-exercises.html#ex_logexpinv",
  "type": "Exercise",
  "number": "3.6.47",
  "title": "",
  "body": "  Let be a branch of the logarithm on , and let , the image of . Show that is a bijection whose inverse map is given by (i.e., is the exponential function restricted to ).   "
},
{
  "id": "ex_absolutepowers",
  "level": "2",
  "url": "chapter3-exercises.html#ex_absolutepowers",
  "type": "Exercise",
  "number": "3.6.48",
  "title": "",
  "body": "  Show that if is a positive real constant.   "
},
{
  "id": "ex_3_3",
  "level": "2",
  "url": "chapter3-exercises.html#ex_3_3",
  "type": "Exercise",
  "number": "3.6.49",
  "title": "",
  "body": "  Fix . Find the derivative of .        "
},
{
  "id": "singlevaluedexp",
  "level": "2",
  "url": "chapter3-exercises.html#singlevaluedexp",
  "type": "Exercise",
  "number": "3.6.50",
  "title": "",
  "body": "  Prove that is single valued if and only if is an integer. (Note that this means that complex exponentials do not clash with monomials , no matter which branch of the logarithm is used.) What can you say if is rational?   "
},
{
  "id": "chapter3-exercises-51",
  "level": "2",
  "url": "chapter3-exercises.html#chapter3-exercises-51",
  "type": "Exercise",
  "number": "3.6.51",
  "title": "",
  "body": "  Describe the image under of the line with equation . To do this you should find an equation (at least parametrically) for the image (you can start with the parametric form ), plot it reasonably carefully, and explain what happens in the limits as and .   "
},
{
  "id": "ex_squaredimage1",
  "level": "2",
  "url": "chapter3-exercises.html#ex_squaredimage1",
  "type": "Exercise",
  "number": "3.6.52",
  "title": "",
  "body": "  For this problem, .     Show that the image under of a circle centered at the origin is a circle centered at the origin.    Use polar coordinates.      Show that the image under of a ray starting at the origin is a ray starting at the origin.      Let be the figure formed by the horizontal segment from to , the circular arc from to , and then the vertical segment from to . Draw and .      Is the right angle at the origin in ( ) preserved? Is something wrong here?    "
},
{
  "id": "ex_squaredimage2",
  "level": "2",
  "url": "chapter3-exercises.html#ex_squaredimage2",
  "type": "Exercise",
  "number": "3.6.53",
  "title": "",
  "body": "  As in , let . Let be the square with vertices at , , and . Draw and identify the types of image curves corresponding to the segments from to and from to . They are not parts of either straight lines or circles.    You can write the vertical segment parametrically as . Eliminate the parameter in to get a equation for the image curve.) and are related to the cover picture of the print version of this book.   "
},
{
  "id": "sec_intdef",
  "level": "1",
  "url": "sec_intdef.html",
  "type": "Section",
  "number": "4.1",
  "title": "Definition and Basic Properties",
  "body": " Definition and Basic Properties  At first sight, complex integration is not really different from real integration. Let and let be continuous. Then we define .  This definition is analogous to that of integration of a parametric curve in . For a function that takes complex numbers as arguments, we typically integrate over a path (in place of a real interval). If you meditate about the substitution rule for real integrals ( ), the following definition, which is based on , should come as no surprise.    Suppose is a smooth path parametrized by , and is a complex function which is continuous on . Then we define the integral integral of on as .  This definition immediately extends to paths that are piecewise smooth : piecewise smooth  smooth piecewise Suppose is parametrized by , which is smooth on the intervals . Our footnote on about the subtlety of the definition of a smooth path applies also here, at the subdivision points . Note that we do not require that the left and right derivatives match at these points. Then, assuming again that is continuous on , we define .      To see this definition in action, we compute the integral of the function given by over several paths from 0 to .   Let be the line segment from to . A parametrization of this path is . Here and , and so .    Let be the arc of the parabola from to . A parametrization of this path is . Now we have and , whence .    Let be the union of the two line segments from to and from to . Parametrizations are , and . Hence .        It is apparent but nevertheless noteworthy that these integrals evaluate to different results; in particular unlike in calculus a complex integral does not simply depend on the endpoints of the path of integration.  On the other hand, the complex integral has some standard properties, most of which follow from their real siblings in a straightforward way. Our first observation is that the actual choice of parametrization of does not matter. More precisely, if and are parametrizations of a curve then we say that is a reparametrization of if there is an increasing piecewise smooth map of onto that takes to , in the sense that . reparametrization     If is a piecewise smooth parametrization of a curve and is a reparametrization of then .      To appreciate this statement, consider the two parametrizations , of the unit circle. Then we could write in the two ways: and . A quick substitution shows that the two integrals on the respective right-hand sides are indeed equal.     says that a similar equality will hold for any integral and any parametrization. Its proof is left as , which also shows that the following definition is unchanged under reparametrization.    The length length  of a smooth path is for any parametrization , . Naturally, the length of a piecewise smooth path is the sum of the lengths of its smooth components.      Let be the line segment from to , which can be parametrized by for . Then and so .      Let be the unit circle, which can be parametrized by for . Then and .     Now we observe some basic facts about how the line integral behaves with respect to function addition, scalar multiplication, inverse parametrization, and path concatenation; we also give an upper bound for the absolute value of an integral, which we will make use of time and again. inverse parametrization  concatenation     Suppose is a piecewise smooth path, and are complex functions which are continuous on , and .    .    If is parametrized by , we define the path by . Then .    If and are piecewise smooth paths so that starts where ends, we define the path by following to its end and then continuing on to its end. Then .     .       The path defined in ( ) is the path that we obtain by traveling through in the opposite direction.   ( ) follows directly from the definition of the integral and Theorem , the analogous theorem from calculus.  ( ) follows with the real change of variables : .  For ( ), we need a suitable parametrization for . If has domain and has domain then we can use with domain . Now we break the integral over into two pieces and apply the change of variables : .  The last step follows since restricted to is and restricted to is a reparametrization of .  For ( ), let . Then and thus, since , .  Here we have used for both inequalities.     In , you are invited to show , where is any circle centered at , oriented counter-clockwise. Thus ( ) says that the analogous integral over a clockwise circle equals . Incidentally, the same example shows that the inequality in ( ) is sharp: if has radius , then .    "
},
{
  "id": "sec_intdef-4",
  "level": "2",
  "url": "sec_intdef.html#sec_intdef-4",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  Suppose is a smooth path parametrized by , and is a complex function which is continuous on . Then we define the integral integral of on as .  This definition immediately extends to paths that are piecewise smooth : piecewise smooth  smooth piecewise Suppose is parametrized by , which is smooth on the intervals . Our footnote on about the subtlety of the definition of a smooth path applies also here, at the subdivision points . Note that we do not require that the left and right derivatives match at these points. Then, assuming again that is continuous on , we define .   "
},
{
  "id": "firstintexample",
  "level": "2",
  "url": "sec_intdef.html#firstintexample",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  To see this definition in action, we compute the integral of the function given by over several paths from 0 to .   Let be the line segment from to . A parametrization of this path is . Here and , and so .    Let be the arc of the parabola from to . A parametrization of this path is . Now we have and , whence .    Let be the union of the two line segments from to and from to . Parametrizations are , and . Hence .      "
},
{
  "id": "prop_integrationIsIndependentOfParametrization",
  "level": "2",
  "url": "sec_intdef.html#prop_integrationIsIndependentOfParametrization",
  "type": "Proposition",
  "number": "4.1.3",
  "title": "",
  "body": "  If is a piecewise smooth parametrization of a curve and is a reparametrization of then .   "
},
{
  "id": "sec_intdef-10",
  "level": "2",
  "url": "sec_intdef.html#sec_intdef-10",
  "type": "Example",
  "number": "4.1.4",
  "title": "",
  "body": "  To appreciate this statement, consider the two parametrizations , of the unit circle. Then we could write in the two ways: and . A quick substitution shows that the two integrals on the respective right-hand sides are indeed equal.   "
},
{
  "id": "sec_intdef-12",
  "level": "2",
  "url": "sec_intdef.html#sec_intdef-12",
  "type": "Definition",
  "number": "4.1.5",
  "title": "",
  "body": "  The length length  of a smooth path is for any parametrization , . Naturally, the length of a piecewise smooth path is the sum of the lengths of its smooth components.   "
},
{
  "id": "sec_intdef-13",
  "level": "2",
  "url": "sec_intdef.html#sec_intdef-13",
  "type": "Example",
  "number": "4.1.6",
  "title": "",
  "body": "  Let be the line segment from to , which can be parametrized by for . Then and so .   "
},
{
  "id": "example_circlelength",
  "level": "2",
  "url": "sec_intdef.html#example_circlelength",
  "type": "Example",
  "number": "4.1.7",
  "title": "",
  "body": "  Let be the unit circle, which can be parametrized by for . Then and .   "
},
{
  "id": "intprop",
  "level": "2",
  "url": "sec_intdef.html#intprop",
  "type": "Proposition",
  "number": "4.1.8",
  "title": "",
  "body": "  Suppose is a piecewise smooth path, and are complex functions which are continuous on , and .    .    If is parametrized by , we define the path by . Then .    If and are piecewise smooth paths so that starts where ends, we define the path by following to its end and then continuing on to its end. Then .     .      "
},
{
  "id": "sec_intdef-19",
  "level": "2",
  "url": "sec_intdef.html#sec_intdef-19",
  "type": "Proof",
  "number": "4.1.1",
  "title": "",
  "body": " ( ) follows directly from the definition of the integral and Theorem , the analogous theorem from calculus.  ( ) follows with the real change of variables : .  For ( ), we need a suitable parametrization for . If has domain and has domain then we can use with domain . Now we break the integral over into two pieces and apply the change of variables : .  The last step follows since restricted to is and restricted to is a reparametrization of .  For ( ), let . Then and thus, since , .  Here we have used for both inequalities.  "
},
{
  "id": "sec_intdef-20",
  "level": "2",
  "url": "sec_intdef.html#sec_intdef-20",
  "type": "Example",
  "number": "4.1.9",
  "title": "",
  "body": "  In , you are invited to show , where is any circle centered at , oriented counter-clockwise. Thus ( ) says that the analogous integral over a clockwise circle equals . Incidentally, the same example shows that the inequality in ( ) is sharp: if has radius , then .   "
},
{
  "id": "sec_antiderivatives",
  "level": "1",
  "url": "sec_antiderivatives.html",
  "type": "Section",
  "number": "4.2",
  "title": "Antiderivatives",
  "body": " Antiderivatives   fundamental theorem of calculus  antiderivative   The central result about integration of a real function is the Fundamental Theorem of Calculus ( Theorem ), and our next goal is to discuss complex versions of this theorem. The Fundamental Theorem of Calculus makes a number of important claims: that continuous functions are integrable, their antiderivatives are continuous and differentiable, and that antiderivatives provide easy ways to compute values of definite integrals. The difference between the real case and the complex case is that in the latter, we need to think about integrals over arbitrary paths in .    If is holomorphic in the region and for all , then is an antiderivative of on , also known as a primitive of on .  antiderivative  primitive       We have already seen that is entire and has derivative . Thus, is an antiderivative of on any region . The same goes for , where is any constant.      Since , is an antiderivative of on .      The function is an antiderivative of on . Note that is holomorphic in the larger region ; however, we will see in that  cannot have an antiderivative on that region.    Here is the complex analogue of Theorem ( ).    Suppose is a region and is a piecewise smooth path with parametrization , . If is continuous on and is any antiderivative of on then .     This follows immediately from the definition of a complex integral and Theorem ( ), since :      Since is an antiderivative of in , for each of the three paths in .    There are several interesting consequences of . For starters, if is closed (that is, ) we effortlessly obtain the following.    Suppose is open, is a piecewise smooth closed path, and is continuous on and has an antiderivative on . Then .    This corollary is immediately useful as a test for existence of antiderivatives:    The function given by satisfies for the unit circle , by . Since this integral is nonzero, cannot have an antiderivative in .    We now turn to the complex analogue of Theorem ( ).    Suppose is a region and . Let be a continuous function such that for any closed piecewise smooth path . Then the function defined by , where is any piecewise smooth path in from to , is an antiderivative for on .    There are two statements that we have to prove: first, that our definition of is sound that is, the integral defining does not depend on which path we take from to and second, that for all .  Suppose is a region, , and is a continuous function such that for any closed piecewise smooth path . Then evaluates to the same number for any piecewise smooth path from to , because any two such paths and can be concatenated to a closed path first tracing through and then through backwards, which by assumption yields a zero integral: . This means that is well defined. By the same argument, for any path from to . The constant function has the antiderivative on , and so , by Theorem . Thus .  If is sufficiently small then the line segment from to will be contained in , and so, by applying the assumptions of our theorem for the third time, . We will show that the right-hand side goes to zero as , which will conclude the theorem. Given , we can choose such that because is continuous at . (We also choose small enough so that holds.) Thus if , we can estimate with Proposition ( ) .    There are several variations of Theorem , as we can play with the assumptions about paths in the statement of the theorem. We give one such variation, namely, for polygonal paths , i.e., paths that are composed as unions of line segments. You should convince yourself that the proof of the following result is identical to that of Theorem . path polygonal  path polygonal     Suppose is a region and . Let be a continuous function such that for any closed polygonal path . Then the function defined by , where is any polygonal path in from to , is an antiderivative for on .    If you compare our proof of Theorem to its analogue in , you will see similarities, as well as some complications due to the fact that we now have to operate in the plane as opposed to the real line. Still, so far we have essentially been doing calculus when computing integrals. We will now take a radical departure from this philosophy by studying complex integrals that stay invariant under certain transformations of the paths we are integrating over.  "
},
{
  "id": "sec_antiderivatives-4",
  "level": "2",
  "url": "sec_antiderivatives.html#sec_antiderivatives-4",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "  If is holomorphic in the region and for all , then is an antiderivative of on , also known as a primitive of on .  antiderivative  primitive    "
},
{
  "id": "sec_antiderivatives-5",
  "level": "2",
  "url": "sec_antiderivatives.html#sec_antiderivatives-5",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  We have already seen that is entire and has derivative . Thus, is an antiderivative of on any region . The same goes for , where is any constant.   "
},
{
  "id": "sec_antiderivatives-6",
  "level": "2",
  "url": "sec_antiderivatives.html#sec_antiderivatives-6",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  Since , is an antiderivative of on .   "
},
{
  "id": "sec_antiderivatives-7",
  "level": "2",
  "url": "sec_antiderivatives.html#sec_antiderivatives-7",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  The function is an antiderivative of on . Note that is holomorphic in the larger region ; however, we will see in that  cannot have an antiderivative on that region.   "
},
{
  "id": "antiderthm",
  "level": "2",
  "url": "sec_antiderivatives.html#antiderthm",
  "type": "Theorem",
  "number": "4.2.5",
  "title": "",
  "body": "  Suppose is a region and is a piecewise smooth path with parametrization , . If is continuous on and is any antiderivative of on then .   "
},
{
  "id": "sec_antiderivatives-10",
  "level": "2",
  "url": "sec_antiderivatives.html#sec_antiderivatives-10",
  "type": "Proof",
  "number": "4.2.1",
  "title": "",
  "body": " This follows immediately from the definition of a complex integral and Theorem ( ), since :   "
},
{
  "id": "sec_antiderivatives-11",
  "level": "2",
  "url": "sec_antiderivatives.html#sec_antiderivatives-11",
  "type": "Example",
  "number": "4.2.6",
  "title": "",
  "body": "  Since is an antiderivative of in , for each of the three paths in .   "
},
{
  "id": "antidercor",
  "level": "2",
  "url": "sec_antiderivatives.html#antidercor",
  "type": "Corollary",
  "number": "4.2.7",
  "title": "",
  "body": "  Suppose is open, is a piecewise smooth closed path, and is continuous on and has an antiderivative on . Then .   "
},
{
  "id": "ex_antiderivnotexist",
  "level": "2",
  "url": "sec_antiderivatives.html#ex_antiderivnotexist",
  "type": "Example",
  "number": "4.2.8",
  "title": "",
  "body": "  The function given by satisfies for the unit circle , by . Since this integral is nonzero, cannot have an antiderivative in .   "
},
{
  "id": "thm_FTC1",
  "level": "2",
  "url": "sec_antiderivatives.html#thm_FTC1",
  "type": "Theorem",
  "number": "4.2.9",
  "title": "",
  "body": "  Suppose is a region and . Let be a continuous function such that for any closed piecewise smooth path . Then the function defined by , where is any piecewise smooth path in from to , is an antiderivative for on .    There are two statements that we have to prove: first, that our definition of is sound that is, the integral defining does not depend on which path we take from to and second, that for all .  Suppose is a region, , and is a continuous function such that for any closed piecewise smooth path . Then evaluates to the same number for any piecewise smooth path from to , because any two such paths and can be concatenated to a closed path first tracing through and then through backwards, which by assumption yields a zero integral: . This means that is well defined. By the same argument, for any path from to . The constant function has the antiderivative on , and so , by Theorem . Thus .  If is sufficiently small then the line segment from to will be contained in , and so, by applying the assumptions of our theorem for the third time, . We will show that the right-hand side goes to zero as , which will conclude the theorem. Given , we can choose such that because is continuous at . (We also choose small enough so that holds.) Thus if , we can estimate with Proposition ( ) .   "
},
{
  "id": "thm_FTC1polygonal",
  "level": "2",
  "url": "sec_antiderivatives.html#thm_FTC1polygonal",
  "type": "Corollary",
  "number": "4.2.10",
  "title": "",
  "body": "  Suppose is a region and . Let be a continuous function such that for any closed polygonal path . Then the function defined by , where is any polygonal path in from to , is an antiderivative for on .   "
},
{
  "id": "sec_cauchythm",
  "level": "1",
  "url": "sec_cauchythm.html",
  "type": "Section",
  "number": "4.3",
  "title": "Cauchy’s Theorem",
  "body": " Cauchy's Theorem   The central theorem of complex analysis is based on the following concept.    Suppose and are closed paths in the region , parametrized by , and , respectively. Then is -homotopic to if there exists a continuous function such that, for all , . homotopic We use the notation to mean is -homotopic to .    The function is called a homotopy . homotopy For each fixed , a homotopy is a path parametrized by , and as goes from to , these paths continuously transform from to . The last condition in simply says that each of these paths is also closed.     Figure attempts to illustrate that the unit circle is -homotopic to the square with vertices . Indeed, you should check ( ) that gives a homotopy. Note that for any (hence -homotopic ). shows the paths for and .     This square and circle are -homotopic.     size=3.5    f1(t)=(1,8*t)  f2(t)=(2-8*t,1)  f3(t)=(-1,4*(1-2*t))  f4(t)=(8*t-6,-1)  f5(t)=(1,8*(t-1))  cases(t)=chi_co(0,1\/8,t)*f1(t)+chi_co(1\/8,3\/8,t)*f2(t)+chi_co(3\/8,5\/8,t)*f3(t)+chi_co(5\/8,7\/8,t)*f4(t)+chi_cc(7\/8,2,t)*f5(t)  c(t)=(cos(2*pi*t), sin(2*pi*t))   g(t)=(1-s)*c(t) + 3*s*cases(t)          shows that is an equivalence relation on the set of closed paths in . The definition of homotopy applies to parametrizations of curves; but , together with transitivity of , shows that homotopy is invariant under reparametrizations.   Cauchy's Theorem   Suppose is a region, is holomorphic in , and are piecewise smooth paths in , and . Then . Cauchy's theorem     As a historical aside, it is assumed that Johann Carl Friedrich Gauß (1777 1855) knew a version of this theorem in 1811 but published it only in 1831. Cauchy (of Cauchy Riemann equations fame) published his version in 1825, Karl Theodor Wilhelm Weierstraß (1815 1897) his in 1842. Theorem is often called the Cauchy Goursat Theorem , since Cauchy assumed that the derivative of was continuous, a condition that was first removed by Edouard Jean-Baptiste Goursat (1858 1936). Cauchy Goursat theorem   Before discussing a proof of Theorem , we give a basic, yet prototypical application of it:    We claim that where is the square in Figure , oriented counter-clockwise. We could, of course, compute this integral by hand, but it is easier to apply Cauchy's to the function , which is holomorphic in . We showed in that is -homotopic to the unit circle. says that integrating over the unit circle gives and so Cauchy's implies .     Proof of Theorem  The full proof of Cauchy's Theorem is beyond the scope of this book. However, there are several easier proofs under more restrictive hypotheses than . We shall present a proof under the following extra assumptions:   The derivative is continuous in .    The homotopy from to has piecewise, continuous second derivatives.     Technically, this is the assumption on : where each has continuous second partials. As we have seen with other piecewise definitions, the behavior of at the subdivision lines needs to be understood in terms of limits. ( gives one instance.) Now we turn to the proof under these extra assumptions.  For , let be the path parametrized by . Consider the function given by , so that and . We will show that is constant; in particular, , which proves the theorem. By Leibniz's rule Leibniz's rule ( Theorem ), . Note that we used Theorem to switch the order of the second partials in the penultimate step here is where we need our assumption that has continuous second partials. Also, we needed continuity of in order to apply Leibniz's rule. If is piecewise defined, we split up the integral accordingly.  Finally, by the Fundamental Theorem of Calculus ( Theorem ), applied separately to the real and imaginary parts of the above integrand, , where the last step follows from for all .     Let be a region. If the closed path is -homotopic to a point (that is, a constant path) then is -contractible , and we write . contractible (See Figure for an example.)     This ellipse is -contractible.       center=(2,2.5)  ellipse(t)=(3*cos(t),2*sin(t))   g(t)=s*ellipse(t) + center          The fact that an integral over a point is zero has the following immediate consequence.    Suppose is a region, is holomorphic in , is piecewise smooth, and . Then .    This corollary is worth meditating over. For example, you should compare it with : both results give a zero integral, yet they make truly opposite assumptions (one about the existence of an antiderivative, the other about the existence of a derivative).  Naturally, gives many evaluations of integrals, such as this:    Since is holomorphic in and the ellipse in is -contractible, gives .     (a) says that any closed path is -contractible, which yields the following special case of .    If is entire and is any piecewise smooth closed path, then .    The theorems and corollaries in this section are useful not just for showing that certain integrals are zero:    We'd like to compute where is the unit circle, oriented counter-clockwise. (Try computing it from first principles.) We use a partial fractions expansion to write .  The first integral on the right-hand side is zero by Corollary applied to the function (note that is holomorphic in and is -contractible). The second integral is by Exercise , and so .    Sometimes itself is known as Cauchy's Theorem. See for a related formulation of , with a proof based on Green's Theorem.  "
},
{
  "id": "sec_cauchythm-3",
  "level": "2",
  "url": "sec_cauchythm.html#sec_cauchythm-3",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": "  Suppose and are closed paths in the region , parametrized by , and , respectively. Then is -homotopic to if there exists a continuous function such that, for all , . homotopic We use the notation to mean is -homotopic to .   "
},
{
  "id": "exam_homotopy",
  "level": "2",
  "url": "sec_cauchythm.html#exam_homotopy",
  "type": "Example",
  "number": "4.3.2",
  "title": "",
  "body": "   Figure attempts to illustrate that the unit circle is -homotopic to the square with vertices . Indeed, you should check ( ) that gives a homotopy. Note that for any (hence -homotopic ). shows the paths for and .   "
},
{
  "id": "homotopicfig",
  "level": "2",
  "url": "sec_cauchythm.html#homotopicfig",
  "type": "Figure",
  "number": "4.3.3",
  "title": "",
  "body": " This square and circle are -homotopic.     size=3.5    f1(t)=(1,8*t)  f2(t)=(2-8*t,1)  f3(t)=(-1,4*(1-2*t))  f4(t)=(8*t-6,-1)  f5(t)=(1,8*(t-1))  cases(t)=chi_co(0,1\/8,t)*f1(t)+chi_co(1\/8,3\/8,t)*f2(t)+chi_co(3\/8,5\/8,t)*f3(t)+chi_co(5\/8,7\/8,t)*f4(t)+chi_cc(7\/8,2,t)*f5(t)  c(t)=(cos(2*pi*t), sin(2*pi*t))   g(t)=(1-s)*c(t) + 3*s*cases(t)        "
},
{
  "id": "cauchythm",
  "level": "2",
  "url": "sec_cauchythm.html#cauchythm",
  "type": "Theorem",
  "number": "4.3.4",
  "title": "Cauchy’s Theorem.",
  "body": " Cauchy's Theorem   Suppose is a region, is holomorphic in , and are piecewise smooth paths in , and . Then . Cauchy's theorem    "
},
{
  "id": "sec_cauchythm-11",
  "level": "2",
  "url": "sec_cauchythm.html#sec_cauchythm-11",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": "  We claim that where is the square in Figure , oriented counter-clockwise. We could, of course, compute this integral by hand, but it is easier to apply Cauchy's to the function , which is holomorphic in . We showed in that is -homotopic to the unit circle. says that integrating over the unit circle gives and so Cauchy's implies .   "
},
{
  "id": "sec_cauchythm-12",
  "level": "2",
  "url": "sec_cauchythm.html#sec_cauchythm-12",
  "type": "Proof",
  "number": "4.3.1",
  "title": "Proof of Theorem 4.3.4.",
  "body": " Proof of Theorem  The full proof of Cauchy's Theorem is beyond the scope of this book. However, there are several easier proofs under more restrictive hypotheses than . We shall present a proof under the following extra assumptions:   The derivative is continuous in .    The homotopy from to has piecewise, continuous second derivatives.     Technically, this is the assumption on : where each has continuous second partials. As we have seen with other piecewise definitions, the behavior of at the subdivision lines needs to be understood in terms of limits. ( gives one instance.) Now we turn to the proof under these extra assumptions.  For , let be the path parametrized by . Consider the function given by , so that and . We will show that is constant; in particular, , which proves the theorem. By Leibniz's rule Leibniz's rule ( Theorem ), . Note that we used Theorem to switch the order of the second partials in the penultimate step here is where we need our assumption that has continuous second partials. Also, we needed continuity of in order to apply Leibniz's rule. If is piecewise defined, we split up the integral accordingly.  Finally, by the Fundamental Theorem of Calculus ( Theorem ), applied separately to the real and imaginary parts of the above integrand, , where the last step follows from for all .  "
},
{
  "id": "sec_cauchythm-13",
  "level": "2",
  "url": "sec_cauchythm.html#sec_cauchythm-13",
  "type": "Definition",
  "number": "4.3.6",
  "title": "",
  "body": "  Let be a region. If the closed path is -homotopic to a point (that is, a constant path) then is -contractible , and we write . contractible (See Figure for an example.)   "
},
{
  "id": "contractiblefig",
  "level": "2",
  "url": "sec_cauchythm.html#contractiblefig",
  "type": "Figure",
  "number": "4.3.7",
  "title": "",
  "body": " This ellipse is -contractible.       center=(2,2.5)  ellipse(t)=(3*cos(t),2*sin(t))   g(t)=s*ellipse(t) + center         "
},
{
  "id": "cauchycor",
  "level": "2",
  "url": "sec_cauchythm.html#cauchycor",
  "type": "Corollary",
  "number": "4.3.8",
  "title": "",
  "body": "  Suppose is a region, is holomorphic in , is piecewise smooth, and . Then .   "
},
{
  "id": "sec_cauchythm-19",
  "level": "2",
  "url": "sec_cauchythm.html#sec_cauchythm-19",
  "type": "Example",
  "number": "4.3.9",
  "title": "",
  "body": "  Since is holomorphic in and the ellipse in is -contractible, gives .   "
},
{
  "id": "sec_cauchythm-21",
  "level": "2",
  "url": "sec_cauchythm.html#sec_cauchythm-21",
  "type": "Corollary",
  "number": "4.3.10",
  "title": "",
  "body": "  If is entire and is any piecewise smooth closed path, then .   "
},
{
  "id": "exam_partialfr",
  "level": "2",
  "url": "sec_cauchythm.html#exam_partialfr",
  "type": "Example",
  "number": "4.3.11",
  "title": "",
  "body": "  We'd like to compute where is the unit circle, oriented counter-clockwise. (Try computing it from first principles.) We use a partial fractions expansion to write .  The first integral on the right-hand side is zero by Corollary applied to the function (note that is holomorphic in and is -contractible). The second integral is by Exercise , and so .   "
},
{
  "id": "sec_CIF",
  "level": "1",
  "url": "sec_CIF.html",
  "type": "Section",
  "number": "4.4",
  "title": "Cauchy’s Integral Formula",
  "body": " Cauchy's Integral Formula  We recall our notations for the circle, open disk, and closed disk, respectively, with center and radius . Unless stated otherwise, we orient counter-clockwise.    If is holomorphic in an open set containing then . Cauchy's integral formula     This is Cauchy's Integral Formula for the case that the integration path is a circle; we will prove the general statement at the end of this chapter. However, already this special case is worth meditating over: the data on the right-hand side of is entirely given by the values that takes on for on the circle . Thus Cauchy's Integral Formula says that this data determines . This has the flavor of mean-value theorems , which the following corollary makes even more apparent. mean-value theorem for holomorphic functions     If is holomorphic in an open set containing , then .     By assumption, is holomorphic in an open set that contains , and so is holomorphic in . For any , , and so Cauchy's and give Here the inequality comes from ( ).  Now let . Because is continuous at , there exists such that implies . In particular, this will hold for , and so implies, with , . Since we can choose as small as we'd like, the left-hand side must be zero, which proves .   now follows by definition of the complex integral: , which splits into real and imaginary parts as     Theorem can be used to compute integrals of a certain nature.    We'd like to determine .  The function is holomorphic in , which contains . Thus we can apply : .    Now we would like to extend by replacing with any simple closed piecewise smooth path around . Intuitively, Cauchy's Theorem should supply such an extension: assuming that is holomorphic in a region that includes and its inside, we can find a small such that , and since is holomorphic in and , and yield .  This all smells like good coffee, except ... coffee intuition doesn't prove anything. We'll look at it carefully, fill in the gaps, and then we'll see what we have proved.  First, we need a notion of the inside of a simple closed path. The fact that any such path divides the complex plane into two connected open sets of (the bounded one of which we call the inside or interior of ) is one of the first substantial theorems ever proved in topology, the Jordan Curve Theorem , inside  path inside of  path interior of  topology  Jordan curve theorem due to Camille Jordan (1838 1922). This is the Jordan of Jordan normal form fame, but not the one of Gauß Jordan elimination . In this book we shall assume the validity of the Jordan Curve Theorem.  Second, we need to specify the orientation of , since if the formula gives for one orientation then it will give for the other orientation.    A piecewise smooth simple closed path is positively oriented if it is parametrized so that its inside is on the left as our parametrization traverses . An example is a counter-clockwise oriented circle. path positively oriented  positive orientation     Third, if is positively oriented and is a closed disk inside then we need a homotopy from to the counterclockwise circle that stays inside and away from . This is provided directly by another substantial theorem of topology, the Annulus Theorem , although there are other methods. Again, in this book we shall assume the existence of this homotopy.  These results of topology seem intuitively obvious but are surprisingly difficult to prove. If you'd like to see a proof, we recommend that you take a course in topology.  There is yet another subtle problem. We assumed that is in , but we also need the interior of to be contained in , since we need to apply Cauchy's Theorem to the homotopy between and . We could just add this as an assumption to our theorem, but the following formulation will be more convenient later.   Cauchy's Integral Formula   Suppose is holomorphic in the region and is a positively oriented, simple, closed, piecewise smooth path, such that is inside and . Then .    So all that we need to finish the proof of is one more fact from topology. But we can prove this one:    Suppose is a simple, closed, piecewise smooth path in the region . Then contains the interior of if and only if .     One direction is easy: If contains the interior of and is any closed disk in the interior of then there is a -homotopy from to , and .  In the other direction, we argue by contradiction: Assume but does not contain the interior of . So we can find a point in the interior of which is not in .  Define for . Now is holomorphic on and , so applies, and we have . On the other hand, choose so that is inside . There is a homotopy in from to , so Cauchy's , plus , shows that .  This contradiction finishes the proof.   Notice that, instead of using topology to prove a theorem about holomorphic functions, we just used holomorphic functions to prove a theorem about topology.    Continuing , says that for any positively oriented, simple, closed, piecewise smooth path that contains on its inside and that is -contractible.      To compute we use the partial fractions expansion from : . For the two integrals on the right-hand side, we can use Theorem with the function , which is entire, and so (note that both 2 and 0 are inside ) .    "
},
{
  "id": "cauchyformulacircle",
  "level": "2",
  "url": "sec_CIF.html#cauchyformulacircle",
  "type": "Theorem",
  "number": "4.4.1",
  "title": "",
  "body": "  If is holomorphic in an open set containing then . Cauchy's integral formula    "
},
{
  "id": "meanvalue",
  "level": "2",
  "url": "sec_CIF.html#meanvalue",
  "type": "Corollary",
  "number": "4.4.2",
  "title": "",
  "body": "  If is holomorphic in an open set containing , then .   "
},
{
  "id": "sec_CIF-6",
  "level": "2",
  "url": "sec_CIF.html#sec_CIF-6",
  "type": "Proof",
  "number": "4.4.1",
  "title": "",
  "body": " By assumption, is holomorphic in an open set that contains , and so is holomorphic in . For any , , and so Cauchy's and give Here the inequality comes from ( ).  Now let . Because is continuous at , there exists such that implies . In particular, this will hold for , and so implies, with , . Since we can choose as small as we'd like, the left-hand side must be zero, which proves .   now follows by definition of the complex integral: , which splits into real and imaginary parts as   "
},
{
  "id": "exam_cif",
  "level": "2",
  "url": "sec_CIF.html#exam_cif",
  "type": "Example",
  "number": "4.4.3",
  "title": "",
  "body": "  We'd like to determine .  The function is holomorphic in , which contains . Thus we can apply : .   "
},
{
  "id": "sec_CIF-13",
  "level": "2",
  "url": "sec_CIF.html#sec_CIF-13",
  "type": "Definition",
  "number": "4.4.4",
  "title": "",
  "body": "  A piecewise smooth simple closed path is positively oriented if it is parametrized so that its inside is on the left as our parametrization traverses . An example is a counter-clockwise oriented circle. path positively oriented  positive orientation    "
},
{
  "id": "cauchyformula",
  "level": "2",
  "url": "sec_CIF.html#cauchyformula",
  "type": "Theorem",
  "number": "4.4.5",
  "title": "Cauchy’s Integral Formula.",
  "body": " Cauchy's Integral Formula   Suppose is holomorphic in the region and is a positively oriented, simple, closed, piecewise smooth path, such that is inside and . Then .   "
},
{
  "id": "simpleContractible",
  "level": "2",
  "url": "sec_CIF.html#simpleContractible",
  "type": "Proposition",
  "number": "4.4.6",
  "title": "",
  "body": "  Suppose is a simple, closed, piecewise smooth path in the region . Then contains the interior of if and only if .   "
},
{
  "id": "sec_CIF-20",
  "level": "2",
  "url": "sec_CIF.html#sec_CIF-20",
  "type": "Proof",
  "number": "4.4.2",
  "title": "",
  "body": " One direction is easy: If contains the interior of and is any closed disk in the interior of then there is a -homotopy from to , and .  In the other direction, we argue by contradiction: Assume but does not contain the interior of . So we can find a point in the interior of which is not in .  Define for . Now is holomorphic on and , so applies, and we have . On the other hand, choose so that is inside . There is a homotopy in from to , so Cauchy's , plus , shows that .  This contradiction finishes the proof.  "
},
{
  "id": "exam_cifz_2_1",
  "level": "2",
  "url": "sec_CIF.html#exam_cifz_2_1",
  "type": "Example",
  "number": "4.4.7",
  "title": "",
  "body": "  Continuing , says that for any positively oriented, simple, closed, piecewise smooth path that contains on its inside and that is -contractible.   "
},
{
  "id": "sec_CIF-23",
  "level": "2",
  "url": "sec_CIF.html#sec_CIF-23",
  "type": "Example",
  "number": "4.4.8",
  "title": "",
  "body": "  To compute we use the partial fractions expansion from : . For the two integrals on the right-hand side, we can use Theorem with the function , which is entire, and so (note that both 2 and 0 are inside ) .   "
},
{
  "id": "intchapter-7",
  "level": "1",
  "url": "intchapter-7.html",
  "type": "Exercises",
  "number": "4.5",
  "title": "Exercises",
  "body": "   Find the length of the following paths. Draw pictures of each path and convince yourself that the lengths you computed are sensible.      ,             ,             ,             ,           The last path is a cycloid , the trace of a fixed point on a wheel as it makes one rotation. cycloid       Compute the lengths of the paths from Exercise :     the circle       the line segment from to       the top half of the circle       the rectangle with vertices        Integrate the function over the three paths given in .      Compute where is the unit circle, oriented counterclockwise. More generally, show that for any and , .      Integrate the following functions over the circle :                                                      Evaluate the integrals , , and along each of the following paths.    You can get the second two integrals after you calculate the first two by writing and as .)      is the line segment from to      , , ,             , , 0,        for some      , , 0,        Evaluate for each of the following paths:      is the line segment from to                         is the arc of the parabola from to             Compute for the following functions and paths :      and , .       and is the semicircle from through to .       and is the line segment from to a point .       and is the line segment from to .       and is parametrized by , , and satisfies , , and .       and is some piecewise smooth path from to .       Prove and the fact that the length of does not change under reparametrization.    Assume , , and are smooth. Start with the definition of , apply the chain rule to , and then use the change of variables formula, .      Prove the following integration by parts statement: Let and be holomorphic in , and suppose is a piecewise smooth path from to . integration by parts Then .      Let .     Show that .      Show that if is a nonzero integer.      What is ?       Compute .           Show that for any closed piecewise smooth and any integer . (If is negative, assume that does not pass through the origin, since otherwise the integral is not defined.)       excluded for a good reason: gives a counterexample. Generalizing these, if is any integer, find a closed path so that .      Taking the previous two exercises one step further, fix and let be a simple, closed, positively oriented, piecewise smooth path such that is inside . Show that, for any integer ,       Prove that for any closed path .      Show that is an antiderivative of for . Is equal to ?      Compute the following integrals, where is the line segment from 4 to .                                                      Compute the following integrals.    One of these integrals is considerably easier than the other.      where .       where .       Show that gives a homotopy between the unit circle and the square with vertices .      Use give a homotopy that is an alternative to and does not need a piecewise definition.      Suppose and and are two counterclockwise circles so that is inside both of them. Give a homotopy that proves .      Prove that is an equivalence relation.      Suppose that is a closed path in a region , parametrized by , and is a continuous increasing function from onto . Show that is -homotopic to the reparametrized path .    Make use of for .       Prove that any closed path is -contractible.      Prove that any two closed paths are -homotopic.       This exercise gives an alternative proof of via Green's . Green's theorem Suppose is a region, is holomorphic in , is continuous, is a simple piecewise smooth closed curve, and . Explain that we may write and show that these integrals vanish, by using Green's together with , and then the Cauchy Riemann equations  .      Fix . Compute . (You should get different answers for and .)    In one case is contractible in . In the other you can combine and .     for ; for       Suppose is a polynomial in and is a closed piecewise smooth path in . Show that .      Show that by arguing that this integral does not change if we replace by for any , then use  to obtain an upper bound for that goes to 0 as .      Compute the real integral by writing the sine function in terms of the exponential function and making the substitution to turn the real integral into a complex integral.           Prove that for , . (The function is the Poisson kernel Named after Siméon Denis Poisson (1781 1840). and plays an important role in the world of harmonic functions, as we will see in .) Poisson kernel       Suppose and are holomorphic in the region and is a simple piecewise smooth -contractible path. Prove that if for all , then for all inside .      Show that , for simple paths, is also a corollary of .      Compute for .           Find for , and .    Compute a partial-fractions expansion of the integrand.     for ; for ; for       Use the Cauchy Integral Formula ( ) to evaluate the integral in when .      Compute the following integrals.                                                      Let and define the two paths oriented counter-clockwise and oriented clockwise. Show that even though where , the region of holomorphicity of .      This exercise gives an alternative proof of Cauchy's Integral Formula ( ) that does not depend on Cauchy's Theorem ( ). Suppose the region is convex ; this means that, whenever and are in , the line segment between them is also in . Suppose is holomorphic in , is continuous, and is a positively oriented, simple, closed, piecewise smooth path, such that is inside and .     Consider the function given by . Show that .    Use Theorem (Leibniz's rule) and then find an antiderivative for .      Prove by evaluating and .      Why did we assume is convex?     "
},
{
  "id": "ex_lenth",
  "level": "2",
  "url": "intchapter-7.html#ex_lenth",
  "type": "Exercise",
  "number": "4.5.1",
  "title": "",
  "body": "  Find the length of the following paths. Draw pictures of each path and convince yourself that the lengths you computed are sensible.      ,             ,             ,             ,           The last path is a cycloid , the trace of a fixed point on a wheel as it makes one rotation. cycloid    "
},
{
  "id": "intchapter-7-2",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-2",
  "type": "Exercise",
  "number": "4.5.2",
  "title": "",
  "body": "  Compute the lengths of the paths from Exercise :     the circle       the line segment from to       the top half of the circle       the rectangle with vertices     "
},
{
  "id": "intchapter-7-3",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-3",
  "type": "Exercise",
  "number": "4.5.3",
  "title": "",
  "body": "  Integrate the function over the three paths given in .   "
},
{
  "id": "ex_circleint",
  "level": "2",
  "url": "intchapter-7.html#ex_circleint",
  "type": "Exercise",
  "number": "4.5.4",
  "title": "",
  "body": "  Compute where is the unit circle, oriented counterclockwise. More generally, show that for any and , .   "
},
{
  "id": "ex_4_2",
  "level": "2",
  "url": "intchapter-7.html#ex_4_2",
  "type": "Exercise",
  "number": "4.5.5",
  "title": "",
  "body": "  Integrate the following functions over the circle :                                                   "
},
{
  "id": "ex_varint",
  "level": "2",
  "url": "intchapter-7.html#ex_varint",
  "type": "Exercise",
  "number": "4.5.6",
  "title": "",
  "body": "  Evaluate the integrals , , and along each of the following paths.    You can get the second two integrals after you calculate the first two by writing and as .)      is the line segment from to      , , ,             , , 0,        for some      , , 0,     "
},
{
  "id": "intchapter-7-7",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-7",
  "type": "Exercise",
  "number": "4.5.7",
  "title": "",
  "body": "  Evaluate for each of the following paths:      is the line segment from to                         is the arc of the parabola from to          "
},
{
  "id": "intchapter-7-8",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-8",
  "type": "Exercise",
  "number": "4.5.8",
  "title": "",
  "body": "  Compute for the following functions and paths :      and , .       and is the semicircle from through to .       and is the line segment from to a point .       and is the line segment from to .       and is parametrized by , , and satisfies , , and .       and is some piecewise smooth path from to .    "
},
{
  "id": "ex_IntegrationIsIndependentOfParametrization",
  "level": "2",
  "url": "intchapter-7.html#ex_IntegrationIsIndependentOfParametrization",
  "type": "Exercise",
  "number": "4.5.9",
  "title": "",
  "body": "  Prove and the fact that the length of does not change under reparametrization.    Assume , , and are smooth. Start with the definition of , apply the chain rule to , and then use the change of variables formula, .   "
},
{
  "id": "intchapter-7-10",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-10",
  "type": "Exercise",
  "number": "4.5.10",
  "title": "",
  "body": "  Prove the following integration by parts statement: Let and be holomorphic in , and suppose is a piecewise smooth path from to . integration by parts Then .   "
},
{
  "id": "intchapter-7-11",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-11",
  "type": "Exercise",
  "number": "4.5.11",
  "title": "",
  "body": "  Let .     Show that .      Show that if is a nonzero integer.      What is ?    "
},
{
  "id": "ex_412",
  "level": "2",
  "url": "intchapter-7.html#ex_412",
  "type": "Exercise",
  "number": "4.5.12",
  "title": "",
  "body": "  Compute .        "
},
{
  "id": "ex_4_3",
  "level": "2",
  "url": "intchapter-7.html#ex_4_3",
  "type": "Exercise",
  "number": "4.5.13",
  "title": "",
  "body": "  Show that for any closed piecewise smooth and any integer . (If is negative, assume that does not pass through the origin, since otherwise the integral is not defined.)   "
},
{
  "id": "intchapter-7-14",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-14",
  "type": "Exercise",
  "number": "4.5.14",
  "title": "",
  "body": "   excluded for a good reason: gives a counterexample. Generalizing these, if is any integer, find a closed path so that .   "
},
{
  "id": "ex_laurentoutlook",
  "level": "2",
  "url": "intchapter-7.html#ex_laurentoutlook",
  "type": "Exercise",
  "number": "4.5.15",
  "title": "",
  "body": "  Taking the previous two exercises one step further, fix and let be a simple, closed, positively oriented, piecewise smooth path such that is inside . Show that, for any integer ,    "
},
{
  "id": "intchapter-7-16",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-16",
  "type": "Exercise",
  "number": "4.5.16",
  "title": "",
  "body": "  Prove that for any closed path .   "
},
{
  "id": "intchapter-7-17",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-17",
  "type": "Exercise",
  "number": "4.5.17",
  "title": "",
  "body": "  Show that is an antiderivative of for . Is equal to ?   "
},
{
  "id": "ex_funearlyint",
  "level": "2",
  "url": "intchapter-7.html#ex_funearlyint",
  "type": "Exercise",
  "number": "4.5.18",
  "title": "",
  "body": "  Compute the following integrals, where is the line segment from 4 to .                                                   "
},
{
  "id": "intchapter-7-19",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-19",
  "type": "Exercise",
  "number": "4.5.19",
  "title": "",
  "body": "  Compute the following integrals.    One of these integrals is considerably easier than the other.      where .       where .    "
},
{
  "id": "ex_checkhomotopyexample",
  "level": "2",
  "url": "intchapter-7.html#ex_checkhomotopyexample",
  "type": "Exercise",
  "number": "4.5.20",
  "title": "",
  "body": "  Show that gives a homotopy between the unit circle and the square with vertices .   "
},
{
  "id": "intchapter-7-21",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-21",
  "type": "Exercise",
  "number": "4.5.21",
  "title": "",
  "body": "  Use give a homotopy that is an alternative to and does not need a piecewise definition.   "
},
{
  "id": "ex_circlehomotopy",
  "level": "2",
  "url": "intchapter-7.html#ex_circlehomotopy",
  "type": "Exercise",
  "number": "4.5.22",
  "title": "",
  "body": "  Suppose and and are two counterclockwise circles so that is inside both of them. Give a homotopy that proves .   "
},
{
  "id": "ex_homotopyEquivalence",
  "level": "2",
  "url": "intchapter-7.html#ex_homotopyEquivalence",
  "type": "Exercise",
  "number": "4.5.23",
  "title": "",
  "body": "  Prove that is an equivalence relation.   "
},
{
  "id": "ex_homotopyReparametrization",
  "level": "2",
  "url": "intchapter-7.html#ex_homotopyReparametrization",
  "type": "Exercise",
  "number": "4.5.24",
  "title": "",
  "body": "  Suppose that is a closed path in a region , parametrized by , and is a continuous increasing function from onto . Show that is -homotopic to the reparametrized path .    Make use of for .   "
},
{
  "id": "C-contractible",
  "level": "2",
  "url": "intchapter-7.html#C-contractible",
  "type": "Exercise",
  "number": "4.5.25",
  "title": "",
  "body": "   Prove that any closed path is -contractible.      Prove that any two closed paths are -homotopic.    "
},
{
  "id": "ex_cauchyfromgreen",
  "level": "2",
  "url": "intchapter-7.html#ex_cauchyfromgreen",
  "type": "Exercise",
  "number": "4.5.26",
  "title": "",
  "body": "  This exercise gives an alternative proof of via Green's . Green's theorem Suppose is a region, is holomorphic in , is continuous, is a simple piecewise smooth closed curve, and . Explain that we may write and show that these integrals vanish, by using Green's together with , and then the Cauchy Riemann equations  .   "
},
{
  "id": "ex_circleint2",
  "level": "2",
  "url": "intchapter-7.html#ex_circleint2",
  "type": "Exercise",
  "number": "4.5.27",
  "title": "",
  "body": "  Fix . Compute . (You should get different answers for and .)    In one case is contractible in . In the other you can combine and .     for ; for    "
},
{
  "id": "intchapter-7-28",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-28",
  "type": "Exercise",
  "number": "4.5.28",
  "title": "",
  "body": "  Suppose is a polynomial in and is a closed piecewise smooth path in . Show that .   "
},
{
  "id": "ex_pathtoinfty",
  "level": "2",
  "url": "intchapter-7.html#ex_pathtoinfty",
  "type": "Exercise",
  "number": "4.5.29",
  "title": "",
  "body": "  Show that by arguing that this integral does not change if we replace by for any , then use  to obtain an upper bound for that goes to 0 as .   "
},
{
  "id": "ex_4_5",
  "level": "2",
  "url": "intchapter-7.html#ex_4_5",
  "type": "Exercise",
  "number": "4.5.30",
  "title": "",
  "body": "  Compute the real integral by writing the sine function in terms of the exponential function and making the substitution to turn the real integral into a complex integral.        "
},
{
  "id": "ex_poissonkernel",
  "level": "2",
  "url": "intchapter-7.html#ex_poissonkernel",
  "type": "Exercise",
  "number": "4.5.31",
  "title": "",
  "body": "  Prove that for , . (The function is the Poisson kernel Named after Siméon Denis Poisson (1781 1840). and plays an important role in the world of harmonic functions, as we will see in .) Poisson kernel    "
},
{
  "id": "intchapter-7-32",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-32",
  "type": "Exercise",
  "number": "4.5.32",
  "title": "",
  "body": "  Suppose and are holomorphic in the region and is a simple piecewise smooth -contractible path. Prove that if for all , then for all inside .   "
},
{
  "id": "intchapter-7-33",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-33",
  "type": "Exercise",
  "number": "4.5.33",
  "title": "",
  "body": "  Show that , for simple paths, is also a corollary of .   "
},
{
  "id": "ex_4_4",
  "level": "2",
  "url": "intchapter-7.html#ex_4_4",
  "type": "Exercise",
  "number": "4.5.34",
  "title": "",
  "body": "  Compute for .        "
},
{
  "id": "ex_partfracint",
  "level": "2",
  "url": "intchapter-7.html#ex_partfracint",
  "type": "Exercise",
  "number": "4.5.35",
  "title": "",
  "body": "  Find for , and .    Compute a partial-fractions expansion of the integrand.     for ; for ; for    "
},
{
  "id": "intchapter-7-36",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-36",
  "type": "Exercise",
  "number": "4.5.36",
  "title": "",
  "body": "  Use the Cauchy Integral Formula ( ) to evaluate the integral in when .   "
},
{
  "id": "ex_funints",
  "level": "2",
  "url": "intchapter-7.html#ex_funints",
  "type": "Exercise",
  "number": "4.5.37",
  "title": "",
  "body": "  Compute the following integrals.                                                   "
},
{
  "id": "intchapter-7-38",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-38",
  "type": "Exercise",
  "number": "4.5.38",
  "title": "",
  "body": "  Let and define the two paths oriented counter-clockwise and oriented clockwise. Show that even though where , the region of holomorphicity of .   "
},
{
  "id": "intchapter-7-39",
  "level": "2",
  "url": "intchapter-7.html#intchapter-7-39",
  "type": "Exercise",
  "number": "4.5.39",
  "title": "",
  "body": "  This exercise gives an alternative proof of Cauchy's Integral Formula ( ) that does not depend on Cauchy's Theorem ( ). Suppose the region is convex ; this means that, whenever and are in , the line segment between them is also in . Suppose is holomorphic in , is continuous, and is a positively oriented, simple, closed, piecewise smooth path, such that is inside and .     Consider the function given by . Show that .    Use Theorem (Leibniz's rule) and then find an antiderivative for .      Prove by evaluating and .      Why did we assume is convex?    "
},
{
  "id": "sec_variationstheme",
  "level": "1",
  "url": "sec_variationstheme.html",
  "type": "Section",
  "number": "5.1",
  "title": "Variations of a Theme",
  "body": " Variations of a Theme  Cauchy's integral formula extensions of  We now derive formulas for and which resemble Cauchy's Integral Formula ( ).    Suppose is holomorphic in the region and is a positively oriented, simple, closed, piecewise smooth, -contractible path. If is inside then . Moreover, exists, and .     The idea of our proof is very similar to that of Cauchy's Integral Formula ( and ). We will study the following difference quotient, which we rewrite using . .   Theorem will follow if we can show that the following expression gets arbitrarily small as : . This can be made arbitrarily small if we can show that the integral on the right-hand side stays bounded as . In fact, by Proposition ( ), it suffices to show that the integrand stays bounded as (because and hence are fixed).  Let (whose existence is guaranteed by ). Choose such that ; that is, for all on . By the reverse triangle inequality ( ( )), for all , , which certainly stays bounded as . This proves and thus the Cauchy Integral Formula for .  The proof of the formula for is very similar and will be left to .    Theorem suggests that there are similar formulas for the higher derivatives of . This is in fact true, and theoretically we could obtain them one by one with the methods of the proof of Theorem . However, once we start studying power series for holomorphic functions, we will obtain such a result much more easily; so we save the derivation of integral formulas for higher derivatives of for later ( Corollary ).   has several important consequences. For starters, it can be used to compute certain integrals.    .     To compute the integral , we could employ a partial fractions expansion similar to the one in , or moving the integration path similar to the one in . To exhibit an alternative, we split up the integration path as illustrated in : we introduce an additional path that separates 0 and 1. If we integrate on these two new closed paths ( and ) counterclockwise, the two contributions along the new path will cancel each other.   The integration paths and .     size=2.5  a1=105  a2=-50  r=2  p1=r*(cos(radians(a1)),sin(radians(a1)))  p2=r*(cos(radians(a2)),sin(radians(a2)))  l(t)=(1-t)*p1 + t*p2          0  1   \\gamma_1    \\gamma_2        The effect is that we transformed an integral for which two singularities were inside the integration path into a sum of two integrals, each of which has only one singularity inside the integration path; these new integrals we know how to deal with, using and : .      .    Theorem has another powerful consequence: just from knowing that is holomorphic in , we know of the existence of , that is, is also holomorphic in . Repeating this argument for , then for , , etc., shows that all derivatives exist and are holomorphic. We can translate this into the language of partial derivatives, since the Cauchy Riemann equations ( ) show that any sequence of partial differentiations of results in a constant times .  So we have the following statement, which has no analogue whatsoever in the reals (see, e.g., ).    If is differentiable in a region then is infinitely differentiable in , and all partials of with respect to and exist and are continuous.    "
},
{
  "id": "cauchyformula2",
  "level": "2",
  "url": "sec_variationstheme.html#cauchyformula2",
  "type": "Theorem",
  "number": "5.1.1",
  "title": "",
  "body": "  Suppose is holomorphic in the region and is a positively oriented, simple, closed, piecewise smooth, -contractible path. If is inside then . Moreover, exists, and .   "
},
{
  "id": "sec_variationstheme-5",
  "level": "2",
  "url": "sec_variationstheme.html#sec_variationstheme-5",
  "type": "Proof",
  "number": "5.1.1",
  "title": "",
  "body": " The idea of our proof is very similar to that of Cauchy's Integral Formula ( and ). We will study the following difference quotient, which we rewrite using . .   Theorem will follow if we can show that the following expression gets arbitrarily small as : . This can be made arbitrarily small if we can show that the integral on the right-hand side stays bounded as . In fact, by Proposition ( ), it suffices to show that the integrand stays bounded as (because and hence are fixed).  Let (whose existence is guaranteed by ). Choose such that ; that is, for all on . By the reverse triangle inequality ( ( )), for all , , which certainly stays bounded as . This proves and thus the Cauchy Integral Formula for .  The proof of the formula for is very similar and will be left to .  "
},
{
  "id": "sec_variationstheme-8",
  "level": "2",
  "url": "sec_variationstheme.html#sec_variationstheme-8",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": "  .  "
},
{
  "id": "ex52",
  "level": "2",
  "url": "sec_variationstheme.html#ex52",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": "  To compute the integral , we could employ a partial fractions expansion similar to the one in , or moving the integration path similar to the one in . To exhibit an alternative, we split up the integration path as illustrated in : we introduce an additional path that separates 0 and 1. If we integrate on these two new closed paths ( and ) counterclockwise, the two contributions along the new path will cancel each other.   The integration paths and .     size=2.5  a1=105  a2=-50  r=2  p1=r*(cos(radians(a1)),sin(radians(a1)))  p2=r*(cos(radians(a2)),sin(radians(a2)))  l(t)=(1-t)*p1 + t*p2          0  1   \\gamma_1    \\gamma_2        The effect is that we transformed an integral for which two singularities were inside the integration path into a sum of two integrals, each of which has only one singularity inside the integration path; these new integrals we know how to deal with, using and : .   "
},
{
  "id": "sec_variationstheme-10",
  "level": "2",
  "url": "sec_variationstheme.html#sec_variationstheme-10",
  "type": "Example",
  "number": "5.1.5",
  "title": "",
  "body": "  .  "
},
{
  "id": "infdiff",
  "level": "2",
  "url": "sec_variationstheme.html#infdiff",
  "type": "Corollary",
  "number": "5.1.6",
  "title": "",
  "body": "  If is differentiable in a region then is infinitely differentiable in , and all partials of with respect to and exist and are continuous.   "
},
{
  "id": "sec_antiderivagain",
  "level": "1",
  "url": "sec_antiderivagain.html",
  "type": "Section",
  "number": "5.2",
  "title": "Antiderivatives Again",
  "body": " Antiderivatives Again  fundamental theorem of calculus  antiderivative   gave us an antiderivative for a function that has zero integrals over closed paths in a given region. Now that we have , meditating just a bit more over gives a converse of sorts to .   Morera's Named after Giancinto Morera (1856 1907). Theorem   Suppose is continuous in the region and for all piecewise smooth closed paths . Morera's theorem Then is holomorphic in .     yields an antiderivative for in . Because is holomorphic in , implies that is also holomorphic in .    Just like there are several variations of , we have variations of . For example, by , we can replace the condition for all piecewise smooth closed paths in the statement of by the condition for all closed polygonal paths (which, in fact, gives a stronger version of this result).  A special case of applies to regions in which every closed path is contractible.    A region is simply connected if for every closed path in . simply connected  region simply-connected     Loosely speaking, a region is simply connected if it has no holes.    Any disk is simply connected, as is . (You should draw a few closed paths in to convince yourself that they are all contractible.) The region is not simply connected as, e.g., the unit circle is not -contractible.    If is holomorphic in a simply-connected region then implies that satisfies the conditions of , whence we conclude:    Every holomorphic function on a simply-connected region has an antiderivative on .    Note that this corollary gives no indication of how to compute an antiderivative. For example, it says that the (entire) function given by has an antiderivative in ; it is an entirely different matter to derive a formula for .   also illustrates the role played by two of the regions in , in connection with the function . This function has no antiderivative on , as we proved in . Consequently (as one can see much more easily), is not simply connected. However, the function does have an antiderivative on the simply-connected region (namely, ), illustrating one instance implied by .  Finally, implies that, if we have two paths in a simply-connected region with the same endpoints, we can concatenate them changing direction on one to form a closed path, which proves:    If is holomorphic in a simply-connected region then is independent of the piecewise smooth path between and . path independent  integral path independent     When an integral depends only on the endpoints of the path, the integral is called path independent . shows that this situation is quite special; it also says that the function does not have an antiderivative in, for example, the region . (Actually, the function does not have an antiderivative in any nonempty region see .)  "
},
{
  "id": "morera",
  "level": "2",
  "url": "sec_antiderivagain.html#morera",
  "type": "Corollary",
  "number": "5.2.1",
  "title": "Morera’s<details class=\"ptx-footnote\" aria-live=\"polite\" id=\"morera-1-1\"><summary class=\"ptx-footnote__number\" title=\"Footnote 5.2.1\"><sup> 1 <\/sup><\/summary><div class=\"ptx-footnote__contents\" id=\"morera-1-1\">Named after Giancinto Morera (1856–1907).<\/div><\/details> Theorem.",
  "body": " Morera's Named after Giancinto Morera (1856 1907). Theorem   Suppose is continuous in the region and for all piecewise smooth closed paths . Morera's theorem Then is holomorphic in .     yields an antiderivative for in . Because is holomorphic in , implies that is also holomorphic in .   "
},
{
  "id": "sec_antiderivagain-8",
  "level": "2",
  "url": "sec_antiderivagain.html#sec_antiderivagain-8",
  "type": "Definition",
  "number": "5.2.2",
  "title": "",
  "body": "  A region is simply connected if for every closed path in . simply connected  region simply-connected    "
},
{
  "id": "ex_simplyconn",
  "level": "2",
  "url": "sec_antiderivagain.html#ex_simplyconn",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  Any disk is simply connected, as is . (You should draw a few closed paths in to convince yourself that they are all contractible.) The region is not simply connected as, e.g., the unit circle is not -contractible.   "
},
{
  "id": "cor_simplyconnectedprimitive",
  "level": "2",
  "url": "sec_antiderivagain.html#cor_simplyconnectedprimitive",
  "type": "Corollary",
  "number": "5.2.4",
  "title": "",
  "body": "  Every holomorphic function on a simply-connected region has an antiderivative on .   "
},
{
  "id": "antidercor2",
  "level": "2",
  "url": "sec_antiderivagain.html#antidercor2",
  "type": "Corollary",
  "number": "5.2.5",
  "title": "",
  "body": "  If is holomorphic in a simply-connected region then is independent of the piecewise smooth path between and . path independent  integral path independent    "
},
{
  "id": "sec_cauchytothelimit",
  "level": "1",
  "url": "sec_cauchytothelimit.html",
  "type": "Section",
  "number": "5.3",
  "title": "Taking Cauchy’s Formulas to the Limit",
  "body": " Taking Cauchy's Formulas to the Limit  Several beautiful applications of Cauchy's Integral Formulas (such as and ) arise from considerations of the limiting behavior of the integral as the path gets arbitrarily large. The first and most famous application concerns the roots of polynomials. As a preparation we prove the following inequality, which is generally quite useful. It says that for large enough, a polynomial of degree looks almost like a constant times .    Suppose is a polynomial of degree with leading coefficient . Then there is a real number such that for all satisfying .    Since has degree , its leading coefficient is not zero, and we can factor out : .  Then the sum inside the last factor has limit as (by Exercise ), and so its modulus is between and as long as is large enough.     Fundamental Theorem of Algebra The Fundamental Theorem of Algebra was first proved by Gauß (in his doctoral dissertation in 1799, which had a flaw later, he provided three rigorous proofs), although its statement had been assumed to be correct long before Gauß's time. It is amusing that such an important algebraic result can be proved purely analytically. There are proofs of the Fundamental Theorem of Algebra that do not use complex analysis. On the other hand, all proofs use some analysis (such as the Intermediate Value Theorem). The Fundamental Theorem of Algebra refers to algebra in the sense that it existed in 1799, not to modern algebra. Thus one might say that the Fundamental Theorem of Algebra is neither fundamental to algebra nor even a theorem of algebra. The proof we give here is due to Anton R. Schep and appeared in the American Mathematical Monthly (January 2009).    Every nonconstant polynomial has a root in . polynomial  fundamental theorem of algebra     Suppose (by way of contradiction) that does not have any roots, that is, for all . Then is entire, and so Cauchy's Integral Formula ( ) gives , for any . Let be the degree of and its leading coefficient. ( ) and allow us to estimate, for sufficiently large , . The left-hand side is independent of , while the right-hand side can be made arbitrarily small (by choosing sufficiently large), and so we conclude that , which is impossible.     implies that any polynomial can be factored into linear terms of the form where is a root of , as we can apply the corollary, after getting a root , to (which is again a polynomial by the division algorithm), etc. (see also ).  A compact reformulation of the Fundamental Theorem of Algebra ( ) is to say that is algebraically closed . algebraically closed In contrast, is not algebraically closed.    The polynomial has no roots in . The Fundamental Theorem of Algebra ( ) states that must have a root (in fact, four roots) in :      Another powerful consequence of is the following result, which again has no counterpart in real analysis (consider, for example, the real sine function).   Liouville's This theorem is for historical reasons erroneously attributed to Joseph Liouville (1809 1882). It was published earlier by Cauchy; in fact, Gauß may well have known about it before Cauchy. Theorem   Any bounded entire function is constant. entire  Liouville's theorem     Suppose for all . Given any , we apply with the circle ; note that we can choose any because is entire. By ( ), . The right-hand side can be made arbitrarily small, as we are allowed to choose as large as we want. This implies that , and hence, by , is constant.    As an example of the usefulness of Liouville's theorem ( Corollary ), we give another proof of the Fundamental Theorem of Algebra, close to Gauß's original proof.   Second proof of  Suppose (by way of contradiction) that does not have any roots, that is, for all . Thus the function is entire. But as , by ; consequently, by , is bounded. Now we apply Corollary to deduce that is constant. Hence is constant, which contradicts our assumptions.   As one more example of the theme of getting results from Cauchy's Integral Formulas by taking the limit as a path goes to infinity, we compute an improper integral. improper integral     We will compute the (real) integral .  Let be the counterclockwise semicircle formed by the segment of the real axis from to , followed by the circular arc of radius in the upper half plane from to , where ; see .   The integration paths in .     r=2          R    -R    \\gamma_R        We computed the integral over already in ; . This holds for any , and so we can take the limit as . By Proposition ( ) and the reverse triangle inequality ( ( )), which goes to as . Thus .  Of course this integral can be evaluated almost as easily using standard formulas from calculus. However, just slight modifications of this example lead to improper integrals that are beyond the scope of basic calculus; see and .    "
},
{
  "id": "polynomialestimate",
  "level": "2",
  "url": "sec_cauchytothelimit.html#polynomialestimate",
  "type": "Proposition",
  "number": "5.3.1",
  "title": "",
  "body": "  Suppose is a polynomial of degree with leading coefficient . Then there is a real number such that for all satisfying .    Since has degree , its leading coefficient is not zero, and we can factor out : .  Then the sum inside the last factor has limit as (by Exercise ), and so its modulus is between and as long as is large enough.   "
},
{
  "id": "fundthmalg",
  "level": "2",
  "url": "sec_cauchytothelimit.html#fundthmalg",
  "type": "Theorem",
  "number": "5.3.2",
  "title": "Fundamental Theorem of Algebra<details class=\"ptx-footnote\" aria-live=\"polite\" id=\"fundthmalg-1-1\"><summary class=\"ptx-footnote__number\" title=\"Footnote 5.3.1\"><sup> 1 <\/sup><\/summary><div class=\"ptx-footnote__contents\" id=\"fundthmalg-1-1\">The Fundamental Theorem of Algebra was first proved by Gauß (in his doctoral dissertation in 1799, which had a flaw—later, he provided three rigorous proofs), although its statement had been assumed to be correct long before Gauß’s time. It is amusing that such an important algebraic result can be proved purely analytically.  There are proofs of the Fundamental Theorem of Algebra that do not use complex analysis.  On the other hand, all proofs use <em class=\"emphasis\">some<\/em> analysis (such as the Intermediate Value Theorem).  The Fundamental Theorem of Algebra refers to <em class=\"emphasis\">algebra<\/em> in the sense that it existed in 1799, not to modern algebra. Thus one might say that the Fundamental Theorem of Algebra is neither fundamental to algebra nor even a theorem of algebra. The proof we give here is due to Anton R. Schep and appeared in the <em class=\"emphasis\">American Mathematical Monthly<\/em> (January 2009).<\/div><\/details>.",
  "body": " Fundamental Theorem of Algebra The Fundamental Theorem of Algebra was first proved by Gauß (in his doctoral dissertation in 1799, which had a flaw later, he provided three rigorous proofs), although its statement had been assumed to be correct long before Gauß's time. It is amusing that such an important algebraic result can be proved purely analytically. There are proofs of the Fundamental Theorem of Algebra that do not use complex analysis. On the other hand, all proofs use some analysis (such as the Intermediate Value Theorem). The Fundamental Theorem of Algebra refers to algebra in the sense that it existed in 1799, not to modern algebra. Thus one might say that the Fundamental Theorem of Algebra is neither fundamental to algebra nor even a theorem of algebra. The proof we give here is due to Anton R. Schep and appeared in the American Mathematical Monthly (January 2009).    Every nonconstant polynomial has a root in . polynomial  fundamental theorem of algebra     Suppose (by way of contradiction) that does not have any roots, that is, for all . Then is entire, and so Cauchy's Integral Formula ( ) gives , for any . Let be the degree of and its leading coefficient. ( ) and allow us to estimate, for sufficiently large , . The left-hand side is independent of , while the right-hand side can be made arbitrarily small (by choosing sufficiently large), and so we conclude that , which is impossible.   "
},
{
  "id": "sec_cauchytothelimit-7",
  "level": "2",
  "url": "sec_cauchytothelimit.html#sec_cauchytothelimit-7",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": "  The polynomial has no roots in . The Fundamental Theorem of Algebra ( ) states that must have a root (in fact, four roots) in :    "
},
{
  "id": "liouville",
  "level": "2",
  "url": "sec_cauchytothelimit.html#liouville",
  "type": "Corollary",
  "number": "5.3.4",
  "title": "Liouville’s<details class=\"ptx-footnote\" aria-live=\"polite\" id=\"liouville-1-1\"><summary class=\"ptx-footnote__number\" title=\"Footnote 5.3.2\"><sup> 2 <\/sup><\/summary><div class=\"ptx-footnote__contents\" id=\"liouville-1-1\">This theorem is for historical reasons erroneously attributed to Joseph Liouville (1809–1882). It was published earlier by Cauchy; in fact, Gauß may well have known about it before Cauchy.<\/div><\/details> Theorem.",
  "body": " Liouville's This theorem is for historical reasons erroneously attributed to Joseph Liouville (1809 1882). It was published earlier by Cauchy; in fact, Gauß may well have known about it before Cauchy. Theorem   Any bounded entire function is constant. entire  Liouville's theorem     Suppose for all . Given any , we apply with the circle ; note that we can choose any because is entire. By ( ), . The right-hand side can be made arbitrarily small, as we are allowed to choose as large as we want. This implies that , and hence, by , is constant.   "
},
{
  "id": "sec_cauchytothelimit-12",
  "level": "2",
  "url": "sec_cauchytothelimit.html#sec_cauchytothelimit-12",
  "type": "Proof",
  "number": "5.3.1",
  "title": "Second proof of Theorem 5.3.2.",
  "body": " Second proof of  Suppose (by way of contradiction) that does not have any roots, that is, for all . Thus the function is entire. But as , by ; consequently, by , is bounded. Now we apply Corollary to deduce that is constant. Hence is constant, which contradicts our assumptions.  "
},
{
  "id": "ex_eximpropint",
  "level": "2",
  "url": "sec_cauchytothelimit.html#ex_eximpropint",
  "type": "Example",
  "number": "5.3.5",
  "title": "",
  "body": "  We will compute the (real) integral .  Let be the counterclockwise semicircle formed by the segment of the real axis from to , followed by the circular arc of radius in the upper half plane from to , where ; see .   The integration paths in .     r=2          R    -R    \\gamma_R        We computed the integral over already in ; . This holds for any , and so we can take the limit as . By Proposition ( ) and the reverse triangle inequality ( ( )), which goes to as . Thus .  Of course this integral can be evaluated almost as easily using standard formulas from calculus. However, just slight modifications of this example lead to improper integrals that are beyond the scope of basic calculus; see and .   "
},
{
  "id": "cachyconschapter-6",
  "level": "1",
  "url": "cachyconschapter-6.html",
  "type": "Exercises",
  "number": "5.4",
  "title": "Exercises",
  "body": "   Compute the following integrals, where is the boundary of the square with vertices at , positively oriented:                                                      Prove the formula for in Theorem .    Modify the proof of the integral formula for as follows:   Write a difference quotient for , and use the formula for in to convert this difference quotient into an integral of divided by some polynomial.    Subtract the desired integral formula for from your integral for the difference quotient, and simplify to get the analogue of .    Find a bound as in the proof of Theorem for the integrand, and conclude that the limit of the difference quotient is the desired integral formula.         Integrate the following functions over the circle :                                                                                                   Compute where is any fixed complex number with .           Define through (the integration path is from 0 to 1 along the real line). Prove that is holomorphic in the unit disk .      To appreciate Corollary , show that the function given by is differentiable in , yet is not even continuous (much less differentiable) at 0.      Prove that does not have an antiderivative in any nonempty region.      Show that has an antiderivative on . (What is it?)      Find a region on which has an antiderivative. (Your region should be as large as you can make it. How does this compare with the real function ?)      Suppose is continuous on and is finite. Show that is bounded.    If , use the definition of the limit at infinity to show that there is so that if .  Now argue that for . Use an argument from calculus to show that is bounded for .      Let be a polynomial of degree . Prove that there exist complex numbers and positive integers such that , where .      Show that a polynomial of odd degree with real coefficients must have a real zero.    Use .      Suppose is entire and for all . Prove that is identically 0.    Show first that is constant.      Suppose is entire and there exists such that for all . Prove that is constant.      Suppose is entire with bounded real part, i.e., writing , there exists such that for all . Prove that is constant.    Consider the function .      Suppose is entire and there exist constants and such that for all . Prove that is a polynomial of degree at most 1.    Use and .      Suppose is holomorphic. Prove that for , .      Compute .           In this problem and . Modify our computations in as follows.     Show that where is again (as in ) the counterclockwise semicircle formed by the segment on the real axis, followed by the circular arc of radius in the upper half plane from to .      Show that for in the upper half plane, and conclude that for sufficiently large .      Show that and hence .      Conclude, by just considering the real part, that .       Compute .           This exercise outlines how to extend some of the results of this chapter to the Riemann sphere as defined in Section . Suppose is a region that contains 0, let be a continuous function on , and let be a piecewise smooth path in avoiding the origin, parametrized as , .    Show that where , .    Now suppose is closed and is finite. Let and define the function by   Thus is continuous on and gives the identity .  In particular, we can transfer certain properties between these two integrals. For example, if is path independent, so is . Here is but one application:   Show that is path independent for any integer .    Conclude (once more) that for any integer .       "
},
{
  "id": "ex_5_0",
  "level": "2",
  "url": "cachyconschapter-6.html#ex_5_0",
  "type": "Exercise",
  "number": "5.4.1",
  "title": "",
  "body": "  Compute the following integrals, where is the boundary of the square with vertices at , positively oriented:                                                   "
},
{
  "id": "cauchyformula2ex",
  "level": "2",
  "url": "cachyconschapter-6.html#cauchyformula2ex",
  "type": "Exercise",
  "number": "5.4.2",
  "title": "",
  "body": "  Prove the formula for in Theorem .    Modify the proof of the integral formula for as follows:   Write a difference quotient for , and use the formula for in to convert this difference quotient into an integral of divided by some polynomial.    Subtract the desired integral formula for from your integral for the difference quotient, and simplify to get the analogue of .    Find a bound as in the proof of Theorem for the integrand, and conclude that the limit of the difference quotient is the desired integral formula.      "
},
{
  "id": "ex_5_1",
  "level": "2",
  "url": "cachyconschapter-6.html#ex_5_1",
  "type": "Exercise",
  "number": "5.4.3",
  "title": "",
  "body": "  Integrate the following functions over the circle :                                                                                                "
},
{
  "id": "ex_54",
  "level": "2",
  "url": "cachyconschapter-6.html#ex_54",
  "type": "Exercise",
  "number": "5.4.4",
  "title": "",
  "body": "  Compute where is any fixed complex number with .        "
},
{
  "id": "ex_functiondefinedthroughmorera",
  "level": "2",
  "url": "cachyconschapter-6.html#ex_functiondefinedthroughmorera",
  "type": "Exercise",
  "number": "5.4.5",
  "title": "",
  "body": "  Define through (the integration path is from 0 to 1 along the real line). Prove that is holomorphic in the unit disk .   "
},
{
  "id": "ex_diffbutnottwicediff",
  "level": "2",
  "url": "cachyconschapter-6.html#ex_diffbutnottwicediff",
  "type": "Exercise",
  "number": "5.4.6",
  "title": "",
  "body": "  To appreciate Corollary , show that the function given by is differentiable in , yet is not even continuous (much less differentiable) at 0.   "
},
{
  "id": "ex_zoverline2antider",
  "level": "2",
  "url": "cachyconschapter-6.html#ex_zoverline2antider",
  "type": "Exercise",
  "number": "5.4.7",
  "title": "",
  "body": "  Prove that does not have an antiderivative in any nonempty region.   "
},
{
  "id": "cachyconschapter-6-8",
  "level": "2",
  "url": "cachyconschapter-6.html#cachyconschapter-6-8",
  "type": "Exercise",
  "number": "5.4.8",
  "title": "",
  "body": "  Show that has an antiderivative on . (What is it?)   "
},
{
  "id": "ex_5_2",
  "level": "2",
  "url": "cachyconschapter-6.html#ex_5_2",
  "type": "Exercise",
  "number": "5.4.9",
  "title": "",
  "body": "  Find a region on which has an antiderivative. (Your region should be as large as you can make it. How does this compare with the real function ?)   "
},
{
  "id": "bounded",
  "level": "2",
  "url": "cachyconschapter-6.html#bounded",
  "type": "Exercise",
  "number": "5.4.10",
  "title": "",
  "body": "  Suppose is continuous on and is finite. Show that is bounded.    If , use the definition of the limit at infinity to show that there is so that if .  Now argue that for . Use an argument from calculus to show that is bounded for .   "
},
{
  "id": "fta",
  "level": "2",
  "url": "cachyconschapter-6.html#fta",
  "type": "Exercise",
  "number": "5.4.11",
  "title": "",
  "body": "  Let be a polynomial of degree . Prove that there exist complex numbers and positive integers such that , where .   "
},
{
  "id": "cachyconschapter-6-12",
  "level": "2",
  "url": "cachyconschapter-6.html#cachyconschapter-6-12",
  "type": "Exercise",
  "number": "5.4.12",
  "title": "",
  "body": "  Show that a polynomial of odd degree with real coefficients must have a real zero.    Use .   "
},
{
  "id": "cachyconschapter-6-13",
  "level": "2",
  "url": "cachyconschapter-6.html#cachyconschapter-6-13",
  "type": "Exercise",
  "number": "5.4.13",
  "title": "",
  "body": "  Suppose is entire and for all . Prove that is identically 0.    Show first that is constant.   "
},
{
  "id": "cachyconschapter-6-14",
  "level": "2",
  "url": "cachyconschapter-6.html#cachyconschapter-6-14",
  "type": "Exercise",
  "number": "5.4.14",
  "title": "",
  "body": "  Suppose is entire and there exists such that for all . Prove that is constant.   "
},
{
  "id": "cachyconschapter-6-15",
  "level": "2",
  "url": "cachyconschapter-6.html#cachyconschapter-6-15",
  "type": "Exercise",
  "number": "5.4.15",
  "title": "",
  "body": "  Suppose is entire with bounded real part, i.e., writing , there exists such that for all . Prove that is constant.    Consider the function .   "
},
{
  "id": "cachyconschapter-6-16",
  "level": "2",
  "url": "cachyconschapter-6.html#cachyconschapter-6-16",
  "type": "Exercise",
  "number": "5.4.16",
  "title": "",
  "body": "  Suppose is entire and there exist constants and such that for all . Prove that is a polynomial of degree at most 1.    Use and .   "
},
{
  "id": "cachyconschapter-6-17",
  "level": "2",
  "url": "cachyconschapter-6.html#cachyconschapter-6-17",
  "type": "Exercise",
  "number": "5.4.17",
  "title": "",
  "body": "  Suppose is holomorphic. Prove that for , .   "
},
{
  "id": "ex_1__1_x_4_",
  "level": "2",
  "url": "cachyconschapter-6.html#ex_1__1_x_4_",
  "type": "Exercise",
  "number": "5.4.18",
  "title": "",
  "body": "  Compute .        "
},
{
  "id": "ex_cos_x___1_x_2_",
  "level": "2",
  "url": "cachyconschapter-6.html#ex_cos_x___1_x_2_",
  "type": "Exercise",
  "number": "5.4.19",
  "title": "",
  "body": "  In this problem and . Modify our computations in as follows.     Show that where is again (as in ) the counterclockwise semicircle formed by the segment on the real axis, followed by the circular arc of radius in the upper half plane from to .      Show that for in the upper half plane, and conclude that for sufficiently large .      Show that and hence .      Conclude, by just considering the real part, that .    "
},
{
  "id": "x520",
  "level": "2",
  "url": "cachyconschapter-6.html#x520",
  "type": "Exercise",
  "number": "5.4.20",
  "title": "",
  "body": "  Compute .        "
},
{
  "id": "cachyconschapter-6-21",
  "level": "2",
  "url": "cachyconschapter-6.html#cachyconschapter-6-21",
  "type": "Exercise",
  "number": "5.4.21",
  "title": "",
  "body": "  This exercise outlines how to extend some of the results of this chapter to the Riemann sphere as defined in Section . Suppose is a region that contains 0, let be a continuous function on , and let be a piecewise smooth path in avoiding the origin, parametrized as , .    Show that where , .    Now suppose is closed and is finite. Let and define the function by   Thus is continuous on and gives the identity .  In particular, we can transfer certain properties between these two integrals. For example, if is path independent, so is . Here is but one application:   Show that is path independent for any integer .    Conclude (once more) that for any integer .      "
},
{
  "id": "sec_defharmonic",
  "level": "1",
  "url": "sec_defharmonic.html",
  "type": "Section",
  "number": "6.1",
  "title": "Definition and Basic Properties",
  "body": " Definition and Basic Properties  Recall from the definition of a harmonic function:    Let be a region. A function is harmonic in if it has continuous second partials in and satisfies the Laplace Named after Pierre-Simon Laplace (1749 1827). equation  . Laplace equation  harmonic       The function is harmonic in since .      The function is harmonic in because .    There are (at least) two reasons why harmonic functions are part of the study of complex analysis, and they can be found in the next two results.    Suppose is holomorphic in the region . Then and are harmonic in .    First, by Corollary , and have continuous second partials. By Theorem , and satisfy the Cauchy Riemann equations  in . Hence we can repeat our argumentation in , . Note that in the last step we used the fact that has continuous second partials. The proof that satisfies the Laplace equation is practically identical.     gives us an effective way to show that certain functions are harmonic in by way of constructing an accompanying holomorphic function on .    Revisiting , we can see that is harmonic in also by noticing that is entire and .      A second reason that the function from is harmonic in is that is entire and .     practically shouts for a converse. There are, however, functions that are harmonic in a region but not the real part (say) of a holomorphic function in ( ). We do obtain a converse of if we restrict ourselves to simply-connected regions. region simply-connected     Suppose is harmonic on a simply-connected region . Then there exists a harmonic function in such that is holomorphic in .    The function is called a harmonic conjugate of . harmonic conjugate    We will explicitly construct a holomorphic function (and thus ). First, let .  The plan is to prove that is holomorphic, and then to construct an antiderivative of , which will be almost the function that we're after. To prove that is holomorphic, we use Theorem : first because is harmonic, and have continuous partials. Moreover, again because is harmonic, and satisfy the Cauchy Riemann equations : and .   implies that is holomorphic in , and so we can use to obtain an antiderivative of on (here is where we use the fact that is simply connected). Now we decompose into its real and imaginary parts as . Then, again using , . (The second equation follows from the Cauchy Riemann equations .) But the real part of is , so we obtain and thus for some function that depends only on . On the other hand, comparing the imaginary parts of and yields and so where depends only on . Hence has to be constant, and . But then is a function holomorphic in whose real part is , as promised.   As a side remark, with hindsight it should not be surprising that the function that we first constructed in our proof is the derivative of the sought-after function . Namely, by such a function must satisfy .  (The second equation follows from the Cauchy Riemann equations .) It is also worth mentioning that our proof of shows that if is harmonic in , then is the real part of the function , which is holomorphic in  regardless of whether is simply connected or not .  As our proof of is constructive, we can use it to produce harmonic conjugates.    Revisiting for the second time, we can construct a harmonic conjugate of along the lines of our proof of : first let which has antiderivative whose real part is and whose imaginary part gives a harmonic conjugate for .      We can give a more practical machinery for computing harmonic conjugates, which only depends on computing certain (calculus) integrals; thus this can be easily applied, e.g., to polynomials. We state it for functions that are harmonic in the whole complex plane, but you can easily adjust it to functions that are harmonic on certain subsets of .  is due to Sheldon Axler and the basis for his Mathematica package Harmonic Function Theory.     Suppose is harmonic on . Then is a harmonic conjugate for .     We will prove that satisfies the Cauchy Riemann equations  . The first follows from , by the Fundamental Theorem of Calculus ( ).  Second, by Leibniz's Rule ( ), the Fundamental Theorem of Calculus ( ), and the fact that is harmonic, .    As you might imagine, and allow for a powerful interplay between harmonic and holomorphic functions. In that spirit, the following theorem appears not too surprising. You might appreciate its depth better when looking back at the simple definition of a harmonic function.    A harmonic function is infinitely differentiable.    Suppose is harmonic in and . We will show that exists for all positive integers . Let such that the disk is contained in . Since is simply connected, asserts the existence of a holomorphic function in such that on . By , is infinitely differentiable on , and hence so is its real part .    This proof is the first in a series of proofs that uses the fact that the property of being harmonic is local it is a property at each point of a certain region. Note that in our proof of we did not construct a function that is holomorphic in ; we only constructed such a function on the disk . This might very well differ from one disk to the next.  "
},
{
  "id": "sec_defharmonic-3",
  "level": "2",
  "url": "sec_defharmonic.html#sec_defharmonic-3",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  Let be a region. A function is harmonic in if it has continuous second partials in and satisfies the Laplace Named after Pierre-Simon Laplace (1749 1827). equation  . Laplace equation  harmonic    "
},
{
  "id": "exam_xyharmonic",
  "level": "2",
  "url": "sec_defharmonic.html#exam_xyharmonic",
  "type": "Example",
  "number": "6.1.2",
  "title": "",
  "body": "  The function is harmonic in since .   "
},
{
  "id": "exam_excosyharmonic",
  "level": "2",
  "url": "sec_defharmonic.html#exam_excosyharmonic",
  "type": "Example",
  "number": "6.1.3",
  "title": "",
  "body": "  The function is harmonic in because .   "
},
{
  "id": "reimharmonic",
  "level": "2",
  "url": "sec_defharmonic.html#reimharmonic",
  "type": "Proposition",
  "number": "6.1.4",
  "title": "",
  "body": "  Suppose is holomorphic in the region . Then and are harmonic in .    First, by Corollary , and have continuous second partials. By Theorem , and satisfy the Cauchy Riemann equations  in . Hence we can repeat our argumentation in , . Note that in the last step we used the fact that has continuous second partials. The proof that satisfies the Laplace equation is practically identical.   "
},
{
  "id": "sec_defharmonic-9",
  "level": "2",
  "url": "sec_defharmonic.html#sec_defharmonic-9",
  "type": "Example",
  "number": "6.1.5",
  "title": "",
  "body": "  Revisiting , we can see that is harmonic in also by noticing that is entire and .   "
},
{
  "id": "sec_defharmonic-10",
  "level": "2",
  "url": "sec_defharmonic.html#sec_defharmonic-10",
  "type": "Example",
  "number": "6.1.6",
  "title": "",
  "body": "  A second reason that the function from is harmonic in is that is entire and .   "
},
{
  "id": "harmonictoholomorphic",
  "level": "2",
  "url": "sec_defharmonic.html#harmonictoholomorphic",
  "type": "Theorem",
  "number": "6.1.7",
  "title": "",
  "body": "  Suppose is harmonic on a simply-connected region . Then there exists a harmonic function in such that is holomorphic in .   "
},
{
  "id": "sec_defharmonic-14",
  "level": "2",
  "url": "sec_defharmonic.html#sec_defharmonic-14",
  "type": "Proof",
  "number": "6.1.1",
  "title": "",
  "body": " We will explicitly construct a holomorphic function (and thus ). First, let .  The plan is to prove that is holomorphic, and then to construct an antiderivative of , which will be almost the function that we're after. To prove that is holomorphic, we use Theorem : first because is harmonic, and have continuous partials. Moreover, again because is harmonic, and satisfy the Cauchy Riemann equations : and .   implies that is holomorphic in , and so we can use to obtain an antiderivative of on (here is where we use the fact that is simply connected). Now we decompose into its real and imaginary parts as . Then, again using , . (The second equation follows from the Cauchy Riemann equations .) But the real part of is , so we obtain and thus for some function that depends only on . On the other hand, comparing the imaginary parts of and yields and so where depends only on . Hence has to be constant, and . But then is a function holomorphic in whose real part is , as promised.  "
},
{
  "id": "sec_defharmonic-18",
  "level": "2",
  "url": "sec_defharmonic.html#sec_defharmonic-18",
  "type": "Example",
  "number": "6.1.8",
  "title": "",
  "body": "  Revisiting for the second time, we can construct a harmonic conjugate of along the lines of our proof of : first let which has antiderivative whose real part is and whose imaginary part gives a harmonic conjugate for .   "
},
{
  "id": "thm_axler",
  "level": "2",
  "url": "sec_defharmonic.html#thm_axler",
  "type": "Theorem",
  "number": "6.1.9",
  "title": "",
  "body": "  Suppose is harmonic on . Then is a harmonic conjugate for .   "
},
{
  "id": "sec_defharmonic-23",
  "level": "2",
  "url": "sec_defharmonic.html#sec_defharmonic-23",
  "type": "Proof",
  "number": "6.1.2",
  "title": "",
  "body": " We will prove that satisfies the Cauchy Riemann equations  . The first follows from , by the Fundamental Theorem of Calculus ( ).  Second, by Leibniz's Rule ( ), the Fundamental Theorem of Calculus ( ), and the fact that is harmonic, .  "
},
{
  "id": "cor_harmonicinfdiff",
  "level": "2",
  "url": "sec_defharmonic.html#cor_harmonicinfdiff",
  "type": "Corollary",
  "number": "6.1.10",
  "title": "",
  "body": "  A harmonic function is infinitely differentiable.    Suppose is harmonic in and . We will show that exists for all positive integers . Let such that the disk is contained in . Since is simply connected, asserts the existence of a holomorphic function in such that on . By , is infinitely differentiable on , and hence so is its real part .   "
},
{
  "id": "sec_harmonicmeanvalue",
  "level": "1",
  "url": "sec_harmonicmeanvalue.html",
  "type": "Section",
  "number": "6.2",
  "title": "Mean-Value and Maximum\/Minimum Principle",
  "body": " Mean-Value and Maximum\/Minimum Principle  We have established an intimate connection between harmonic and holomorphic functions, and so it should come as no surprise that some of the theorems we proved for holomorphic functions have analogues in the world of harmonic functions. Here is such a harmonic analogue of Cauchy's Integral Formula ( and ). mean-value theorem for harmonic functions     Suppose is harmonic in the region and . Then .     provides so that . The open disk is simply connected, so by Theorem there is a function holomorphic in such that on . Now we apply to : . follows by taking the real part on both sides.     Corollary and Theorem say that holomorphic and harmonic functions have the mean-value property . Our next result is an important consequence of this property to extreme values of a function.    Let be a region. The function has a strong relative maximum at if there exists a disk such that for all and for some . maximum strong relative The definition of a strong relative minimum is analogous. minimum strong relative  max\/min property for harmonic functions       If is harmonic in the region , then it does not have a strong relative maximum or minimum in .    Assume, by way of contradiction, that is a strong relative maximum. Then there is a disk in centered at containing a point with . Let and apply : .  Intuitively, this cannot hold, because some of the function values we're integrating are smaller than , contradicting the mean-value property. To make this into a thorough argument, suppose that for . Because and is continuous, there is a whole interval of parameters such that for . Now we split up the mean-value integral: All the integrands can be bounded by ; for the middle integral we get a strict inequality. Hence , a contradiction.  The same argument works if we assume that has a relative minimum. But in this case there's a shortcut argument: if has a strong relative minimum then the harmonic function has a strong relative maximum, which we just showed cannot exist.    So far, harmonic functions have benefited from our knowledge of holomorphic functions. Here is a result where the benefit goes in the opposite direction.    If is holomorphic and nonzero in the region , then does not have a strong relative maximum or minimum in .    By , the function is harmonic on and so, by , does not have a strong relative maximum or minimum in . But then neither does , because is monotonic.    We finish our excursion about harmonic functions with a preview and its consequences. We say a real valued function on a region has a weak relative maximum at if there exists a disk such that all satisfy . maximum weak relative We define weak relative minimum similarly. In we will strengthen and to and by replacing strong relative extremum in the hypotheses with weak relative extremum . In particular, we will show that one does not have to assume that is nonzero in a region to have a strong relative maximum in . A special but important case of the maximum\/minimum principle for harmonic functions, , concerns bounded regions. In we will establish that, if is harmonic in a bounded region and continuous on its closure, then where, as usual, denotes the boundary of . We will exploit this in the next two corollaries. boundary     Suppose is harmonic in the bounded region and continuous on its closure. If is zero on then is zero in .    By , and , so must be zero in .      Suppose and are harmonic in the bounded region and continuous on its closure. If for all then for all .     is harmonic in ( Exercise ) and is continuous on the closure , and is zero on . Now apply Corollary .     says that if a function is harmonic in a bounded region and is continuous on the closure then the values of at points in are completely determined by the values of on the boundary of . We should remark, however, that this result is of a completely theoretical nature: it says nothing about how to extend a continuous function given on the boundary of a region to be harmonic in the full region. This problem is called the Dirichlet Named after Johann Peter Gustav Dirichlet (1805 1859). problem , and it has a solution for all bounded simply-connected regions. If the region is the unit disk and is a continuous function on the unit circle, define , where is the Poisson kernel which we introduced in . Poisson kernel Then is the desired extension: it is continuous on the closed unit disk, harmonic in the open unit disk, and agrees with on the unit circle. In simple cases this solution can be converted to solutions in other regions, using a conformal map to the unit disk. conformal All of this is beyond the scope of this book, though gives some indication why the above formula does the trick. At any rate, we remark that says that the solution to the Dirichlet problem is unique.  "
},
{
  "id": "harmonicmeanvalue",
  "level": "2",
  "url": "sec_harmonicmeanvalue.html#harmonicmeanvalue",
  "type": "Theorem",
  "number": "6.2.1",
  "title": "",
  "body": "  Suppose is harmonic in the region and . Then .     provides so that . The open disk is simply connected, so by Theorem there is a function holomorphic in such that on . Now we apply to : . follows by taking the real part on both sides.   "
},
{
  "id": "sec_harmonicmeanvalue-5",
  "level": "2",
  "url": "sec_harmonicmeanvalue.html#sec_harmonicmeanvalue-5",
  "type": "Definition",
  "number": "6.2.2",
  "title": "",
  "body": "  Let be a region. The function has a strong relative maximum at if there exists a disk such that for all and for some . maximum strong relative The definition of a strong relative minimum is analogous. minimum strong relative  max\/min property for harmonic functions    "
},
{
  "id": "harmonicmaxmin",
  "level": "2",
  "url": "sec_harmonicmeanvalue.html#harmonicmaxmin",
  "type": "Theorem",
  "number": "6.2.3",
  "title": "",
  "body": "  If is harmonic in the region , then it does not have a strong relative maximum or minimum in .    Assume, by way of contradiction, that is a strong relative maximum. Then there is a disk in centered at containing a point with . Let and apply : .  Intuitively, this cannot hold, because some of the function values we're integrating are smaller than , contradicting the mean-value property. To make this into a thorough argument, suppose that for . Because and is continuous, there is a whole interval of parameters such that for . Now we split up the mean-value integral: All the integrands can be bounded by ; for the middle integral we get a strict inequality. Hence , a contradiction.  The same argument works if we assume that has a relative minimum. But in this case there's a shortcut argument: if has a strong relative minimum then the harmonic function has a strong relative maximum, which we just showed cannot exist.   "
},
{
  "id": "cor_holomorphicweakmaxmin",
  "level": "2",
  "url": "sec_harmonicmeanvalue.html#cor_holomorphicweakmaxmin",
  "type": "Corollary",
  "number": "6.2.4",
  "title": "",
  "body": "  If is holomorphic and nonzero in the region , then does not have a strong relative maximum or minimum in .    By , the function is harmonic on and so, by , does not have a strong relative maximum or minimum in . But then neither does , because is monotonic.   "
},
{
  "id": "harmoniczeroboundary",
  "level": "2",
  "url": "sec_harmonicmeanvalue.html#harmoniczeroboundary",
  "type": "Corollary",
  "number": "6.2.5",
  "title": "",
  "body": "  Suppose is harmonic in the bounded region and continuous on its closure. If is zero on then is zero in .    By , and , so must be zero in .   "
},
{
  "id": "harmonicboundary",
  "level": "2",
  "url": "sec_harmonicmeanvalue.html#harmonicboundary",
  "type": "Corollary",
  "number": "6.2.6",
  "title": "",
  "body": "  Suppose and are harmonic in the bounded region and continuous on its closure. If for all then for all .     is harmonic in ( Exercise ) and is continuous on the closure , and is zero on . Now apply Corollary .   "
},
{
  "id": "harmonicChapter-5",
  "level": "1",
  "url": "harmonicChapter-5.html",
  "type": "Exercises",
  "number": "6.3",
  "title": "Exercises",
  "body": "   Show that all partial derivatives of a harmonic function are harmonic.      Suppose and are harmonic in , and . Prove that is also harmonic in .      Give an example that shows that the product of two harmonic functions is not necessarily harmonic.      Let .     Show that is harmonic on .      Find an entire function such that .       Consider .     Show that is harmonic on .      Prove that is not the real part of a function that is holomorphic in .       Show that, if is holomorphic and nonzero in , then is harmonic in .      Suppose is a function that depends only on . When is harmonic?      Is it possible to find a real function so that is holomorphic?      Suppose is holomorphic in the region with image , and is harmonic on . Show that is harmonic on .      Suppose is a function given in terms of polar coordinates.     Show that the Laplace equation for is .      Show that is harmonic on . Generalize.      If depends only on , when is harmonic?      If depends only on , when is harmonic?       Prove that, if is harmonic and bounded on , then is constant.    Use and Liouville's Theorem ( ).      Suppose is a harmonic polynomial in and . Prove that the harmonic conjugate of is also a polynomial in and .      Recall from the Poisson kernel , where . In this exercise, we will prove the Poisson Integral Formula : if is harmonic on an open set containing the closed unit disk then for any  . Poisson integral formula   Suppose is harmonic on an open set containing . By we can find so that is harmonic in .     Recall the Möbius function , for some fixed with , from . Show that is harmonic on an open disk containing .      Apply to the function with to deduce .      Recalling, again from , that maps the unit circle to itself, apply a change of variables to to prove .      Deduce by setting .       Suppose is open and . Show that there is so that .    If just take . Otherwise choose some , let , and let . Show that is nonempty, closed and bounded, and apply to find a point that minimizes on . Show that works.    "
},
{
  "id": "harmonicChapter-5-1",
  "level": "2",
  "url": "harmonicChapter-5.html#harmonicChapter-5-1",
  "type": "Exercise",
  "number": "6.3.1",
  "title": "",
  "body": "  Show that all partial derivatives of a harmonic function are harmonic.   "
},
{
  "id": "harmoniclinear",
  "level": "2",
  "url": "harmonicChapter-5.html#harmoniclinear",
  "type": "Exercise",
  "number": "6.3.2",
  "title": "",
  "body": "  Suppose and are harmonic in , and . Prove that is also harmonic in .   "
},
{
  "id": "harmonicChapter-5-3",
  "level": "2",
  "url": "harmonicChapter-5.html#harmonicChapter-5-3",
  "type": "Exercise",
  "number": "6.3.3",
  "title": "",
  "body": "  Give an example that shows that the product of two harmonic functions is not necessarily harmonic.   "
},
{
  "id": "harmonicChapter-5-4",
  "level": "2",
  "url": "harmonicChapter-5.html#harmonicChapter-5-4",
  "type": "Exercise",
  "number": "6.3.4",
  "title": "",
  "body": "  Let .     Show that is harmonic on .      Find an entire function such that .    "
},
{
  "id": "logharmonic",
  "level": "2",
  "url": "harmonicChapter-5.html#logharmonic",
  "type": "Exercise",
  "number": "6.3.5",
  "title": "",
  "body": "  Consider .     Show that is harmonic on .      Prove that is not the real part of a function that is holomorphic in .    "
},
{
  "id": "ex_ln_f_harmonic",
  "level": "2",
  "url": "harmonicChapter-5.html#ex_ln_f_harmonic",
  "type": "Exercise",
  "number": "6.3.6",
  "title": "",
  "body": "  Show that, if is holomorphic and nonzero in , then is harmonic in .   "
},
{
  "id": "harmonicChapter-5-7",
  "level": "2",
  "url": "harmonicChapter-5.html#harmonicChapter-5-7",
  "type": "Exercise",
  "number": "6.3.7",
  "title": "",
  "body": "  Suppose is a function that depends only on . When is harmonic?   "
},
{
  "id": "harmonicChapter-5-8",
  "level": "2",
  "url": "harmonicChapter-5.html#harmonicChapter-5-8",
  "type": "Exercise",
  "number": "6.3.8",
  "title": "",
  "body": "  Is it possible to find a real function so that is holomorphic?   "
},
{
  "id": "harmonicChapter-5-9",
  "level": "2",
  "url": "harmonicChapter-5.html#harmonicChapter-5-9",
  "type": "Exercise",
  "number": "6.3.9",
  "title": "",
  "body": "  Suppose is holomorphic in the region with image , and is harmonic on . Show that is harmonic on .   "
},
{
  "id": "harmonicChapter-5-10",
  "level": "2",
  "url": "harmonicChapter-5.html#harmonicChapter-5-10",
  "type": "Exercise",
  "number": "6.3.10",
  "title": "",
  "body": "  Suppose is a function given in terms of polar coordinates.     Show that the Laplace equation for is .      Show that is harmonic on . Generalize.      If depends only on , when is harmonic?      If depends only on , when is harmonic?    "
},
{
  "id": "harmonicChapter-5-11",
  "level": "2",
  "url": "harmonicChapter-5.html#harmonicChapter-5-11",
  "type": "Exercise",
  "number": "6.3.11",
  "title": "",
  "body": "  Prove that, if is harmonic and bounded on , then is constant.    Use and Liouville's Theorem ( ).   "
},
{
  "id": "harmonicChapter-5-12",
  "level": "2",
  "url": "harmonicChapter-5.html#harmonicChapter-5-12",
  "type": "Exercise",
  "number": "6.3.12",
  "title": "",
  "body": "  Suppose is a harmonic polynomial in and . Prove that the harmonic conjugate of is also a polynomial in and .   "
},
{
  "id": "ex_poissonkernelapp",
  "level": "2",
  "url": "harmonicChapter-5.html#ex_poissonkernelapp",
  "type": "Exercise",
  "number": "6.3.13",
  "title": "",
  "body": "  Recall from the Poisson kernel , where . In this exercise, we will prove the Poisson Integral Formula : if is harmonic on an open set containing the closed unit disk then for any  . Poisson integral formula   Suppose is harmonic on an open set containing . By we can find so that is harmonic in .     Recall the Möbius function , for some fixed with , from . Show that is harmonic on an open disk containing .      Apply to the function with to deduce .      Recalling, again from , that maps the unit circle to itself, apply a change of variables to to prove .      Deduce by setting .    "
},
{
  "id": "ex_biggerdisk",
  "level": "2",
  "url": "harmonicChapter-5.html#ex_biggerdisk",
  "type": "Exercise",
  "number": "6.3.14",
  "title": "",
  "body": "  Suppose is open and . Show that there is so that .    If just take . Otherwise choose some , let , and let . Show that is nonempty, closed and bounded, and apply to find a point that minimizes on . Show that works.   "
},
{
  "id": "sec_sequencescomplete",
  "level": "1",
  "url": "sec_sequencescomplete.html",
  "type": "Section",
  "number": "7.1",
  "title": "Sequences and Completeness",
  "body": " Sequences and Completeness  As in the real case, There will be no surprises in this chapter of the nature real versus complex . a (complex) sequence is a function from the positive (sometimes the nonnegative) integers to the complex numbers. sequence Its values are usually written as (as opposed to ) and we commonly denote the sequence by , , or simply . Considering such a sequence as a function of , the notion of convergence is merely a repeat of the definition we gave in Section , adjusted to the fact that is an integer. sequence  convergence     Suppose is a sequence and such that for all there is an integer such that for all , we have . Then the sequence is convergent and is its limit ; in symbols we write . limit of a sequence  convergent sequence  sequence convergent  sequence limit If no such exists then the sequence is divergent . divergent  sequence divergent     As in our previous definitions of limit, the limit of a sequence is unique if it exists. See .    We claim that : Given , choose . Then for any , .     To prove that a sequence is divergent, we have to show the negation of the statement that defines convergence, that is: given any , there exists such that, given any integer , there exists an integer such that . (If you have not negated many mathematical statements, this is worth meditating about.)    The sequence diverges: Given , choose . We consider two cases: If , then for any , choose such that . (This is always possible since for any .) Then .  If , then for any , choose such that . (This is always possible since for any .) Then .  This proves that diverges.     The following limit laws are the cousins of the identities in and , with one little twist.    Let and be convergent sequences and . Then              provided      .     Furthermore, if is continuous at and all , then .    Again, the proof of this proposition is essentially a repeat from arguments we have given in and , as you should convince yourself in .  We will assume, as an axiom, that is complete . complete To phrase this precisely, we need the following.    The sequence is monotone if it is either nondecreasing ( for all ) or nonincreasing ( for all ). sequence monotone  monotone     There are many equivalent ways of formulating the completeness property for the reals. Here is what we'll go by:   Monotone Sequence Property   Any bounded monotone sequence converges. monotone sequence property     This axiom (or one of its many equivalent statements) gives arguably the most important property of the real number system; namely, that we can, in many cases, determine that a given sequence converges without knowing the value of the limit . In this sense we can use the sequence to define a real number.    Consider the sequence defined by . This sequence is increasing (by definition) and each by . By the Monotone Sequence Property, converges, which allows us to define one of the most famous numbers in all of mathematics,  .      Fix . We claim that : First, the sequence converges because it is decreasing and bounded below by . Let . By , .  Thus , and so (since ) we conclude that .    We remark that the Monotone Sequence Property implies the Least Upper Bound Property : every nonempty set of real numbers with an upper bound has a least upper bound. least upper bound The Least Upper Bound Property, in turn, implies the following theorem, which is often listed as a separate axiom. Both the Archimedean Property and the Least Upper Bound Property can be used in (different) axiomatic developments of .    Archimedean Archimedes of Syracuse (287 212 BCE) attributes this property to Eudoxus of Cnidus (408 355 BCE). Property   If is any real number then there is an integer that is greater than .    For a proof, see . essentially says that infinity is not part of the real numbers. Note that we already used in . The Archimedean Property underlies the construction of an infinite decimal expansion for any real number, while the Monotone Sequence Property shows that any such infinite decimal expansion actually converges to a real number.  We close this discussion of limits with a pair of standard limits. The first of these can be established by calculus methods (such as L'Hôpital's rule ( ), by treating as the variable); both of them can be proved by more elementary considerations. Either way, we leave the proof of the following to .       Exponentials beat polynomials: for any polynomial (with complex coefficients) and any with , .    Factorials beat exponentials: for any , .       "
},
{
  "id": "sec_sequencescomplete-3",
  "level": "2",
  "url": "sec_sequencescomplete.html#sec_sequencescomplete-3",
  "type": "Definition",
  "number": "7.1.1",
  "title": "",
  "body": "  Suppose is a sequence and such that for all there is an integer such that for all , we have . Then the sequence is convergent and is its limit ; in symbols we write . limit of a sequence  convergent sequence  sequence convergent  sequence limit If no such exists then the sequence is divergent . divergent  sequence divergent    "
},
{
  "id": "ex_1_n_converges",
  "level": "2",
  "url": "sec_sequencescomplete.html#ex_1_n_converges",
  "type": "Example",
  "number": "7.1.2",
  "title": "",
  "body": "  We claim that : Given , choose . Then for any , .   "
},
{
  "id": "sec_sequencescomplete-8",
  "level": "2",
  "url": "sec_sequencescomplete.html#sec_sequencescomplete-8",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": "  The sequence diverges: Given , choose . We consider two cases: If , then for any , choose such that . (This is always possible since for any .) Then .  If , then for any , choose such that . (This is always possible since for any .) Then .  This proves that diverges.   "
},
{
  "id": "limitrules",
  "level": "2",
  "url": "sec_sequencescomplete.html#limitrules",
  "type": "Proposition",
  "number": "7.1.4",
  "title": "",
  "body": "  Let and be convergent sequences and . Then              provided      .     Furthermore, if is continuous at and all , then .   "
},
{
  "id": "sec_sequencescomplete-14",
  "level": "2",
  "url": "sec_sequencescomplete.html#sec_sequencescomplete-14",
  "type": "Definition",
  "number": "7.1.5",
  "title": "",
  "body": "  The sequence is monotone if it is either nondecreasing ( for all ) or nonincreasing ( for all ). sequence monotone  monotone    "
},
{
  "id": "sec_sequencescomplete-16",
  "level": "2",
  "url": "sec_sequencescomplete.html#sec_sequencescomplete-16",
  "type": "Axiom",
  "number": "7.1.6",
  "title": "Monotone Sequence Property.",
  "body": " Monotone Sequence Property   Any bounded monotone sequence converges. monotone sequence property    "
},
{
  "id": "ex_e-1series",
  "level": "2",
  "url": "sec_sequencescomplete.html#ex_e-1series",
  "type": "Example",
  "number": "7.1.7",
  "title": "",
  "body": "  Consider the sequence defined by . This sequence is increasing (by definition) and each by . By the Monotone Sequence Property, converges, which allows us to define one of the most famous numbers in all of mathematics,  .   "
},
{
  "id": "r_n-_0",
  "level": "2",
  "url": "sec_sequencescomplete.html#r_n-_0",
  "type": "Example",
  "number": "7.1.8",
  "title": "",
  "body": "  Fix . We claim that : First, the sequence converges because it is decreasing and bounded below by . Let . By , .  Thus , and so (since ) we conclude that .   "
},
{
  "id": "thm_archimedean",
  "level": "2",
  "url": "sec_sequencescomplete.html#thm_archimedean",
  "type": "Theorem",
  "number": "7.1.9",
  "title": "Archimedean<details class=\"ptx-footnote\" aria-live=\"polite\" id=\"thm_archimedean-1-1\"><summary class=\"ptx-footnote__number\" title=\"Footnote 7.1.3\"><sup> 3 <\/sup><\/summary><div class=\"ptx-footnote__contents\" id=\"thm_archimedean-1-1\">Archimedes of Syracuse (287–212 BCE) attributes this property to Eudoxus of Cnidus (408–355 BCE).<\/div><\/details> Property.",
  "body": " Archimedean Archimedes of Syracuse (287 212 BCE) attributes this property to Eudoxus of Cnidus (408 355 BCE). Property   If is any real number then there is an integer that is greater than .   "
},
{
  "id": "prop_pairoflimits",
  "level": "2",
  "url": "sec_sequencescomplete.html#prop_pairoflimits",
  "type": "Proposition",
  "number": "7.1.10",
  "title": "",
  "body": "     Exponentials beat polynomials: for any polynomial (with complex coefficients) and any with , .    Factorials beat exponentials: for any , .      "
},
{
  "id": "sec_series",
  "level": "1",
  "url": "sec_series.html",
  "type": "Section",
  "number": "7.2",
  "title": "Series",
  "body": " Series    A series is a sequence whose members are of the form (or ); we call the sequence of terms of the series. series The (or ) are the partial sums of the series.    If we wanted to be lazy we would define convergence of a series simply by referring to convergence of the partial sums of the series after all, we just defined series through sequences. However, there are some convergence features that take on special appearances for series, so we mention them here explicitly. For starters, a series converges to the limit (or sum ) by definition if . convergent series  limit of a series   To prove that a series converges we use the definition of limit of a sequence: for any we have to find an such that for all , . In the case of a convergent series, we usually write its limit as or .    Fix with . We claim that the geometric series  converges with limit . geometric series   In this case, we can compute the partial sums explicitly: , whose limit as exists by , because .       Another series whose limit we can compute by manipulating the partial sums is . A series where most of the terms cancel like this is called telescoping .     Most of the time we can use the completeness property to check convergence of a series, and it is fortunate that the Monotone Sequence Property has a convenient translation into the language of series of real numbers. The partial sums of a series form a nondecreasing sequence if the terms of the series are nonnegative, and this observation immediately yields the following:    If then converges if and only if the partial sums are bounded.      With this new terminology, we can revisit : Let . In we showed that the partial sums are bounded, and .    Although is a mere direct consequence of the completeness property of , it is surprisingly useful. Here is one application, sometimes called the Comparison Test : comparison test     If for all and converges then so does .    By , the partial sums are bounded, and thus so are .  But this means, again by , that converges.      If converges then .    The contrapositive of this proposition is often used, sometimes called the Test for Divergence :    If or does not exist, then diverges.      Continuing , for the geometric series diverges since in this case either does not exist or is not 0.    Suppose converges. Then, using a) & (d), .    A common mistake is to try to use the converse of , but the converse is false:    The harmonic series  diverges (even though the terms go to ): If we assume the series converges to , then , a contradiction.     Integral Test   If is continuous and nonincreasing, then . integral test     The Integral Test literally comes with a proof by picture see : the integral of on the interval is bounded between and . Adding the pieces gives the inequalities above for the th partial sum versus the integrals from to and from to , and the inequality persists in the limit.   The integral test.      right=5.5  f(x)=1\/sqrt(x)    x  f(x)      f(${k})            right=5.5  f(x)=1\/sqrt(x)    x  f(x)      f(${k})             If is continuous and nonincreasing, then converges if and only if is finite.     Suppose . Then the first inequality in implies that the partial sums are unbounded, and so says that cannot converge.  Conversely, if is finite then the second inequality in says that the partial sums are bounded; thus, again with , we conclude that converges.     The series converges for and diverges for (and the case was the subject of ) because is finite if and only if .    By now you might be amused that we have collected several results on series whose terms are nonnegative real numbers. One reason is that such series are a bit easier to handle, another one is that there is a notion of convergence special to series that relates any series to one with only nonnegative terms:    The series  converges absolutely if converges. absolute convergence       If a series converges absolutely then it converges.    This seems like an obvious statement, but its proof is, nevertheless, nontrivial.   Suppose converges. We first consider the case that each is real. Let Then and for all , and so by , both converge. But then so does .  For the general case , we write each term as . Since for all , implies that converges absolutely, and by an analogous argument, so does . But now we can use the first case to deduce that both and converge, and thus so does .     Continuing , converges for , because then (using ) converges. Viewed as a function in , the series is the Riemann zeta function , an indispensable tool in number theory and many other areas in mathematics and physics. Riemann zeta function The Riemann zeta function is the subject of the arguably most famous open problem in mathematics, the Riemann hypothesis . It turns out that can be extended to a function that is holomorphic on , and the Riemann hypothesis asserts that the roots of this extended function in the strip are all on the critical line  .     Another common mistake is to try to use the converse of , which is also false:    The alternating harmonic series  converges:  alternating harmonic series (There is a small technical detail to be checked here, since we are effectively ignoring half the partial sums of the original series; see .) Since , converges by and .  However, according to , does not converge absolutely.     "
},
{
  "id": "sec_series-2",
  "level": "2",
  "url": "sec_series.html#sec_series-2",
  "type": "Definition",
  "number": "7.2.1",
  "title": "",
  "body": "  A series is a sequence whose members are of the form (or ); we call the sequence of terms of the series. series The (or ) are the partial sums of the series.   "
},
{
  "id": "ex_geomseries",
  "level": "2",
  "url": "sec_series.html#ex_geomseries",
  "type": "Example",
  "number": "7.2.2",
  "title": "",
  "body": "  Fix with . We claim that the geometric series  converges with limit . geometric series   In this case, we can compute the partial sums explicitly: , whose limit as exists by , because .   "
},
{
  "id": "ex_telescope",
  "level": "2",
  "url": "sec_series.html#ex_telescope",
  "type": "Example",
  "number": "7.2.3",
  "title": "",
  "body": "  Another series whose limit we can compute by manipulating the partial sums is . A series where most of the terms cancel like this is called telescoping .   "
},
{
  "id": "positiveseries",
  "level": "2",
  "url": "sec_series.html#positiveseries",
  "type": "Corollary",
  "number": "7.2.4",
  "title": "",
  "body": "  If then converges if and only if the partial sums are bounded.   "
},
{
  "id": "sec_series-11",
  "level": "2",
  "url": "sec_series.html#sec_series-11",
  "type": "Example",
  "number": "7.2.5",
  "title": "",
  "body": "  With this new terminology, we can revisit : Let . In we showed that the partial sums are bounded, and .   "
},
{
  "id": "cor_comparisonseries",
  "level": "2",
  "url": "sec_series.html#cor_comparisonseries",
  "type": "Corollary",
  "number": "7.2.6",
  "title": "",
  "body": "  If for all and converges then so does .    By , the partial sums are bounded, and thus so are .  But this means, again by , that converges.   "
},
{
  "id": "generaltermto0",
  "level": "2",
  "url": "sec_series.html#generaltermto0",
  "type": "Proposition",
  "number": "7.2.7",
  "title": "",
  "body": "  If converges then .   "
},
{
  "id": "cor_divtest",
  "level": "2",
  "url": "sec_series.html#cor_divtest",
  "type": "Corollary",
  "number": "7.2.8",
  "title": "",
  "body": "  If or does not exist, then diverges.   "
},
{
  "id": "ex_geomseriesdiv",
  "level": "2",
  "url": "sec_series.html#ex_geomseriesdiv",
  "type": "Example",
  "number": "7.2.9",
  "title": "",
  "body": "  Continuing , for the geometric series diverges since in this case either does not exist or is not 0.    Suppose converges. Then, using a) & (d), .   "
},
{
  "id": "ex_harmonic",
  "level": "2",
  "url": "sec_series.html#ex_harmonic",
  "type": "Example",
  "number": "7.2.10",
  "title": "",
  "body": "  The harmonic series  diverges (even though the terms go to ): If we assume the series converges to , then , a contradiction.   "
},
{
  "id": "prop_integraltest",
  "level": "2",
  "url": "sec_series.html#prop_integraltest",
  "type": "Proposition",
  "number": "7.2.11",
  "title": "Integral Test.",
  "body": " Integral Test   If is continuous and nonincreasing, then . integral test    "
},
{
  "id": "fig_integraltest",
  "level": "2",
  "url": "sec_series.html#fig_integraltest",
  "type": "Figure",
  "number": "7.2.12",
  "title": "",
  "body": " The integral test.      right=5.5  f(x)=1\/sqrt(x)    x  f(x)      f(${k})            right=5.5  f(x)=1\/sqrt(x)    x  f(x)      f(${k})          "
},
{
  "id": "cor_integraltest",
  "level": "2",
  "url": "sec_series.html#cor_integraltest",
  "type": "Corollary",
  "number": "7.2.13",
  "title": "",
  "body": "  If is continuous and nonincreasing, then converges if and only if is finite.   "
},
{
  "id": "sec_series-24",
  "level": "2",
  "url": "sec_series.html#sec_series-24",
  "type": "Proof",
  "number": "7.2.1",
  "title": "",
  "body": " Suppose . Then the first inequality in implies that the partial sums are unbounded, and so says that cannot converge.  Conversely, if is finite then the second inequality in says that the partial sums are bounded; thus, again with , we conclude that converges.  "
},
{
  "id": "exam_riemannzetaprep",
  "level": "2",
  "url": "sec_series.html#exam_riemannzetaprep",
  "type": "Example",
  "number": "7.2.14",
  "title": "",
  "body": "  The series converges for and diverges for (and the case was the subject of ) because is finite if and only if .   "
},
{
  "id": "sec_series-27",
  "level": "2",
  "url": "sec_series.html#sec_series-27",
  "type": "Definition",
  "number": "7.2.15",
  "title": "",
  "body": "  The series  converges absolutely if converges. absolute convergence    "
},
{
  "id": "absconvthm",
  "level": "2",
  "url": "sec_series.html#absconvthm",
  "type": "Theorem",
  "number": "7.2.16",
  "title": "",
  "body": "  If a series converges absolutely then it converges.   "
},
{
  "id": "sec_series-30",
  "level": "2",
  "url": "sec_series.html#sec_series-30",
  "type": "Proof",
  "number": "7.2.2",
  "title": "",
  "body": " Suppose converges. We first consider the case that each is real. Let Then and for all , and so by , both converge. But then so does .  For the general case , we write each term as . Since for all , implies that converges absolutely, and by an analogous argument, so does . But now we can use the first case to deduce that both and converge, and thus so does .  "
},
{
  "id": "exam_riemannzet",
  "level": "2",
  "url": "sec_series.html#exam_riemannzet",
  "type": "Example",
  "number": "7.2.17",
  "title": "",
  "body": "  Continuing , converges for , because then (using ) converges. Viewed as a function in , the series is the Riemann zeta function , an indispensable tool in number theory and many other areas in mathematics and physics. Riemann zeta function The Riemann zeta function is the subject of the arguably most famous open problem in mathematics, the Riemann hypothesis . It turns out that can be extended to a function that is holomorphic on , and the Riemann hypothesis asserts that the roots of this extended function in the strip are all on the critical line  .    "
},
{
  "id": "ex_altharmonic",
  "level": "2",
  "url": "sec_series.html#ex_altharmonic",
  "type": "Example",
  "number": "7.2.18",
  "title": "",
  "body": "  The alternating harmonic series  converges:  alternating harmonic series (There is a small technical detail to be checked here, since we are effectively ignoring half the partial sums of the original series; see .) Since , converges by and .  However, according to , does not converge absolutely.   "
},
{
  "id": "sec_sequseriesfunctions",
  "level": "1",
  "url": "sec_sequseriesfunctions.html",
  "type": "Section",
  "number": "7.3",
  "title": "Sequences and Series of Functions",
  "body": " Sequences and Series of Functions  The fun starts when we study sequences of functions.    Let and for . We say that  converges pointwise to if for each , . convergence pointwise  pointwise convergence We say that  converges uniformly to if for all there is an such that for all and for all  . convergence uniform  uniform convergence Sometimes we want to express that either notion of convergence holds only on a subset of , in which case we say that converges pointwise\/uniformly on .    It should be clear that uniform convergence on a set implies pointwise convergence on that set; but the converse is not generally true.  Let's digest these two notions of convergence of a function sequence by describing them using quantifiers; as usual, denotes for all and means there exists . Pointwise convergence on says , whereas uniform convergence on translates into . No big deal we only exchanged two of the quantifiers. In the first case, may well depend on , in the second case we need to find an that works for all . And this can make all the difference     Let be defined by . We claim that this sequence of functions converges pointwise to given by . This is immediate for the point . Now given any and , choose . Then for all , . (You ought to check carefully that all of our inequalities work the way we claim they do.)      Let be defined by . We claim that this sequence of functions converges uniformly to given by . Given any and , choose . Then for all , . (Again, you should carefully check our inequalities.)    The differences between and are subtle, and we suggest you meditate over them for a while with a good cup of coffee. You might already suspect that the function sequence in does not converge uniformly, as we will see in a moment. coffee   The first application illustrating the difference between pointwise and uniform convergence says, in essence, that if we have a sequence of functions that converges uniformly on then for all  . We will need similar interchanges of limits frequently.    Suppose and is continuous, for each . If converges uniformly to then is continuous.    Let ; we will prove that is continuous at . By uniform convergence, given , there is an such that for all and all  .  Now we make use of the continuity of the 's. This means that given (the same) , there is a such that whenever , .  All that's left is putting those two inequalities together: by the triangle inequality ( c)), .  This proves that is continuous at .     can sometimes give a hint that a function sequence does not converge uniformly.    We modify and consider the real function sequence given by . It converges pointwise to given by As this limiting function is not continuous, the above convergence cannot be uniform. This gives a strong indication that the convergence in is not uniform either, though this needs a separate proof, as the domain of the functions in is the unit disk ( (b)).    Now that we have established about continuity, we can ask about integration of sequences or series of functions. The next theorem should come as no surprise; however, its consequences (which we will see shortly) are wide ranging.    Suppose is continuous, for , converges uniformly to , and is a piecewise smooth path. Then .    We may assume that is not just a point, in which case the proposition holds trivially. Given , there exists such that for all and all , . With ( ) we can thus estimate .    All of these notions for sequences of functions hold verbatim for series of functions. For example, if converges uniformly on and is a piecewise smooth path, then . In some sense, the above identity is the reason we care about uniform convergence.  There are several criteria for uniform convergence; see, e.g., and , and the following result, sometimes called the Weierstraß -test . Weierstraß -test     Suppose for , and for all , where converges. Then and converge uniformly in . (We say the series  converges absolutely and uniformly .)    For each fixed , the series converges absolutely by . To show that the convergence is uniform, let . Then there exists such that for all , . Thus for all and , , which proves uniform convergence. Replace with in this argument to see that also converges uniformly.      We revisit and consider the geometric series as a series of functions in . We know from that this function series converges pointwise for : .  To study uniform convergence, we apply with . We need a series of upper bounds that converges, so fix a real number and let . Then , and converges by . Thus, says that converges uniformly for .  We note the subtle distinction of domains for pointwise\/uniform convergence: converges (absolutely) for , but to force uniform convergence, we need to shrink the domain to for some (arbitrary but fixed) .    "
},
{
  "id": "sec_sequseriesfunctions-3",
  "level": "2",
  "url": "sec_sequseriesfunctions.html#sec_sequseriesfunctions-3",
  "type": "Definition",
  "number": "7.3.1",
  "title": "",
  "body": "  Let and for . We say that  converges pointwise to if for each , . convergence pointwise  pointwise convergence We say that  converges uniformly to if for all there is an such that for all and for all  . convergence uniform  uniform convergence Sometimes we want to express that either notion of convergence holds only on a subset of , in which case we say that converges pointwise\/uniformly on .   "
},
{
  "id": "ex_nonuniformconv",
  "level": "2",
  "url": "sec_sequseriesfunctions.html#ex_nonuniformconv",
  "type": "Example",
  "number": "7.3.2",
  "title": "",
  "body": "  Let be defined by . We claim that this sequence of functions converges pointwise to given by . This is immediate for the point . Now given any and , choose . Then for all , . (You ought to check carefully that all of our inequalities work the way we claim they do.)   "
},
{
  "id": "ex_uniformconv",
  "level": "2",
  "url": "sec_sequseriesfunctions.html#ex_uniformconv",
  "type": "Example",
  "number": "7.3.3",
  "title": "",
  "body": "  Let be defined by . We claim that this sequence of functions converges uniformly to given by . Given any and , choose . Then for all , . (Again, you should carefully check our inequalities.)   "
},
{
  "id": "sequencecontionuos",
  "level": "2",
  "url": "sec_sequseriesfunctions.html#sequencecontionuos",
  "type": "Proposition",
  "number": "7.3.4",
  "title": "",
  "body": "  Suppose and is continuous, for each . If converges uniformly to then is continuous.    Let ; we will prove that is continuous at . By uniform convergence, given , there is an such that for all and all  .  Now we make use of the continuity of the 's. This means that given (the same) , there is a such that whenever , .  All that's left is putting those two inequalities together: by the triangle inequality ( c)), .  This proves that is continuous at .   "
},
{
  "id": "sec_sequseriesfunctions-12",
  "level": "2",
  "url": "sec_sequseriesfunctions.html#sec_sequseriesfunctions-12",
  "type": "Example",
  "number": "7.3.5",
  "title": "",
  "body": "  We modify and consider the real function sequence given by . It converges pointwise to given by As this limiting function is not continuous, the above convergence cannot be uniform. This gives a strong indication that the convergence in is not uniform either, though this needs a separate proof, as the domain of the functions in is the unit disk ( (b)).   "
},
{
  "id": "seriesintegral",
  "level": "2",
  "url": "sec_sequseriesfunctions.html#seriesintegral",
  "type": "Proposition",
  "number": "7.3.6",
  "title": "",
  "body": "  Suppose is continuous, for , converges uniformly to , and is a piecewise smooth path. Then .    We may assume that is not just a point, in which case the proposition holds trivially. Given , there exists such that for all and all , . With ( ) we can thus estimate .   "
},
{
  "id": "mtest",
  "level": "2",
  "url": "sec_sequseriesfunctions.html#mtest",
  "type": "Proposition",
  "number": "7.3.7",
  "title": "",
  "body": "  Suppose for , and for all , where converges. Then and converge uniformly in . (We say the series  converges absolutely and uniformly .)    For each fixed , the series converges absolutely by . To show that the convergence is uniform, let . Then there exists such that for all , . Thus for all and , , which proves uniform convergence. Replace with in this argument to see that also converges uniformly.   "
},
{
  "id": "ex_geomseriesasfunction",
  "level": "2",
  "url": "sec_sequseriesfunctions.html#ex_geomseriesasfunction",
  "type": "Example",
  "number": "7.3.8",
  "title": "",
  "body": "  We revisit and consider the geometric series as a series of functions in . We know from that this function series converges pointwise for : .  To study uniform convergence, we apply with . We need a series of upper bounds that converges, so fix a real number and let . Then , and converges by . Thus, says that converges uniformly for .  We note the subtle distinction of domains for pointwise\/uniform convergence: converges (absolutely) for , but to force uniform convergence, we need to shrink the domain to for some (arbitrary but fixed) .   "
},
{
  "id": "sec_regionsconvergence",
  "level": "1",
  "url": "sec_regionsconvergence.html",
  "type": "Section",
  "number": "7.4",
  "title": "Regions of Convergence",
  "body": " Regions of Convergence  For the remainder of this chapter (indeed, this book) we concentrate on some very special series of functions.    A power series centered at is a series of the form where . power series       A slight modification of gives a fundamental power series, namely the geometric series  . So here and for all . We note that, as in , this power series converges absolutely for and uniformly for , for any fixed . Finally, as in , the geometric series diverges for .    A general power series has a very similar convergence behavior which, in fact, comes from comparing it to a geometric series.    Given a power series , there exists a real number or , such that    converges absolutely for ;     converges absolutely and uniformly for , for any ;     diverges for .       We remark that this theorem says nothing about the convergence\/divergence of for .    The number in is called the radius of convergence of . The open disk in which the power series converges absolutely is the region of convergence . (If then this is .) region of convergence     In preparation for the proof of , we start with the following observation.    If converges, then converges absolutely whenever .     Let . If converges then and so this sequence of terms is bounded (by ), say . Now if , then . The sum on the right-hand side is a convergent geometric sequence, since , and so converges absolutely by .   With this preparation, we can now prove .   Proof of  Consider the set . (This set is nonempty since .)  If is unbounded then converges absolutely and uniformly for , for any (and so this gives the case of ): choose with , then says that converges absolutely. Since , we can now use .  If is bounded, let be its least upper bound. least upper bound If then converges only for , which establishes in this case.  Now assume . If then (because is a least upper bound for ) there exists such that . Thus converges for , and so converges absolutely by . This finishes (a).  If for some , again we can find such that . Then converges by , and so converges absolutely and uniformly for by . This proves (b).  Finally, if then there exists such that . But diverges, so (by the contrapositive of ) diverges, and so (by the contrapositive of ) diverges, which finishes (c).     If exists then the radius of convergence of equals     We treat the case that is finite and leave the case to .  Given as in the statement of the corollary, it suffices (by ) to show that converges for and diverges for .  Suppose . Since and , there exists such that for . For those we then have and so converges (absolutely) by , because and thus converges as a geometric series. Thus converges.  Now suppose . Again because and now , there exists such that for . For those , , and so the sequence cannot converge to 0. Subsequently (by ), diverges.    You might remember this corollary from calculus, where it goes by the name root test . root test Its twin sister, the ratio test , is the subject of .    For the power series we compute , and gives the radius of convergence 1. (Alternatively, we can argue by differentiating the geometric series.)      Consider the power series . Since , the ratio test ( ) implies that the radius of convergence of is , and so the power series converges absolutely in . In the next chapter, we will see that this power series represents the exponential function.     By way of , almost immediately implies the following.    Suppose the power series has radius of convergence . Then the series represents a function that is continuous on .     Given any point , we can find such that (e.g., if then will do the trick). says that converges uniformly in , and so implies that the power series is continuous in , and so particularly at .   Finally, mixing with gives:    Suppose the power series has radius of convergence and is a piecewise smooth path in . power series integration of Then .  In particular, if is closed then .     Let (whose existence is guaranteed by ). Then and . says that converges uniformly in , and so allows us to switch integral and summation.  The last statement follows now with .   These corollaries will become extremely useful in the next chapter.  "
},
{
  "id": "sec_regionsconvergence-3",
  "level": "2",
  "url": "sec_regionsconvergence.html#sec_regionsconvergence-3",
  "type": "Definition",
  "number": "7.4.1",
  "title": "",
  "body": "  A power series centered at is a series of the form where . power series    "
},
{
  "id": "sec_regionsconvergence-4",
  "level": "2",
  "url": "sec_regionsconvergence.html#sec_regionsconvergence-4",
  "type": "Example",
  "number": "7.4.2",
  "title": "",
  "body": "  A slight modification of gives a fundamental power series, namely the geometric series  . So here and for all . We note that, as in , this power series converges absolutely for and uniformly for , for any fixed . Finally, as in , the geometric series diverges for .   "
},
{
  "id": "convergenceradius",
  "level": "2",
  "url": "sec_regionsconvergence.html#convergenceradius",
  "type": "Theorem",
  "number": "7.4.3",
  "title": "",
  "body": "  Given a power series , there exists a real number or , such that    converges absolutely for ;     converges absolutely and uniformly for , for any ;     diverges for .      "
},
{
  "id": "sec_regionsconvergence-8",
  "level": "2",
  "url": "sec_regionsconvergence.html#sec_regionsconvergence-8",
  "type": "Definition",
  "number": "7.4.4",
  "title": "",
  "body": "  The number in is called the radius of convergence of . The open disk in which the power series converges absolutely is the region of convergence . (If then this is .) region of convergence    "
},
{
  "id": "prop_convergenceradius",
  "level": "2",
  "url": "sec_regionsconvergence.html#prop_convergenceradius",
  "type": "Proposition",
  "number": "7.4.5",
  "title": "",
  "body": "  If converges, then converges absolutely whenever .   "
},
{
  "id": "sec_regionsconvergence-11",
  "level": "2",
  "url": "sec_regionsconvergence.html#sec_regionsconvergence-11",
  "type": "Proof",
  "number": "7.4.1",
  "title": "",
  "body": " Let . If converges then and so this sequence of terms is bounded (by ), say . Now if , then . The sum on the right-hand side is a convergent geometric sequence, since , and so converges absolutely by .  "
},
{
  "id": "sec_regionsconvergence-13",
  "level": "2",
  "url": "sec_regionsconvergence.html#sec_regionsconvergence-13",
  "type": "Proof",
  "number": "7.4.2",
  "title": "Proof of Theorem 7.4.3.",
  "body": " Proof of  Consider the set . (This set is nonempty since .)  If is unbounded then converges absolutely and uniformly for , for any (and so this gives the case of ): choose with , then says that converges absolutely. Since , we can now use .  If is bounded, let be its least upper bound. least upper bound If then converges only for , which establishes in this case.  Now assume . If then (because is a least upper bound for ) there exists such that . Thus converges for , and so converges absolutely by . This finishes (a).  If for some , again we can find such that . Then converges by , and so converges absolutely and uniformly for by . This proves (b).  Finally, if then there exists such that . But diverges, so (by the contrapositive of ) diverges, and so (by the contrapositive of ) diverges, which finishes (c).  "
},
{
  "id": "cor_roottest",
  "level": "2",
  "url": "sec_regionsconvergence.html#cor_roottest",
  "type": "Corollary",
  "number": "7.4.6",
  "title": "",
  "body": "  If exists then the radius of convergence of equals     We treat the case that is finite and leave the case to .  Given as in the statement of the corollary, it suffices (by ) to show that converges for and diverges for .  Suppose . Since and , there exists such that for . For those we then have and so converges (absolutely) by , because and thus converges as a geometric series. Thus converges.  Now suppose . Again because and now , there exists such that for . For those , , and so the sequence cannot converge to 0. Subsequently (by ), diverges.   "
},
{
  "id": "sec_regionsconvergence-16",
  "level": "2",
  "url": "sec_regionsconvergence.html#sec_regionsconvergence-16",
  "type": "Example",
  "number": "7.4.7",
  "title": "",
  "body": "  For the power series we compute , and gives the radius of convergence 1. (Alternatively, we can argue by differentiating the geometric series.)   "
},
{
  "id": "exponentialfunctionradius",
  "level": "2",
  "url": "sec_regionsconvergence.html#exponentialfunctionradius",
  "type": "Example",
  "number": "7.4.8",
  "title": "",
  "body": "  Consider the power series . Since , the ratio test ( ) implies that the radius of convergence of is , and so the power series converges absolutely in . In the next chapter, we will see that this power series represents the exponential function.    "
},
{
  "id": "powseriescontinuous",
  "level": "2",
  "url": "sec_regionsconvergence.html#powseriescontinuous",
  "type": "Corollary",
  "number": "7.4.9",
  "title": "",
  "body": "  Suppose the power series has radius of convergence . Then the series represents a function that is continuous on .   "
},
{
  "id": "sec_regionsconvergence-20",
  "level": "2",
  "url": "sec_regionsconvergence.html#sec_regionsconvergence-20",
  "type": "Proof",
  "number": "7.4.3",
  "title": "",
  "body": " Given any point , we can find such that (e.g., if then will do the trick). says that converges uniformly in , and so implies that the power series is continuous in , and so particularly at .  "
},
{
  "id": "powseriesintegral",
  "level": "2",
  "url": "sec_regionsconvergence.html#powseriesintegral",
  "type": "Corollary",
  "number": "7.4.10",
  "title": "",
  "body": "  Suppose the power series has radius of convergence and is a piecewise smooth path in . power series integration of Then .  In particular, if is closed then .   "
},
{
  "id": "sec_regionsconvergence-23",
  "level": "2",
  "url": "sec_regionsconvergence.html#sec_regionsconvergence-23",
  "type": "Proof",
  "number": "7.4.4",
  "title": "",
  "body": " Let (whose existence is guaranteed by ). Then and . says that converges uniformly in , and so allows us to switch integral and summation.  The last statement follows now with .  "
},
{
  "id": "powerchapter-7",
  "level": "1",
  "url": "powerchapter-7.html",
  "type": "Exercises",
  "number": "7.5",
  "title": "Exercises",
  "body": "   For each of the sequences, prove convergence or divergence. If the sequence converges, find the limit.          divergent           convergent (limit )           divergent           convergent (limit )           convergent (limit )       Determine whether each of the following series converges or diverges.                                  Compute .         Prove .      Prove the following:      .       .       Show that a convergent sequence is bounded, i.e.: if exists, then there is an such that for all .      Show that the limit of a convergent sequence is unique.      Let be a sequence. A point is an accumulation point of the sequence if for every and every there exists some such that . Prove that if a sequence has more than one accumulation point then the sequence diverges.       Show that for any positive integer .      Conclude with that for any positive integer , .       Derive the Archimedean Property from the Monotone Sequence Property.      Prove .      Prove that converges if and only if and converge.      Prove that is complete and that is not complete.      Prove that, if for all and , then . This is called the Squeeze Theorem , and is useful in testing a sequence for convergence.      Find the least upper bound of the set .       Suppose that the sequence converges to zero. Show that converges if and only if converges. Moreover, if the two series converge then they have the same limit.      Give an example where does not converge to and one of the series in (a) diverges while the other converges.       Prove that the series converges if and only if .       Show that diverges.      Show that converges.        Suppose and for . Suppose is a sequence in with and, for each , . Show that converges uniformly to the zero function in .      Re-prove the statement of using part a).        Suppose , for , and converges uniformly to the zero function in . Show that, if is any sequence in , then .      Apply a) to the function sequence given in , together with the sequence , to prove that the convergence given in is not uniform.       Consider given by , for . Prove that converges pointwise to given by yet this convergence is not uniform. (See Figure .)   The functions in .        f(x)=(sin(x))^n    f(x)=sin(x)              Where do the following sequences converge pointwise? Do they converge uniformly on this domain?                    where        Let .     Show that for all .    Treat as a special case; for you can use L'Hôpital's rule ( ) but remember that is the variable, not .      Find .    The answer is not  .      Why doesn't your answer to part (b) violate ?       The product of two power series centered at is another power series centered at . Derive a formula for its coefficients in terms of the coefficients of the original two power series.      Find a power series (and determine its radius of convergence) for the following functions.                                    Find a power series representation about the origin of each of the following functions.                                               Suppose that the sequence is bounded. Show that the radius of convergence of is at least .      Suppose that the sequence does not converge to . Show that the radius of convergence of is at most .       Find the power series centered at 1 and compute its radius of convergence for each of the following functions:                          Use the Weierstraß -test to show that each of the following series converges uniformly on the given domain:      on        on        on where        Fix and . Prove that converges uniformly in the variable  for .      Complete our proof of by considering the case .      Prove that, if exists then the radius of convergence of equals       Find the radius of convergence for each of the following series.      where           where                                                    Find a function representing each of the following series.                                    Recall the function defined in through .  Find a power series for .      Define the functions via , for .     Show that the maximum of is .      Show that converges uniformly to the zero function on .      Show that does not converge to as .      Why doesn't this contradict ?     "
},
{
  "id": "ex_7_1",
  "level": "2",
  "url": "powerchapter-7.html#ex_7_1",
  "type": "Exercise",
  "number": "7.5.1",
  "title": "",
  "body": "  For each of the sequences, prove convergence or divergence. If the sequence converges, find the limit.          divergent           convergent (limit )           divergent           convergent (limit )           convergent (limit )    "
},
{
  "id": "powerchapter-7-2",
  "level": "2",
  "url": "powerchapter-7.html#powerchapter-7-2",
  "type": "Exercise",
  "number": "7.5.2",
  "title": "",
  "body": "  Determine whether each of the following series converges or diverges.                               "
},
{
  "id": "x73",
  "level": "2",
  "url": "powerchapter-7.html#x73",
  "type": "Exercise",
  "number": "7.5.3",
  "title": "",
  "body": "  Compute .      "
},
{
  "id": "ex_limitrulesseq",
  "level": "2",
  "url": "powerchapter-7.html#ex_limitrulesseq",
  "type": "Exercise",
  "number": "7.5.4",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "powerchapter-7-5",
  "level": "2",
  "url": "powerchapter-7.html#powerchapter-7-5",
  "type": "Exercise",
  "number": "7.5.5",
  "title": "",
  "body": "  Prove the following:      .       .    "
},
{
  "id": "ex_convseqbounded",
  "level": "2",
  "url": "powerchapter-7.html#ex_convseqbounded",
  "type": "Exercise",
  "number": "7.5.6",
  "title": "",
  "body": "  Show that a convergent sequence is bounded, i.e.: if exists, then there is an such that for all .   "
},
{
  "id": "ex_sequenceLimitUnique",
  "level": "2",
  "url": "powerchapter-7.html#ex_sequenceLimitUnique",
  "type": "Exercise",
  "number": "7.5.7",
  "title": "",
  "body": "  Show that the limit of a convergent sequence is unique.   "
},
{
  "id": "powerchapter-7-8",
  "level": "2",
  "url": "powerchapter-7.html#powerchapter-7-8",
  "type": "Exercise",
  "number": "7.5.8",
  "title": "",
  "body": "  Let be a sequence. A point is an accumulation point of the sequence if for every and every there exists some such that . Prove that if a sequence has more than one accumulation point then the sequence diverges.   "
},
{
  "id": "ex_edefdaslimit",
  "level": "2",
  "url": "powerchapter-7.html#ex_edefdaslimit",
  "type": "Exercise",
  "number": "7.5.9",
  "title": "",
  "body": "   Show that for any positive integer .      Conclude with that for any positive integer , .    "
},
{
  "id": "ex_archimedean",
  "level": "2",
  "url": "powerchapter-7.html#ex_archimedean",
  "type": "Exercise",
  "number": "7.5.10",
  "title": "",
  "body": "  Derive the Archimedean Property from the Monotone Sequence Property.   "
},
{
  "id": "ex_pairoflimits",
  "level": "2",
  "url": "powerchapter-7.html#ex_pairoflimits",
  "type": "Exercise",
  "number": "7.5.11",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "realimaginaryconverge",
  "level": "2",
  "url": "powerchapter-7.html#realimaginaryconverge",
  "type": "Exercise",
  "number": "7.5.12",
  "title": "",
  "body": "  Prove that converges if and only if and converge.   "
},
{
  "id": "powerchapter-7-13",
  "level": "2",
  "url": "powerchapter-7.html#powerchapter-7-13",
  "type": "Exercise",
  "number": "7.5.13",
  "title": "",
  "body": "  Prove that is complete and that is not complete.   "
},
{
  "id": "powerchapter-7-14",
  "level": "2",
  "url": "powerchapter-7.html#powerchapter-7-14",
  "type": "Exercise",
  "number": "7.5.14",
  "title": "",
  "body": "  Prove that, if for all and , then . This is called the Squeeze Theorem , and is useful in testing a sequence for convergence.   "
},
{
  "id": "powerchapter-7-15",
  "level": "2",
  "url": "powerchapter-7.html#powerchapter-7-15",
  "type": "Exercise",
  "number": "7.5.15",
  "title": "",
  "body": "  Find the least upper bound of the set .   "
},
{
  "id": "ex_groupingterms",
  "level": "2",
  "url": "powerchapter-7.html#ex_groupingterms",
  "type": "Exercise",
  "number": "7.5.16",
  "title": "",
  "body": "   Suppose that the sequence converges to zero. Show that converges if and only if converges. Moreover, if the two series converge then they have the same limit.      Give an example where does not converge to and one of the series in (a) diverges while the other converges.    "
},
{
  "id": "tailtozero",
  "level": "2",
  "url": "powerchapter-7.html#tailtozero",
  "type": "Exercise",
  "number": "7.5.17",
  "title": "",
  "body": "  Prove that the series converges if and only if .   "
},
{
  "id": "powerchapter-7-18",
  "level": "2",
  "url": "powerchapter-7.html#powerchapter-7-18",
  "type": "Exercise",
  "number": "7.5.18",
  "title": "",
  "body": "   Show that diverges.      Show that converges.    "
},
{
  "id": "sup-_0",
  "level": "2",
  "url": "powerchapter-7.html#sup-_0",
  "type": "Exercise",
  "number": "7.5.19",
  "title": "",
  "body": "   Suppose and for . Suppose is a sequence in with and, for each , . Show that converges uniformly to the zero function in .      Re-prove the statement of using part a).    "
},
{
  "id": "fn_zn___0",
  "level": "2",
  "url": "powerchapter-7.html#fn_zn___0",
  "type": "Exercise",
  "number": "7.5.20",
  "title": "",
  "body": "   Suppose , for , and converges uniformly to the zero function in . Show that, if is any sequence in , then .      Apply a) to the function sequence given in , together with the sequence , to prove that the convergence given in is not uniform.    "
},
{
  "id": "ex_sin_n_convergence",
  "level": "2",
  "url": "powerchapter-7.html#ex_sin_n_convergence",
  "type": "Exercise",
  "number": "7.5.21",
  "title": "",
  "body": "  Consider given by , for . Prove that converges pointwise to given by yet this convergence is not uniform. (See Figure .)   The functions in .        f(x)=(sin(x))^n    f(x)=sin(x)           "
},
{
  "id": "powerchapter-7-22",
  "level": "2",
  "url": "powerchapter-7.html#powerchapter-7-22",
  "type": "Exercise",
  "number": "7.5.22",
  "title": "",
  "body": "  Where do the following sequences converge pointwise? Do they converge uniformly on this domain?                    where     "
},
{
  "id": "powerchapter-7-23",
  "level": "2",
  "url": "powerchapter-7.html#powerchapter-7-23",
  "type": "Exercise",
  "number": "7.5.23",
  "title": "",
  "body": "  Let .     Show that for all .    Treat as a special case; for you can use L'Hôpital's rule ( ) but remember that is the variable, not .      Find .    The answer is not  .      Why doesn't your answer to part (b) violate ?    "
},
{
  "id": "powerchapter-7-24",
  "level": "2",
  "url": "powerchapter-7.html#powerchapter-7-24",
  "type": "Exercise",
  "number": "7.5.24",
  "title": "",
  "body": "  The product of two power series centered at is another power series centered at . Derive a formula for its coefficients in terms of the coefficients of the original two power series.   "
},
{
  "id": "ex_7_2",
  "level": "2",
  "url": "powerchapter-7.html#ex_7_2",
  "type": "Exercise",
  "number": "7.5.25",
  "title": "",
  "body": "  Find a power series (and determine its radius of convergence) for the following functions.                                 "
},
{
  "id": "ex_powerex",
  "level": "2",
  "url": "powerchapter-7.html#ex_powerex",
  "type": "Exercise",
  "number": "7.5.26",
  "title": "",
  "body": "  Find a power series representation about the origin of each of the following functions.                                           "
},
{
  "id": "powerchapter-7-27",
  "level": "2",
  "url": "powerchapter-7.html#powerchapter-7-27",
  "type": "Exercise",
  "number": "7.5.27",
  "title": "",
  "body": "   Suppose that the sequence is bounded. Show that the radius of convergence of is at least .      Suppose that the sequence does not converge to . Show that the radius of convergence of is at most .    "
},
{
  "id": "ex_7_3",
  "level": "2",
  "url": "powerchapter-7.html#ex_7_3",
  "type": "Exercise",
  "number": "7.5.28",
  "title": "",
  "body": "  Find the power series centered at 1 and compute its radius of convergence for each of the following functions:                       "
},
{
  "id": "powerchapter-7-29",
  "level": "2",
  "url": "powerchapter-7.html#powerchapter-7-29",
  "type": "Exercise",
  "number": "7.5.29",
  "title": "",
  "body": "  Use the Weierstraß -test to show that each of the following series converges uniformly on the given domain:      on        on        on where     "
},
{
  "id": "prob_geomseriesfunky",
  "level": "2",
  "url": "powerchapter-7.html#prob_geomseriesfunky",
  "type": "Exercise",
  "number": "7.5.30",
  "title": "",
  "body": "  Fix and . Prove that converges uniformly in the variable  for .   "
},
{
  "id": "ex_roottestRinfty",
  "level": "2",
  "url": "powerchapter-7.html#ex_roottestRinfty",
  "type": "Exercise",
  "number": "7.5.31",
  "title": "",
  "body": "  Complete our proof of by considering the case .   "
},
{
  "id": "ex_ratiotest",
  "level": "2",
  "url": "powerchapter-7.html#ex_ratiotest",
  "type": "Exercise",
  "number": "7.5.32",
  "title": "",
  "body": "  Prove that, if exists then the radius of convergence of equals    "
},
{
  "id": "ex_7_4",
  "level": "2",
  "url": "powerchapter-7.html#ex_7_4",
  "type": "Exercise",
  "number": "7.5.33",
  "title": "",
  "body": "  Find the radius of convergence for each of the following series.      where           where                                                 "
},
{
  "id": "ex_734",
  "level": "2",
  "url": "powerchapter-7.html#ex_734",
  "type": "Exercise",
  "number": "7.5.34",
  "title": "",
  "body": "  Find a function representing each of the following series.                                 "
},
{
  "id": "powerchapter-7-35",
  "level": "2",
  "url": "powerchapter-7.html#powerchapter-7-35",
  "type": "Exercise",
  "number": "7.5.35",
  "title": "",
  "body": "  Recall the function defined in through .  Find a power series for .   "
},
{
  "id": "powerchapter-7-36",
  "level": "2",
  "url": "powerchapter-7.html#powerchapter-7-36",
  "type": "Exercise",
  "number": "7.5.36",
  "title": "",
  "body": "  Define the functions via , for .     Show that the maximum of is .      Show that converges uniformly to the zero function on .      Show that does not converge to as .      Why doesn't this contradict ?    "
},
{
  "id": "sec_powerseriesholom",
  "level": "1",
  "url": "sec_powerseriesholom.html",
  "type": "Section",
  "number": "8.1",
  "title": "Power Series and Holomorphic Functions",
  "body": " Power Series and Holomorphic Functions  Here is the first (and easier) half of the first goal we just announced.    Suppose has radius of convergence . Then is holomorphic in .     says that is continuous in . Given any closed piecewise smooth path , gives . Now apply Morera's theorem ( ).    A special case of this result concerns power series with infinite radius of convergence: those represent entire functions.  Now that we know that power series are differentiable in their regions of convergence, we can ask how to find their derivatives. The next result says that we can simply differentiate the series term by term.    Suppose has radius of convergence . Then , and the radius of convergence of this power series is also . power series differentiation of     If then , so we can choose so that . Then the circle lies in and is inside . Since is holomorphic in we can use Cauchy's Integral Formula for ( ), as well as : . Note that we used  again in the penultimate step, but now applied to the function .  The last statement of the theorem is easy to show: the radius of convergence of is at least (since we have shown that the series for converges whenever ), and it cannot be larger than by comparison to the series for , since the coefficients for are larger than the corresponding ones for .      Let . In , we showed that converges in . We claim that , in analogy with the real exponential function. First, by , . Thus , and so, by , is constant. Evaluating at gives that this constant is 1, and so .       We can use the power series expansion for to find power series for the trigonometric functions. For instance, . Note that we are allowed to rearrange the terms of the two added sums because the corresponding series have infinite radii of convergence.     Naturally, can be repeatedly applied to , then to , and so on. The various derivatives of a power series can also be seen as ingredients of the series itself this is the statement of the following Taylor series expansion . Named after Brook Taylor (1685 1731).  Taylor series expansion     Suppose has a positive radius of convergence. Then .     For starters, . Theorem gives . Applying the same theorem to gives and so . A quick induction game establishes .   Taylor's formula shows that the coefficients of any power series converging to on some open disk can be determined from the function restricted to . It follows immediately that the coefficients of a power series are unique:    If and are two power series that both converge to the same function on an open disk centered at , then for all .      We'd like to compute a power series expansion for centered at . Since , suggests that this power series is , which converges for all (essentially by ).    We now turn to the second cornerstone result of this section, that a holomorphic function can be locally represented by a power series.    Suppose is a function holomorphic in . Then can be represented as a power series centered at , with a radius of convergence : , where is any positively oriented, simple, closed, piecewise smooth path in for which is inside .    Let ; so is a function holomorphic in . Given , let . By Cauchy's Integral Formula ( ), . The factor in this integral can be expanded into a geometric series (note that and so ): which converges uniformly in the variable by . Hence applies: .  Now, since , we apply a change of variables to obtain . The only differences of this right-hand side to the statement of the theorem are the paths we're integrating over. However, by Cauchy's , .    We note a remarkable feature of our proof: namely, if we are given a holomorphic function and are interested in expanding into a power series centered at , then we may maximize the radius of convergence of this power series, in the sense that its region of convergence reaches to the boundary of . Let's make this precise.    For a region and a point , we define the distance of to , the boundary of , as the greatest lower bound of ; if this set is empty, we define the distance of to to be .    What we have proved above, on the side, is the following.    If is holomorphic and , then can be expanded into a power series centered at whose radius of convergence is at least the distance of to .      Consider given by and . says that the power series expansion of at 0 will have radius of convergence 1. (Actually, it says this radius is at least 1, but it cannot be larger since are singularities of .) In fact, we can use a geometric series to compute this power series: , with radius of convergence 1.     is yet another example of a result that is plainly false when translated into ; see .  Comparing the coefficients of the power series obtained in with those in , we arrive at the long-promised extension of and .    Suppose is holomorphic in the region and is a positively oriented, simple, closed, piecewise smooth path, such that is inside and . Then Cauchy's integral formula extensions of  .     combined with our often-used ( ) gives an inequality which is often called Cauchy's Estimate : Cauchy's estimate     Suppose is holomorphic in and for all . Then .     Let . By and ( ), . The statement now follows since can be chosen arbitrarily close to .   A key aspect of this section is worth emphasizing: namely, we have developed an alternative characterization of what it means for a function to be holomorphic. In , we defined a function to be holomorphic in a region if it is differentiable at each point . We now define what it means for a function to be analytic in .    Let and . If there exist and such that the power series converges in and agrees with in , then is analytic at  . analytic We call  analytic in  if is analytic at each point in .    What we have proved in this section can be summed up as follows:    For any region , the class of all analytic functions in coincides with the class of all holomorphic functions in .    While the terms holomorphic and analytic do not always mean the same thing, in the study of complex analysis they do and are frequently used interchangeably.  "
},
{
  "id": "thm_powerholomorphic",
  "level": "2",
  "url": "sec_powerseriesholom.html#thm_powerholomorphic",
  "type": "Theorem",
  "number": "8.1.1",
  "title": "",
  "body": "  Suppose has radius of convergence . Then is holomorphic in .     says that is continuous in . Given any closed piecewise smooth path , gives . Now apply Morera's theorem ( ).   "
},
{
  "id": "powerderivative",
  "level": "2",
  "url": "sec_powerseriesholom.html#powerderivative",
  "type": "Theorem",
  "number": "8.1.2",
  "title": "",
  "body": "  Suppose has radius of convergence . Then , and the radius of convergence of this power series is also . power series differentiation of     If then , so we can choose so that . Then the circle lies in and is inside . Since is holomorphic in we can use Cauchy's Integral Formula for ( ), as well as : . Note that we used  again in the penultimate step, but now applied to the function .  The last statement of the theorem is easy to show: the radius of convergence of is at least (since we have shown that the series for converges whenever ), and it cannot be larger than by comparison to the series for , since the coefficients for are larger than the corresponding ones for .   "
},
{
  "id": "ex_exptaylor",
  "level": "2",
  "url": "sec_powerseriesholom.html#ex_exptaylor",
  "type": "Example",
  "number": "8.1.3",
  "title": "",
  "body": "  Let . In , we showed that converges in . We claim that , in analogy with the real exponential function. First, by , . Thus , and so, by , is constant. Evaluating at gives that this constant is 1, and so .   "
},
{
  "id": "ex_sinpowerser",
  "level": "2",
  "url": "sec_powerseriesholom.html#ex_sinpowerser",
  "type": "Example",
  "number": "8.1.4",
  "title": "",
  "body": "  We can use the power series expansion for to find power series for the trigonometric functions. For instance, . Note that we are allowed to rearrange the terms of the two added sums because the corresponding series have infinite radii of convergence.   "
},
{
  "id": "taylor",
  "level": "2",
  "url": "sec_powerseriesholom.html#taylor",
  "type": "Corollary",
  "number": "8.1.5",
  "title": "",
  "body": "  Suppose has a positive radius of convergence. Then .   "
},
{
  "id": "sec_powerseriesholom-13",
  "level": "2",
  "url": "sec_powerseriesholom.html#sec_powerseriesholom-13",
  "type": "Proof",
  "number": "8.1.1",
  "title": "",
  "body": " For starters, . Theorem gives . Applying the same theorem to gives and so . A quick induction game establishes .  "
},
{
  "id": "uniqueness",
  "level": "2",
  "url": "sec_powerseriesholom.html#uniqueness",
  "type": "Corollary",
  "number": "8.1.6",
  "title": "",
  "body": "  If and are two power series that both converge to the same function on an open disk centered at , then for all .   "
},
{
  "id": "ex_expatpi",
  "level": "2",
  "url": "sec_powerseriesholom.html#ex_expatpi",
  "type": "Example",
  "number": "8.1.7",
  "title": "",
  "body": "  We'd like to compute a power series expansion for centered at . Since , suggests that this power series is , which converges for all (essentially by ).   "
},
{
  "id": "thm_holomorphicpower",
  "level": "2",
  "url": "sec_powerseriesholom.html#thm_holomorphicpower",
  "type": "Theorem",
  "number": "8.1.8",
  "title": "",
  "body": "  Suppose is a function holomorphic in . Then can be represented as a power series centered at , with a radius of convergence : , where is any positively oriented, simple, closed, piecewise smooth path in for which is inside .    Let ; so is a function holomorphic in . Given , let . By Cauchy's Integral Formula ( ), . The factor in this integral can be expanded into a geometric series (note that and so ): which converges uniformly in the variable by . Hence applies: .  Now, since , we apply a change of variables to obtain . The only differences of this right-hand side to the statement of the theorem are the paths we're integrating over. However, by Cauchy's , .   "
},
{
  "id": "sec_powerseriesholom-20",
  "level": "2",
  "url": "sec_powerseriesholom.html#sec_powerseriesholom-20",
  "type": "Definition",
  "number": "8.1.9",
  "title": "",
  "body": "  For a region and a point , we define the distance of to , the boundary of , as the greatest lower bound of ; if this set is empty, we define the distance of to to be .   "
},
{
  "id": "cor_powerseriesboundary",
  "level": "2",
  "url": "sec_powerseriesholom.html#cor_powerseriesboundary",
  "type": "Corollary",
  "number": "8.1.10",
  "title": "",
  "body": "  If is holomorphic and , then can be expanded into a power series centered at whose radius of convergence is at least the distance of to .   "
},
{
  "id": "ex_powerseriesboundary",
  "level": "2",
  "url": "sec_powerseriesholom.html#ex_powerseriesboundary",
  "type": "Example",
  "number": "8.1.11",
  "title": "",
  "body": "  Consider given by and . says that the power series expansion of at 0 will have radius of convergence 1. (Actually, it says this radius is at least 1, but it cannot be larger since are singularities of .) In fact, we can use a geometric series to compute this power series: , with radius of convergence 1.   "
},
{
  "id": "cauchyformula3",
  "level": "2",
  "url": "sec_powerseriesholom.html#cauchyformula3",
  "type": "Corollary",
  "number": "8.1.12",
  "title": "",
  "body": "  Suppose is holomorphic in the region and is a positively oriented, simple, closed, piecewise smooth path, such that is inside and . Then Cauchy's integral formula extensions of  .   "
},
{
  "id": "cauchyestimate",
  "level": "2",
  "url": "sec_powerseriesholom.html#cauchyestimate",
  "type": "Corollary",
  "number": "8.1.13",
  "title": "",
  "body": "  Suppose is holomorphic in and for all . Then .   "
},
{
  "id": "sec_powerseriesholom-29",
  "level": "2",
  "url": "sec_powerseriesholom.html#sec_powerseriesholom-29",
  "type": "Proof",
  "number": "8.1.2",
  "title": "",
  "body": " Let . By and ( ), . The statement now follows since can be chosen arbitrarily close to .  "
},
{
  "id": "sec_powerseriesholom-31",
  "level": "2",
  "url": "sec_powerseriesholom.html#sec_powerseriesholom-31",
  "type": "Definition",
  "number": "8.1.14",
  "title": "",
  "body": "  Let and . If there exist and such that the power series converges in and agrees with in , then is analytic at  . analytic We call  analytic in  if is analytic at each point in .   "
},
{
  "id": "sec_powerseriesholom-33",
  "level": "2",
  "url": "sec_powerseriesholom.html#sec_powerseriesholom-33",
  "type": "Theorem",
  "number": "8.1.15",
  "title": "",
  "body": "  For any region , the class of all analytic functions in coincides with the class of all holomorphic functions in .   "
},
{
  "id": "sec_classifzeros",
  "level": "1",
  "url": "sec_classifzeros.html",
  "type": "Section",
  "number": "8.2",
  "title": "Classification of Zeros and the Identity Principle",
  "body": " Classification of Zeros and the Identity Principle  When we proved the Fundamental Theorem of Algebra ( ; see also ), we remarked that, if a polynomial of degree has a zero at (that is, ), then has as a factor. That is, we can write where is a polynomial of degree . We can then ask whether itself has a zero at and, if so, we can factor out another . Continuing in this way, we see that we can factor as where is a positive integer and is a polynomial that does not have a zero at . The integer is called the multiplicity of the zero of . Almost exactly the same thing happens for holomorphic functions.   Classification of Zeros   Suppose is holomorphic and has a zero at . Then either    is identically zero on some open disk centered at (that is, for all ); or    there exist a positive integer and a holomorphic function , such that and . In this case the zero is isolated: there is a disk which contains no other zero of .   The integer in the second case is uniquely determined by and and is called the multiplicity of the zero at .    By , there exists such that we can expand , and . There are now exactly two possibilities: either    for all ; or    there is some positive integer so that for all but .   The first case gives for all . So now consider the second case. We note that for , . Thus we can define a function through (According to our calculations above, the two definitions give the same value when .) The function is holomorphic in by the first definition, and is holomorphic in by the second definition. Note that and, by construction, .  Since there is, by continuity, so that for all , so contains no other zero of . The integer is unique, since it is defined in terms of the power series expansion of at , which is unique by .     gives rise to the following result, which is sometimes called the identity principle or the uniqueness theorem . uniqueness theorem  identity principle     Suppose is a region, is holomorphic, and where is a sequence of distinct numbers that converges in . Then is the zero function on .    Applying this theorem to the difference of two functions immediately gives the following variant.    Suppose and are holomorphic in a region and at a sequence that converges to with for all . Then for all in .    Consider the following two subsets of : .  If then, by continuity of , there exists a disk centered at in which is nonzero, and so .  If , then says that either or is an isolated zero of , so .  We have thus proved that is the disjoint union of and . proves that and are open, and so (because is a region) either or has to be empty. The conditions of say that is not in , and thus it has to be in . Thus and the statement of follows.    The identity principle yields the strengthenings of and promised in . We recall that that we say the function has a weak relative maximum  if there exists a disk such that all satisfy . maximum weak relative    Maximum-Modulus Theorem   Suppose is holomorphic and nonconstant in a region . Then does not attain a weak relative maximum in . maximum-modulus theorem  maximum weak relative     There are many reformulations of this theorem, such as:    Suppose is holomorphic in a bounded region and continuous on its closure. Then .    This is trivial if is constant, so we assume is non-constant. By the Extreme Value there is a point so that . Clearly , and this is easily seen to be an equality using continuity at , since there are points of arbitrarily close to . Finally, implies , so must be in .     has other important consequences; we give two here, whose proofs we leave for and .   Minimum-Modulus Theorem   Suppose is holomorphic and nonconstant in a region . Then does not attain a weak relative minimum at a point in unless . minimum-modulus theorem  minimum weak relative       If is harmonic and nonconstant in a region , then it does not have a weak relative maximum or minimum in . max\/min property for harmonic functions     Note that in follows from using essentially the same argument as in the proof of .   Suppose there exist and such that for all . We will show that then is constant.  If then for all , so is identically zero by .  Now assume , which allows us to define the holomorphic function via . This function satisfies , Also , so, by continuity of , we can find such that for . This allows us, in turn, to define the holomorphic function through , which satisfies and . now implies that must be identically zero in . Hence must be equal to for all , and so must have the constant value for all . then implies that is constant in .   "
},
{
  "id": "classificationzeros",
  "level": "2",
  "url": "sec_classifzeros.html#classificationzeros",
  "type": "Theorem",
  "number": "8.2.1",
  "title": "Classification of Zeros.",
  "body": " Classification of Zeros   Suppose is holomorphic and has a zero at . Then either    is identically zero on some open disk centered at (that is, for all ); or    there exist a positive integer and a holomorphic function , such that and . In this case the zero is isolated: there is a disk which contains no other zero of .   The integer in the second case is uniquely determined by and and is called the multiplicity of the zero at .    By , there exists such that we can expand , and . There are now exactly two possibilities: either    for all ; or    there is some positive integer so that for all but .   The first case gives for all . So now consider the second case. We note that for , . Thus we can define a function through (According to our calculations above, the two definitions give the same value when .) The function is holomorphic in by the first definition, and is holomorphic in by the second definition. Note that and, by construction, .  Since there is, by continuity, so that for all , so contains no other zero of . The integer is unique, since it is defined in terms of the power series expansion of at , which is unique by .   "
},
{
  "id": "uniquenessfunction",
  "level": "2",
  "url": "sec_classifzeros.html#uniquenessfunction",
  "type": "Theorem",
  "number": "8.2.2",
  "title": "",
  "body": "  Suppose is a region, is holomorphic, and where is a sequence of distinct numbers that converges in . Then is the zero function on .   "
},
{
  "id": "cor_uniquenessfunction",
  "level": "2",
  "url": "sec_classifzeros.html#cor_uniquenessfunction",
  "type": "Corollary",
  "number": "8.2.3",
  "title": "",
  "body": "  Suppose and are holomorphic in a region and at a sequence that converges to with for all . Then for all in .    Consider the following two subsets of : .  If then, by continuity of , there exists a disk centered at in which is nonzero, and so .  If , then says that either or is an isolated zero of , so .  We have thus proved that is the disjoint union of and . proves that and are open, and so (because is a region) either or has to be empty. The conditions of say that is not in , and thus it has to be in . Thus and the statement of follows.   "
},
{
  "id": "maxmodthm",
  "level": "2",
  "url": "sec_classifzeros.html#maxmodthm",
  "type": "Theorem",
  "number": "8.2.4",
  "title": "Maximum-Modulus Theorem.",
  "body": " Maximum-Modulus Theorem   Suppose is holomorphic and nonconstant in a region . Then does not attain a weak relative maximum in . maximum-modulus theorem  maximum weak relative    "
},
{
  "id": "maxOnBoundary",
  "level": "2",
  "url": "sec_classifzeros.html#maxOnBoundary",
  "type": "Corollary",
  "number": "8.2.5",
  "title": "",
  "body": "  Suppose is holomorphic in a bounded region and continuous on its closure. Then .    This is trivial if is constant, so we assume is non-constant. By the Extreme Value there is a point so that . Clearly , and this is easily seen to be an equality using continuity at , since there are points of arbitrarily close to . Finally, implies , so must be in .   "
},
{
  "id": "minmodthm",
  "level": "2",
  "url": "sec_classifzeros.html#minmodthm",
  "type": "Corollary",
  "number": "8.2.6",
  "title": "Minimum-Modulus Theorem.",
  "body": " Minimum-Modulus Theorem   Suppose is holomorphic and nonconstant in a region . Then does not attain a weak relative minimum at a point in unless . minimum-modulus theorem  minimum weak relative    "
},
{
  "id": "maxminharmcor",
  "level": "2",
  "url": "sec_classifzeros.html#maxminharmcor",
  "type": "Corollary",
  "number": "8.2.7",
  "title": "",
  "body": "  If is harmonic and nonconstant in a region , then it does not have a weak relative maximum or minimum in . max\/min property for harmonic functions    "
},
{
  "id": "sec_classifzeros-16",
  "level": "2",
  "url": "sec_classifzeros.html#sec_classifzeros-16",
  "type": "Proof",
  "number": "8.2.1",
  "title": "",
  "body": " Suppose there exist and such that for all . We will show that then is constant.  If then for all , so is identically zero by .  Now assume , which allows us to define the holomorphic function via . This function satisfies , Also , so, by continuity of , we can find such that for . This allows us, in turn, to define the holomorphic function through , which satisfies and . now implies that must be identically zero in . Hence must be equal to for all , and so must have the constant value for all . then implies that is constant in .  "
},
{
  "id": "sec_LaurentSeries",
  "level": "1",
  "url": "sec_LaurentSeries.html",
  "type": "Section",
  "number": "8.3",
  "title": "Laurent Series",
  "body": " Laurent Series   Theorem gives a powerful way of describing holomorphic functions. It is, however, not as general as it could be. It is natural, for example, to think about representing as , a power series with negative exponents. To make sense of expressions like the above, we introduce the concept of a double series  . double series Here are terms indexed by the integers. The double series above converges if and only if the two series on the right-hand side do. Absolute and uniform convergence are defined analogously. Equipped with this, we can now introduce the following central concept.    A Laurent After Pierre Alphonse Laurent (1813 1854). series centered at is a double series of the form . Laurent series       The series that started this section is the Laurent series of centered at .      Any power series is a Laurent series (with for ).    We should pause for a minute and ask for which a general Laurent series can possibly converge. By definition . The first series on the right-hand side is a power series with some radius of convergence , thus with , it converges in , and the convergence is uniform in , for any fixed . For the second series, we invite you (in ) to revise our proof of to show that this series converges for for some , and that the convergence is uniform in , for any fixed . Thus the Laurent series converges in the annulus (assuming this set is not empty, i.e., ), and the convergence is uniform on any set of the form .    We'd like to compute the start of a Laurent series for centered at . We start by considering the function defined by A quick application of L'Hôpital's Rule ( ) shows that is continuous (see ). Even better, another round of L'Hôpital's Rule proves that . But this means that in particular, is holomorphic in . This is a (simple) example of analytic continuation : the function is holomorphic in and agrees with in , the domain in which the latter function is holomorphic. When we said, in , that the Riemann zeta function can be extended to a function that is holomorphic on , we were also talking about analytic continuation. By , has a power series expansion at 0, which we may compute using . It starts with and it converges, by , for . But this gives our sought-after Laurent series which converges for .     SageMath has a hard time with Laurent series with infinitely many negative exponents:   But it can handle finitely many negative exponents:    implies that a Laurent series represents a function that is holomorphic in its annulus of convergence. The fact that we can conversely represent any function holomorphic in such an annulus by a Laurent series is the substance of the next result.    Suppose is a function that is holomorphic in . Then can be represented in as a Laurent series centered at , with , where .    By Cauchy's we can replace the circle in the formula for the Laurent coefficients by any path .   Let ; so is a function holomorphic in . Fix , and let be the path in , where and . By Cauchy's Integral Formula ( ), .   The path in our proof.     size=3.5  angle=120  r1=1.5  r2=3  p1=r1*(cos(radians(angle)),sin(radians(angle)))  p2=r2*(cos(radians(angle)),sin(radians(angle)))  n=0.3*rotate(normalize(p1-p2),pi\/2)  l(t)=(1-t)*p1 + t*p2                \\gamma_1    \\gamma_2        For the integral over we play exactly the same game as in our proof of . The factor in this integral can be expanded into a geometric series (note that and so ) , which converges uniformly in the variable by . Hence applies: .  The integral over is computed in a similar fashion; now we expand the factor into the following geometric series (note that and so ) , which converges uniformly in the variable . Again applies: .  Putting everything back into gives . By Cauchy's , we can now change both and to , as long as , which finally gives .  The statement follows now with and a change of variables in the integral.   This theorem, naturally, has several corollaries that have analogues in the world of Taylor series. Here are two samples:    If and are two Laurent series that both converge, for , to the same function, then for all .      If is a region, , and is holomorphic in , then can be expanded into a Laurent series centered at that converges for where is at least the distance of to .    Finally, we come to the analogue of Corollary for Laurent series. We could revisit its proof, but the statement that would follow is actually the special case of , read from right to left:    Suppose is a function that is holomorphic in , with Laurent series . If is any simple, closed, piecewise smooth path in , such that is inside , then .    This result is profound: it says that we can integrate (at least over closed curves) by computing Laurent series in fact, we only need to compute one coefficient of a Laurent series. We will have more to say about this in the next chapter; for now, we give just one application, which might have been bugging you since the beginning of .    We will (finally!) compute , the integral . Our plan is to split up the integration path as in , which gives, say, . To compute the two integrals on the right-hand side, we can use Corollary , for which we need the Laurent expansions of centered at 0 and .  By and , and so gives .  For the integral around , we use the fact that , and so we can compute the Laurent expansion of at also via Example : Adding to the mix yields and now gives . Putting it all together yields the integral we've been after for two chapters: .    "
},
{
  "id": "sec_LaurentSeries-3",
  "level": "2",
  "url": "sec_LaurentSeries.html#sec_LaurentSeries-3",
  "type": "Definition",
  "number": "8.3.1",
  "title": "",
  "body": "  A Laurent After Pierre Alphonse Laurent (1813 1854). series centered at is a double series of the form . Laurent series    "
},
{
  "id": "sec_LaurentSeries-4",
  "level": "2",
  "url": "sec_LaurentSeries.html#sec_LaurentSeries-4",
  "type": "Example",
  "number": "8.3.2",
  "title": "",
  "body": "  The series that started this section is the Laurent series of centered at .   "
},
{
  "id": "sec_LaurentSeries-5",
  "level": "2",
  "url": "sec_LaurentSeries.html#sec_LaurentSeries-5",
  "type": "Example",
  "number": "8.3.3",
  "title": "",
  "body": "  Any power series is a Laurent series (with for ).   "
},
{
  "id": "ex_1_sinlaurent",
  "level": "2",
  "url": "sec_LaurentSeries.html#ex_1_sinlaurent",
  "type": "Example",
  "number": "8.3.4",
  "title": "",
  "body": "  We'd like to compute the start of a Laurent series for centered at . We start by considering the function defined by A quick application of L'Hôpital's Rule ( ) shows that is continuous (see ). Even better, another round of L'Hôpital's Rule proves that . But this means that in particular, is holomorphic in . This is a (simple) example of analytic continuation : the function is holomorphic in and agrees with in , the domain in which the latter function is holomorphic. When we said, in , that the Riemann zeta function can be extended to a function that is holomorphic on , we were also talking about analytic continuation. By , has a power series expansion at 0, which we may compute using . It starts with and it converges, by , for . But this gives our sought-after Laurent series which converges for .   "
},
{
  "id": "holomorphiclaurent",
  "level": "2",
  "url": "sec_LaurentSeries.html#holomorphiclaurent",
  "type": "Theorem",
  "number": "8.3.5",
  "title": "",
  "body": "  Suppose is a function that is holomorphic in . Then can be represented in as a Laurent series centered at , with , where .   "
},
{
  "id": "sec_LaurentSeries-15",
  "level": "2",
  "url": "sec_LaurentSeries.html#sec_LaurentSeries-15",
  "type": "Proof",
  "number": "8.3.1",
  "title": "",
  "body": " Let ; so is a function holomorphic in . Fix , and let be the path in , where and . By Cauchy's Integral Formula ( ), .   The path in our proof.     size=3.5  angle=120  r1=1.5  r2=3  p1=r1*(cos(radians(angle)),sin(radians(angle)))  p2=r2*(cos(radians(angle)),sin(radians(angle)))  n=0.3*rotate(normalize(p1-p2),pi\/2)  l(t)=(1-t)*p1 + t*p2                \\gamma_1    \\gamma_2        For the integral over we play exactly the same game as in our proof of . The factor in this integral can be expanded into a geometric series (note that and so ) , which converges uniformly in the variable by . Hence applies: .  The integral over is computed in a similar fashion; now we expand the factor into the following geometric series (note that and so ) , which converges uniformly in the variable . Again applies: .  Putting everything back into gives . By Cauchy's , we can now change both and to , as long as , which finally gives .  The statement follows now with and a change of variables in the integral.  "
},
{
  "id": "laurentunique",
  "level": "2",
  "url": "sec_LaurentSeries.html#laurentunique",
  "type": "Corollary",
  "number": "8.3.7",
  "title": "",
  "body": "  If and are two Laurent series that both converge, for , to the same function, then for all .   "
},
{
  "id": "sec_LaurentSeries-18",
  "level": "2",
  "url": "sec_LaurentSeries.html#sec_LaurentSeries-18",
  "type": "Corollary",
  "number": "8.3.8",
  "title": "",
  "body": "  If is a region, , and is holomorphic in , then can be expanded into a Laurent series centered at that converges for where is at least the distance of to .   "
},
{
  "id": "cor_firstresidue",
  "level": "2",
  "url": "sec_LaurentSeries.html#cor_firstresidue",
  "type": "Corollary",
  "number": "8.3.9",
  "title": "",
  "body": "  Suppose is a function that is holomorphic in , with Laurent series . If is any simple, closed, piecewise smooth path in , such that is inside , then .   "
},
{
  "id": "ex_expoversin",
  "level": "2",
  "url": "sec_LaurentSeries.html#ex_expoversin",
  "type": "Example",
  "number": "8.3.10",
  "title": "",
  "body": "  We will (finally!) compute , the integral . Our plan is to split up the integration path as in , which gives, say, . To compute the two integrals on the right-hand side, we can use Corollary , for which we need the Laurent expansions of centered at 0 and .  By and , and so gives .  For the integral around , we use the fact that , and so we can compute the Laurent expansion of at also via Example : Adding to the mix yields and now gives . Putting it all together yields the integral we've been after for two chapters: .   "
},
{
  "id": "taylorchapter-6",
  "level": "1",
  "url": "taylorchapter-6.html",
  "type": "Exercises",
  "number": "8.4",
  "title": "Exercises",
  "body": "   For each of the following series, determine where the series converges absolutely and where it converges uniformly:          , for any            , for any .       What functions are represented by the series in the previous exercise?    (a)  (b)      Find the power series centered at for .      Re-prove using the power series of centered at 0.      Find the terms through third order and the radius of convergence of the power series for each of the following functions, centered at . (Do not find the general form for the coefficients.)                                  Consider given by , the real version of our function in , to show that has no analogue in . Incidentally, the same example shows, once more, that Liouville's theorem ( ) has no analogue in .       Prove the following generalization of : Suppose is a sequence of functions that are holomorphic in a region , and converges uniformly to on . Then is holomorphic in . (This result is called the Weierstraß convergence theorem .) Weierstraß convergence theorem       Use the previous exercise and to prove the following: Suppose is a sequence of functions that are holomorphic in a region and that converges uniformly to on . Then for any , the sequence of th derivatives converges (pointwise) to .      Suppose for all . What can you say about the radius of convergence of ?      Suppose the radius of convergence of is . What is the radius of convergence of each of the following?                                  Suppose is a region and is holomorphic. Prove that the sets in our proof of are open.      Prove the Minimum-Modulus Theorem ( ): Suppose is holomorphic and nonconstant in a region . Then does not attain a weak relative minimum at a point in unless .      Prove : Assume that is harmonic in a region and has a weak local maximum at .     If is simply connected then apply to , where is a harmonic conjugate of . Conclude that is constant on .      If is not simply connected, then the above argument applies to on any disk . Conclude that the partials and are zero on , and adapt the argument of Theorem to show that is constant.       Let be given by . Find the maximum and minimum of on the closed unit disk.    The maximum is 3 (attained at ), and the minimum is 1 (attained at ).      Give another proof of the Fundamental Theorem of Algebra fundamental theorem of algebra ( ), using the Minimum-Modulus Theorem ( ).    Use to show that a polynomial does not achieve its minimum modulus on a large circle; then use the Minimum-Modulus Theorem to deduce that the polynomial has a zero.      Give another proof of (a variant of) the Maximum-Modulus via , as follows: Suppose is holomorphic in a region containing , and for . Given a point , show (e.g., by ) that there is a constant such that . Conclude that .      Find a Laurent series for centered at and specify the region in which it converges.    One Laurent series is , converging for .      Find a Laurent series for centered at and specify the region in which it converges.    One Laurent series is , converging for .      Find a Laurent series for centered at and the region in which it converges.    One Laurent series is , converging for .      Find the terms in the Laurent series for centered at , for .      Find the first four nonzero terms in the power series expansion of centered at the origin. What is the radius of convergence?       Find the power series representation for centered at , where is any constant.      Show that .      Find the power series expansion for centered at .       Show that for .      Prove: If is entire and is constant on the closed unit disk then is constant.       Find the Laurent series for centered at .         Prove that is entire, where        Find the Laurent series for centered at the origin.      Suppose that is holomorphic at , , and . Show that has a zero of multiplicity at .      Find the multiplicities of the zeros of each of the following functions:      , where is any integer.       .       .       Find the zeros of the following functions and determine their multiplicities:                                  Prove that the series of the negative-index terms of a Laurent series converges for for some , and that the convergence is uniform in , for any fixed .      Show that and . (These are the limits we referred to in .)      Find the three Laurent series of , centered at , defined on the three regions , , and , respectively.    Use a partial fraction decomposition.      Suppose that has exactly one zero, at , inside the circle , and that it has multiplicity . Show that .      Recall that a function is even if for all , and is odd if for all . even  odd Prove that, if is even (resp., odd), then the Laurent series of at 0 has only even (resp., odd) powers. function even  function odd       Suppose is holomorphic and not identically zero on an open disk centered at , and suppose . Use the following outline to show that for some in .     Why can you write where , is holomorphic, and ?      Write in polar coordinates as and define . Why is ?      Why is there a positive constant so that for all ?      Write for . Show that .      Find a value of so that has positive real part.        Find a Laurent series for centered at and specify the region in which it converges.    One Laurent series is , converging for .      Compute .           Find the power series of centered at .         Compute .          Compute where is a closed curve not passing through integer multiples of .    "
},
{
  "id": "ex_8_1",
  "level": "2",
  "url": "taylorchapter-6.html#ex_8_1",
  "type": "Exercise",
  "number": "8.4.1",
  "title": "",
  "body": "  For each of the following series, determine where the series converges absolutely and where it converges uniformly:          , for any            , for any .    "
},
{
  "id": "ex_82",
  "level": "2",
  "url": "taylorchapter-6.html#ex_82",
  "type": "Exercise",
  "number": "8.4.2",
  "title": "",
  "body": "  What functions are represented by the series in the previous exercise?    (a)  (b)   "
},
{
  "id": "taylorchapter-6-3",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-3",
  "type": "Exercise",
  "number": "8.4.3",
  "title": "",
  "body": "  Find the power series centered at for .   "
},
{
  "id": "taylorchapter-6-4",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-4",
  "type": "Exercise",
  "number": "8.4.4",
  "title": "",
  "body": "  Re-prove using the power series of centered at 0.   "
},
{
  "id": "taylorchapter-6-5",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-5",
  "type": "Exercise",
  "number": "8.4.5",
  "title": "",
  "body": "  Find the terms through third order and the radius of convergence of the power series for each of the following functions, centered at . (Do not find the general form for the coefficients.)                               "
},
{
  "id": "prob_powerseriesboundaryreal",
  "level": "2",
  "url": "taylorchapter-6.html#prob_powerseriesboundaryreal",
  "type": "Exercise",
  "number": "8.4.6",
  "title": "",
  "body": "  Consider given by , the real version of our function in , to show that has no analogue in . Incidentally, the same example shows, once more, that Liouville's theorem ( ) has no analogue in .    "
},
{
  "id": "taylorchapter-6-7",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-7",
  "type": "Exercise",
  "number": "8.4.7",
  "title": "",
  "body": "  Prove the following generalization of : Suppose is a sequence of functions that are holomorphic in a region , and converges uniformly to on . Then is holomorphic in . (This result is called the Weierstraß convergence theorem .) Weierstraß convergence theorem    "
},
{
  "id": "taylorchapter-6-8",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-8",
  "type": "Exercise",
  "number": "8.4.8",
  "title": "",
  "body": "  Use the previous exercise and to prove the following: Suppose is a sequence of functions that are holomorphic in a region and that converges uniformly to on . Then for any , the sequence of th derivatives converges (pointwise) to .   "
},
{
  "id": "taylorchapter-6-9",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-9",
  "type": "Exercise",
  "number": "8.4.9",
  "title": "",
  "body": "  Suppose for all . What can you say about the radius of convergence of ?   "
},
{
  "id": "taylorchapter-6-10",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-10",
  "type": "Exercise",
  "number": "8.4.10",
  "title": "",
  "body": "  Suppose the radius of convergence of is . What is the radius of convergence of each of the following?                               "
},
{
  "id": "prob_uniquenessfunctionopensets",
  "level": "2",
  "url": "taylorchapter-6.html#prob_uniquenessfunctionopensets",
  "type": "Exercise",
  "number": "8.4.11",
  "title": "",
  "body": "  Suppose is a region and is holomorphic. Prove that the sets in our proof of are open.   "
},
{
  "id": "prob_minmodthm",
  "level": "2",
  "url": "taylorchapter-6.html#prob_minmodthm",
  "type": "Exercise",
  "number": "8.4.12",
  "title": "",
  "body": "  Prove the Minimum-Modulus Theorem ( ): Suppose is holomorphic and nonconstant in a region . Then does not attain a weak relative minimum at a point in unless .   "
},
{
  "id": "prob_maxminharmcor",
  "level": "2",
  "url": "taylorchapter-6.html#prob_maxminharmcor",
  "type": "Exercise",
  "number": "8.4.13",
  "title": "",
  "body": "  Prove : Assume that is harmonic in a region and has a weak local maximum at .     If is simply connected then apply to , where is a harmonic conjugate of . Conclude that is constant on .      If is not simply connected, then the above argument applies to on any disk . Conclude that the partials and are zero on , and adapt the argument of Theorem to show that is constant.    "
},
{
  "id": "ex_8_3",
  "level": "2",
  "url": "taylorchapter-6.html#ex_8_3",
  "type": "Exercise",
  "number": "8.4.14",
  "title": "",
  "body": "  Let be given by . Find the maximum and minimum of on the closed unit disk.    The maximum is 3 (attained at ), and the minimum is 1 (attained at ).   "
},
{
  "id": "taylorchapter-6-15",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-15",
  "type": "Exercise",
  "number": "8.4.15",
  "title": "",
  "body": "  Give another proof of the Fundamental Theorem of Algebra fundamental theorem of algebra ( ), using the Minimum-Modulus Theorem ( ).    Use to show that a polynomial does not achieve its minimum modulus on a large circle; then use the Minimum-Modulus Theorem to deduce that the polynomial has a zero.   "
},
{
  "id": "taylorchapter-6-16",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-16",
  "type": "Exercise",
  "number": "8.4.16",
  "title": "",
  "body": "  Give another proof of (a variant of) the Maximum-Modulus via , as follows: Suppose is holomorphic in a region containing , and for . Given a point , show (e.g., by ) that there is a constant such that . Conclude that .   "
},
{
  "id": "ex_8_4",
  "level": "2",
  "url": "taylorchapter-6.html#ex_8_4",
  "type": "Exercise",
  "number": "8.4.17",
  "title": "",
  "body": "  Find a Laurent series for centered at and specify the region in which it converges.    One Laurent series is , converging for .   "
},
{
  "id": "ex_8_5",
  "level": "2",
  "url": "taylorchapter-6.html#ex_8_5",
  "type": "Exercise",
  "number": "8.4.18",
  "title": "",
  "body": "  Find a Laurent series for centered at and specify the region in which it converges.    One Laurent series is , converging for .   "
},
{
  "id": "ex_8_7",
  "level": "2",
  "url": "taylorchapter-6.html#ex_8_7",
  "type": "Exercise",
  "number": "8.4.19",
  "title": "",
  "body": "  Find a Laurent series for centered at and the region in which it converges.    One Laurent series is , converging for .   "
},
{
  "id": "taylorchapter-6-20",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-20",
  "type": "Exercise",
  "number": "8.4.20",
  "title": "",
  "body": "  Find the terms in the Laurent series for centered at , for .   "
},
{
  "id": "taylorchapter-6-21",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-21",
  "type": "Exercise",
  "number": "8.4.21",
  "title": "",
  "body": "  Find the first four nonzero terms in the power series expansion of centered at the origin. What is the radius of convergence?   "
},
{
  "id": "taylorchapter-6-22",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-22",
  "type": "Exercise",
  "number": "8.4.22",
  "title": "",
  "body": "   Find the power series representation for centered at , where is any constant.      Show that .      Find the power series expansion for centered at .    "
},
{
  "id": "taylorchapter-6-23",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-23",
  "type": "Exercise",
  "number": "8.4.23",
  "title": "",
  "body": "  Show that for .   "
},
{
  "id": "taylorchapter-6-24",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-24",
  "type": "Exercise",
  "number": "8.4.24",
  "title": "",
  "body": "  Prove: If is entire and is constant on the closed unit disk then is constant.   "
},
{
  "id": "ex_8_6",
  "level": "2",
  "url": "taylorchapter-6.html#ex_8_6",
  "type": "Exercise",
  "number": "8.4.25",
  "title": "",
  "body": "   Find the Laurent series for centered at .         Prove that is entire, where     "
},
{
  "id": "taylorchapter-6-26",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-26",
  "type": "Exercise",
  "number": "8.4.26",
  "title": "",
  "body": "  Find the Laurent series for centered at the origin.   "
},
{
  "id": "taylorchapter-6-27",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-27",
  "type": "Exercise",
  "number": "8.4.27",
  "title": "",
  "body": "  Suppose that is holomorphic at , , and . Show that has a zero of multiplicity at .   "
},
{
  "id": "taylorchapter-6-28",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-28",
  "type": "Exercise",
  "number": "8.4.28",
  "title": "",
  "body": "  Find the multiplicities of the zeros of each of the following functions:      , where is any integer.       .       .    "
},
{
  "id": "taylorchapter-6-29",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-29",
  "type": "Exercise",
  "number": "8.4.29",
  "title": "",
  "body": "  Find the zeros of the following functions and determine their multiplicities:                               "
},
{
  "id": "ex_laurentconvergenceradius",
  "level": "2",
  "url": "taylorchapter-6.html#ex_laurentconvergenceradius",
  "type": "Exercise",
  "number": "8.4.30",
  "title": "",
  "body": "  Prove that the series of the negative-index terms of a Laurent series converges for for some , and that the convergence is uniform in , for any fixed .   "
},
{
  "id": "ex_lhospitalfor1oversin",
  "level": "2",
  "url": "taylorchapter-6.html#ex_lhospitalfor1oversin",
  "type": "Exercise",
  "number": "8.4.31",
  "title": "",
  "body": "  Show that and . (These are the limits we referred to in .)   "
},
{
  "id": "taylorchapter-6-32",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-32",
  "type": "Exercise",
  "number": "8.4.32",
  "title": "",
  "body": "  Find the three Laurent series of , centered at , defined on the three regions , , and , respectively.    Use a partial fraction decomposition.   "
},
{
  "id": "taylorchapter-6-33",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-33",
  "type": "Exercise",
  "number": "8.4.33",
  "title": "",
  "body": "  Suppose that has exactly one zero, at , inside the circle , and that it has multiplicity . Show that .   "
},
{
  "id": "ex_evenoddfunctions",
  "level": "2",
  "url": "taylorchapter-6.html#ex_evenoddfunctions",
  "type": "Exercise",
  "number": "8.4.34",
  "title": "",
  "body": "  Recall that a function is even if for all , and is odd if for all . even  odd Prove that, if is even (resp., odd), then the Laurent series of at 0 has only even (resp., odd) powers. function even  function odd    "
},
{
  "id": "ex_realmax0",
  "level": "2",
  "url": "taylorchapter-6.html#ex_realmax0",
  "type": "Exercise",
  "number": "8.4.35",
  "title": "",
  "body": "  Suppose is holomorphic and not identically zero on an open disk centered at , and suppose . Use the following outline to show that for some in .     Why can you write where , is holomorphic, and ?      Write in polar coordinates as and define . Why is ?      Why is there a positive constant so that for all ?      Write for . Show that .      Find a value of so that has positive real part.    "
},
{
  "id": "ex_9_5",
  "level": "2",
  "url": "taylorchapter-6.html#ex_9_5",
  "type": "Exercise",
  "number": "8.4.36",
  "title": "",
  "body": "   Find a Laurent series for centered at and specify the region in which it converges.    One Laurent series is , converging for .      Compute .       "
},
{
  "id": "ex_9_3",
  "level": "2",
  "url": "taylorchapter-6.html#ex_9_3",
  "type": "Exercise",
  "number": "8.4.37",
  "title": "",
  "body": "   Find the power series of centered at .         Compute .       "
},
{
  "id": "taylorchapter-6-38",
  "level": "2",
  "url": "taylorchapter-6.html#taylorchapter-6-38",
  "type": "Exercise",
  "number": "8.4.38",
  "title": "",
  "body": "  Compute where is a closed curve not passing through integer multiples of .   "
},
{
  "id": "sec_classificationsingul",
  "level": "1",
  "url": "sec_classificationsingul.html",
  "type": "Section",
  "number": "9.1",
  "title": "Classification of Singularities",
  "body": " Classification of Singularities  What are the differences among the functions , , and at ? None of them are defined at , but each singularity is of a different nature. We will frequently consider functions in this chapter that are holomorphic in a disk except at its center (usually because that's where a singularity lies), and it will be handy to define the punctured disk with center and radius , . punctured disk  disk punctured We extend this definition naturally with . For complex functions there are three types of singularities, which are classified as follows.    If is holomorphic in the punctured disk for some but not at , then is an isolated singularity isolated singularity  of . The singularity is called    removable if there exists a function holomorphic in such that in , removable singularity     a pole pole  if ,     essential if is neither removable nor a pole. essential singularity          Let be given by . Since , the function defined by , which is entire (because this power series converges in ), agrees with in . Thus has a removable singularity at 0.      In , we showed that given by has a removable singularity at 0, because we proved that defined by is holomorphic in and agrees with on .      The function given by has a pole at , as .      The function given by has an essential singularity at : the two limits show that has neither a removable singularity nor a pole.    To get a feel for the different types of singularities, we start with the following criteria.    Suppose is an isolated singularity of . Then    is removable if and only if ;     is a pole if and only if it is not removable and for some positive integer .         Suppose that is a removable singularity of , so there exists a holomorphic function on such that for all . But then is continuous at , and so .  Conversely, suppose that and is holomorphic in . We define the function by   Then is holomorphic in and , so is holomorphic in . We can thus expand into a power series whose first two terms are zero: and . But then we can write and so .  But this power series is holomorphic in , so is a removable singularity.  Suppose that is a pole of . Since as we may assume that is small enough that for . Then is holomorphic in and , so part (a) implies that has a removable singularity at . More precisely, the function defined by is holomorphic. By , there exist a positive integer and a holomorphic function on such that and . Actually, for all since for all . Thus .  Note that is holomorphic and non-zero on , , and .  Conversely, suppose is not a removable singularity and for some non-negative integer . We choose the smallest such . By part a), has a removable singularity at , so there is a holomorphic function on that agrees with on . Now if this just says that has a removable singularity at , which we have excluded. Hence . Since was chosen as small as possible and is a non-negative integer less than , we must have . Summarizing, is holomorphic on and non-zero at , , and .  But then is a pole of , since .       We underline one feature of the last part of our proof:    Suppose is holomorphic in . Then has a pole at if and only if there exist a positive integer and a holomorphic function , such that and . If is a pole then is unique.     The only part not covered in the proof of is uniqueness of . Suppose and both work, with . Then , and plugging in yields , violating .     The integer in is the order of the pole . order of a pole     This definition, naturally coming out of , parallels that of the multiplicity of a zero, which naturally came out of . The two results also show that has a zero at of multiplicity if and only if has a pole of order . We will make use of the notions of zeros and poles quite extensively in this chapter.  You might have noticed that the did not include any result on essential singularities. Not only does the next theorem make up for this but it also nicely illustrates the strangeness of essential singularities. To appreciate the following result, we suggest meditating about its statement over a good cup of coffee. coffee    Casorati Felice Casorati (1835 1890). Weierstraß   If is an essential singularity of and is any positive real number, then every is arbitrarily close to a point in . That is, for any and any there exists such that . Casorati Weierstraß theorem     In the language of topology, says that the image of any punctured disk centered at an essential singularity is dense in . dense   There is a stronger theorem, beyond the scope of this book, which implies the Casorati Weierstraß It is due to Charles Emile Picard (1856 1941) and says that the image of any punctured disk centered at an essential singularity misses at most one point of . (It is worth coming up with examples of functions that do not miss any point in and functions that miss exactly one point. Picard's theorem Try it!)   Suppose (by way of contradiction) that there exist and such that for all  . Then the function stays bounded as , and so . ( (a) tells us that has a removable singularity at .) Hence and so the function has a pole at . By (b), there is a positive integer so that . Invoking again, we conclude that the function has a pole or removable singularity at , which implies the same holds for , a contradiction.   The following classifies singularities according to their Laurent series, and is very often useful in calculations.    Suppose is an isolated singularity of with Laurent series , valid in some punctured disk centered at . Then    is removable if and only if there are no negative exponents (that is, the Laurent series is a power series);     is a pole if and only if there are finitely many negative exponents, and the order of the pole is the largest such that ;     is essential if and only if there are infinitely many negative exponents.         Suppose is removable. Then there exists a holomorphic function that agrees with on , for some . By , has a power series expansion centered at , which coincides with the Laurent series of at , by .  Conversely, if the Laurent series of at has only nonnegative powers, we can use it to define a function that is holomorphic at .  Suppose is a pole of order . Then, by , on some punctured disk , where is holomorphic on and . Thus in with , so , and this is the Laurent series of , by .  Conversely, suppose that where . Define . Then is holomorphic at and so, by , has a pole of order at .  This part follows by definition: an essential singularity is neither removable nor a pole.         The order of the pole at of is 2 because (by ) and the smallest power of with nonzero coefficient in this series is .    "
},
{
  "id": "sec_classificationsingul-3",
  "level": "2",
  "url": "sec_classificationsingul.html#sec_classificationsingul-3",
  "type": "Definition",
  "number": "9.1.1",
  "title": "",
  "body": "  If is holomorphic in the punctured disk for some but not at , then is an isolated singularity isolated singularity  of . The singularity is called    removable if there exists a function holomorphic in such that in , removable singularity     a pole pole  if ,     essential if is neither removable nor a pole. essential singularity       "
},
{
  "id": "sec_classificationsingul-4",
  "level": "2",
  "url": "sec_classificationsingul.html#sec_classificationsingul-4",
  "type": "Example",
  "number": "9.1.2",
  "title": "",
  "body": "  Let be given by . Since , the function defined by , which is entire (because this power series converges in ), agrees with in . Thus has a removable singularity at 0.   "
},
{
  "id": "sec_classificationsingul-5",
  "level": "2",
  "url": "sec_classificationsingul.html#sec_classificationsingul-5",
  "type": "Example",
  "number": "9.1.3",
  "title": "",
  "body": "  In , we showed that given by has a removable singularity at 0, because we proved that defined by is holomorphic in and agrees with on .   "
},
{
  "id": "sec_classificationsingul-6",
  "level": "2",
  "url": "sec_classificationsingul.html#sec_classificationsingul-6",
  "type": "Example",
  "number": "9.1.4",
  "title": "",
  "body": "  The function given by has a pole at , as .   "
},
{
  "id": "sec_classificationsingul-7",
  "level": "2",
  "url": "sec_classificationsingul.html#sec_classificationsingul-7",
  "type": "Example",
  "number": "9.1.5",
  "title": "",
  "body": "  The function given by has an essential singularity at : the two limits show that has neither a removable singularity nor a pole.   "
},
{
  "id": "singbasics",
  "level": "2",
  "url": "sec_classificationsingul.html#singbasics",
  "type": "Proposition",
  "number": "9.1.6",
  "title": "",
  "body": "  Suppose is an isolated singularity of . Then    is removable if and only if ;     is a pole if and only if it is not removable and for some positive integer .         Suppose that is a removable singularity of , so there exists a holomorphic function on such that for all . But then is continuous at , and so .  Conversely, suppose that and is holomorphic in . We define the function by   Then is holomorphic in and , so is holomorphic in . We can thus expand into a power series whose first two terms are zero: and . But then we can write and so .  But this power series is holomorphic in , so is a removable singularity.  Suppose that is a pole of . Since as we may assume that is small enough that for . Then is holomorphic in and , so part (a) implies that has a removable singularity at . More precisely, the function defined by is holomorphic. By , there exist a positive integer and a holomorphic function on such that and . Actually, for all since for all . Thus .  Note that is holomorphic and non-zero on , , and .  Conversely, suppose is not a removable singularity and for some non-negative integer . We choose the smallest such . By part a), has a removable singularity at , so there is a holomorphic function on that agrees with on . Now if this just says that has a removable singularity at , which we have excluded. Hence . Since was chosen as small as possible and is a non-negative integer less than , we must have . Summarizing, is holomorphic on and non-zero at , , and .  But then is a pole of , since .      "
},
{
  "id": "cor_orderofpole",
  "level": "2",
  "url": "sec_classificationsingul.html#cor_orderofpole",
  "type": "Corollary",
  "number": "9.1.7",
  "title": "",
  "body": "  Suppose is holomorphic in . Then has a pole at if and only if there exist a positive integer and a holomorphic function , such that and . If is a pole then is unique.   "
},
{
  "id": "sec_classificationsingul-12",
  "level": "2",
  "url": "sec_classificationsingul.html#sec_classificationsingul-12",
  "type": "Proof",
  "number": "9.1.1",
  "title": "",
  "body": " The only part not covered in the proof of is uniqueness of . Suppose and both work, with . Then , and plugging in yields , violating .  "
},
{
  "id": "sec_classificationsingul-13",
  "level": "2",
  "url": "sec_classificationsingul.html#sec_classificationsingul-13",
  "type": "Definition",
  "number": "9.1.8",
  "title": "",
  "body": "  The integer in is the order of the pole . order of a pole    "
},
{
  "id": "casoratiweierstrass",
  "level": "2",
  "url": "sec_classificationsingul.html#casoratiweierstrass",
  "type": "Theorem",
  "number": "9.1.9",
  "title": "Casorati<details class=\"ptx-footnote\" aria-live=\"polite\" id=\"casoratiweierstrass-1-1\"><summary class=\"ptx-footnote__number\" title=\"Footnote 9.1.1\"><sup> 1 <\/sup><\/summary><div class=\"ptx-footnote__contents\" id=\"casoratiweierstrass-1-1\">Felice Casorati (1835–1890).<\/div><\/details>–Weierstraß.",
  "body": " Casorati Felice Casorati (1835 1890). Weierstraß   If is an essential singularity of and is any positive real number, then every is arbitrarily close to a point in . That is, for any and any there exists such that . Casorati Weierstraß theorem    "
},
{
  "id": "sec_classificationsingul-19",
  "level": "2",
  "url": "sec_classificationsingul.html#sec_classificationsingul-19",
  "type": "Proof",
  "number": "9.1.2",
  "title": "",
  "body": " Suppose (by way of contradiction) that there exist and such that for all  . Then the function stays bounded as , and so . ( (a) tells us that has a removable singularity at .) Hence and so the function has a pole at . By (b), there is a positive integer so that . Invoking again, we conclude that the function has a pole or removable singularity at , which implies the same holds for , a contradiction.  "
},
{
  "id": "singlaurent",
  "level": "2",
  "url": "sec_classificationsingul.html#singlaurent",
  "type": "Proposition",
  "number": "9.1.10",
  "title": "",
  "body": "  Suppose is an isolated singularity of with Laurent series , valid in some punctured disk centered at . Then    is removable if and only if there are no negative exponents (that is, the Laurent series is a power series);     is a pole if and only if there are finitely many negative exponents, and the order of the pole is the largest such that ;     is essential if and only if there are infinitely many negative exponents.         Suppose is removable. Then there exists a holomorphic function that agrees with on , for some . By , has a power series expansion centered at , which coincides with the Laurent series of at , by .  Conversely, if the Laurent series of at has only nonnegative powers, we can use it to define a function that is holomorphic at .  Suppose is a pole of order . Then, by , on some punctured disk , where is holomorphic on and . Thus in with , so , and this is the Laurent series of , by .  Conversely, suppose that where . Define . Then is holomorphic at and so, by , has a pole of order at .  This part follows by definition: an essential singularity is neither removable nor a pole.      "
},
{
  "id": "ex_sinoverz3",
  "level": "2",
  "url": "sec_classificationsingul.html#ex_sinoverz3",
  "type": "Example",
  "number": "9.1.11",
  "title": "",
  "body": "  The order of the pole at of is 2 because (by ) and the smallest power of with nonzero coefficient in this series is .   "
},
{
  "id": "sec_residues",
  "level": "1",
  "url": "sec_residues.html",
  "type": "Section",
  "number": "9.2",
  "title": "Residues",
  "body": " Residues  We now pick up the thread from and apply it to the Laurent series at an isolated singularity of . It says that if is any positively oriented, simple, closed, piecewise smooth path in the punctured disk of convergence of this Laurent series, and is inside , then .    Suppose is an isolated singularity of with Laurent series . Then is the residue of at , denoted by or . residue      suggests that we can compute integrals over closed curves by finding the residues at isolated singularities, and our next theorem makes this precise.   Residue Theorem    residue theorem Suppose is holomorphic in the region , except for isolated singularities, and is a positively oriented, simple, closed, piecewise smooth path that avoids the singularities of , and . Then there are only finitely many singularities inside , and where the sum is taken over all singularities inside .    First, let be the set of singularities inside . The set is closed (since the points in where is holomorphic form an open set) and bounded (since the inside of is bounded), and the points of are isolated in (by ( )). An application of shows that is finite.  Now we follow the approach started in as with that integration path, we subdivide  so that we can replace it by closed curves around the singularities inside . These curves, in turn, can then be transformed to circles around the singularities, as suggested by . By Cauchy's , equals the sum of the integrals of over these circles. Now use .     Proof of Theorem .     radius=0.8      arrow_loc=p+radius*(1\/sqrt(2),1\/sqrt(2))         \\gamma        Computing integrals is as easy (or hard!) as computing residues. The following two propositions start the range of tricks you may use when computing residues.       If is a removable singularity of then .    If is a pole of of order then .           This follows from (a).    We know by (b) that the Laurent series at looks like .  But then is a power series, and we can use Taylor's formula ( ) to compute .      It is worth noting that we are really coming full circle here: compare this proposition to Cauchy's Integral Formulas ( , , and ).    The integrand in has poles of order 1 at 0 and . We thus compute and , confirming our computations in .      Revisiting Example , the function has a double pole at 0 with , after a few iterations of L'Hôpital's Rule. (In this case, it is simpler to read the residue off the Laurent series in .)      Suppose and are holomorphic at , which is a simple zero of (i.e., a zero of multiplicity 1). Then .     The functions and have power series centered at ; the one for has by assumption no constant term: .  Let and note that . Hence , and the function is holomorphic at . By and Taylor's formula ( , .   An extension of of sorts is given in .    Revisiting once more , we note that and fit the bill. Thus and , confirming once more our computations in and .      We compute the residue of at , by applying with and . Thus .     "
},
{
  "id": "sec_residues-3",
  "level": "2",
  "url": "sec_residues.html#sec_residues-3",
  "type": "Definition",
  "number": "9.2.1",
  "title": "",
  "body": "  Suppose is an isolated singularity of with Laurent series . Then is the residue of at , denoted by or . residue    "
},
{
  "id": "residuethm",
  "level": "2",
  "url": "sec_residues.html#residuethm",
  "type": "Theorem",
  "number": "9.2.2",
  "title": "Residue Theorem.",
  "body": " Residue Theorem    residue theorem Suppose is holomorphic in the region , except for isolated singularities, and is a positively oriented, simple, closed, piecewise smooth path that avoids the singularities of , and . Then there are only finitely many singularities inside , and where the sum is taken over all singularities inside .    First, let be the set of singularities inside . The set is closed (since the points in where is holomorphic form an open set) and bounded (since the inside of is bounded), and the points of are isolated in (by ( )). An application of shows that is finite.  Now we follow the approach started in as with that integration path, we subdivide  so that we can replace it by closed curves around the singularities inside . These curves, in turn, can then be transformed to circles around the singularities, as suggested by . By Cauchy's , equals the sum of the integrals of over these circles. Now use .   "
},
{
  "id": "residuethmpic",
  "level": "2",
  "url": "sec_residues.html#residuethmpic",
  "type": "Figure",
  "number": "9.2.3",
  "title": "",
  "body": " Proof of Theorem .     radius=0.8      arrow_loc=p+radius*(1\/sqrt(2),1\/sqrt(2))         \\gamma       "
},
{
  "id": "prop_residueAsLimit",
  "level": "2",
  "url": "sec_residues.html#prop_residueAsLimit",
  "type": "Proposition",
  "number": "9.2.4",
  "title": "",
  "body": "     If is a removable singularity of then .    If is a pole of of order then .      "
},
{
  "id": "sec_residues-9",
  "level": "2",
  "url": "sec_residues.html#sec_residues-9",
  "type": "Proof",
  "number": "9.2.1",
  "title": "",
  "body": "    This follows from (a).    We know by (b) that the Laurent series at looks like .  But then is a power series, and we can use Taylor's formula ( ) to compute .     "
},
{
  "id": "ex_expoversinrev",
  "level": "2",
  "url": "sec_residues.html#ex_expoversinrev",
  "type": "Example",
  "number": "9.2.5",
  "title": "",
  "body": "  The integrand in has poles of order 1 at 0 and . We thus compute and , confirming our computations in .   "
},
{
  "id": "sec_residues-12",
  "level": "2",
  "url": "sec_residues.html#sec_residues-12",
  "type": "Example",
  "number": "9.2.6",
  "title": "",
  "body": "  Revisiting Example , the function has a double pole at 0 with , after a few iterations of L'Hôpital's Rule. (In this case, it is simpler to read the residue off the Laurent series in .)   "
},
{
  "id": "lem_computing_residues2",
  "level": "2",
  "url": "sec_residues.html#lem_computing_residues2",
  "type": "Proposition",
  "number": "9.2.7",
  "title": "",
  "body": "  Suppose and are holomorphic at , which is a simple zero of (i.e., a zero of multiplicity 1). Then .   "
},
{
  "id": "sec_residues-14",
  "level": "2",
  "url": "sec_residues.html#sec_residues-14",
  "type": "Proof",
  "number": "9.2.2",
  "title": "",
  "body": " The functions and have power series centered at ; the one for has by assumption no constant term: .  Let and note that . Hence , and the function is holomorphic at . By and Taylor's formula ( , .  "
},
{
  "id": "sec_residues-16",
  "level": "2",
  "url": "sec_residues.html#sec_residues-16",
  "type": "Example",
  "number": "9.2.8",
  "title": "",
  "body": "  Revisiting once more , we note that and fit the bill. Thus and , confirming once more our computations in and .   "
},
{
  "id": "sec_residues-17",
  "level": "2",
  "url": "sec_residues.html#sec_residues-17",
  "type": "Example",
  "number": "9.2.9",
  "title": "",
  "body": "  We compute the residue of at , by applying with and . Thus .   "
},
{
  "id": "sec_argprinc",
  "level": "1",
  "url": "sec_argprinc.html",
  "type": "Section",
  "number": "9.3",
  "title": "Argument Principle and Rouché’s Theorem",
  "body": " Argument Principle and Rouché's Theorem  In the previous section we saw how to compute integrals via residues, but in many applications we actually do not have an explicit expression for a function that we need to integrate (or this expression is very complicated). However, it may still be possible to compute the value of a function at any given point. In this situation we cannot immediately apply the Residue Theorem because we don't know where the singularities are. Of course, we could use numerical integration to compute integrals over any path, but computationally this task could be very resource intensive. But if we do know the singularities, we can compute the residues numerically by computing a finite number of the integrals over small circles around these singularities. And after that we can apply the residue theorem to compute the integral over any closed path very effectively: we just sum up the residues inside this path. The argument principle that we study below, in particular, addresses this question. We start by introducing the logarithmic derivative.  Suppose we have a differentiable function . Differentiating (where is some branch of the logarithm) gives , which is one good reason to call this quotient the logarithmic derivative of . logarithmic derivative It has some remarkable properties, one of which we would like to discuss here.  Now let's say we have two functions and holomorphic in some region. Then the logarithmic derivative of their product behaves very nicely: . We can apply this philosophy to the following situation: Suppose that is holomorphic in a region and has (finitely many) zeros of multiplicities , respectively. By , we can express as , where is also holomorphic in and never zero. Let's compute the logarithmic derivative of and play the same remarkable cancellation game as above: .  Something similar happens if has finitely many poles in . In Exercise , we invite you to prove that, if are all the poles of in with order , respectively, then the logarithmic derivative of can be expressed as , where is a function without poles in . Naturally, we can combine the expressions for zeros and poles, as we will do in a moment.    A function is meromorphic in the region if is holomorphic in except for poles. meromorphic      Argument Principle The name Argument Principle stems from interpreting the integral as the change in the argument of as traverses , since .    Suppose is meromorphic in a region and is a positively oriented, simple, closed, piecewise smooth path that does not pass through any zero or pole of , and . Denote by the number of zeros of inside counted according to multiplicity and by the number of poles of inside counted according to order. Then .    Suppose the zeros of inside are of multiplicities , respectively, and the poles inside are with order , respectively. (You may meditate about the fact why there can be only finitely many zeros and poles inside .) In fact, we may shrink , if necessary, so that these are the only zeros and poles in . By and , , where is a function that is holomorphic in (in particular, without poles) and never zero. Thanks to Cauchy's and Exercise , the integral is easy: . Finally, is holomorphic in (because is never zero in ), so that Corollary gives .    As mentioned above, this beautiful theorem helps to locate poles and zeroes of a function . The idea is simple: we can first numerically integrate over a big circle that includes all possible paths over which we potentially will be integrating . Then the numerical value of will be close to an integer that, according to the Argument Principle, equals . Then we can integrate over a smaller closed path that encompasses half of the interior of and find . Continuing this process for smaller and smaller regions will (after certain verification) produce small regions where has exactly one zero or exactly one pole. Integrating over the boundaries of those small regions that contain poles and dividing by gives all residues of .  Another nice related application of the Argument Principle is a famous theorem due to Eugene Rouché (1832 1910). Rouché's theorem    Rouché's Theorem   Suppose and are holomorphic in a region and is a positively oriented, simple, closed, piecewise smooth path, such that and for all . Then .    This theorem is of surprising practicality. It allows us to locate the zeros of a function fairly precisely. Here is an illustration.    All the roots of the polynomial have modulus less than two. The Fundamental Theorem of Algebra ( Theorem ) asserts that has five roots in . fundamental theorem of algebra What's special about the statement of is that they all have modulus . Note also that there is no general formula for computing roots of a polynomial of degree 5. (Although for this it's not hard to find all of its roots.) To see this, let and . Then for  . So and satisfy the condition of the . But has just one root, of multiplicity 5 at the origin, whence .     By and the Argument Principle ( ) .  We are assuming that on , which means that the function evaluated on stays away from . But then is a well-defined holomorphic function on . Its derivative is which implies by that .   "
},
{
  "id": "sec_argprinc-6",
  "level": "2",
  "url": "sec_argprinc.html#sec_argprinc-6",
  "type": "Definition",
  "number": "9.3.1",
  "title": "",
  "body": "  A function is meromorphic in the region if is holomorphic in except for poles. meromorphic    "
},
{
  "id": "argprinc",
  "level": "2",
  "url": "sec_argprinc.html#argprinc",
  "type": "Theorem",
  "number": "9.3.2",
  "title": "Argument Principle<details class=\"ptx-footnote\" aria-live=\"polite\" id=\"argprinc-1-1\"><summary class=\"ptx-footnote__number\" title=\"Footnote 9.3.1\"><sup> 1 <\/sup><\/summary><div class=\"ptx-footnote__contents\" id=\"argprinc-1-1\">The name <em class=\"emphasis\">Argument Principle<\/em> stems from interpreting the integral <span class=\"process-math\">\\(\\int_\\gamma \\frac{f'}{f}\\)<\/span> as the change in the argument of <span class=\"process-math\">\\(f(z)\\)<\/span> as <span class=\"process-math\">\\(z\\)<\/span> traverses <span class=\"process-math\">\\(\\gg\\text{,}\\)<\/span> since <span class=\"process-math\">\\(\\fLog(f(z))' =\n\\frac{ f'(z) }{ f(z) }\\text{.}\\)<\/span><\/div><\/details>.",
  "body": " Argument Principle The name Argument Principle stems from interpreting the integral as the change in the argument of as traverses , since .    Suppose is meromorphic in a region and is a positively oriented, simple, closed, piecewise smooth path that does not pass through any zero or pole of , and . Denote by the number of zeros of inside counted according to multiplicity and by the number of poles of inside counted according to order. Then .    Suppose the zeros of inside are of multiplicities , respectively, and the poles inside are with order , respectively. (You may meditate about the fact why there can be only finitely many zeros and poles inside .) In fact, we may shrink , if necessary, so that these are the only zeros and poles in . By and , , where is a function that is holomorphic in (in particular, without poles) and never zero. Thanks to Cauchy's and Exercise , the integral is easy: . Finally, is holomorphic in (because is never zero in ), so that Corollary gives .   "
},
{
  "id": "rouche",
  "level": "2",
  "url": "sec_argprinc.html#rouche",
  "type": "Theorem",
  "number": "9.3.3",
  "title": "Rouché’s Theorem.",
  "body": " Rouché's Theorem   Suppose and are holomorphic in a region and is a positively oriented, simple, closed, piecewise smooth path, such that and for all . Then .   "
},
{
  "id": "roucheexample",
  "level": "2",
  "url": "sec_argprinc.html#roucheexample",
  "type": "Example",
  "number": "9.3.4",
  "title": "",
  "body": "  All the roots of the polynomial have modulus less than two. The Fundamental Theorem of Algebra ( Theorem ) asserts that has five roots in . fundamental theorem of algebra What's special about the statement of is that they all have modulus . Note also that there is no general formula for computing roots of a polynomial of degree 5. (Although for this it's not hard to find all of its roots.) To see this, let and . Then for  . So and satisfy the condition of the . But has just one root, of multiplicity 5 at the origin, whence .   "
},
{
  "id": "sec_argprinc-13",
  "level": "2",
  "url": "sec_argprinc.html#sec_argprinc-13",
  "type": "Proof",
  "number": "9.3.1",
  "title": "",
  "body": " By and the Argument Principle ( ) .  We are assuming that on , which means that the function evaluated on stays away from . But then is a well-defined holomorphic function on . Its derivative is which implies by that .  "
},
{
  "id": "residuechapter-6",
  "level": "1",
  "url": "residuechapter-6.html",
  "type": "Exercises",
  "number": "9.4",
  "title": "Exercises",
  "body": "   Suppose that has a zero of multiplicity at . Explain why has a pole of order at .      Find the poles or removable singularities of the following functions and determine their orders:                                         Suppose is a nonconstant entire function. Prove that any complex number is arbitrarily close to a number in .    If is not a polynomial, use for .      Evaluate the following integrals for .                                                                  Suppose has a simple pole (i.e., a pole of order 1) at and is holomorphic at . Prove that .      Find the residue of each function at :                                         Use residues to evaluate the following integrals:                                                Use the Residue to re-prove Cauchy's Integral Formulas ( , and ).      Revisiting , show that if is even then .      Suppose has an isolated singularity at .     Show that also has an isolated singularity at .      Find .       Extend by proving, if and are holomorphic at , which is a double zero of , then .      Compute .      Generalize and as follows: Let and be polynomials such that for and the degree of is at least two larger than the degree of . Prove that equals times the sum of the residues of at all poles in the upper half plane. improper integral       Compute .         Generalize by deriving conditions under which we can compute for polynomials and , and give a formula for this integral along the lines of .      Compute .      Suppose is entire and with and . Evaluate and use this to give an alternate proof of Liouville's .    Show that if is bounded then the above integral goes to zero as increases.      Prove .      Suppose is meromorphic in the region , is holomorphic in , and is a positively oriented, simple, closed, piecewise smooth path that does not pass through any zero or pole of , and . Denote the zeros and poles of inside by and , respectively, counted according to multiplicity. Prove that .      Find the number of zeros of      in           in           in           Give another proof of the Fundamental Theorem of Algebra ( Theorem ), using Rouché's . fundamental theorem of algebra     If , let and , and choose as a circle that is large enough to make the condition of Rouché's theorem work. You might want to first apply to .      Suppose is closed and bounded and all points of are isolated points of . Show that is finite, as follows:     For each we can choose so that contains no points of except . Show that is continuous.    This is easy if you use the first definition of continuity in .      Assume is non-empty. By the Extreme Value , has a minimum value, . Let . Since is bounded, it lies in a disk for some . Show that the small disks , for , are disjoint and lie in .      Find a bound on the number of such small disks.    Compare the areas of and .     "
},
{
  "id": "residuechapter-6-1",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-1",
  "type": "Exercise",
  "number": "9.4.1",
  "title": "",
  "body": "  Suppose that has a zero of multiplicity at . Explain why has a pole of order at .   "
},
{
  "id": "residuechapter-6-2",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-2",
  "type": "Exercise",
  "number": "9.4.2",
  "title": "",
  "body": "  Find the poles or removable singularities of the following functions and determine their orders:                                      "
},
{
  "id": "residuechapter-6-3",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-3",
  "type": "Exercise",
  "number": "9.4.3",
  "title": "",
  "body": "  Suppose is a nonconstant entire function. Prove that any complex number is arbitrarily close to a number in .    If is not a polynomial, use for .   "
},
{
  "id": "ex_9_2",
  "level": "2",
  "url": "residuechapter-6.html#ex_9_2",
  "type": "Exercise",
  "number": "9.4.4",
  "title": "",
  "body": "  Evaluate the following integrals for .                                                               "
},
{
  "id": "residuechapter-6-5",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-5",
  "type": "Exercise",
  "number": "9.4.5",
  "title": "",
  "body": "  Suppose has a simple pole (i.e., a pole of order 1) at and is holomorphic at . Prove that .   "
},
{
  "id": "residuechapter-6-6",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-6",
  "type": "Exercise",
  "number": "9.4.6",
  "title": "",
  "body": "  Find the residue of each function at :                                      "
},
{
  "id": "residuechapter-6-7",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-7",
  "type": "Exercise",
  "number": "9.4.7",
  "title": "",
  "body": "  Use residues to evaluate the following integrals:                                             "
},
{
  "id": "residuechapter-6-8",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-8",
  "type": "Exercise",
  "number": "9.4.8",
  "title": "",
  "body": "  Use the Residue to re-prove Cauchy's Integral Formulas ( , and ).   "
},
{
  "id": "residuechapter-6-9",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-9",
  "type": "Exercise",
  "number": "9.4.9",
  "title": "",
  "body": "  Revisiting , show that if is even then .   "
},
{
  "id": "residuechapter-6-10",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-10",
  "type": "Exercise",
  "number": "9.4.10",
  "title": "",
  "body": "  Suppose has an isolated singularity at .     Show that also has an isolated singularity at .      Find .    "
},
{
  "id": "ex_computing_residues2",
  "level": "2",
  "url": "residuechapter-6.html#ex_computing_residues2",
  "type": "Exercise",
  "number": "9.4.11",
  "title": "",
  "body": "  Extend by proving, if and are holomorphic at , which is a double zero of , then .   "
},
{
  "id": "residuechapter-6-12",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-12",
  "type": "Exercise",
  "number": "9.4.12",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "ex_improperintrationalfct",
  "level": "2",
  "url": "residuechapter-6.html#ex_improperintrationalfct",
  "type": "Exercise",
  "number": "9.4.13",
  "title": "",
  "body": "  Generalize and as follows: Let and be polynomials such that for and the degree of is at least two larger than the degree of . Prove that equals times the sum of the residues of at all poles in the upper half plane. improper integral    "
},
{
  "id": "ex_9_4",
  "level": "2",
  "url": "residuechapter-6.html#ex_9_4",
  "type": "Exercise",
  "number": "9.4.14",
  "title": "",
  "body": "  Compute .      "
},
{
  "id": "residuechapter-6-15",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-15",
  "type": "Exercise",
  "number": "9.4.15",
  "title": "",
  "body": "  Generalize by deriving conditions under which we can compute for polynomials and , and give a formula for this integral along the lines of .   "
},
{
  "id": "residuechapter-6-16",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-16",
  "type": "Exercise",
  "number": "9.4.16",
  "title": "",
  "body": "  Compute .   "
},
{
  "id": "residuechapter-6-17",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-17",
  "type": "Exercise",
  "number": "9.4.17",
  "title": "",
  "body": "  Suppose is entire and with and . Evaluate and use this to give an alternate proof of Liouville's .    Show that if is bounded then the above integral goes to zero as increases.   "
},
{
  "id": "ex_logderpoles",
  "level": "2",
  "url": "residuechapter-6.html#ex_logderpoles",
  "type": "Exercise",
  "number": "9.4.18",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "residuechapter-6-19",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-19",
  "type": "Exercise",
  "number": "9.4.19",
  "title": "",
  "body": "  Suppose is meromorphic in the region , is holomorphic in , and is a positively oriented, simple, closed, piecewise smooth path that does not pass through any zero or pole of , and . Denote the zeros and poles of inside by and , respectively, counted according to multiplicity. Prove that .   "
},
{
  "id": "ex_9_1",
  "level": "2",
  "url": "residuechapter-6.html#ex_9_1",
  "type": "Exercise",
  "number": "9.4.20",
  "title": "",
  "body": "  Find the number of zeros of      in           in           in        "
},
{
  "id": "residuechapter-6-21",
  "level": "2",
  "url": "residuechapter-6.html#residuechapter-6-21",
  "type": "Exercise",
  "number": "9.4.21",
  "title": "",
  "body": "  Give another proof of the Fundamental Theorem of Algebra ( Theorem ), using Rouché's . fundamental theorem of algebra     If , let and , and choose as a circle that is large enough to make the condition of Rouché's theorem work. You might want to first apply to .   "
},
{
  "id": "ex_compactAndIsolated",
  "level": "2",
  "url": "residuechapter-6.html#ex_compactAndIsolated",
  "type": "Exercise",
  "number": "9.4.22",
  "title": "",
  "body": "  Suppose is closed and bounded and all points of are isolated points of . Show that is finite, as follows:     For each we can choose so that contains no points of except . Show that is continuous.    This is easy if you use the first definition of continuity in .      Assume is non-empty. By the Extreme Value , has a minimum value, . Let . Since is bounded, it lies in a disk for some . Show that the small disks , for , are disjoint and lie in .      Find a bound on the number of such small disks.    Compare the areas of and .    "
},
{
  "id": "sec_infsums",
  "level": "1",
  "url": "sec_infsums.html",
  "type": "Section",
  "number": "10.1",
  "title": "Infinite Sums",
  "body": " Infinite Sums  In this exercise, we evaluate the sums and . We hope the idea of how to compute such sums in general will become clear.    Consider the function . Compute the residues at all the singularities of .    Let be a positive integer and be the rectangular path from to to to back to .    Show that for . ( Hint : Use .)    Show that .      Use the Residue Theorem to arrive at an identity for .    Evaluate .    Repeat the exercise with the function to arrive at an evaluation of . ( Hint : To bound this function, you may use the fact that .)    Evaluate and .    We remark that, in the language of , you have computed the evaluations and of the Riemann zeta function. The function is called the alternating zeta function . alternating zeta function   "
},
{
  "id": "sec_binomialcoeff",
  "level": "1",
  "url": "sec_binomialcoeff.html",
  "type": "Section",
  "number": "10.2",
  "title": "Binomial Coefficients",
  "body": " Binomial Coefficients  The binomial coefficient  is a natural candidate for being explored analytically, as the binomial theorem   binomial coefficient (for and ) tells us that is the coefficient of in . You will derive two sample identities in the course of the exercises below.   Convince yourself that where is any simple, closed, positively oriented, piecewise smooth path such that 0 is inside .    Derive a recurrence relation for binomial coefficients from the fact that . ( Hint : Multiply both sides by .)    Now suppose with . Find a simple closed path surrounding the origin such that converges uniformly on as a function of . Evaluate this sum.    Keeping and from ( ), convince yourself that , Use ( ) to interchange summation and integral, and use the Residue to evaluate the integral, giving an identity for .     "
},
{
  "id": "sec_fibonacci",
  "level": "1",
  "url": "sec_fibonacci.html",
  "type": "Section",
  "number": "10.3",
  "title": "Fibonacci Numbers",
  "body": " Fibonacci Numbers  The Fibonacci Named after Leonardo Pisano Fibonacci (1170 1250). numbers are a sequence of integers defined recursively through . Fibonacci numbers Let .   Show that has a positive radius of convergence.    Show that the recurrence relation among the implies that . ( Hint : Write down the power series of and and rearrange both so that you can easily add.)    Verify that .    Use the Residue to derive an identity for . ( Hint : Integrate around and show that this integral vanishes as .)    Your identity should involve the golden ratio  . Explain what is going on in the output of the following SageMath prompt:  golden ratio     Generalize to other sequences defined by recurrence relations, e.g., the Tribonacci numbers Tribonacci numbers   .     "
},
{
  "id": "sec_dedekindsums",
  "level": "1",
  "url": "sec_dedekindsums.html",
  "type": "Section",
  "number": "10.4",
  "title": "Dedekind Sums",
  "body": " Dedekind Sums   Dedekind sum   This exercise outlines one more nontraditional application of the Residue . Given two positive, relatively prime integers and , let .    Choose an such that the rectangular path from to to to back to does not pass through any of the poles of .    Compute the residues for the poles of inside . Hint: Use the periodicity of the cotangent and the fact that . periodic  cotangent     Prove that and deduce that for any  .      Define . Use the Residue to show that .    Generalize and .     Historical remark. The sum in is called a Dedekind Named after Julius Wilhelm Richard Dedekind (1831 1916). sum . It first appeared in the study of the Dedekind -function  in the 1870's and has since intrigued mathematicians from such different areas as topology, number theory, and discrete geometry. The reciprocity law  is the most important and famous identity of the Dedekind sum. The proof that is outlined here is due to Hans Rademacher (1892 1969).  "
},
{
  "id": "appendix-calculus",
  "level": "1",
  "url": "appendix-calculus.html",
  "type": "Appendix",
  "number": "A",
  "title": "Theorems from Calculus",
  "body": " Theorems from Calculus    Phyllis explained to him, trying to give of her deeper self, Don't you find it so beautiful, math? Like an endless sheet of gold chains, each link locked into the one before it, the theorems and functions, one thing making the next inevitable. It's music, hanging there in the middle of space, meaning nothing but itself, and so moving...    John Updike (1932 2009)   Here we collect a few theorems from real calculus that we make use of in the course of the text.   Extreme-Value Theorem   Suppose is closed and bounded and is continuous. Then has a minimum and maximum value, i.e., exist in .     Mean-Value Theorem  mean-value theorem for real functions   Suppose is an interval, is differentiable, and . Then there exists such that .    Many of the most important results of analysis concern combinations of limit operations. The most important of all calculus theorems combines differentiation and integration (in two ways):   Fundamental Theorem of Calculus  fundamental theorem of calculus   Suppose is continuous.   The function defined by is differentiable and .    If is any antiderivative of , that is, , then .         If are continuous functions and then .      If are continuous functions then .      If is differentiable, is continuous, and is continuous then .    For functions of several variables, we can perform differentiation\/integration operations in any order, if we have sufficient continuity:    If the mixed partials and are defined on an open set and are continuous at a point , then they are equal at .      If is continuous on then .    We can apply differentiation and integration with respect to different variables in either order:   Leibniz's Rule  Leibniz's rule   Suppose is continuous on and the partial derivative exists and is continuous on . Then .    Leibniz's Rule follows from the Fundamental Theorem of Calculus ( ). You can try to prove it, e.g., as follows: Define , get an expression for as an iterated integral by writing as the integral of , interchange the order of integration, and then differentiate using .   Green's Theorem   Let >be a positively oriented, piecewise smooth, simple, closed path in and let be the set bounded by . If and have continuous partial derivatives on an open region containing then . Green's theorem      L'Hôspital's Rule   Suppose is an open interval and either is in or is an endpoint of . Suppose and are differentiable functions on with never zero. Suppose . Then .    There are many extensions of L'Hôspital's rule. In particular, the rule remains true if any of the following changes are made:  is infinite..  is unbounded and is an infinite endpoint of .  and are both infinite.    "
},
{
  "id": "realEVT",
  "level": "2",
  "url": "appendix-calculus.html#realEVT",
  "type": "Theorem",
  "number": "A.0.1",
  "title": "Extreme-Value Theorem.",
  "body": " Extreme-Value Theorem   Suppose is closed and bounded and is continuous. Then has a minimum and maximum value, i.e., exist in .   "
},
{
  "id": "realmeanvalue",
  "level": "2",
  "url": "appendix-calculus.html#realmeanvalue",
  "type": "Theorem",
  "number": "A.0.2",
  "title": "Mean-Value Theorem.",
  "body": " Mean-Value Theorem  mean-value theorem for real functions   Suppose is an interval, is differentiable, and . Then there exists such that .   "
},
{
  "id": "fundthmcalc",
  "level": "2",
  "url": "appendix-calculus.html#fundthmcalc",
  "type": "Theorem",
  "number": "A.0.3",
  "title": "Fundamental Theorem of Calculus.",
  "body": " Fundamental Theorem of Calculus  fundamental theorem of calculus   Suppose is continuous.   The function defined by is differentiable and .    If is any antiderivative of , that is, , then .      "
},
{
  "id": "thm_realintegralproperties",
  "level": "2",
  "url": "appendix-calculus.html#thm_realintegralproperties",
  "type": "Theorem",
  "number": "A.0.4",
  "title": "",
  "body": "  If are continuous functions and then .   "
},
{
  "id": "thm_realintegralupperbound",
  "level": "2",
  "url": "appendix-calculus.html#thm_realintegralupperbound",
  "type": "Theorem",
  "number": "A.0.5",
  "title": "",
  "body": "  If are continuous functions then .   "
},
{
  "id": "thm_calcsubstitution",
  "level": "2",
  "url": "appendix-calculus.html#thm_calcsubstitution",
  "type": "Theorem",
  "number": "A.0.6",
  "title": "",
  "body": "  If is differentiable, is continuous, and is continuous then .   "
},
{
  "id": "thm_mixedpartialscommute",
  "level": "2",
  "url": "appendix-calculus.html#thm_mixedpartialscommute",
  "type": "Theorem",
  "number": "A.0.7",
  "title": "",
  "body": "  If the mixed partials and are defined on an open set and are continuous at a point , then they are equal at .   "
},
{
  "id": "appendix-calculus-13",
  "level": "2",
  "url": "appendix-calculus.html#appendix-calculus-13",
  "type": "Theorem",
  "number": "A.0.8",
  "title": "",
  "body": "  If is continuous on then .   "
},
{
  "id": "leibnizrule",
  "level": "2",
  "url": "appendix-calculus.html#leibnizrule",
  "type": "Theorem",
  "number": "A.0.9",
  "title": "Leibniz’s Rule.",
  "body": " Leibniz's Rule  Leibniz's rule   Suppose is continuous on and the partial derivative exists and is continuous on . Then .   "
},
{
  "id": "thm_green",
  "level": "2",
  "url": "appendix-calculus.html#thm_green",
  "type": "Theorem",
  "number": "A.0.10",
  "title": "Green’s Theorem.",
  "body": " Green's Theorem   Let >be a positively oriented, piecewise smooth, simple, closed path in and let be the set bounded by . If and have continuous partial derivatives on an open region containing then . Green's theorem    "
},
{
  "id": "lhospital",
  "level": "2",
  "url": "appendix-calculus.html#lhospital",
  "type": "Theorem",
  "number": "A.0.11",
  "title": "L’Hôspital’s Rule.",
  "body": " L'Hôspital's Rule   Suppose is an open interval and either is in or is an endpoint of . Suppose and are differentiable functions on with never zero. Suppose . Then .   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
