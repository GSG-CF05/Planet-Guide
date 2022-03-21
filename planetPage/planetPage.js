let planetName= localStorage.getItem('planet');
let planetImg='../assets/'+planetName+'.png';

//Creating a div with the planet name and image.
let header= document.createElement('div');
header.classList+='header';
document.body.appendChild(header);
let title= document.createElement('h1');
title.innerText=planetName;
title.classList+='title';
header.appendChild(title);
let planetPic= document.createElement('img');
planetPic.src=planetImg;
planetPic.classList+='planetImg'
header.appendChild(planetPic);