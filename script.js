// 01. inputs and outputs -  using prompt, alert, console.log 

var first = prompt("What's your first name?");
var last = prompt("What's your last name?");
var age = prompt("What's your age?");
alert("Hello " + first + " " + last + "!");
console.log("You have " + age + " years old? Amazing!");


/* 02. 					COMPARISSON OPERATORS
					   Assuming x = 5

Operator	| Name  					| Example   | Result
=============================================================
 >			| Greater than				| x > 10	| false
 >=			| Greater than or equal to	| x >= 5	| true
 <			| Less than					| x < -50	| false
 <=			| Less than or equal to		| x <= 100	| true
 ==			| Equal to					| x == "5"	| true
 !=			| Not equal to				| x != "b"	| true
 ===		| Equal value and type		| x === "5"	| false
 !==		| Not equal value and type	| x !== "5"	| true

 */

// 03. null != undefined
var x = 99;

x == "99" // true
x === "99" // false

var y = null;

y == undefined //true
y === undefined //false



// 04 - INTERESTING CASES

true == "1" //true
0 == false //true
null == undefined //true
NaN == NaN   //false


// 05 - some functions

function isEven(x) {
	if (x % 2 === 0){
		return true;
	}
	else {
		return false;
	}
}

function factorial(x) {
	var res = x;
	for (var i = x - 1; i >= 1; i--){
		res *= i;
	}
	return res;	
}

function kebabToSnakes(str) {
	// replaces "-"s with "_"s

	// one possible solution
	//return str.split("-").join("_");

	// using regEX
	return str.replace(/-/g , "_");
}


// 06 - USING SET INTERVAL

/* setInterval returns a number and we need to use that number to stop it

Example: 

	setInterval(function, interval)
	clearInterval(number);
	*/
	function sing(){

		console.log("They told him don't you ever come around here");
		console.log("Don't wanna see your face, you better disappear");
		console.log("The fire's in their eyes and their words are really clear");
		console.log("So beat it, just beat it.");

		console.log("You better run, you better do what you can");
		console.log("Don't wanna see no blood, don't be a macho man");
		console.log("You wanna be tough, better do what you can");
		console.log("So beat it, but you wanna be bad");

		console.log("Just beat it, beat it, beat it, beat it");
		console.log("No one wants to be defeated");
		console.log("Showin' how funky and strong is your fight");
		console.log("It doesn't matter who's wrong or right");
		console.log("Just beat it, beat it");
		console.log("Just beat it, beat it");
		console.log("Just beat it, beat it");
		console.log("Just beat it, beat it");

	}


	var number = setInterval(sing, 1000);

//to stop it,  you need to call clearInterval()
clearInterval(number);


/* 07 - ARRAYS*/

var friends = ["Antonio", "Wade", "Juan", "Ilya"];

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);

// editing
friends[1] = "Peter Wade";

//adding item
friends[4] = "Lizzie";

// define empty arrays

var friends = [];
var friends = new Array(); // uncommon

// arrays can hold any type of data
var manyTypes = [1, "text", true, null];

// arrays have a length property
var nums = [1, 2, 3, 4];
console.log(nums.length); //4 

/* 08 - ARRAYS METHODS: PUSH, POP, SHIFT, UNSHIFT, INDEXOF AND SLICE */

// PUSH - this method add element to the end of array and RETURN ITS SIZE.
var colorArray = ["red", "green", "blue", "blue"];
colorArray.push("Orange");  // ["red", "green", "blue", "Orange"];

// POP - this method is the opposite and removes the last  element of the array. RETURNS THE REMOVED ELEMENT
colorArray.pop();  // ["red", "green", "blue"];

// UNSHIFT - add an element to the front of an array
colorArray.unshift("first"); // returns size of array

// SHIFT - removes the first element of an array
colorArray.shift(); // returns removed item

