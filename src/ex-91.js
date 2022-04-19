// 다섯 개의 숫자(이 숫자들 중 2개는 반복 되어야 함)를 담고 있는 배열을 생성한다.
// 사용자에게 배열 전체를 출력한다.
// 사용자에게 배열 속에 있는 숫자들 하나를 입력하라고 요청한 뒤,
// 입력한 숫자가 배열에 몇 개 있는지 메시지를 표시하라.

import { question } from "readline-sync";

const array = [1, 3, 46, 3, 46];
let cnt = 0;
console.log(array);

const ques = Number(question('배열에 있는 숫자 중 하나를 입력하세요..'));

let num = array.indexOf(ques);
while (num != -1) {
  cnt += 1;
  num = array.indexOf(ques, num + 1);
}

console.log(`해당 숫자는 배열 내 ${cnt}개 있습니다.`);
