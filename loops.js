let a1=1;
for(let i=1;i<=100;i++)
{
    console.log(i);
}

let o={name:"Ashutosh",
        company:"Youtube",
        role:"ceo"}
for (const key in o)
{   
    const element=o[key]
    console.log(key,element)
    
    
}
for (const i of "Ashutosh") {
    console.log(i)
}

let a=1;
while(a<11)
{
    console.log(a)
    a++;
}
let i=0;
do{
    console.log(i);
    i++;
}
while(i<10);