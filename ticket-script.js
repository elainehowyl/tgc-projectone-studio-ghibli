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
