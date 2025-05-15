import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';
function Socials (){
    return (
        <>
        <div className="flex flex-col w-fit  fixed top-1/4 gap-4 text">
            <FaEnvelope className='hover:text-blue-600'/> 
            <FaInstagram className='hover:text-blue-600'/>
            <FaLinkedin className='hover:text-blue-600'/>
            <FaGithub className='hover:text-blue-600'/>
            
        </div>
        </>
    )
}

export default Socials;