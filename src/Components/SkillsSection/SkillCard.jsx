export default function SkillCard({ logo, name }) {
  const Icon = logo;
  return (
    <div className='flex flex-col items-center flex-shrink-0 w-28 hover:scale-105 transition-transform duration-300'>
      <Icon className='text-5xl  lg:text-6xl text-orange-500 mb-2' title={name} />
      <p className='text-base sm:text-2xl lg:text-lg font-bold text-white'>{name}</p>
    </div>
  );
}
