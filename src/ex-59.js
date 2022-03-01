// 다섯 개의 색상을 표시하고 그들 중 하나를 사용자에게 선택하라고 요청한다. 
// 만약 프로그램이 선택한 것과 동일하면 "Well done"이라고 출력하고, 
// 그렇지 않다면 컴퓨터가 선택한 색상이 포함된 위트 있는 문장을 출력하라. 
// 예: "I bet you are GREEN with envy" 또는 "You are probably feeling BLUE right now". 
// 다시 맞혀 보라고 사용자에게 색상을 입력하라고 한다. 사용자가 맞힐 때까지 이 작업을 반복한다.

import { question } from "readline-sync";

const color = ['green', 'blue', 'purple', 'white', 'black'];
const choice = Math.floor(Math.random() * color.length); // color에서 랜덤 인덱스 추출
const rcolor = color[choice]; // color에 있는 choice 자리의 문자열 추출
console.log(rcolor);

console.log(color);

while (true) {
  const answer = question('목록 중 하나의 색깔을 선택하세요.. ');
  if (rcolor === answer) {
    console.log('Well done');
    break;
  } else if (answer === 'green') {
    console.log(`I bet you are GREEN with envy`);
    continue;
  } else if (answer === 'blue') {
    console.log(`You are probably feeling BLUE right now`);
    continue;
  } else if (answer === 'purple') {
    console.log(`I be born to the PURPLE`);
    continue;
  } else if (answer === 'white') {
    console.log(`To wave a WHITE flag`);
    continue;
  } else if (answer === 'black') {
    console.log(`BLACK sheep of the family`);
    continue;
  } else {
    console.log('잘못 입력하셨습니다. ');
  }
}
