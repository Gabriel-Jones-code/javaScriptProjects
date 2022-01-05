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

function change () {
    let x = document.getElementByclassName("change");
    //grabs class. If class is in multiple places, it creates an array!
    x[1].innerHTML = "This has been changed";   //make sure to put in .innerHTML
}