function confirmWindow(){
    let confirm = window.confirm('Are you sure you want to submit?');

    if(confirm === true){
        alert("successful signup!");
        return true;
    }
    else{
        location.reload();
        return false;
    }
}
function checkingpassword()
{
    let pass=document.getElementById("password").value;
    let error=document.getElementById('para2');
    if(pass.length>7)
    {
        error.style.display='none';
        return true;
    }
    else{
            error.style.display='block';
            return false;
    }
}
function checkingEmail(){
    let inputValue = document.getElementById("email").value;
    let errorPara = document.querySelector('#para1');
    
    if(inputValue.length > 2 && inputValue.includes('@') && inputValue.includes('.')){
        errorPara.style.display = `none`;
        return true;
    }
    else{
        errorPara.style.display  = `block`;
        return false;
    }
}
function formok() {
    let form = document.querySelector('#forme');
    let emailValid = checkingEmail();
    let passwordValid = checkingpassword();

    if (emailValid && passwordValid) {
        let allGoodPara = document.createElement('p');
        allGoodPara.classList.add('correct');
        allGoodPara.innerText = `All good to go!`;

        form.appendChild(allGoodPara);
    }
}
