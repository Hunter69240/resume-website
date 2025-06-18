import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

function ProjectsCards({ name, vid, desc, git }) {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleToggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="w-[90%] border border-white bg-black relative group overflow-hidden rounded-md p-2 flex flex-col gap-2 mb-10">
      <h2 className="text-xl font-bold text-white mb-2">{name}</h2>

      {vid ? (
        <div className="relative" onClick={handleToggleOverlay}>
          <video
            src={vid}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto max-h-[300px] object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <div
            className={`absolute inset-0 bg-black/60 text-white flex items-center justify-center transition-opacity duration-300
            ${showOverlay ? 'opacity-100' : 'opacity-0'}
            sm:opacity-0 sm:group-hover:opacity-100`}
          >
            <p className="text-sm px-4 text-center">{desc}</p>
          </div>
        </div>
      ) : (
        <p className="text-sm text-white px-2">{desc}</p> 
      )}

      <div className="flex justify-end">
        {git && (
          <a href={git} target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-blue-600 text-white border border-white rounded-xl text-2xl p-1" />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectsCards;
