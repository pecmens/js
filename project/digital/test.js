const num = [0, 1, 2, 3, 4, 5];
const cha = ["A", "B", "C", "D", "E"];
const num_s = ["0","1","2","3","4","5"];

// let nums = "54321S0";
let nums = "A1B2C3D4E5";
// let nums = "1A2B3C4D5E";
let chas = "EDCBA";

for (let i = 0; i < nums.length; i++) {
    let show = nums.slice(i, i+1);
    if (isNaN(nums.slice(i+1, i+2))) {
        console.log(show, i);
    } else if (i == nums.length - 1 && !(isNaN(nums.slice(i+1, i+2)))) {
        console.log(show, i, " ~Just it!");
    }
}

console.log(nums.length, "nums.length");
console.log(nums.slice(-1));