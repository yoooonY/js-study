// "10 green bottles" 노래(영국의 유명한 동요)를 이용하여 
// "There are [숫자] green bottles hanging on the wall, 
// [] green bottles hanging on the wall, and if 1 green bottle should accidentally fall"이라는 가사를 출력하고, 
// "how many green bottles will be hanging on the wall?"이라고 질문한다. 
// 만약 사용자가 맞히면 "There will be [숫자] green bottles hanging on the wall"이라는 메시지를 출력하고, 
// 틀리면 "No, try again" 메시지를 출력한 뒤 맞출 때까지 반복한다. 
// green bottle의 개수가 0이 되면 "There are no more green bottles hanging on the wall"이라는 메시지를 출력하고 종료한다

import { question } from "readline-sync";
let bottles = 10;

while (true) {
  console.log(`There are ${bottles} green bottles hanging on the wall,`);
  console.log(`There are ${bottles} green bottles hanging on the wall,`);
  console.log(`and if 1 green bottle should accidentally fall`);
  
  bottles -= 1;
  console.log(bottles); // 정답 보기위해 출력
  let num = Number(
    question(`how many green bottles will be hanging on the wall?.. `)
  );
  if (num === bottles && num > 0) {
    console.log(`There will be ${bottles} green bottles hanging on the wall\n`);
    continue;
  } else if (num !== bottles) {
    console.log(`No, try again\n`);
    bottles += 1;
    continue;
  } else if (bottles === 0) {
    console.log(`There are no more green bottles hanging on the wall`);
    break;
  } else {
    console.log(`잘못 입력했습니다. `);
    break;
  }
}
