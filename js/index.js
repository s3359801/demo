
$(function(){
    $(".nav .nav1 .nav_li").mouseover(function(){
        var i =$(this).index();
        if(i<6){
        $(".nav .nav1 .nav_li").eq(i).children(".mi").fadeIn( "200" , 'swing' , function (){} );
        $(".nav .nav1 .nav_li").eq(i).siblings().children(".mi").fadeOut( "200" , 'swing' , function (){} );
        }
        
    })
    $(".nav .nav1 .nav_li").mouseleave(function(){ 
        $(".nav .nav1 .nav_li").children(".mi").fadeOut( "200" , 'swing' , function (){} );;
    })
    $("#main_third .more_tap a").mouseover(function(){
        var i = $(this).index();
        $(this).addClass('lineshow').siblings().removeClass('lineshow');
        $('#main_third .tb_right .act').eq(i).css('display','block').siblings().css('display','none');
    })
    
})

var main = document.querySelector(".banner_box");
var imgs = document.querySelectorAll(".banner_box img");
var lis  = document.querySelectorAll(".banner_box .move_box ul li");
var left = document.querySelector(".left_go");
var right = document.querySelector(".right_go");
var uls  = document.querySelector(".four_bottom");
var leftI = document.querySelector(".left_i");
var rightI = document.querySelector(".right_i");
var ulBox = document.querySelector("#main_six .tap_box");
var liBox = document.querySelectorAll("#main_six  .tap_one .tap li");
var leftT = document.querySelector("#main_six  .tap_one .tap_left");
var rightT = document.querySelector("#main_six .tap_one .tap_right");
var tapS = document.querySelectorAll('#main_six .tap_box .mover span');

var img1W = imgs[0].clientWidth;
var li1W = liBox[0].clientWidth;
main.scrollLeft = 1*img1W;

var imgIndex = 1;
var numIndex = 0;
var liIndex = 0;
var moveIndex = 0;
var timer1 =null,timer2 =null,timer3 =null;
autoMove();
function autoMove (){
    clearInterval(timer1);
    timer1 = setInterval(function(){
        imgIndex++;
        if(imgIndex>imgs.length-1){
            imgIndex=2;
            main.scrollLeft = img1W *(imgIndex -1);
        }
       

        lis[numIndex].className = '';
        numIndex++;
        if(numIndex>lis.length-1){
            numIndex=0;
        }
        lis[numIndex].className="move_show";
        move();
    },5000)
}
for(var i = 0;i < lis.length;i++){
    lis[i].index = i;
    lis[i].onclick =function(){
        clearInterval(timer1);
        clearInterval(timer2);
        lis[numIndex].className="";
        
        imgIndex = this.index + 1;
        numIndex = this.index;
        lis[numIndex].className="move_show";

        autoMove();
        move();
    }
}
left.onclick = function(){
    clearInterval(timer1);
    clearInterval(timer2);
    imgIndex--;
    if(imgIndex<0){
        imgIndex = imgs.length - 3;
        main.scrollLeft = img1W *(imgIndex + 1);
    }

    lis[numIndex].className ='';
    numIndex--;
    if(numIndex<0){
        numIndex=lis.length -1;
    }
    lis[numIndex].className='move_show';

    autoMove();
    move();
}

right.onclick = function(){
    clearInterval(timer1);
    clearInterval(timer2);
    imgIndex++;
    if(imgIndex>imgs.length-1){
        imgIndex = 2;
        main.scrollLeft = img1W *(imgIndex - 1);
    }

    lis[numIndex].className ='';
    numIndex++;
    if(numIndex>lis.length-1){
        numIndex=0;
    }
    lis[numIndex].className='move_show';

    autoMove();
    move();
}

leftI.onclick = function(){
    liIndex --;
   if(liIndex<3&&liIndex>=0){
        uls.scrollLeft = (liIndex + 1) *1240;
        shopMove(uls,"1240",liIndex);
   }else{
        liIndex = 0;
       uls.scrollLeft = 0 ;
   }
}

rightI.onclick = function(){
   liIndex ++;
   if(liIndex<3){
        uls.scrollLeft = (liIndex -1) *1240;
        shopMove(uls,"1240",liIndex);
   }else{
       liIndex =2;
       uls.scrollLeft = liIndex  *1240;
   }
}
leftT.onclick = function(){
    tapS[moveIndex].className="mover_one";
    moveIndex --;
   if(moveIndex<liBox.length-1&&moveIndex>=0){
        tapS[moveIndex].className="mover_one one_show";
        ulBox.scrollLeft = (moveIndex + 1) *li1W;
        shopMove(ulBox,li1W,moveIndex);
   }else{
        moveIndex = 0;
       ulBox.scrollLeft = 0 ;
       tapS[moveIndex].className="mover_one one_show";
   }
}

rightT.onclick = function(){
    tapS[moveIndex].className="mover_one";
    moveIndex ++;
   if(moveIndex<liBox.length){
        tapS[moveIndex].className="mover_one one_show";
        ulBox.scrollLeft = (moveIndex - 1) *li1W;
        shopMove(ulBox,li1W,moveIndex);
   }else{
        moveIndex = liBox.length-1;
        ulBox.scrollLeft = moveIndex *li1W;
        tapS[moveIndex].className="mover_one one_show";
   }
}
for(var i = 0;i < tapS.length;i++){
    tapS[i].index = i;
    tapS[i].onclick =function(){
        clearInterval(timer3);
        tapS[moveIndex].className="mover_one";
        
        moveIndex = this.index;
        tapS[moveIndex].className="mover_one one_show";
        shopMove(ulBox,li1W,moveIndex);
    }
}
function shopMove(Dom,Dwidth,Index){
    var start = Dom.scrollLeft;
    var end = Dwidth*Index;
    var minStep = 0;
    var maxStep = 20;
    var everyStep = (end - start)/maxStep;

    clearInterval(timer3);
    timer3 = setInterval(function(){
        start += everyStep;
        minStep++;
        if(minStep==maxStep){
            clearInterval(timer3);
        }
        Dom.scrollLeft = start;
    },20)
    }


function move(){
    var start = main.scrollLeft;
    var end = img1W *imgIndex;
    var minStep = 0;
    var maxStep = 20;
    var everyStep = (end - start)/maxStep;

    clearInterval(timer1);
    timer2 = setInterval(function(){
        start += everyStep;
        minStep++;
        if(minStep==maxStep){
            clearInterval(timer2);
        }
        main.scrollLeft = start;
    },20)
    autoMove();
    }

 