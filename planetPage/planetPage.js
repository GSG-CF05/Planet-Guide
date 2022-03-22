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

//fetching planet info
fetch('https://api.le-systeme-solaire.net/rest/bodies/')
.then((response=>{return response.json()
}))
.then(result=>{
    
    let planet=result.bodies[planetFinder(result,planetName)];
    let moonNum=planet.moons?planet.moons.length:0;
    let gravity=planet.gravity+'m/s^2';
    let mass=planet.mass.massValue+'*10^'+planet.mass.massExponent;
    let radius=planet.meanRadius +'Km'
    let avgTemp=planet.avgTemp+' K';

   
})
// finds the planet from the api data
function planetFinder(result, planetN){
    let lengthh=287;
    let solution;
    for(let i=0;i<lengthh;i++)
    {
        if(result.bodies[i].isPlanet== true && result.bodies[i].englishName==planetN){
            solution=i;
            break;
        }
    }
    return solution;
}