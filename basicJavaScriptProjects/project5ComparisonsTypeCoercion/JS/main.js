document.write(typeof "yes");

document.write("1"+5);

function test() {
    document.getElementById("test").innerHTML = 0/0;    
    //this does not exist. It will retern NaN
    document.getElementById("test1").innerHTML = isNaN("this is a string");
    //checks to see if the string (not a number btw) is a number
    document.getElementById("test2").innerHTML = isNaN("007");
}

document.write(2E310);      //This is infinity... kind of. It's just bigger then the max floating point number
document.write(-2E310);     //same thing as /|\ but negative

//BOOLEAN!!
document.write(23 > 20);                //will return true
document.write("four" > "three");       //counts letters
document.write([6 > 4] || [8 < 12]);    //|| is OR. I just remember this from a little bit of collage.

console.log(2 + 2);       //gives output in console

console.log(6 > 9);

document.write(10 == 10);
document.write(9 == 10);

var x = 2;
var y = 2;
var z = 8;

document.write(x === y);        //=== is comparing var
document.write(x === z);

document.write([6 < 4] && [4 < 6]);     //not makes everything send the opposite result
 function not() {
     document.getElementById("not").innerHTML = !(5 > 10);
 }

 function not1() {
    document.getElementById("not1").innerHTML = !(10 > 5);
}