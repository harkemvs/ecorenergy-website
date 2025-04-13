document.getElementById('chatbot-icon').onclick = function () {
  var chatWindow = document.getElementById('chatbot-window');
  chatWindow.style.display = (chatWindow.style.display === 'block') ? 'none' : 'block';
};

document.getElementById('chat-input').addEventListener('keypress', async function (e) {
  if (e.key === 'Enter') {
    const userInput = e.target.value;
    const chatBox = document.getElementById('chat-content');

    const userMsg = document.createElement('div');
    userMsg.textContent = "You: " + userInput;
    chatBox.appendChild(userMsg);

    const response = await fetch("https://aea6-2c0f-f4a8-b-861c-4dcb-e1b5-e7cb-1369.ngrok-free.app/aila-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();

    const botReply = document.createElement('div');
    botReply.textContent = "Aila: " + data.reply;
    chatBox.appendChild(botReply);

    e.target.value = '';
  }
});
