//1. start of feetToMile:
function feetToMile(feet) {
    let result = (feet / 5280);
    return result + ' Miles';
}
console.log(feetToMile(15000));
// End of feetToMile.

//2. Starting of brickCalculator:
function brickCalculator(floor) {
    if (floor <= 10 && floor >= 1) {
        let brickNumber = floor * 15000;
        return brickNumber;
    }
    else if (floor > 10 && floor <= 20) {
        let brickNumber = ((floor - 10) * 12000) + 150000;
        return brickNumber;
    }
    else if (floor > 20) {
        let brickNumber = ((floor - 20) * 10000) + 270000;
        return brickNumber;
    }
    else {
        return "Sorry, Wrong Input!";
    }
};
let result1 = brickCalculator(9);
console.log(result1);
let result2 = brickCalculator(19);
console.log(result2);
let result3 = brickCalculator(99);
console.log(result3);
let result4 = brickCalculator(-4);
console.log(result4);
// end of brickCalculator.

//3. Start of woodCalculator:
function woodCalculator(chair, table, bed) {
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalCount = chairCount + tableCount + bedCount;
    return totalCount;
}
var totalCount = woodCalculator(15, 22, 28);
console.log(totalCount);
// end of woodCalculator.

//4. Start of tinnyFriend:
function tinyFriend(names) {
    var min = names[0];
    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (element.length < min.length) {
            min = element;
        }
    }
    return min;
}
var names = ["rizvy", "jhon", "jhonker", "habiba", "poo", "mohammad",]
var result = tinyFriend(names);
console.log("smallest name = ", result);
// end of tinnyFriend.