// 사용자로부터 일수(날짜 수)를 입력 받아서 그 일수까지 몇 시간, 몇 분, 몇 초가 남았는지 출력하라.
import { question } from "readline-sync";

const day = Number(question('계산하고 싶은 일 수..'));
// console.log(`value: ${day}, type: ${typeof day}`);

const hour = day * 24;
const minute = hour * 60;
const second = minute * 60;

console.log(day + '일은 ' + hour + '시간/ ' + minute + '분/ ' + second + '초 남았습니다.');