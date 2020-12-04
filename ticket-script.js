// for select-ticket-page.html

//for layers in the same page
let layerOne = document.querySelector('#layer-1');
let layerTwo = document.querySelector('#layer-2');
let layerThree = document.querySelector('#layer-3');
let layerFour = document.querySelector('#layer-4');

document.querySelector('#next1').addEventListener('click',function(){
  // validation for selecting ticket type (checkboxes)
  let allChoices = document.querySelectorAll('.ticket-choice');
  let count = 0;
  for(let eachChoice of allChoices){
    if(eachChoice.checked){
        count+=1;
      }
  }
  if(count>0){
    layerOne.style.display='none';
    layerTwo.style.display='block';
  }
  else{
    alert("Please select a ticket type!")
  }
})
document.querySelector('#back1').addEventListener('click',function(){
    layerOne.style.display='block';
    layerTwo.style.display='none';
})
document.querySelector('#next2').addEventListener('click',function(){
  // validation for radio button (selecting date)
  let dateTimeChoice = document.querySelectorAll('.date-choice');
  let count = 0;
  for(let dateChoice of dateTimeChoice){
    if(dateChoice.checked){
        count+=1;
      }
  }
  if(count>0){
    layerTwo.style.display='none';
    layerThree.style.display='block';
  }
  else{
    alert("Please select a date and time!")
  }
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
    //Storing selected ticket type into array
    let allChoices = document.querySelectorAll('.ticket-choice');
    let selectedChoices = [];
    for (let choice of allChoices){
      if(choice.checked){
        selectedChoices.push(choice.value)
      }
    }
    // selecting html p
    let displayIndividual = document.querySelector('#display-individual');
    let displayDouble = document.querySelector('#display-double');
    let displayFamily = document.querySelector('#display-family');
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
    for(let eachChoice of selectedChoices){
      if(eachChoice == 'Individual Ticket'){
        individualTotal = priceList[eachChoice]*individualQuantity
        displayIndividual.innerHTML = `<p>Selected Ticket: ${eachChoice}<p>
                                <p>Quantity: ${individualQuantity}<p>
                                <p>Price: $${individualTotal}<p>`
        total += individualTotal;
      }
      if(eachChoice == 'Double Trouble'){
        doubleTotal = priceList[eachChoice]*doubleQuantity;
        displayDouble.innerHTML = `<p>Selected Ticket: ${eachChoice}<p>
                                <p>Quantity: ${doubleQuantity}<p>
                                <p>Price: $${doubleTotal}<p>`
        total += doubleTotal;
      }
      if(eachChoice == 'Family Package'){
        familyTotal = priceList[eachChoice]*familyQuantity;
        displayFamily.innerHTML = `<p>Selected Ticket: ${eachChoice}<p>
                                <p>Quantity: ${familyQuantity}<p>
                                <p>Price: $${familyTotal}<p>`
        total += familyTotal;
      }
    }
    //displaying total cost
    displayTotal.innerHTML = `Total Cost: $${total}`
    
    //return selected time and date
    let dateTimeChoice = document.querySelectorAll('.date-choice');
    let displayDate = document.querySelector('#display-date');
    let displayTime = document.querySelector('#display-time');
    for(let dateChoice of dateTimeChoice){
        if(dateChoice.checked){
          displayDate.innerHTML = `Selected Date: ${dateChoice.value}`
        }
    }
    let selectedTime = document.querySelector('#time-selection').value;
    displayTime.innerHTML = `Selected Timing: ${selectedTime}`
    
    //card input validation

    //for display contact number div
    let displayContact = document.querySelector('#display-contact');
    let displayEmail = document.querySelector('#display-email');
    let displayCardNumber = document.querySelector('#display-card-number');

    //initialise validation status
    let cardNumberIsInvalid = false;
    let cardExpiryDateIsInvalid = false;
    let cardCvvIsInvalid = false;
    let nameIsInvalid = false;
    let phoneNumIsInvalid = false;
    let emailIsInvalid = false;

    document.querySelector('#card-number-error').innerHTML = "";
    document.querySelector('#card-date-error').innerHTML = " ";
    document.querySelector('#card-cvv-error').innerHTML = " ";
    document.querySelector('#card-name-error').innerHTML = " ";
    document.querySelector('#hp-error').innerHTML = " ";
    document.querySelector('#email-error').innerHTML = " ";

    //set validation condition
    let cardNumber = document.querySelector('#card-number').value
    if (cardNumber.length != 19){
      cardNumberIsInvalid = true;
      document.querySelector('#card-number-error').innerHTML = "*Card number must be in the format of: <br> XXXX XXXX XXXX XXXX"
    }
    else{
      displayCardNumber.innerHTML = `Card Number: ${cardNumber}`;
    }
    let cardExpiryDate = document.querySelector('#card-date').value
    if (cardExpiryDate.includes('/') == false){
      cardExpiryDateIsInvalid = true;
      document.querySelector('#card-date-error').innerHTML = "*Date must be in the format of MM/YY"
    }

    let cardCvv = document.querySelector('#card-cvv').value
    if (cardCvv.length != 3){
      cardCvvIsInvalid = true;
      document.querySelector('#card-cvv-error').innerHTML = "*Card CVV must be 3 digits"
    }
    
    let nameOnCard = document.querySelector('#card-name').value
    if (nameOnCard.length == 0){
      nameIsInvalid = true;
      document.querySelector('#card-name-error').innerHTML = "*Name field is empty"
    }

    let phoneNum = document.querySelector('#phone-number').value
    if (phoneNum.length != 8){
      phoneNumIsInvalid = true;
      document.querySelector('#hp-error').innerHTML = "*Please enter a valid phone number"
    }
    else{
      displayContact.innerHTML = `Phone Number: ${phoneNum}`;
    }

    let email = document.querySelector('#email').value
    if (email.includes('@') == false || email.includes('.') == false){
      emailIsInvalid = true;
      document.querySelector('#email-error').innerHTML = "*Please enter a valid email address"
    }
    else{
      displayEmail.innerHTML = `Email: ${email}`
    }

    if(!cardNumberIsInvalid && !cardExpiryDateIsInvalid && !cardCvvIsInvalid && !nameIsInvalid && !phoneNumIsInvalid && !emailIsInvalid){
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

