// let a = 20;
// let b = 50;

// var firstName;
// var age = 18;
// age = 50;

// let product = "Apple";
// let car;

// const animal = "rabbit";
// const gender = "Male";
// gender = "Female";

// const a = 20;
// a = 5;

// let c = 20;
// var c;
// console.log(c);
// {
//   let c = 5;
//   //   console.log("Hello World");
//   console.log(c);
// }
// var c = 20;
// console.log(c);

// var b = 70;
// console.log(b);
// {
//   ver b = 50;
//   const d = 25;
// }
// console.log(b);
// console.log(d);

// const 1year = 10;
// const _do = 'kl'
// const first name = 'John'

// const firstName = 'Jesica'; // camel case
// const firstname = 'Jesica';
// const first_name = 'Jessie'; // snake case
// const FirstName = 'Jane'; // Pascal case

// let num = NaN;

// let str1 = "Jame";
// let str2 = "John";
// let str3 = `jim`;
// let str4 = "40";
// let num = 40;

// let senten = "I'm a hero";

// let concatStr = str1 + str2;
// console.log(concatStr);
// // num * 2 //80
// let concatBacktick = `${str1}${str2}`;
// let massage = `you've ${num} in your cart`;
// let mess = "you'v " + num + " in your cart";
// console.log(concatBacktick);

// let name = "Alan";
// console.log(typeof name);
// console.log(typeof 20);
// console.log(typeof true);
// console.log(typeof NaN);
// console.log(typeof undefined);
// console.log(typeof null);
// const a = null;
// console.log(typeof null);

// console.log(true + 1);
// console.log(false + 1);
// const boo = true;
// console.log(String(boo));
// console.log(typeof String(boo));
// console.log("" + boo);
// console.log(`${boo}`);

// console.log("2" * 1);
// console.log(Number("20"));
// console.log(+false + true);
// console.log(+null + 5);
// const a = "    Hello    "; // 'Hello' => NaN
// console.log(+a);
// const b = " 7 ";
// console.log(+b);
// const c = " 5 6";
// console.log(+c);
// const e = "   ";
// console.log("+e = ", +e);
// const number = prompt("Enter something : ");
// console.log(+number + 20);

// const inLeave = confirm("Are you sure, you want to leave?");
// console.log(isLeave);

// let a = true;
// let b = undefined;
// let c = "0";
// let d = "";

// console.log("!!a = " + !!a);
// console.log("!!b = " + !!b);
// console.log("!!c = " + !!c);
// console.log("!!d = " + !!d);

// console.log("a && !b = " + Boolean(a && !b));

// let j = 100;

// console.log("j = " + j);
// console.log("j++ = " + j++);
// let x = j++;
// console.log("x = " + x);
// console.log("j = " + j);
// console.log("++j = " + ++j);

// let z = 100;
// console.log("z++ = " + z++);
// console.log("z++ = " + z++);
// console.log("z++ = " + z++);
// console.log("z++ = " + z++);
// console.log("z++ = " + z++);

// console.log("20" * 7);
// console.log("20" + 7);
// console.log("8" + 1 + 5 + 2);
// console.log(+"8" + 1 + 5 + 2);
// console.log(1 + 8 + 5 + "2");

// a = true + 7;

// console.log("true + 7 = " + (true + 7));
// console.log('"" + true + 7 = ' + ("" + true + 7));
// console.log('"" + +true + 7 = ' + ("" + +true + 7));
// console.log('+"" + true + 7 = ' + (+"" + true + 7));

// console.log("A" < "Z");
// console.log("A" == "a");
// console.log("b" < "b");
// console.log("z" < "2");
// console.log("AAA" === "aaa");
// console.log("AAA" < "AAAA");

// const check = "admin";
// let role = "";
// if (check === null || check === undefined) {
//   role = "guest";
// } else {
//   role = check;
// }

// role = check ?? "guest";

// const input = prompt("Enter number");
// const result = input ?? 0;
// console.log(result);

// const input = prompt("Enter month number");

