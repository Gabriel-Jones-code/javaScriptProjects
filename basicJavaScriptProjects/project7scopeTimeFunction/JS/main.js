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