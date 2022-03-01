// 1과 10 사이의 정수를 임의로 선택한다. 
// 사용자에게 숫자를 입력하라고 요청하고 임의로 선택한 숫자를 입력할 때까지 계속 숫자를 입력하게 하라.

import { question } from "readline-sync";
/*
Let num = [];
for (let i = 1; i < 11; i++) {
  num.push(i);
}
배열 1부터 10까지 생성
*/

const rnum = Math.floor(Math.random() * 10) + 1; // 1 ~ 10까지 랜덤선택
console.log(rnum); // 숫자 확인

while (true) {
  const choice = Number(question('1부터 10사이의 숫자 중 정답을 맞추세요..'));
  if (choice === rnum) {
    console.log('숫자를 맞추셨습니다. ');
    break;
  } else if (choice !== rnum) {
    console.log('틀렸습니다..');
    continue;
  }
}
