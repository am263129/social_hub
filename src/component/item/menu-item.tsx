import { Link, useLocation } from "react-router-dom"
import { typeMenu } from "../../layout/navbar/menu"

const MenuItem = (props: typeMenu) => {
  const { title, icon, path } = props
  const location = useLocation()

  return (
    <Link to={path} >
      <div className={`flex flex-col justify-center items-center px-5 ${location.pathname === path ? "opacity-100 border-black border-b-2" : "opacity-50"}`}>
        <img src={icon} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default MenuItem