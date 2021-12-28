function sentence(){
    var part1 = "This ";
    var part2 = "is ";
    var part3 = "a ";
    var part4 = "sentence";
    document.getElementById("sent").innerHTML =  part1.concat(part2, part3, part4);

}

function cut() {
    var sentence = "I like to play Pokemon";
    var part = sentence.slice(15, 22);
    document.getElementById("slice").innerHTML = part;
}
//This lets me cut out part of a string by defining the start and end position
//of the string I want to keep,

function upper() {
    var hello = "Hello, World!";
    var upper = hello.toUpperCase();
    document.getElementById("upper").innerHTML = upper;
}
//This lets me uppercase an entire string

function look() {
    var string = "The boy is looking at a tree";
    var looking = string.search("tree");
    document.getElementById("find").innerHTML = looking;
}
//this will tell me the position of a letter or word in a string

function numToLet() {
    var number = 25;
    document.getElementById("numType").innerHTML = number.toString();
}
//This can turn any given value into a string

function precise() {
    var point = 3.14159265358979323846;
    document.getElementById("round").innerHTML = point.toPrecision(15);
}
//toPrecision only shows a certain amount of digits, and rounds decimals