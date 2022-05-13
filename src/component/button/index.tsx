import { useState } from "react";

interface typeActionButton {
  title: string;
  icon: string;
  action: any;
}
export const ActionButton = (props: typeActionButton) => {
  const { icon, title, action } = props
  const [hovered, setHovered] = useState<boolean>(false)
  return (
    <button className="flex text-sm gap-2 opacity-60 hover:text-app-blue hover:opacity-100 items-center" onClick={action} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-1">
        <path strokeWidth="2" d={icon} fill={`${hovered ? "#0A66C2" : "black"} `} />
      </svg>
      <p>{title}</p>
    </button>
  )
}

