
console.log("Script are loading");

const weatherForm = document.querySelector('form');
const inputData = document.querySelector('input');
const errormsg = document.querySelector('#error-msg');
const successmsg = document.querySelector('#success-msg');

weatherForm.addEventListener('submit',(e) => {
    e.preventDefault();


    const address = inputData.value;

    fetch('http://localhost:3000/weather?address='+address).then((response) => {

    response.json().then((data) => {
        
        if(data.error)
        {
            errormsg.textContent = data.error;
        }
        else
        {
           
            successmsg.textContent = data;
        }


    })

})


})