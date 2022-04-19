// 두 개의 빈 배열을 생성한다. 하나에는 사용자가 입력할 숫자 세 개를 담을 것이고, 다른 하나에는 다섯 개의 임의의 숫자를 담을 것이다.
// 두 개의 배열을 큰 배열 하나로 결합한다.
// 결합한 배열을 정렬하고 각 항목을 한 줄에 하나씩 출력하라.

import { question } from "readline-sync";

const array1 = new Array;
const array2 = new Array;


for (let i = 0; i < 3; i++) {
  array1[i] = Number(question(`정수를 입력하세요 (${i + 1}/3)..`));
}

for (let i = 0; i < 5; i++) {
  array2[i] = Math.floor(Math.random() * 50) + 1; // 1 ~ 50 사이의 랜덤한 숫자 넣기
}

console.log(array1);
console.log(array2);
let array3 = array1.concat(array2);
// console.log(array3.sort()); 그냥 이렇게 sort 했더니 앞에 숫자 하나만 보고 정렬됨.. (11, 13, 2, 23....)

console.log(array3.sort((a, b) => a - b));

for (const element of array3) {
  console.log(element);
}
