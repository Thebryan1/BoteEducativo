const chatWindow = document.querySelector('.chat-window');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  const userMessage = chatInput.value.trim();
  if (userMessage !== '') {
    addMessage(userMessage, 'user-message');
    chatInput.value = '';
    setTimeout(() => {
      addMessage('¡Estoy aquí para ayudarte!', 'bot-message');
    }, 1000);
  }
});

function addMessage(message, className) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message', className);
  messageElement.innerHTML = `<p>${message}</p>`;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll hacia abajo automáticamente
}
