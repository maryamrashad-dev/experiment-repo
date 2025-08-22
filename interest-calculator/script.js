function compute()
{
    var p = parseInt(document.getElementById("principal").value);

    if(p == NaN || p <= 0){
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = p * years * rate / 100;

    var amount = parseInt(p) + parseFloat(interest);

    var result = document.getElementById("result");

    var year = new Date().getFullYear() + parseInt(years)

    result.innerHTML = "If you deposit $" + "<mark>" + p + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";

}

const updateRate = () => {
    rateval = document.getElementById("rate").value;
    ratespan = document.getElementById("rate_val");

    ratespan.innerText = rateval;

}