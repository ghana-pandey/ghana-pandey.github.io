let multiplyObject={
    Ram:10,
    Hari:11,
    Shyam:10
}
let prod=1;
for(let key in multiplyObject)
{
    prod=prod*multiplyObject[key];
}
console.log(prod);