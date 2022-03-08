// 사용자에게 좋아하는 음식 네 개를 입력하도록 요청하고 그것들은 인덱스 번호 1부터 시작하는 객체에 저장한다.
// 인덱스 번호와 항목이 모두 표시되도록 객체를 출력한다.
// 사용자에게 제거하고 싶은 항목을 묻고 그것을 제거한다.
// 남아 있는 데이터를 정렬하고 객체를 다시 출력하라.

import { question } from "readline-sync";

const foods = new Array();

for (let i = 0; i < 4; i++) {
  foods[i + 1] = question(`좋아하는 음식을 입력하세요(${i + 1}/4)..`);
}

for (let [key, value] of Object.entries(foods)) {
  console.log(`인덱스 번호: ${key}, 항목: ${value}`);
}

const ques = question(
  '입력한 음식 중 제거하고 싶은 항목의 이름을 입력하세요..'
);

const remove = foods.indexOf(ques); // 입력한 과목의 인덱스 찾기
foods.splice(remove, 1); // 찾은 인덱스 위치의 1개 값 제거

for (let [key, value] of Object.entries(foods)) {
  console.log(`인덱스 번호: ${key}, 항목: ${value}`);
}

// 인덱스 번호와 항목을 모두 표시하는게 어려웠음