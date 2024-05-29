import { Menu } from "../sections";

const Trash = () => {
  return (
    <section className="w-full min-h-screen border-2 border-green-600 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] md:grid-cols-2">
      <Menu activeLink="deleted"/>
      <div className="w-full h-full">
        deleted tasks
      </div>
  </section>
  )
}

export default Trash