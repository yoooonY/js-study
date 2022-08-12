/* eslint-env browser */

const toDoForm = document.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDos = document.querySelector(".toDos");

const TODOLIST = "toDoList";
let toDoList = [];

function saveToDoList() {
  localStorage.setItem(TODOLIST, JSON.stringify(toDoList));
  // SetItem(키 이름, 키값). 키를 스토리지에 추가하며, 이미 있다면 업데이트 함.
  // JSON.stringify. 값이나 객체를 JSON 문자열로 변환
  console.log(TODOLIST);
  console.log(toDoList);
}

function saveToDo(toDo) {
  const toDoObj = {
    text: toDo,
    id: toDoList.length + 1,
  };
  toDoList.push(toDoObj);
  saveToDoList();
}

function delToDo(event) {
  const { target: button } = event;
  const li = button.parentNode;
  toDos.removeChild(li);
  toDoList = toDoList.filter((toDo) => toDo.id !== Number(li.id));
  saveToDoList();
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delButton = document.createElement("button");
  delButton.innerText = "Del";
  delButton.addEventListener("click", delToDo);
  span.innerHTML = toDo;
  li.appendChild(span);
  li.appendChild(delButton);
  li.id = toDoList.length + 1;
  toDos.appendChild(li);
}

function createToDo(event) {
  event.preventDefault(); // submit 해도 창이 새로고침되지 않도록 
  const toDo = toDoInput.value;
  paintToDo(toDo);
  saveToDo(toDo);
  toDoInput.value = "";
}

function loadToDoList() {
  const loadedToDoList = localStorage.getItem(TODOLIST);
  if (loadedToDoList !== null) {
    const parsedToDoList = JSON.parse(loadedToDoList);
    for (let toDo of parsedToDoList) {
      const { text } = toDo;
      paintToDo(text);
      saveToDo(text);
    }
  }
}

function init() {
  loadToDoList(); // 이전에 저장해놓은 리스트 localStorage에서 불러오기
  toDoForm.addEventListener("submit", createToDo);
  // Submit 이벤트가 발생하면 creteTodo 함수가 실행됨.
}

init();
