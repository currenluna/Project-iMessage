// Make a new iMessage bubble with correct color
const createMessage = (inText) => {
    const newMessage = document.createElement('p');
    const messages = document.getElementsByClassName('imessage')[0];
    const checkbox = document.getElementById('input-checkbox');
    
    if (checkbox.checked) {
        newMessage.className = 'from-me';
    } else {
        newMessage.className = 'from-them'
    }
    
    newMessage.innerText = inText;
    messages.appendChild(newMessage);
};


// When the send button is clicked,
// Take text from the input text field,
// Create a new iMessage bubble with the correct color
const sendMessage = () => {
    const inputText = document.getElementsByClassName('input-text');

};

createMessage("hi", "hi");
console.log("hi");