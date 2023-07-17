/* --------------- */
/* While Loop      */
/* --------------- */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);
let repeat = 0;
while(repeat < 10){
  console.log(repeat);
  repeat++;
}

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

let z1 = performance.now();

let repeat2 = 7;

while(repeat2 > 0){
  repeat2--;
  console.log(frontEndDev[repeat2]);
}

let z2 = performance.now();
console.log(z2-z1);



// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환

let loopTimes = prompt('loopTimes?');
let  dev2 = [...frontEndDev];

// do {
// console.log(dev2.pop(dev2.length));
// repeat--;

// if(loopTimes < 0){
//   console.log('최초실행, 부적절한 횟수');
// }
// } while (loopTimes)



