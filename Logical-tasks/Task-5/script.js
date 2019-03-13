function up() {
  let time, //время для повторений
      top = document.documentElement.scrollTop; //высота
  if (top > 0) {
    window.scrollBy(0, -50); //поднять выше на 50
    time = setTimeout(up, 25); // повторять function up каждые 0,025с
  } else {
    clearTimeout(time); //остановить повторение
  } 
}