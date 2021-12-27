function age() {
    var age, howOld;
    age = document.getElementById("age").value    //takes value from html
    howOld = (age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("old").innerHTML = howOld + " to vote";
}