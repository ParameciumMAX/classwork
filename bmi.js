
function countBMI()
{
    var weight=Number(document.getElementById("weight").value);
    var height=Number(document.getElementById("height").value);

    var BMI = weight / ((height/100 )** 2);
    document.getElementById("BMI").innerHTML;

    console.log("Hello, Your BMI is:"+ BMI);
}