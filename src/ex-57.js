// 056번 프로그램을 업데이트하여 사용자가 입력한 숫자가 큰지 작은지를 알려주고 다시 숫자를 고르게 하라.

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
  } else if (choice < rnum) {
    console.log('입력한 숫자보다 높습니다. ');
    continue;
  } else if (choice > rnum) {
    console.log('입력한 숫자보다 낮습니다. ');
    continue;
  }
}
