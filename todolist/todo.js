/* eslint-env browser */
// https://gobae.tistory.com/18?category=942666
// https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector
const toDoForm = document.querySelector('.toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDos = document.querySelector('.toDos');
const clock = document.querySelector('clock');
const addTodoButton = document.querySelector('.addBtn');
const todoItem = document.querySelector('.li');

const TODOLIST = 'toDoList'; // 추가
let toDoList = []; // 추가

function loadToDoList() {
  const loadedToDoList = localStorage.getItem(TODOLIST);
  if (loadedToDoList !== null) { // 항상 실행됨
    const parsedToDoList = JSON.parse(loadedToDoList); // string으로 저장되어있는 value를 다시 object로 형 변환
    for (const toDo of parsedToDoList) {
      // parsedToDoList에 들어있는 데이터를 toDo에 넣어줌 (paintToDo(toDo.text);)
      const { text } = toDo; // Const text = toDo;
      paintToDo(text);
      saveToDo(text);
    }
  }
}

function init() {
  loadToDoList(); // 추가
  // https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener
  // https://developer.mozilla.org/ko/docs/Web/Events
  toDoForm.addEventListener('submit', createToDo);
  addTodoButton.addEventListener('click', createToDo);
  toDos.addEventListener('click', completeTodo);
}

init();

function saveToDo(toDo) {
  const toDoObject = {
    // toDoList 안에 넣을 정보 (튜플 형태로 저장)
    text: toDo,
    id: toDoList.length + 1,
  };
  toDoList.push(toDoObject);
  localStorage.setItem(TODOLIST, JSON.stringify(toDoList));
}

function createToDo(event) {
  event.preventDefault(); // submit 해도 창이 새로고침되지 않도록
  const toDo = toDoInput.value; // input에 입력된 값을 toDo로 선언
  if (toDoInput.value.length === 0) {
    // 입력값이 없으면 저장하지 않음
    toDoInput.focus();
  } else {
    paintToDo(toDo);
    saveToDo(toDo);
    toDoInput.value = '';
  }
}

function paintToDo(toDo) { // 화면에 toDo를 보여주기 위함
  const li = document.createElement('li');
  const span = document.createElement('span');
  const delButton = document.createElement('span');
  delButton.textContent = 'X';
  delButton.classList.add('close');
  delButton.addEventListener('click', delToDo);
  span.innerHTML = toDo; // input으로 받은 값을 span 태그에 넣어줌
  li.append(span); // span을 li에 추가
  li.append(delButton); // delbutton을 li에 추가
  li.id = toDoList.length + 1; // li 태그 삭제할 때, 구분하기 위해 id 부여
  // li.addEventListener('click', function() {completeTodo(li.id)})
  toDos.append(li);
}

function delToDo(event) {
  const { target: button } = event; // Const button = event.target;
  const li = button.parentNode; // ParentNode메서드는 해당 HTML 태그의 부모 태그를 반환한다.
  li.remove();
  toDoList = toDoList.filter((toDo) => toDo.id !== Number(li.id)); // Function (toDo) { return toDo.id !== li.id;}
  localStorage.setItem(TODOLIST, JSON.stringify(toDoList));
}

function completeTodo(event) {
  const target = (event.target.nodeName == "LI") ? event.target : event.target.parentNode;
  if (target.classList.contains('checked')) {
    target.classList.remove('checked');
  } else {
    target.classList.add('checked');
  }
}

// 아래는 항목 지울 때 에러 발생
// function completeTodo(id) {
//   const item = document.getElementById(id);
//   if (item.classList.contains('checked')) {
//     item.classList.remove('checked');
//   } else {
//     item.classList.add('checked');
//   }
// }
