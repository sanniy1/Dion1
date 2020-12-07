var diam1=0;

function setup() {
  createCanvas(400, 435);
}

function draw() {
  background("#ad3367");
  fill("#add8e6");
  stroke("##8A0868");
  strokeWeight(9);
  ellipse(50,100,20,20);
  fill(230,diam1,245);
  ellipse(diam1,288,diam1,diam1);
  textSize(diam1,2);
  textFont("timesnewroman");
  textStyle(ITALIC);
  textAlign(LEFT);
  text("Dion",40,diam1)
  }



function mousePressed (){
  if(diam1>260){
    diam1=0;
  }else{
    diam1=diam1+20
  }
}

