"use strict";
{
let salaries={
    "john":100,
    "mary":300,
    "Hitler":700


};
function topSalary(salaries) {

    let max = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }
  describe("topSalary",function()
  {
it("returns top-paid",function()
{
    let salaries={
        "john":100,
        "mary":300,
        "Hitler":700
    
    
    }; 
    asserts.equal(topSalary(salaries),"Hitler");
});
  });
}

  