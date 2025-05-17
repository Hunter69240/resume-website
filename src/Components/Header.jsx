function Header (){
    return (
        <>
      <div className=' flex justify-between'>

        <div>
        <p className="text-[#F3F4F6] ">Aadish D Somayaji</p>
        <p className="text-[#F3F4F6]">🛠️ Now Playing: Python, React Native, Tailwind<br/>
            🎯 Mission: Build real-world smart tools
        </p>
        </div>

        <div>
            <button className="mx-3 my-3 text bg-green-500 rounded-full w-25 p-2 shadow-lg hover:bg-red-500">Download</button>
        </div>
      </div>
    </>
    )
}

export default Header;