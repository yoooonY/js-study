// 교과목 여섯 개가 담긴 배열을 생성하라.
// 이들 중 사용자가 좋아하지 않는 과목을 묻고 그 과목을 배열에서 삭제한 후에 배열을 다시 출력하라.

import { question } from "readline-sync";

const subject = [
  'english',
  'math',
  'computer',
  'science',
  'korean language',
  'social studies',
];
console.log(subject);

const ques = question('위 과목 중 좋아하지 않는 과목은 뭔가요?..');
const remove = subject.indexOf(ques); // 입력한 과목의 인덱스 찾기

subject.splice(remove, 1); // 찾은 인덱스 위치의 1개 값 제거
console.log(subject);
