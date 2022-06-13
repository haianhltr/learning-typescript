type Combinable1 = string | number;
type Conversion1 = "as-num" | "as-text";

function calcNum(num1: Combinable1, num2: Combinable1, checking: Conversion1) {
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    checking === "as-num"
  ) {
    return +num1 + +num2;
  } else if (
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    checking === "as-text"
  ) {
    return num1.toString() + num2.toString();

  } else {
    return num1.toString() + num2.toString();
  }
}

const a = calcNum(10, 20, "as-num");
console.log(a);

const b = calcNum(15, 20, "as-text");
console.log(b);

const c = calcNum("10", "20", "as-text");
console.log(c);

const d = calcNum("10", "20", "as-num");
console.log(d);
