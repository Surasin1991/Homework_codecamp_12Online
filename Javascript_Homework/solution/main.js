// Lab 1.1.1, 1.1.3
// alert กล่องข้อความ
// alert("My name is Thong");

// Lab 1.2.1
// var name;
// var person;
// name = "Surasin";
// person = name;
// alert(person);

// Lab 1.2.2
// let myMoney = 1000000000;
// let myDad = "Pongsin";
// let myMom = "Mod";
// let myAddress = "57/3 Sena116";
// let universeAge = "13.8 billion";

// Lab 1.2.3
// error const ต้องประกาศค่าเริ่มต้นเสมอ
// const user;
// const role;
// user = "I am a hero";
// role = "customer";
// error ต้องประกาศตัวแปรก่อนเรียกใช้
// alert(username);

// Lab 1.2.4
// const firstName = "Surasin";
// let lastName = "Pukittiwarangkoon";
// var nickName = "Thong";

// const firstName = "Suwimol";
// let lastName = "Pitagwong";
// var nickname = "Aoy";
// ไม่ error แต่ไม่ควรทำ
// birthDate = "12/Oct/1991";

// Lab 1.2.5
// BRAND_NAME = "I am a hero";
// สามารถประกาศชื่อตัวแปรเป็นตัวพิมพ์ใหญ่ทั้งหมดได้เพราะไม่ผิดเงื่อนไข
// ใช้ในกรณีที่ต้องการตัวแปรที่มักจะเรียกใช้ทุกที่ใน project

// // Lab 1.3.2
// const firstName = "Surasin";
// let lastName = "Pukittiwarangkoon";
// const age = 30;
// const address = "57/3 Senanivet116 Senanikom Rd.";
// console.log(
//   `Full Name: ${firstName} ${lastName}, Age: ${age}, Address: ${address}`
// );

// Lab 1.3.3
// typeof "x"; // string
// typeof x; // undefined
// typeof ``; // string
// typeof Infinity; // number
// typeof(100 / 0); // number
// typeof(1 + "3"); // string
// typeof(1 * "a"); // number
// typeof null; // object

// Lab 1.4.1
// let a = undefined;
// let b = 2;
// let c = a++;
// let d = String(a);
// let e = "" + b;
// let f = `${c}`;
// console.log(d, e, f);

// Lab 1.4.2
// let a = undefined;
// let b = null;
// let c = b + "4 2"; // "null4 2"
// let d = Number(a); // NaN
// let e = +b; // 0
// let f = c * 1; // NaN
// console.log(d, e, f);

// Lab 1.4.3
// let a = undefined;
// let b = " ";
// let c = !b;
// let d = Boolean(a); // false
// let e = !!b; // true
// let f = !!c; // false
// console.log(d, e, f);

// Lab 1.4.4
// console.log("" + 1 + 0); // "10"
// console.log("" - 1 + 0); // -1
// console.log(true + false); // 1
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(" -9 " - 5); // -14
// console.log(" -9 " + 5); // " -9 5"
// console.log("4px" - 2); // NaN
// console.log(2 + 4 + "px"); // "6px"
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN

// Lab 1.4.5
// let a = 0;
// a++; // 1
// a += 3; // 4
// a *= 17; // 68
// a %= 7; // 5
// console.log(a);

// Lab 1.4.6
// let a = 1; // a:1
// let b = 2; // a:1 b:2
// let c = a++; // a:2 b:2 c:1
// let d = ++c; // a:2 b:2 c:2 d:2
// let e = ++d + d++ + d; // 3+3+4 // d:4 e:10

// Lab 1.4.7
// a = Number(prompt("Enter number a : "));
// b = +prompt("Enter number b : ");
// alert(a + b);

// Lab 1.4.8
// let a = 0.1;
// let b = 0.2;
// let c = a + b;
// alert(c.toFixed(1));

// Lab 1.4.9
// let a = 1 * "4" + +null + +" " - "5" * 2 + +(7 + 2 + "" + +!!undefined);
// 4 + 0 => 4 + 0 => 4 - 10 => -6 + ("9" + 0) => -6 + +"90");

// 7. Comparisons Lab 1
// console.log("1" > 4); // false
// console.log("" <= 1); // true
// console.log("apple" > "pineapple"); // false
// console.log(undefined == null); // true เป็นข้อยกเว้นใน javascript
// console.log(undefined === null); // false
// console.log(NaN !== 2); // true
// console.log(NaN == NaN); // false เป็นข้อยกเว้น js
// ถ้าต้องการเช็ค NaN ใช้ isNaN(NaN);
// console.log(NaN === NaN); // false เป็นข้อยกเว้น js

