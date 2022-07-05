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

for (let i = 0; i <= 10; i++) {
  for (let j = 0) {
  }
}


for (let i = 0; i < 10; i++) {
  console.log(i);
}