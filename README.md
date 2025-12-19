# 🌦️ Modern React Weather App

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

A sleek, responsive weather dashboard built with React and Tailwind CSS. This application provides real-time weather data, detailed hourly forecasts with day filtering, and 7-day predictions using the Open-Meteo API.

![App Screenshot](./preview.jpg)

## ✨ Features

- **Real-time Weather Data**: Fetches current conditions including temperature, humidity, wind speed, and precipitation.
- **Hourly Forecast**: Detailed hourly breakdown.
  - **Smart Filtering**: Displays remaining hours for the current day and full 24h cycles for future dates.
  - **Day Dropdown**: Navigate through the next 7 days to see specific hourly data.
- **7-Day Forecast**: Daily summary for the upcoming week.
- **City Search**: Autocomplete search functionality to find cities globally.
- **Unit Conversion**: Toggle seamlessly between Metric (°C, km/h) and Imperial (°F, mph) systems.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Dark Mode UI**: A modern, clean dark interface with custom weather icons.

## 🛠️ Tech Stack

- **Frontend Library**: React.js (Hooks: `useState`, `useEffect`, `useMemo`, `useRef`)
- **Styling**: Tailwind CSS
- **Data Source**: [Open-Meteo API](https://open-meteo.com/) (No API Key required)
- **Build Tool**: Vite
- **Icons**: Custom 3D-style weather assets

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have **Node.js** installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/aouintihouari/Weather-app.git](https://github.com/aouintihouari/Weather-app.git)
   cd weather-app
   ```
