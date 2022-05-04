'use strict';
const timer = (deadline) => {
  const timerDays = document.getElementById('timer-days');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 3600 / 24);
    let hourse = Math.floor((timeRemaining / 3600) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      days,
      hourse,
      minutes,
      seconds
    };
  };

  const updataClock = () => {
    let getTime = getTimeRemaining();

    getTime.days > 0 ? timerDays.textContent = getTime.days + ' дн' :
      timerDays.textContent = 0 + ' дн';
    getTime.hourse > 0 ? getTime.hourse < 10 ? timerHours.textContent = '0' + getTime.hourse :
      timerHours.textContent = getTime.hourse : timerHours.textContent = '00';
    getTime.minutes > 0 ? getTime.minutes < 10 ? timerMinutes.textContent = '0' + getTime.minutes :
      timerMinutes.textContent = getTime.minutes : timerMinutes.textContent = '00';
    getTime.seconds > 0 ? getTime.seconds < 10 ? timerSeconds.textContent = '0' + getTime.seconds :
      timerSeconds.textContent = getTime.seconds : timerSeconds.textContent = '00';
  };

  setInterval(() => {
    updataClock();
  }, 1000);
};

export default timer;