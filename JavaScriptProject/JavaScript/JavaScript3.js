function ae(character) {
    var person = character.getAttribute("characterType");
    alert(character.innerHTML + " is actually " + person);
}

//"type" now has a name to it called "character". We can take all the values and elements
//of character and use it in the function. .innerHTML takes the text that is being
//displayed. .getAttribute can take variables declared inside the html file.