let planet=document.querySelectorAll('.planet')
for(let i=0;i<8;i++){
planet[i].addEventListener('click',(planet) => {savePlanetInfo(planet)})
}

function savePlanetInfo(planet){
  let info= planet.path[0].tagName='IMG'? planet.path[1].querySelector('.title').innerText:planet.path[2].querySelector('.title').innerText;
    localStorage.setItem('planet',info)
    location. replace("../planetPage/planetPage.html")
}
