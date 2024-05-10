// ATM 문제
// https://www.acmicpc.net/problem/11399
let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").toString().split("\n");

let timeArr = input[1].split(" ").map(item => Number(item)).sort((a,b) => a-b);
let total = 0;

const reduceVal = timeArr.reduce((prev,next) => {
  const reduceVal = prev + next;
  total += reduceVal
  return reduceVal
},0)

console.log(total)