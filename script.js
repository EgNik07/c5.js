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







function setup(){
    console.log("345");

    draw_canvas(w,h,"canvas_div");

   
   

}
var g=0;
function draw(){
    console.log("hello");
    g++;
    set_frameRate(1000);
    background(50+g,50+g,200);
    textSize(15);
    
    text("Write in Down - game",65,20);
    // textSize(20);
    if(g == end_time){
        textSize(15);
        die = true;
    }


    if(start){

       
        set_frameRate(1000+(score/10)); 
       
           
  
    

        
       

       

        if(new_word){
            g=0;
            
            
            string = ""; 
            new_word = false;
            for(var i =0; i<words[word_num].length;i++){
                string+=words[word_num][i];
            }
            word_num++;
        }
       
        if(!die ){
            textSize(5);
            background(220,220,220);
            
            text(string, 190-(words[word_num].length*3),side*(g*2)+20 );

            // loadPixels();
            // console.log(pixels);

            
            set_lineColor(255,0,0);
            line(0, end_time*10*2-5, w, end_time*10*2-5);
            
            set_lineColor(0,0,0);
            console.log(g);
            g++;
            
        }
       
        if(die){      
            
            text("YOU DIE",130,50);
            
            restart_btn.style.display = "block";
        }
    }
    
}
