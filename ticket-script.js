// for select-ticket-page.html
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
    'individual': 23,
    'double': 42,
    'family': 85,
}

document.querySelector('#next3').addEventListener('click', function(){
    // event.preventDefault();
    // let displayUserInput = document.querySelector('#display-user-input');
    //CALCULATE TOTAL PRICE
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
    
    //RETURN SELECTED TIME AND DATE
    let dateTimeChoice = document.querySelectorAll('.date-choice')
    for(let dateChoice of dateTimeChoice){
        if(dateChoice.checked){
            console.log("Date selected: ", dateChoice.value)
        }
    }
    let selectedTime = document.querySelector('#time-selection').value
    console.log("Time selected: ", selectedTime)

    //CARD INPUT VALIDATION
    
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
      console.log("Phone Number: ", phoneNum)
    }

    let email = document.querySelector('#email').value
    if (email.includes('@') == false || email.includes('.') == false){
      emailIsInvalid = true;
      document.querySelector('#email-error').innerHTML = "*Please enter a valid email address"
    }
    else{
      console.log("Email: ", email)
    }

    let agreement = document.querySelector('#agreement').value
    if(agreement.checked){
      console.log("Customer wish to be informed.")
    }
    else{
      console.log("No, customer do not wish to be informed.")
    }

    // if(!cardExpiryDateIsInvalid && !cardCvvIsInvalid && !nameIsInvalid && !phoneNumIsInvalid && !emailIsInvalid){
    //   form.submit()
    // }
    if(!cardExpiryDateIsInvalid && !cardCvvIsInvalid && !nameIsInvalid && !phoneNumIsInvalid && !emailIsInvalid){
      layerThree.style.display = 'none';
      layerFour.style.display = 'block';

      let displayUserInput = document.querySelector('#display-user-input');
      displayUserInput.innerHTML = total;
      displayUserInput.innerHTML = selectedTime;
    }
})

document.querySelector('#back3').addEventListener('click',function(){
  layerThree.style.display='block';
  layerFour.style.display='none';
})
