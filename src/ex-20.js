// 사용자에게 이름을 요청하고 그 이름의 길이를 출력하라.

import { question } from "readline-sync";

const num1 = String(question('이름을 입력하세요..'));

console.log(`이름의 길이는 ${num1.length} 입니다.`);
