// console.log(`Welocme to js world`);
// console.log("Welocme to js world");
// console.log('Welocme to js world');

// window.alert("Hai hello students");

// window.alert("I like food")

// document.getElementById("myH1").textContent = "Hello Students";

// document.getElementById("myP").textContent = "I like food";

// let var const

// let x;
// let y;

// x = 20;
// y = 30;

// Pascal -  Project, Class, Constructors
// Every word 1st letter must be capital
// Scientific_Calculator

// Camel - Methods, object, variables
// Except word reaminnning words 1st letter must bi in capital and 1st word 1st letter must be in small

// student_Register_Number = 3543333;

// findLargestNumber() {

// }

// let x = 20;
// let y = 21;

// console.log(x, y);

// let age = 25;
// let price = 10.45;
// let gpa = 2.1;

// let firstName = "Aslam";

// console.log(typeof age);
// console.log(typeof firstName);

// console.log(`my age is ${age}`);
// console.log(`the price is ${price}`);
// console.log(`You gps is ${gpa}`);
// console.log(`Your 1sy name is ${firstName}`);

// let online = false;
// let forSale = true;

// console.log(`Student is ${online}`);
// console.log(`Is this bike is for sale ${forSale}`);

// let fullName = "student";
// document.getElementById("myH1").textContent = fullName;

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 1;
// students = students / 1;
// students = students % 1;

// agumaneted assigment opertor
// students = students + 1; students += 1 ;
// students = students + 1; students -= 1 ;
// students = students + 1; students /= 1 ;
// students = students + 1; students %= 1 ;

// students++;
// students--;

// ++students;
// --students;

// a = ++students;
// console.log(a);
// console.log(students);

// let result = 1 + 2 * 3 + 4 ** 2;
//            1  +   6   +  16 = 23
// 12 % 5 + 8 / 2;
// console.log(result);

// How to accept usert input

// window prompt
// let username = window.prompt("Wht is your username");
// console.log(username);

// let username;

// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     console.log(username);

//      document.getElementById("myH1").textContent = `hello ${username}`;

// }

// let age = window.prompt("How old are you");
// age = Number(age);

// let x = "idly";
// let y = "idly";
// let z = "idly";
// let x = "";
// let y = "";
// let z = "";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const pi = 3.14159;

// let radius;
// let cicircumference;

// radius = window.prompt(`Enter the raduis of a circle`);

// radius = Number(radius);

// cicircumference = 2 * pi * radius;

// console.log(cicircumference);

// let x = 9;
// let y = 2;
// let z = 10;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x)
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);
// console.log(min);

// let age = 13;

// if(age >= 18) {
//     console.log("you are old enough to vote");
// } else {
//     console.log("You must be 18 or 18+ to vote");
// }

// let isStudent = true;

// if(isStudent) {
//     console.log("You are student");
// } else {
//     console.log("You are not student");
// }

// let age = 18;
// let hasLisense = true;

// if(age >= 18) {
//     console.log("you are old eneough to drive");
//     if(hasLisense) {
//         console.log("you have your lisence");
//     } else {
//         console.log("You do not have your linsence yet");
//     }
// } else {
//     console.log("you must be 18 or 18+ to have a lisence");
// }

// let mark = 988;

// if (mark <= 20) {
//     console.log("Your grade is D, you are fail you need to improve");
// } else if(mark >= 20 && mark < 30) {
//     console.log("Your grade is C, you are     fail you need to improve");
// } else if(mark >= 30 && mark < 70) {
//     console.log("Your grade is B");
// } else if(mark >= 70 && mark <= 100) {
//     console.log("You grade is A");
// } else {
//     console.log("invaild mark");
// }

// const myCheckbox = document.getElementById("myCheckbox");
// const visaCardBtn = document.getElementById("visaBtn");
// const rupayCardBtn = document.getElementById("rupayBtn");
// const masterCardBtn = document.getElementById("masterBtn");
// const mySubmit = document.getElementById("mySubmit");

// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function() {
//     if(myCheckbox.checked) {
//        subResult.textContent = `You are subscribed`;
//     } else {
//         subResult.textContent = `You are not subscribed`;
//     }
// }

// let age = 10;

// let message = age >= 18 ? "You can vote" : "You cannot vote";

// console.log(message);

// let time = 2;

// let greeting = time < 12 ? "Good morning" :
// "good afternoon";

// console.log(greeting);

// let purchaseAmount = 50;

// let discount = purchaseAmount >= 100 ? 10 : 0;

// console.log(`Your total is ${purchaseAmount - purchaseAmount * (discount/100)}`);

// if(age >= 18) {

// } else {

// }

// let day = 67;

// switch (day) {
//     case 1:
//         console.log("Today is monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wed");
//         break;
//     case 4:
//         console.log("Today is Thur");
//         break;
//     case 5:
//         console.log("Today is Fri");
//         break;
//     case 6:
//         console.log("Today is sat");
//         break;
//     case 7:
//         console.log("Today is sun");
//         break;

//     default:
//         console.log("It is invalid");
//         break;
// }

// let testScore = 56789;

// let letterGrade;

// switch (true) {
//     case testScore <= 10 && testScore >= 30:
//         letterGrade = "A";
//         break;
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     default:
//         console.log("It is invalid");
//         break;
// }

// console.log(letterGrade);

//              012345  // length = 5 and 0 to n-1
// let username = "ganesh$kumar";

// console.log(username.charAt(2));
// console.log(username.indexOf("a"));
// console.log(username.lastIndexOf("a"));
// console.log(username.length);
// username = username.trim();
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// username = username.repeat(7);
// let result = username.startsWith(" ");
// let result = username.endsWith(" ");
// let result = username.includes("$");
// let phoneNum = "91-25525-37373";
// phoneNum = phoneNum.replaceAll("-", "/");
// phoneNum = phoneNum.padStart(20, "0");
// phoneNum = phoneNum.padEnd(20, "0");

// console.log(phoneNum);

// const fullName = "ganesh45678 kumarhjkl";

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0, 6);
// let lastName = fullName.slice(7);

// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-1);

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

// ganeshkumar@gmail.com

// username = ganeshkumar
// address name = gmail

// without method chaining

// let username = window.prompt("Enter the username: ");

// username = username.trim();

// let letter = username.charAt(0);

// letter = letter.toUpperCase();

// let extraChars = username.slice(1);

// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;

// console.log(username);

// with method chaining

// let username = window.prompt("Enter the username: ");

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

// const temp = 10;

// if(temp <= 0 || temp > 30) {
//    console.log("Weather is bad");
// } else {
//      console.log("Weather is good");
// }

// const isSunny = false;

// if(!isSunny) {
//     console.log("It is heat outside");
// } else {
//     console.log("It is cloudy outside");
// }

// const PI = 3.14;

// if(PI === 3.14) {
//     console.log("This is PI");
// } else {
//     console.log("Not PI");
// }

// let username = "";

// while(username === "" || username === null) {
//     username = window.prompt("Enter your name ");
// }
// console.log(`hello ${username}`);

// let num = 10;

// while (num >= 1) {
//     console.log();
//     num--;
// }

//    1           2      4
// for(let i = 1; i <= 10; i++) {

//     // 3
//       if(i == 7) {
//         // break;
//         continue;
//       } else {
//         console.log(i);
//       }
// }

// function happyBirthday(username, age) {
//    console.log("Happy birthday to you");
//    console.log("Happy birthday to you");
//    console.log(`Happy birthday ${username} you`);
//    console.log(`you are ${age} years old`);
// }

// happyBirthday("aslam", 27);
// happyBirthday("ganesh", 26);
// happyBirthday("siva", 22);

// function add(x, y) {
//    return x + y;
// }

// function isEven(number) {
//     // if(number % 2 === 0) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     return number % 2 === 0 ? true : false;
// }

// function isValidEmail(email) {

//   if(email.includes("@")) {
//     return true;
//   } else {
//     return false;
//   }

