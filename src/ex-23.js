// 사용자에게 자장가의 첫 줄을 입력하라고 요청하고 그 문자열의 길이를 출력한다.
// 사용자에게 범위를 시작할 인덱스 번호를 묻고 범위의 끝 인덱스 번호를 묻는다.
// 그런 후에 그 범위의 텍스트를 출력하라.
// 자바스크립트에서 인덱스는 1이 아닌 0부터 시작한다는 것을 기억하자.

import { question } from "readline-sync";

const num1 = question('자장가의 첫 줄 입력..');
console.log(`길이는 ${num1.length}입니다.`);

const num2 = Number(question(`${num1.length} 이하 시작 숫자..`));
const num3 = Number(question(`${num1.length} 이하 끝 숫자..`));

console.log(`범위 내 텍스트는 ${num1.slice(num2 - 1, num3)}입니다.`);

