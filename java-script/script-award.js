let portfolios
let competitions
let artWorks
let imageHolder

async function getPortfolios(){
    let response
    try{
        response = await fetch(`jsons/portfolios.json`)
    }
    catch(error){
        console.log('There has been an error. Check for an error')
        console.log(error)
    }
    portfolios = await response.json()
    artWorks = portfolios.allArtwork
    console.log(portfolios)
}

function findCompetitions(){
    let awardCompetitionsNames = portfolios.awards;
    competitions = portfolios.awardWinning; 
    console.log(competitions);
    for(let i=0; i<awardCompetitionsNames.length; i++){
        let competitionName = awardCompetitionsNames[i];
        let competition = competitions[competitionName];
        let competitionTitle = competition.name;
        let artworkNames = competition.titles;
        
        imageHolder = document.querySelector(`#image-holder`)
        let newH3 = document.createElement('h3')
        newH3.textContent = `${competitionTitle}`

        imageHolder.appendChild(newH3)

        for(let i=0; i<artworkNames.length; i++){
            let artworkName = artworkNames[i]
            let artwork = competition[artworkName]
            getPhoto(artwork)
        }
    }
}

function getPhoto(artwork){
    let artworkId = artwork.id
    let artworkObject = artWorks[artworkId]
    addAward(artworkObject, artwork)
}

function addAward(artwork, award){
    if(award.id!="??"){
        let newIMG = document.createElement('img')
        let newH4i = document.createElement('h4')
        let newH4ii = document.createElement('h4')
        let newH4iii = document.createElement('h4')
        let newDiv = document.createElement('div')
    
        newDiv.classList.add("award-div")

        newIMG.setAttribute('src', artwork.jpg)
        newIMG.setAttribute('alt', artwork.alt)
        newIMG.classList.add("award-image")
    
        newH4i.textContent = artwork.title
        newH4ii.textContent = award.award
        newH4iii.textContent = award.category

        newDiv.appendChild(newIMG)
        newDiv.appendChild(newH4i)
        newDiv.appendChild(newH4iii)
        newDiv.appendChild(newH4ii)

        imageHolder.appendChild(newDiv)
    }
}

async function runProgram(){
    console.log('runProgram');
    await getPortfolios()
    findCompetitions()
}
document.addEventListener('DOMContentLoaded', runProgram);