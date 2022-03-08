// 076번 프로그램을 수정하여 초대할 사람들의 이름이 배열에 모두 추가되면 전체 명단을 출력하고 배열에 있는 이름들 중 하나를 입력하라고 요청한다.
// 입력된 이름의 위치(인덱스)를 출력하고 그 사람을 정말로 파티에 초대할 것인지를 묻는다.
// 만약 "n"이라고 답하면 그 항목을 배열서 삭제하고 배열을 다시 출력한다.

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
    console.log(`현재까지 파티에 초대된 사람은 ${people} 입니다.`);
    break;
  }
}

const ques= question('초대된 사람들 중 한명을 입력하세요..');
let num = people.indexOf(ques);
console.log(`인덱스는 ${num}입니다.`);
// 인덱스가 -1일때 질문을 반복하고 싶은데..

const reques= question('입력한 사람을 정말로 파티에 초대할까요? (y/n)..');
if (reques === 'y' || reques === 'Y') {
  console.log(`현재까지 파티에 초대된 사람은 ${people} 입니다.`);
} else if (reques === 'n' || reques === 'N') {
  people.splice(people.indexOf(ques), 1);
  console.log(`현재까지 파티에 초대된 사람은 ${people} 입니다.`);
}