// 8 Conditional Lab 1
// if (0) {
//   alert("Zero");
// } else {
//   alert("Nooo");
// }

// Lab 3.1.3
// let myName = "Thong";
// let guestName = prompt("Guest my name : ");
// if (guestName == myName) {
//   alert("ถูกต้อง!");
// } else {
//   alert("ผิด!");
// }

// เฉลย Lab 3.1.3
// const input = prompt("Enter my name : ");
// if (input === "Thong") {
//   alert("Correct");
// } else {
//   alert("Wrong");
// }

// Lab 3.1.4

// const input = prompt("Enter your number >> "); //ไม่ควรแปลง input เป็น number
// //เพราะหากมีการกด cancel จะทำให้ input = 0 ซึ่งจะทำให้แยกไม่ออกว่า 0number หรือ 0cancel
// if (input > 0) {
//   alert("Positive Number");
// } else if (input < 0) {
//   alert("Negative Number");
// } else if (input === "0") {
//   alert("Zero");
// } else {
//   alert("Invalid Number");
// }
// เปรียบเทียบความเท่ากันทำได้ 2 แบบ : ==, ===

// Lab 3.1.5
// const input = prompt("Enter Number >> ");
// if (input === null || input.trim() === "" || isNaN(input)) { // การสลับตำแหน่งมีผล
//   alert("Invalid Number");
// } else if (input % 2 === 0) {
//   alert("Even number");
// } else {
//   alert("Odd number");
// }

// Lab 3.1.6
// function isValidNumber(checkValue) {
// if (checkValue === null) { xxx
//   return false; xxx
// } xxx
// if (checkValue.trim() === "") { xxx
//   return false; xxx
// } xxx
// if (isNaN(checkValue)) { xxx
//   return false; xxx
// } xxx
// return true; xxx

// return !(checkValue === null || checkValue.trim === "" || isNaN(checkValue));
// }

// const input1 = prompt("Enter number1 : ");
// const input2 = prompt("Enter number2 : ");
// if (!isValidNumber(input1) || !isValidNumber(input2)) {
//   alert("Invalid number");
// } else {
//   alert(+input1 + +input2);
// }

// Lab 3.1.7
// const username = prompt("Entet username");
// if (!isValidInput(username)) {
//   alert("username is required");
// } else {
//   const password = prompt("Enter password");
//   if (!isValidInput(password)) {
//     alert("Password is required");
//   } else {
//     if (username === "admin" && password === "1234") {
//       alert(`Hello ${username}`);
//     } else if (username === "john" && password === "qwerty") {
//       alert(`Hello ${username}`);
//     } else {
//       alert("invalid username or password");
//     }
//   }
// }

// function isValidInput(value) {
//   return !(value === null || value.trim() === "");
// }

// Lab 3.1.8
// const score = prompt("Enter score : ");
// if (score <= 100 && score >= 0 && isValidNumber(score)) {
//   if (score >= 80) {
//     alert("A");
//   } else if (score >= 70) {
//     alert("B");
//   } else if (score >= 60) {
//     alert("C");
//   } else if (score >= 50) {
//     alert("D");
//   } else {
//     alert("F");
//   }
// } else {
//   alert("Score is invalid!");
// }

// Lab 3.1.9
// let age = prompt("How old are you");
// let message;
// if (age >= 18) {
//   message = "Allowed";
// } else {
//   message = "Not allowed";
// }

// Terynary Operators
// let message = age >= 18 ? "Allowed" : "Not allowed";
// console.log(message);

// Lab 3.1.10
// let login = prompt("Enter username");
// let message;
// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }

// let message =
//   login === "Employee"
//     ? "Hello"
//     : login === "Director"
//     ? "Greetings"
//     : login === ""
//     ? "No login"
//     : "";
// console.log(message);

