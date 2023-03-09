// Make a new iMessage bubble with correct color
const createMessage = (inText, inType) => {
    const newMessage = document.createElement('p');
    console.log('here');
    const messages = document.getElementsByClassName('imessage')[0];
    
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