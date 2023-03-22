//4)https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373

//Task-01
//1)Declare four variables without assigning values and print them in console
var a;
var b;
var c;
var d;
console.log("nothing to show");
//2)How to get value of the variable myvar as output
var myvar= 1;
console.log("myvar");
//out put: myvar
//3)3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstName="Vijay";
var lastName="Madhaiyan";
var martialstatus="single";
var country="India";
var age=22;
console.log(firstName);
console.log(lastName);
console.log(martialstatus);
console.log(country);
console.log(age);

//4. Declare variables to store your first name, last name, marital status, country and age in a single line
var user={firstName:"Vijay",lastName:"Madhaiyan",martialstatus:"single",country:"India",age:22};
console.log(user);
//5. Declare variables and assign string, boolean, undefined and null data types
//I am 25 years old. 
//You are 30 years old.
var firstName="Ram";//string
var age=25;//number
var secondName="Sam";//string
var age1=30;//number
var result=true;
if(firstName=="Ram");{
    result=true;
   console.log(result);//true//boolean 
}
//6. Convert the string to integer

//parseInt()
var a = "12.5";
var b = parseInt(a);
console.log("Integer value is" + b);
//Number()
const quantity = "12";
console.log(parseInt(quantity));
//Plus sign(+)
const x = 1;
const y = -1;
console.log(+x);//output:1
console.log(+y);// Expected output: -1
//7. Write 6 statement which provide truthy & falsey values.
//In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
 //All values are truthy unless they are defined as falsy. 
 //That is, all values are truthy except false , 0 , -0 , 0n , "" , null , undefined , and NaN . 
 //JavaScript uses type coercion in Boolean contexts.
 
 //Task 2: Simple Programs todo for Operators
 //1)Square of a number
 console.log(Math.pow(5, 2)); // 25
 //2)Swapping 2 numbers
