//use a switch statement

function pet() {
    var output;            //used to hold a output to send to html
    var animals = document.getElementById("answer").value;       //gets value from html
    var string = " make great pets!";    //use for end of string. Not "REQUIRED", but reduces repitition
    switch(animals) {       //a conditional statement based on the cases inside
        case "Dog":                             //case...var: code
            output = animals + string;
            break;
        default:
            output = "Please enter an animal \"Exactly\" as shown"
            break;
    }
    document.getElementById("pet").innerHTML = output;
    console.log(animals);
}