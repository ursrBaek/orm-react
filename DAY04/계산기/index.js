const $container = document.getElementById('container');
const $input = document.getElementById('input');

let value = '0';
let prevNum = '';
let calcKey = '';
let isCalcKeyClicked = false;
let isEqualKeyClicked = false;

const initialState = () => {
  value = '0';
  prevNum = '';
  calcKey = '';
  isCalcKeyClicked = false;
  isEqualKeyClicked = false;
};

const renderInputValue = () => {
  $input.value = value;
};

const inputCalc = (pressedKey) => {
  if (isCalcKeyClicked) {
    setCalc(pressedKey);
  } else if (isEqualClicked) {
    setIsEqualClicked(false);
    setPrevNum(value);
    setCalc(pressedKey);
  } else if (!calc && prevNum === '') {
    setPrevNum(value);
    setCalc(pressedKey);
  } else {
    setCalc((prevCalc) => {
      setValue((prevValue) => {
        const calcValue = calculate(+prevNum, +prevValue, prevCalc);
        setPrevNum(calcValue);
        if (calcValue.includes('.')) {
          setIsPointClicked(true);
        } else {
          setIsPointClicked(false);
        }
        return calcValue;
      });
      return pressedKey;
    });
  }

  setIsCalcClicked(true);
};

const clickCalculator = (e) => {
  const target = e.target;

  const numberClicked = target.className.includes('number');
  const calcClicked = target.className.includes('calc');
  const equalClicked = target.className.includes('equal');
  const clearClicked = target.className.includes('clear');

  const clickedKey = target.textContent;

  if (numberClicked) {
    if (isCalcKeyClicked || value === '0') {
      value = clickedKey;
      isCalcKeyClicked = false;
    } else {
      value = value + clickedKey;
    }
  } else if (calcClicked) {
    inputCalc(clickedKey);
  } else if (equalClicked) {
    inputEqual();
  } else if (clearClicked) {
    initialState();
  }

  renderInputValue();
};

$container.onclick = clickCalculator;