var a = 20;
var b = 10;
var temp;
console.log(`before swapping: a= ${a}`);
console.log(`before swapping b= ${b}`);
temp = a;
a = b;
b = temp;
console.log(`after swapping a= ${a}`);
console.log(`after swapping b= ${b}`);
//3)Addition of 3 numbers
function sumNumbers(a, b, c) {
 var sum = a + b + c;
 console.log(sum);
}
sumNumbers(1, 2, 3);//o/p=6
//4)Celsius to Fahrenheit conversion
function cToF(celsius) 
{
var cTemp = celsius;
var cToFahr = cTemp * 9 / 5 + 32;
var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
console.log(message);
}
cToF(60);
//5) Meter to miles
var Meters=5;
var result=Meters*0.00062137
console.log(result);
//6)Pounds to kg
var pounds=5;
var result=pounds* 0.453592
console.log(result);
//7)Calculate Batting Average:
var chipper = {
firstName: 'Chipper',
hits: 10,
atBats: 30,
calcAVG: function() {
this.avg = this.hits / this.atBats;
return this.avg;
}
}      
chipper.calcAVG();
console.log(chipper.firstName + ' has a batting average of ' + chipper.avg);
//8)Calculate five test scores and print their average
const arr = [1, 2, 3, 4, 5];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);
//9)Power of any number x ^ y.
var b, e, r;// b = base;e = exponent ;r = result
b = 8;
e = 4; // finding power of base value by equiping exponent value
r = Math.pow(b, e);
console.log(r);
//10)Calculate Simple Interest:
let P = 1, R = 1, T = 1;// Calculate simple interest
let SI = (P * T * R) / 100;//Print the resultant value of SI
console.log("Simple Interest = " + SI);
//11)Calculate area of an equilateral triangle
const side1 = 5; 
const side2 = 6; 
const side3 = 7; 
const perimeter = (side1 + side2 + side3)/2;
const area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);
//12)Area Of Isosceles Triangle
const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');
const areaValue = (baseValue * heightValue) / 2;
console.log(`The area of the triangle is ${areaValue}`);
//13)Volume Of Sphere:
let radius = 5;
let volume = (4/3)* Math.PI * Math.pow(radius, 3);
console.log('Volume of Sphere: '+volume.toFixed(2));
//14)Volume Of Prism:
function findVolume( l,  b, h)
{
let volume = (l * b * h) / 2;
return volume;
}
let l = 18, b = 12, h = 9;
document.write( "Volume of triangular prism: " + findVolume(l, b, h));
//15)Find area of a triangle.
function areaOfTriangle(base, height) {
return (base * height) / 2;
}
//16)Give the Actual cost and Sold cost, Calculate Discount Of Product
var bill = parseInt(prompt("Enter bill amount:"));
var discount = parseInt(prompt("Enter discount percentage:"));
var afterDiscount = bill - (bill * discount / 100);
console.log("After discount your bill is: " + afterDiscount);
//17)Given their radius of a circle and find its diameter, circumference and area.
let pi = 3.14159265358979323846;// Function to calculate the area of circle
function findArea(r) {
return (pi * r * r);
}
let r, Area;
r = 5;
Area = findArea(r);// displaying the area
console.log("Area of Circle is: " + Area);
//18)Given two numbers and perform all arithmetic operations.
let a=100;
let b=20;
let c;
c=a+b;
c=a-b;
c=a*b;
c=a/b;
c=a%b;
c=2**3;//2016
c=++a;
c=--b;
console.log(c);
//19)Display the asterisk pattern as shown below(No loop needed):
//*****
//*****
//*****
//*****
//*****
let n = 5; // row or column count // defining an empty string
let string = "";
for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    string += "*";
  }// newline after each row
  string += "\n";
}// printing the string
console.log(string);
//20)Calculate electricity bill?
//For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
// Function to calculate the// electricity bill
function calculateBill(units)
{// Condition to find the charges// bar in which the units consumed // is fall
if (units <= 100)
{
return units * 10;
}
else if (units <= 200)
{
return (100 * 10)+ (units - 100)* 15;
}
else if (units <= 300)
{
return (100 * 10)+ (100 * 15)+ (units - 200) * 20;
}
else if (units > 300)
{
return (100 * 10)+ (100 * 15)+ (100 * 20)+ (units - 300) * 25;
 }
    return 0;
}// Driver Code
var units = 250;
document.write(calculateBill(units));
//21)Program To Calculate CGPA
function CgpaCalc( marks, n){
let grade = Array.from({length: n}, (_, i) => 0);
let cgpa, sum = 0;
for(let i = 0; i < n; i++){
grade[i] = (marks[i] / 10);
}
for(let i = 0; i < n; i++){
    sum += grade[i];   
}
cgpa = sum / n;
return cgpa;
}
let a= 5;
let marks= [ 90, 80, 70, 80, 90 ];
let cgpa = CgpaCalc(marks, a);
document.write(
"CGPA = " + cgpa + "<br/>");
document.write(
"CGPA Percentage = " + (cgpa * 9.5).toFixed(2)); 

//Task 3: Simple Programs todo for Condition , Looping and Arrays
//1)Write a loop that makes seven calls to console.log to output the following triangle:
//#
//##
//###
//####
//#####
//######
//#######
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
//2)2. Iterate through the string array and print it contents
var strArray= ["<option>Jazz</option>",
,"<option>Blues</option>",
,"<option>New Age</option>",
,"<option>Classical</option>",
,"<option>Opera</option>"]
//Arrays:
//var myarray=[11,22,33,44,55]
//write a code to count the elements in the array . Don’t use length property
//Declare an empty array;
var first =  function(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};
//Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
var foods=["Idli","Sambar","Chicken","ChettinadDosa","Vada","Uttapam","BananaBonda","Rasam","Biriyani","Fish Curry","Ice Cream","Chicken Tenders","Soft Drinks","pizza","Oreo Cookies","French Fries"];
result=foods[15];//o/p: french fries
console.log(foods.length);//16
console.log(result);

//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAK chandran'];
friends.shift();
console.log(friends);
friends.unshift('Munnabai');
console.log(friends);
function dataHandling(input){
  for (var i = 0; i < input.length; i++) {
    console.log(friends[i]);
  }
  }
  
  dataHandling(friends);
  //Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica
