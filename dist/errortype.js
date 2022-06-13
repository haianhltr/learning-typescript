"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "MAX";
if (typeof userInput === 'string') {
    userName = userInput;
}
//this function never produce a value
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('an error occured!', 500);
