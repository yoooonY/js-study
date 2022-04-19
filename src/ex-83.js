// 사용자에게 대문자로 메시지를 입력하라고 요청한다. 만약 메시지에 소문자가 있다면 모두 대문자로 입력할 때까지 계속해서 다시 입력하라고 요청한다.

import { question } from "readline-sync";

while (true) {
  const ques = question('대문자로 메시지를 입력하세요..');
  if (ques === ques.toLowerCase || ques !== ques.toUpperCase()) {
    // Ques !== ques.toUpperCase() 만 썼더니 빨간줄..
    continue;
  } else {
    console.log('대문자');
    break;
  }
}
