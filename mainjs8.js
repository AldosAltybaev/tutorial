function doFirst(){
    var x= document.getElementById('canvas');
    canvas = x.getContext('2d');
    
    window.addEventListener("mousemove", tom, false);
}

function tom(e){
    canvas.clearRect(0,0,600,400);
    var xPos = e.clientX;
    var yPos = e.clientY;
    canvas.fillRect(xPos-50, yPos-50, 100, 100);
}
//    var pic = new Image();
//    pic.src="images/tesla.jpg";
//    pic.addEventListener("load", function(){canvas.drawImage(pic,0,0,x.width,x.height)}, false);
    //tutorial 42
    
    
//    canvas.font = "bold 22px Tahoma";
//    canvas.textAlign = "start";
//
//    canvas.save();
//    canvas.fillText("lets begin!", 10, 30);
//    
//    canvas.rotate(1);
//    canvas.fillText("after rotation", 60, 10);
//    
//    canvas.restore();
//    canvas.fillText("after restoring", 10, 30);
    // tutorial 41
    

    //    canvas.fillText("start", 10, 30);
//    canvas.translate(100, 150);
//    canvas.fillText("after translate", 0,0);
//    
//    canvas.rotate(1);
//    canvas.fillText("after rotate", 0,0);
//    
//    canvas.scale(1.5, 4);
//    canvas.fillText("after scale",0,20)
//    tutorial 40    
    

//    canvas.shadowOffsetX = 4;
//    canvas.shadowOffsetY = 4;
//    canvas.shadowBlur = 6;
//    canvas.shadowColor = 'rgba(0,0,255,.7)';
//    
//    canvas.font="bold 36px Tahoma";
//    canvas.textAlign="end";
//    canvas.fillText("Edinburg", 300, 100);  
//    html5 tutorial 39    
    
//    canvas.beginPath();
//    canvas.moveTo(50,50);
//    canvas.lineTo(50,250);
//    canvas.lineTo(300,200);
//    canvas.closePath();
//    canvas.stroke();
//    html5 tutorial 39
    
    
//    var g = canvas.createLinearGradient(0,0,100,100);
//    g.addColorStop(.0,"blue");
//    g.addColorStop(.5,"yellow");
//    g.addColorStop(1,"red");
//    canvas.fillStyle=g;
//    canvas.fillRect(0,0,100,100);
//    html5 tutorial 38 making sweet customs
    
//    canvas.fillStyle="blue";
//    canvas.strokeStyle="pink";
//    canvas.strokeRect(10,10,100,100);
//    canvas.fillRect(10,120, 100,100);
//    canvas.clearRect(20,130,45,65);

window.addEventListener("load", doFirst, false); 