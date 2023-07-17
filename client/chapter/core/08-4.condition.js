/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress = 1;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
let receivedEmailAddress2 = emailAddress ?? 'user@company.io';

alert(receivedEmailAddress2);
// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.


/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환