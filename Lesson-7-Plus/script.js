let btn = document.querySelector('button');

    btn.onclick = function() {
      animate(function(timePassed) {
        background.style.left = timePassed / 5 + 'px';
      }, 4000);
    };

    // Рисует функция draw
    // Продолжительность анимации duration
    function animate(draw, duration) {
      let start = performance.now();

      requestAnimationFrame(function animate(time) {
        // определить, сколько прошло времени с начала анимации
        let timePassed = time - start;
          // возможно небольшое превышение времени, в этом случае зафиксировать конец
        if (timePassed > duration) {
          timePassed = duration;
        }
        // нарисовать состояние анимации в момент timePassed
        draw(timePassed);

        // если время анимации не закончилось - запланировать ещё кадр
        if (timePassed < duration) {
          requestAnimationFrame(animate);
        }

      });
    }


