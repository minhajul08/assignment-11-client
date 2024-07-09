const Slide = ({image,text}) => {
    return (
      <div
        className='w-full bg-center bg-cover h-[38rem]'
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
          <div className='text-center space-y-5'>
            <h1 className='text-3xl font-semibold text-[#bdac62] uppercase lg:text-7xl'>
            {text}
            </h1> 
            <p className="text-white lg:mx-80">The Luxury hotel hotel master is one of the best stylish hotels in madrid.This modern take on the traditional alpine lodge is located at the foot of the spain
            </p>
            <button className='p-2   bg-[#bdac62] hover:bg-white hover:text-gray-500 text-white font-bold py-2 px-4 rounded'>Details</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Slide