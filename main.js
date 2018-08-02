function showTime() {
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var am_pm = "AM";

    if (hr == 0)
        hr = 12;

    if(hr >12){
        am_pm ="PM"
    }

    hr = (hr < 10) ? "0"+hr : hr;
    min = (min < 10) ? "0"+min : min;
    sec = (sec < 10) ? "0"+sec : sec;


    var currentTime = hr + ":" + min + ":" + sec + " ";
    document.getElementById("clock").innerHTML = currentTime;

    setTimeout(showTime , 1000);
}
showTime();

var d = new Date();
var time = d.getHours();

if (time < 12) {
    document.querySelector("#comments").innerHTML="Good Morning";
    }
if (time > 12) {
    document.querySelector("#comments").innerHTML="Good Evening";
    document.querySelector("body").style.backgroundImage="url('images/sunsetafrica.jpg')";
}
if (time == 12) {
    document.querySelector("#comments").innerHTML="And now we feast";
}

