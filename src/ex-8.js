// 계산서의 총 가격과 몇 명이 같이 식사를 했는지 입력받는다. 총 가격을 인원수로 나누고 각 사람이 얼마씩 내야 하는지 출력하라.
import { question } from "readline-sync";

const price = question('계산서 총 금액..');
const people = question('인원 수...');

const result = price / people;
console.log('인당 지불해야 하는 금액은 ' + result + '원 입니다');