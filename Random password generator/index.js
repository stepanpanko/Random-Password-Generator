function getPassword(){
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*( )_+?><:{}[]'"
    let passwordLength = 16;
    let password ='';

    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);

        password += chars.substring(randomNumber, randomNumber + 1);
    }; 
    document.getElementById('password').value = password;
}

function copyFunc(){
    let copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied Password";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

