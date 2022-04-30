// 네 명의 이름과 나이, 신발 사이즈를 입력하라고 요청한다.
// 입력된 이름들 중 하나를 입력하라고 요청하고 입력된 이름의 나이와 신발 사이즈를 출력하라.

import { question } from "readline-sync";

const array = {};

for (let i = 1; i < 5; i++) {
  const name = question('이름을 입력하세요..');
  const age = question('나이를 입력하세요..');
  const size = question('신발 사이즈를 입력하세요..');
  array[name] = { Age: age, Size: size };
  console.log(`${i}/4 명째 입력 완료`);
}

const ques = question('입력한 이름 중 하나를 입력하세요..');

console.log(array[ques]);
