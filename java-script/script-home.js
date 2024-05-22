let portfolios
let artWorks

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

function addImages(portfolio){
    let photos = portfolio.photos
    for(i=0; i<photos.length; i++){
        let imageHolder = document.querySelector(`#image-holder`)
        let newIMG = document.createElement(`img`)

        let photoId = photos[i]
        let photo = artWorks[photoId]

        newIMG.setAttribute('src', photo.jpg)
        newIMG.setAttribute('alt', photo.alt)
        newIMG.classList.add("home-image")

        imageHolder.appendChild(newIMG)
    } 
}

async function runProgram(){
    console.log('runProgram');
    await getPortfolios()
    addImages(portfolios.newYork)
    //your code goes here
}
document.addEventListener('DOMContentLoaded', runProgram);