// Lab 3.1.11
// const score = prompt("Enter score : ");
// if (score <= 100 && score >= 0 && isValidNumber(score)) {
//   if (score >= 80) {
//     alert("A");
//   } else if (score >= 70) {
//     alert("B");
//   } else if (score >= 60) {
//     alert("C");
//   } else if (score >= 50) {
//     alert("D");
//   } else {
//     alert("F");
//   }
// } else {
//   alert("Score is invalid!");
// }
// v1
// const score = prompt("Enter score : ");
// let message =
//   !isValidNumber(score) || score > 100 || score < 0
//     ? alert("Score is invalid")
//     : score >= 80
//     ? alert("A")
//     : score >= 70
//     ? alert("B")
//     : score >= 60
//     ? alert("C")
//     : score >= 50
//     ? alert("D")
//     : alert("F");

// v2
// const score = prompt("Enter score : ");
// let message = !isValidNumber(score)
//   ? "Score is invalid!"
//   : score >= 80 && score <= 100
//   ? "A"
//   : score >= 70 && score <= 100
//   ? "B"
//   : score >= 60 && score <= 100
//   ? "C"
//   : score >= 50 && score <= 100
//   ? "D"
//   : score >= 0 && score <= 100
//   ? "F"
//   : "Score is out of range";
// alert(message);

// Lab 3.2.1
// const input = prompt("Enter number");
// switch (input) {
//   case "1":
//     alert("One");
//     break;
//   case "0":
//     alert("Zero");
//     break;
//   case "-1":
//     alert("Minus one");
//     break;
//   default:
//     alert("Invalid value");
// }

// Lab 3.2.2
// let a = +prompt("a?");

// if (a === 0) {
//   alert(0);
// }
// if (a === 1) {
//   alert(1);
// }

// if (a === 2 || a === 3) {
//   alert("2, 3");
// }

// let a = +prompt("a?");
// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2, 3");
//     break;
//   default:
// }

// Lab 3.2.3
// const browser = prompt("What's your browser?");
// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;
//   default:
//     alert("We hope that this page looks ok!");
// }

// const browser = prompt("Whatis your browser?");
// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }
// const test = "a";
// const father = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 15,
//   "Birth date": "1/11991",
//   BirthDate: "1/11991",
//   getAge: function () {},
//   address: {
//     line1: "199",
//     road: "PhraRam 1",
//     district: "Pathumwan",
//   },
//   test: "something",
//   [test]: "A",
//   ["gender"]: "M",
// };

// console.log(father);
// alert.log(father);

// console.log(father.firstName);
// console.log(father["firstName"]);
// console.log(father[test]);
// console.log(father.test);
// console.log(`father ${father.a}`);
// console.log(father.gender);
// console.log(father.address.district);

// const obj = {}; // empty object

// father.firstName = "Pong";
// console.log(father);
// father.phoneNumber = "081-888-8889";

// let test = "a";
// const obj = {
//   [test]: "Key A",
// };
// obj.test;
// obj.a;
// obj[test];
// // test = b;
// obj[test] = "Key B";
// obj[test];

// const obj = {
//   name: "John",
//   age: 20,
// };
// delete obj.age;
// console.log(obj.age);

// const name = prompt("Enter name");
// const age = prompt("Enter age");
// const person = {
//   name: name,
//   age: age,
// };
// console.log(person);

// const name2 = "nameB";
// const age2 = "ageB";
// const personB = {
//   name2,
//   age2,
// };
// console.log("personB", personB);

// const name = "John";
// const age = "30";
// const person = {
//   name,
//   age,
// };

// const keyToCheck = "name";

// console.log("name" in person);
// console.log("gender" in person);
// console.log(keyToCheck in person);

// const name = "John";
// const age = 20;
// const gender = "Male";
// const email = "test@gmail.com";
// const person = {
//   name,
//   age,
//   gender,
//   email,
// };

// // console.log(`name: ${person.name}`);
// // console.log(`age: ${person.age}`);

// for (let k in person) {
//   console.log(k + " : " + person[k]);
// }

// const empObj = {}

// Loop

// const num = 34;
// const guessNum = prompt("Enter number : ");
// if(+guessNum === num) {
//   alert("Correct");
// } else {
//   alert("Wrong");
//   guessNum = prompt("Enter number again : ")
//   if (+guessNum === num) {
//     alert("Correct");
//   } else {
//     alert("Wrong");
//   guessNum
//   }
// }

// for, while, do while
// for loop คือ Loop แบบรู้จำนวนรอบที่แน่นอน

// console.log เลข 1 - 10
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 1) {}
//   console.log(`i = ${i}`);
// }

// console.log เฉพาะ เลขคี่ (จาก 1 - 10)
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(`Odd number = ${i}`);
//   }
// }

