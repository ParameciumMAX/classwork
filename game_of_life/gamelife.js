
const Live = 1;
const Dead = 0;

class Life{
   constructor(_row, _col){
        this.row = _row;
        this.col = _col;
        this.grid=[];//new Array()
        //2d array
        for(var _row=0;_row < this.row;_row++){
            this.grid.push([]);
            for(var _col=0;_col < this.col;_col++){
                this.grid[_row].push(Dead);
            }
        }
        
    }

    initialize = function(random){
        if(random == true){
            for(var _row=0;_row < this.row;_row++){
                for(var _col=0;_col < this.col;_col++){
                    this.grid[_row][_col] = (Math.random()<0.2) ? Live : Dead;
                }
            }
        }else{
        this.grid[1][1] = Live;
        this.grid[1][2] = this.grid[1][3] = this.grid[1][4] =Live;
        }
    }

    update = function(){
          var nextGrid = JSON.parse(JSON.stringify(this.grid));
          //travse all elements, count its neighbor
          var neighbor;
          for (let _row = 0; _row < this.row; _row++) {
            for (let _col = 0; _col < this.row; _col++) {
                neighbor = this.neighborCount(_row,_col);
                // update by 4 rules
                if(this.getStatusAt(_row,_col)==Live && (neighbor<=1 || neighbor>=4)){
                    nextGrid[_row][_col] = Dead;
                }
                if(this.getStatusAt(_row,_col)==Dead && neighbor==3){
                    nextGrid[_row][_col] = Live;
                }

            }
            
          }

          this.grid = null;
          this.grid = nextGrid;
    }

    neighborCount = function(row, col){
        var count=0;
        count += this.getStatusAt(row-1, col-1);
        count += this.getStatusAt(row-1, col); 
        count += this.getStatusAt(row-1, col+1); 
        
        count += this.getStatusAt(row, col-1);

        count += this.getStatusAt(row, col+1); 
        
        count += this.getStatusAt(row+1, col-1); 
        count += this.getStatusAt(row+1, col); 
        count += this.getStatusAt(row+1, col+1);      
        return count;   
    }

    getStatusAt = function(row, col){
        if(row<0 || col<0 || row >= this.row || col >= this.col){
           return Dead;
        }else{
            return this.grid[row][col];
        }
    }

    mapdraw = function(_canvas){
        var canvas = document.getElementById(_canvas).getContext("2d");
        this.size = Math.min(canvas.canvas.height/this.row,canvas.canvas.width/this.col);
        for(var _row=0;_row<this.row;_row++){
            for(var _col=0;_col<this.col;_col++){
                //ar2d[_row][_col]=>0,1
                if(this.grid[_row][_col]==Live){
                    canvas.fillStyle="#000fff"
                }else{
                    canvas.fillStyle="#ffffff"
                }
                //coordinate, width, heigth
                canvas.fillRect(_col*this.size,_row*this.size,this.size,this.size);
                canvas.strokeRect(_col*this.size,_row*this.size,this.size,this.size);
            }
        };
    }


    mapdrawpoint = function(_canvas,_row,_col){
        var canvas = document.getElementById(_canvas).getContext("2d");
        this.size = Math.min(canvas.canvas.height/this.row,canvas.canvas.width/this.col);
        if(this.grid[_row][_col]==Live){
            canvas.fillStyle="#000fff"
        }else{
            canvas.fillStyle="#ffffff"
        }
            //coordinate, width, heigth
            canvas.fillRect(_col*this.size,_row*this.size,this.size,this.size);
            canvas.strokeRect(_col*this.size,_row*this.size,this.size,this.size);
        }
}

function next(){
    myGame.update();
    myGame.mapdraw("map");
}

function mouseclick(event){
    var _row = Math.floor(event.offsetY/myGame.size);
    var _col = Math.floor(event.offsetX/myGame.size);
    
    //myGame.grid[_row][_col] = (myGame.getStatusAt(_row,_col)==Live) ? Dead : Live;
//  = if(myGame.getStatusAt(_row,_col)==Live){
//     myGame.grid[_row][_col]=Dead;
//    }else{
//     myGame.grid[_row][_col]=Live;
//    }
    myGame.grid[_row][_col] = Number(!myGame.getStatusAt(_row,_col));

    myGame.mapdrawpoint("map",_row,_col);
}

function random(){
    myGame.initialize(true);
    myGame.mapdraw("map");
}

var time;
function run(){
    var step = document.getElementById("step").value;
    time = setInterval(next, Number(step));
}

function stop(){
    clearInterval(time);
}

var myGame = new Life(100,100);
var myGame2 = new Life(100,100);

myGame.initialize();
myGame.mapdraw("map");

var running= setTimeout(next,1000);