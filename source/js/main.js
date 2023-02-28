import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

const cards = document.querySelector('.cards');
const cardDecor = document.querySelector('.card-item__decor');

console.log(cards.clientHeight);

if (window.matchMedia('(min-width: 1020px)').matches) {
  cardDecor.style.height = cards.clientHeight + 52 + 'px';
}

addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 1020px)').matches) {
    cardDecor.style.height = cards.clientHeight + 52 + 'px';
  }
});
