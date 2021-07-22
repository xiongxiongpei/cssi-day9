const submitMessage = () => {
    const passcode = document.querySelector("#passcode").value;
    const message = document.querySelector("#message").value;

    console.log(passcode + " " + message);
    firebase.database().ref().push({
        passcode: passcode,
        message: message
    })

    if message.length >140 {
        alert("Edit the message to be under 140 characters.");
    }


}

function checkUppercase{
    var a = passcode.length;
    var uppercase = 0;
    for (let i = 0, i = a, i++) {
        character = passcode.charAt(i);
        if (character == character.toUppercase) {
            uppercase++;
        }
    }
}

if (uppercase > 0) {
    return password
}

else {
    alert("Your password must contain at least 1 capital letter.");
}

    
if (isNaN(parseFloat(character)) == false) {
    alert("Your password must contain a number.");



}