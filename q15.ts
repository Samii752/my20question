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

guestarray.map((item)=>console.log(`\nDear ${item} you are invited to dinner!`));