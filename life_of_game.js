var abc=[
    [0,0,0,0,0], // 0
    [0,1,0,1,0], // 1
    [0,0,1,0,0], // 2
    [0,1,0,1,0], // 3
    [0,0,0,0,0]   //4
];

var row=abc.length;
var col=abc[0].length;
var count;

for(var a=0;a<row;a++){
    for(var b=0;b<col;b++){
        if(abc[a][b]==1){
            count+=1;
        }
    }
};


console.log("There here"+count+"number 1");