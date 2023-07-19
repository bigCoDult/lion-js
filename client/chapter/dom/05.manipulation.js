/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */

/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거

/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)

/* 특정 위치에 삽입 --------------------------------------------------------- */

// - insertAdjacentHTML
// - insertAdjacentElement
// - insertAdjacentText

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입

// console.log(attr('.first','id'))

const data = ['빨래하기', '게임하기', '유튜브 보기', '산책하기'];

const toDoList = data.map((item) => {
  return `<li>${item}</li>`;
});

const h1 = getNode('h1');
// h1.insertAdjacentHTML('beforebegin', toDoList);

const todo = getNode('.todo');
// todo.insertAdjacentHTML('afterbegin', toDoList);

toDoList.forEach((item) => {
  todo.insertAdjacentHTML('beforeEnd', item);
});

// const insertLast = (node, value) => {
//   // if (typeof node !== 'string') {
//   //   node = getNode(node);
//   // }
//   if (node.nodeType !== document.ELEMENT_NODE) {
//     throw new ReferenceError(
//       'insertLast 함수의 첫번째 인수는 element node 이어야 합니다'
//     );
//   }
//   node.insertAdjacentHTML('beforeEnd', value);
// };
// insertLast('.todo', 'text');
