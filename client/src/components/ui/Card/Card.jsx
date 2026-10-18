function Card({ as: Element = 'article', children, className = '', ...props }) {
  return (
    <Element
      className={`overflow-hidden rounded-[17px] border border-system-grey-200 bg-system-grey-100 shadow-sm ${className}`.trim()}
      {...props}
    >
      {children}
    </Element>
  )
}

export default Card
