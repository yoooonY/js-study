// 정수들을 저장할 배열을 생성한다. 임의의 수 다섯 개를 생성하고 배열에 저장한다. 배열의 항목을 한 줄에 하나씩 출력하라.

let num = new Array();

for (let i = 0; i < 5; i++) {
  num[i] = Math.floor(Math.random() * 100) + 1; // 1 ~ 100 사이의 랜덤한 숫자 넣기
  console.log(num[i]);
}
