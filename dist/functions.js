"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function printResult2(num) {
    return;
}
function addHandles(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
// printResult(add(5, 10));
let combineValues;
combineValues = add;
// this type will not be accepted
// combineValues = printResult;
// combineValues = 5
console.log(combineValues(5, 10));
//pasing an anonymous function
addHandles(5, 10, (result) => {
    console.log(result);
});
