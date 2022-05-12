import { faCaretDown, faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useAppContext } from "../../contexts/AppContext"
import { currentUser } from "../../data/data"
import { menuList } from "./menu"
import MenuItem from "../../component/item/menu-item"

const Navbar = () => {
  const [keyword, setKeyword] = useState<string>("")
  const context = useAppContext()

  const handleLogin = () => {
    context.setUser(currentUser)
  }
  return (
    <nav className="h-14 flex items-center justify-between">
      <div className="flex gap-3">
        <img src="/assets/icon/ico_linkedin.svg" alt="logo" />
        <div className="rounded-md bg-app-gray flex gap-2 px-4 items-center">
          <img src="/assets/icon/ico_search.svg" alt="search" className="w-4 h-4" />
          <input value={keyword} onChange={(e) => setKeyword(e.target.value)} className="outline-none bg-transparent" type={"text"} placeholder="Search" />
        </div>
      </div>
      <div className="flex gap-2">
        {menuList.map((menu, idx) =>
          <MenuItem {...menu} key={idx} />
        )}
        <div className="flex ">
          <div className="flex items-center justify-center px-6">
            {!context.user ?
              <button onClick={handleLogin}>Log in</button>
              :
              <div className="flex flex-col justify-center items-center">
                <img src={context.user.avatar} alt={context.user.name} className="w-6 h-6" />
                <div className="flex items-center gap-2 opacity-50 hover:opacity-100">
                  <p>Me</p>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </div>
            }
          </div>
          <div className="h-full bg-black w-px opacity-50"></div>
          <div className="opacity-50 hover:opacity-100 flex justify-center items-stretch flex-col px-6">
            <img src="/assets/icon/ico_app.svg" alt="app" />
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        <button className="text-app-yellow-dark">
          Try Premium for free
        </button>
      </div>
    </nav>
  )
}

export default Navbar