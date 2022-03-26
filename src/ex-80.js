// 사용자에게 이름을 입력하라고 요청하고 입력된 이름의 길이를 출력한다.
// 그런 다음, 성을 입력 하라고 요청하고 성의 길이를 출력한다
// 성과 이름 사이에 공백 하나를 두어 결합하고 그 결과를 출력한다.
// '마지막으로, 공백을 포함한 전체 이름의 길이를 출력하라.

import { question } from "readline-sync";

const fname = question('이름을 입력하세요..');
console.log(`이름의 길이는 ${fname.length} 입니다. `);

const lname = question('성을 입력하세요..');
console.log(`성의 길이는 ${lname.length} 입니다. `);

const name = lname + ' ' + fname;
console.log(`입력한 이름은 ${name} 입니다. `);
console.log(`공백을 포함한 이름의 길이는 ${name.length} 입니다.`);
