function validate() {
    let x = document.forms["form1"]["firstName"].value; //grabs id from form
    let y = document.forms["form1"]["lastName"].value;
    if (x == "" || y == "") {                           // || is the OR operator
        alert("Please enter in the following information");
        return false;
    }
}