import { Menu } from "../sections"

const History = () => {
  return (
    <section className="w-full min-h-screen border-2 border-green-600 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] md:grid-cols-2">
      <Menu activeLink="history"/>
      <div className="w-full h-full">
        history
      </div>
  </section>
  )
}

export default History