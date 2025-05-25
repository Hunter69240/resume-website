function Header() {
    return (
        <>
            <div className="flex justify-between mt-6">
                <div>
                    <p className="text-[#F3F4F6]">Aadish D Somayaji</p>
                    <p className="text-[#F3F4F6]">
                        🛠️ Now Playing: Python, React Native, Tailwind<br />
                        🎯 Mission: Build real-world smart tools
                    </p>
                </div>

                <div>
                    <a 
                        href="/Aadish_CV.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-3 my-3 bg-[#8B5CF6] text-white rounded-full w-25 p-2 shadow-lg hover:bg-red-500"
                    >
                        Download
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;
