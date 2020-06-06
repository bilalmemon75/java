//////////////chapter 1/////////////////

//1.
alert("Welcome!");

//2.
alert("Error! Please enter a valid password");

//3.
alert("Welcome to JS Land...\nHappy Coding!");

//4.
alert("Happy Coding!", alert("Welcome to JS Land..."));

//5.
alert("Hello... I can run JS through my web browser's console");

//////////////////////////////////////////

//////////////chapter 2//////////////////

//1.
var username;

//2.
var myName = "Muhammad Bilal Memon";

//3.
var message;
message = "Hello World";
alert(message);

//4.
var name = "Bilal";
var age = "20 years old";
var insitute = "Saylani institute";
var course = "Web and Mobile Hybrid Development";

alert(name);
alert(age);
alert(insitute);
alert(course);

//5.
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");


//6.
var email = "memonbilal539@gmail.com";
alert("My email address is " + email);



//7.
var book = "'A smarter way to learn JavaScript'";
alert("I am try to learn from the book " + book);


//8.
document.write("Yay! I can write HTML content through JavaScript");

//////////////////////////////////////////

//////////////chapter 3//////////////////

//1.
var age = 20;
alert("I am " + age + " years old.");

//2.
var $times = 14;
alert("You have visited this page " + $times + " times.");

//3.
var birthYear = 1998;
document.write("My birth year is " + birthYear + "<br/>");
document.write("Data type of my declared variable is number.");

//4.
var name = "John Doe";
var title = "T-shirt";
var quantity = xyz;

document.write(name + " ordered " + quantity + " " + title + " on XYZ Clothing store" + "<br/>");
document.write("Data type of my declared variable is number");

//////////////////////////////////////////

//////////////chapter 4//////////////////

//1.
var $one, $two, $three;

//2.
//Legal variables
var firstName, last4nAmEs, $nick_name, AK47, simple;

//Illegal variables
var first Name, 4cars, (X - Y.Z), class, function;

//3.
document.write(`<h1>Rules for naming JS variables</h1>
<p>
Variable names can only contain letters, numbers, dollar signs and underscores.
</p>
<p>
Variables must begin with a letter, dollar sign or underscore.
</p>
<p>
Variable names are case sensitive.
</p>
<p>
Variable names should not be JS keywords.
</p>`)

//////////////////////////////////////////

//////////////chapter 6-9//////////////////

//1.
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
alert("The sum of " + num1 + " and " + num2 + " is " + sum);

//2.
var num1 = 5;
var num2 = 6;
var subtract = num1 - num2;
var product = num1 * num2;
var divide = num1 / num2;
var modulus = num1 % num2;

alert("Result of subtracting " + num2 + " from " + num1 + " is " + subtract); //Subtraction
alert("Result of multiplying " + num1 + " and " + num2 + " is " + product);   //Multiplication
alert("Result of dividing " + num1 + " by " + num2 + " is " + divide);        //Division
alert("Remainder of dividing " + num1 + " by " + num2 + " is " + modulus);    //Modulus

//3.
var num;
document.write("Value after variable declaration is ", num + "<br/>");
num = 3;
document.write("Initial value: ", num + "<br/>");
num++;
document.write("Value after increment is ", num + "<br/>");
num += 7;
document.write("Value after adding 7 is ", num + "<br/>");
num--;
document.write("Value after decrement is ", num + "<br/>");
num %= 3;
document.write("The remainder is ", num + "<br/>");

//4.
var ticket = 600;
document.write("The total cost of buying 5 tickets to a movie is " + (ticket * 5) + " PKR.");

//5.
var num = 4;
document.write("Multiplication table of " + num + "<br/><br/>")
for (var x = 1; x <= 10; x++) {
    document.write(num + " x " + x + " = " + num * x + "<br/>")
}

//6.
var celsius = 44;
var toF = (celsius * 9 / 5) + 32;
var fahrenheit = 77;
var toC = (fahrenheit - 32) * 5 / 9;

document.write(celsius + " °C is " + toF + " °F" + "<br/>");
document.write(fahrenheit + " °F is " + toC + " °C");

//7.
var price1 = 650;
var price2 = 100;
var qty1 = 3;
var qty2 = 7;
var shipping = 100;
var total = (price1 * qty1) + (price2 * qty2) + shipping;

