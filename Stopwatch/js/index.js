window.onload = function () {

    var seconds = 0;
    var tens = 0;
    var minutes = 0;
    var appendTens = document.getElementById("tens")//span
    var appendSeconds = document.getElementById("seconds")//span
    var appendMinutes = document.getElementById("minutes");//span
    var buttonStart = document.getElementById('button-start');//start
    var buttonStop = document.getElementById('button-stop');//stop
    var buttonReset = document.getElementById('button-reset');//reset
    var Interval ;

    buttonStart.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(startTimer , 20 );
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
    }


    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }



    function startTimer () {
        tens++;

        if(tens < 9){
            appendTens.innerHTML = "0" + tens;
        }

        if ( tens > 9 && tens<60){
            appendTens.innerHTML = tens;

        }

        if (tens > 59) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }

        if(seconds > 59 ){
            minutes++;
            if(minutes > 9){
                appendMinutes.innerHTML = minutes ;
            }
            else {
                appendMinutes.innerHTML = "0" + minutes;
            }
            seconds = 0 ;
            appendSeconds.innerHTML = "0" + 0 ;
        }


    }


}