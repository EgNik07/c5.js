import lt from './letters.json' assert { type: "json" };
export const letters = lt;
export var canvas_div;
export var canvas = document.createElement("canvas");

var intervalID;

var a = 220;
var b = 220;
var c = 220;

var frameRateCount = 1000;
  
function draw_letter(letter){
   
    for(var i of letters[letter]){
        
          console.log(i);
        
    }
}

export function draw_canvas(w,h,id){
    canvas_div = document.getElementById(id);

   
    var headerText = document.createTextNode("Hello World"); 
    canvas.appendChild(headerText); 
    canvas.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
    canvas.style.height = h+"px";
    canvas.style.width = w+"px";
    canvas_div.appendChild(canvas); 
    
}


export function draw_text(text){
   
    for(var i of text){
      
            draw_letter(i);
        
      
    };
}
//sets
export function set_frameRate(frameRate){
    frameRateCount = frameRate;
}

function Loop(){
    try {
        intervalID = setInterval(draw, frameRateCount);

    } catch (error) {
        
    }
    
}
function stopLoop() {
    clearInterval(nIntervId);
    nIntervId = null;
}
setInterval(Loop);