document.write("Price of Item 1 = " + price1 + "<br/>");
document.write("Quantity of Item 1 = " + qty1 + "<br/>");
document.write("Price of Item 2 = " + price2 + "<br/>");
document.write("Quantity of Item 2 = " + qty2 + "<br/>");
document.write("Shipping charges = " + shipping + "<br/><br/>");
document.write("Total cost of your order is " + total + " PKR.");

//8.
var totalMarks = 1100;
var obtainedMarks = 715;
var percentage = obtainedMarks * 100 / totalMarks;

document.write("Total Marks = " + totalMarks + "<br/>");
document.write("Obtained Marks = " + obtainedMarks + "<br/>");
document.write("Percentage = " + percentage + "%");

//9.
var dollar = 104.80;
var riyal = 28;
var totalPKR = (dollar * 10) + (riyal * 25);
document.write("Total Currency in PKR= Rs " + totalPKR)

//10.
var num = 6;
num = ((num + 5) * 10) / 2;
alert(num);

//11.
 var currentYear = 2020;
 var birthYear = 1998 ;
 var age = 20 ;
 document.write(" currentYear : " + currentYear  + "<br/>")
 document.write("birthYear: "+ birthYear + "<br/>")
 document.write("your age :" + age )



//////////////////////////////////////////

//////////////chapter 9-11//////////////////


//1.
var city = prompt("Please enter your city..");
if (city === "Karachi" || city === "karachi") {
    alert("Welcome to city of lights.");
}

//2.
var gender = prompt("Please enter your gender..");
if (gender == "male") {
    alert("Good Morning Sir.");
}
else if (gender == "female") {
    alert("Good Morning Ma’am.");
}

//3.
var color = prompt("Enter the color of traffic signal..");
if (color == "red") {
    alert("Vehicles must stop!");
}
else if (color == "yellow") {
    alert("Vehicles should get ready to move!");
}
else if (color == "green") {
    alert("Vehicles can move now!");
}

//6.
var maxAge = prompt("Enter the Maximum age..");
var age = prompt("Enter the your current age..");
if (age && age <= maxAge) {
    alert("You are welcome!");
}

//4.
var fuel = prompt("Enter the remaining fuel of your car..(in litres)");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car!");
}

//5.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//6.
var english = parseInt(prompt("Enter the marks of English.."));
var math = parseInt(prompt("Enter the marks of Maths.."));
var urdu = parseInt(prompt("Enter the marks of Urdu.."));
var totalMarks = parseInt(prompt("Enter the Total marks.."));
var obtainedMarks = english + math + urdu;
var percentage = obtainedMarks * 100 / totalMarks;
var grade, remarks;

if (percentage >= 80) {
    grade = "A-One";
    remarks = "Excellent"
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good"
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve"
}
else {
    grade = "Fail";
    remarks = "Sorry"
}

document.write("Total Marks = " + totalMarks + "<br/>");
document.write("Marks Obtained = " + obtainedMarks + "<br/>");
document.write("Percentage = " + percentage + "%" + "<br/>");
document.write("Grade = " + grade + "<br/>");
document.write("Remarks : " + remarks + "<br/>")


//7.
var secretNumber = 4;
var num = parseInt(prompt("Guess a number ranging from 1 to 10.."));

if (num == secretNumber) {
    alert("Bingo! Correct answer.")
}
else if (num == secretNumber + 1 || num == secretNumber - 1) {
    alert("Close enough to the correct answer");
}
else {
    alert("Nope..");
}

//8.
var num = parseInt(prompt("Enter a number.."));

if (num % 3 === 0) {
    alert(num + " is divisible by 3")
}
else {
    alert(num + " is not divisible by 3")
}




//9.
var num = parseInt(prompt("Enter a number.."));

if (num % 2 === 0) {
    alert(num + " is a even number.");
}
else {
    alert(num + " is a odd number.");
}

//10.
var temperature = parseInt(prompt("Enter a number.."));

if (temperature > 40) {
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The Weather today is Normal.");
}
else if (temperature > 20) {
    alert("Today’s Weather is cool.");
}
else {
    alert("OMG! Today’s weather is so Cool.");
}

//11.
var num1 = parseInt(prompt("Enter the first number.."));
var num2 = parseInt(prompt("Enter the second number.."));
var operation = prompt("What do you want? e.g (+, -, *, /, %)");

