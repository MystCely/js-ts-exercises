
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timeRef = document.querySelector(".timer");
let num = null;

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");


// eventListeners for clicking button
startBtn.addEventListener('click', ()=>{
    if(num!==null){
        clearInterval(num);
    }
    num = setInterval(displayTimer, 10);
});

stopBtn.addEventListener('click', ()=>{
    clearInterval(num);
});

resetBtn.addEventListener('click', ()=>{
    clearInterval(num);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
});

function displayTimer() {
    milliseconds+=10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    
    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

