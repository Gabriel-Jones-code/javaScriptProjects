function callLoop() {
    var x = 0;                          //number
    var number = "";                    //string
    while(x < 21){                      //stop when x hits 21
        number += "<br>" + x;           //addes <br> + x to number
        x++;                            //x + 1
    }
    document.getElementById("loop").innerHTML = number;
}

let string = "this is a sentance";              //let is for a block
//let in this case only applies to anything outside of a block
//if used in any other context, let cannot be used outside of it's block
string = string.length;     //counts letters
const friends = ["Celia", " Kaylee", " Emily", " Tyler"];   //array that will not change
let numberFriends = friends.length;             //counts items in array
friends.length = 4;                             //will display array from 1 - 4

document.getElementById("words").innerHTML = string;
document.getElementById("friends").innerHTML = friends;
document.getElementById("length").innerHTML = numberFriends;


function forLoop() {
    var dog = ["Max", "Hemi", "George", "Rockey"];
    var content = "";                       //leave empty to add words into var
    for(var n = 0; n < dog.length; n++){    //declared var inside of for loop
        content += dog[n] + "<br>";     //adds dog[n] to content
    }                                   //content will hold everthing at once
    document.getElementById("for").innerHTML = content;
}

function arrayFunction() {
    var array = [];         //declare var
    array[0] = "Hello!";    //adds to var as an array
    array[1] = "Hola!";
    array[2] = "Konichiwa!";
    array[3] = "Ni Hao!";        
    document.getElementById("array").innerHTML = array[3];
}

function constant() {
    const computer = {gpu:"1080", cpu:"ryzen7", memory:"32gb"};     //const is not expected to change
    computer.gpu = "3070";                                          //this changes an element of computer
    document.getElementById("constant").innerHTML = computer.gpu;
}

function returns() {
    let x = 0;
    x += 50;
    return x;
}

document.getElementById("refund").innerHTML = returns();

function object() {
    let classroom = {
        students: 30,
        subject: "Math",
        period: 4,
    }
document.getElementById("object").innerHTML = classroom.students + " students are in the "
                                            + classroom.subject + " class. This is period "
                                            + classroom.period;
}

function bnc() {
    for (let i = 0; i < 7; i++) {
        if (i === 3) {break;}       //this stops the loop
        document.getElementById("break").innerHTML = i;
    }

    for (let i = 0; i < 7; i++) {
        if (i === 5) {continue;}    //skips one portion of the code
        document.getElementById("continue").innerHTML = i;
    }
}

