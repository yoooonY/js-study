// 소수점 이하 두 자리가 있는 10과 100 사이의 숫자 다섯 개를 포함하는 배열을 생성한다.
// 사용자에게 2와 5 사이의 정수를 입력하도록 요청한다.
// 입력한 숫자가 범위에 없는 숫자라면 적절한 에러 메시지를 출력하고 다시 입력 하라고 한다.
// 배열에 있는 각 숫자를 사용자가 입력한 숫자로 나누고 소수점 둘째자리까지 표시하라.

import { question } from "readline-sync";

const array1 = new Array;
const array2 = new Array;
for (let i = 0; i < 5; i++) {
  array1[i] = (Math.random() * 90 + 10).toFixed(2); // 1 ~ 50 사이의 랜덤한 숫자 넣기
}

console.log(array1);

while (true) {
  const ques = Number(question('2와 5사이의 정수를 입력하세요..'));
  if (ques >= 2 && ques <= 5) {
    for (let i = 0; i < 5; i++) {
      array2[i] = (array1[i] / ques).toFixed(2);
    }

    break;
  } else {
    console.log('범위 밖의 숫자를 입력하셨습니다.');
    continue;
  }
}

console.log(array2);
