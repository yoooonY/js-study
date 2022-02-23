// 원기둥의 반지름과 깊이를 입력하도록 요청한다.
// 원기둥의 부피(원 넓이 * 깊이)를 구하고 결과를 반 올림하여 소수점 세째 자리까지 출력하라.

import { question } from "readline-sync";

const Radius = Number(question('원기둥의 반지름 입력..'));
const height = Number(question('원기둥의 깊이 입력..'));

const Square = Math.PI * Radius ** 2;
const Volume = Square * height;

console.log(`원기둥의 부피는 ${Volume.toFixed(3)} 입니다. `);
