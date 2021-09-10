
      // 1 detik = 1000
      window.setTimeout("myTime()",1000);  
      function myTime() {   
      var tanggal = new Date();  
      setTimeout("myTime()",1000);
    document.getElementById("thistime").innerHTML = tanggal.getHours()+":"+tanggal.getMinutes()+":"+tanggal.getSeconds();
    }
// Timer

let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let displayMilisec = miliseconds;
let displaySec = seconds;
let displayMins = minutes;


let interval = null;

let status = "stopped";

let lapNow = null;

function start() {
    miliseconds++;

    if (miliseconds < 10) {
        displayMilisec = "0" + miliseconds.toString();
    } else {
        displayMilisec = miliseconds;
    }

    if (seconds < 10) {
        displaySec = "0" + seconds.toString();
    } else {
        displaySec = seconds;
    }

    if (minutes < 10) {
        displayMins = "0" + minutes.toString();
    } else {
        displayMins = minutes;
    }


    if (miliseconds / 100 === 1) {
        seconds++;
        miliseconds = 0;
        if (seconds / 60 === 1) {
            minutes++;
            seconds = 0;
            if (minutes / 60 === 1) {
                hours++;
                minutes = 0;
            }
        }
    }

    document.getElementById("timerMilisec").innerHTML = displayMilisec;
    document.getElementById("timerSec").innerHTML = displaySec;
    document.getElementById("timerMins").innerHTML = displayMins;
}

function startStop() {
    if (status === "stopped") {
        interval = window.setInterval(start, 10);
        document.getElementById("startBtn").innerHTML = "Stop";
        status = "started";
    } else {
        window.clearInterval(interval);
        document.getElementById("startBtn").innerHTML = "Start";
        status = "stopped";
    }
}

function reset() {
    window.clearInterval(interval);
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById("timerMilisec").innerHTML = "00";
    document.getElementById("timerSec").innerHTML = "00";
    document.getElementById("timerMins").innerHTML = "00";
    document.getElementById("startBtn").innerHTML = "Start";
    display1.innerHTML = "00:00:00";
    display2.innerHTML = "00:00:00";
    display3.innerHTML = "00:00:00";
    display4.innerHTML = "00:00:00";
    display5.innerHTML = "00:00:00";
    display6.innerHTML = "00:00:00";
    display7.innerHTML = "00:00:00";
    display8.innerHTML = "00:00:00";
    document.getElementById("selesai1").disabled = false;
    document.getElementById("selesai2").disabled = false;
    document.getElementById("selesai3").disabled = false;
    document.getElementById("selesai4").disabled = false;
    document.getElementById("selesai5").disabled = false;
    document.getElementById("selesai6").disabled = false;
    document.getElementById("selesai7").disabled = false;
    document.getElementById("selesai8").disabled = false;
    status = "stopped";
}

function selesai1() {
    lapNow = ` ${minutes} : ${seconds} : ${miliseconds}`;
    display1.innerHTML = lapNow.toString();
    document.getElementById("selesai1").disabled = true;
}

function selesai2() {
    lapNow = ` ${minutes} : ${seconds} : ${miliseconds}`;
    display2.innerHTML = lapNow.toString();
    document.getElementById("selesai2").disabled = true;
}

function selesai3() {
    lapNow = ` ${minutes} : ${seconds} : ${miliseconds}`;
    display3.innerHTML = lapNow.toString();
    document.getElementById("selesai3").disabled = true;
}

function selesai4() {
    lapNow = ` ${minutes} : ${seconds} : ${miliseconds}`;
    display4.innerHTML = lapNow.toString();
    document.getElementById("selesai4").disabled = true;
}

function selesai5() {
    lapNow = ` ${minutes} : ${seconds} : ${miliseconds}`;
    display5.innerHTML = lapNow.toString();
    document.getElementById("selesai5").disabled = true;
}

function selesai6() {
    lapNow = ` ${minutes} : ${seconds} : ${miliseconds}`;
    display6.innerHTML = lapNow.toString();
    document.getElementById("selesai6").disabled = true;
}

function selesai7() {
    lapNow = ` ${minutes} : ${seconds} : ${miliseconds}`;
    display7.innerHTML = lapNow.toString();
    document.getElementById("selesai7").disabled = true;
}

function selesai8() {
    lapNow = ` ${minutes} : ${seconds} : ${miliseconds}`;
    display8.innerHTML = lapNow.toString();
    document.getElementById("selesai8").disabled = true;
}