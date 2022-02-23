// 사용자로부터 100이 넘는 숫자를 입력받고 10 미만의 숫자 하나를 입력받은 후, 
// 작은 숫자가 큰 숫자 안에 몇번 들어가는지 사용자 친화적인 형식으로 출력하라.
import { question } from "readline-sync";

const big = Number(question('100이상 숫자 입력..'));
const small = Number(question('10미만 숫자 입력..'));
// console.log(`value: ${day}, type: ${typeof day}`);

const num = big / small;
// const num = Math.floor(big / small); // 소수점 버리기
console.log(small + '은 ' + big + '에 ' + num + '번 들어갈 수 있습니다.');
