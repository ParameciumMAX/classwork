var readline = require('readline-sync');
var A = Math.floor(Math.random()*10); //0~9

while(true)
{
    do
    {
        var guass = readline.questionInt("Guass The Number(0 ~ 9):");
    }while(guass < 0 || guass > 9)
        
    if(A==guass)
    {
        console.log("You Win!!!! Good Job");
        var z = readline.question("Play Again?(Y/N):");
        if( z == "N" || z == "n")
        {
            break;
        }else
        {
            var A = Math.floor(Math.random()*10); //0~9
        }
    }else
    {
        console.log("Wrong Please Guass Again");
    }
}