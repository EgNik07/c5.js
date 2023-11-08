var canvas_div;
var canvas = document.createElement("canvas");
var ctx;
  
var intervalID;
//sizes 
var text_size = 16;

// colors

var canvas_color = [220,220,220];
var text_color = [0,0,0];

var frameRateCount = 1000;

// colors

//draws

function draw_letter(letter){
   
}

function draw_canvas(w,h,id){
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
    ctx.font = "48px serif";
    ctx.strokeText("Hello world", x, y);
}
// draws
//sets
function set_frameRate(frameRate){
    frameRateCount = frameRate;
}
function background(r,g,b){
    canvas_color = [r,g,b];
    ctx.fillStyle = "red";
    ctx.fill();
    canvas.style.backgroundColor = 'rgb(' + canvas_color[0] + ',' + canvas_color[1] + ',' + canvas_color[2] + ')';
}
function textColor(r,g,b){
    text_color = [r,g,b];
}
function textSize(t_s){
    text_size = t_s;
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