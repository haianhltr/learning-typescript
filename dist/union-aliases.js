"use strict";
function combine(n1, n2, resultConversion) {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number" || resultConversion === 'as-number') {
        return result = +n1 + +n2;
    }
    else {
        return result = n1.toString() + n2.toString();
    }
    //   if (resultConversion === "as-number") {
    //     return +result;
    //   } else {
    //       return result.toString();
    //   }
}
const combinedAges = combine(36, 26, "as-number");
console.log(combinedAges);
//literal text
const combinedStringAges = combine(10, 20, 'as-number');
console.log(combinedStringAges);
const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
