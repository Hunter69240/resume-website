function ProjectsCards({ title, Desc, Tech, Extra }) {
  return (
    <>
      <div className="w-[80%] bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 mx-auto my-10 p-6 rounded-lg overflow-hidden text-white">
        <h4 className="text-xl  mb-4 break-words">{title}</h4>
        <div className="flex flex-col space-y-2 break-words w-full">
          <p>{Desc}</p>
          <p>{Tech}</p>
          <p>{Extra}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectsCards;
