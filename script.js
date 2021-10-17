//$('hyperlinked_row_1').onclick = function(){clicked_table_row('hyperlinked_row_1')};

var images = document.getElementsByClassName("hover-image-div");


function $(x) {return document.getElementById(x);}

$('load-psychosis').onclick = function(){get_json_link('load-psychosis')};

function get_json_link(x){
    let link_json = $(x).getAttribute("data-linker");	
    console.log(link_json);    
    loadJSON(link_json);
}    

//toggles the css "show" class to hide or show the gallery div
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


function set_gallery_image(){    
    var attribute = this.getAttribute("data-image-name");

    //var gallery_image = $("image-holder-id");    
    //gallery_image.style.backgroundImage = attribute;

    $("inner-image-test").src = attribute;

    toggle_gallery("nothing");
}

//adds click listerns and assigns the function for when an image is clicked
for(var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', set_gallery_image, false);
}
    
//stops the gallery from closing when the inner div is clicked by stopping javascripts propagation
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
