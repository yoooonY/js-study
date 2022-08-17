const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h3");

function getClock() {
  const now = new Date();	// 현재 날짜 및 시간 (Wed Aug 17 2022 09:57:26 GMT+0900 (한국 표준시)
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const week = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];
  const days = week[now.getDay()];
  const hour = String(now.getHours()).padStart(2,"0"); // padStart() : 문자!!열의 시작을 다른 문자열로 채워줌 (number 안됨)
  const minutes = String(now.getMinutes()).padStart(2,"0");
  const seconds = String(now.getSeconds()).padStart(2,"0");
  clockTitle.innerText = `${year}/${month}/${date} ${days} ${hour}:${minutes}:${seconds}`;
}

function init() {
  getClock();
  setInterval(getClock, 1000); // 1초마다 실행
}

init();
