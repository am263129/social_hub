import { useAppContext } from '../../contexts/AppContext'
import Layout from '../../layout/layout'
import TabItem from '../../component/item/tab-item';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { videoPosts } from '../../data/data';
import PostItem, { typePost } from '../../component/item/post-item';
import ProfileCard from '../../component/profile-card';

const JobPage = () => {
  const context = useAppContext()
  const [currentTab, setCurrentTab] = useState<number>(0)
  const [sortOption, setSortOption] = useState<number>(0)
  const sortType = ["Top", "Bottom", "Most Visit"]

  return (
    <Layout>
      <div className='container flex mx-auto gap-7.5 pt-7.5 bg-app-white items-start justify-center'>
        {context.user && <div className='xl:flex flex-col hidden 2xl:w-1/4 xl:w-1/3 items-end'>
          <ProfileCard />
        </div>}
        <div className='w-full xl:w-2/3 2xl:w-1/2 flex-col'>
          <div className='flex items-center justify-center gap-2 py-4'>
            <div className='h-px w-full bg-app-gray bg-opacity-60'></div>
            <div className='flex gap-2'>
              <p className='whitespace-nowrap'>Sort By:</p>
              <button className='flex items-center justify-center gap-1'>
                <p>{sortType[sortOption]}</p>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </div>
          </div>
          <div className='space-y-7.4'>
            <h1>This is job page</h1>
          </div>
        </div>
        {context.user && <div className='2xl:flex hidden w-1/4 '>

        </div>}
      </div>
    </Layout>
  )
}

export default JobPage