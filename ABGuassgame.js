var readline = require('readline-sync');

var Ans = [];

for(var i = 0; i < 4; i++ )
    {
        do{
        var random = Math.floor(Math.random()*9)+1;
        Ans[i] = random;    //用陣列存產生後的亂數
        used = false;

        for(var j = 0; j < i; j++ )
            {
                if(Ans[i] == Ans[j])
                    {
                        used = true;
                        break;
                    }
            }       //判別是否有重複數字
        }while(used == true)
    }

    do{
    var G = readline.question("Guass Number(4D):");
    if(G < 1000 || G > 10000)
    {
        console.log("Please Enter Again!!!!");
    }
    }while(G < 1000 || G > 10000);

    for(a = 0; a < 4; a++)
    {
        for(b = 0; b < 4; b++)
        {
                if(G[a]==Ans[b])
                {
                    
                }
        }
    }

console.log(Ans);
console.log(G);