// if (input === "1") {
//   alert("January");
// } else if (input === "2") {
//   alert("Fabuary");
// } else if (input === "3" || input === "4" || input === "5") {
//   alert("March");
// } else {
//   alert("Wrong number");
// }

// switch (input) {
//   case "1":
//     alert("January");
//     break;
//   case "2":
//     alert("Febuary");
//     break;
//   case "3":
//     alert("March");
//     break;
//   default:
//     alert("Wrong number");
// }

// input === "1"
//   ? alert("January")
//   : input === "2"
//   ? alert("Fabuary")
//   : input === "3"
//   ? alert("March")
//   : alert("Wrong Number!");

// const a = 10 && 0 && true;
// const b = null || 200 || undefined || 30 || 0;
// console.log(a);
// console.log(b);

// let input = prompt("Enter role");
// let role;
// if (input !== null) {
//   role = input;
// } else {
//   role = "Guest";
// }
// console.log(role);

// const x = 10 || false || "thong";
// console.log(x);

// const y = "Thong" || 20 || 90;
// console.log(y);

// const z = "Thong" && 20 && 30 && 60 && 4 < 8 && "9" && "something";
// console.log(z);

// let input = '';
// let role;
// if (input !== null) {
//   role = input;
// } else {
//   role = "Guest";
// }

// let roles = '' || 'Guest'

// function sayHello(name) {
//   //   if (name !== undefined) {
//   //     alert("Hello" + name);
//   // } else {
//   //   alert("Hello anonymous");
//   // }
//   alert("Hello" + (name || "Anonymous"));
// }

// sayHello("Aoy");
// sayHello("Thong");
// sayHello("");

// let i = 0; // while loop
// while (i < 90) {
//   console.log(i);
//   i++;
// }

// let i = 0; // do while loop
// do {
//   console.log(i);
//   i++;
// } while (i <= 19);

// let a = 10;
// let b = 20;

// let sum = a + b;
// let sumI = 0;
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// alert("Hello JS");

// const ret = alert("Hello JS");
// console.log(ret);

// const ret = prompt("Enter something");
// console.log(ret);

// function sum(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

// // sum(10, 20); // num1 = 10, num2 = 20;

// // const total = sum(10, 20);
// const total = sum(10, 50, 90);
// console.log(total);

// // function test() {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }
// console.log(a);
// console.log(b);
// console.log(c);

// for (let i = 0; i < 1; i++) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }
// console.log(a);
// console.log(b);
// console.log(c); c (var) เป็น gobal scope
// จะเป็น local แค่ใน function เท่านั้น

// const a = 20;

// function test(a, c) {
//   a = 10;
//   return a + c;
// }

// console.log(test(a, 90));

// function sum(a, b = 10) {
//   return a + b;
// }

// console.log(sum(10));

// function test() {
//   console.log("Test Function");
//   return;
// }

// console.log(test());

// console.log(isNaN("10"));

// const birthYear = "2000l";
// function calcAge(by) {
//   return by;
//   if (isNaN(by)) return "Is not a number";
//   return 2022 - by;
// }

// console.log(calcAge(birthYear));

// const calcAge = function (by) {
//   return 2022 - by;
// };

// const a = calcAge;
// console.log(a(1998));

// console.log(calcAgeExpression(1990));

// const calcAgeExpression = function (by) {
//   return 2022 - by;
// };

// const sum = function (a, b) {
//   return a + b;
// };

// console.log(sum);

// const test = function () {
//   return function (a) {
//     return 10 + a;
//   };
// };

// const b = test();
// console.log(test()(1));
// console.log(test()(6));
// console.log(b(5));

// const a = function () {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// };

// const test = a();

// console.log(test(a));
// console.log(test(a));
// console.log(test(a));

// function sum(a, b) {
//   return a + b;
// }

// const sumExp = function (a, b) {
//   return a + b;
// };

// const sumArrow = (a, b) => {
//   return a + b;
// };

// const sumArrow = (a, b) => a + b;

