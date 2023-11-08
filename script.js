import * as myC5 from './myC5.js'
var words = [];
var word = [];




var g=0;

var die = false;
 
var word_num = 0;
var string = ""; 
var new_word = true;

var score=0;


var start = false;
for(let i =0; i<strings.length;i++){
  if(strings[i] != " "){
      word.push(strings[i]);
      continue;
  }
 
  words.push(word);
  //console.log(word);
  word = [];
}


var input_area = document.getElementById("input_area");
var score_area = document.getElementById("score");


var start_btn = document.getElementById("start_btn");
var restart_btn = document.getElementById("restart_btn");

restart_btn.style.display = "none";

function start_game(){
    die = false;
    word_num=0;
    g=0;
    score=0;
    start_btn.style.display = "none";
    restart_btn.style.display = "none";

    input_area.value = "";
    score_area.replaceChildren( "Score:"+score);
    input_area.style.pointerEvents = "auto";
    start = true;

}


start_btn.addEventListener("click",start_game);
restart_btn.addEventListener("click",start_game);


function exam(){
    //console.log(input_area.value);
    //console.log(string);
    if(input_area.value == string){
        new_word = true;
        input_area.value = "";
        score++;
        score_area.replaceChildren( "Score:"+score);
       
    }
}
input_area.addEventListener("keyup",exam );





myC5.draw_text("abf");


myC5.draw_canvas(w,h,"canvas_div")

function setup(){
    console.log("hello");
}

// function setup() {
//     var myCanvas = createCanvas(w, h);
//     myCanvas.parent("canvas_div");
//     frameRate(1); 
//     background(220); 
//     textSize(30);
//     text("Write in Down - game",55,50);
//     textSize(20);
   
  
   
// }

// function draw() {
//     if(start){

       
//         frameRate(1+(score/10)); 
       
           
        
    

        
//         if(g == end_time){
//             textSize(40);
//             die = true;
//         }

       

//         if(new_word){
//             g=0;
            
            
//             string = ""; 
//             new_word = false;
//             for(var i =0; i<words[word_num].length;i++){
//                 string+=words[word_num][i];
//             }
//             word_num++;
//         }
       
//         if(!die ){
//             textSize(20);
//             background(220);
            
//             text(string, 190-(words[word_num].length*3),side*(g*2)+20 );

//             // loadPixels();
//             // console.log(pixels);

            
//             stroke(255,0,0);
//             line(0, end_time*10*2-5, w, end_time*10*2-5);
//             fill(0,0,0);
//             stroke(0);
//             console.log(g);
//             g++;
            
//         }
       
//         if(die){      
            
//             text("YOU DIE",130,50);
            
//             restart_btn.style.display = "block";
//         }
//     }
    
// }