//    return email.includes("@") ? true : false;

// }

// console.log( add(2, 2));
// console.log( isEven(2));
// console.log(isValidEmail("dharshni@gmail.com"));
// console.log(isValidEmail("dharshnimail.com"));

// let z = 9;

// let x = 3;

// function func1() {
//     // let x = 1;
//     console.log(x);
//     // console.log(z);
// }
// function func2() {
//     // let x = 2;
//     console.log(x);
//     // console.log(z);
// }

// func1();
// func2();

//             0          1          2       length = 4, 0 to 3
// let fruits = ["apple", "orange", "banana", "mango"];

// for(let i = fruits.length - 1; i >= 0; i--) {
//    console.log(fruits[i]);
// }

// fruits.sort().reverse();

// for(let fruit of fruits) {
//     console.log(fruit);
// }

// fruits[2] = "pineapple";

// fruits.push("pineapple");
// fruits.pop("pineapple");
// fruits.unshift("pineapple");
// fruits.shift();

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("apple");

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(numOfFruits);

// console.log(index);

// let numbers = [1, 2, 3, 4, 5];

// let maximum = Math.max(...numbers);

// console.log(numbers);

// console.log(maximum);

// let username = "ganesh kumar";

// console.log(username);

// letters = [...username].join("-")

// console.log(letters);

// let fruits = ["apple", "orange", "banana", "mango"];

// different data structure but idenetical values - shallow copy

// let veggies = ["carrots", "potatos", "onion"];

// let foods = [...fruits, ...veggies, "eggs", "milks"];

// console.log(foods);

// function openFridge(...foods) {
//    console.log(...foods);
// }
// const food1 = "tomato rice";
// const food2 = "veg rice";
// const food3 = "egg rice";
// const food4 = "veg briyani";
// const food5 = "non veg briyani";

// openFridge(food1, food2, food3, food4, food5);

// function sum(...numbers) {
//     let result = 0;
//     for(let number of numbers) {
//         result += number;
//     }

//     return result;
// }

// const total = sum(2,34,5,566,43,22,3,44,44);

// console.log(`the total is ${total}`);

// function getAverage(...numbers) {
//       let result = 0;
//       for(let number of numbers) {
//          result += number;
//       }

//      return result / numbers.length;
// }

// const total = getAverage(75, 78, 90, 99);
// console.log(`the total is ${total}`);

// function combineStrings(...strings) {
//      return strings.join(" ")
// }

// const fullName = combineStrings("Mr", "Ganesh", "Kumar", "101");

// console.log(`the fullname with emp id ${fullName}`);

// helloStudents(waitStudents);

// function helloStudents(callback) {
//     console.log("Hello Students");
//     callback();
// }

// function leaveStudents() {
//     console.log("Students leave the class");
// }

// function waitStudents() {
//      console.log("Students wait");
// }

// function goodbyeStudents() {
//     console.log("Goodbye!! Students");
// }

//
// sum(displayInWebPage, 2, 3);

// // 1st it be call
// function sum(callback, x, y) {
//    let result = x + y;
//    callback(result);
// }

// function displayResultToMyConsole(result) {
//     console.log(result);
// }

// function displayInWebPage(result) {
//        document.getElementById("myH1").textContent = `the result is ${result}`;
// }

//            0    1  2 3  4
// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(double);
// numbers.forEach(cube);
// numbers.forEach(double);
// numbers.forEach(triple);
// numbers.forEach(display);

// function double(element, index, array) {
//      array[index] = element * 2;
// }

// function triple(element, index, array) {
//      array[index] = element * 3;
// }

// function square(element, index, array) {
//     array[index] = Math.pow(element, 2)
// }
// function cube(element, index, array) {
//     array[index] = Math.pow(element, 3)
// }

// function display(element) {
//      console.log(element);
// }
// let fruits = ["apple", "orange", "banana", "mango"];

// fruits.forEach(captialize);

// function upperCase(element, index, array) {
//      array[index] = element.toUpperCase();
// }
// function lowerCase(element, index, array) {
//      array[index] = element.toLowerCase();
// }

