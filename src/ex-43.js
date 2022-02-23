// 사용자에게 원하는 카운트 방향(카운트 다운 또는 카운트 업)을 묻는다.
// 만약 업을 선택하면 가장 큰 숫자를 묻고 1부터 그 숫자까지 출력하라.
// 다운을 선택하면 20 미만의 숫자를 요청하고 20부터 그 숫자까지 출력하라.
// 업 또는 다운이 아닌 다른 것을 선택하면 "I don't understand"를 출력하라.
import { question } from "readline-sync";

const ques = question('카운트 다운? 업? (down/up)..');

if (ques === 'up' || ques === 'UP') {
  const num = question('가장 큰 숫자를 입력하세요..');
  for (let i = 1; i <= num; i++) {
    console.log(`${i}`);
  }
} else if (ques === 'down' || ques === 'DOWN'){
  const num = question('20 미만의 숫자를 입력하세요..');
  for (let i = 20; i > num-1; i--) {
    console.log(`${i}`);
  }
} else {
  console.log('I don\'t understand');
}
