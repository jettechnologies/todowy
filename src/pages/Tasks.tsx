import { Edit, Menu, TaskDisplay } from "../sections"

const Tasks = () => {

  return (
    <section className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr]">
      <Menu activeLink="tasks"/>
      <div className="w-full h-full border-2 border-yellow-600">
        <TaskDisplay/>
      </div>
      <Edit />
    </section>
  )
}

export default Tasks