import ProjectsCards from "./ProjectsCards";

function Projects(){
    return (
        <>
            <h1 className="text-3xl text mt-20 mx-20" id="Projects"><u>Projects</u></h1>
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
        </>
    )
}

export default Projects;