import logo from '../assets/logo.png';
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <div className="flex flex-col items-center gap-4">
        
  
        <div className="bg-blue-600 p-4 rounded-xl animate-pulse">

          <img src={logo} alt="logo" className='w-44' />
        </div>


      </div>
    </div>
  );
};

export default Loader;