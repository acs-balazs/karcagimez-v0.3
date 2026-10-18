function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[0.17em] text-primary-800 before:inline-block before:h-px before:w-[22px] before:bg-primary-500 before:content-['']">
      {children}
    </span>
  )
}

export default Eyebrow
