<?php
  include 'header.php';
?>

<div class="row">
  <div class="column side">
<ul class="left">
<li><a href="index.php">home</a></li>
<li><a href="teach.php">teaching</a>
  <ul>
  <li><a href="310.php">math 310</a></li>
  <li><a href="430.php">math 430</a></li>
  </ul>
</li>
<li><a href="students.php">advising</a></li>
<li><a href="research.php">research</a></li>
<li><a href="cv.php">curriculum vitae</a></li>
</ul>
  </div>

<!--  <div class="column middle" style="background-color:#bbb;">Column</div> -->
  <div class="column middle">

  <table>
    <tr>
      <td>
        <center>
          <b>
            <p>MATH 310<p>
            Elementary Number Theory<p>
          </b>
          Fall 2018
        </center>
      </td>
      <td width=30></td>
      <td><IMG SRC="images/foxtrot.even.dinner.gif" width=400 alt="cartoon: foxtrot does number theory"></td>
    </tr>
  </table>   

<p>

<table>
  <tr>
    <td>Lecture</td>
    <td>Mon/Wed/Fri 2:00-2:50 p.m. TH 404</td>
  </tr>
  <tr>
    <td>Prerequisites:</td>
    <td>MATH 301 with a grade of C or better</td>
  </tr>
  <tr>
    <td>Instructor</td>
    <td><a href="index.php">Dr. Matthias Beck</a></td>
  </tr>
  <tr>
    <td>Office</td>
    <td><a href="http://www.sfsu.edu/~sfsumap/">Thornton Hall</a> 933</td>
  </tr>
  <tr>
    <td>Office hours</td>
    <td>Mon 11-12, Wed 10-11, Fri 1-2 & by appointment</td>
  </tr>
  <tr><td></td><td></td></tr>
</table>

<p><b>Course objectives.</b>
Number Theory studies the <i>integers</i>: numbers like 0, 1, -3, 34, ... which we used since childhood. A fundamental concept is that of <i>divisibility</i>: the integer <i>a</i> divides the integer <i>b</i> if we can find an integer <i>c</i> such that <i>b=ac</i>. This simple concept gives rise to a beautiful theory, encryptions schemes which are used on any computer today, and many famous open problems in mathematics, among other things.
</p>
<p>
As an example, we will consider <i>prime numbers</i>: those integers >1 that are only divisible by themselves and 1. There are <i>infinitely many </i>prime numbers--one of the many theorems we will prove in this course.
The only even prime is 2, all others are odd. To say this in a more sophisticated way: there are infinitely many primes that have a remainder of 1 when divided by 2. 
Can one say something similar when we divide primes by 3? The only prime that does not give a remainder when divided by 3 is 3 itself. So all others give a remainder of 1 or 2. Are there infinitely many primes in both cases?
To give an open problem, we mention <i>twin primes</i>: those are pairs of primes that differ by 2. Are there infinitely many twin primes?
</p>

<p><b>Syllabus.</b> 
Topics in this course will include:
</p>
<ul>
<li>Divisibility
<li>Primes
<li>Congruences
<li>Arithmetic functions
<li>Primitive roots
<li>Quadratic reciprocity
<li>Continued fractions
</ul>

<p><b>Textbooks.</b> 
<ul>
<li><a href="http://www.math.psu.edu/andrews/">George Andrews</a>, <i>Number Theory</i>, Dover, 1994 (reprinted from the 1971 original).
<li><a href="http://www.wstein.org/">William Stein</a>, <i><a href="http://www.wstein.org/books/ent/">Elementary Number Theory: Primes, Congruences, and Secrets</a></i>, Springer, 2008.
</ul>

<p><b>Participation.</b>
Most of the material covered in this class will be worked out in small groups during class sessions; this philosophy is sometimes called <i>inquiry-based learning</i>.
It will thus be essential that every student participates actively in every class. If you have to miss a class due to a medical or family emergency, please let me know before the class; otherwise, I expect you to be in class and actively engaged.
</p>

<p><b>Homework.</b>
The worksheets we will be working on in class contain more material than what can be covered in a normal class session. I will assign certain problems from each worksheet as homework problems.
The worksheets will be due before on the following Tuesday. 
You may hand them in early to be able to correct your mistakes. Although you may (and should) work together with your class mates, the solutions you hand in have to be your own.</p>

