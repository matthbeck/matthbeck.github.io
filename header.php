<!DOCTYPE html>
<html lang="en">
<head>
<title>matthias beck</title>
<link rel="icon" type="image/png" href="images/pentagonyellow.png"/>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

a:link, a:visited {
  text-decoration: none;
  color: #0B0B61;
}

a:hover {
  text-decoration: none;
  color: #610B38;
}

/* Style the header */
.header {
  background-color: #F5F5F5;
  padding: 20px;
  font-size: 14px;
}

/* Create three unequal columns that floats next to each other */
.column {
  float: left;
  padding: 20px;
  font-size: 14px;
}

/* Left and right column */
.column.side {
  width: 20%;
}

/* Middle column */
.column.middle {
  width: 60%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the footer */
.footer {
  background-color: #F5F5F5;
  padding: 20px;
  font-size: 14px;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to
each other */
@media (max-width: 600px) {
  .column.side, .column.middle {
    width: 100%;
  }
}

ul.left {
  list-style-type: none;
  padding: 0;
}

.hide {
  display: none;
}
    
.myDIV:hover + .hide {
  display: block;
  color: red;
}

</style>
</head>
<body>

<div class="header">
  <h1>matthias beck</h1>
  <p>
  <div class="myDIV">professor of mathematics</div> 
  <div class="hide"><img width=150 src="images/kumimath.jpeg" alt="kumi does math"/></div>
  <a href="http://math.sfsu.edu/">san francisco state university</a> &#8226; <a href="http://www.mi.fu-berlin.de/math/">freie universität berlin</a>
</div>


