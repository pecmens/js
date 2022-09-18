function clean_Sentences(text) {

    const symbol_list = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
                         "-", "_", "=", "+", "{", "}", "[", "]", ":", ";", "'", '"',
                         "|", ",", ".", "<", ">", "?", "/", " ", "\\"]

    let temp_text = "";
    const other_arr = new Array();

    for (let i = 0; i < text.length; i++) {
        if (!(symbol_list.includes(text.slice(i, i+1)))) {
            temp_text += text.slice(i, i+1);
        } else if (symbol_list.includes(text.slice(i, i+1))) {
            temp_text += " ";
            other_arr.push(text.slice(i, i+1));
        }
    }

    // let len_arr = other_arr.length;

    return temp_text.toUpperCase();
}

function executive() {
    let text = document.getElementById("textarea_main").value;
    document.getElementById("new_text").style.display = "block";
    document.getElementById("new_text").value = clean_Sentences(text);
    console.log(clean_Sentences(text));
}

function clean_do() {
    document.getElementById("textarea_main").value = "";
    document.getElementById("new_text").value = "";
    document.getElementById("new_text").style.display = "none";
}