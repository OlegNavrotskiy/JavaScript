function animateSlider() {
  let op = 0;
  while (op <= 1) {
      (function(ar) {
          setTimeout(function() {
            slides[slideIndex - 1].children[0].style.opacity = ar;
          }, 60 + op * 600);
      }) (op);
      op += 0.1;
  }
}