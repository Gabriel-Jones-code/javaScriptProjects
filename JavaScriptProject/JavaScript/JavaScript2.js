function validate() {
    let x = document.forms["form1"]["firstName"].value;
    let y = document.forms["form1"]["lastName"].value;
    if (x == "" || y == "") {
        alert("Please enter in the following information");
        return false;
    }
}