window.onbeforeunload=function(){window.scrollTo(0,0)}
$(document).ready(function(){$("body").addClass("overflow-hidden")
setTimeout(function(){$("body").removeClass("overflow-hidden")},1000*14);setTimeout(function(){$(".page-links a").addClass("end-animation")},1000*13);function scrollTo(link,page){var pageLinks=".page-links "+link+"";$(pageLinks).click(function(event){event.preventDefault();$("html, body").animate({scrollTop:$(page).offset().top,scrollLeft:$(page).offset().left},500)})}
scrollTo(".home-link",".home-section");scrollTo(".about-link",".about-section");scrollTo(".work-link",".work-section");scrollTo(".contact-link",".contact-section");$(".portrait").click(function(event){event.preventDefault();$(".section-wrapper").addClass("portrait")
$("body").css("overflow","hidden auto")});$(".landscape").click(function(event){event.preventDefault();$(".section-wrapper").removeClass("portrait");$("body").css("overflow","auto hidden")});const container=$(".bouncing");function rand(min,max,isInt){var min=min||0,max=max||1,isInt=isInt||!1,num=Math.random()*(max-min)+min;return(isInt)?Math.round(num):num}
function addBall(){var newBall=$("<ball />").appendTo(container);var size=rand(10,150);newBall.css({"position":"absolute","width":size+"px","height":size+"px","opacity":rand(.1,.9),"background-color":"rgb("+rand(0,255,!0)+","+rand(0,255,!0)+","+rand(0,255,!0)+")","top":rand(0,container.height()-size),"left":rand(0,container.width()-size)}).attr({"data-dX":rand(-10,10),"data-dY":rand(1,10)})}
function moveBall(){var maxX=container.width(),maxY=container.height();$("ball",container).each(function(i,b){var ball=$(b),pos=ball.position()
x=pos.left,y=pos.top,dX=parseFloat(ball.attr("data-dX")),dY=parseFloat(ball.attr("data-dY")),size=ball.height();if(x+dX+size>maxX||x+dX<0)ball.attr("data-dX",(dX=-dX));if(y+dY+size>maxY||y+dY<0)ball.attr("data-dY",(dY=-dY));ball.css({"top":y+dY,"left":x+dX})})}
window.setInterval(moveBall,50)
$(".clear-ball").click(function(){container.empty()});var facts=["I'm 21 years old","At some point in my life, I had 5 cats (preparation for my future as a cat lady) and their names were Dawn, Dusk, Sunset, Sky and Nightfall","I'm a Systems Engineering student","I live in Lagos, Nigeria","My favorite color is black (until the day that a darker color is invented)","I can touch my nose with my tongue","I can say the alphabet backwards. Not like perfectly but still.","My favorite ice cream flavor is Cookies n' Cream","I sing in the shower. And out of it. Everywhere. I sing everywhere.","I practiced yoga for 2 years (then took a hiatus because school)","I taught ballet for 9 months (even though I had no training whatsoever prior to that but YouTube I guess)","I taught art to children for 2 years (it was mostly paper folding, a lot of which I just Googled)","I've been learning French on Duolingo for about 2 years and I finished the course once. (which means I can translate an entire paragraph written in French, provided it's at elementary level)","My guilty pleasure is reading trashy fanfiction (not on Wattpad though, I do have standards)","I've worked over 8 jobs in the past 3 years (ranging from furniture salesperson to yoga instructor)","I taught myself how to build websites 2 years ago (and look at me now, not too shabby eh)","My major goal right now is to get an apartment, a cat and fairy lights, in that order","If I wasn't a Jemima, I might have liked to be a Kalila","I have a (chopped-off) 6th finger on both hands","I'm a terrible chess player, a mediocre Scrabble player and a vicious Monopoly winner (if you don't want to lose, try not being poor lol)","I have a new favorite song every day","I like the idea of swimming but the action itself just seems like stress","My favorite movie genre is rom-coms and my favorite rom-com is About Time","If I were a color, I'd either be #FFF8E7 or #101D69","If I wasn't a developer, I'd like to own a bookshop (not that two are mutually exclusive)",];function factGenerator(){var index=Math.floor(Math.random()*facts.length);var fact=facts[index];facts.splice(index,1);if(facts.length==0){return($(".about-section .fact").html("And that's all, folks!"))}
return($(".about-section .fact").html(fact))}
$(".about-section").mousedown(function(){addBall();factGenerator();$(".about-section .content").removeClass("hidden");$(".about-section .intro").html("")});var work=$(".work-section")
var workLeft=work.offset().left;var workTop=work.offset().top;var workWidth=work.width();var workHeight=work.height();var scrollLock=!1;var scrollTimer=null;function lines(){var lines=$(".line");if(lines.length){for(var i=0;i<lines.length-1;i++){lines[i].remove()}}
for(i=0;i<workHeight/5;i++){var div=$("<div />").appendTo($(".work-section"));var className="line line-"+i+"";var time=Math.random()*5;div.addClass(className);div.css({"top":i*10+"px","animation":"lines "+time+"s infinite",})}}
function drawLines(){scrollTimer=null;lines();setTimeout(function(){$(".line").remove();$(".work-section .content").removeClass("hidden");$(".work-section").addClass("background")},1000*4,scrollLock=!0)}
$(window).scroll(function(){var windowScrollLeft=$(this).scrollLeft();var windowScrollTop=$(this).scrollTop();if(scrollTimer){clearTimeout(scrollTimer)}
if(!scrollLock){if(($(document).width()>workWidth*1.5&&windowScrollLeft>workLeft-(workWidth/2))||($(document).height()>workHeight*1.5&&windowScrollTop>workTop-(workHeight/2))){scrollTimer=setTimeout(drawLines,100)}}});var slideIndex=1;showWorksDone(slideIndex);showWorksWritten(slideIndex);$(".works-done .previous").click(function(){showWorksDone(slideIndex+=-1)});$(".works-done .next").click(function(){showWorksDone(slideIndex+=1)});$(".works-written .previous").click(function(){showWorksWritten(slideIndex+=-1)});$(".works-written .next").click(function(){showWorksWritten(slideIndex+=1)});function showSlides(n,slideName){const slides=$(slideName);if(n>slides.length){slideIndex=1}
if(n<1){slideIndex=slides.length}
for(var i=0;i<slides.length;i++){slides[i].style.visibility="hidden"}
slides[slideIndex-1].style.visibility="visible"}
function showWorksDone(n){showSlides(n,".works-done .work");setTimeout(function(){$(".works-done .static")[0].style.display="none"},500,$(".works-done .static")[0].style.display="block",)}
function showWorksWritten(n){showSlides(n,".works-written .work")}
$("form :input").focus(function(){$("label[for='"+this.id+"']").addClass("labelfocus")}).blur(function(){if(!$(this).val()){$("label").removeClass("labelfocus")}})})