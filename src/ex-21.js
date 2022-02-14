// 사용자에게 이름을 묻고 그 다음으로 성을 묻는다.
// 이름과 성 사이에 공백 하나를 두어 출력하고
// 공백을 포함한 전체 이름의 길이를 출력하라.

import { question } from "readline-sync";

const fname = question('이름을 입력하세요..');
const lname = question('성을 입력하세요..');
const dum = fname + ' ' + lname

console.log(`이름은 ${dum}이고, 길이는 ${dum.length} 입니다.`);
