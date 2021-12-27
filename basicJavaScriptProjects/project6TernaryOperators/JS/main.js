function howTall() {
    var height, canRide;
    height = document.getElementById("height").value //takes value from html
    canRide = (height < 52) ? "You are too short":"You are tall enough";    
    //If height is less then 52, you are too short
    //If the question is false, then you are tall enough
    document.getElementById("ride").innerHTML = canRide = "to ride.";
}