
var date = new Date();

var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours();

document.getElementById("seconds").textContent = seconds;
document.getElementById("minutes").textContent = minutes;
document.getElementById("hours").textContent = hours;

// function* timeGenerator() {
//   var index = 0;
//   while(true)
//     yield index++;
// }

function updateTime() {
  seconds = seconds + 1

  document.getElementById("seconds").textContent = seconds;

  if (seconds === 60 ) {
    seconds = 0
    document.getElementById("seconds").textContent = seconds;
    minutes=minutes+1
    document.getElementById("minutes").textContent = minutes;
  }
  if (minutes === 59 ) {
    minutes = 0
    hours = hours + 1
    document.getElementById("hours").textContent = hours;
  }
  if (hours === 24) {
    hours = 0    
    document.getElementById("hours").textContent = hours;

  }

}

setInterval(updateTime, 1000)

// var gen = timeGenerator();

// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
