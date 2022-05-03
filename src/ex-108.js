// ‘Names.txt’ 파일을 연다. 사용자에게 새로운 이름을 입력하라고 요청한다.
// 입력된 이름을 파일의 끝에 추가하고(파일에 저장) 전체 파일을 출력하라.

import fs from 'node:fs';
import { question } from "readline-sync";

const newFile = 'Names.txt';
const text = '김\n이\n박\nYoon\nNa';

const dum = question('새로운 이름을 입력하세요..');
const newName = `\n${dum}`;

// fs.writeFile('Names.txt', add, { flag: 'a+' });
// fs.appendFile('Names.txt', newName, 'utf-8');
fs.appendFile('Names.txt', newName, 'utf8', err => {
  if (err) {
    console.error(err);
    return
  }
});

const read = fs.readFileSync('Names.txt', 'utf8');
console.log(read);
