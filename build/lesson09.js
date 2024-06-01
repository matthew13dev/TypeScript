"use strict";
//ENUM
var weekdays;
(function (weekdays) {
    weekdays[weekdays["sunday"] = 0] = "sunday";
    weekdays[weekdays["monday"] = 1] = "monday";
    weekdays[weekdays["tuesday"] = 2] = "tuesday";
    weekdays[weekdays["wednesday"] = 3] = "wednesday";
    weekdays[weekdays["thursday"] = 4] = "thursday";
    weekdays[weekdays["friday"] = 5] = "friday";
    weekdays[weekdays["saturnday"] = 6] = "saturnday";
})(weekdays || (weekdays = {}));
let date = new Date();
console.log(weekdays[date.getDay()]);
var userType;
(function (userType) {
    userType[userType["USER"] = 0] = "USER";
    userType[userType["ADMIN"] = 1] = "ADMIN";
    userType[userType["SUPER"] = 2] = "SUPER";
})(userType || (userType = {}));
const userJob = userType.SUPER;
console.log(userJob);
