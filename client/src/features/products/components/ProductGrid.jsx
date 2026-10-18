import ProductCard from './ProductCard.jsx'

function ProductGrid({ products }) {
  if (!products.length) {
    return <div className="rounded-[13px] border border-system-grey-200 bg-system-grey-100 p-[27px] text-center text-system-grey-700">Jelenleg nincs megjeleníthető termék.</div>
  }

  return (
    <div className="grid grid-cols-3 gap-[23px] max-[900px]:grid-cols-2 max-[680px]:grid-cols-1 max-[680px]:gap-4">
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default ProductGrid
