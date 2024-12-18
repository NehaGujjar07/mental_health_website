// Select elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Psychiatrist Bot Responses
const botResponses = {
  default: "I'm here to listen. Please tell me more.",
  sad: "I'm sorry you're feeling this way. Remember, you're not alone. Talking about it can help.",
  depressed: "It's important to acknowledge these feelings. Have you considered reaching out to someone you trust?",
  lonely: "Loneliness can be tough. I'm here for you. Maybe try connecting with a friend or loved one?",
  upset: "I'm here to support you. Can you share more about what's upsetting you?",
  suicide: "I'm really sorry you're feeling this way. Please consider reaching out to a trusted friend or mental health professional."
};

// Add a new message to the chatbox
function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.className = sender === "user" ? "user-message" : "bot-message";
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

// Handle sending a message
function sendMessage() {
  const userMessage = userInput.value.trim();

  if (!userMessage) return; // Don't send empty messages

  addMessage(userMessage, "user");

  // Determine bot response based on user input
  const response = Object.keys(botResponses).find((keyword) =>
    userMessage.toLowerCase().includes(keyword)
  );

  const botReply = response ? botResponses[response] : botResponses.default;
  setTimeout(() => addMessage(botReply, "bot"), 500); // Simulate a short delay for the bot's reply

  userInput.value = ""; // Clear the input field
}
