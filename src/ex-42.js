// total이라는 이름의 변수에 0을 설정하고 숫자를 입력하라는 요청을 다섯 번 반복한다.
// 숫자를 입력할 때마다 입력한 값을 total에 더할 것인지를 묻는다.
// 더하길 원한다는 답을 하면 total에 그 값을 더하고, 그렇지 않다면 더하지 않는다.
// 다섯 개의 숫자가 모두 입력되면 total을 출력하라.
import { question } from "readline-sync";

let total = 0;

for (let i = 0; i < 5; i++) {
  let num = Number(question('숫자를 입력하세요..'));
  let ques = question('숫자를 더할까요? (Y/N)..');
  if (ques === 'Y' || ques === 'y') {
    total += num;
  } else if (ques === 'N' || ques === 'n') {
    continue;
  } 
}
console.log(`숫자를 더한 값은 ${total} 입니다.`);
