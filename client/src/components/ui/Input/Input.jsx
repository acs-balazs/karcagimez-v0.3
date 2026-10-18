function Input({
  as = 'input',
  id,
  label,
  name,
  ...props
}) {
  const Element = as
  const inputId = id || name
  const controlClassName = 'min-h-[46px] w-full rounded-[10px] border border-system-grey-300 bg-system-grey-100 px-[13px] py-[11px] text-system-grey-900 outline-none transition-[border-color,box-shadow] duration-[160ms] focus:border-primary-500 focus:shadow-[0_0_0_3px_var(--system---black--10)]'

  return (
    <label className="grid gap-[7px] text-[13px] font-bold text-system-grey-800" htmlFor={inputId}>
      <span>{label}</span>
      <Element
        className={`${controlClassName} ${as === 'textarea' ? 'min-h-[120px] resize-y' : ''}`}
        id={inputId}
        name={name}
        {...props}
      />
    </label>
  )
}

export default Input
