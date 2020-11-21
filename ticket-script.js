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

let priceList = {
    'individual': 23,
    'double': 42,
    'family': 85,
}

document.querySelector('#submit').addEventListener('click', function(){
    //calculate total price
    let allChoices = document.querySelectorAll('.ticket-choice');
    let selectedChoice = [];
    for (let choice of allChoices){
      if(choice.checked){
        selectedChoice.push(choice.value)
      }
    }
    let individualQuantity = document.querySelector('#individual-select').value;
    let doubleQuantity = document.querySelector('#double-select').value;
    let familyQuantity = document.querySelector('#family-select').value;

    let total = 0;
    for(eachChoice of selectedChoice){
      if(eachChoice == 'individual'){
        total += priceList[eachChoice]*individualQuantity;
      }
      if(eachChoice == 'double'){
        total += priceList[eachChoice]*doubleQuantity;
      }
      if(eachChoice == 'family'){
        total += priceList[eachChoice]*familyQuantity;
      }
    }
    console.log("Total cost: $", total)
    
    //return selected date and time
    let dateTimeChoice = document.querySelectorAll('.date-choice')
    for(let dateChoice of dateTimeChoice){
        if(dateChoice.checked){
            console.log("Date selected: ", dateChoice.value)
        }
    }
    let selectedTime = document.querySelector('#time-selection').value
    console.log("Time selected: ", selectedTime)
})


