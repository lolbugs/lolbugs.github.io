const clock = document.querySelector("h2#clock");
function clockPadding(number){
    return String(number).padStart(2,"0");
}
function getClock(){
    const date = new Date();
    clock.innerText=`${date.getMonth()+1} - ${date.getDate()} - ${clockPadding(date.getHours())}:${clockPadding(date.getMinutes())}:${clockPadding(date.getSeconds())}`
}
getClock();
setInterval(getClock,1000);


