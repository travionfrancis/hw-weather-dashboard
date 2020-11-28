// Psuedocode

// Get Weather Api key from OpenWeatherMap.org

// Search Bar Functionality
// Search for a City
// set Local Storgae to save previous City searches


$(document).ready(function (){
// local storage for search
$("#searchCityHistory").on("click", function () {
    console.log("Pls WOrk Okay??!?");
    var search = $(this).parent().attr("input");
    var button = $(this).siblings(".searchButton").val();

    localStorage.setItem(search, button);

})




})
// What the search bar displays: The 5 day Forecast
// display that data onto the dashboard html, 5 smaller containers
 -// display City, date, Temperature, Humidity, Wind Speed, UV Index
  -// have next upcoming dates in smaller containers
   -// Those smaller containers will only display the date, temperature, and Humidity.
