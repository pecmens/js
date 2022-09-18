function texts(text) {

    let textss = text;
    let temp_text = "";
    let other_list = new Array();

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let i = 0; i < textss.length; i++) {
        if (alphabet.includes(textss.slice(i, i+1))) {
            temp_text += textss.slice(i, i+1);
            // console.log("That is a alphabet: " + textss.slice(i, i+1));
        } else if (!(alphabet.includes(textss.slice(i, i+1)))) {
            temp_text += " ";
            // console.log("That isn't a alphabet: " + textss.slice(i, i+1));
            other_list.push(textss.slice(i, i+1));
        }
    }

    let counter = other_list.length;

    console.log(`Total has ${counter} bit other charset!`)
    console.log("This is the other charset: ", other_list);

    return temp_text.toUpperCase();
}

let char = "this53!is@t3he$234test%tex45t*^";

console.log(texts(char));