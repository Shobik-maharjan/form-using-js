// local variable
function test() {
  var x = 10;
  console.log(x);
}

test();

// console.log(x)  cannot access outside function or block

// global variable
var a = 10;
var b = 20;
var x = 0;
function add() {
  x = a + b;
}
add();

console.log(x);

{
  let x = 5;
  let y = 2;
  let z = x + y;
  console.log(z);
}

{
  let marks = prompt("Enter your marks: ");

  let result = marks >= 40 ? "pass" : "fail";

  console.log(`You  ${result} the exam.`);
}
