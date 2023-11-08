var canvas_div;
var canvas = document.createElement("canvas");
var ctx;
  
var intervalID;
//sizes 
var text_size = 16;
var width;
var height;
var line_size=10;
// colors

var canvas_color = [220,220,220];
var text_color = [0,0,0];

var frameRateCount = 1000;

var line_color=[0,0,0];
// colors

//draws

function line(x1,y1,x2,y2){
    ctx.lineWidth = line_size;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function draw_canvas(w,h,id){
    width = w;
    height = h;
    canvas_div = document.getElementById(id);

   
    var headerText = document.createTextNode("Hello World"); 
    canvas.appendChild(headerText); 
    canvas.style.backgroundColor = 'rgb(' + canvas_color[0] + ',' + canvas_color[1] + ',' + canvas_color[2] + ')';
    canvas.style.height = h+"px";
    canvas.style.width = w+"px";
    canvas_div.appendChild(canvas); 
    ctx= canvas.getContext("2d");
    
}


function text(text,x,y){
    ctx.fillStyle = 'rgb(' + line_color[0] + ',' + line_color[1] + ',' + line_color[2] + ')';
   
    ctx.font = text_size+"px Calibri";
    ctx.strokeText(text, x, y);
}
// draws
//sets
function set_frameRate(frameRate){
    frameRateCount = frameRate;
}
function background(r,g,b){
    canvas_color = [r,g,b];
   
    canvas.style.backgroundColor = 'rgb(' + canvas_color[0] + ',' + canvas_color[1] + ',' + canvas_color[2] + ')';
   
    ctx.clearRect(0,0,width,height)

}
function textColor(r,g,b){
    text_color = [r,g,b];
}
function textSize(t_s){
    text_size = t_s;
}
function set_lineColor(r,g,b){
    line_color = [r,g,b];
    ctx.strokeStyle='rgb(' + line_color[0] + ',' + line_color[1] + ',' + line_color[2] + ')';
   
}
function set_lineSize(size){
    line_size=size;
}
//set

//global
function setup(){ return false}
function draw(){}

function Loop(){
    console.log('12')
    setTimeout(()=>{
                draw();
                setTimeout(Loop,frameRateCount);
            }, frameRateCount);
            //setInterval(Loop,10);
}
//global



//run
const setup_interval_id = setInterval(()=>{
    if(!setup()){
        clearInterval(setup_interval_id);
    }
},100);

setTimeout(Loop, "1 second");