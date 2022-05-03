// 111번 프로그램에서 만든 Books.csv 파일을 사용한다.
// 사용자에게 다른 레코드를 입력하도록 요청하고 입력된 데이터를 파일의 끝에 추가한다.
// csv 파일의 각 행을 한 줄에 하나씩 출력하라.

import fs from 'node:fs';
import { question } from "readline-sync";

const Title = question('제목을 입력하세요..');
const Author = question('작가를 입력하세요..');
const Pdate = question('출판 날짜를 입력하세요..');

const newRecode = `\n${Title}, ${Author}, ${Pdate}`;

fs.appendFile('Books.csv', newRecode, 'utf8', err => {
  if (err) {
    console.error(err);
  }
});

const read = fs.readFileSync('Books.csv', 'utf8');
console.log(read);
