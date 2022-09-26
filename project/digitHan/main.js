let ts = document.querySelector("#top_screen");
let bs = document.querySelector("#bottom_screen");
const hans = {
    1: "十",
    2: "百",
    3: "千",
    4: "万",
    5: "十",
    6: "百",
    7: "千",
    8: "亿",
    9: "十",
    10: "百",
    11: "千",
    12: "万",
    13: "亿亿",
    14: "十",
    15: "百",
    16: "千",
    17: "万"
};

const numHans = {
    0: "零",
    1: "壹",
    2: "贰",
    3: "叁",
    4: "肆",
    5: "伍",
    6: "陆",
    7: "柒",
    8: "捌",
    9: "玖",
    10: "拾"
};

function press(key) {
    if (bs.innerHTML == "0") {
        bs.innerHTML = key.innerHTML;
        ts.innerHTML = numHans[parseInt(bs.innerHTML)];
        console.log("Press");
    } else {
        bs.innerHTML += key.innerHTML;
        // ts.innerHTML += numHans[parseInt(bs.innerHTML.slice(-1))];
        trans();
        console.log("Continue");
    }
}

function trans() {
    let values = bs.innerHTML;
    let bits = values.length;
    console.log("bits:", bits);
    let nums;
    const nums_arrs = new Array();
    // 有逻辑错误，测试就明白了。
    for (let i = 0; i < bits; i++) {
        // nums_arrs.push(numHans[values[i]]);
        if (i < 2) {
            nums_arrs.push(numHans[values[i]]);
        } else {
            nums_arrs.push(hans[i]);
            nums_arrs.push(numHans[values[i]]);
        };
    }

    values = nums_arrs.join(""); 
    console.log("nums_arrs: ", nums_arrs);
}

function clean() {
    ts.innerHTML = "";
    bs.innerHTML = "0";
}