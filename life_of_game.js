var abc=[
    [0,0,0,0,0], // 0
    [0,1,0,0,0], // 1
    [0,0,0,0,0], // 2
    [0,0,0,0,0], // 3
    [0,0,0,0,0]   //4
];

var row=abc.length;
var col=abc[0].length;
var count=0;
var counta=0;

for(var a=0;a<row;a++){
    for(var b=0;b<col;b++){
        if(abc[a][b]==1){
            count+=1;
        }
    }
};

for(var a2=0;a2<row;a2++){
    for(var b2=0;b2<col;b2++){
        find(a2,b2);
    }
};

/*function find(i,j){
    for(var x = -1;x<=1;x++){
        for(var y = -1;y<=1;y++){
    if((i+x)<0||(j+x)<0){
        return 0;
    }else if(abc[i][j]==1){
        counta+=1;
    }
    }
}
};*/

console.log("There are "+count+" number 1.");
console.log("There are "+counta+" life.");