// CC11 Javascript อาจารย์เอิร์ธ 04-04-2022 (ช่วงบ่าย)
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthDate: '1991-10-12'
// };

// function Person(firstName, lastName, birthDate, gender, phone) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthDate = birthDate;
//     this.gender = gender;
//     this.phone = phone;
// };

// const person = new Person('john', 'Doe', '1991-10-12', 'Male', '0815903499')
// const person2 = new Person('Tony', 'Ja', '1991-01-11', 'Male', '0812345678')


// console.log(person)
// console.log(person2)

class Person {
    // property
    // firstName =  'A';
    // lastName = 'Be';
    // phone = '0812345678'
    // birthDate = '1990-11-12'
    // gender = 'Male'

    // method
    getFullname() {
        console.log('GetFullname')
    }

    constructor() {
        console.log('constructor')
    }
}

const person = new Person();
// console.log(person);