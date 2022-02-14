// 사용자에게 아무 단어나 입력하라고 하고 그것을 대문자로 출력하라.

import { question } from "readline-sync";

const dum = String(question('아무 단어를 입력하세요..'));


console.log(`이름은 ${dum.toUpperCase()}입니다.`);