let frients = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAK chandran'];
friends.pop();
console.log(friends);
friends.pop();
console.log(friends);
friends.pop();
console.log(friends);
function dataHandling(input){
  for (var i = 0; i < input.length; i++) {
    console.log(friends[i]);
  }
  }
  
  dataHandling(friends);
  //Find the person is ur friend or not.
  const friend = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAK chandran'];
  function dataHandling(input,name ){
  for (var i = 0; i < input.length; i++) {
    console.log(friends[i].name);
  }
  }
  
  let found = dataHandling(friends,'Jeff');
   console.log(found);
  
//We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
const arr1 = ['Mari','MaryJane','CaptianAmerica','Munnabai','Jeff','AAK chandran'];
const arr2 = ['Gabbar','Rajinikanth','Mass','Spiderman','Jeff','ET'];
const mergeSortedArrays = (arr1 = [], arr2 = []) => {
  const res = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
     if(arr1[i] < arr2[j]){
        res.push(arr1[i]);
        i++;
     }else{
        res.push(arr2[j]);
        j++;
     }
  };
  while(i < arr1.length){
     res.push(arr1[i]);
     i++;
  };
  while(j < arr2.length){
     res.push(arr2[j]);
     j++;
  };
  return res;
};
console.log(mergeSortedArrays(arr1, arr2));
  //1)Get the first item, the middle item and the last item of the array
const array = ['a', 'b', 'c', 'd'];
const first = arr[0];
console.log(first); // 👉️ a
const last = arr[arr.length - 1];
console.log(last);
//Add your name to the end of the friends array, and add another name to beginning.
const name = ['mani', 'Sam', 'Ram'];
const arrLength = arr.unshift('mass', 'vijay');
console.log(arrLength); // 5 
console.log(arr);
//3)Add Mr or Ms to the names in the friends array.
var Mr=["Mani"];
var Ms=["Malar"]
var result= Mr+Ms
console.log(result);
//
//4)Concat all the names the friends array and return as comma “,” seperated string.
const arrayToJoin=["vijay","mass"];
console.log(arrayToJoin(","))
//5. Find the friends names who has letter ‘a’ and return the list.
let people = [
  {name: "aaron",age: 65},
  {name: "beth",age: 2},
  {name: "cara",age: 13},
  {name: "daniel",age: 3},
  {name: "ella",age: 25},
  {name: "fin",age: 1},
  {name: "george",age: 43},
]

let toddlers = people.filter(person => person.name <= 3)

console.log(toddlers)
//6. Find the avg length of all the friends names. Get the individual length of the names and do the avg
arr = ['Mani','Mass','Naveen','Ravi'];        // works with numbers too
avg = arr.join('').length / arr.length      // 10 / 4 = 2.5
console.log(avg)
//7. Find the names and return the list starting with letter M.
var message = (function () {
  var name = "Manikandan";
  console.log('I m executed');
  return name;
})();
//8. Find the name with max characters and return the name.
function longest_str_in_array(arra)
  {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(longest_str_in_array(["ab", "a", "abcd"]));
console.log(longest_str_in_array(["ab", "ab", "ab"]));
//9. Find the name with min characters and return the name
var testString1 = 'this is long enough';
alert(testString1.length >= 3); // true
var testString2 = 'no';
alert(testString2.length >= 3); // false
//Find the average in the array below.
//Make sure you add only the numbers and do avg.
arry = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];

function calculateAverage(array) {
    var total = 0;
    var count = 0;
 array.forEach(function(item, index) {
        total += item;
        count++;
    });
 return total / count;
}
console.log(calculateAverage(arry));
//Write out an object literal to represent the data below.
//Guvi, Geek, 6, IIT-M RP,Chennai.
//var id = [1, 2, 3, 4];
 var message = ["Guvi", "Geek",6, "IIT-M", "Chennai"];
 console.log(text[0]);
 console.log(text[1]);
//How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
const objectName={Guvi: Geek, 6: IIT-M ,Chennai:Amazon, Inc: 31, SP : Chennai,Google: Alphabet, 34 :Amphitheater, MountainViewTesla, Inc , 32: 333 ,Santana :San };




