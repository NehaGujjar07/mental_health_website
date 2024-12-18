


document.getElementById("startVisualizationBtn").addEventListener("click", function () {
  // Show the video container
  const videoContainer = document.getElementById("visualizationVideoContainer");
  videoContainer.style.display = "block"; // Make the video container visible
  
  // Optionally, you can add any other logic like pausing or controlling playback here
});



function openSpotifyPlaylist() {
  // Replace the URL below with your desired Spotify playlist link
  const spotifyUrl = "https://open.spotify.com/playlist/4BQdJXoGq6wXvPT64nRRYf?si=Mu0Cb7nbTjSTWdseiK-auQ&pi=eh8z_SFpTwuhd";
  window.open(spotifyUrl, "_blank"); // Open the playlist in a new tab
}



function openSpotifyPodcast() {
  // Replace with the URL of your desired Spotify podcast episode or show
  const spotifyPodcastUrl = "https://open.spotify.com/playlist/38he99wNRz1QU6mrOAeyw9?si=5b7PDNTsRiyZDiYdAHc2OA"; 
  window.open(spotifyPodcastUrl, "_blank"); // Open the podcast in a new tab
}




function showTips() {
  // Array of tips
  const tips = [
      "Practice deep breathing daily to calm your mind.",
      "Spend a few minutes meditating each morning.",
      "Keep a gratitude journal to focus on positive thoughts.",
      "Take a short walk in nature to reconnect and unwind.",
      "Practice mindfulness by being present in the moment.",
      "Limit your exposure to negative news and social media.",
      "Drink water and eat nutritious food to maintain energy levels.",
      "Listen to soothing music or sounds that relax your mind.",
      "Connect with loved ones and share your feelings openly.",
      "Get 7-8 hours of quality sleep each night for mental clarity."
  ];

  // Select the tips list container
  const tipsList = document.getElementById("tips-list");

  // Clear any existing tips
  tipsList.innerHTML = "";

  // Add tips to the list dynamically
  tips.forEach(tip => {
      const listItem = document.createElement("li");
      listItem.textContent = tip;
      tipsList.appendChild(listItem);
  });

  // Display the modal
  const modal = document.getElementById("tips-modal");
  modal.style.display = "block";
}

function closeModal() {
  // Close the modal
  const modal = document.getElementById("tips-modal");
  modal.style.display = "none";
}

// Close the modal if clicked outside of content
window.onclick = function(event) {
  const modal = document.getElementById("tips-modal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
};






function showVideo(videoUrl) {
  const modal = document.getElementById('video-modal');
  const videoFrame = document.getElementById('video-frame');

  // Set the video URL
  videoFrame.src = videoUrl;

  // Show the modal
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('video-modal');
  const videoFrame = document.getElementById('video-frame');

  // Hide the modal
  modal.style.display = 'none';

  // Stop the video
  videoFrame.src = '';
}

// Close modal when clicking outside of content
window.onclick = function (event) {
  const modal = document.getElementById('video-modal');
  if (event.target === modal) {
      closeModal();
  }
};









document.getElementById('user-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get user input
  const userIssue = document.getElementById('user-issue').value.trim();
  const userPreference = document.getElementById('user-preference').value;

  // Mock Data for Matching Users
  const mockUsers = [
    { name: 'Alice', issue: 'anxiety', preference: 'support', description: 'Looking for a support buddy.' },
    { name: 'Bob', issue: 'stress', preference: 'discussion', description: 'Enjoys discussing coping strategies.' },
    { name: 'Charlie', issue: 'depression', preference: 'mentorship', description: 'Wants to mentor someone new.' },
    { name: 'Diana', issue: 'anxiety', preference: 'support', description: 'Wants to share and listen.' }
  ];

  // Filter matches
  const matches = mockUsers.filter(
    (user) =>
      user.issue.toLowerCase().includes(userIssue.toLowerCase()) &&
      user.preference === userPreference
  );

  // Display Matches
  const resultsContainer = document.getElementById('user-cards');
  resultsContainer.innerHTML = ''; // Clear previous results
  matches.forEach((match) => {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.innerHTML = `
      <h4>${match.name}</h4>
      <p>${match.description}</p>
      <button class="chat-button">Start Chat</button>
    `;
    resultsContainer.appendChild(card);
  });

  // Show Results Section
  document.querySelector('.matching-results').style.display = 'block';
});










