// 다섯 개의 정수를 입력받아 배열에 저장한다. 정렬을 한 후 역순으로 표시하라.

import { question } from "readline-sync";

const num = new Array();

for (let i = 0; i < 5; i++) {
  num[i] = question(`정수를 입력하세요 (${i + 1}/5)..`);
}

console.log(num.reverse());
