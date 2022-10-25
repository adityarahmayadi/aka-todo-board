import { useCallback, useState } from 'react'
import { Board } from '../components/board'
import { Card } from '../components/card'
import { Header } from '../components/header'
import { data } from '../data'

export default function Home() {
  const [items, setItems] = useState(data);
  const [dragEl, setDragEl] = useState(null);

  const onDrop = useCallback((item, status) => {
    if(item.status === status){
      return;
    }

    setItems(prevState => {
      const newItems = prevState
        .filter(i => i.id !== item.id)
        .concat({ ...item, status})
      return [...newItems];
    })
  }, [])

  const moveItem = useCallback((el) => {
    setItems(prevState => {
      const itemIndex = prevState.findIndex(i => i.id === dragEl.id);
      const hoverIndex = prevState.findIndex(i => i.id === el);
      const newState = [...prevState];

      newState.splice(itemIndex, 1);
      newState.splice(hoverIndex, 0, dragEl)
      return [ ...newState ];
    })
  }, [dragEl])

  const setDragElement = useCallback((el) => {
    setDragEl(el)
  }, [])

  return (
    <>
      <Header />
      <div className='container px-4 py-8 mx-auto'>
        <div className='flex row gap-8 items-start'>
          {
            ['Todo', 'In Progress', 'In Review', 'Done'].map((status) => {
              const count = items.filter(item => item.status === status).length;
              return(
                <Board
                  key={`board-${status}`}
                  onDrop={onDrop}
                  title={status}
                  count={count}
                >
                  { items
                      .filter(item => item.status === status)
                      .map((item) => (
                        <Card
                          key={item.id}
                          item={item}
                          moveItem={moveItem}
                          setDragElement={setDragElement}
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
