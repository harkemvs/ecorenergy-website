document.getElementById('chatbot-icon').onclick = function() {
  var chatWindow = document.getElementById('chatbot-window');
  chatWindow.style.display = (chatWindow.style.display === 'block') ? 'none' : 'block';
};
document.getElementById('chat-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const userInput = e.target.value;
    const chatBox = document.getElementById('chat-content');
    const userMsg = document.createElement('div');
    userMsg.textContent = "You: " + userInput;
    chatBox.appendChild(userMsg);
    const botReply = document.createElement('div');
    botReply.textContent = "AI: Thanks for your message! (Chatbot logic coming soon)";
    chatBox.appendChild(botReply);
    e.target.value = '';
  }
});
