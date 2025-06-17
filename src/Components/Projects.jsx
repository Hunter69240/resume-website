import ProjectsCards from "./ProjectsCards";

function Projects(){
    return (
        <>
            <h1 className="text-4xl text mt-[5%] mx-[9%] text-[#F3F4F6] font-semibold" id="Projects"><u>Projects</u></h1>
            <ProjectsCards 
            title="1. Melody Mixer"
            Desc="Description: AI-powered music creation tool using 
            Recurrent Neural Networks and Variational Autoencoders to 
            generate genre-based melodies (pop, jazz, rock, classical)."
            Tech="Technologies: Python, RNN, VAE, MusicML, Machine Learning"
            Extra="Extras: Presented at IEEE COMPSIF 2025"
            />

            <ProjectsCards 
            title="2. Sensor-Based Smart Specs for the Visually Impaired"
            Desc="Description: Wearable device with ultrasonic sensors that 
            detects obstacles and provides proximity-based beeping alerts."
            Tech="Technologies: Arduino Uno, Ultrasonic Sensor, Buzzer, Embedded C"
           
            />

            <ProjectsCards 
            title="3. Smart Dustbin"
            Desc="Description: Contactless dustbin with automated lid control 
            using a distance sensor and servo motors for hygienic waste disposal."
            Tech="Technologies: Arduino Uno, Ultrasonic Sensor, Servo Motor, Embedded C"
         
            />

            <ProjectsCards 
            title="4. Python Game Suite with GUI and Authentication"
            Desc="Description: Desktop game application with user login, featuring 
            classic games like Minesweeper, PvP Tic-Tac-Toe, and AI Tic-Tac-Toe."
            Tech="Technologies: Python, Tkinter, SQLite, OOP"
            />

            <ProjectsCards 
            title="5. ShopFinder – Nearby Store Locator App"
            Desc="Description: A mobile application that helps users locate nearby shops using GPS, mark favorites, and open locations in Google Maps. Includes persistent local storage and Firebase-based beta distribution."
            Tech="Technologies: React Native (Expo), AsyncStorage, Google Maps, Firebase App Distribution"
            />

            <ProjectsCards 
            title="6. WeatherApp – Real-time Weather Forecast App"
            Desc="Description: A React Native app that allows users to search cities, view current weather details like temperature, humidity, wind, and navigate across detailed weather screens using OpenWeatherMap API."
            Tech="Technologies: React Native (CLI), OpenWeatherMap API, React Navigation, Axios"
            />  

            <ProjectsCards 
            title="7. MyPokedex – Pokémon Search & Info Viewer"
            Desc="Description: A fun and interactive app where users can search for Pokémon by name and view their images, type, weight, and height. Includes autocomplete suggestions and clean UI transitions."
            Tech="Technologies: React Native (CLI), Axios, PokéAPI, React Navigation"
            />




        </>
    )
}

export default Projects;