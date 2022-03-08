// 다섯 개의 국가 이름을 담고 있는 배열을 만들고 배열 전체를 출력하라.
// 표시된 국가 이름들 중 하나를 입력하라고 사용자에게 요청하고,
// 입력된 국가 이름의 인덱스 번호(즉, 목록에서의 위치)를 출력하라.
// 사용자에게 숫자를 입력하라고 요청하고, 입력한 위치의 국가 이름이 출력되는 기능을 069번 프로그램에 추가하라.

import { question } from "readline-sync";

const contry = ['korea', 'japan', 'china', 'america', 'india'];
console.log(contry);

const ques = Number(question('숫자를 입력하세요(1~5)..'));

if (ques <= 5 && ques !== 0) {
  console.log(`해당 숫자 위치의 국가는 ${contry[ques - 1]} 입니다.`);
} else if (ques === 0 || ques > 5) {
  console.log('잘못 입력하셨습니다. ');
}
