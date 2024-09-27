    var readlineSync = require('readline-sync');

    var weight=readlineSync.questionint("Enter your weight(KG):");
    var height=readlineSync.questionint("Enter your height(CM):");

    var BMI = weight / ((height/100 )** 2);
    //document.getElementById("BMI").innerHTML;
    var a =number(BMI);
    switch (a)
    {
        case(18.5 < a):
            console.log("你的BMI值為"+BMI+"，過輕")
            break
        case(18.5 <= a && a < 24):
            console.log("你的BMI值為"+BMI+"，為適中")
            break
        case(24 <= a && a<27):
            console.log("你的BMI值為"+BMI+"，過重")
            break
        case(a>=27):
            console.log("你的BMI值為"+BMI+"，為肥胖")
            break
    };