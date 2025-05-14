import Header from '../Components/Header'
import Socials from '../Components/Socials'
import Navigation from '../Components/Navigation'
import Profile from '../Images/Profile.jpg'

function Home(){
    return (
        <>
            <Header/>
            <div className='flex items-center justify-center gap-15 '>
                <p className='max-w-md text-justify leading-[2.5rem] text-white'> <span className='text text-3xl'>Aadish D Somayaji </span> <br/>
                    Aspiring Developer <br/>
                    I'm a Computer Science student passionate about building intelligent systems that blend software <br/>and hardware.
                    From AI-driven music generators to Arduino-powered prototypes, I love turning <br/> ideas into working solutions.
                </p>
                <img src={Profile} alt='profile' className='w-100 h-100 rounded-full '/>
                
            </div>
            <Socials/>
            <Navigation/>
        </>
    )
}

export default Home;