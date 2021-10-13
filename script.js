//$('hyperlinked_row_1').onclick = function(){clicked_table_row('hyperlinked_row_1')};

function $(x) {return document.getElementById(x);}

function clicked_table_row(x){
    var link_urll = $(x);
   
    window.location = link_urll.getAttribute("data-linker");   
}

function toggle_gallery(x){    
    //var popup = $("psychosisDIV");    
    //popup.classList.toggle("show");

    /*
    var popup_test = document.getElementsByClassName("showcase-item");
    for (let i = 0; i < popup_test.length; i++){	
	popup_test[i].classList.toggle("show");
    }
    */

    var popup = $("main-gallery");
    popup.classList.toggle("show");

    console.log("Toggling gallery...");   
}   

function do_nothing(e){
    if (!x) var x = window.event;
    x.cancelBubble = true;
    if (x.stopPropagation) x.stopPropagation();
}
    



/*
  stop scrollwheel when the main-gallery div is active.
*/
var mydiv = document.getElementById("main-gallery");
if (mydiv.addEventListener) {
    // IE9, Chrome, Safari, Opera
    mydiv.addEventListener("mousewheel", MouseWheelHandler, false);
    // Firefox
    mydiv.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
// IE 6/7/8
else 
    mydiv.attachEvent("onmousewheel", MouseWheelHandler);


function MouseWheelHandler(e) {

    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

    if(delta==1)         // if mouse scrolls up
    {
	e.preventDefault();
        e.stopPropagation();
        return false;         
    }
    if(delta==-1)        // if mouse scrolls down, we disable scrolling.
    {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    return false;
}
