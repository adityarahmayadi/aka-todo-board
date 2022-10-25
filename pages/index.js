import { useState } from "react"
import { Board } from "../components/board"
import { Card } from "../components/card"
import { Header } from "../components/header"
import { data } from '../data'

export default function Home() {
  const [items, setItems] = useState(data);

  return (
    <>
      <Header />
      <div className="container px-4 py-8 mx-auto">
        <div className="flex row gap-8">
          {
            ["Todo", "In Progress", "In Review", "Done"].map((status) => {
              console.log({ items });
              const count = items.filter(item => item.status === status).length;
              return(
                <Board
                  title={status} key={`board-${status}`}
                  count={count}
                >
                  { items
                      .filter(item => item.status === status)
                      .map(({ id, title, desc, category, expiredAt }) => (
                        <Card
                          key={id}
                          title={title}
                          desc={desc}
                          category={category}
                          expiredAt={expiredAt}
                        />
                      ))
                  }
                </Board>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
