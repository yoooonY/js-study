// 사용자에게 이름을 입력하라고 요청한다. 
// 만약 이름의 길이가 5자 미만이면 성을 입력하라고 요청하고 중간 공백 없이 이름과 성을 결합하고 대문자로 출력 하라. 
// 만약 이름의 길이가 5자 이상이면 이름을 소문 자로 출력하라.

import { question } from "readline-sync";

const num1 = question('이름을 입력하세요..');
if (num1.length < 5 ) {
  const lname = question('성을 입력하세요..');
  console.log(`${num1.toUpperCase() + lname.toUpperCase()}`);
} else if (num1.length >= 5) {
  console.log(`${num1.toLowerCase()}`);
}
