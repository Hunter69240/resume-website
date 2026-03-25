import Profile from "../Images/Profile.jpg";
import { FaLinkedin, FaGithub, FaReddit, FaBlog } from 'react-icons/fa';

function Home() {
    return (
        <>
            <div className="w-[90%] max-w-screen-lg mx-auto bg-black text-white border border-white rounded-md px-4 py-5 sm:px-6 sm:py-6 flex flex-col sm:flex-row mt-4 gap-6">

                {/* Left: Photo + Name + Socials */}
                <div className="flex flex-col items-center min-w-fit">
                    <img
                        src={Profile}
                        alt="Aadish D Somayaji"
                        className="w-36 h-36 sm:w-48 sm:h-48 object-cover rounded-md"
                    />
                    <p className="text-white text-sm font-semibold text-center mt-3 mb-2 sm:text-lg tracking-wide">
                        Aadish D Somayaji
                    </p>
                    <div className="flex gap-3 text-xl sm:text-2xl">
                        <a href="https://www.linkedin.com/in/aadish-d-somayaji-787b952a8/" aria-label="LinkedIn Profile">
                            <FaLinkedin className="text-blue-500 hover:text-blue-400 transition-colors" />
                        </a>
                        <a href="https://github.com/Hunter69240" aria-label="GitHub Profile">
                            <FaGithub className="text-white hover:text-gray-300 transition-colors" />
                        </a>
                        <a href="https://www.reddit.com/user/MrHunter69420/" aria-label="Reddit Profile">
                            <FaReddit className="text-white hover:text-orange-400 transition-colors" />
                        </a>
                        <a href="https://blog.aadishds.me/" aria-label="Blog">
                            <FaBlog className="text-white hover:text-gray-300 transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Right: Bio + Button */}
                <div className="flex flex-col justify-center gap-6 w-full">
                    <p className="text-white text-base sm:text-2xl leading-relaxed tracking-wide">
                        Software developer focused on full-stack web and mobile. I build fast, clean apps - from REST APIs and databases to polished React frontends.
                    </p>

                    <div className="flex justify-start sm:justify-end">
                        <a
                            href="/Aadish_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white border border-white hover:bg-white hover:text-black transition-colors rounded-md px-5 py-2 text-sm sm:text-lg font-medium"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;