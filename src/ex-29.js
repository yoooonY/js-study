// 사용자에게 500 이상의 정수를 입력하라고 요청한다.
// 입력받은 숫자의 제곱근을 구하고 소수점 둘째자리까지 출력하라.
import { question } from "readline-sync";

const num = Number(question('500 이상의 정수 입력..'));
const num2 = Math.sqrt(num);
console.log(`${num}의 제곱근은 ${num2.toFixed(2)} 입니다. `);

// Math.sqrt(); 제곱근 반환. x가 음수라면 NaN을 반환함
