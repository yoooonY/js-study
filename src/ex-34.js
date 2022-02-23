/* 
다음과 같은 메시지를 표시한다.
1) Square
2) Triangle

Enter a number:
만약 사용자가 1을 입력하면 한 면의 길이를 요청하여 사각형의 넓이를 구하여 출력하라.
만약 2를 입력하면 밑변과 높이를 요청하여 삼각형의 넓이를 구하여 출력 하라.
다른 것을 입력하면 적절한 오류 메시지가 출력 되도록 한다.
*/

import { question } from "readline-sync";

const num = Number(question('1) Square\n2) Triangle\n\nEnter a number:'));

if (num === 1) {
  const length = Number(question('한 면의 길이를 입력하세요'));
  const Square = length * length;
  console.log(`사각형의 넓이는 ${Square} 입니다.`);
} else if (num === 2) {
  const base = Number(question('밑변을 입력하세요'));
  const height = Number(question('높이를 입력하세요'));
  const Triangle = base * height / 2;
  console.log(`삼각형의 넓이는 ${Triangle}입니다.`);
} else {
  console.log(`잘못 입력했습니다.`);
}
