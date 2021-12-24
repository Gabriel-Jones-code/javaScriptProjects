function add() {
    var answer = 5+9;
    document.getElementById("add").innerHTML = answer;
}

function subtract() {
    var answer = 5-9;
    document.getElementById("subtract").innerHTML = answer;
}

function multiply() {
    var answer = 5*9;
    document.getElementById("multiply").innerHTML = answer;
}

function divide() {
    var answer = 5/9;
    document.getElementById("divide").innerHTML = answer;
}

function manyMaths() {
    var answer = 5*9*(2 + 3) - 10;
    document.getElementById("simpleMath").innerHTML = answer;
}

function remain() {
    var answer = 9%5;
    document.getElementById("remainder").innerHTML = answer;
}

function negitive() {
    var answer = 13;
    document.getElementById("minus").innerHTML = -answer;
}

function plus() {
    var x = 10;
    x++;
    document.getElementById("increase").innerHTML = x
}

function minus() {
    var x = 10;
    x--;
    document.getElementById("decrease").innerHTML = x
}

window.alert(Math.round(Math.random()*50))