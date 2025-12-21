# Weather App
A browser-based Weather Application built with Vanilla JavaScript, developed as part of the JavaScript curriculum of The Odin Project.
This project focuses on fetching and consuming APIs (Vissual crossing and Giffy), working with JSON data, and dynamically updating the UI based on external data.

## 🚀 Overview
The Weather App allows users to search for a city and view its current weather information, including:
- Temperature
- Weather description
The project was designed to practice API consumption, asynchronous JavaScript, and dynamic DOM updates.

## ✨ Features
- Search for weather by city
- Display weather data retrieved from Visual Crossing API
- Display a GIF describing the weather from Giffy API
- Allow users to switch on temperature units (Celsius / Fahrenheit)
- the app background switch automatically to Day/Night mode according to the user time
- Dynamic DOM rendering with JavaScript
- Error handling for invalid inputs

## Live Preview | Non-responsive
[See the website (Voir le site)](https://chacka1315.github.io/weather-App/)

## 🧱 Built With
1. Frontend
- JavaScript (ES6+) — DOM generation, dynamic content, DOM manipulation
- CSS3 — layout and styling

2. Concepts & Tools
- Fetch API — retrieving data from external APIs
- JSON — parsing and processing API responses
- Event listeners and asynchronous logic
- Modular JavaScript for code organization


## 📁 Project Structure
```
weather-App/
├── src/                              # Main application code
│   ├── index.js                      # Entry point
│   ├── weatherFetchHandler.js        # Weather API integration
│   ├── DOMHandler.js                 # DOM manipulation & rendering
│   ├── eventHandler.js               # User interaction handling
│   ├── GIFhandler.js                 # GIF management
│   ├── styles.css                    # Styling
│   ├── template.html                 # HTML template
│   └── assets/                       # Images & icons
│       ├── icons/
│       └── defaultWeatherGIF.gif
├── package.json                      # Dependencies & scripts
├── webpack.*.js                      # Webpack configuration
├── eslint.config.js                  # Linting rules
├── .prettierrc                        # Code formatting config
├── dist/                             # Built/bundled output
└── README.md                         # Project documentation
```

## 🧠 Challenges & Learnings
This project was particularly important for understanding APIs and JSON. I learned how to:
- Fetch data from an external API asynchronously using fetch()
- Parse and handle JSON responses
- Dynamically update the DOM based on API data
- Handle user input and display relevant feedback
This experience strengthened my understanding of asynchronous JavaScript and data-driven UI updates.

## 🏁 Conclusion
The Weather App enhanced my ability to consume APIs, parse JSON, and build dynamic web interfaces, providing a solid foundation for future full-stack projects.


## credits
- Weather data from [Visual crossing API](https://www.visualcrossing.com).
- Weather icons comes from Visual crossing Github repo.
- GIFs comes from [GIPHY](GIPHY.com), by GIPHY API
