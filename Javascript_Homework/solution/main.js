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
let a = 0.1;
let b = 0.2;
let c = a + b;
alert(c.toFixed(1));

// Lab 1.4.9
