// 사용자에게 영어 단어를 입력하라고 요청한다. 처음 두 개의 문자만 대문자로 출력하라.

import { question } from "readline-sync";

const ques = question('영어 단어를 입력하세요..');

const result =
  ques[0].toUpperCase() + ques[1].toUpperCase() + ques.slice(2, ques.length);

console.log(result);
