import { bindEvent, diceAnimation, getNode } from './lib/index.js';

const cube = getNode('#cube');
let flag = 0;

function handleRoll(e) {
  if (flag === 0) {
    setInterval(() => {
      diceAnimation();
    }, 1000);
  }
  flag = 1;
}

const buttonRoll = getNode('.buttonGroup');

bindEvent(buttonRoll.children[0], 'click', handleRoll);