// function captialize(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1)
// }

// fruits.forEach(display);

// function display(element) {
//     console.log(element);
// }

//    0  1  2 3  4
// let numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);

// console.log(squares);

// function square(element) {
//     return Math.pow(element, 2);
// }

// do it for cube? below

// const students = ["ganesh", "aslam", "john"];

// const studentsUpper = students.map(upperCase);

// console.log(studentsUpper);

// function upperCase(element) {
//      return element.toUpperCase();
// }

// const dates = ["2026-04-16", "2026-04-6", "2026-05-16"]

// const formatedDates = dates.map(formatDates);

// console.log(formatedDates);

// function formatDates(element) {
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }

// let numbers = [1, 2, 3, 4, 5];

// let evenNumbers = numbers.filter(isEven);

// console.log(evenNumbers);

// function isEven(element) {
//     return element % 2 === 0;
// }

// const ages = [27, 25, 28, 30, 22, 60, 18, 13, 10, 12];

// const adults = ages.filter(isAdult);

// console.log(adults);

// function isAdult(element) {
//     return element >= 18;
// }

// filter the childerns

// const words = ["apple", "orange", "banana", "pineapple", "pomegrante"];

// const shortWords = words.filter(getShortWords);

// console.log(shortWords);

// function getShortWords(element) {
//     return element.length <= 6;
// }

// find out for longwords using filter method

// const prices = [100, 200, 300, 150, 170];
// const prices = [100, 200, 300, 150, 170];

// const total = prices.reduce(sum);

// console.log(`my total is ₹${total}`);

// //             750         170
// function sum(previousEle, nextEle) {
//     return accumlator + elemen;
// }

// const maximum = prices.reduce(getMax);

// console.log(maximum);

// function getMax(accum, ele) {
//     return Math.max(accum, ele);
// }

// function helloStudents() {
//     console.log("Hello students");
// }

// setTimeout(function() {
//     console.log("Hello students");
// }, 3000);

// let numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(function(element) {
//     return Math.pow(element, 2);
// });

// const evenNums = numbers.filter(function(element) {
//     return element % 2 === 0;
// })

// console.log(evenNums);

//  const total = numbers.reduce(function(accm, ele) {
//     return accm + ele;
//  })

// console.log(total);

// function square(element) {
//     return Math.pow(element, 2);
// }

// function helloStudents() {
//     console.log("Hello students");
// }

// const helloStudents = function() {
//     console.log("Hello students");
// }

// const hello = (name, age) => {console.log(`Hello ${name}`);
//                              console.log(`your age is ${age} years old`); }

// hello("ganesh", 15);

// setTimeout(() => console.log("Hello students"), 3000);

// let numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((element) => Math.pow(element, 2));

// console.log(squares);

// const person1 = {

//     // firstName: "Ganesh",
//     // lastname: "kumar",
//     // age: 27,
//     // isEmployee: true,

//     // sayHelloo: () =>  {console.log("Hai iam ganesh kumar")},
//     // eat: () => {console.log("I am eating sambar rice")}

//     name: "Ganesh",
//     favFood: "sambar rice",
//    sayHelloo: function(){console.log(`Hi i am ${this.name}`)},
//    eat: function() {console.log(`I am eating ${this.favFood}`)}

// }
// const person2 = {

//     // firstName: "Ganesh",
//     // lastname: "kumar",
//     // age: 27,
//     // isEmployee: true,

//     // sayHelloo: () =>  {console.log("Hai iam ganesh kumar")},
//     // eat: () => {console.log("I am eating sambar rice")}

//     name: "aslam",
//     favFood: "tomwato rice",
//    sayHelloo: function(){console.log(`Hi i am ${this.name}`)},
//    eat: function() {console.log(`I am eating ${this.favFood}`)}

// }
// const person2 = {

//     firstName: "Mohamed",
//     lastname: "aslam",
//     age: 22,
//     isEmployee: false,

