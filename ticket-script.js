// for select-ticket-page.html

// function for linebreak
function lineBreak(element){
  let lineBreak = document.createElement('br');
  return element.appendChild(lineBreak);
}

//for layers in the same page
let layerOne = document.querySelector('#layer-1');
let layerTwo = document.querySelector('#layer-2');
let layerThree = document.querySelector('#layer-3');
let layerFour = document.querySelector('#layer-4');

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
    'Individual Ticket': 23.0,
    'Double Trouble': 42.0,
    'Family Package': 85.0,
}

document.querySelector('#next3').addEventListener('click', function(){
    // event.preventDefault();
    
    //Storing selected ticket type into array
    let allChoices = document.querySelectorAll('.ticket-choice');
    let selectedChoices = [];
    for (let choice of allChoices){
      if(choice.checked){
        selectedChoices.push(choice.value)
      }
    }
    // selecting html p
    let displayAll = document.querySelector('#display-all');
    let displayTotal = document.querySelector('#display-total');

    // getting selected quantity value
    let individualQuantity = document.querySelector('#individual-select').value;
    let doubleQuantity = document.querySelector('#double-select').value;
    let familyQuantity = document.querySelector('#family-select').value;

    // displaying order summary
    let total = 0;
    let individualTotal = 0;
    let doubleTotal =0;
    let familyTotal =0;
    let ticketType = null;
    let ticketQuantity = null;
    let ticketPrice = null;
    for(let eachChoice of selectedChoices){
      if(eachChoice == 'Individual Ticket'){
        ticketType = document.createTextNode('Selected Ticket: ' + eachChoice);
        displayAll.appendChild(ticketType);
        lineBreak(displayAll);
        ticketQuantity = document.createTextNode('Quantity: ' + individualQuantity);
        displayAll.appendChild(ticketQuantity);
        lineBreak(displayAll);
        individualTotal = priceList[eachChoice]*individualQuantity;
        ticketPrice = document.createTextNode('Price: $' + individualTotal);
        displayAll.appendChild(ticketPrice);
        lineBreak(displayAll);
        total += individualTotal;
      }
      if(eachChoice == 'Double Trouble'){
        ticketType = document.createTextNode('Selected Ticket: ' + eachChoice);
        displayAll.appendChild(ticketType);
        lineBreak(displayAll);
        ticketQuantity = document.createTextNode('Quantity: ' + doubleQuantity);
        displayAll.appendChild(ticketQuantity);
        lineBreak(displayAll);
        doubleTotal = priceList[eachChoice]*doubleQuantity;
        ticketPrice = document.createTextNode('Price: $' + doubleTotal);
        displayAll.appendChild(ticketPrice);
        lineBreak(displayAll);
        total += doubleTotal;
      }
      if(eachChoice == 'Family Package'){
        ticketType = document.createTextNode('Selected Ticket: ' + eachChoice);
        displayAll.appendChild(ticketType);
        lineBreak(displayAll);
        ticketQuantity = document.createTextNode('Quantity: ' + familyQuantity);
        displayAll.appendChild(ticketQuantity);
        lineBreak(displayAll);
        familyTotal = priceList[eachChoice]*familyQuantity;
        ticketPrice = document.createTextNode('Price: $' + familyTotal);
        displayAll.appendChild(ticketPrice);
        lineBreak(displayAll);
        total += familyTotal;
      }
    }
    //displaying total cost
    let totalCost = document.createTextNode('Total Cost: $' + total);
    displayTotal.appendChild(totalCost);
    
    //return selected time and date
    let dateTimeChoice = document.querySelectorAll('.date-choice');
    let displayDateTime = document.querySelector('#display-date-time');
    for(let dateChoice of dateTimeChoice){
        if(dateChoice.checked){
          let selectedDate = document.createTextNode('Selected Date: ' + dateChoice.value);
          displayDateTime.appendChild(selectedDate)
          lineBreak(displayDateTime);
        }
    }
    let selectedTime = document.querySelector('#time-selection').value;
    let displayTime = document.createTextNode('Selected Timing: ' + selectedTime);
    displayDateTime.appendChild(displayTime);

    //card input validation

    //for display contact number div
    let displayContact = document.querySelector('#display-contact');
    
    //initialise validation status
    let cardNumberIsInvalid = false;
    let cardExpiryDateIsInvalid = false;
    let cardCvvIsInvalid = false;
    let nameIsInvalid = false;
    let phoneNumIsInvalid = false;
    let emailIsInvalid = false;

    //set validation condition
    let cardNumber = document.querySelector('#card-number').value
    if (cardNumber.length != 19){
      cardNumberIsInvalid = true;
      document.querySelector('#card-number-error').innerHTML = "*Card number must be in the format of: XXXX XXXX XXXX XXXX"
    }
    else{
      console.log("Card Number: ", cardNumber)
    }
    let cardExpiryDate = document.querySelector('#card-date').value
    if (cardExpiryDate.includes('/') == false){
      cardExpiryDateIsInvalid = true;
      document.querySelector('#card-date-error').innerHTML = "*Date must be in the format of MM/YY"
    }
    else{
      console.log("Card Expiry Date: ", cardExpiryDate)
    }

    let cardCvv = document.querySelector('#card-cvv').value
    if (cardCvv.length != 3){
      cardCvvIsInvalid = true;
      document.querySelector('#card-cvv-error').innerHTML = "*Card CVV must be 3 digits"
    }
    else{
      console.log("Card CVV: ", cardCvv)
    }
    
    let nameOnCard = document.querySelector('#card-name').value
    if (nameOnCard.length == 0){
      nameIsInvalid = true;
      document.querySelector('#card-name-error').innerHTML = "*Name field is empty"
    }
    else{
      console.log("Name: ", nameOnCard)
    }

    let phoneNum = document.querySelector('#phone-number').value
    if (phoneNum.length != 8){
      phoneNumIsInvalid = true;
      document.querySelector('#hp-error').innerHTML = "*Please enter a valid phone number"
    }
    else{
      let displayPhoneNum = document.createTextNode('Phone Number: ' + phoneNum);
      displayContact.appendChild(displayPhoneNum);
      lineBreak(displayContact);
    }

    let email = document.querySelector('#email').value
    if (email.includes('@') == false || email.includes('.') == false){
      emailIsInvalid = true;
      document.querySelector('#email-error').innerHTML = "*Please enter a valid email address"
    }
    else{
      let displayEmail = document.createTextNode('Email: ' + email);
      displayContact.appendChild(displayEmail);
    }

    if(!cardExpiryDateIsInvalid && !cardCvvIsInvalid && !nameIsInvalid && !phoneNumIsInvalid && !emailIsInvalid){
      layerThree.style.display = 'none';
      layerFour.style.display = 'block';
    }
})

document.querySelector('#back3').addEventListener('click',function(){
  layerThree.style.display='block';
  layerFour.style.display='none';
})

document.querySelector('#submit').addEventListener('click',function(){
  let agree = document.querySelector('#agreement');
  if(agree.checked == false){
    let agreeIsFalse = document.querySelector('#agree-false');
    agreeIsFalse.innerHTML = "*Please agree to the terms and conditions"
  }
  else{
    alert("Reservation is submitted successfully! A confirmation email will be sent to your inbox shortly.")
    window.location="./index.html"
  }
})

// document.querySelector('#submit').addEventListener('click',function(){
//   document.querySelector('#submit-alert').style.display = "block";
// })
