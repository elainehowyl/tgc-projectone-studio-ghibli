//get films api from studio ghibli
async function getFilms(){
    let url = 'https://ghibliapi.herokuapp.com/films';
    let response = await axios.get(url)
    return response.data;
}
//get images from local json file
async function getBG(){
    let url2 = 'still-wallpapers.json';
    let response = await axios.get(url2);
    return response.data;
}
// linebreak function
function lineBreak(element){
    let lineBreak = document.createElement('br');
    return element.appendChild(lineBreak);
}


//function to display films info from studio ghibli api
async function getFilmsInfo(containerID,filmTitle){
    let films = await getFilms();
    let introductionContainer = document.querySelector(containerID)
    for(let film of films){
        if(film.title == filmTitle){
            let title=document.createTextNode("Title: " + film.title);
            introductionContainer.appendChild(title);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let description = document.createTextNode("Synopsis: " + film.description);
            introductionContainer.appendChild(description);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let director=document.createTextNode("Director: " + film.director);
            introductionContainer.appendChild(director);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let producer=document.createTextNode("Producer: " + film.producer);
            introductionContainer.appendChild(producer);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let releaseDate=document.createTextNode("Release Date: " + film.release_date);
            introductionContainer.appendChild(releaseDate);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
        }
    }
}

//function to display images from still-wallpapers.json 
async function getImages(galleryID,filmTitle){
    let bgimgs = await getBG();
    let galleryContainer = document.querySelector(galleryID);
    for(let bgimg of bgimgs){
        if(bgimg.title == filmTitle){
            for(let x of bgimg.image){
                let img = document.createElement("img");
                img.src = x;
                galleryContainer.appendChild(img);
            }
            lineBreak(galleryContainer);
        }
    }
    let copyRight = document.createTextNode('© 2020 All Rights Reserved, Studio Ghibli');
    galleryContainer.appendChild(copyRight);
}

getFilmsInfo('#introduction-container-1','My Neighbor Totoro');
getFilmsInfo('#introduction-container-2','Princess Mononoke');
getFilmsInfo('#introduction-container-3','Spirited Away');
getFilmsInfo('#introduction-container-4','Arrietty');
getFilmsInfo('#introduction-container-5','From Up on Poppy Hill');


document.querySelector('#show1').addEventListener('click', async function(){
    await getImages('#gallery-container-1','My Neighbor Totoro')
})
document.querySelector('#show2').addEventListener('click', async function(){
    await getImages('#gallery-container-2','Princess Mononoke')
})
document.querySelector('#show3').addEventListener('click', async function(){
    await getImages('#gallery-container-3','Spirited Away')
})
document.querySelector('#show4').addEventListener('click', async function(){
    await getImages('#gallery-container-4','Arrietty')
})
document.querySelector('#show5').addEventListener('click', async function(){
    await getImages('#gallery-container-5','From Up on Poppy Hill')
})

