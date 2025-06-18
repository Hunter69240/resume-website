import Profile from "../Images/Profile.jpg";
import { FaInstagram, FaLinkedin, FaGithub, FaReddit} from 'react-icons/fa';


function Home() {
    return (
        <>
            <div className="w-[90%] max-w-screen-lg mx-auto bg-black text-white clip-polygon-custom p-4 flex mt-4 gap-4">

                <div className="flex flex-col">
                    <img src={Profile} className="w-full h-auto max-h-[300px] object-cover "></img>
                    <p className="text-white text-xs font-bold text-center mt-2 mb-3 sm:text-2xl">Aadish D Somayaji</p>
                    <div className="flex justify-between  ml-[15%] mb-2 mr-4 sm:text-2xl">
                       <a href='https://www.instagram.com/mr_hunter69/'>  <FaInstagram className='hover:text-blue-600 text-red-400 border border-red-600  rounded-xl'/></a>
                        <a href='https://www.linkedin.com/in/aadish-d-somayaji-787b952a8/'> <FaLinkedin className='hover:text-blue-600 text-blue-500 border border-blue-700  rounded-xl'/> </a> 
                        <a href='https://github.com/Hunter69240'>  <FaGithub className='hover:text-blue-600 text-white border border-white rounded-xl'/></a>
                        <a href='https://github.com/Hunter69240'>  <FaReddit className='hover:text-blue-600 text-red-600 border border-red-600  rounded-xl'/></a>
                    </div>
                </div>

                <div className="flex flex-col justify-center text-white w-full">
                    <p className="text-white tracking-wide  mb-4 sm:text-2xl">
                        Hi, I'm Aadish D Somayaji. Learning React & React Native to build smooth, high-performance apps.
                    </p>

                    <div className="w-full flex justify-end ">
                        <a 
                            href="/Aadish_CV.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white border border-white hover:bg-white hover:text-black rounded-md px-4 py-1 mb-17"
                        >
                            Download
                        </a>
                    </div>
                </div>

               
            </div>
           
        </>
    );
}

export default Home;