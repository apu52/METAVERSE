const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!'_-&@#$%*()/:<>|+= ";

function encrypt(text, key){
    let encryptedText = "";

    for(let i = 0; i<text.length; i++){
        const textChar = text[i];
        const keyChar = key[i % key.length];

        const textIndex = alphabet.indexOf(textChar);
        const keyIndex = alphabet.indexOf(keyChar);

        if(textIndex === -1){
            encryptedText += textChar;
        }else{
            const newIndex = (textIndex + keyIndex) % alphabet.length;
            encryptedText += alphabet[newIndex];
        }
    }

    return encryptedText;
}

function decrypt(encryptedText, key){
    let decryptedText = "";

    for(let i = 0; i < encryptedText.length; i++){
        const encryptedChar = encryptedText[i];
        const keyChar = key[i % key.length];

        const encryptedIndex = alphabet.indexOf(encryptedChar);
        const keyIndex = alphabet.indexOf(keyChar);

        if(encryptedText === -1){
            decryptedText += encryptedChar;
        }
        else{
            let newIndex = encryptedIndex - keyIndex;
            if(newIndex < 0){
                newIndex += alphabet.length;
            }
            decryptedText += alphabet[newIndex];
        }
    } 
    return decryptedText;
}


function updateResult(isEncrypting){
    const text = document.getElementById("message").value;
    const key = document.getElementById("key").value;


    let result = "";

    if(isEncrypting){
        result = encrypt(text, key);
    }
    else{
        result = decrypt(text, key);
    }

    document.getElementById("result").textContent = result;
}


document.getElementById("enc-btn").addEventListener('click', function(){
    updateResult(true);
});

document.getElementById("dec-btn").addEventListener('click', function(){
    updateResult(false);
})

document.addEventListener('DOMContentLoaded', () => {
    updateResult(true);
});