// console.log ตั้งแต่ -50 ไปถึง 50
// for (let i = -50; i <= 50; i++) {
//   console.log(`i = ${i}`);
// }

// console.log ตั้งแต่ -50 ไปถึง 50 V2
// for (let i = 0; i <= 100; i++) {
//   console.log(`i = ${i - 50}`);
// }

// console.lgo ตั้งแต่ -50 ไปถึง 50 เพิ่มที่ละ 3
// for (let i = -50; i <= 50; i = i + 3) {
//   console.log(`i = ${i}`);
// }

// While loop ต้องมีการอัพเดทค่าตัวแปรเสมอ

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i += 5;
// }

// // do while loop เช็คเงื่อนไขหลังจากรันคำสั่ง

// let r = 1;
// do {
//   console.log(r);
//   r += 5;
// } while (r <= 100);

// const num = 34;
// let guessNum = prompt("Enter number : ");
// while (num !== +guessNum) {
//   alert("Wrong");
//   guessNum = prompt("Enter number : ");
// }
// alert("Correct !!!");

// const num = 34;
// for (let i = 0; i < 100; ) {
//   let guessNum = prompt("Enter number : ");
//   if (num === +guessNum) {
//     alert("Correct !!!");
//     break;
//   } else {
//     alert("Wrong");
//   }
// }

// let i = 3;
// while (i) {
//   alert(i--);
// } // alert ตัวสุดท้ายเป็น 1 เพราะ 0 = false while loop จะไม่ทำ false

// let i = 0;
// while (++i < 5) alert(i);

// let r = 0;
// while (r++ < 5) alert(r);

// Lab loop 3
// for (let i = 1; i <= 50; i++) {
//   console.log(i * 2);
// }

// let i = 0;
// while (i <= 100) {
//   i += 2;
//   console.log(i);
// }

// Lab 4
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// Lab loop4

// ให้เขียนโค้ดเพื่อหาผลรวมของจำนวนเต็มตั้งแต่ 1 ถึง 100 ตามเงื่อนไขดังนี้
// - หาผลรวมตัวเลขทุกตัว
// - หาผลรวมเฉพาะเลขคู่ และผลรวมเฉพาะเลขคี่
// - หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2+..)
// ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลังสอง (3^2 + 6^2+..)

// let sum = 0;
// let sumOdd = 0;
// let sumEven = 0;
// let sum3 = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
//   if (i % 2) {
//     sumOdd += i;
//   } else {
//     sumEven += i;
//     sum3 += i ** 2;
//   }
//   if (i % 3 === 0) {
//     sum3 -= i ** 2;
//   }
// }
// console.log(sum, sumOdd, sumEven, sum3);

// Lab Loop5
// let amount = 100000; // amount = amount + amount * rate / 100
// for (let i = 0; i < 10; i++) {
//   // amount += (2.5 / 100) * amount;
//   amount = (1 + 2.5 / 100) * amount;
// }

// Lab Loop5
// Let amount = 100000; // amount = amount + amount * rate / 100

// for (let i = 0; i <= 10; i++) {
//   for (let j = 0; j <= 10; j++) {

//   }
// }

// for (let i = 0;)

