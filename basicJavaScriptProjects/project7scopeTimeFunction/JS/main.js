var x = 10;                 //global variable

function add1() {
    y = 20;                 //local variable
    document.write(x + y);
}

function add2() {
    console.log(y + 10);
}       //I'm not sure why this isn't returning an error, But it doesn't work.
        //this is intentional

add1();
add2();

function greeting() {
    if (new Date().getHours() < 12) {
        document.getElementById("time").innerHTML = "Good Morning!";
    }
    //if the hour is less then 12pm, say Good Morning!
    else if (new Date().getHours() < 15) {
        document.getElementById("time").innerHTML = "Good Afternoon!";
    }
    //if the hour is greater then 12, but less then 15, say Good Afternoon!
    else if (new Date().getHours() < 18) {
        document.getElementById("time").innerHTML = "Good Evening!";
    }
    //if the hour is greater then 15, but less then 18, say Good Evening!
    else {
        document.getElementById("time").innerHTML = "Hello!"
    }
    //if all else fails or the time is outside of the time range, say Hello!
}