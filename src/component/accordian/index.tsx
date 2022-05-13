import { Fragment, useState } from "react"
import Expand from 'react-expand-animated';


interface typeAccordian {
  children: any;
  icon: string;
  rotate: string;
  summary: string;
}
const Accordian = (props: typeAccordian) => {
  const { children, icon, rotate, summary } = props
  const [expand, setExpand] = useState<any>(false)
  const toggle = () => {
    setExpand(!expand)
  }

  return (
    <Fragment>
      <div >
        <button className="flex justify-between items-center py-2 w-full" onClick={toggle}>
          <p className='text-app-blue'>{summary}</p>
          <div className='flex items-center justify-center px-2'>
            <img src={icon} alt='down' className={`w-3 h-3 opacity-60 transform rotate-${expand?rotate:"0"} duration-150`}/>
          </div>
        </button>
        <Expand open={expand}>
          {children}
        </Expand>
      </div>
    </Fragment>
  )
}

export default Accordian