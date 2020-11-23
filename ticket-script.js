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

document.querySelector('#submit').addEventListener('click', function(event){
    event.preventDefault();
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
      alert("Invalid card number! Please re-enter!")
    }
    else{
      console.log("Card Number: ", cardNumber)
    }
    let cardExpiryDate = document.querySelector('#card-date').value
    if (cardExpiryDate.includes('/') == false){
      cardExpiryDateIsInvalid = true;
      alert("Expiry Date is invalid! Please re-enter!")
    }
    else{
      console.log("Card Expiry Date: ", cardExpiryDate)
    }

    let cardCvv = document.querySelector('#card-cvv').value
    if (cardCvv.length != 3){
      cardCvvIsInvalid = true;
      alert("Card CVV is invalid. Please re-enter!")
    }
    else{
      console.log("Card CVV: ", cardCvv)
    }
    
    let nameOnCard = document.querySelector('#card-name').value
    if (nameOnCard.length == 0){
      nameIsInvalid = true;
      alert("Name is empty. Please enter name on card.")
    }
    else{
      console.log("Name: ", nameOnCard)
    }

    let phoneNum = document.querySelector('#phone-number').value
    if (phoneNum.length != 8){
      phoneNumIsInvalid = true;
      alert("Invalid phone number. Please re-enter a valid number.")
    }
    else{
      console.log("Phone Number: ", phoneNum)
    }

    let email = document.querySelector('#email').value
    if (email.includes('@') == false){
      emailIsInvalid = true;
      alert("Invalid email. Please re-enter a valid email.")
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

    if(!cardExpiryDateIsInvalid && !cardCvvIsInvalid && !nameIsInvalid && !phoneNumIsInvalid && !emailIsInvalid){
      form.submit()
    }
})
