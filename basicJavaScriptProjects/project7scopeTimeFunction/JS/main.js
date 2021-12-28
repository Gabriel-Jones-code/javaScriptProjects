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
    if (new Date().getHours < 12) {
        document.getElementById("morning").innerHTML = "Good Morning!";
    }
    else if (new Date().getHours < 15) {
        document.getElementById("afternoon").innerHTML = "Good Afternoon";
    }
    else if (new Date().getHours < 18) {
        document.getElementById("evening").innerHTML = "Good Evening";
    }
    else {

    }
}