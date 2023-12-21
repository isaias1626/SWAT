let counterDate = new Date('jan 30, 2024 00:00:00').getTime();

function countDown() {
    let now = new Date().getTime();
    gap = counterDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let day = Math.floor(gap / (days));
    let hour = Math.floor((gap %(days)) / (hours));
    let minute = Math.floor((gap %(hours)) / (minutes));
    let second = Math.floor((gap %(minutes)) / (seconds));

document.getElementById('days').innerHTML = day;
document.getElementById('hours').innerHTML = hour;
document.getElementById('minutes').innerHTML = minute;
document.getElementById('seconds').innerHTML = second;
}

setInterval(function(){
    countDown();
},1000)
