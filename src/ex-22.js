// 사용자에게 이름과 성을 소문자로 입력하라고 요청한다.
// 각 첫 문자만 대문자로 변경하고 이름과 성 사이에 공백을 하나 두어 결합한 후에 그 결과를 출력하라.

import { question } from "readline-sync";

const fname = question('이름을 소문자로 입력하세요..');
const lname = question('성을 소문자로 입력하세요..');
const fname1 = fname.charAt(0).toUpperCase() + fname.slice(1);
const lname1 = lname.charAt(0).toUpperCase() + lname.slice(1);

const dum = fname1 + ' ' + lname1;

console.log(`이름은 ${dum}입니다.`);
