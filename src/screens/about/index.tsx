import BannerAbout from './BannerAbout'
import OverviewAbout from './OverviewAbout'
import Rca from './Rca'

export default function About() {
  return (
    <div className='w-full'>
      <BannerAbout></BannerAbout>
      <OverviewAbout></OverviewAbout>
      <Rca></Rca>
      <div className='flex justify-center items-center py-4 gap-4'>
        <div className='border-2 bg-[#FADB44] border-black md:h-10 md:w-10 h-6 w-6 rounded-full'></div>
        <a href="https://" target="_blank" rel="noopener noreferrer"><h2 className='text-primary md:text-5xl text-xl hover:underline hover:underline-offset-2 cursor-pointer'>Register Main Event Now!</h2></a>
        <div className='border-2 bg-[#FADB44] border-black md:h-10 md:w-10 h-6 w-6 rounded-full'></div>
      </div>
    </div>
  )
}
