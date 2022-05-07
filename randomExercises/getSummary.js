'use strict';
// Jonas is a 46 year old teacher, and he has a/no driver's license
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schedtman',
    birthYear: 1991,
    job: 'teacher',
    hasDriversLicense: false,
    calcAge: function () {
        return this.age = 2022 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.hasDriversLicense === true ? 'a' : 'no'} driver's license`
    }
}
//console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old teacher, and he has ${jonas.hasDriversLicense === true ? 'a' : 'no'} driver's license`);
//console.log(`${jonas.firstName} is a ${jonas.age}-year old teacher, and he has ${jonas.hasDriversLicense === true ? 'a' : 'no'} driver's license`);
console.log(jonas.getSummary());