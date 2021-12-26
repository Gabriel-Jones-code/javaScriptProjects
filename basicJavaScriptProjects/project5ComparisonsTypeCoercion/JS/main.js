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