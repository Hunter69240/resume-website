import { FaInstagram, FaGithub, FaLinkedin, FaReddit } from 'react-icons/fa';

export default function Socials() {
  const socials = [
    { name: 'Instagram', icon: <FaInstagram />, link: 'https://instagram.com' },
    { name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/Hunter69240' },
    { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://linkedin.com' },
    { name: 'Reddit', icon: <FaReddit />, link: 'https://reddit.com' },
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
