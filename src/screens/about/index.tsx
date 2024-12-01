import BannerAbout from './BannerAbout'
import OverviewAbout from './OverviewAbout'
import Rca from './Rca'
import Donasi from './Donasi'

export default function About() {
  return (
    <div className='w-full'>
      <BannerAbout></BannerAbout>
      <div className='flex justify-center items-center py-4 gap-4'>
        <div className='border-2 bg-[#FADB44] border-black md:h-10 md:w-10 h-6 w-6 rounded-full'></div>
        <a href="https://youtube.com/live/x8dZZWONKtU" target="_blank" rel="noopener noreferrer"><h2 className='text-primary md:text-5xl text-xl hover:underline hover:underline-offset-2 cursor-pointer'>Live Streaming Talkshow!</h2></a>
        <div className='border-2 bg-[#FADB44] border-black md:h-10 md:w-10 h-6 w-6 rounded-full'></div>
      </div>
      <div className='flex justify-center items-center py-4 gap-4'>
        <div className='border-2 bg-[#FADB44] border-black md:h-10 md:w-10 h-6 w-6 rounded-full'></div>
        <a href="https://www.youtube.com/live/Ra8DUGNRAvg" target="_blank" rel="noopener noreferrer"><h2 className='text-primary md:text-5xl text-xl hover:underline hover:underline-offset-2 cursor-pointer'>Live Streaming Workshop!</h2></a>
        <div className='border-2 bg-[#FADB44] border-black md:h-10 md:w-10 h-6 w-6 rounded-full'></div>
      </div>
      <OverviewAbout></OverviewAbout>
      <Rca></Rca>
      <div className='flex justify-center items-center py-4 gap-4'>
        <div className='border-2 bg-[#FADB44] border-black md:h-10 md:w-10 h-6 w-6 rounded-full'></div>
        <a href="https://forms.gle/qJu5DCBV9MDCRzcQA" target="_blank" rel="noopener noreferrer"><h2 className='text-primary md:text-5xl text-xl hover:underline hover:underline-offset-2 cursor-pointer'>Register Main Event Now!</h2></a>
        <div className='border-2 bg-[#FADB44] border-black md:h-10 md:w-10 h-6 w-6 rounded-full'></div>
      </div>
      <Donasi></Donasi>
      <div className="flex flex-col md:flex-row items-center justify-center py-6 gap-4">
      <div className="flex items-center">
        <h2 className="text-primary md:text-5xl text-xl hover:underline hover:underline-offset-2 cursor-pointer">
          Contact Person:
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        <a
          href="https://wa.me/6281382854400"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-6 rounded-full shadow-md text-lg font-medium flex items-center gap-2 hover:bg-green-600"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-6 h-6"
          />
          Nafila
        </a>
        <a
          href="https://wa.me/6285723445829"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-6 rounded-full shadow-md text-lg font-medium flex items-center gap-2 hover:bg-green-600"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-6 h-6"
          />
          Aliynt
        </a>
      </div>
    </div>
    </div>
  )
}
