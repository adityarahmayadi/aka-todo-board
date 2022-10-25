import { Board } from "../components/board"
import { Header } from "../components/header"

export default function Home() {
  return (
    <>
      <Header />
      <div className="container px-4 py-8 mx-auto">
        <div className="flex row gap-8">
          <Board title="Todo" />
          <Board title="In Progress" />
          <Board title="In Review" />
          <Board title="Done" />
        </div>
      </div>
    </>
  )
}
