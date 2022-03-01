// 임의로 생성된 두 개의 정수를 더하는 다섯 개의 질문(즉, [숫자1] + [숫자2])이 나오는 수학 퀴즈를 만들자. 
// 사용자에게 답을 입력하라고 요청하고 정답을 맞히면 점수를 증가하라. 
// 퀴즈가 끝나면 다섯 문제 중에 몇 개를 맞혔는지 출력하라.

import { question } from "readline-sync";

let score = 0;

for (let i = 1; i < 6; i++) {
  let rnum1 = Math.floor(Math.random() * 100) + 1; // 1 ~ 100까지 랜덤선택
  let rnum2 = Math.floor(Math.random() * 100) + 1;
  let ques = Number(rnum1 + rnum2);
  console.log(`${i}번 문제) ${rnum1} + ${rnum2} = ??`);
  let answer = Number(question('정답을 입력하세요.. '));
  if (ques === answer) {
    score += 1;
    console.log(`정답입니다.\n현재 스코어는 ${score} 점 입니다.\n`);
    continue;
  } else if (ques !== answer) {
    console.log(`틀렸습니다.\n현재 스코어는 ${score} 점 입니다.\n`);
    continue;
  }
}

console.log(`총 5문제 중 ${score}개 맞추셨습니다. `);
