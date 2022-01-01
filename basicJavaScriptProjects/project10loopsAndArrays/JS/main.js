function callLoop() {
    var x = 0;                          //number
    var number = "";                    //string
    while(x < 21){                      //stop when x hits 21
        number += "<br>" + x;           //addes <br> + x to number
        x++;                            //x + 1
    }
    document.getElementById("loop").innerHTML = number;
}

const friends = ["Celia", " Kaylee", " Emily", " Tyler"];
let numberFriends = friends.length;
friends.length = 4;

document.getElementById("friends").innerHTML = friends;
document.getElementById("length").innerHTML = numberFriends;