// 사용자의 나이를 묻자. 만약 18세 이상이면 "You can vote"라는 메시지를 표시하라.
// 만약 17세라면 "You can learn to drive"2 는 메시지를 표시하라.
// 만약 16세 라면 "You can buy a lottery ticket"이라는 메시지를 표시하라.
// 만약 16세 미만이라면 "You can go Trick-or-Treating"이라는 메시지를 표시하라.
import { question } from "readline-sync";

const num1 = Number(question('몇살인가요?..(숫자만 입력)'));

if (num1 >= 18) {
  console.log('You can vote');
} else if (num1 === 17) {
  console.log('You can learn to drive');
} else if (num1 === 16) {
  console.log('You can buy a lottery ticket');
} else {
  console.log('You can go Tric-or-Treating');
}


