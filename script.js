// for index.html
setTimeout(function(){
    document.querySelector('#loading-bar-container').style.visibility='hidden';
},8000);


setTimeout(function(){
    document.querySelector('#enter').style.display='block';
},9000);

// for select-ticket-page.html
let layerOne = document.querySelector('#layer-1');
let layerTwo = document.querySelector('#layer-2');
let layerThree = document.querySelector('#layer-3');

document.querySelector('#next1').addEventListener('click',function(){
    layerOne.style.display='none';
    layerTwo.style.display='block';
})
document.querySelector('#back1').addEventListener('click',function(){
    layerOne.style.display='block';
    layerTwo.style.display='none';
})
document.querySelector('#next2').addEventListener('click',function(){
    layerTwo.style.display='none';
    layerThree.style.display='block';
})
document.querySelector('#back2').addEventListener('click',function(){
    layerTwo.style.display='block';
    layerThree.style.display='none';
})
