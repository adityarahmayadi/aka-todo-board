export function Card({
  title,
  desc,
  expiredAt,
  category
}){
  return(
    <div className="p-4 rounded border-slate-500/30 w-full bg-slate-400 text-slate-700 cursor-pointer">
      <div className="flex justify-between mb-2">
        <p className="text-lg font-semibold text-slate-800">{title}</p>
        <p>{category}</p>
      </div>
      <p className="mb-2">
        {desc}
      </p>
      <p className="mb-2 font-bold text-xs text-end">
        {expiredAt}
      </p>
    </div>
  )
}