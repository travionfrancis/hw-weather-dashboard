// Psuedocode

// Get Weather Api key from OpenWeatherMap.org

// Search Bar Functionality
// Search for a City
// set Local Storage to save previous City searches


$(document).ready(function (){
// local storage for search function
// saves LS data when the search button is clicked
var searchHistory = document.querySelector(".searchCityHistory");
window.localStorage.getItem(searchHistory);

});


// What the search bar displays: The 5 day Forecast
// display that data onto the dashboard html, 5 smaller containers
 -// display City, date, Temperature, Humidity, Wind Speed, UV Index
  -// have next upcoming dates in smaller containers
   -// Those smaller containers will only display the date, temperature, and Humidity.
