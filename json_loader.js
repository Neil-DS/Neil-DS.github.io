//------------- json loading

$('load-psychosis').onclick = function(){get_json_link('load-psychosis')};
$('Home').onclick = function(){get_json_link('Home')};

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


function populateHeader(jsonObj) {    
    const myH1 = document.createElement('h3');
    const myPara = document.createElement('p');

    console.log(myH1, myPara);    
    header.innerHTML = '';
    console.log(header.innerHTML, section);
    
    myH1.textContent = jsonObj['ProjectName'];
    header.appendChild(myH1);	
    myPara.textContent = jsonObj['InfoDump'];
    header.appendChild(myPara);
    
}

//-------- -------------
