import ProjectsCards from "./ProjectsCards";

function Projects(){
    const projects=[
        {
            name: "AquaScope",
            vid: "videos/AquaScope.mkv",
            desc: "AquaScope is an interactive 3D fish encyclopedia that allows users to discover detailed biological data, habitat info, and immersive 3D models of fish species worldwide. With intelligent search and a clean ocean-themed UI, it provides an engaging way to explore aquatic life.",
            git: "https://github.com/Hunter69240/Majorpp-Frontend"
        },
        {
            name: "GDHelper",
            vid: "videos/GDHelper.mp4",
            desc: "GDHelper is a full-stack speech evaluation web app that records user responses to generated topics, transcribes speech, analyzes delivery and reasoning across multiple layers, and provides structured AI feedback to improve speaking skills.",
            git: "https://github.com/Hunter69240/GDHelper"
        },
        {
            name: "MyPokedex",
            vid: "videos/MyPokedex.mp4", 
            desc:"MyPokedex is a sleek React Native app that lets users explore Pokémon with detailed info, images, and search functionality. It uses PokéAPI and responsive UI to deliver a fast, engaging experience on mobile.",
            git:"https://github.com/Hunter69240/MyPokedex"
        },
        {
            name: "ShopFinder",
            vid: "videos/ShopFinder.mp4", 
            desc:"ShopFinder is a location-based React Native app that helps users quickly discover nearby shops using GPS. With features like category filters, Google Maps integration, and favorite shop management, it offers a smooth and practical experience for everyday needs.",
            git:"https://github.com/Hunter69240/ShopFinder"
        },
        {
            name: "WeatherApp",
            vid: "videos/WeatherApp.mp4", 
            desc:"WeatherApp is a clean React Native application that displays real-time weather information for any location. It fetches data using the OpenWeatherMap API and features a user-friendly interface with search functionality and location-based updates.",
            git:"https://github.com/Hunter69240/WeatherApp"
        },
        {
            name: "JsonGlance",
            vid: "videos/JsonGlance.mkv", 
            desc: "JsonGlance is a web-based utility that allows users to paste JSON data and instantly visualize its hierarchical structure. Built with React, it offers an intuitive interface for inspecting and navigating complex JSON objects, making it ideal for developers, API users, and learners working with JSON data.",
            git: "https://github.com/Hunter69240/JsonGlance"
        },
        
        {
            name: "To-Do List",
            vid: "videos/To-Do List.mp4", 
            desc:"The Todo List app is a clean and minimal task manager built with React Native. It allows users to create, update, and delete tasks with ease. With its intuitive interface and real-time task tracking, it boosts productivity and keeps daily goals in check.",
            git:"https://github.com/Hunter69240/todo-list"
        },
        {
            name: "FishKnower",
            vid: "videos/FishKnower.mp4", 
            desc:"FishKnower is an interactive React Native app that lets users explore and learn about different fish species through a searchable interface. With dynamic habitat-based backgrounds, Appwrite-powered data, and embedded 3D model viewing, it delivers an immersive underwater discovery experience for marine enthusiasts and students alike.",
            git:"https://github.com/Hunter69240/FishKnower"
        },
        {
            name: "MyNotes",
            vid: "videos/MyNotes.mp4", 
            desc: "MyNotes is a full-stack note-taking app built with React Native and Express.js. It allows users to create, edit, and delete notes with a clean, responsive UI. The backend uses MongoDB for storage and exposes RESTful APIs, while the frontend offers seamless integration and real-time updates.",
            git: "https://github.com/Hunter69240/mynotes"
        },

        {
            name: "Key Flow",
            vid: "videos/Key-Flow.mp4", 
            desc: "Key Flow is a React Native typing speed test app that helps users practice typing, measure their speed (WPM) and accuracy, and track previous tests. It features configurable timers, real-time results, and a responsive, intuitive UI for both Android and iOS.",
            git: "https://github.com/Hunter69240/Keyflow"
        },


        {
            name: "DFA Visualizer",
            vid: "videos/DFAVisualizerDemo.mkv", 
            desc: "DFA Visualizer is a Python-based simulator that lets users define custom DFAs, validate input strings, and generate animated GIFs showing each transition step. Built using NetworkX, Matplotlib, and PIL, it’s perfect for visually understanding automata behavior.",
            git: "https://github.com/Hunter69240/DFAVisualizer"
        },

        {
            name: "Python Game Suite",
            vid: "", 
            desc: "A desktop game application with user authentication, featuring classics like Minesweeper, PvP Tic-Tac-Toe, and AI-based Tic-Tac-Toe. Offers a fun and educational GUI experience while demonstrating core OOP and DBMS concepts.",
            git: "" 
        },

        {
            name: "Smart Dustbin",
            vid: "", 
            desc: "A contactless dustbin system with automated lid control using an ultrasonic sensor and servo motors. Designed to promote hygienic waste disposal with minimal physical contact.",
            git: "" 
        },

        {
            name: "Smart Specs for the Visually Impaired",
            vid: "", 
            desc: "A wearable assistive device that uses ultrasonic sensors to detect obstacles and gives proximity-based beeping alerts, enhancing navigation safety for visually impaired individuals.",
            git: "" 
        },

        {
            name: "Melody Mixer",
            vid: "", 
            desc: "An AI-powered music generation tool that uses RNNs and VAEs to create genre-based melodies in pop, jazz, rock, and classical styles. Presented at IEEE COMPSIF 2025.",
            git: "" 
        }

    ]
    return (
        <>
        <div className="w-[90%] max-w-screen-lg mx-auto bg-black text-white clip-polygon-custom p-4 pb-40 flex flex-col mt-4 gap-4">
            <h2 className="text-2xl font-bold mb-5 sm:text-4xl">Projects</h2>
            <div className="mb-[25] ml-7 sm:grid sm:grid-cols-2 sm:gap-4 ">
               {projects.map((project, index) => (
                    <ProjectsCards 
                        key={index}
                        name={project.name}
                        vid={project.vid}
                        desc={project.desc}
                        git={project.git}
                    />
               ))}
            </div>
           
        </div>
            




        </>
    )
}

export default Projects;