// 이전 프로그램을 변경하여 어떤 행을 출력할지 사용자에게 묻는다. 입력받은 행을 출력한다.
// 열을 선택하라고 요청하고 그 행에서의 해당 열을 출력한다.
// 그 값을 변경하고 싶은지 사용자에게 묻고, 그러길 원한다면 새로운 값을 입력받아 변경한다.
// 마지막으로 그 행 전체를 다시 출력하라.

import { question } from "readline-sync";

const array = [
  [2, 5, 8],
  [3, 7, 4],
  [1, 6, 9],
  [4, 2, 0],
];

console.log(array);

const row = Number(question('출력하고 싶은 행을 입력하세요(0 ~ 3)..'));
console.log(array[row]);

const col = Number(question('출력하고 싶은 열을 입력하세요(0 ~ 2)..'));
console.log(array[row][col]);

const ques = question('해당 값을 변경할까요? (Y/N)..');

if (ques === 'Y' || ques === 'y') {
  const re = Number(question('새로운 값을 입력하세요..'));
  array[row][col] = re;

  console.log(array[row]);
} else if (ques === 'N' || ques === 'n') {
  console.log(array[row]);
} else {
  console.log('잘못 입력하셨습니다.');
}
