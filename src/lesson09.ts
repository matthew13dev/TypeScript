//ENUM

enum weekdays {
    sunday =  0,
    monday = 1,
    tuesday = 2,
    wednesday = 3,
    thursday = 4,
    friday = 5,
    saturnday = 6,
}

let date = new Date();

console.log(weekdays[date.getDay()])

enum userType {
    USER = 0,
    ADMIN = 1,
    SUPER = 2
}

const userJob: userType = userType.SUPER;
console.log(userJob);