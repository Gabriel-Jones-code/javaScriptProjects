function howTall() {
    var height, canRide;
    height = document.getElementById("height").value //takes value from html
    canRide = (height < 52) ? "You are too short":"You are tall enough";    
    //If height is less then 52, you are too short
    //If the question is false, then you are tall enough
    document.getElementById("ride").innerHTML = canRide + " to ride.";
}

function newAndThis(donut, howMany) {
    this.donutType = donut;
    this.howMayDonut = howMany;
}

var bruno = new newAndThis("Chocolate", 12);
var regina = new newAndThis("Glazed", 24);

function donut() {
    document.getElementById("bruno").innerHTML = "Bruno has brought " + bruno.howMayDonut
    + " " + bruno.donutType + " donuts";
    document.getElementById("regina").innerHTML = "Regina has brought " + regina.howMayDonut
    + " " + regina.donutType + " donuts. They are better then Bruno.";
}

/*function object(type, place) {
    this.entityType = type;
    this.entityPlace = place;
}

var null = new object("God", "everywhere");

function print(){

document.getElementById("null").innerHTML = null;

}*/
//Comment out so the rest of the code works

function counting() {
    var startingPoint = 0;
    function plusPlus() {
        startingPoint += 1
    }
    plusPlus();
    return startingPoint;
    
}