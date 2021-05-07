var down=0,right=0,left=0,up=0,r,b,rx=10,ry=10;
var backgrounds=["mars.jpg", "mars.png"];
var random=Math.floor(Math.random()*backgrounds.length);
var ctx=document.getElementById("Canvas").getContext("2d");
window.addEventListener('keydown',key_down);
function key_down(event){
  // console.log(event);
  if(event.keyCode==37){
    left=1;
    console.log("Left");
  }
  // if(event.keyCode==32){
  //   load__();
  // }
  if(event.keyCode==38){
    up=1;
    console.log("Up");
  }
  if(event.keyCode==39){
    right=1;
    console.log("Right");
  }
  if(event.keyCode==40){
    down=1;
    console.log("Down");
  }
  action();
}
function action(){
  if(left==1){
    Left();
  }
  if(up==1){
    Up();
  }
  if(right==1){
    Right();
  }
  if(down==1){
    Down();
  }
}
window.addEventListener('keyup',key_up);
function key_up(event){
  // console.log(event);
  if(event.keyCode==37){
    left=0;
  }
  if(event.keyCode==38){
    up=0;
  }
  if(event.keyCode==39){
    right=0;
  }
  if(event.keyCode==40){
    down=0;
  }
}
function load__(){
    b=new Image();
    b.onload=function(){
      ctx.drawImage(b,0,0,ctx.canvas.width,ctx.canvas.height);
    };
    b.src=backgrounds[random];
    random=Math.floor(Math.random()*backgrounds.length);
    r=new Image();
    r.onload=function(){
      ctx.drawImage(r,rx,ry,50,50);
    };
    r.src='rover.png';
}
function Left(){
  if(rx>5){
    rx-=10;
    b.onload();
    r.onload();
  }
}
function Right(){
  console.log("Right");
  if(rx<ctx.canvas.width-55){
    rx+=10;
    b.onload();
    r.onload();
  }
}
function Down(){
  console.log("Down");
  if(ry<ctx.canvas.height-55){
    ry+=10;
    b.onload();
    r.onload();
  }
}
function Up(){
  if(ry>5){
    ry-=10;
    b.onload();
    r.onload();
  }
}