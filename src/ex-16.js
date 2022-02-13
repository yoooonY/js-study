// 사용자에게 지금 비가 오는지 묻고 그 대답을 소문자로 변환하여 대소문자 상관없도록 한다.
// 만약 "yes"라고 입력한다면 바람이 부는지 묻는다.
// 두번째 질문에 "yes"라고 입력하면 "it is too windy for an umbrella"라는 메시지를 표시하라
// 그렇지 않다면 "Take an umbrella"라는 메시지를 표시하라.
// 만약 첫번째 질문에 대해 "yes"라고 입력하지 않는다면 "Enjoy your day" 라는 메시지를 표시하라.
import { question } from "readline-sync";

let num1 = question('지금 비가 오나요? (yes/no)..');
num1 = num1.toLowerCase();

if (num1 === 'yes') {
  let num2 = question('바람은 불고 있나요? (yes/no)..');
  num2 = num2.toLowerCase();
  if (num2 === 'yes') {
    console.log('It is too windy for an umbrella');
  } else {
    console.log('Take an umbrella');
  }
} else {
  console.log('Enjoy your day');
}
