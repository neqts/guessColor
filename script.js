const value = document.querySelector('.rgbInfo');
const win = document.querySelector('.win');
const info = document.querySelector('.info');
const colors = document.getElementsByClassName('colors');
const colorOne = document.querySelector('.colorOne');
const colorTwo = document.querySelector('.colorTwo');
const colorThree = document.querySelector('.colorThree');
const colorFour = document.querySelector('.colorFour');
const colorFive = document.querySelector('.colorFive');
const colorSix = document.querySelector('.colorSix');
const arr = [];
const pick = [colorOne, colorTwo, colorThree, colorFour, colorFive, colorSix];
let x = 1;

const random = function () {
  for (i = 0; i <= 20; i++) {
    arr.push(Math.floor(Math.random(x) * 255));
    arr.toString;
  }
};
random();

value.innerHTML = `${arr[0]}, ${arr[1]}, ${arr[2]}`;
colorOne.style.background = `rgb(${arr[17]},${arr[18]},${arr[19]})`;
colorTwo.style.background = `rgb(${arr[3]},${arr[4]},${arr[5]})`;
colorThree.style.background = `rgb(${arr[5]},${arr[6]},${arr[7]})`;
colorFour.style.background = `rgb(${arr[8]},${arr[9]},${arr[10]})`;
colorFive.style.background = `rgb(${arr[11]},${arr[12]},${arr[13]})`;
colorSix.style.background = `rgb(${arr[14]},${arr[15]},${arr[16]})`;

pick[
  Math.floor(Math.random(x) * pick.length)
].style.background = `rgb(${value.innerHTML})`;

function cache_clear() {
  window.location.reload(true);
}

const correct = function () {
  if (colorOne.style.background === `rgb(${value.innerHTML})`) {
    win.innerHTML = 'CORRECT! :)';
    info.style.background = 'rgb(0, 150, 6)';
    setInterval(function () {
      cache_clear();
    }, 1500);
  } else {
    win.innerHTML = 'WRONG :(';
    info.style.background = ' rgb(255, 0, 0)';
    setInterval(function () {
      cache_clear();
    }, 1500);
  }
};
const correct2 = function () {
  if (colorTwo.style.background === `rgb(${value.innerHTML})`) {
    win.innerHTML = 'CORRECT! :)';
    info.style.background = 'rgb(0, 150, 6)';
    setInterval(function () {
      cache_clear();
    }, 1500);
  } else {
    win.innerHTML = 'WRONG :(';
    info.style.background = ' rgb(255, 0, 0)';
    setInterval(function () {
      cache_clear();
    }, 1500);
  }
};
const correct3 = function () {
  if (colorThree.style.background === `rgb(${value.innerHTML})`) {
    win.innerHTML = 'CORRECT! :)';
    info.style.background = 'rgb(0, 150, 6)';
    setInterval(function () {
      cache_clear();
    }, 1500);
  } else {
    win.innerHTML = 'WRONG :(';
    info.style.background = ' rgb(255, 0, 0)';
    setInterval(function () {
      cache_clear();
    }, 1500);
  }
};
const correct4 = function () {
  if (colorFour.style.background === `rgb(${value.innerHTML})`) {
    win.innerHTML = 'CORRECT! :)';
    info.style.background = 'rgb(0, 150, 6)';
    setInterval(function () {
      cache_clear();
    }, 1500);
  } else {
    win.innerHTML = 'WRONG :(';
    info.style.background = ' rgb(255, 0, 0)';
    setInterval(function () {
      cache_clear();
    }, 1500);
  }
};
const correct5 = function () {
  if (colorFive.style.background === `rgb(${value.innerHTML})`) {
    win.innerHTML = 'CORRECT! :)';
    info.style.background = 'rgb(0, 150, 6)';
    setInterval(function () {
      cache_clear();
    }, 1500);
  } else {
    win.innerHTML = 'WRONG :(';
    info.style.background = ' rgb(255, 0, 0)';
    setInterval(function () {
      cache_clear();
    }, 1500);
  }
};
const correct6 = function () {
  if (colorSix.style.background === `rgb(${value.innerHTML})`) {
    win.innerHTML = 'CORRECT! :)';
    info.style.background = 'rgb(0, 150, 6)';
    setInterval(function () {
      cache_clear();
    }, 1500);
  } else {
    win.innerHTML = 'WRONG :(';
    info.style.background = ' rgb(255, 0, 0)';
    setInterval(function () {
      cache_clear();
    }, 1500);
  }
};

colorOne.addEventListener('click', correct);
colorTwo.addEventListener('click', correct2);
colorThree.addEventListener('click', correct3);
colorFour.addEventListener('click', correct4);
colorFive.addEventListener('click', correct5);
colorSix.addEventListener('click', correct6);
