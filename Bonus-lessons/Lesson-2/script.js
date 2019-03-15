let btnRus = document.querySelector('.popup__call-wrap'),
    blockSu = document.getElementsByClassName('popup__call-phone-hidden'),
    ar = document.querySelector('.popup__call-svg');

btnRus.addEventListener('click', function() {


  blockSu[0].style.visibility = 'visible';
  ar.style.transform = 'rotate(180deg)';

});

blockSu[0].addEventListener('click', function() {


  
});
