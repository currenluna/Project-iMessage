// Make a new iMessage bubble with correct color
const sendMessage = () => {
    // Get DOM elements
    const newMessage = document.createElement('p');
    const messagesDiv = document.getElementsByClassName('imessage')[0];
    const messages = messagesDiv.children;
    const text = document.getElementById('input-text');
    const checkbox = document.getElementById('input-checkbox');

    // Set text on new message
    newMessage.innerText = text.value;

    // Determine type of message
    if (checkbox.checked) {
        newMessage.className = 'from-me';
    } else {
        newMessage.className = 'from-them'
    }
    
    // Add the message to the div
    if (text.value != '') {
        messagesDiv.insertBefore(newMessage, messages[1]);
    }

    // Clear the input field
    text.value = '';
    console.log('here', text);
};