// let acc = "";
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 4; j++) {
//     if (i <= j) {
//       acc += "*";
//     } else {
//       acc += " ";
//     }
//   }
//   acc += "\n";
// }
// console.log(acc);

// let acc = "";
// for (let i = 2; i <= 12; i++) {
//   for (let j = 1; j <= 12; j++) {
//     acc += `${i} x ${j} = ${i * j}\n`;
//   }
//   acc += "\n";
// }
// console.log(acc);

// let input = prompt("Enter number");
// let sum = 0;
// let count = 0;
// while (!(input === "0" || input === "" || input === null)) {
//   sum += +input;
//   count++;
//   input = prompt("Enter number");
// }

// console.log(sum);
// console.log(sum / count);

// function isPrime(number) {
//   for (let i = 2; i <= number - 1; i++) {
//     if (number % i === 0) {
//       // console.log(i);
//       return false;
//     }
//   }
//   return true;
// }
// // console.log(isPrime(11111));

// for (let i = 2; i <= 100; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// let user = prompt("Enter username : ") || "Guest";
// if (user === "codecamp") {
//   let password = prompt("Enter password : ");
//   if (password !== "123456") {
//     alert("Wrong password");
//   }
// } else {
//   user = "guest";
// }

// alert(user);

// function sayHelloUser(username) {
//   alert(`Hello ${username}`);
// }
// const user = prompt("Enter user");
// sayHelloUser(user);

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function min(num1, num2) {
//   // return num1 > num2 ? num2 : num1;
//   if (num1 > num2) return num2;
//   return num1;
// }

// function login(username, password) {
//   if (username === "admin" && password === "P@ssw0rd") {
//     console.log("Good");
//   } else {
//     console.log("Bad");
//   }
// }
// username = prompt("Enter username : ");
// password = prompt("Enter password : ");
// login(username, password);

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   return confirm("Did parents allow you?");
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }

// function checkAge(age) {
//   return age > 18 || confirm("Did parents allow you?");
// }

// function isValidNumber(number) {
//   if (
//     number === undefined ||
//     number === null ||
//     String(number).trim() === "" ||
//     isNaN(number) ||
//     typeof number === Boolean
//   )
//     return false;
//   return true;
// }

// function max(a, b, c, d) {
//   if (a === undefined) return undefined;
//   if (b === undefined) {
//     if (isValidNumber(a)) return a;
//     else return NaN;
//   } else {
//     if (isValidNumber(a) && isValidNumber(b)) {
//       return a < b ? a : b;
//     } else return NaN;
//   }
// }

// function max(a, b, c, d) {
//   if (a === undefined) return undefined;
//   if (b === undefined) return Math.max(a);
//   else {
//     if (c === undefined) return Math.max(a, b);
//     else {
//       if (d === undefined) return Math.max(a, b, c);
//       else return Math.max(a, b, c, d);
//     }
//   }
// }

// const multiply = function (a, b) {
//   return a * b;
// };

// multiply(12, 323);

// const result = multiply(17, 7);
// console.log();

// Fucntion Ecpression
// const showModal = alert;
// showModal("Execute modal");

// const showModal = alert();
// showModal("Execute modal");

// my try
// function enRole() {
//   const role = prompt("Enter your role : ");
//   return role;
// }

// function accGnt() {
//   alert("ACCESS GRANTED");
// }

// function accDn() {
//   return alert("ACCESS DENIED");
// }

// function checkPermission(enRole, accGnt, accDn) {
//   if (enRole === "ADMIN") {
//     accGnt();
//   } else {
//     accDn();
//   }
// };
// my try

// first solution
// const checkPermission = function (role, yes, no) {
//   if (role === "ADMIN") {
//     yes();
//   } else {
//     no();
//   }
// };

// checkPermission(
//   "AddMIN",
//   function () {
//     alert("ACCESS GRANTED");
//   },
//   function () {
//     alert("ACCESS DENIED");
//   }
// );
// first solution

//iTry
// const userInput = function () {
//   var result = prompt("Enter role : ");
//   return result;
// };

// const accGnt = function () {
//   alert("ACCESS GRANTED");
// };

// const accDn = function () {
//   alert("ACCESS DENIED");
// };

// const checkWork = function (role, yes, no) {
//   const enRole = role();
//   if (enRole === "ADMIN") {
//     yes();
//   } else {
//     no();
//   }
// };

// checkWork(userInput, accGnt, accDn);
//iTry

// function magic() {
//   return function (x) {
//     return x * 42;
//   };
// }
// const answer = magic();
// // console.log(answer);
// // console.log(answer(1337));
// console.log(magic(1337)(42));

// lab 4.3.1
// const multiply = (num1, num2) => num1 * num2;
// console.log(multiply(23, 9));

// lab 4.3.2
// const checkPrime = (number) => {
//   for (let i = 2; i < number / 2; i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// };

// lab 4.3.5

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("Yoe canceled the execution.")
// );

// Lab 4.3.6

// const dayToSec = (day) => day * 86400;
// sconsole.log(dayToSec(15) + " sec.");

// Lab 4.3.7
// const isDivideBySeven = (number) => number % 7 === 0;
// CC11 Javascript อาจารย์เอิร์ธ 29-03-2022 (ช่วงเช้า) 30:56

// Lab 4.3.8
// const calcPoint = (win, draw) => 3 * win + draw;

// full
// const calcPoing = function(win, draw) {
//   return alert(3 * win + draw)
// }

// Lab 4.3.9
const isLeapYear = (year) => {
  if (year % 4 !== 0) return false;
  if (year % 100 !== 0) return true;
  if (year % 400 === 0) return true;
  return false;
};

// full
// const isLeapYear = (year) => {
//   if (year % 4 !== 0) {
//     return false;
//   } else if (year % 100 !== 0) {
//       return true;
//   }
// };

// Lab 4.3.10
// const calcAge = (year) => {
//   let totalDay = 0;
//   for (let i = year; i <= 2022; i++) {
//     if (isLeapYear(i)) {
//       totalDay += 366;
//     } else {
//       totalDay += 365;
//     }
//   }
//   return totalDay;
// };

// Lab 4.3.11
// const convertFahrenheitToCelsius = (value) => ((value - 32) / 9) * 5;

// Lab 4.3.12
// const factorial = (number) => {
//   if (number === 0 || number === 1) return 1;
//   let result = 1;
//   for (let i = number; i >= 2; i--) {
//     result *= i;
//   }
//   return result;
// };

// const factRecursive = (number) =>
//   number === 0 || number === 1 ? 1 : number * factRecursive(number - 1);
// console.log(factRecursive(5));

// Lab 5.1
// const person = {
//   name: "John",
//   age: 20,
//   gender: "Male",
//   address: "719 Bantatthong, Bankok",
//   phoneNumber: "0901901900",
// };

// Lab 5.2
// const user = {};
// user.name = "John"; // user => { name: "John" }
// user.surname = "Doe";
// user.name = "Matt";
// delete user.name;

// // Lab 5.3
// const isEmptyObject = (obj) => {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// };

// Lab 5.4
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const calcSalary = (obj) => {
//   let sum = 0;
//   for (let key in obj) {
//     sum += obj[key];
//   }
//   return sum;
// };

// Lab 5.5
// const testObj = { width: 200, height: 300, name: "table" };
// console.log(testObj);

// const multiplyNumber = (obj, num) => {
//   const result = {};
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       result[key] = num * obj[key];
//     } else {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// };

// const resultObj = multiplyNumber(testObj, 3);
// console.log(resultObj);

// Lab 5.6 2:18:30
// const username = prompt("Enter Username : ");
// const email = prompt("Enter email : ");
// const password = prompt("Enter password : ");

// const user = {
//   username,
//   email,
//   password,
// };

// 2:21:40;
// Lab 5.7
// let key = prompt("Enter key : ");
// if (key !== "stop") {
//   let value = prompt("Enter value");
//   if (value !== "stop") {
//   while (key !== "stop" && value !== "stop") {

//     }
//   }
// }

// new way
// let result = {};
// while (1) {
//   let key = prompt("Enter key : ");
//   if (key === "stop") break;
//   let value = prompt("Enter value : ");
//   if (value === "stop") break;
//   result[key] = value;
// }
// console.log(result);

// Lab 5.8
// let result = {};
// while (1) {
//   let key = prompt("Enter key : ");
//   if (key === "stop") break;
//   let value = prompt("Enter value : ");
//   if (value === "stop") break;
//   if (value > 1) {
//     result[key + "s"] = value;
//   } else {
//     result[key] = value;
//   }
// }
// console.log(result);

// Lab 5.9
// let name = prompt("Enter name : ");
// let amount = prompt("Enter amount");
// let price = prompt("Enter price");
// let discount = prompt("Enter discount");

// const product = {
//   name,
//   amount,
//   price,
// };

// if (discount > 0) {
//   product.discount = discount;
// }

// const calcPrice = obj => {
//   // if (obj.discount) {
//   //   return (
//   //     // obj.price*obj.amount - (obj.discount /100) * obj.price * obj.amount)
//   //     obj.price * obj.amount * (1 - obj.discount / 100)
//   // } else {
//   //   return obj.price * obj.amount;
//   return obj.price * obj.amount * (1 - obj.discount || 0) / 100);
// }

// const calcPrice = (obj) =>
//   obj.price * obj.amount * (1 - (obj.discount || 0) / 100);

// Lab 5.10
// const employees = {
//   john: {
//     salary: 1000,
//     address: { district: "Ratchathewi", province: "Bangkok" },
//   },
//   peter: {
//     salary: 1500,
//     address: { district: "Pathumwan", province: "Bangkok" },
//   },
//   mike: {
//     salary: 800,
//     address: { district: "Pakkret", province: "Nonthaburi" },
//   },
//   sarah: {
//     salary: 2200,
//     address: { district: "Sriraja", province: "Chonburi" },
//   },
// };

// const name = prompt("Enter employee name : ");
// if (employees[name]) {
//   console.log(
//     `Name: ${name}, salary: ${employees[name].salary}, address: ${employees[name].address.district}, ${employees[name].address.province}`
//   );
// } else {
//   console.log("Not found!");
// }

// let num1 = 1_000_000_000_000;
// let num2 = 1e12;
// let num3 = 1000e9;
// let num4 = 250000000;
// let num5 = 2.5e8;

// console.log(`${num1}\n${num2}\n${num3}\n${num4}\n${num5}`);

// const bi = 0b100; //4
// const oct = 0o126; //86
// const hex = 0xf0; //240

// console.log(bi, oct, hex);

// let a = 50;
// let aHex = a.toString(16);
// console.log(aHex);

// let b = 4.689;

// console.log(Math.floor(b));
// console.log(Math.ceil(b));
// console.log(Math.round(b));
// console.log(Math.trunc(b));

// console.log(Math.floor(-4.245));

// Lab 6.1.3
// const calcPoint = (value) => Math.floor(value / 100);

// // Lab 6.1.6
// const random = (min, max) => Math.random() * (max - min) + min;

// Lab 6.1.7
// const randomDiceScord = () => Math.floor(Math.random() * 6) + 1; // [0, 6)

// Lab 6.1.8
// const calcCricumference = radius => 2 * Math.PI * radius;

// Lab 6.1.9
// const calcDiagonal = (w, l) => Math.sqrt(w ** 2 + l ** 2);

// Lab 6.1.10
// const convertDegToRadian = (deg) => (Math.PI / 180) * deg;

// for (let char of "Hello") {
//   console.log(char);
// }

// console.log("Thailand".toUpperCase());
// console.log("Thailand".toLowerCase());

// let str = "Widget with id";
// console.log(str.indexOf("Widget"));
// console.log(str.indexOf("with"));
// console.log(str.indexOf("with", 7)  );

// Lab 7.5.5
// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// const result = inventory.find((el) => el.name === "cherries");
// console.log(result);

// Lab 7.5.7
// const tasks = [
//   { id: 1, name: "Fishing" },
//   { id: 2, name: "Shopping" },
//   { id: 3, name: "Swimming" },
// ];

// function updateTask(id, newName) {
//   const idx = tasks.findIndex((task) => task.id === id);
//   if (idx !== -1) {
//     tasks[idx].name = newName;
//   } else {
//     alert("Task with this id is not found");
//   }
// }

// updateTask(3, "Golf");

// console.log(tasks);

// Lab 7.5.8
// const tasks = [
//   { id: 1, name: "Fishing" },
//   { id: 2, name: "Shopping" },
//   { id: 3, name: "Swimming" },
// ];

// const deleteTask = function (id) {
//   // #1
//   // return tasks.filter(task => task.id !== id);

//   // #2
//   const idx = tasks.findIndex(task => task.id === id)
//   if (idx !== -1) {
//     task.splice(idx, 1);
//   }
// };

// Lab 7.5.10
// const filterRange = function (arr, a, b) {
//   return arr.filter((el) => el >= a && el <= b);
// };

// 0:4:27CC11 Javascript อาจารย์เอิร์ธ 31-03-2022 (ช่วงบ่าย)
// Lab 7.2.1

// const isValidNumber = (number) => {
//   if (number === null || number.trim() === "" || isNaN(number)) return false;
//   return true;
// };

// const resultArr = [];
// let sum = 0;
// while (1) {
//   const input = prompt("Enter number : ");
//   if (!isValidNumber(input)) {
//     break;
//   }
//   resultArr[resultArr.length] = +input;
//   sum += +input;
// }

// let sum = 0;
// for (let el of resultArr) {
//   sum += el;
// }

// Lab 7.2.2

// const squareArr = (input) => {
//   const result = [];
//   for (let el of input) {
//     result[result.length] = el ** 2;
//   }
//   return result;
// };
// const arr = [2, 3, 3, 7, 11];
// const response = squareArr(arr);
// console.log(response);

// 1:30:44 CC11 Javascript อาจารย์เอิร์ธ 31-03-2022 (ช่วงบ่าย)
// Lab 7.2.3
const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

const summary = [];
for (let el of sales) {
  summary[summary.length] = { netPrice: el.price * (1 - (el.discount || 0)) };
}
console.log(summary);

// 1:38:09 CC11 Javascript อาจารย์เอิร์ธ 31-03-2022 (ช่วงบ่าย)
