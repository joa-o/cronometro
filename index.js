var seconds= 0
var minuts= 0
var hours = 0

var interval 

function towDigits(digit) {
    if(digit < 10){
        return('0' + digit)
    }else{
        return(digit)
    }
}

function start() {
   watch() 
   interval = setInterval(watch,1000)
}

function pause() {
    clearInterval(interval)
}

function cancel() {
    clearInterval(interval)
    seconds=0
    minuts=0
    document.getElementById('num').innerHTML = '00:00:00' 
}


function watch() {
    seconds++
    if(seconds == 60){
        minuts++
        seconds = 0
        if(minuts == 60){
            minuts=0
            hours++
            
        }
    }
    document.getElementById('num').innerHTML= towDigits(hours) + ':' + towDigits(minuts) + ':' + towDigits(seconds);

}