const cars = ["Saab", "Volvo", "BMW"];

let car = (document.getElementById("demo").innerHTML = cars);
console.log(cars[2]);
console.log("type of car is " + typeof car);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = (document.getElementById("demo1").innerHTML = fruits.toString());
console.log("type of fruit is " + typeof fruit);

console.log(fruits.sort());

console.log(cars[cars.length - 1] + " last of the array");
console.log(cars.at(-1) + " last of the array");

const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
console.log(arr.sort((a, b) => a - b));
console.log(arr.sort((a, b) => b - a));

let text = "<ul>";
for (let i = 0; i < cars.length; i++) {
  text += "<li>" + cars[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo2").innerHTML = text;

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2 + " ";
}
document.write(numbers);

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers);

const arrays = [];
let arrayLength = arrays.length;
console.log(arrayLength);

for (const value of numbers) {
  document.write(" . . . . ." + value);
}

const num = ["1", "2", "3"];
const arrIterator = num[Symbol.iterator]();
console.log(arrIterator.next().value);
console.log(arrIterator.next().value);

myFunction = () => {
  let text = document.getElementById("demo3").innerHTML;
  //   console.log("hsaldnsalndlksad", text);
  document.getElementById("demo3").innerHTML = document
    .getElementById("demo3")
    .innerHTML.replace("num", "hello");
  console.log("helloo");
};

console.log(cars.slice(0, 2));

const arrayLike = {
  length: 4,
  0: "a",
  1: "b",
  2: "c", // ignored by at() since length is 2
};
console.log(Array.prototype.at.call(arrayLike, 0)); // "a"
console.log(Array.prototype.at.call(arrayLike, 2)); // undefined

console.log(cars.concat(fruits, numbers));
