// Make a new iMessage bubble with correct color
const sendMessage = () => {
    // Get DOM elements
    const newMessage = document.createElement('p');
    const messages = document.getElementsByClassName('imessage')[0];
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
    messages.appendChild(newMessage);

    // Clear the input field
    text.value = '';
    console.log('here', text);
};