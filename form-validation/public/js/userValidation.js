const form = document.querySelector('#myForm');
const errName = document.querySelector('#errorName');
const errEmail = document.querySelector('#errorMail');
const errNum = document.querySelector('#errorNumber');
const errPass = document.querySelector('#errorPass');
form.addEventListener('submit', (e)=>{
    let isValid = true;
    const inpName = document.querySelector('#name').value.trim();
    const inpEmail = document.querySelector('#email').value.trim();
    const inpNum = document.querySelector('#number').value.trim();
    const inpPass = document.querySelector('#pass').value.trim();
    let nameMsg, mailMsg, numMsg, passMsg;
    if(inpName.length > 50){
        nameMsg = "Lenght can not be more than 50";
        isValid=false;
    }
    if(inpName.length == 0){
        nameMsg = "Can not be left empty";
        isValid=false;
    }
    if(inpNum.length != 10){
        numMsg = "Can not be less or more than 10 numbers"
        isValid=false;
    }
    if(inpNum.length == 0){
        numMsg = "Can not be left empty";
        isValid=false;
    }
    if(inpPass.length < 8){
        passMsg = "Has to be atleast 8 character long";
        isValid=false;
    }
    if(inpPass.length == 0){
        passMsg = "Can not be left empty";
        isValid=false;
    }

    // Email Regex ->

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(inpEmail)) {
        mailMsg = "Enter a valid email";
        isValid=false;
    }

    if (inpEmail.length == 0) {
        mailMsg = "Can not be left empty";
        isValid=false;
    }

    errName.textContent = nameMsg;
    errEmail.textContent = mailMsg;
    errNum.textContent = numMsg;
    errPass.textContent = passMsg;

    if(isValid == false){
        e.preventDefault();
    }
});