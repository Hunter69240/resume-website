import ProjectsCards from "./ProjectsCards";

function Projects(){
    const projects=[
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
            desc:"The Todo List app is a clean and minimal task manager built with React Native. It allows users to create, update, and delete tasks with ease. With its intuitive interface and real-time task tracking, it boosts productivity and keeps daily goals in check.",
            git:"https://github.com/Hunter69240/WeatherApp"
        },
        {
            name: "To-Do List",
            vid: "videos/To-Do List.mp4", 
            desc:"The Todo List app is a clean and minimal task manager built with React Native. It allows users to create, update, and delete tasks with ease. With its intuitive interface and real-time task tracking, it boosts productivity and keeps daily goals in check.",
            git:"https://github.com/Hunter69240/todo-list"
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