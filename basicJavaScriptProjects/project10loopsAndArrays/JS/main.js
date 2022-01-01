function callLoop() {
    var x = 0;
    var number = "";
    while(x < 21){
        number += "<br>" + x;           //addes <br> + x to number
        x++;
    }
    document.getElementById("loop").innerHTML = number;
}