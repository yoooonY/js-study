// 사용자에게 숫자를 입력하라고 요청한 다음에 다른 숫자를 입력하라고 하자. 
// 두 숫자들을 더한 뒤, 또 다른 숫자를 더하고 싶은지 묻고 "y" 라고 입력하면 다른 숫자를 입력받아 더하고 
// 다시 같은 질문을 한다. "y"가 아닌 답을 하면 루프를 종료하고 총합을 출력하라.

import { question } from "readline-sync";
let sum = 0;

const num1 = Number(question('첫 번째 숫자를 입력하세요..'));
const num2 = Number(question('두 번째 숫자를 입력하세요..'));

sum = num1 + num2;

while (true) {
  const ques = question('또 다른 숫자를 더할까요?..(y/n)');
  if (ques === 'Y' || ques === 'y') {
    const num3 = Number(question('추가 숫자를 입력하세요..'));
    sum += num3;
  } else {
    break;
  }
}

console.log(`숫자를 더한 값은 ${sum} 입니다.`);
