let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "MAX";

if (typeof userInput === 'string') {
  userName = userInput;
}



//this function never produce a value
function generateError(message: string, code: number) : never
{
    throw {message: message, errorCode : code};
}

generateError('an error occured!', 500)