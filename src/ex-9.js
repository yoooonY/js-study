// 사용자로부터 일수(날짜 수)를 입력 받아서 그 일수까지 몇 시간, 몇 분, 몇 초가 남았는지 출력하라.
import { question } from "readline-sync";

const price = question('계산서 총 금액..');
const people = question('인원 수...');

const result = price / people;
console.log('인당 지불해야 하는 금액은 ' + result + '원 입니다');