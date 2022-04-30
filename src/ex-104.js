// 네 명의 이름과 나이 그리고 신발 사이즈를 입력받은 후, 목록에서 제거하고 싶은 사람의 이름을 입력하라고 한다.
// 입력된 이름의 데이터를 삭제하고 나머지 데이터를 한 줄에 하나씩 출력하라.

import { question } from "readline-sync";

const array = {};

for (let i = 1; i < 5; i++) {
  const name = question('이름을 입력하세요..');
  const age = question('나이를 입력하세요..');
  const size = question('신발 사이즈를 입력하세요..');
  array[name] = { Age: age, Size: size };
  console.log(`${i}/4 명째 입력 완료`);
}

const del = question('위 이름 중 제거하고 싶은 사람의 이름을 입력하세요..');
delete array[del];

for (const key of Object.keys(array)) {
  console.log(
    `이름: ${key}, 나이: ${array[key].Age}, 신발 사이즈: ${array[key].Size}`
  );
}
