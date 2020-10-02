function calculator()
{
    this.read=function()
    {
        const prompt = require("prompt-sync")();

this.fnum = prompt("Please enter your first number: ");
this.snum=prompt("enter your second number");
    }
    this.sum = function() {
        return this.a + this.b;
      };
    
      this.mul = function() {
        return this.a * this.b;
      };
    }
    
    let Calculator = new Calculator();
    calculator.read();
    
    alert( "Sum=" + calculator.sum() );
    alert( "Mul=" + calculator.mul() );
    
