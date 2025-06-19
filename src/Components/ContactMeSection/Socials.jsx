import { FaInstagram, FaGithub, FaLinkedin, FaReddit } from 'react-icons/fa';

export default function Socials() {
  const socials = [
    { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/mr_hunter69/' },
    { name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/Hunter69240' },
    { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/aadish-d-somayaji-787b952a8/' },
    { name: 'Reddit', icon: <FaReddit />, link: 'https://www.reddit.com/user/MrHunter69420/' },
  ];

  return (
    <div className="flex flex-col gap-3">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white hover:text-blue-400 transition duration-200"
        >
          <span className="text-xl sm:text-2xl">{social.icon}</span>
          <span className="text-md sm:text-2xl">{social.name}</span>
        </a>
      ))}
    </div>
  );
}