//       sayHelloo: () =>  {console.log("Hai iam aslam")},
//       eat: () => {console.log("I am eating tomato rice")}

// }

// console.log(this);
// person1.sayHelloo();
// person1.eat();
// person2.sayHelloo();
// person2.eat();
// console.log(person1.lastname);
// console.log(person1.isEmployee);
// console.log(person1.age);

// console.log(person2.firstName);
// console.log(person2.lastname);
// console.log(person2.isEmployee);
// console.log(person2.age);
// person1.sayHelloo();
// person1.eat();

// person2.sayHelloo();
// person2.eat();

// function Car(make, year, color, model) {

//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){console.log(`you drive ${this.model}`)}

// }

// const car1 = new Car("tata", "2024", " red", "altroz");
// const car2 = new Car("maruthi", "2026", "black", "swift");
// const car3 = new Car("tata", "2026", "white", "safari");
// const car4 = new Car("bmw", "2026", "purple", "gt");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.color);
// console.log(car1.year);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);

// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.color);
// console.log(car3.year);

// console.log(car4.make);
// console.log(car4.model);
// console.log(car4.color);
// console.log(car4.year);

// car1.drive();
// car2.drive();

// class Product {

//     constructor(name, price) {
//       this.name = name;
//       this.price = price;
//     }

//     displayProduct = function() {
//         console.log(`Product: ${this.name}`);
//         console.log(`price ${this.price.toFixed(2)}`);
//     }

//     calculateTotal = function(salexTax) {
//         return this.price + (this.price * salesTax)
//     }

// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 300.34);
// const product2 = new Product("Pant", 500.34);
// const product3 = new Product("tshirt", 150.34);

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

// const total = product3.calculateTotal(salesTax);

// console.log(`Total price with tax ${total.toFixed(2)}`);

// class MathUtil {
//     static PI = 3.14159;

//     static getDiameter(radius) {
//         return radius * 2;
//     }

//     static circumference(radius) {
//         return 2 * this.PI * radius;
//     }

//     static getArea(radius) {
//         return this.PI * radius * radius;
//     }

// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.circumference(10));
// console.log(MathUtil.getArea(10));

// class User {
//     static userCount = 0;

//     constructor(username) {
//         this.username = username;
//         User.userCount++;
//     }

//     sayHello() {
//         console.log(`Hello, my username is ${this.username}`);
//     }

//     static getUserCount() {
//         console.log(`There are ${User.userCount} users online`);
//     }

// }

// const user1 = new User("Gokul");
// const user2 = new User("Ganesh");
// const user3 = new User("aslam");
// const user4 = new User("john");

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// User.getUserCount();

// console.log(user1.username);
// console.log(User.userCount);

// class Animal {
//     alive = true;

