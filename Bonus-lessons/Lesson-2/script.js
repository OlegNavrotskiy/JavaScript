let btnRus = document.getElementsByClassName('popup__call-wrap'),
    btnSu = document.getElementsByClassName('popup__call-wrap'),
    hidBlock = document.getElementsByClassName('popup__call-phone'),
    block = document.getElementsByClassName('popup__call-phone'),
    ar = document.getElementsByClassName('popup__call-svg'),
    allBlock = document.querySelector('.popup__call-phoneblock'),
    visible = false,
    rus = true,
    bel = false,
    rusHid = false;

btnRus[0].addEventListener('click', function() {

    if (visible) {
        hidBlock[1].style.visibility = 'hidden';
        ar[0].style.transform = 'rotate(0deg)';
        visible = false;
    } else {
      hidBlock[1].style.visibility = 'visible';
      ar[0].style.transform = 'rotate(180deg)';
      visible = true;
      rusHid = false;
      btnSu[1].style.pointerEvents = 'none';
    }

});

btnSu[1].addEventListener('click', function() {
  if (!rus && !rusHid) {
hidBlock[1].style.visibility = 'visible';
ar[0].style.transform = 'rotate(180deg)';
rusHid = true;
btnSu[1].style.pointerEvents = 'none';
  } else {
    hidBlock[1].style.visibility = 'hidden';
    ar[0].style.transform = 'rotate(0deg)';
    rusHid = false;
    visible = false;

  }
});



hidBlock[1].addEventListener('click', function() {
  
if (rus) {
  allBlock.insertBefore(hidBlock[1], block[0]);
  hidBlock[0].classList.remove('popup__call-phone-hidden');
  block[1].classList.add('popup__call-phone-hidden');
  block[1].style.visibility = 'hidden';
  ar[0].style.transform = 'rotate(0deg)';
  rus = false;
  bel = true;
  btnSu[0].style.pointerEvents = '';
} 
});

hidBlock[0].addEventListener('click', function() {
  
  if (bel) {
allBlock.insertBefore(block[1],hidBlock[0]);
block[0].classList.remove('popup__call-phone-hidden');
hidBlock[1].classList.add('popup__call-phone-hidden');
hidBlock[1].style.visibility = 'hidden';
ar[0].style.transform = 'rotate(0deg)';
rus = true;
bel = false;
btnSu[0].style.pointerEvents = '';
  } 

});




