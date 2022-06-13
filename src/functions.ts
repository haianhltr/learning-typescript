function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function printResult2(num: number): undefined {
  return;
}

function addHandles(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// printResult(add(5, 10));

let combineValues: (num1: number, num2: number) => number;
combineValues = add;

// this type will not be accepted
// combineValues = printResult;
// combineValues = 5

console.log(combineValues(5, 10));

//pasing an anonymous function
addHandles(5, 10, (result) => {
  console.log(result);
});
