import Notiflix from 'notiflix';

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let intervalId = null;

btnStart.addEventListener('click', OnClickStart);
btnStop.addEventListener('click', OnClickStop);

function OnClickStart() {
    btnStart.disabled = true;
    btnStop.disabled = false;
    Notiflix.Notify.success(
        'Start',
        {
          timeout: 2000,
        },
      );

    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    
}

function OnClickStop() {
    btnStop.disabled = true;
    btnStart.disabled = false;
    Notiflix.Notify.failure(
        'Stop',
        {
          timeout: 2000,
        },
      );
     
    clearInterval(intervalId)
}

btnStop.disabled = true;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
