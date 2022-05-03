// 앞에서 생성한 Names.txt 파일을 이용하여 목록의 이름들을 출력한다
// 그 이름들 중 하나를 입력하라고 요청하고, 그 이름을 제외한 나머지 이름들을 Names2.txt라는 새로운 파일에 저장하라.
// 프로그램을 여러 번 실행하여 옵션들을 테스트하라.

import fs from 'node:fs';
import { question } from "readline-sync";

const read = fs.readFileSync('Names.txt', 'utf8');
console.log(read);

const select = question('위 리스트의 이름들 중 하나를 입력하세요..');
let newFile = '';

for (const element of read) {
  if (element !== select) {
    newFile += element;
    console.log(newFile);
  } // 문자열 하나하나 추가하고 있어서 찾을수가 없음..
}

fs.writeFileSync('Names2.txt', newFile, { encoding: 'utf8' });

const read2 = fs.readFileSync('Names2.txt', 'utf8');
console.log(read2);
