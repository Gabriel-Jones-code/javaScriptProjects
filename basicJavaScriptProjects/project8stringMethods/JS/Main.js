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

function upper() {
    var hello = "Hello, World!";
    var upper = hello.toUpperCase();
    document.getElementById("upper").innerHTML = upper;
}