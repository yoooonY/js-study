// 사용자로부터 2개의 숫자를 입력 받아서 더한 결과를 다음과 같이 출력하라
// The total is [결과]
import { question } from "readline-sync";

const num1 = question('첫번째 숫자를 입력하세요...');
const num2 = question('두번째 숫자를 입력하세요...');
const sum = Number(num1) + Number(num2);
console.log('The total is ' + sum);