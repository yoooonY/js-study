// 다섯 개의 과일 이름들의 목록에서 임의의 과일을 출력하라.

import { question } from "readline-sync";

// Math.random() 0~1 사이의 임의의 수 반환
// Mathfoor(Math.random() * 범위의 최대값)
// Math.floor(math.random()*6) + 1 // 1부터 6까지의 임의의 수 리턴

const fruits = ['사과', '바나나', '딸기', '귤', '수박'];
const choice = Math.floor(Math.random() * fruits.length); // fruits에서 랜덤 인덱스 추출
const rfruits = fruits[choice]; // fruits에 있는 choice 자리의 문자열 추출
console.log(rfruits);
