// JavaScript to set the current year and last modified date
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Function to calculate the wind chill
function calculateWindChill(temperature, windSpeed) {
  // Wind chill calculation (Metric units)
  if (temperature <= 10 && windSpeed > 4.8) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  } else {
    return "N/A"; // Wind chill not applicable
  }
}

// Display wind chill result
const temperature = 10; // Example temperature in Celsius
const windSpeed = 20; // Example wind speed in km/h
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("windchill-result").textContent = windChill;

  