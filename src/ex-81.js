// 가장 좋아하는 과목 이름을 입력받고 각 문자 뒤에 '-'를 붙여서 출력하라.

import { question } from "readline-sync";

const ques = question('가장 좋아하는 과목 이름을 입력하세요..');

// for (const que of ques) {
for (let i = 0; i < ques.length; i++) {
  process.stdout.write(ques[i] + '-'); // nodeJS 함수? 어쨌든 실행은됨..
}
