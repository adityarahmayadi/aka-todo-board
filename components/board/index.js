export function Board({ title, count = 0 }){
  return(
    <div className="flex-1 bg-slate-800 highlight-white/5 ring-0 rounded p-4">
      <div className="flex row justify-between align-middle mb-8">
        <p className="text-sky-400 font-semibold size text-lg">
          {title}
        </p>
        <p className="text-sky-400 font-semibold size text-lg">
          {count}
        </p>
      </div>
    </div>
  )
}