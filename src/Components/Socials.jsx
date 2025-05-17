import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';
function Socials (){
    return (
        <>
        <div className="flex flex-col w-fit  fixed top-1/4 gap-4 text-xl sm:text-2xl">
            <FaEnvelope className='hover:text-blue-600 text-white'/> 
            <FaInstagram className='hover:text-blue-600 text-red-400'/>
            <FaLinkedin className='hover:text-blue-600 text-blue-500'/>
            <FaGithub className='hover:text-blue-600 text-black'/>
            
        </div>
        </>
    )
}

export default Socials;