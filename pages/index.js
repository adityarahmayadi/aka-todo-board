import { Board } from "../components/board"
import { Card } from "../components/card"
import { Header } from "../components/header"

export default function Home() {
  return (
    <>
      <Header />
      <div className="container px-4 py-8 mx-auto">
        <div className="flex row gap-8">
          <Board title="Todo">
            <Card
              title='Set up dragable board'
              desc='Add dragable HTML api to board component, so we can drag and drop'
              category='Important'
              expiredAt='Nov 10, 2022'
            />
          </Board>
          <Board title="In Progress" />
          <Board title="In Review" />
          <Board title="Done" />
        </div>
      </div>
    </>
  )
}
