function boop(){
    var str = "You have clicked the button";
    var result = str.fontcolor("red");
    document.getElementById("boop").innerHTML = result;
}
//Many comments are about to come to help me learn

//First you have the function name, which is being called from index.html
//using "id="boop""

//Then you have the string. I think you use "var" for every variable.
//At this point of the course, that is right. The string is then given a value
//of the text shown above.

//"result" is another variable that will be called later by the function.
//all "var" should be made at the top, and any calculations are made after all
//"var" have been made

//"result" is made equal to "str" and adds a color to the font

//"document.getElementById" does exactly that. The function looks at the id of
//the line of html that called for the function.
//It does this using the .innerHTML at the end. After that, the function
//returns the value that is "result"

function concatenate() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("concatenate").innerHTML = sentence;

    //The only new thing here is the "+=" opperator
    //This is how to add value to a var, without getting rid of the previous value
}