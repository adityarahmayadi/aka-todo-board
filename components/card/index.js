import { useCallback } from "react"

export function Card({
  item,
  setDragElement,
  moveItem
}){
  const { desc, title, category, expiredAt, status } = item;
  const onDragStart = useCallback(({ dataTransfer, target }) => {
    dataTransfer.setData('item', JSON.stringify(item));
    setDragElement(item);
    setTimeout(() => {
      target.style.visibility = "hidden";
    }, 1)
  }, [item, setDragElement])

  const onDragOver = useCallback((e) => {
    moveItem(e.target.getAttribute('data-id'));
    e.preventDefault();
  }, [moveItem])

  const onDragEnd = useCallback((e) => {
    e.target.style.visibility = "visible"
  }, [])

  return(
    <div
      className="p-4 rounded border-slate-500/30 w-full bg-slate-400 text-slate-700 cursor-pointer"
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      data-id={item.id}
    >
      <div className="flex justify-between mb-4 items-center">
        <p className="text-lg font-semibold text-slate-800">{title}</p>
        <p className="font-bold text-xs">{category}</p>
      </div>
      <p className="mb-4">
        {desc}
      </p>
      <div className="flex justify-between">
        <p className="font-bold text-xs text-sky-700">
          {status}
        </p>
        <p className="font-bold text-xs">
          {expiredAt}
        </p>
      </div>
    </div>
  )
}