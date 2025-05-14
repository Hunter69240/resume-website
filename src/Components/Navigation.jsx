function Navigation() {
  return (
    <div className="hidden sm:flex flex-col fixed top-1/4 right-0 text p-4 gap-4">
      <a className="text-white hover:underline hover:text-blue-500" href="#AboutMe">About Me</a>
      <a className="text-white hover:underline hover:text-blue-500" href="#Skills">Skills</a>
      <a className="text-white hover:underline hover:text-blue-500" href="#Projects">Projects</a>
    </div>
  );
}

export default Navigation;