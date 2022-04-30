// 다섯 개의 숫자들을 가진 배열을 출력한다.
// 숫자들 중 하나를 고르라고 사용자에게 요청한다.
// 사용자가 숫자를 고르면 그 항목의 위치(인덱스)를 출력한다.
// 만약 사용자가 입력한 숫자가 배열 안에 없다면 올바른 숫자를 입력할 때까지 다시 요청하라.

import { question } from "readline-sync";

const array1 = new Array;
for (let i = 0; i < 5; i++) {
  array1[i] = Math.floor(Math.random() * 50) + 1; // 1 ~ 50 사이의 랜덤한 숫자 넣기
}

console.log(array1);

while (true) {
  const ques = Number(question('배열에 있는 숫자 중 하나를 입력하세요..'));
  if (array1.includes(ques)) {
    console.log(`해당 숫자의 위치는 ${array1.indexOf(ques) + 1} 번째 입니다`);
    break;
  } else {
    continue;
  }
}