// INDEXOF - find the index of an item in an array and returns the first found index.
colorArray.indexOf("blue"); // returns 2
colorArray.indexOf("pink"); // returns -1

// SLICE - used to copy full arrays or some parts of it.
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use slice to copy the 2nd and 3d fruits
//specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1, 3); // 3rd element is NOT INCLUSIVE
//this does not alter the original fruits array
//citrus contains ['Orange','Lemon']
//fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//you can also use slice() to copy an entire array
var nums = [1,2,3];
var otherNums = nums.slice();
//both arrays are [1,2,3]

// SPLICE
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

//add an element
myFish.splice(2, 0, 'drum'); 
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

//remove an element
myFish.splice(2, 1); 
// myFish is ["angel", "clown", "mandarin", "sturgeon"]

myFish.splice(2); 
// myFish is ["mandarin", "sturgeon"]


// FOREACH - USED FOR ARRAY ITERATIONS
var colors = ["red", "orange","yellow", "green"];

colors.forEach(function(color, index){
//color is a placeholder, call it whatever you want
console.log(color);
});

// 09 - JAVASCRIPT OBJECTS

var person = {
	name: "Jorge",
	age: 36,
	city: "Berlin"
};

// 10 - DOM

// acessing document for debugging
console.dir(document);

// select h1
var h1 = document.querySelector("h1");
// manipulating h1
h1.style.color = "pink";


var body = document.querySelector("body");
var isBlue = false;
setInterval(function(){
	if(isBlue){
		body.style.background = "white";
	}
	else {
		body.style.background = "#3498db";
	}
	isBlue = !isBlue;
}, 500);


// SOME DOCUMENT PROPERTIES

document.URL;
document.head;
document.body;
document.links;


// 5 MAIN DOCUMENT METHODS

/*
document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelector();
document.querySelectorAll();
*/

var tag = document.getElementById("highlight");
console.log(tag);

var tags = document.getElementsByClassName("bolded");
console.log(tags[0]);

var tags = document.getElementsByTagName("li");
console.log(tags[0]);

//select by id
var tag = document.querySelector("#highlight");
//select by Class
var tag = document.querySelector(".bolded");
//select by tag
var tag = document.querySelector("h1");

//select a list of elements by tag
var tags = document.querySelectorAll("h1");

// MANIPULATING STYLE

//SELECT
var tag = document.getElementById("highlight");
//MANIPULATE
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";


//Rather than directly manipulating style with JS, we can define a CSS class and then toggle it on or off with JS
//INSTEAD OF THIS:
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";
/*DEFINE A CLASS IN CSS
.some-class {
  color: blue;
  border: 10px solid red;
}
*/
var tag = document.getElementById("highlight");
//ADD THE NEW CLASS TO THE SELECTED ELEMENT
tag.classList.add("some-class");



/* textContent VS innerHTML 

textContent extracts only the text and innerHTML keeps all the html elements, like <strong> etc.

*/

//Select the <p> tag:
var tag = document.querySelector("p");
//Retrieve the textContent:
tag.textContent; //"This is an awesome paragraph"

//Select the <p> tag:
var tag = document.querySelector("p");

tag.innerHTML;
//"This is an <strong>awesome</strong> paragraph"


// USING GETATTRIBUTE AND SETATTRIBUTE

var link = document.querySelector("a");
link.getAttribute("href");  //"www.google.com"
//CHANGE HREF ATTRIBUTE
link.setAttribute("href","https://www.linuxmint.com/"); 
///<a href="www.dogs.com">I am a link</a>

//TO CHANGE THE IMAGE SRC
var img = document.querySelector("img");
img.setAttribute("src", "mint.jpg");
//<img src="corgi.png">

/* ADD EVENT LISTENER
We select an element and then add an event listener */
var button = document.querySelector("button");
var paragraph = document.getElementsByTagName("p");

//SETUP CLICK LISTENER
button.addEventListener("click", function() {
  paragraph[1].textContent = "Someone Clicked the Button!";
});