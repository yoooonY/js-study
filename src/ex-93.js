// 사용자에게 숫자 다섯 개를 입력하라고 요청한다.
// 입력된 숫자를 정렬하고 사용자에게 표시한다.
// 배열의 숫자들 중 하나를 고르라고 사용자에게 요청한다.
// 입력된 숫자를 배열에서 삭제하고 새로운 배열에 그 값을 저장하라

import { question } from "readline-sync";

const array1 = new Array;
const array2 = new Array;

for (let i = 0; i < 5; i++) {
  array1[i] = Number(question(`숫자를 입력하세요 (${i + 1}/5)..`));
}

console.log(array1.sort((a, b) => a - b));
const ques = Number(question('배열에 있는 숫자 중 하나를 입력하세요..'));

if (array1.includes(ques)) {
  array2.push(ques);
  array1.splice(array1.indexOf(ques), 1);

  console.log(`기존 배열: ${array1}`);
  console.log(`새로운 배열: ${array2}`);
} else {
  console.log('잘못 입력하셨습니다. 배열 내 숫자를 입력해주세요');
}
