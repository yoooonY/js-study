// 시 한 구절을 사용자에게 표시하고 시작 인덱스와 마지막 인덱스를 입력하도록 요청한다. 입력한 두 값 사이의 문자를 출력하라.

import { question } from "readline-sync";

const str = 'If you laugh, blessings will come your way.';
console.log(str);

const fst = Number(question('시작 인덱스 값을 입력하세요 (0부터)..'));
const lst = Number(question('마지막 인덱스 값을 입력하세요..')) + 1;

console.log(str.slice(fst, lst));
