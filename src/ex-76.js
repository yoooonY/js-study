// 사용자에게 파티에 초대할 사람 3명의 이름을 입력하라고 요청하고 배열에 저장한다.
// 모든 이름이 입력되면 추가할 사람이 있는지 묻는다.
// 만약 그렇다면 "n"이라고 답할 때까지 이름을 추가하게 한다.
// "n"이라고 입력하면 파티에 초대한 사람이 몇 명인지 표시하라.

import { question } from "readline-sync";

const people = new Array();

for (let i = 0; i < 3; i++) {
  people[i] = question(`파티에 초대할 사람의 이름을 입력하세요(${i + 1}/3)..`);
}

console.log(people);

while (true) {
  const add = question('추가 하고싶은 사람이 있나요? (y/n)..');
  if (add === 'y' || add === 'Y') {
    const addname = question('추가로 초대할 사람의 이름을 입력하세요..');
    people.push(addname);
  } else if (add === 'n' || add === 'N') {
    console.log(`현재까지 파티에 초대된 사람은 ${people.length}명 입니다.`);
    break;
  }
}
