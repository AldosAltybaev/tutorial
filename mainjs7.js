function doFirst(){
    barSize=600;
    myMovie=document.getElementById('snowman');
    playButton=document.getElementById('playButton');
    bar=document.getElementById('defaultBar');
    progressBar=document.getElementById('progressBar');
    
    playButton.addEventListener('click', playOrPause, false);
    bar.addEventListener('click', clickedBar, false);
       
}

function playOrPause(){
    if(!myMovie.paused && !myMovie.ended){
        myMovie.pause();
        playButton.innerHTML='Play';
        window.clearInterval(updateBar);
    }else{
        myMovie.play();
        playButton.innerHTML='Pause';
        updateBar=setInterval(update, 250);
    }
}

function update(){
    if(!myMovie.ended){
        var size=parseInt(myMovie.currentTime*barSize/myMovie.duration);
        progressBar.style.width=size+'px';
     }else{
         progressBar.style.width=size+'0px';
         playButton.innerHTML='Play';
         window.clearInterval(updateBar);
         
     }
}

function clickedBar(e){
    if(!myMovie.paused && !myMovie.ended){
        var mauseX=e.pageX-bar.offsetLeft;
        var newtime=mauseX*myMovie.duration/barSize;
        myMovie.currentTime=newtime;
        progressBar.style.width=mauseX+'px';
    }
}

window.addEventListener('load', doFirst, false);



















