/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

// let thisTime = DINNER;
let thisTime = LATE_NIGHT;
// let thisTime = DAWN;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
switch (thisTime) {
  case MORNING:
    globalThis.alert('뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    globalThis.alert('자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    globalThis.alert('동네 한바퀴를 조깅한다.');
    break;
  case NIGHT:
    break;
  case LATE_NIGHT:
  case DAWN:
    globalThis.alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

// 조건 유형(case): '점심'

// 조건 유형(case): '저녁'
//

// 조건 유형(case): '밤'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'

/* switch문 → if문 변환 --------------------------------------------------- */
if (thisTime == MORNING) globalThis.alert('뉴스 기사 글을 읽는다.');
else if (thisTime == LUNCH)
  globalThis.alert('자주 가는 식당에 가서 식사를 한다.');
else if (thisTime == DINNER) globalThis.alert('동네 한바퀴를 조깅한다.');
else if (thisTime == NIGHT)
  globalThis.alert('친구에게 전화를 걸어 수다를 떤다.');
else if (thisTime == LATE_NIGHT || thisTime == DAWN)
  globalThis.alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');

/* switch vs. if -------------------------------------------------------- */
