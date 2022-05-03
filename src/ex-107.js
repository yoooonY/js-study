// ‘Names.txt’ 파일을 열고 읽어서 데이터를 표시하라.

import fs from 'node:fs';

const newFile = 'Names.txt';
const text = '김\n이\n박\nYoon\nNa';

fs.writeFileSync(newFile, '\uFEFF' + text, { encoding: 'utf8' });

try {
  const read = fs.readFileSync('Names.txt', 'utf8');
  console.log(read);
} catch (error) {
  console.error(error);
}
