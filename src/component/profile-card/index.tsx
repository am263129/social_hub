import { useAppContext } from "../../contexts/AppContext"
import Accordian from "../accordian"

const ProfileCard = () => {
  const context = useAppContext()

  return (
    <div className='flex-col rounded-lg flex max-w-xs w-full gap-7.4'>
      <div className='flex items-center justify-center flex-col bg-white rounded-lg  divide-y'>
        <div className='relative w-full flex flex-col items-center justify-center pb-2.5'>
          <img src={context.user?.cover} alt="cover" className='h-14 rounded-t-lg w-full absolute top-0 left-0 z-0' />
          <img src={context.user?.avatar} alt={context.user?.name} className="my-5 w-17 h-17 z-10" />
          <p className='text-center'>{context.user?.name}</p>
          <p className='text-center text-xs'>{context.user?.summary}</p>
        </div>
        <div className='w-full  px-3.5 py-2.5 space-y-2.5'>
          <div className='flex justify-between items-start text-xs'>
            <div className=''>
              <p className='text-app-gray-light opacity-60'>Connections</p>
              <p>Grow your network</p>
            </div>
            <p className='text-app-blue font-bold'>{context.user?.connection}</p>
          </div>
          <div className='flex justify-between items-start text-xs'>
            <p className='text-app-gray-light opacity-60'>Followers</p>
            <p className='text-app-blue font-bold'>{context.user?.follower}</p>
          </div>
        </div>
        <div className='w-full  px-3.5 py-2.5 space-y-2.5 text-xs'>
          <p className='text-app-gray-light opacity-60'>Access exclusive tools & insights</p>
          <div className='flex gap-2 items-center'>
            <img src="/assets/icon/ico_premium.svg" alt='premium' />
            <p>Grow your network</p>
          </div>
        </div>
        <div className='w-full  px-3.5 py-2.5 space-y-2.5 text-xs'>
          <p>My items</p>
        </div>
      </div>
      <div className='bg-white rounded-lg flex flex-col py-2.5 px-3.5'>
        <Accordian summary='Connections' icon='/assets/icon/ico_down.svg' rotate="180" >
          <div className="mt-2 rounded-lg bg-white h-12 w-full"></div>
        </Accordian>
        <Accordian summary='Groups' icon='/assets/icon/ico_down.svg' rotate="180" >
          <div className="mt-2 rounded-lg bg-white h-12 w-full"></div>
        </Accordian>
        <Accordian summary='Events' icon='/assets/icon/ico_plus.svg' rotate="45" >
          <div className="mt-2 rounded-lg bg-white h-12 w-full"></div>
        </Accordian>
        <Accordian summary='Pages' icon='/assets/icon/ico_plus.svg' rotate="45" >
          <div className="mt-2 rounded-lg bg-white h-12 w-full"></div>
        </Accordian>
      </div>
    </div>
  )
}

export default ProfileCard