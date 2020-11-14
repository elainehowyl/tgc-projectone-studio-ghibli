//script for index.html
setTimeout(function(){
    let loadingBar = document.querySelector('#loading-bar');
    loadingBar.style.visibility='hidden';
},10000);

setTimeout(function(){
    let loadingBarContainer = document.querySelector('#loading-bar-container');
    loadingBarContainer.style.opacity='0';
},10000);

setTimeout(function(){
    let enterButton = document.querySelector('#enter');
    enterButton.style.display='block';
},11000);
