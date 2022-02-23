// 1부터 12 사이의 값을 입력하도록 요청한 뒤, 그 숫자에 대해 12까지의 곱셈표를 출력하라

import { question } from "readline-sync";

const num = Number(question('1부터 12 사이의 숫자를 입력하세요..'));

for (let i = 1; i < 13; i++) {
  const result = num * i;
  console.log(`${num} * ${i} = ${result} `);
}
