// 다음의 데이터를 저장할 csv 파일을 생성하고 그 이름을 'Books.csv' 라고 하라.

import fs from 'node:fs';

let data = 'Title, Author, Publication Date\n';
data += 'To Kill A Mockingbird, Harper Lee, 1960\n';
data += 'A Brief History of Time, Stephen Hawking, 1988\n';
data += 'The Great Gatsby, F. Scott Fitzgerald, 1922\n';
data += 'The Man Who Mistook His Wife for a Hat, Oliver Sacks, 1985\n';
data += 'Pride and Prejudice, Jane Austen, 1813';

fs.writeFile('books.csv', data, 'utf8', function (error) {
  if (error) {
    console.log('error');
  } else {
    console.log('파일 생성 완료');
  }
});
