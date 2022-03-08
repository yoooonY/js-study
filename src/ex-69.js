// 다섯 개의 국가 이름을 담고 있는 배열을 만들고 배열 전체를 출력하라.
// 표시된 국가 이름들 중 하나를 입력하라고 사용자에게 요청하고,
// 입력된 국가 이름의 인덱스 번호(즉, 목록에서의 위치)를 출력하라.

import { question } from "readline-sync";

const contry = ['korea', 'japan', 'china', 'america', 'india'];
console.log(contry);

const ques = question('위 목록 중 한개의 나라를 입력하세요..');
console.log(`해당 국가의 인덱스 번호는 ${contry.indexOf(ques)} 입니다.`);
