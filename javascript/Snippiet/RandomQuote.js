// Motivational messages array
const messages = [
    "Keep going! You're doing great! 💪",
    "Believe in yourself, and the code will follow. 🚀",
    "Success is built on persistence. Keep pushing! 💻",
    "Every bug is a step closer to success. 🐞",
    "You are capable of amazing things. Keep coding! 🌟"
];

// Function to show a random motivational message
function showMotivation() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[randomIndex]);
}

// Run the motivational message
showMotivation();
