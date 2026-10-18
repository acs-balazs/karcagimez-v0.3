import { Link } from 'react-router-dom'
import Card from '../../../components/ui/Card/Card.jsx'
import { formatPrice, getImageUrl } from '../../../services/api.js'
import './products.css'

function ProductCard({ product }) {
  const imageUrl = getImageUrl(product.image)

  return (
    <Card className="flex flex-col transition-[transform,box-shadow] duration-[170ms] hover:-translate-y-1 hover:shadow-md">
      <Link
        aria-label={`${product.name} részletei`}
        className="relative grid h-[235px] place-items-center overflow-hidden bg-system-grey-100"
        to={`/termek/${encodeURIComponent(product.slug)}`}
      >
        {imageUrl
          ? <img alt={product.name} className="size-full object-cover" loading="lazy" src={imageUrl} />
          : <div aria-hidden="true" className="product-placeholder"><span>Karcagi Méz</span></div>}
      </Link>
      <div className="flex flex-1 flex-col p-[19px_20px_20px]">
        <h3 className="m-0 font-serif text-headline-h5-headline font-semibold">{product.name}</h3>
        <p className="mb-4 mt-2 min-h-[42px] text-body-b3-body leading-[1.6] text-system-grey-600">{product.desc || 'Gondosan válogatott, természetes méz.'}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-system-grey-200 pt-[15px]">
          <div>
            <strong className="block text-subtitle-s2-subtitle text-primary-300">{formatPrice(product.price500g)}</strong>
            <small className="mt-[3px] block text-caption-c1-caption text-system-grey-600">500 g</small>
          </div>
          <Link
            className="inline-flex min-h-9 items-center justify-center gap-[9px] rounded-full border border-system-grey-300 bg-system-grey-100 px-[14px] text-button-font-small font-bold text-primary-300 no-underline transition-colors duration-[160ms] hover:border-system-grey-400 hover:bg-system-grey-200"
            to={`/termek/${encodeURIComponent(product.slug)}`}
          >
            Részletek <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard
