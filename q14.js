var guestarray = ["Hassan", "Ahmad", "sabir"];
var caNotAttend = "Hassan";
console.log("".concat(caNotAttend, " can not make it ,for dinner"));
var newGuest = "zain";
guestarray[guestarray.indexOf(caNotAttend)] = newGuest;
console.log(guestarray);
guestarray.map(function (item) { return console.log("Hello, ".concat(item, " you are invited to dinner")); });
