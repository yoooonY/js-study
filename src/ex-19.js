// 사용자에게 1이나 2 또는 3을 입력하라고 하자. 만약 1을 입력하면 "Thank you"라는 메시지를 표시하라.
// 만약 2를 입력하면 "well done"을 표시하라.
// 만약 3을 입력하면 "Correct"를 표시하라
// 만약 사용자가 다른 것을 입력하면 "Error message"를 표시하라.
import { question } from "readline-sync";

const num1 = Number(question('1 or 2 or 3 입력 ..'));

if (num1 === 1) {
  console.log('Thank you');
} else if (num1 === 2) {
  console.log('well done');
} else if (num1 === 3) {
  console.log('Correct');
} else {
  console.log('Error message');
}
