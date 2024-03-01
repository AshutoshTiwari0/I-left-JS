//console.log("hey again");
//console.log("hey this time i am working");

/*var a=5;
var b=6;
var c="Ashutosh"
console.log(a+b)
console.log(typeof a, typeof b, typeof c)*/

/*var d=5;
d=d+5;
console.log(d);*/

/*let a=5;
{
    console.log(a);
}
var p=7;
{
    console.log(p);
}*/
// we prefer to use let bcoz it is block scoped.

let a=5;
console.log(a);//5
{
    let a=10;
    console.log(a);//10 bcoz ye sirf block wali value lega
}
console.log(a);// 5.  ye block ke bahar hai so ye jo value a ki bahar hai usse hi lega.

var b=5;// it is globally scoped.
console.log(b);//5
{
    var b=10;
    console.log(b);//10
}
console.log(b);// 10.  ye block ke bahar hai so ye jo value will change bcoz it is var(globally scoped.)

let x="Ashutosh";
let y=22;
let z=3.55;
const p=true;
let q=undefined;
let r=null;
console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

let o={ name:"ashutosh",
role:"Beginner"}

console.log(o)
console.log(o.name)// ashutosh
// we can change object like this.
o.phone="Motorola"
console.log(o)

// change exsiting object
o.phone="apple";
console.log(o);