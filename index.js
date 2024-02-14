// let randomNumber = Math.floor(Math.random() * 10);
// console.log(randomNumber);

// let userNumber = +prompt("Tanlagan sonningizni kiriting...");

// if (randomNumber == userNumber) {
//   alert("Siz yutdingiz🎉🎉🎉");
// } else {
//   alert("Afsuski siz yutqazdingiz😭😭 Qayta urinib ko'ring");
// }

// let svetaforColor = prompt("Svetaforning rangi qanday");

// if (svetaforColor === "qizil") {
//   alert("To'xtab tur");
// } else if (svetaforColor === "yashil") {
//   alert("Yuravering");
// } else if (svetaforColor === "sariq") {
//   alert("Tayyorlaning yurishga");
// } else {
//   alert("Bunday rang mavjud emas");
// }

// number
// 3 5 15
// agar 3 "Fizz"
// agar 5 "Buzz"
// agar 15 "FizzBuzz"
// shartimizga to'g'ri kelmaydigan son bu

// let number = 60;
// if (number % 15 === 0) {
//   console.log("FizzBuzz");
// } else if (number % 3 === 0) {
//   console.log("Fizz");
// } else if (number % 5 === 0) {
//   console.log("Buzz");
// } else {
//   console.log("shartimizga to'g'ri kelmaydigan son bu");
// }

// let number = 31;

// // 3 va 7

// if (number % 7 === 0) {
//   console.log("Fizz");
// } else if (number % 3 === 0) {
//   console.log("Buzz");
// } else {
//   console.log("7 ga  va 3 ga bo'linmaydi");
// }

let ism = "Hello";

if (ism.length > 2) {
  let ism2 = ism.slice(ism.length - 2, ism.length);
  console.log(ism2.repeat(3));
} else {
  console.log(ism.repeat(3));
}
