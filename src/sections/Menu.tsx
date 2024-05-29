import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog, faStar, faMoon, faTrash, faTasks, faSearch, faHistory } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { avatarTwo } from "../assets";
import { Button } from "../components";

interface Props{
  activeLink:string;
}

const Menu:React.FC<Props> = ({activeLink}) => {

  return (
    <div className="hidden md:block w-[85%] md:min-w-[20rem] p-6 min-h-full bg-white border-r border-gray-200 max-sm:absolute top-0 left-0 max-sm:z-[999px]">
      <div className="w-full flex justify-between mb-[3rem]">
        <div className="w-fit h-fit flex gap-x-4 items-center">
          <img src={avatarTwo} alt="Users avatar" className="w-12 h-12 rounded-full object-cover"/>
          <p className="text-size-400 lg:text-size-500 font-medium capitalize">lisa avalanche</p>
        </div>
        <Button className="w-fit h-fit p-2"><FontAwesomeIcon icon={faCog} className="w-6 h-6 text-gray-800"/></Button>
      </div>
      <ul className="w-full h-fit flex flex-col gap-y-5">
        <li className="flex gap-x-5 py-2 items-center text-gray-800 cursor-pointer">
          <FontAwesomeIcon icon = {faMoon} className="w-6 h-6"/> 
          <p className="text-size-400 lg:text-size-500 font-medium">Dark Mode</p>
        </li>
        <li className={`${activeLink === "starred" && "bg-gray-300 pl-3"} py-2 text-gray-800`}>
          <Link to = "/starredTasks" className="flex gap-x-5 items-center">
            <FontAwesomeIcon icon = {faStar} className="w-6 h-6"/>
            <p className="text-size-400 lg:text-size-500 font-medium">Starred Tasks</p>
          </Link>
        </li>
        <li className={`${activeLink === "tasks" && "bg-gray-300 pl-3"} py-2 text-gray-800`}>
          <Link to = "/tasks" className="flex gap-x-5 items-center">
            <FontAwesomeIcon icon = {faTasks} className="w-6 h-6"/>
            <p className="text-size-400 lg:text-size-500 font-medium">Tasks</p>
          </Link>
        </li>
        <li className="flex gap-x-5 py-2 items-center text-gray-800 cursor-pointer">
          <FontAwesomeIcon icon = {faSearch} className="w-6 h-6"/> 
          <p className="text-size-400 lg:text-size-500 font-medium">Search</p>
        </li>
        <li className={`${activeLink === "history" && "bg-gray-300 pl-3"} py-2 text-gray-800`}>
          <Link to = "/history" className="flex gap-x-5 items-center">
            <FontAwesomeIcon icon = {faHistory} className="w-6 h-6"/>
            <p className="text-size-400 lg:text-size-500 font-medium">History</p>
          </Link>
        </li>
        <li className={`${activeLink === "deleted" && "bg-gray-300 pl-3"} py-2 text-gray-800`}>
          <Link to = "/trash" className="flex gap-x-5 items-center">
            <FontAwesomeIcon icon = {faTrash} className="w-6 h-6"/>
            <p className="text-size-400 lg:text-size-500 font-medium">Deleted Tasks</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu