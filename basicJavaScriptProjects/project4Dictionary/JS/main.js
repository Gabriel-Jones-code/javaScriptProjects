function dictionary () {
    var gabe = {            //this is a KVP
        age: 21,            //numbers don't need ""
        age: 20,            //this takes priority. I'm currently 20
        eyeColor: "Brown",
        hairColor: "Brown",
        gender: "Non-Binary",       //yes... I'm Non-binary
        language: "English, Mandarin"   //the , doesn't really seperate it.
                                        //It just makes the text a little better
    };
    document.getElementById("dictionary").innerHTML = gabe.age;
    //In the html file, I HAD to use dictionary as my id. both for my sake
    //and for whoever might read this. If you just return the variable "gabe",
    //You'll get an error because JS reconizes the var and an object.
    //You need to use .KVP to specify the output
}