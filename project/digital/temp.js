const number_digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const string_digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "-", "_", "=", "+", "{", "}", "[", "]", ":", ";", "'", '"',
    "|", ",", ".", "<", ">", "?", "/", " ", "\\"]

let num = "bb35020705";

for (let i = 0; i < num.length; i++) {
    if (num.slice(i, i + 1) in string_digit) {
        console.log("Bingo!");
    } else if (num.slice(i, i + 1) in chars) {
        console.log("Haha!");
    } else if (!(num.slice(i, i + 1) in string_digit)) {
        console.log("Not In!");
    }
}

console.log(num.slice(0, 1));
console.log(typeof num.slice(0, 1));
console.log(num.slice(0, 1) in chars);

let kkks = num.slice(0, 1);

let kkkss = chars[1];

console.log(kkks);
console.log(typeof kkks);
console.log(kkkss);
console.log(typeof kkkss);
console.log(kkks == kkkss);
console.log(kkks === kkkss);

console.log(kkks in chars);

console.log(chars.includes(num.slice(0, 1)));