if (operation == "+") {
    alert(num1 + "+" + num2 + " = " + (num1 + num2));
}
else if (operation == "-") {
    alert(num1 + "-" + num2 + " = " + (num1 - num2));
}
else if (operation == "*") {
    alert(num1 + "x" + num2 + " = " + (num1 * num2));
}
else if (operation == "/") {
    alert(num1 + "÷" + num2 + " = " + (num1 / num2));
}
else if (operation == "%") {
    alert(num1 + "%" + num2 + " = " + (num1 % num2));
}
else {
    alert("Oops! Something went wrong!");
}



//////////////////////////////////////////

//////////////chapter 12-13///////////////



//1.
var user = prompt("Enter a number..");
var code = user.charCodeAt(0);
if (code >= 65 && code <= 90) {
    alert(user + " is a uppercase character");
}
else if (code >= 97 && code <= 122) {
    alert(user + " is a lowercase character");
}
else if (isNaN(user) === false && user) {
    alert(user + " is a number.");
}
else {
    alert(user + " is a not number, uppercase letter or lower case letter.");
}



//7.
var time = prompt("Please enter time in 24 hour format.. (e.g. 1650)");

if (time >= 0000 && time < 1200) {
    alert("Good morning!")
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!")
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening!")
}
else if (time >= 2100 && time < 2359) {
    alert("Good night!")
}
else {
    alert("Invalid time!")
}



//5.
var pass1 = "12345";
var pass2 = prompt("Please enter password.");

if (pass2) {
    if (pass1 == pass2) {
        alert("Correct! The password you entered matches the original password")
    }
    else {
        alert("Incorrect password")
    }
}
else {
    alert("Please enter your password.");
}


//6.
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}



//3.
var num = parseInt(prompt("Enter a postive or number negative.."));
if (num > 0) {
    alert(num + " is a postive number.");
}
else if (num < 0) {
    alert(num + " is a negative number.");
}
else if (num === 0) {
    alert(num + " is neither positive nor negative.");
}


//4.
var x = prompt("Please enter a vowel..");

if (x == "A" || x == "a" || x == "E" || x == "e" || x == "I" ||
    x == "i" || x == "O" || x == "o" || x == "U" || x == "u") {
    alert(true);
}
else {
    alert(false);
}




//////////////////////////////////////////

//////////////chapter 14-16///////////////

//1.
var studentNames = [];

//2.
var studentNames = new Array();

//3.
var name = ["kashif", "ahmed", "Bilal"]

//4.
var numArray = [22, 44, 66, 88]

//5.
var booArray = [true, false]

//6.
var mixArray = [false, "One", 2, "Three", 4]



//7.
var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

for (var x = 0; x < edu.length; x++) {
    document.write(x + 1 + ") " + edu[<x]+ "<br/>");
}


//8.
var student = [];
var marks = [];
var per = [];
for (var x = 0; x < 3; x++) {
    student.push(prompt('Enter the name of Student ' + (x + 1)));
    marks.push(prompt('Enter the marks of ' + student[x] + " (Out of 500)"));
    per.push(marks[x] * 100 / 500);
}

for (var y = 0; y < 3; y++) {
    document.write("Score of " + student[y] + " is " + marks[y] + ". Percentage: " + per[y] + "%>br/<");
}

//9.
var colors = ["red", "blue", "green", "yellow", "orange"];
//a
colors.unshift(prompt(colors + "\nEnter the color which you want to add at begining.."));
//b
colors.push(prompt(colors + "\nEnter the color which you want to add at end.."));
//c
colors.unshift("Grey", "Lemon");
alert("Two more colors added at the begining..\n" + colors);
//d
colors.shift();
alert("One color deleted from the begining..\n" + colors);
//e
colors.pop();
alert("One more color deleted from the end..\n" + colors);
//f
var newColorIndex = prompt("Enter the index where you want to add a color..\n" + colors);
var newColorName = prompt("Enter the color name you want to add at Index=> " + newColorIndex + "\n" + colors);
colors.splice(newColorIndex, 0, newColorName);
//g
var removeIndex = prompt("Enter the index where you want to remove color(s)..\n" + colors);
var removeCount = prompt("Enter the number of color(s) you want to remove at Index=> " + removeIndex + "\n" + colors);
colors.splice(removeIndex, removeCount);

