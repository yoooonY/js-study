// 사용자의 이름을 묻는다.
// 두 개의 수(1부터 100까지)를 입력 받아 두 수를 더하는 퀴즈를 만들어 출력하고 답을 입력받는다.
// 총 2개의 문제를 입력받고, 답을 맞추면 점수를 +1 한다.
// 사용자의 이름과 질문, 답변 그리고 최종 점수를 csv 파일에 저장한다. 
// 프로그램이 실행될 때마다 csv 파일에 추가되며 덮어쓰지 않는다.

import fs from 'node:fs';
import { question } from "readline-sync";


let score = 0;
let answer = '';
let quest = '';

const name = question('이름을 입력하세요..');

for (let i = 0; i < 2; i++) {
  const num1 = Number(question('첫 번째 숫자를 입력하세요 (1 ~ 100 사이)..'));
  const num2 = Number(question('두 번째 숫자를 입력하세요 (1 ~ 100 사이)..'));

  quest = `${num1} + ${num2}`;
  answer = num1 + num2;
  const userAns = Number(question(`${num1} + ${num2} = `));
  if (answer === userAns) {
    score += 1;
  } else {
    continue;
  }

  const save = `${name}, ${quest}, ${answer}, ${score}\n`;
  fs.appendFileSync('Score.csv', save, 'utf8');
}
