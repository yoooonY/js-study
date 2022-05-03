// Books.csv 파일의 데이터를 배열로 가져온다. 
// 사용자에게 배열을 표시하고, 배열의 어떤 행을 삭제하고 싶은지를 선택하라고 요청하여 선택한 행을 삭제 한다.
// 또한, 수정하고 싶은 데이터를 선택하라고 요청하고 선택한 행을 수정한다.
// 데이터를 원래의 csv 파일에 다시 써서 기존 데이터를 수정된 데이터로 덮어쓴다.

import fs from 'node:fs';
import { question } from "readline-sync";

const books = fs.readFileSync('Books.csv', 'utf8').toString().split('\n');

const keys = Object.keys(books);
for (let [i, key] of keys.entries()) {
  console.log(`${key}: ${books[key]}`);
}

const del = Number(question('삭제하고 싶은 행을 입력하세요..'));
books.splice(del, 1);

const reNum = Number(question('수정하고 싶은 행을 입력하세요..'));
const replace = question('수정할 내용을 입력해주세요 (제목, 저자, 출판연도)..');

books.splice(reNum, 1, replace);
console.log(books);

let dum = '';
for (const element of books) {
  dum += element + '\n';
}

fs.writeFileSync('Books2.csv', dum, 'utf8');
