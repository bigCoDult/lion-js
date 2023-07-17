/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;
let cssObject = {
    position: 'fixed',
    zIndex: 10000,
    top: '50%',
    left: '50%',
    width: '60vw',
    maxWidth: '800px',
    height: '40vh',
    minHeight: '280px',
    transform: 'translate(-50%, -50%)',
  };

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap;


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'asdff@gmail.com',
  name: 'sang',
  isSignIn: true,
  permission: 'paid',
}


// 점(.) 표기법
console.log( authUser.name );
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
console.log( authUser['name']);
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.


// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel


function creatUser(){

}

const user1 = creatUser();
// 프로퍼티 포함 여부 확인

for(let key in user1){
  if (Object.prototype.hasOwnProperty.call(user1,key)){
    console.log(key);
  }
}

// 프로퍼티 나열

function getProp(obj1){
  if(typeof obj1 === 'object'){
    return Object.keys(obj1);
  }
}

const result1 = getProp(authUser);
// console.log(result1);

// 프로퍼티 제거 or 삭제 

function removeProperty(obj1, key){
  
  if(key === 'all'){
    for(let key of Object.keys(obj1) ){
      obj1[key] = null;
    }
    return console.log(Object.entries(obj1) );
  }
 
  if(typeof obj1 === 'object'){
    obj1[key] = null;
    return console.log(Object.entries(obj1) );
  }
}

// removeProperty(authUser, 'all');

function deleteProperty(obj1, key){
  
  if(key === 'all'){
    for(let key of Object.keys(obj1) ){
      delete obj1[key];
    }
    return console.log(Object.entries(obj1) );
  }
  
  if(typeof obj1 === 'object'){
    delete obj1.key;
    return console.log(Object.entries(obj1) );
  }
}

deleteProperty(authUser, 'all1');
// removeProperty(authUser, 'all');
// 단축 프로퍼티



// let name = '선범';
// let email = 'seonbeom2@euid.dev';
// let authorization = 'Lv. 99';
// let isLogin = true;


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

let color = ['red', 'blue', 'green'];
// let red = color[0];
// let blue = color[1];
// let green = color[1];
const [red, blue, green] = color;



/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  권: 50,
  이: 3000,
  강: 500,
  김: 700,
}

const {
  권:w,
  이,
  강,
  김
} = salaries;
// const 권 = salaries.권   이렇게 한것과 같다


function setElementCss(obj1){
  console.log(obj1);
  console.log(obj1.name);
}

setElementCss(authUser);