// 50 미만의 숫자를 입력하도록 요청한다.
// 50부터 입력한 숫자까지 카운트 다운하면서 숫자를 출력하되, 입력한 숫자까지 출력 되도록 하라.

import { question } from "readline-sync";

let num = Number(question('50 미만의 숫자를 입력하세요..'));

for (let i = 50; i > num - 1; i--) {
  console.log(`${i}`);
}
