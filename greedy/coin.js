// 동전 0 문제
// https://www.acmicpc.net/problem/11047
let fs = require("fs");
let input = fs.readFileSync(0, "utf-8").toString().split("\n");

let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);
const coinArr = [];

for (let i = 1; i <= n; i++) {
  coinArr.push(Number(input[i]));
}

let count = 0;
let remain = k;

for (let i = coinArr.length - 1; i >= 0; i--) {
  const coinPivot = Number(coinArr[i]);

  if (remain >= coinPivot) {
    count += parseInt(remain / coinPivot);
    remain = remain % coinPivot;
  }
}
console.log(count);