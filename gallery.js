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

async function introduction1(){
    let films = await getFilms();
    let introductionContainer = document.querySelector('#introduction-container-1')
    for(let film of films){
        if(film.title == 'My Neighbor Totoro'){
            let title=document.createTextNode(film.title);
            introductionContainer.appendChild(title);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let description = document.createTextNode(film.description);
            introductionContainer.appendChild(description);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let director=document.createTextNode(film.director);
            introductionContainer.appendChild(director);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let producer=document.createTextNode(film.producer);
            introductionContainer.appendChild(producer);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let releaseDate=document.createTextNode(film.release_date);
            introductionContainer.appendChild(releaseDate);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
        }
    }
}

async function introduction2(){
    let films = await getFilms();
    let introductionContainer = document.querySelector('#introduction-container-2')
    for(let film of films){
        if(film.title == 'Princess Mononoke'){
            let title=document.createTextNode(film.title);
            introductionContainer.appendChild(title);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let description = document.createTextNode(film.description);
            introductionContainer.appendChild(description);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let director=document.createTextNode(film.director);
            introductionContainer.appendChild(director);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let producer=document.createTextNode(film.producer);
            introductionContainer.appendChild(producer);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let releaseDate=document.createTextNode(film.release_date);
            introductionContainer.appendChild(releaseDate);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
        }
    }
}

async function introduction3(){
    let films = await getFilms();
    let introductionContainer = document.querySelector('#introduction-container-3')
    for(let film of films){
        if(film.title == 'Spirited Away'){
            let title=document.createTextNode(film.title);
            introductionContainer.appendChild(title);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let description = document.createTextNode(film.description);
            introductionContainer.appendChild(description);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let director=document.createTextNode(film.director);
            introductionContainer.appendChild(director);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let producer=document.createTextNode(film.producer);
            introductionContainer.appendChild(producer);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let releaseDate=document.createTextNode(film.release_date);
            introductionContainer.appendChild(releaseDate);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
        }
    }
}

async function introduction4(){
    let films = await getFilms();
    let introductionContainer = document.querySelector('#introduction-container-4')
    for(let film of films){
        if(film.title == 'Arrietty'){
            let title=document.createTextNode(film.title);
            introductionContainer.appendChild(title);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let description = document.createTextNode(film.description);
            introductionContainer.appendChild(description);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let director=document.createTextNode(film.director);
            introductionContainer.appendChild(director);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let producer=document.createTextNode(film.producer);
            introductionContainer.appendChild(producer);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let releaseDate=document.createTextNode(film.release_date);
            introductionContainer.appendChild(releaseDate);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
        }
    }
}

async function introduction5(){
    let films = await getFilms();
    let introductionContainer = document.querySelector('#introduction-container-5')
    for(let film of films){
        if(film.title == 'From Up on Poppy Hill'){
            let title=document.createTextNode(film.title);
            introductionContainer.appendChild(title);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let description = document.createTextNode(film.description);
            introductionContainer.appendChild(description);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let director=document.createTextNode(film.director);
            introductionContainer.appendChild(director);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let producer=document.createTextNode(film.producer);
            introductionContainer.appendChild(producer);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
            let releaseDate=document.createTextNode(film.release_date);
            introductionContainer.appendChild(releaseDate);
            lineBreak(introductionContainer);
            lineBreak(introductionContainer);
        }
    }
}

setTimeout(function(){
    introduction1();
    introduction2();
    introduction3();
    introduction4();
    introduction5();
},0);

document.querySelector('#show1').addEventListener('click',async function(){
    let bgimgs = await getBG();
    let galleryContainer = document.querySelector('#gallery-container-1')
    for(let bgimg of bgimgs){
        if(bgimg.title == 'My Neighbor Totoro'){
            for(let x of bgimg.image){
                let img = document.createElement("img");
                img.src = x;
                galleryContainer.appendChild(img);
            }
            lineBreak(galleryContainer);
        }
    }
})


document.querySelector('#close1').addEventListener('click',function(){
    document.querySelector('#gallery-container-1').style.display='none';
})

document.querySelector('#show2').addEventListener('click',async function(){
    let bgimgs = await getBG();
    let galleryContainer = document.querySelector('#gallery-container-2')
    for(let bgimg of bgimgs){
        if(bgimg.title == 'Princess Mononoke'){
            for(let x of bgimg.image){
                let img = document.createElement("img");
                img.src = x;
                galleryContainer.appendChild(img);
            }
            lineBreak(galleryContainer);
        }
    }
})

document.querySelector('#show3').addEventListener('click',async function(){
    let bgimgs = await getBG();
    let galleryContainer = document.querySelector('#gallery-container-3')
    for(let bgimg of bgimgs){
        if(bgimg.title == 'Spirited Away'){
            for(let x of bgimg.image){
                let img = document.createElement("img");
                img.src = x;
                galleryContainer.appendChild(img)
            }
            lineBreak(galleryContainer);
        }
    }
})

document.querySelector('#show4').addEventListener('click',async function(){
    let bgimgs = await getBG();
    let galleryContainer = document.querySelector('#gallery-container-4')
    for(let bgimg of bgimgs){
        if(bgimg.title == 'Arrietty'){
            for(let x of bgimg.image){
                let img = document.createElement("img");
                img.src = x;
                galleryContainer.appendChild(img);
            }
            lineBreak(galleryContainer);
        }
    }
})

document.querySelector('#show5').addEventListener('click',async function(){
    let bgimgs = await getBG();
    let galleryContainer = document.querySelector('#gallery-container-5')
    for(let bgimg of bgimgs){
        if(bgimg.title == 'From Up on Poppy Hill'){
            for(let x of bgimg.image){
                let img = document.createElement("img");
                img.src = x;
                galleryContainer.appendChild(img);
            }
            lineBreak(galleryContainer);
        }
    }
})