<ul>
<li><a href="310/1_euclid.pdf">Worksheet 1: Euclidean algorithm</a> [<a href="310/1_euclid.tex">tex</a>]</li>
<li><a href="310/2_primes.pdf">Worksheet 2: Primes</a> [<a href="310/2_primes.tex">tex</a>]</li>
<li><a href="310/3_modular.pdf">Worksheet 3: Modular Arithmetic</a> [<a href="310/3_modular.tex">tex</a>]</li>
<li><a href="310/4_chinese.pdf">Worksheet 4: Chinese Remainder Theorem</a> [<a href="310/4_chinese.tex">tex</a>]</li>
<li><a href="310/5_cryptography.pdf">Worksheet 5: Cryptography</a> [<a href="310/5_cryptography.tex">tex</a>]</li>
<li><a href="310/6_arithmetic.pdf">Worksheet 6: Arithmetic Functions</a> [<a href="310/6_arithmetic.tex">tex</a>]</li>
<li><a href="310/7_mobius.pdf">Worksheet 7: Möbius Function</a> [<a href="310/7_mobius.tex">tex</a>]</li>
<li><a href="310/8_primitive.pdf">Worksheet 8: Primitive Roots</a> [<a href="310/8_primitive.tex">tex</a>]</li>
<li><a href="310/9_primes2.pdf">Worksheet 9: Primes Again</a> [<a href="310/9_primes2.tex">tex</a>]</li>
<li><a href="310/10_quadratic.pdf">Worksheet 10: Quadratic Residues</a> [<a href="310/10_quadratic.tex">tex</a>]</li>
<li><a href="310/11_continued.pdf">Worksheet 11: Continued Fractions</a> [<a href="310/11_continued">tex</a>]</li>
</ul>

<p><b>Sage.</b>
You will be expected to use the open math software <a href="http://www.sagemath.org/">sage</a> in some of your homework assignments.
<a href="http://modular.math.washington.edu/edu/2012/1062/misc/bard-sage_for_undergraduates-how_to_get_started.pdf">Here</a> is a good introduction to sage.
</p>

<p><b>Grading system.</b>

<table border=1>
  <tr>
    <td>Participation</td>
    <td align=center>10%</td>
  </tr>
  <tr>
    <td>Worksheets</td>
    <td align=center>50%</td>
  </tr>
  <tr>
    <td>Midterm Exam</a> (October 22)</td> 
    <td align=center>20%</td>
  </tr>
  <tr>
    <td>Final Exam (December 22, 1:00 p.m.)</td> 
    <td align=center>20%</td>
  </tr>
</table>

<p>
I want to ensure that each of you accomplishes the goals of this course as comfortably and successfully as possible. 
At any time you feel overwhelmed or lost, please come and talk with me.
</p>

<p>
<b>The math.</b>
The way to <i>learn</i> math is through <i>doing</i> math. 
It is vital and expected that you attend every class meeting. You will get
a good feel for the math from there, but it is even more crucial that you do the 
homework. Working in groups is not only allowed but strongly recommended. 
The <a href="https://ilearn.sfsu.edu">iLearn</a> system allows you to send emails to anybody in your class. 
While I strongly encourage you to work together, the solutions and writing projects you hand in have to be your own.

<p>

<b>Fine print.</b>
<br><A HREF="http://www.sfsu.edu/deptpage/acal4.htm">SFSU academic calender</A>
<br><A HREF="fineprint.php#bs.html">BS rule</A>
<br><A HREF="fineprint.php#plagiarism.html">Academic Integrity and Plagiarism</A>
<br><A HREF="fineprint.php#tutoring.html">Tutoring</A>
<br><A HREF="fineprint.php#crncr.html">CR/NCR grading</A>
<br><A HREF="fineprint.php#incompletes.html">Incomplete grades</A>
<br><A HREF="fineprint.php#withdrawals.html">Late and retroactive withdrawals</A>
<br><A HREF="fineprint.php#disabilities">Students with disabilities</A>
<br><A HREF="fineprint.php#religious">Religious holidays</A>

<p>

This syllabus is subject to change. 
All assignments, as well as other announcements on tests, policies, etc.,
are given in class. If you miss a class, it is your responsibility to find
out what's going on. I will try to keep this course web page as updated as
possible, however, the most recent information will always be given in class. 
Always ask lots of questions in class; my courses are interactive. 
You are always encouraged to see me in my office.

</div>


<?php
  $quotation = '"The mathematical phenomenon always develops out of simple arithmetic, so useful in everyday life, out of numbers, those weapons of the gods: the gods are there, behind the wall, at play with numbers." <br>Le Corbusier';
  include 'footer.php';
?>

