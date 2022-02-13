// 두 개의 숫자를 입력받는다. 만약 첫 번째 숫자가 두 번째 숫자보다 크면, 두 번째 숫자를 출력하라. 그렇지 않다면 첫 번째 숫자를 출력한 다음에 두 번째 숫자를 출력하라
import { question } from "readline-sync";

const num1 = Number(question('첫번째 숫자 입력..'));
const num2 = Number(question('두번째 숫자 입력..'));

if (num1 > num2) {
  console.log(`두번째 숫자: ${num2}`);
} else {
  console.log(`첫번째 숫자: ${num1}`);
  console.log(`두번째 숫자: ${num2}`);
}
