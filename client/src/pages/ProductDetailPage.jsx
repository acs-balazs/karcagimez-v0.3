import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SiteLayout from '../components/layout/SiteLayout.jsx'
import Eyebrow from '../components/ui/Eyebrow/Eyebrow.jsx'
import { api, formatPrice, getImageUrl } from '../services/api.js'
import '../features/products/components/products.css'

function ProductDetailPage() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [loadedSlug, setLoadedSlug] = useState('')
  const [error, setError] = useState('')
  const loading = loadedSlug !== slug

  useEffect(() => {
    let isCurrent = true

    api.getProduct(slug)
      .then((result) => {
        if (isCurrent) {
          setProduct(result)
          setError('')
        }
      })
      .catch((requestError) => {
        if (isCurrent) {
          setError(requestError.message || 'A termék betöltése nem sikerült.')
        }
      })
      .finally(() => {
        if (isCurrent) {
          setLoadedSlug(slug)
        }
      })

    return () => {
      isCurrent = false
    }
  }, [slug])

  const imageUrl = getImageUrl(product?.image)

  return (
    <SiteLayout>
      <section className="mx-auto w-[min(1160px,calc(100%_-_48px))] pt-[58px] max-[680px]:w-[calc(100%_-_32px)] max-[680px]:pt-[34px]">
        <Link className="mb-[25px] inline-flex items-center gap-2 text-body-b3-body font-bold text-primary-800 no-underline" to="/termekek"><span aria-hidden="true">←</span> Vissza a termékekhez</Link>
        {loading && <div className="px-[15px] py-[45px] text-center text-system-grey-600">Termék betöltése…</div>}
        {!loading && error && <div className="rounded-[13px] border border-system-red-200 bg-system-red-50 p-[27px] text-center text-system-red-900">{error}</div>}
        {!loading && !error && !product && <div className="rounded-[13px] border border-system-grey-200 bg-system-grey-100 p-[27px] text-center text-system-grey-700">A keresett termék nem található.</div>}
        {!loading && !error && product && (
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-center gap-[62px] max-[900px]:grid-cols-1 max-[900px]:gap-7">
            <div className="grid min-h-[425px] place-items-center rounded-[19px] bg-system-grey-100 max-[680px]:min-h-[300px]">
              {imageUrl
                ? <img alt={product.name} className="size-full max-h-[550px] rounded-[inherit] object-cover" src={imageUrl} />
                : <div aria-hidden="true" className="product-placeholder detail-placeholder"><span>Karcagi Méz</span></div>}
            </div>
            <div>
              <Eyebrow>Karcagi Méz</Eyebrow>
              <h1 className="mb-[13px] mt-[13px] font-serif text-[clamp(36px,5vw,53px)] font-semibold leading-[1.12] tracking-[-0.04em]">{product.name}</h1>
              <p className="my-4 text-body-b2-body leading-[1.8] text-system-grey-600">{product.desc || 'Gondosan válogatott, természetes méz.'}</p>
              <p className="my-[22px] text-body-b3-body font-bold text-primary-800">
                {product.stock > 0 ? `Készleten: ${product.stock} db` : 'Jelenleg nincs készleten'}
              </p>
              <div className="my-[27px] grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-system-grey-200 bg-system-grey-100 p-4">
                  <span className="mb-[7px] block text-button-font-small text-system-grey-600">500 g kiszerelés</span>
                  <strong className="block text-subtitle-s1-subtitle text-primary-300">{formatPrice(product.price500g)}</strong>
                </div>
                <div className="rounded-xl border border-system-grey-200 bg-system-grey-100 p-4">
                  <span className="mb-[7px] block text-button-font-small text-system-grey-600">1 kg kiszerelés</span>
                  <strong className="block text-subtitle-s1-subtitle text-primary-300">{formatPrice(product.price1kg)}</strong>
                </div>
              </div>
              <p className="my-4 text-body-b2-body leading-[1.8] text-system-grey-600">
                A termék megvásárlásával kapcsolatban kérjük, vedd fel velünk a kapcsolatot.
                Online rendelést ez a felület nem kezel.
              </p>
            </div>
          </div>
        )}
      </section>
    </SiteLayout>
  )
}

export default ProductDetailPage
