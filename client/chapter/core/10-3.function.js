/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...args) => {
  
  // 화살표함수 사용예시
  // let total = 0;
  // args.forEach((item) => {
  //   total += item;
  // })
  // return total;
  
  // reduce 메소드 사용예시
  // return args.reduce(function(acc,item){return acc + item;}, 0)

  //reduce와 화살표함수를 동시사용 예시
  return args.reduce((acc,item)=>acc +item, 0)


};

const result = calcAllMoney(1,2,3,4);

console.log(result);



// 화살표 함수와 this


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow; 

// repeat(text: string, repeatCount: number): string;
// let repeat; 