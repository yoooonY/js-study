// compnum이라는 이름의 변수를 생성하고 50을 설정한다.
// 사용자에게 숫자를 입력하라고 요청하고 입력한 값이 compnum과 동일하지 않다면 
// 입력한 값이 높은지 낮은지를 알려주고 다시 맞춰보라고 묻는다. 
// 만약 compnum의 값과 일치하면 "Well done, you took [카운트] attempts"라는 메시지를 출력하라.

import { question } from "readline-sync";
const compnum = Number(50);


while (true) {
  const num = Number(question('숫자를 입력하세요..'));
  if (compnum < num) {
    console.log(`숫자가 너무 높습니다.`);
  } else if (compnum > num) {
    console.log(`숫자가 너무 낮습니다.`);
  } else if (compnum === num) {
    console.log(`Well done, you took ${compnum} attempts.`);
    break;
  } else {
    console.log(`잘못 입력했습니다. `);
    break;
  }
}