//     eat() {
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep() {
//          console.log(`This ${this.name} is sleeping`);
//     }

// }

// class Cheetah extends Animal {
//     name = "cheetah";
//     run() {
//         console.log(`this ${this.name} is running`);
//     }

// }

// class Shark extends Animal {
//     name = "shark";
//      swim() {
//         console.log(`this ${this.name} is swimming`);
//     }
// }

// class Eagle extends Animal {
//     name = "eagle";
//      fly() {
//         console.log(`this ${this.name} is flying`);
//     }
// }

// const cheetah = new Cheetah();
// const shark = new Shark();
// const eagle = new Eagle();

// console.log(cheetah.alive);
// cheetah.eat();
// cheetah.sleep();
// cheetah.run();
// cheetah.fly();
// shark.swim();

// class Animal {
//     constructor(name, age) {
//            this.name = name;
//          this.age = age;
//     }

//     move(speed) {
//         console.log(`the ${this.name} at speed of ${speed}mph`);
//     }

// }

// class Cheetah extends Animal {
//    constructor(name, age, runSpeed) {
//          super(name, age);
//          this.runSpeed = runSpeed;
//     }

//     run(){
//         console.log(`This ${this.name} can run `);
//         super.move(this.runSpeed);
//     }

// }

// class Shark extends Animal {

//     constructor(name, age, swimSpeed) {
//          super(name, age);
//          this.swimSpeed = swimSpeed;
//     }
//      swim() {
//         console.log(`This ${this.name} can swim `);
//           super.move(this.swimSpeed);
//     }

// }

// class Eagle extends Animal {
//     constructor(name, age, flySpeed) {
//          super(name, age);
//          this.flySpeed = flySpeed;
//     }
//      fly() {
//         console.log(`This ${this.name} can fly`);
//           super.move(this.flySpeed);
//     }

// }

// const cheetah = new Cheetah("indian cheetah", 3, 30);
// const shark = new Shark("indian blue shade shark", 2, 15);
// const eagle = new Eagle("indian flyer", 4, 35);

// cheetah.run();

// class Rectangle {

//    constructor(width, height) {
//        this.width = width;
//        this.height = height;
//    }

//     set width(newWidth) {
//         if(newWidth > 0) {
//             this._width = newWidth;
//         } else {
//             console.error("Width must be +ve number");

//         }
//     }
//     set height(newHeight) {
//         if(newHeight > 0) {
//             this._height = newHeight;
//         } else {
//             console.error("Height must be +ve number");

//         }
//     }

//     get width() {
//         return `${this._width.toFixed(1)} cm`;
//     }

//     get height() {
//         return this._height.toFixed(1);
//     }

//     get area() {
//         return (this.width * this._height).toFixed(1);
//     }

// }

// const reactangle = new Rectangle(3, 4);

// // reactangle.width = -4519999;
// // reactangle.height = "ertyuio";

// console.log(reactangle.width);
// console.log(reactangle.height);
// console.log(reactangle.area);

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(newFirstName) {
//         if(typeof newFirstName === "string" && newFirstName.length > 0) {
//             this._firstName = newFirstName;
//         } else {
//             console.error("First name must be a non empty string");

//         }
//     }
//     set lastName(newLastName) {
//         if(typeof newLastName === "string" && newLastName.length > 0) {
//             this._lastName = newLastName;
//         } else {
//             console.error("Last name must be a non empty string");

//         }
//     }
//     set age(newAge) {
//         if(typeof newAge === "number" && newAge >= 0) {
//             this._age = newAge;
//         } else {
//             console.error("age must be a non -ve number");

//         }
//     }

//     get firstName() {
//         return this._firstName;
//     }
//     get lastName() {
//         return this._lastName;
//     }

//      get fullName() {
//         return this._firstName + " " + this._lastName;
//      }

//      get age() {
//         return this._age;
//      }

// }

// const person = new Person("Ganesh", "Kumar", 26);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.age);

// 1) swap the value of two variables

// let a = 1;
// let b = 2;

// console.log(a, b);

// [a, b] = [b, a];

// console.log(a, b);

// swap 2 elements in an array

// const bikes = ["activa 5g", "tvs jupiter", "ktm 200", "ns200"];

// console.log(bikes);

// [bikes[0], bikes[3]] = [bikes[3], bikes[0]];

// console.log(bikes);

// assign array elements to varaible using destructuring

// const bikes = ["activa 5g", "tvs jupiter", "ktm 200", "ns200"];

// const [firstBike, secondBike, ...extraBikes] = bikes;

// console.log(firstBike, secondBike, extraBikes);

// Extract values from object

// const employee1 = {
//     firstName: "Ganesh",
//     lastName: "kumar",
//     age: 27,
//     job: "chef",
// }
// const employee2 = {
//     firstName: "Ganesh",
//     lastName: "kumar",
//     age: 27,

// }

// const {firstName, lastName, age, job="unepemloyed"} = employee2;

// console.log(firstName, lastName, age, job);

// Destructuring using function paramters

// function displayEmployee({firstName, lastName, age, job="unepmoled"}) {
//      console.log(`name: ${firstName} ${lastName}
//                  age: ${age}
//                  job: ${job}
//         `);

// }

// const employee1 = {
//     firstName: "Ganesh",
//     lastName: "kumar",
//     age: 27,
//     job: "chef",
// }
// const employee2 = {
//     firstName: "Ganesh",
//     lastName: "kumar",
//     age: 27,

// }

// displayEmployee(employee2);

// const employee = {
//     fullName: "Ganesh kumar",
//     age: 27,
//     isEmployee: true,
//     empCode: 101,
//     hobbies:["reading", "fishing", "cooking"],
//     address: {
//         street: "8 gandhi st",
//         city: "chennai",
//         country: "india"

//     }
// }

// console.log(employee.hobbies[2]);
// console.log(employee.fullName);
// console.log(employee.age);
// console.log(employee.empCode);
// console.log(employee.address.country);

// for(const values in employee.address) {
//    console.log(employee.address[values]);
// }

//  class Employee {
//     constructor(name, age, ...address) {
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
//  }

// class Address {
//     constructor(street, city, country) {
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const employee1 = new Employee("ganesh",27, "123 gandhi st", "chennai", "india");
// const employee2 = new Employee("kumar",26, "13 lenein st", "thrichy", "india");

// console.log(employee2.address.country);

// let fruits = ["apple", "orange", "coconut", "pineapple"];
// let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// const people = [{name : "ganesh", age: 22, gpa:2.5},

//                 {name : "aslam", age: 21, gpa:5.5},

//                 {name : "john", age: 20, gpa:6.5}

// ]

// numbers.sort();

// numbers.sort((a,b) => b - a); // a - b will rtuen -ve zero or +ve value depending what vlaue we examine

// people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => a.gpa - b.gpa);
// people.sort((a, b) => a.name - b.name);

// console.log(people);

// Fisher values Alogithm
//             i + 2
// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'K'];

// shuffle(cards);
// console.log(cards);

// function shuffle(array) {

//   for(let i = array.length - 1; i >= 0; i--) {
//     const random = Math.floor(Math.random() * (i + 1));

//     [array[i], array[random]] = [array[random], array[i]];
//   }

// }

// Date(Year, month, day, hour, min, seconds, milliseconds)

// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();
// date.setFullYear(2024);
// date.setMonth(0)
// date.setDate(1);
// date.setHours(2);
// date.setMinutes(3);
// date.setMilliseconds(2)

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);
// console.log(dayOfWeek);

// function outer() {

//     let message = "hello";

//     function inner() {
//       console.log(message);
//     }
//     inner();
// }

// message = "goodbye";

// outer();

// function createCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(`Count incresed to ${count}`);
//   }

//   function getCount() {
//     return count;
//   }
//   return { increment, getCount };
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`the current count ${counter.getCount()}`);

