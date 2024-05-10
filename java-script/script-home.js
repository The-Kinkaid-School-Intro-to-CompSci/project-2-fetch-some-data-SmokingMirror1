let portfolios
let HTMLElements = {
}

function getHTMLElements(){
}

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
    console.log(portfolios)
}

function addImages(portfolio){
    let photos = portfolio.photos
    console.log(photos)
    for(i=0; i<photos.length; i++){
        let imageHolder = document.querySelector(`#image-holder`)
        let newIMG = document.createElement(`img`)

        let photo = photos[i]

        newIMG.setAttribute('src', photo.jpg)
        newIMG.setAttribute('alt', photo.alt)
        newIMG.classList.add("home-image")

        imageHolder.appendChild(newIMG)
    } 
}

async function runProgram(){
    console.log('runProgram');
    getHTMLElements()
    await getPortfolios()
    addImages(portfolios.xvii)
    addImages(portfolios.newYork)
    //your code goes here
}
document.addEventListener('DOMContentLoaded', runProgram);