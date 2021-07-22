// Retrieve the messages from the database
const getMessages = () => {
 const messagesRef = firebase.database().ref('/messages');
 messagesRef.on('value', (snapshot) => {
     const data = snapshot.val();
     console.log(data);
     // Find message
 });
}

const findMessage = (messages) => {
 const passcodeAttempt = document.querySelector('#passcode').value;
 for (message in messages) {
     const messageData = messages[message];
     if (messageData.passcode === passcodeAttempt) {
         // Code to hide input form, and render message as HTML
     }
 }
}


const renderMessageAsHtml = (message) => {
 // Hide Input Form

 // Render messageas HTML
}