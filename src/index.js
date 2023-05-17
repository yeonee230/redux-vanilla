const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

let count = 0;

number.innerHTML = count;

const changeText = () => {
  number.innerHTML = count;
};

const handlePlus = () => {
  count = count + 1;
  changeText();
};

const handleMinus = () => {
  count = count - 1;
  changeText();
};

plus.addEventListener('click', handlePlus);
minus.addEventListener('click', handleMinus);
