//
var nye = new Date('01/01/2021 00:00 AM');

var second = 1000;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var timer;

function determineRemaining() {
  var today = new Date();
  var distance = nye - today;
  if (distance < 0) {
    clearInterval(timer);
    return;
  }

  var days = Math.floor(distance / day);
  var hours = Math.floor((distance % day) / hour);
  var minutes = Math.floor((distance % hour) / minute);
  var seconds = Math.floor((distance % minute) / second);

  return {
    days,
    hours,
    minutes,
    seconds
  }
}

function showRemaining() {
  var remaining = determineRemaining();

  document.querySelector('.days').innerHTML = remaining.days;
  document.querySelector('.hours').innerHTML = remaining.hours;
  document.querySelector('.minutes').innerHTML = remaining.minutes;
  document.querySelector('.seconds').innerHTML = remaining.seconds;
}

timer = setInterval(showRemaining, 1000);

var background = document.querySelector('body');
var tvScreen = document.querySelector('.tv-screen');
var getWeirdButton = document.querySelector('.get-weird-button');

getWeirdButton.addEventListener('click', changeBackground);
var counter = 0;

function changeBackground() {
  background.classList.toggle('glitter');
  tvScreen.classList.toggle('weird-gif');
  if (counter === 0) {
    getWeirdButton.innerHTML = 'Too much weird!';
    counter += 1;
  } else {
    getWeirdButton.innerHTML = "Let's Get Weird";
    counter = 0;
  }
}
