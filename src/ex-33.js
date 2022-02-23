// 사용자로부터 숫자 두 개를 입력받는다.
// (나눗셈의) 몫 연산을 사용하여 첫 번째 숫자를 두 번째 숫자로 나누고 나머지도 계산하여 사용자가 읽을 수 있는 문장으로 결과를 출력하라.
// 예를 들어, 7 과 2를 입력했다면 "7 divided by 2 is 3 with 1 remaining"이라고 출력하자.

import { question } from "readline-sync";

const num1 = Number(question('첫 번째 숫자 입력..'));
const num2 = Number(question('두 번째 숫자 입력..'));

const result = parseInt(num1 / num2);
const remainder = num1 % num2;

console.log(`${num1} divided by ${num2} is ${result} with ${remainder} . `);
