let btnRus = document.getElementsByClassName('popup__call-wrap')[0],
    hidBlock = document.getElementsByClassName('popup__call-phone')[1],
    block = document.getElementsByClassName('popup__call-phone')[0],
    ar = document.getElementsByClassName('popup__call-svg')[0],
    allBlock = document.querySelector('.popup__call-phoneblock'),
    visible = false,
    country = false;

btnRus.addEventListener('click', function() {

  
  hidBlock.style.visibility = 'visible';
  ar.style.transform = 'rotate(180deg)';


    if (visible) {
        hidBlock.style.visibility = 'hidden';
        ar.style.transform = 'rotate(0deg)';
        visible = false;
    } else {
      hidBlock.style.visibility = 'visible';
      ar.style.transform = 'rotate(180deg)';
      visible = true;
    }

});

hidBlock.addEventListener('click', function() {
  
  allBlock.insertBefore(hidBlock, block);
  hidBlock.classList.remove('popup__call-phone-hidden');
  block.classList.add('popup__call-phone-hidden');

});


