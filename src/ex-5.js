// 사용자로부터 3개의 숫자를 입력받는다. 첫번째 숫자와 두번째 숫자를 더한 값에 세번째 숫자를 곱한 결과를 다음과 같이 출력하라.
// The answer is [결과]
import { question } from "readline-sync";

const num1 = question('첫번째 숫자를 입력하세요...');
const num2 = question('두번째 숫자를 입력하세요...');
const num3 = question('세번째 숫자를 입력하세요...');
const sum = Number(num1) + Number(num2);
const result = sum * num3;
console.log('The answer is ' + result);