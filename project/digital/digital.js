/*
 * 给出一个字符串，例如：b024pe352t9z00se9x68c8f ,将字符串分割成 { "b" : 024, "pe" : 352, "t" : 9, "z" : 00, "se" : 9, "x" : 68, "c" : 8, "f" : null }
 * 给出一个字符串，例如：style1024px ,将字符串分割成 { "style" : 1024, "px" : null }
 */

function digitize(data) {
    const number_digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    const string_digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                   "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 
                   "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
                   "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    const symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", 
                     "-", "_", "=", "+", "{", "}", "[", "]", ":", ";", "'", '"', 
                     "|", ",", ".", "<", ">", "?", "/", " ", "\\"]

    const values = new Object();


    if (typeof data === "string") {

        let temp_n = 0;
        let temp_c = "";
        const arr_n = new Array();
        const arr_c = new Array();
        // console.log("It's string!")

        for (let i = 0; i < data.length; i++) {
            if (isNaN(data.slice(i, i+1)) && (chars.includes(data.slice(i, i+1)) || (symbols.includes(data.slice(i, i+1))))) {
                if (isNaN(data.slice(i+1, i+2)) && (chars.includes(data.slice(i+1, i+2))|| (symbols.includes(data.slice(i, i+1))))) {
                    temp_c += data.slice(i, i+1);
                } else if (!(isNaN(data.slice(i+1, i+2))) && (!(chars.includes(data.slice(i+1, i+2))) || !(symbols.includes(data.slice(i, i+1))))) {
                    temp_c += data.slice(i, i+1);
                    arr_c.push(temp_c);
                    temp_c = "";
                } else {
                    console.log(i + " str Errors")
                }
            } else if (!(isNaN(data.slice(i, i+1))) && (!(chars.includes(data.slice(i, i+1))) || !(symbols.includes(data.slice(i, i+1)))) && (number_digit.includes(data.slice(i, i+1)) || string_digit.includes(data.slice(i, i+1)))) {
                console.log(i + " is OK-1");
                if (!(isNaN(data.slice(i+1, i+2))) && (!(chars.includes(data.slice(i+1, i+2))) || !(symbols.includes(data.slice(i+1, i+2)))) && (number_digit.includes(data.slice(i+1, i+2)) || string_digit.includes(data.slice(i+1, i+2)))) {
                    temp_n += data.slice(i, i+1).toString();
                    console.log(i + " is OK-2");
                } else if (isNaN(data.slice(i+1, i+2)) && (chars.includes(data.slice(i+1, i+2) || symbols.includes(data.slice(i+1, i+2))) && (!(number_digit.includes(data.slice(i+1, i+2))) || !(string_digit.includes(data.slice(i+1, i+2)))))) {
                    temp_n += data.slice(i, i+1).toString();
                    arr_n.push(Number(temp_n));
                    temp_n = 0;
                    console.log(i + " is OK-3");
                } else if (i === data.length - 1 && !(isNaN(data.slice(i+1, i+2)))) {
                    temp_n += data.slice(i, i+1).toString();
                    arr_n.push(Number(temp_n));
                    console.log(i + " is OK-4"); // I don't know what's funking happened, last element is Number was a error.
                } else {
                    console.log(i + " num Errors");
                }
            }

        }

        console.log(arr_n);
        console.log(arr_c);

        if (arr_n.length === arr_c.length && isNaN(data.slice(0, 1))) {
            for (let j = 0; j < arr_c.length; j++) {
                values[arr_c[j]] = arr_n[j];
            }
        } else if (arr_n.length === arr_c.length && !(isNaN(data.slice(0, 1)))) {
            for (let k = 0; k < arr_n.length - 1; k++) {
                values[arr_c[k]] = arr_n[k + 1];
            }
            values["Null"] = arr_n[0];
            values[arr_c[arr_c.length - 1]] = "Null";
        } else if (arr_n.length !== arr_c.length) {
            values["Char"] = arr_c;
            values["Number"] = arr_n;

            if (arr_n.length > arr_c.length) {
                let total = arr_n.length - arr_c.length;
                console.log("Number-123 is biggest! than " + total.toString());
            } else if (arr_n.length < arr_c.length) {
                let total = arr_c.length - arr_n.length;
                console.log("String-ABC is biggest! than " + total.toString());
            }

        } else {
            console.log("Have Error!");
        }

    }

    return values;
}

// let data = "A1B2C3D4E5";
// let data = "1A2B3C4D5E";
// let data = "b024pe352t9z00se9x68c8f";
let data = "024pe352t9z00se9x68c8";

console.log(digitize(data));