// 피그 라틴(Pig Latin)은 단어의 첫 자음을 가져와서 단어 끝으로 이동하고 마지막에 'ay'를 추가한다.
// 만약 단어가 모음으로 시작 한다면 단어의 끝에 그냥 'way'를 붙인다. 예를 들어, 'pig'라는 단어는 'igpay', 'banana'는 'ananabay', 그리고 'aadvark'는 'aadvarkway'가 된다.
// 사용자에게 단어를 입력받아서 피그 라틴으로 변환하고 소문자로 출력하는 프로그램을 만들어라.

import { question } from "readline-sync";

const word = String(question('단어를 입력하세요..'));
const Fword = word.charAt(0);

if (Fword === 'a' || Fword === 'e' || Fword === 'i' || Fword === 'o' || Fword === 'u') {
  console.log(word.toLowerCase() + 'way');
} else {
  console.log(word.slice(1) + Fword + 'ay');
}
