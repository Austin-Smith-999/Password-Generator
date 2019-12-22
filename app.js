// Random character generation
function randomizeNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 9) + 48)
}
function randomizeLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomizeUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomizeSpecial() {
    return String.fromCharCode(Math.floor(Math.random() * 14) + 33)
}

// Variables to select ID's on DOM
const selectGenerateButton = document.querySelector("#generate");
const selectCopyButton = document.querySelector("#copy");
const selectPasswordBox = document.querySelector("#password");
const selectPasswordLengthSelector = document.querySelector("#passwordLengthInput");
const selectNumberBox = document.querySelector("#numCheckbox");
const selectLowercaseBox = document.querySelector("#lowercaseCheckbox");
const selectUppercaseBox = document.querySelector("#uppercaseCheckbox");
const selectSpecialCharBox = document.querySelector("#specialCharacterCheckbox");

// Randomizing characters variable
let randomChar = {
    numberRandom: randomizeNumber,
    lowercaseRandom: randomizeLower,
    uppercaseRandom: randomizeUpper,
    specialCharRandom: randomizeSpecial
}; 

selectGenerateButton.addEventListener("click", function() {
    let passwordLength = selectPasswordLengthSelector.value;
    let isLowerCase = selectLowercaseBox.checked;
    let isUpperCase = selectUppercaseBox.checked;
    let isNumber = selectNumberBox.checked;
    let isSpecialChar = selectSpecialCharBox.checked;
    
    // Testing: console.log(passwordLength, isLowerCase, isUpperCase, isNumber, isSpecialChar);

    selectPasswordBox.innerText = passwordGenerator(isNumber, isLowerCase, isUpperCase, isSpecialChar, passwordLength);
})



// Password generation Function
function passwordGenerator(number, lowerCase, upperCase, specialCharacter, passwordLength) {
    let passwordCreated = [];

    console.log(passwordLength);

    if (passwordLength > 128 || passwordLength < 8) {
        alert("Must be between 8-128");
        return "";
    }

    if (number === false && lowerCase === false && upperCase === false && specialCharacter === false){
        alert("Check at least one box");
        return "";
    }

    // Determine whether a checkbox is filled in or not.
    // If it is filled in it will be pushed onto password array.
    if (number === true) {
        for (let index = 0; index < passwordLength; index++) {
            passwordCreated.push(randomizeNumber())            
        }
    }

    if (lowerCase === true) {
        for (let index = 0; index < passwordLength; index++) {
            passwordCreated.push(randomizeLower())            
        }
    }

    if (upperCase === true) {
        for (let index = 0; index < passwordLength; index++) {
            passwordCreated.push(randomizeUpper())            
        }
    }
    
    if (specialCharacter === true) {
        for (let index = 0; index < passwordLength; index++) {
            passwordCreated.push(randomizeSpecial())            
        }
    }

    let passwordGenerated = "";

    for (let index = 0; index < passwordLength; index++) {
        passwordGenerated += passwordCreated[Math.floor(Math.random() * passwordCreated.length)]        
    }
    return passwordGenerated;

    // Copy to Clipboard
    function copyToClipboardFunc() {
        var copyText = document.querySelector("#passwordLengthInput");
        copyText.select();
        document.execCommand("copy");
    }

    // Click event for copying
    document.querySelector("#copy").addEventListener("click", copyToClipboardFunc); 
    // {
        
        
        // let copyPassword = document.querySelector("#password");
        // copyPassword.value.select();
        // selectPasswordBox.value = valueOfPassword;
        // valueOfPassword.execCommand("copy"); 
//     })
// }


}
