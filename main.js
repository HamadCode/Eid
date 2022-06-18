// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

const countDownDate = new Date("July 9, 2022 23:59:59").getTime();

let counter = setInterval(()=> {
    let dateNow = new Date().getTime();

    // Find The Date Difference Between Now And Countdown
    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // معناها اريد باقي القسمه من الايام وقسمهم على الساعات
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60 )) / (1000));;

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours  < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes  < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds  < 10 ? `0${seconds}` : seconds;

    if(dateDiff <= 0) {
        clearInterval(counter)
    }
} , 1000)