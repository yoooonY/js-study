// 사용자에게 숫자를 입력하라고 요청한다. 10에서 20 사이의 숫자를 입력한다면 배열에 저장한다.
// 다른 값이라면 "Outside the range"라는 메시지를 출력한다.
// 다섯 개의 숫자가 입력되었다면 "Thank you" 메시지를 출력하고 배열의 항목을 한 줄에 하나씩 출력하라

import { question } from "readline-sync";


const num = new Array();
// for (let i = 0; i === num.length; i++) {

while (true) {
  const ques = question(`숫자를 입력하세요..`);
  console.log(num.length);
  if (ques >= 10 && ques <= 20) {
    num.push(ques);
    console.log(`저장됨 ${num.length}`);
  } else if (num.length <= 5) {
    break;
  } else {
    console.log('Outside the range');
  }
}
