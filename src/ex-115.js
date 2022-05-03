// Books.csv 파일을 사용하여 각 행 번호와 그에 대한 데이터를 출력하라.

import fs from 'node:fs';

const books = fs.readFileSync('Books.csv', 'utf8').toString().split('\n');

const keys = Object.keys(books);
for (let [i, key] of keys.entries()) {
  console.log(`${key}: ${books[key]}`);
}
