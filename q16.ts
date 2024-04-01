let guestarray:string[] = ["Hassan", "Ahmad", "sabir"];


let caNotAttend:string = "Hassan";
console.log(`${caNotAttend} can not make it ,for dinner`);

let newGuest:string = "zain";
guestarray[guestarray.indexOf(caNotAttend)]=newGuest;
console.log(guestarray);
// guestarray.map((item)=> console.log(`Hello, ${item} you are invited to dinner`));

guestarray.unshift("Hussnain");

let middleGuest:string = "Adeel";
let midleIndex = guestarray.length/2;
guestarray.splice(midleIndex,0,middleGuest);

guestarray.push("Asad");

while(guestarray.length>2){
    let removeguest = guestarray.pop();
    console.log(`\nSorry ${removeguest} we can't invite you to dinner`);
};
guestarray.map((item)=>console.log(`\n${item} you are still invited to dinner`));

guestarray.pop();
guestarray.pop();
console.log(guestarray);