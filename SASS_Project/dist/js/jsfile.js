var number1 = 0;
var number2 = 0;
var number3 = 0;
var number4 = 0;
var interval ;
window.onload = function(){
    number1 = 0;
    number2 = 0;
    number3 = 0;
    number4 = 0;
    var item1;
    var item2;
    var item3;
    var item4;
    clearInterval(interval);
    interval = setInterval( counter , 10 );
    var item1=document.getElementById("items-number-1");
    var item2=document.getElementById("items-number-2");
    var item3=document.getElementById("items-number-3");
    var item4=document.getElementById("items-number-4");
    function  counter() {
        number1++;
        console.log(number1)
        number2++;
        number3++;
        number4++;
        item1.innerText = number1.toString() ;
        item2.innerHTML = number2 ;
        item3.innerHTML = number3 ;
        item4.innerHTML = number4 ;
        if(number1 <= 300 ) {
            document.getElementById("items-number-1").innerHTML = number1;
        }
        else {
            document.getElementById("items-number-1").innerHTML = "+300";

        }
        if(number2 <= 100 ) {
            document.getElementById("items-number-2").innerHTML = number2;
        }
        else {
            document.getElementById("items-number-2").innerHTML = "+100";

        }
        if(number3 <= 500 ) {
            document.getElementById("items-number-3").innerHTML = number3;
        }
        else {
            document.getElementById("items-number-3").innerHTML = "+500";

        }
        if(number4<= 250 ) {
            document.getElementById("items-number-4").innerHTML = number4;
        }
        else {
            document.getElementById("items-number-4").innerHTML = "+250";
        }
        if(number1>300 && number2>100 && number3>500 && number4>250 ){
            clearInterval(interval)
        }

    }


}