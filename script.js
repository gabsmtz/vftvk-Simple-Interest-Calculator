function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    var value1 = parseFloat(document.getElementById("principal").value);
    if(value1<=0)
    {
     alert("Enter a Positive Number");
     return false;
    }
    else { 
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
    }   
}
function updateRate(rateval) 
{
    document.getElementById("rate_val").innerText=rateval;
}
