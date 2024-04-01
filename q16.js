var guestarray = ["Hassan", "Ahmad", "sabir"];
var caNotAttend = "Hassan";
console.log("".concat(caNotAttend, " can not make it ,for dinner"));
var newGuest = "zain";
guestarray[guestarray.indexOf(caNotAttend)] = newGuest;
console.log(guestarray);
// guestarray.map((item)=> console.log(`Hello, ${item} you are invited to dinner`));
guestarray.unshift("Hussnain");
var middleGuest = "Adeel";
var midleIndex = guestarray.length / 2;
guestarray.splice(midleIndex, 0, middleGuest);
guestarray.push("Asad");
while (guestarray.length > 2) {
    var removeguest = guestarray.pop();
    console.log("\nSorry ".concat(removeguest, " we can't invite you to dinner"));
}
;
guestarray.map(function (item) { return console.log("\n".concat(item, " you are still invited to dinner")); });
guestarray.pop();
guestarray.pop();
console.log(guestarray);
