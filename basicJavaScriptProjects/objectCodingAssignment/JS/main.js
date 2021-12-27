function vehicle(make, model, year, color) {    //assigning variables
    this.vehicleMake = make;
    this.vehicleModel = model;                  //"this" is in reference to the
    this.vehicleYear = year;                    //object. For example,
    this.vehicleColor = color;                  //this.vehicleColor is in reference
}                                               //to the color var.

var jeff = new vehicle("Dodge", "Ram", 2018, "Silver");
var tia = new vehicle("Chrysler", "200", 2015, "Maroon");
var shirley = new vehicle("Honda", "Civic", 2001, "Beige");

function whoDrives() {
    document.getElementById("keywordsAndConstructors").innerHTML = "Jeff drives a "
    + jeff.vehicleColor + " -colored " + jeff.vehicleMake + "" + jeff.vehicleModel
    + " made in " + jeff.vehicleYear;
}