// 사용자의 이름(영어로)을 입력하라고 요청한 뒤, 그 이름 모음이 몇 개인지 출력하라.

import { question } from "readline-sync";

const ques = question('이름(영어)을 입력하세요..');
let count = 0;
for (let i = 0; i <= ques.length; i++) {
  if (
    ques[i] === 'a' ||
    ques[i] === 'e' ||
    ques[i] === 'i' ||
    ques[i] === 'o' ||
    ques[i] === 'u'
  ) {
    count += 1;
  } else {
    continue;
  }
}

console.log(`입력한 이름에서 모음은 ${count}개 입니다. `);
