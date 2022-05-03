// Books.csv 파일을 사용하며, 리스트에 몇 개의 레코드를 추가하고 싶은지 묻고 입력한 만큼 추가할 수 있도록 한다.
// 모든 데이터가 추가된 후에 사용자에게 검색할 저자의 이름을 입력하라고 요청하고, 
// 입력된 저자의 모든 책 정보를 출력한다.
// 만약 입력한 저자의 책이 하나도 없다면 그에 맞는 메시지를 출력하라.

import fs from 'node:fs';
import { question } from "readline-sync";

const num = Number(question('몇 개의 레코드를 추가할까요?..'));

for (let i = 0; i < num; i++) {
  const Title = question('제목을 입력하세요..');
  const Author = question('작가를 입력하세요..');
  const Pdate = question('연도를 입력하세요..');

  const newRecode = `\n${Title}, ${Author}, ${Pdate}`;
  fs.appendFileSync('Books.csv', newRecode, 'utf8');
}

const search = question('검색할 작가의 이름을 입력하세요..');

const read = fs.readFileSync('Books.csv', 'utf8').toString().split('\n');
console.log(read);

const dum = [];
for (const elements of read) {
  const array = elements.toString().split(', ');
  if (array[1].toLowerCase() === search.toLowerCase()) {
    dum.push(array);
  }
}

if (dum.length === 0) {
  console.log('저자 입력이 잘못되었습니다.');
} else {
  for (const element of dum) {
    console.log(`검색한 저자의 책: ${element[0]}`);
  }
}
