function $(x) {return document.getElementById(x);}

const header = document.querySelector('header');
const section = document.querySelector('section');


/*
 const Pyhon_sheet = request.response;
  populateHeader(Pyhon_sheet);
  displayInfo(Pyhon_sheet);
*/

$('cheat-sheet-load').onclick = function(){clicked_anything('cheat-sheet-load')};
$('fundementals-load').onclick = function(){clicked_anything('fundementals-load')};

function loadJSON(thisthing) {
    let requestURL = thisthing;
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function() {
	const superHeroes = request.response;
	populateHeader(superHeroes);
	/*showHeroes(superHeroes);*/
    }

    
}

function clicked_anything(x){    
    let link_json = $(x).getAttribute("data-linker");	
    console.log(link_json);    
    loadJSON(link_json);
}

function populateHeader(jsonObj) {    
    const myH1 = document.createElement('h1');
    const myPara = document.createElement('p');
    
    myH1b.textContent = jsonObj['pageName'];
    header.appendChild(myH1b, myH1);	
    myParab.textContent = jsonObj['infoDump'];
    header.appendChild(myParab, myPara); 
    
}
