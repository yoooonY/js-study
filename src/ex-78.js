// 네 개의 TV 프로그램 타이틀을 담은 배열을 생성하고 각 항목을 한 줄씩 출력한다.
// 사용자에게 다른 프로그램을 입력하도록 요청하고 배열에서의 원하는 위치를 묻는다.
// 입력한 프로그램 타이틀을 원하는 위치에 삽입하고 다섯 개 의 TV 프로그램 모두를 다시 출력한다.

import { question } from "readline-sync";

const TV = ['KBS', 'SBS', 'MBC', 'TVN'];

for (let i = 0; i < 4; i++) {
  console.log(TV[i]);
}

const add = question('추가 하고싶은 프로그램을 입력하세요..');
const num = question('몇번째에 추가할까요?..');

TV.splice(num, 0, add);
console.log(TV);
