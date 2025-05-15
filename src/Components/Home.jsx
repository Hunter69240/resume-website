import Header from '../Components/Header'
import Socials from '../Components/Socials'
import Navigation from '../Components/Navigation'
import Profile from '../Images/Profile.jpg'

function Home() {
    return (
        <>
            <Header />
            <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-20 px-4 py-10 mx-[6%]">
                <p className="max-w-md text-justify leading-relaxed text-white text-base sm:text-lg">
                    <span className="text-3xl font-semibold">Aadish D Somayaji</span> <br />
                    Aspiring Developer <br />
                    I'm a Computer Science student passionate about building intelligent systems that blend software and hardware.
                    From AI-driven music generators to Arduino-powered prototypes, I love turning ideas into working solutions.
                </p>
                <img
                    src={Profile}
                    alt="profile"
                    className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover"
                />
            </div>
            <Socials />
            <Navigation />
        </>
    );
}

export default Home;