// function sayHello() {
//   window.alert("hello");
// }

// setTimeout(function(){window.alert("Hello")}, 4000);

// const timeoutId = setTimeout(()=>window.alert("Hello"), 4000);

// clearTimeout(timeoutId);

// let timeoutId;

// function startTimer() {
//   timeoutId = setTimeout(() => window.alert("Hello"), 3000)
//   console.log("Started");

// }

// function clearTimer() {
//   clearTimeout(timeoutId);
//   console.log("Cleared");
// }

// import {PI, getCircumference, getArea, getVolume} from './mathUtils.js';

// console.log(PI);

// const circumference = getCircumference(10);

// console.log(`${circumference.toFixed(2)}cm`);

// function func1(callback) {
//   setTimeout(() => {
//     console.log("Task1");

//     callback();
//   }, 3000); // db --> data is coming
// }

// function func2() {
//   console.log("Task2");
//   console.log("Task3");
//   console.log("Task4");
// }

// func1(func2);

// console.lag("Hello");

// console.log("You have reached the end of the code");

// try {

//     const dividend = Number(window.prompt("Enter a dividend"));
//     const divisor = Number(window.prompt("Enter a divisor"));

//     if(divisor == 0) {
//         throw new Error("You cannot divide by 0");
//     } if(isNaN(dividend) || isNaN(divisor)) {
//         throw new Error("Values must be an number");
//     }

