/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

function nomalIsArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}
function normalIsNull(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
  );
}

const isArray = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';

const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

/* 요소 순환 ---------------------------- */

// forEach
const arr = [10,100,1000,10000];

const people = [
  {
    id:0,
    name:'김다연',
    profession:'프론트엔드 개발자',
    age:25,
    imageSrc:'MAksd23',
  },
  {
    id:1,
    name:'이현주',
    profession:'수영선수',
    age:40,
    imageSrc:'afdfakA',
  },
  {
    id:2,
    name:'김희소',
    profession:'물음표살인마',
    age:30,
    imageSrc:'fAKqi321',
  },
  {
    id:3,
    name:'김규민',
    profession:'래퍼',
    age:52,
    imageSrc:'AFGq3d23',
  },
  {
    id:4,
    name:'전진승',
    profession:'드라마평론가',
    age:18,
    imageSrc:'fQa15f3',
  },
]
/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed
// toSpliced
// map

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join
