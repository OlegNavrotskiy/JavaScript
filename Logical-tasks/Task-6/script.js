//градусы на часах 

function clock(hours, minutes) {

  let cornerHours = 360 / 12,
      cornerHoursMinutes = 360 / 12 / 60,
      cornerMinutes = 360 / 60,
      arrHours, arrMinutes,
      corner;

  if (hours < 0 || hours > 12 || minutes < 0 || minutes > 60) {
    console.log("Некорректно введено время на часах");
  } else {
    arrHours = hours * cornerHours + cornerHoursMinutes * minutes;
    arrMinutes = cornerMinutes * minutes;
    corner = Math.abs(arrHours - arrMinutes);
  }
  if (corner > 180) {
    corner = 360 - corner;
  }
  console.log(corner);
}

clock(6,0);
clock(3,0);
clock(3,30);
clock(9,0);