// const result = dividend / divisor;

// console.log(result);

// } catch (error) {
//      console.error(error);

// }

// console.log("You have reached the end");

// document.title = "Besant";

// document.body.style.backgroundColor = "black";

// console.dir(document);

// const username = "";

// const welcomeMsg = document.getElementById("welcome");

// welcomeMsg.textContent += username === "" ? `Guest` : username;

// const myHeading = document.getElementById("headin");
// console.log(myHeading);

// myHeading.style.color = "red";
// myHeading.style.textAlign = "center";

// const vegetables = document.getElementsByClassName("veggies");

// for(let veggies of vegetables) {
//     veggies.style.color = "blue";
// }

// console.log(vegetables);

// const h4Elements = document.getElementsByTagName("h4");

// for(let h4Element of h4Elements) {
//     h4Element.style.color = "red";
// }

// console.log(h4Elements);

// const element = document.querySelector("ul");

// console.log(element);

// element.style.color = "red";

// const foods = document.querySelectorAll(".veggies");

// foods.forEach(food => {
//     food.style.color = "red";
// })

// console.log(foods);

const myBox = document.getElementById("myBox");

// function changeColor(event) {
// //    console.log(event);

//    event.target.style.backgroundColor = "green";
//    event.target.textContent = "opps";

// }

// myBox.addEventListener("click", changeColor);
// myBox.addEventListener("click", function changeColor(event) {
//    event.target.style.backgroundColor = "green";
//    event.target.textContent = "opps";

// });

// myBox.addEventListener("mouseover", event => {
//        event.target.style.backgroundColor = "yellow";
//    event.target.textContent = "dont do it";
// })
// myBox.addEventListener("mouseout", event => {
//        event.target.style.backgroundColor = "green";
//    event.target.textContent = "opps";
// })

// function task1(callback) {
//   setTimeout(() => {
//     console.log("task 1 is competed");
//     callback();
//   }, 2000);
// }
// function task2(callback) {
//   setTimeout(() => {
//     console.log("task 2 is competed");
//     callback();
//   }, 1000);
// }
// function task3(callback) {
//   setTimeout(() => {
//     console.log("task 3 is competed");
//     callback();
//   }, 3000);
// }
// function task4(callback) {
//   setTimeout(() => {
//     console.log("task 4 is competed");
//     callback();
//   }, 1500);
// }

// task1();
// task2();
// task3();
// task4();
// console.log("all task are completed");

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 console.log("All task are finsihed");
//             })
//         })
//     })
// })

// 1. walk th dog  4
// 2. Clean the house 10
// 3. Take the trash out 2

// async function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = false;
//       if (dogWalked) {
//         resolve("You walk the dog");
//       } else {
//         reject("You didnt walk the dog");
//       }
//     }, 2000);
//   });
// }
// function cleanTheKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const kitchenCleaned = true;
//       if (kitchenCleaned) {
//         resolve("You cleaned the  kitchen");
//       } else {
//         reject("You didnt clean the kitchen");
//       }
//     }, 3000);
//   });
// }
// function takeOutTheTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const trashTakenOut = true;
//       if (trashTakenOut) {
//         resolve("You take out the trash");
//       } else {
//         reject("You dint take the trash out");
//       }
//     }, 1500);
//   });
// }

// async function dotasks() {
 
//   try{
//        const walkDogResult = await walkDog();
//   console.log(walkDogResult);

//   const cleanKitchenResult = await cleanTheKitchen();
//   console.log(cleanKitchenResult);

//   const trashOutResult = await takeOutTheTrash()
//   console.log(trashOutResult);

//   console.log("You finished all the tasks");
//   } catch(error) {
//      console.error(error);
//   }

// }

// dotasks();

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanTheKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTheTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("You finished all the tasks");
//   })
//   .catch(error => console.error(error));

// walkDog(() => {
//   cleanTheKitchen(() => {
//     takeOutTheTrash(() => {
//       console.log("You have finsihed all the tasks");
//     })
//   })
// })

