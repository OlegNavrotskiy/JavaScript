window.addEventListener('DOMContentLoaded', function() {

  'use strict';
  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

      function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
          tabContent[i].classList.remove('show');
          tabContent[i].classList.add('hide');
        }
      }
      hideTabContent(1);

      function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
          tabContent[b].classList.remove('hide');
          tabContent[b].classList.add('show');
        }
      }

      info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
          for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
              hideTabContent(0);
              showTabContent(i);
              break;
            }
          }
        }
      });
});

//timer.html
let clock = setTimeout(function timerRun() {
let date = new Date(),
    h = date.getHours().toString(),
    m = date.getMinutes().toString(),
    s = date.getSeconds().toString(),
    timer = document.querySelector('.timer');
    
function twoLetter(arg) {
    if (arg.length < 2) {
      arg = '0' + arg;
    } return arg;
  }
    timer.innerHTML = twoLetter(h) + ":" + twoLetter(m) + ":" + twoLetter(s);
    setTimeout(timerRun, 1000);
});