
import Expand from 'react-expand-animated';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../../contexts/AppContext'
import Layout from '../../layout/layout'
import { tabList } from './tabs';
import TabItem from '../../component/item/tab-item';
import { useState } from 'react';
import { videoPosts } from '../../data/data';
import PostItem, { typePost } from '../../component/item/post-item';
import ProfileCard from '../../component/profile-card';

const HomePage = () => {
  const context = useAppContext()
  const [currentTab, setCurrentTab] = useState<number>(0)
  const [sortOption, setSortOption] = useState<any>({
    id: 0,
    title: "Top"
  })
  const [expandSort, setExpandSort] = useState<boolean>(false)
  const sortType = [
    {
      id: 0,
      title: "Top"
    },
    {
      id: 1,
      title: "Bottom"
    },
    {
      id: 2,
      title: "Most Visit"
    },
  ]

  const handleExpandSort = () => {
    setExpandSort(!expandSort)
  }

  return (
    <Layout>
      <div className='container flex mx-auto gap-7.5 pt-7.5 bg-app-white items-start justify-center'>
        {context.user && <div className='xl:flex flex-col hidden 2xl:w-1/4 xl:w-1/3 items-end'>
          <ProfileCard />
        </div>}
        <div className='w-full xl:w-2/3 2xl:w-1/2 flex-col'>
          <div className='flex flex-col bg-white border rounded-xl border-app-gray border-opacity-60'>
            {context.user &&
              <div className='flex gap-4 px-3.5 py-2.5'>
                <img src={context.user?.avatar} alt={context.user?.name} className="flex-shrink-0 w-12 h-12" />
                <input className='px-3.5 py-3 rounded-full w-full border-opacity-60 border border-app-gray-light outline-none' placeholder='Start a post' />
              </div>
            }
            <div className='flex items-center'>
              {
                tabList.map((tab, idx) =>
                  <TabItem tab={tab} currentTab={currentTab} select={setCurrentTab} key={idx} />
                )
              }
            </div>
          </div>
          <div className='flex items-center justify-center gap-2 py-4'>
            <div className='h-px w-full bg-app-gray bg-opacity-60'></div>
            <div className='flex gap-2 flex-col relative'>
              <div className='flex  gap-2'>
                <p className='whitespace-nowrap'>Sort By:</p>
                <button className='flex items-center justify-center gap-1' onClick={handleExpandSort}>
                  <p className='whitespace-nowrap'>{sortOption.title}</p>
                  <FontAwesomeIcon icon={faCaretDown} />
                </button>
              </div>
              <Expand open={expandSort}>
                <div className='absolute bg-white w-full p-2 rounded-md border shadow-xl text-center cursor-pointer'>
                  <ul>
                    {
                      sortType.map((sort, idx) => (
                        <li key={idx} onClick={() => { setSortOption(sort); setExpandSort(false) }} className="">{sort.title}</li>
                      ))
                    }
                  </ul>
                </div>
              </Expand>
            </div>
          </div>
          <div className='space-y-7.4'>
            {videoPosts.map((post, idx) => (
              <PostItem {...post} key={idx} />
            ))}
          </div>
        </div>
        {context.user && <div className='2xl:flex hidden w-1/4 '>

        </div>}
      </div>
    </Layout>
  )
}

export default HomePage