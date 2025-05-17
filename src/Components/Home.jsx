import Header from '../Components/Header'
import Socials from '../Components/Socials'
import Navigation from '../Components/Navigation'
import Profile from '../Images/Profile.jpg'
import LightCursor from './LightCursor'
function Home() {
    return (
        <>
            <LightCursor/>
            <Header />
            <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-20 px-4 py-10 mx-[6%]">
                <p className="max-w-md text-justify leading-relaxed  text-base sm:text-lg">
                    <span className="text-4xl font-bold leading-[2] md:text-5xl text-[#F3F4F6]">Aadish D Somayaji</span> <br />
                    
                   <span className='text-xl md:text-2xl font-medium text-gray-200 mb-6'> Enthusiastic about crafting seamless user experiences with React for the web and React Native for mobile.</span>
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