const clockTime = document.querySelector('.clock');

function myClockFunction(){
  let date = new Date();
  let periodOfDay = "AM";

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if(hours > 12) {
    hours -= 12;
    periodOfDay = "PM";
  }

  if(hours < 10){
    hours = "0" + hours.toString();
  }

  if(minutes < 10){
    minutes = "0" + minutes.toString();
  }

  if(seconds < 10){
    seconds = "0" + seconds.toString();
  }

  let currentTime = `${hours}:${minutes}:${seconds} ${periodOfDay}`;

  clockTime.innerHTML = currentTime;
}

setInterval(myClockFunction, 1000);
