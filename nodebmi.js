    var readlineSync = require('readline-sync');

    var weight=readlineSync.question("Enter your weight(KG):");
    var height=readlineSync.question("Enter your height(CM):");

    var BMI = weight / ((height/100 )** 2);
    //document.getElementById("BMI").innerHTML;
    if (BMI<18.5)
        {
            console.log("你的BMI值為"+BMI+"，過輕")
    }else
    if(18.5<=BMI&&BMI<24)
        {
            console.log("你的BMI值為"+BMI+"，為適中")
    }else
    if(24<=BMI&&BMI<27)
    {
            console.log("你的BMI值為"+BMI+"，過重")
    }else
    if(BMI>=27){
            console.log("你的BMI值為"+BMI+"，為肥胖")
    };

    console.log("Hello, Your BMI is:"+ BMI);