alert("Final Array:\n" + colors);



//11.
var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities list: <br/>" + city + "<br/><br/>");

var cityNew = city.slice(2, 4);
document.write("Selected cities list: <br/>" + cityNew);

//12.
var arr = ["This", "is", "my", "cat"];
document.write("Array: <br/>" + arr + "<br/><br/>");

var arrJoint = arr.join(" ");
document.write("String: <br/>" + arrJoint);

//13.
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices: <br/>" + devices + "<br/><br/>");

for (var x = 0; x < devices.length; x++) {
    document.write("Out: <br/>" + devices[x] + "<br/>");
}

//14.
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices: <br/>" + devices + "<br/><br/>");

devices.reverse();
for (var x = 0; x < devices.length; x++) {
    document.write("Out: <br/>" + devices[x] + "<br/>");
}

//15.
var array = ["Apple", "Samsung", "Nokia", "Motorolla"];

var newSelect = "<select>";
for (var x = 0; x < array.length; x++) {
    newSelect += "<option>" + array[x] + "</option>";
}
newSelect += "</select>";

document.write(newSelect);

//10.
var students = ["Ahmed", "kashif", "bilal", "khalid"];
var scores = [45, 65, 99, 10];

var newTable = "<table border='1'>";
newTable += "<tr>";
newTable += "<td>Students</td>";
newTable += "<td>Scores</td>";
newTable += "</tr>";

for (var x = 0; x < scores.length; x++) {
    newTable += "<tr>";
    newTable += "<td>" + students[x] + "</td>";
    newTable += "<td>" + scores[x] + "</td>";
    newTable += "</tr>";
}
newTable += "</table>";

document.write(newTable);

//////////////////////////////////////////

//////////////chapter 17-20///////////////

//1.
for (var x = 1; x <= 5; x++) {
    alert("Hello world");
} 

//2.
for (var x = 1; x <= 10; x++) {
    document.write(x + "<br/>");
}

//4.
var num = prompt("Enter a number to show its multiplication table");
var length = prompt("Enter length of multiplication table");

document.write("Multiplication table of " + num + "<br/>");
document.write("Length " + length + "<br/><br/>");

for (var x = 1; x <= length; x++) {
    document.write(num + " × " + x + " = " + (num * x) + "<br/>");
}

//4.
var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
for (var x = 0; x < A.length; x++) {
    sss.innerHTML += (A[x] + "<br/>");
}

//5.
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var x = 0; x < fruits.length; x++) {
    sss.innerHTML += (fruits[x] + "<br/>");
}

for (var x = 0; x < fruits.length; x++) {
    sss.innerHTML += ("Element at index " + x + " is " + fruits[x] + "<br/>");
}


//6.
document.write("Counting:<br/>");
for (var x = 1; x <= 15; x++) {
    document.write(x + ", ");
}

document.write("<br/><br/>Reverse counting:<br/>");
for (var x = 10; x >= 1; x--) {
    document.write(x + ", ");
}

document.write("<br/><br/>Even:<br/>");
for (var x = 0; x <= 20; x += 2) {
    document.write(x + ", ");
}

document.write("<br/><br/>Odd:<br/>");
for (var x = 1; x <= 20; x += 2) {
    document.write(x + ", ");
}

document.write("<br/><br/>Series:<br/>");
for (var x = 2; x <= 20; x += 2) {
    document.write(x + "k, ");
}

//8.
var arr = ["Cake", "apple pie", "cookie", "chips", "patties"];
var user = prompt("Welcome to ABC Bakery. What do you want to order?");
var available = false;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === user) {
        document.write(user + " is <strong>available</strong> at index " + arr.indexOf(user) + " in our bakery.");
        available = true;
    }
}

if (!available) {
    document.write("We are sorry. " + user + " is <strong>not available</strong> in our bakery.");
}

//8.
var A = [24, 53, 78, 91, 12];
var largestNum = Math.max.apply(Math, A);

document.write("Array items: " + A + "<br/>");
document.write("The largest number is " + largestNum);

//9.
var A = [24, 53, 78, 91, 12];
var smallestNum = Math.min.apply(Math, A);

document.write("Array items: " + A + "<br/>");
document.write("The smallest number is " + smallestNum);




