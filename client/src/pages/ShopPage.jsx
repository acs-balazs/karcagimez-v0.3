import { useMemo, useState } from 'react'
import SiteLayout from '../components/layout/SiteLayout.jsx'
import ProductGrid from '../features/products/components/ProductGrid.jsx'
import { useFetchProducts } from '../features/products/hooks/useFetchProducts.js'
import Eyebrow from '../components/ui/Eyebrow/Eyebrow.jsx'

function ShopPage() {
  const [search, setSearch] = useState('')
  const { products, loading, error } = useFetchProducts()
  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase('hu')

    if (!normalizedSearch) {
      return products
    }

    return products.filter((product) =>
      `${product.name} ${product.desc || ''}`.toLocaleLowerCase('hu').includes(normalizedSearch),
    )
  }, [products, search])

  return (
    <SiteLayout>
      <section className="bg-system-grey-100 py-[63px] max-[680px]:py-[47px]">
        <div className="mx-auto w-[min(1160px,calc(100%_-_48px))] max-[680px]:w-[calc(100%_-_32px)]">
          <Eyebrow>Kínálatunk</Eyebrow>
          <h1 className="mb-[10px] mt-[13px] font-serif text-[clamp(38px,5vw,56px)] font-semibold leading-[1.12] tracking-[-0.035em]">Természetes, édes pillanatok</h1>
          <p className="m-0 text-body-b2-body leading-[1.7] text-system-grey-600">Válaszd ki a kedvencedet a Karcagi Méz kínálatából.</p>
        </div>
      </section>
      <section className="mx-auto w-[min(1160px,calc(100%_-_48px))] pt-[51px] max-[680px]:w-[calc(100%_-_32px)] max-[680px]:pt-[34px]">
        <div className="mb-[27px] flex items-center justify-between gap-4 max-[680px]:flex-col max-[680px]:items-start">
          <label className="relative w-[min(360px,100%)] max-[680px]:w-full">
            <span className="sr-only">Termék keresése</span>
            <span aria-hidden="true" className="absolute left-[14px] top-3 z-[1] text-[21px] text-system-grey-500">⌕</span>
            <input
              className="min-h-[46px] w-full rounded-[10px] border border-system-grey-300 bg-system-grey-100 px-[13px] py-[11px] pl-10 text-system-grey-900 outline-none transition-[border-color,box-shadow] duration-[160ms] focus:border-primary-500 focus:shadow-[0_0_0_3px_var(--system---black--10)]"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Keress a mézek között…"
              type="search"
              value={search}
            />
          </label>
          {!loading && !error && (
            <span className="text-body-b3-body text-system-grey-600">{filteredProducts.length} termék</span>
          )}
        </div>
        {loading && <div className="px-[15px] py-[45px] text-center text-system-grey-600">Termékek betöltése…</div>}
        {!loading && error && <div className="rounded-[13px] border border-system-red-200 bg-system-red-50 p-[27px] text-center text-system-red-900">{error}</div>}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className="rounded-[13px] border border-system-grey-200 bg-system-grey-100 p-[27px] text-center text-system-grey-700">
            {products.length ? 'Nincs a keresésnek megfelelő termék.' : 'Jelenleg nincs megjeleníthető termék.'}
          </div>
        )}
        {!loading && !error && filteredProducts.length > 0 && <ProductGrid products={filteredProducts} />}
      </section>
    </SiteLayout>
  )
}

export default ShopPage
