// 1과 5 사이의 숫자를 임의로 선택한다. 사용자에게 숫자를 선택하라고 요청한다. 
// 입력한 값이 맞으면 "Well done" 메시지를 출력하고, 
// 그렇지 않으면 선택한 숫자가 너무 높은지 아니면 너무 낮은지를 알려주고 다시 숫자를 입력하라고 한다.
// 다시 입력한 숫자가 맞으면 "Correct"라고 출력하고, 그렇지 않다면 "You lose"라고 출력하라.

import { question } from "readline-sync";

const num = [1, 2, 3, 4, 5];
const rnum = Number(Math.floor(Math.random() * num.length) + 1);
console.log(rnum); // 숫자 확인

const choice = Number(question('1부터 5사이의 숫자 중 선택하세요..'));

for (let i = 0; i < 1; i++) {
  if (choice === rnum) {
    console.log('Well done');
    break;
  } else if (choice < rnum) {
    console.log('입력한 숫자가 낮습니다.');
    const choice2 = Number(question('숫자를 다시 입력하세요. '));
    if (choice2 === rnum) {
      console.log('Correct');
      break;
    } else {
      console.log('You lose');
      break;
    }
  } else if (choice > rnum) {
    console.log('입력한 숫자가 높습니다.');
    const choice2 = Number(question('숫자를 다시 입력하세요. '));
    if (choice2 === rnum) {
      console.log('Correct');
      break;
    } else {
      console.log('You lose');
      break;
    }
  }
}
