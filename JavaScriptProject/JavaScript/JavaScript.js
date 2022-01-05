//use a switch statement

function pet() {
    var output;            //used to hold a output to send to html
    var animals = document.getElementById("answer").value;       //gets value from html
    var string = " make great pets!";    //use for end of string. Not "REQUIRED", but reduces repitition
    switch(animals) {       //a conditional statement based on the cases inside
        case "Dog":                             //case...var: code
            output = animals + "s" + string;
            break;                              //breaks reading everything else
        case "Cat":
            output = animals + "s" + string;
            break;
        case "Mouse":
            output = "Mice" + string;
            break;
        case "Rat":
            output = animals + "s" + string;
            break;
        case "Rabbit":
            output = animals + "s" + string;
            break;
        case "Hamster":
            output = animals + "s" + string;
            break;
        case "Guinea pig":
            output = animals + "s" + string;
            break;
        case "Ferret":
            output = animals + "s" + string;
            break;
        case "Fish":
            output = animals + string;
            break;
        default:
            output = "Please enter an animal \"Exactly\" as shown"
            break;
    }
    document.getElementById("pet").innerHTML = output;
    console.log(animals);
}

function change() {
    var x = document.getElementsByClassName("change");
    //grabs class. If class is in multiple places, it creates an array!
    x[1].innerHTML = "This has been changed";   //make sure to put in .innerHTML
}

function draw() {
    let c = document.getElementById("display");
    let cLine = c.getContext("2d");     //renders everything in 2d on canvas
    cLine.moveTo(0,0);      //does not create a line. moves "pen" to a point
    cLine.lineTo(250,250);  //makes a line from one point to another
    cLine.lineTo(500,0);
    cLine.moveTo(500,500);
    cLine.lineTo(250,250);
    cLine.lineTo(0,500);
    cLine.stroke();         //draws all lines
}

function grad() {
    let c = document.getElementById("display");
    let cGrad = c.getContext("2d");
    let grad = cGrad.createLinearGradient(0,0,500,0);   //starts gradient from (p1,p1,p2,p2)
    grad.addColorStop(0, "orange");
    grad.addColorStop(.5, "blue");                  //0 and 1 are the max values
    grad.addColorStop(1, "red");
    cGrad.fillStyle = grad;         //draws from grad definitions
    cGrad.fillRect(0,0,500,500);    //fills as a rectangle from point to point
}