import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "../components"
import { faBars, faPlus, faCalendarAlt, faAngleDown, faFlag } from "@fortawesome/free-solid-svg-icons"
// import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"

const TaskDisplay = () => {
  return (
    <div className="max-sm:z-30 w-full h-full p-4">
      <section id = "head" className="mb-8">
        <div className="flex justify-between w-full h-fit mb-6"> 
          <div className="flex gap-x-3 items-center">
            <Button className="text-gray-800">
              <FontAwesomeIcon icon = {faBars} className="w-6 h-6"/>
            </Button>
            <h3 className="font-bold text-size-600 text-gray-800 capitalize">Todowy</h3>
          </div>
          <Button className="text-size-500 text-gray-800 flex items-center gap-x-2 capitalize font-medium">
            <FontAwesomeIcon icon = {faPlus} className="w-6 h-6 object-cover"/>
            add section
          </Button>
        </div>
        <div className="min-w-[25rem] w-full h-[3.7rem] relative task-input-container">
          <input 
            type="text" 
            placeholder="Add Task" 
            className="w-full h-full font-roboto font-medium text-size-500 pl-4 bg-gray-100 rounded-md outline-blue-500 outline-1 focus-within:bg-transparent focus:bg-transparent"
          />
          <div className="absolute top-2 right-4 gap-x-3 task-actions">
            <Button className="text-gray-800">
              <FontAwesomeIcon icon={faCalendarAlt} className="w-5 h-5 "/>
            </Button>
            <li className="w-fit list-none relative">
              <Button className="text-gray-800">
                <FontAwesomeIcon icon={faAngleDown} className="w-5 h-5 "/>
              </Button>
              <div className="hidden min-w-[10rem] min-h-4 absolute -bottom-24 border border-gray-100 left-0 bg-white p-3 rounded-md shadow-md">
                <p className="text-size-400 text-gray-400 font-thin capitalize">priority</p>
                <ul className="w-full flex list-none mt-2">
                  <li>
                  <Button className="text-red-500">
                    <FontAwesomeIcon icon={faFlag} className="w-5 h-5 "/>
                  </Button>
                  </li>
                  <li>
                  <Button className="text-yellow-500">
                    <FontAwesomeIcon icon={faFlag} className="w-5 h-5 "/>
                  </Button>
                  </li>
                  <li>
                  <Button className="text-blue-500">
                    <FontAwesomeIcon icon={faFlag} className="w-5 h-5 "/>
                  </Button>
                  </li>
                  <li>
                  <Button className="text-gray-300">
                    <FontAwesomeIcon icon={faFlag} className="w-5 h-5 "/>
                  </Button>
                  </li>
                </ul>
              </div>
            </li>
          </div>
        </div>
      </section>
      <section id = "body">

      </section>
    </div>
  )
}

export default TaskDisplay