// const calcAge = (birthYear) => {
//   if (isNaN(birthYear)) return;
//   return 2022 - birthYear;
// };

// sumArrow(10, 20);
// const calcAge = birthYear = isNaN(birthYear) ? undefined : 2022 - birthYear;

// const test = () => console.log('Test');

// const sum = (a, b) => a + b;
// const sum1 = (a, b) => {
//   return a + b;
// };

// const ask = (question, yes, no) => {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// };

// const b = (yes1, no2) => {
//   if (confirm("Are you ok?")) {
//     yes1();
//   } else {
//     no2();
//   }
// };

// const showOk = () => "Okay";
// const showCancel = () => alert("You cancel");

// const showOk2 = () => console.log("Ok2");
// const showCancel2 = () => console.log("Cancel2");

// // ask("Are you sure?", showOk, showCancel);
// // ask("Quest 2", showOk2, showCancel2);
// b(showOk, showCancel);

// const c = () => {
//   ask('question c', () => 'Ok c', () )
// }

// function test() {
//   function a() {
//     return "a";
//   }
// }

// a();

// console.log(b);

// console.log(window);

// var b = 200;
// function a() {
//   return "a";
// }

// console.log(b);

// var aa = 50;
// console.log(window);

// window.alert("Hello");

// const user = {
//   name: "John",
//   age: 20,
// };

// const admin = user;
// admin.age = 50;
// console.log(user.age);
// console.log(user);
// console.log(admin);
// console.log(admin === user);

// const a = { name: "test" };
// const b = { name: "test" };
// console.log(a === b);

// const admin = {};
// // admin.name = user.name;
// // admin.age = user.age;

// for (let key in user) {
//   admin[key] = user[key];
// }

// user.name = "Jessica";
// console.log(user);
// console.log(admin);

// const a = { age: 2 };
// const b = { email: "gmail.com", age: 10 };
// // let c = {};
// let c = Object.assign({}, a, b);
// console.log(c);
// let admin = Object.assign({}, user);
// console.log(admin);

// const a = { age: 29, phone: 1234, car: "Civic" };
// const b = { email: "gmail.com", age: 60 };
// let c = Object.assign({}, a, b);
// console.log(c);

// let d = Object.assign(a);
// console.log(c === a + b);
// console.log(c === a);

// const user = {
//   name: "John",
//   sayHi: function() {
//     alert("Hi!");
//   };
// };

//short hand
// const user = {
//   name: "John",
//   sayHi() {
//     alert("Hi! " + this.name);
//     this.run();
//   },
//   run() {
//     console.log("Runnnn");
//   },
// };

// const admin = { name: "admin" };
// admin.sayHi = user.sayHi;
// admin.run = user.run;
// user.sayHi();
// admin.sayHi();

// function sayHi() {
//   alert("Hi " + this.name);
// }
// const user2 = { name: "Thong" };
// sayHi();
// user2.sayHi = user.sayHi;
// window.sayHi();
// user2.sayHi();
// console.log(user2);

// function sayHi() {
//   console.log("Hi " + this.name);
// }

// var name = "CC";
// const sayHi = () => {
//   console.log("Hi " + this.name);
// };

// const a = {};
// const b = { name: "B" };
// a.sayHi = sayHi;
// b.sayHi = sayHi;
// a.sayHi();
// b.sayHi();

// const person1 = {
//   name: "a",
//   age: 12,
//   email: "a@gamil.com",
// };

// const person2 = {
//   name: "b",
//   age: 19,
//   email: "b@gamil.com",
// };

// const person3 = {
//   name: "c",
//   age: 22,
//   email: "c@gamil.com",
// };

// const person4 = {
//   name: "d",
//   age: 16,
//   email: "d@gamil.com",
// };

// function Person(name, age, email) {
//   this.name = name;
//   this.age = age;
//   this.email = email;
// }

// const person5 = new Person("f", 15, "f@gmail.com");
// console.log(person5);

const user = {
  // address: {
  //   province: "Bangkok",
  // },
};

console.log(user.address?.province);
