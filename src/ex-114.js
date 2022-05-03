// Books.csv 파일을 사용하며, 사용자에게 시작 년도와 끝 년도를 입력하라고 요청한다.
// 입력된 두 년도 사이에 출간된 모든 책을 출력하라.

import fs from 'node:fs';
import { question } from "readline-sync";

const startN = Number(question('시작 년도를 입력하세요..'));
const endN = Number(question('끝 년도를 입력하세요..'));

if (startN > endN) {
  console.log('잘못 입력하셨습니다.');
}

const read = fs.readFileSync('Books.csv', 'utf8').toString().split('\n');

const dum = [];
for (const elements of read) {
  const array = elements.toString().split(', ');
  if (array[2] >= startN && array[2] <= endN) {
    dum.push(array);
  }
}

if (dum.length === 0) {
  console.log('해당 년도에 출간된 책이 없습니다. ');
} else {
  for (const element of dum) {
    console.log(
      `검색한 년도 내에 출간된 책: ${element[0]}, 저자: ${element[1]}`
    );
  }
}

