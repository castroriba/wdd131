// Declare a variable to track the click count
let clickCount = localStorage.getItem("clickCount") || 0;

// Function to show a welcome message and track the click count
function showMessage() {
  // Increment the click count
  clickCount++;
  
  // Store the updated click count in localStorage
  localStorage.setItem("clickCount", clickCount);

  // Conditional Branching based on click count
  if (clickCount > 1) {
    alert("You've clicked the button more than once!");
  } else {
    alert("Welcome to My Stunning Website! Let's build something amazing.");
  }

  // Display information about the website using an object and template literals
  const websiteInfo = {
    name: "My Stunning Website",
    description: "A platform to build amazing things.",
    displayInfo: function() {
      alert(`Hello, Visitor! Welcome to ${this.name}! ${this.description}`);
    }
  };

  websiteInfo.displayInfo(); // Call the displayInfo method
}

// DOM Manipulation: Add event listener for the button
document.querySelector('button').addEventListener('click', showMessage);

// Lazy Loading for images below the fold (Ensure images are below the fold)
const images = document.querySelectorAll('img[data-src]');

images.forEach((img) => {
  img.setAttribute('loading', 'lazy');
  img.src = img.getAttribute('data-src');
});

// Array Example: Using an array and array method (for demonstration)
let features = ["Responsive Design", "Lazy Loading", "Modern UI"];
features.forEach(function(feature) {
  console.log(`Feature: ${feature}`);
});
