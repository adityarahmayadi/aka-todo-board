import { useCallback } from "react"

export function Board({
  title,
  count = 0,
  children,
  onAddCard,
  onDrop,
}){
  const allowDrop = e => e.preventDefault();

  const handleDrop = useCallback((e) => {
    const data = JSON.parse(e.dataTransfer.getData('item'));
    onDrop?.(data, title);
  }, [onDrop, title])

  const handleAddCard = useCallback(() => {
    onAddCard?.()
  }, [onAddCard])

  return(
    <div className="flex-1 bg-slate-800 highlight-white/5 ring-0 rounded p-4 h-auto">
      <div className="flex justify-between align-middle mb-2">
        <p className="text-slate-400 font-semibold size text-lg">
          {title}
        </p>
        <p className="text-slate-400 font-semibold size text-lg">
          {count}
        </p>
      </div>
      <div className="mb-4">
        <button
          className="py-2 px-4 rounded bg-sky-600 text-slate-100 font-semibold"
          onClick={handleAddCard}
        >
          Add card
        </button>
      </div>
      <div className="flex flex-col gap-4 min-h-[156px]" onDragOver={allowDrop} onDrop={handleDrop}>
        { children }
      </div>
    </div>
  )
}