let menu = document.querySelector('.menu'), 
    menuItem = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    question = prompt("Ваше отношение к технике apple"),
    questionBlock = document.getElementById('prompt'),
    menuItems = document.querySelectorAll('.menu-item');

menu.insertBefore(menuItems[2], menuItems[1]); //поменять местами
menu.appendChild(menuItem); //создали останний пункт меню
menuItem.classList.add('menu-item'); //добавили класс
menuItem.textContent = 'Пятый пункт'; //добавили текст в класс

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat'; //изменили задний фон

title.textContent = 'Мы продаем только подлинную технику Apple'; //изменили заголовок

column[1].removeChild(adv); //удаляем рекламу

questionBlock.innerHTML = `<h1>${question}</h1>`; //вставляем ответ в блок
