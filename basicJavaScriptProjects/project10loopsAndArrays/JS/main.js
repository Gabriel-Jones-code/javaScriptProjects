function callLoop() {
    var x = 0;                          //number
    var number = "";                    //string
    while(x < 21){                      //stop when x hits 21
        number += "<br>" + x;           //addes <br> + x to number
        x++;                            //x + 1
    }
    document.getElementById("loop").innerHTML = number;
}

let string = "this is a sentance";
string = string.length;     //counts letters
const friends = ["Celia", " Kaylee", " Emily", " Tyler"];   //array
let numberFriends = friends.length;             //counts items in array
friends.length = 4;                             //will display array from 1 - 4

document.getElementById("words").innerHTML = string;
document.getElementById("friends").innerHTML = friends;
document.getElementById("length").innerHTML = numberFriends;


function forLoop() {
    var dog = ["Max", "Hemi", "George", "Rockey"];
    var content = "";                       //leave empty to add words into var
    for(let n = 0; n < dog.length; n++){    //declared let inside of for loop
        content += dog[n] + "<br>";     //adds dog[n] to content
    }                                   //content will hold everthing at once
    document.getElementById("for").innerHTML = content;
}

function arrayFunction() {
    var array = [];
    array[0] = "Hello!";
    array[1] = "Hola!";
    array[2] = "Konichiwa!";
    array[3] = "Ni Hao!";        
    document.getElementById("array").innerHTML = array[3];
}