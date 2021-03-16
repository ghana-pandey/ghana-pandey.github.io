let abc = [{age:1}, {age:2}, {age:33} ];
function maxage()
{
  let maxage=abc.reduce((firstvlue,secondvalue)=>
  {
    return firstvlue.age>= secondvalue.age  ? firstvlue.age: secondvalue.age;
  });
  console.log("the maximum elemtn of array",maxage);
  return maxage;
}
const agearrray=peopleArray.map(maxage);
console.log(agearrray)