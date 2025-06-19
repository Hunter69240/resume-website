import Socials from './Socials';




export default function ContactMe() {
  return (
    <div className="w-[90%] max-w-screen-lg mx-auto bg-black text-white clip-polygon-custom p-4 pb-40 flex flex-col mt-4 gap-4 overflow-visible">
      <div className="flex justify-around">
        <div>
            <p className='tracking-wide font-semibold sm:text-2xl mb-5'>
              Lets Connect! 
            </p>
            <p className='tracking-wide font-semibold sm:text-2xl'>Feel free to connect or reach out for collaborations!</p>
        </div>

        <Socials/>
      </div>
    </div>
  );
}