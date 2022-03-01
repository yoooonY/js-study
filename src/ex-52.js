// 1부터 100(포함) 사이의 임의의 정수를 출력하라..

// Math.random() 0~1 사이의 임의의 수 반환
// Mathfoor(Math.random() * 범위의 최대값)
// Math.floor(math.random()*6) + 1 // 1부터 6까지의 임의의 수 리턴

console.log(
  `1부터 100 사이의 임의의 수 ${Math.floor(Math.random() * 100) + 1}`
);
