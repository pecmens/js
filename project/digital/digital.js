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
        console.log("It's string!")

        for (let i = 0; i < data.length; i++) {
            if (isNaN(data.slice(i, i+1)) && (data.slice(i, i+1) in chars || data.slice(i, i+1) in symbols)) {
                if (isNaN(data.slice(i+1, i+2)) && (data.slice(i+1, i+2) in chars || data.slice(i+1, i+2) in symbols)) {
                    temp_c += data.slice(i, i+1);
                    console.log("A");
                } else if (!(isNaN(data.slice(i+1, i+2))) && (!(data.slice(i+1, i+2) in chars) || !(data.slice(i+1, i+2) in symbols))) {
                    temp_c += data.slice(i, i+1);
                    arr_c.push(temp_c);
                    temp_c = "";
                    console.log("B");
                } else {
                    console.log("abc");
                } 
            } else if (!(isNaN(data.slice(i, i+1))) && (!(data.slice(i, i+1) in chars) || !(data.slice(i, i+1) in symbols)) && (data.slice(i, i+1) in number_digit || data.slice(i, i+1) in string_digit)) {
                if (!(isNaN(data.slice(i+1, i+2))) && (!(data.slice(i+1, i+2) in chars) || !(data.slice(i+1, i+2) in symbols)) && (data.slice(i+1, i+2) in number_digit || data.slice(i+1, i+2) in string_digit)) {
                    temp_n += data.slice(i, i+1).toString();
                    console.log("C");
                } else if (isNaN(data.slice(i+1, i+2)) && (data.slice(i+1, i+2) in chars || data.slice(i+1, i+2) in symbols) && (!(data.slice(i+1, i+2) in number_digit) || !(data.slice(i+1, i+2) in string_digit))) {
                    temp_n += data.slice(i, i+1).toString();
                    arr_n.push(Number(temp_n));
                    temp_n = 0;
                    console.log("D");
                } else {
                    console.log("ABC");
                }
            } else if (isNaN(data.slice(i, i+1))) {
                console.log("BabiQ");
            } else {
                console.log("BBQ");
            }

            // console.log(arr_n);
            // console.log(arr_c);
        }

        if (arr_n.length === arr_c.length && isNaN(data.slice(0, 1))) {
            for (let j = 0; j < arr_c.length; j++) {
                values[arr_c[j]] = arr_n[j];
            }
        } else if (arr_n.length === arr_c.length && !(isNaN(data.slice(0, 1)))) {
            for (let k = 0; k < arr_n.length - 1; k++) {
                values[arr_c[k]] = arr_n[j + 1];
            }
            values["Null"] = arr_n[0];
            values[arr_c[arr_c.length - 1]] = "Null";
        } else if (arr_n.length !== arr_c.length) {
            values["Char"] = temp_c;
            values["Number"] = temp_n;
        } else {
            console.log("Have Error!");
        }

        // console.log(arr_n);
        // console.log(arr_c);
    }

    return values;
}

// let data = "A1B2C3D4E5";
let data = "b024pe352t9z00se9x68c8f";

console.log(digitize(data));