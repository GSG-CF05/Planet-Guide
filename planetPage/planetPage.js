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

     //building the html of the info portion of the page

 let infoDiv=document.createElement('div');
 infoDiv.classList+='planetInfoDiv';
 document.querySelector('.div1').appendChild(infoDiv);

 let planetProperties=document.createElement('div');
 planetProperties.classList+='planetProperties';
 infoDiv.appendChild(planetProperties);

 let infoResults=document.createElement('div');
 infoResults.classList+='results';
 infoDiv.appendChild(infoResults);

 //moon number
 let moonNumE=document.createElement('p');
 moonNumE.classList+='planetInfoEle';
 moonNumE.innerText=moonNum;
 infoResults.appendChild(moonNumE);

 let moonNumE1=document.createElement('p');
 moonNumE1.classList+='planetInfoEle';
 moonNumE1.innerText='Moons No.:';
 planetProperties.appendChild(moonNumE1);
 //gravity
 let gravityE=document.createElement('p');
 gravityE.classList+='planetInfoEle';
 gravityE.innerText=gravity;
 infoResults.appendChild(gravityE);

 let gravityE1=document.createElement('p');
 gravityE1.classList+='planetInfoEle';
 gravityE1.innerText='Gravity:';
 planetProperties.appendChild(gravityE1);

  //mass
  let massE=document.createElement('p');
  massE.classList+='planetInfoEle';
  massE.innerText=mass;
  infoResults.appendChild(massE);

  let massE1=document.createElement('p');
  massE1.classList+='planetInfoEle';
  massE1.innerText='Mass:';
  planetProperties.appendChild(massE1);
  //radius
  let radiusE=document.createElement('p');
  radiusE.classList+='planetInfoEle';
  radiusE.innerText=radius;
  infoResults.appendChild(radiusE);

  let radiusE1=document.createElement('p');
  radiusE1.classList+='planetInfoEle';
  radiusE1.innerText='Radius:';
  planetProperties.appendChild(radiusE1);
  //average Temprature
  let avgTempE=document.createElement('p');
  avgTempE.classList+='planetInfoEle';
  avgTempE.innerText=avgTemp;
  infoResults.appendChild(avgTempE);

  let avgTempE1=document.createElement('p');
  avgTempE1.classList+='planetInfoEle';
  avgTempE1.innerText='Avg. Temp.:';
  planetProperties.appendChild(avgTempE1);
   
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



  //fetching a related article
fetch("https://free-news.p.rapidapi.com/v1/search?q="+planetName+"%20planet&lang=en", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "free-news.p.rapidapi.com",
        "x-rapidapi-key": "b58823edf5msh61f4aca11339981p12e19fjsn830412781857"
    }
})
.then(response => {
    return response.json();
})
.then(results =>{
    let length=results.articles.length;
    let randomIndex=Math.floor(10*Math.random());
    let article=results.articles[randomIndex];
    let articleTitle=article.title;
    let articleSummary=article.summary;
    let articleLink=article.link;
    console.log(articleLink)})