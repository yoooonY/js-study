// 027번 프로그램을 업데이트하여 소수점 둘째 자리까지 출력하라.
import { question } from "readline-sync";

const num = Number(question('소수점 이하 자릿수가 많은 숫자 입력..'));
const num2 = num * 2;
console.log(`${num} * 2 = ${num2.toFixed(2)} (둘째 자리에서 반올림)`);

// Math.cell(); 소수점 > 정수로 올림해서 표현
// Math.floor(); 소수점 > 정수로 버림해서 표현
// Math.round(); 소수점 > 정수로 반올림해서 표현
