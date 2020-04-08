console.log("test")
//console.log("Hello");
//console.log("Hello");
//alert('yooo');
//Variable
var b = 'smoothie';
console.log(b);
var someNumber = 45;
console.log(someNumber);

//document.getElementById('someText').innerHTML = 'Hello World';

//var age = prompt('What is your age?');
//document.getElementById('someText').innerHTML = age;

// Number in JavaScript
var num1 = 5.7;
//Increment num1 by 1
num1++; 

//Decrement num1 by 1
num1--;
console.log(num1);

//Divide, multiply * ,remainder%
console.log(num1 / 6);

// Increment/decrement by any number you want
num1 +=10;
console.log(num1);

/*Function
1.Create a function
2.Call the function
*/
//Create 
function fun(){
    alert('this is a function');
}
//Call
//fun();

/* Let's create a function that take in name 
and says hello followed by your name 

for example

Name:"Qazi"
Return:"Hello Qazi"
*/
//var name = prompt('what is you name? ');

function greeting(yourName){
    //var name = prompt('what is you name?');
    //var result = 'Hello ' + name; //String Concatenation
    var result = 'Hello ' + yourName;
    console.log(result)
}
//greeting(name);


//How do arguments work in function?
//How do we add 2 number togther in a function
function sumNumber(num1,num2){
    var result = num1+ num2;
    console.log(result);
}
sumNumber(10,10);//20
sumNumber('Hello ','Test')//Hello Test
sumNumber('10',10)//1010

//While loops
/*var num = 0;
while (num < 100){
    num +=1;
    console.log(num);
}
*/

// for loops
/*
for(let num = 0; num <100; num++){
    console.log(num)
}
*/

//Data type
let yourAge = 18;//Number
let yourName = 'Bob';//String
let name = {first:'Jane',last:'Doe'};//Objeact
let truth = false;//boolean
let groceries = ['apple','banana','orange'];//array
let random;//undefind
let nothing = null;//value null

//String in JavaScript (common methods)
let fruit = 'banana,apple,orange,blackberry';
let moreFruit = 'banana\napple';
console.log(moreFruit);

console.log(fruit.length);
console.log(fruit.indexOf('a'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split(''));  // split by characters

//Array
let fruits = ['banana','apple','orange','pineapples'];
//let fruits = new Array('banana','apple','orange','pineapples');
//alert(fruits[1]);

fruits[0] = 'pear';
console.log(fruits);
for(let i = 0 ; i<fruits.length ; i++){
    console.log(fruits[i])
}

//array common methods
console.log('to String ',fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits,fruits.pop(),fruits); // remove last itme
console.log(fruits,fruits.push('blackberries'),fruits); // appends 
console.log(fruits[4])
fruit[4] = 'new fruit' // some as push
console.log(fruits)
fruits.shift(); // remove first element from a list 
console.log(fruits);
fruits.unshift('kiwi'); // add first element to an array
console.log(fruits)

let vagetables = ['asparagus','tomato','brocoli'];
let allGroceries = fruits.concat(vagetables); //combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5,10,12,20,59,102];
console.log(someNumbers.sort(function(a,b){return a-b})); //sorted in ascending order
console.log(someNumbers.sort(function(a,b){return b-a})); //sorted in dascending order

let emtryArray = new Array();
for(let num = 0 ;num < 10 ; num++){
    emtryArray.push(num);
}
console.log(emtryArray)

// Object in JavaScript
// dictionaries in Python

let student = {
    first:'Rafeh',
    last:'Qazi',
    age:25,
    height:170,
    studentInfo : function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

// console.log(student.first);
// console.log(student.last);
// student.first = 'notRafeh'; // change value
// console.log(student["first"]);
student.age++;
console.log(student.age)
console.log(student.studentInfo())


// Conditionals , Control flows (if else)
// 18 - 35 is my target demographic
// && AND
// || OR
var age = 45;
if((age >= 18) && (age <= 35)){
    status = 'target demo';
    console.log(status);
}else{
    status = 'not my audience';
    console.log(status);
}

// Swith statements
// differentiate between weekday vs. weekend
// day 0 --> Sunday --> weekend
// day 1 --> Monday --> weekday
// day 2 --> Tuesday --> weekday
// day 3 --> Wednesday --> weekday
// day 4 --> Thursday  --> weekday
// day 5 --> Friday  --> weekend
// day 6 --> Saturday --> weekend
switch(2){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}

console.log(text)
