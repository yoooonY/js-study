// 사용자에게 숫자를 입력하라고 요청한다.
// 입력한 값이 5를 넘을 때까지 숫자를 입력하라고 요청하며,
// 5를 넘으면 "The last number you entered was a [숫자]"를 출력하고 프로그램을 종료하라.

import { question } from "readline-sync";

while (true) {
  let num = Number(question('숫자를 입력하세요..'));
  if (num < 5) {
    continue;
  } else {
    console.log(`The last number you entered was a ${num}`);
    break;
  }
}
