function changeToCover(portfolio){
    console.log(portfolio)
    let coverId = portfolio.cover
    let coverPhoto
    let photos = portfolio.photos
    console.log(photos)
    for(i=0; i<photos.length; i++){
        let photo = photos[i]
        console.log(photo.title)
        if(photo.id == coverId){
            coverPhoto = photo.jpg
        }
    }
}

function addArtistStatement(portfolio){
    let artistStatement = portfolio.artistStatement
    let textBox = document.querySelector("#testArtistStatement")
    textBox.textContent = artistStatement
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