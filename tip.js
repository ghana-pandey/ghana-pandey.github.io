function pageLoad()
{
document.getElementById("btn").onClick=okayClick;
window.onload=pageLoad;
}
 function okayClick()
{
let billAmt=document.getElementById("subtotal").value;
let tipAmt=document.getElementById("tip").value;
document.getElementById('total').innerHTML = billAmt+tipAmt;
}


