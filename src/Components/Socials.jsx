import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';
function Socials (){
    return (
        <>
        <div className="flex flex-col w-fit  fixed top-1/4 gap-4 text-xl sm:text-2xl">

          <a href="mailto:aadishds@gmail.com">
                    <FaEnvelope className="hover:text-blue-600 text-white" />
                </a> 
          <a href='https://www.instagram.com/mr_hunter69/'>  <FaInstagram className='hover:text-blue-600 text-red-400'/></a>
          <a href='https://www.linkedin.com/in/aadish-d-somayaji-787b952a8/'> <FaLinkedin className='hover:text-blue-600 text-blue-500'/> </a> 
          <a href='https://github.com/Hunter69240'>  <FaGithub className='hover:text-blue-600 text-black'/></a>
            
        </div>
        </>
    )
}

export default Socials;