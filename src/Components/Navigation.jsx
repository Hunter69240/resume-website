import { useEffect, useState } from 'react';

function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = ['AboutMe', 'Skills', 'Projects'];
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -20% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="hidden sm:flex flex-col fixed top-1/4 right-0 text-xl font-semibold p-4 gap-4 lg:text-2xl">
      {['AboutMe', 'Skills', 'Projects'].map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`transition-all duration-300 ${
            activeSection === id
              ? 'text-blue-500 underline font-bold'
              : 'text-white hover:underline hover:text-blue-400'
          }`}
        >
          {id.replace(/([A-Z])/g, ' $1').trim()}
        </a>
      ))}
    </div>
  );
}

export default Navigation;
