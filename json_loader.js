/*
$('load-psychosis').onclick = function(){get_json_link('load-psychosis')};
$('load-cooking').onclick = function(){get_json_link('load-cooking')};
$('load-assorted').onclick = function(){get_json_link('load-assorted')};
$('load-tayside').onclick = function(){get_json_link('load-tayside')};
*/
$('Home').onclick = function(){get_json_link('Home')};
$('Showcase').onclick = function(){get_json_link('Showcase')};

const header = document.querySelector('header');
const section = document.querySelector('section');

function get_json_link(x){
    let link_json = $(x).getAttribute("data-linker");	
    console.log(link_json);    
    loadJSON(link_json);   
}

function loadJSON(goto_url) {
    let requestURL = goto_url;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function() {
	const page_info = request.response;
	populateHeader(page_info);
    }    
}

//
function populateHeader(jsonObj) {    
    const my_header = document.createElement('h3');  
    header.innerHTML = '';
    
    my_header.textContent = jsonObj['PageHeader'];
    header.appendChild(my_header);	

    var showcase_peice = '';
    var each_sub = Object.keys(jsonObj['SubHeaders']).length;
    for(var i = 0; i < each_sub; i++){
	showcase_peice += jsonObj['SubHeaders'][i].Title + jsonObj['SubHeaders'][i].InfoDump;
    }
    
    section.innerHTML = showcase_peice;

    /*
    //when the page is reloaded it invalidates any onclick javascript functions that belonged inside it and needs to be remade.
    $('load-psychosis').onclick = function(){get_json_link('load-psychosis')};
    $('load-cooking').onclick = function(){get_json_link('load-cooking')};
    $('load-assorted').onclick = function(){get_json_link('load-assorted')};
    $('load-tayside').onclick = function(){get_json_link('load-tayside')};
    */

    for(var i = 0; i < images.length; i++) {
	images[i].addEventListener('click', set_gallery_image, false);
    }
    
    console.log(section);
}

