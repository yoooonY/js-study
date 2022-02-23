// 사용자에게 원의 반지름(원의 중심점으로부터 끝까지의 길이)을 입력하도록 요청한다.
// 원의 넓이(π * 반지름의 2제곱)를 계산하여 출력하라
import { question } from "readline-sync";

const Radius = Number(question('원의 반지름 입력..'));
const Square = Math.PI * (Radius ** 2);
console.log(`원의 넓이는 ${Square.toFixed(2)} 입니다. `);
