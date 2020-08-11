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

    const myH1b = document.createElement('h1');
    const myParab = document.createElement('p');

    mybool = header.hasChildNodes();
    console.log('hey');
    
    if(mybool){	
	myH1b.textContent = jsonObj['pageName'];
	header.replaceChild(myH1b, myH1);
	
	myParab.textContent = jsonObj['infoDump'];
	header.replaceChild(myParab, myPara);
    }
    else{	
	myH1.textContent = jsonObj['pageName'];
	header.appendChild(myH1);
	
	myPara.textContent = jsonObj['infoDump'];
	header.appendChild(myPara);
    }

    
}
