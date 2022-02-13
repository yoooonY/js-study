// 사용자에게 좋아하는 색을 입력하라고 요청합니다. 만약 "red" "RED" 또는 "Red" 를 입력하면 'I like red too'라는 메시지를 출력하라. 그렇지 않다면 "I don't like that color, I prefer red"
import { question } from "readline-sync";

const num1 = String(question('좋아하는 색을 영어로 입력하세요..'));

if (num1 === 'red' || num1 === 'RED' || num1 === 'Red') {
  console.log("I like red too");
} else {
  console.log("I don't like that color, I prefer red");
}
