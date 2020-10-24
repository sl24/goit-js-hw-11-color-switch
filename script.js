// массив цветов
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#3CB371',
  '#9ACD32',
  '#20B2AA',
  '#40E0D0',
  '#FF1493',
  '#FF4500',
  '#FF0000',
  '#FFFF00',
  '#EEE8AA',
  '#4682B4',
  '#00BFFF',
  '#00008B',
  '#FF00FF',
  '#8B008B', 
  '#6A5ACD',
  '#F4A460',
  '#A52A2A',
  '#D3D3D3',
  '#696969',
  '#2F4F4F',
];

let timerId = null;
const CHANGE_COLOR_TIME = 1000;

const refs = {
    body: document.querySelector('body'),
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
};

// Функция для генерации случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// вешаем слушателей событий на кнопки
refs.start.addEventListener('click', onStartBtnClick);
refs.stop.addEventListener('click', onStopBtnClick);

// фуункция при клике на кнопку Старт
function onStartBtnClick() {
    timerId = setInterval(changeBodyColor, CHANGE_COLOR_TIME);
    refs.start.disabled = true;
}

// фуункция при клике на кнопку Стоп
function onStopBtnClick() {
    clearTimeout(timerId);
    refs.start.disabled = false;
}

// функция добавления цвета на тело документа
function changeBodyColor() {
  refs.body.style.cssText = `background-color: ${newBodyColor()}`;
}

// функция выбора рандомного цвета из массива цветов
function newBodyColor() {
  const itemColor = randomIntegerFromInterval(0, colors.length - 1);
  return colors[itemColor];
}

