// 37번 프로그램을 수정하여 숫자도 입력하도록 요청하자.
// 이름의 각 문자를 한 줄에 하나씩 출력하는 작업을 입력한 숫자만 큼 반복하라.

import { question } from "readline-sync";

const name = question('이름을 입력하세요..');
const num = question('숫자를 입력하세요..');

const length = name.length;
for (let j = 0; j < num; j++) {
  for (let i = 0; i < length; i++) {
    console.log(`${name.charAt(i)}`);
  }
}
