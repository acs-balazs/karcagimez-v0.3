import { useState } from 'react'
import AdminSidebar from './components/AdminSidebar.jsx'
import ProductForm from './components/ProductForm.jsx'
import { useProductCrud } from './hooks/useProductCrud.js'
import { useAuth } from '../../context/useAuth.js'
import { formatPrice, getImageUrl } from '../../services/api.js'
import Button from '../../components/ui/Button/Button.jsx'
import Eyebrow from '../../components/ui/Eyebrow/Eyebrow.jsx'

function ProductManagePage() {
  const { token, logout } = useAuth()
  const { products, loading, error, reload, saveProduct, deleteProduct } = useProductCrud(token)
  const [editingProduct, setEditingProduct] = useState(null)

  async function handleDelete(product) {
    if (!window.confirm(`Biztosan törlöd ezt a terméket: ${product.name}?`)) {
      return
    }

    try {
      await deleteProduct(product.id)
    } catch (deleteError) {
      window.alert(deleteError.message || 'A termék törlése nem sikerült.')
    }
  }

  async function handleSave(values, id) {
    await saveProduct(values, id)
    setEditingProduct(null)
  }

  return (
    <div className="mx-auto grid w-[min(1160px,calc(100%_-_48px))] grid-cols-[215px_minmax(0,1fr)] gap-[29px] pt-[45px] max-[900px]:grid-cols-1 max-[680px]:w-[calc(100%_-_32px)] max-[680px]:gap-[18px] max-[680px]:pt-7">
      <AdminSidebar onLogout={logout} />
      <section className="min-w-0">
        <div className="mb-[22px] flex items-end justify-between gap-5 max-[680px]:flex-col max-[680px]:items-start">
          <div>
            <Eyebrow>Kezelőfelület</Eyebrow>
            <h1 className="mb-[7px] mt-[11px] font-serif text-[37px] font-semibold tracking-[-0.035em]">Termékek</h1>
            <p className="m-0 text-body-b3-body leading-[1.6] text-system-grey-600">Termékeid adatainak és készletének kezelése.</p>
          </div>
          <Button as="a" href="#termek-urlap">＋ Új termék</Button>
        </div>
        {error && (
          <div className="mx-auto mt-[55px] max-w-[550px] rounded-[13px] border border-system-red-200 bg-system-red-50 p-[27px] text-center text-system-red-900" role="alert">
            {error}
            <div style={{ marginTop: 13 }}>
              <Button className="min-h-9 px-[14px] text-xs" onClick={reload} variant="secondary">Újrapróbálom</Button>
            </div>
          </div>
        )}
        {loading && <div className="px-[15px] py-[45px] text-center text-system-grey-600">Termékek betöltése…</div>}
        {!loading && !error && (
          <div className="grid grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] items-start gap-5 max-[900px]:grid-cols-1">
            <section className="overflow-hidden rounded-[17px] border border-system-grey-200 bg-system-grey-100 p-[21px] shadow-sm max-[680px]:p-4" id="termek-urlap">
              <h2 className="mb-[17px] mt-0 font-serif text-[21px] font-semibold">{editingProduct ? 'Termék módosítása' : 'Új termék'}</h2>
              <ProductForm
                key={editingProduct?.id || 'new'}
                onCancel={() => setEditingProduct(null)}
                onSave={handleSave}
                product={editingProduct}
              />
            </section>
            <section className="overflow-hidden rounded-[17px] border border-system-grey-200 bg-system-grey-100 p-[21px] shadow-sm max-[680px]:p-4" id="termeklista">
              <h2 className="mb-[17px] mt-0 font-serif text-headline-h5-headline font-semibold">Terméklista <span className="text-body-b3-body text-system-grey-600">({products.length})</span></h2>
              {products.length === 0
                ? <div className="rounded-[13px] border border-system-grey-200 bg-system-grey-100 p-[27px] text-center text-system-grey-700">Még nincs terméked. Hozd létre az elsőt az űrlappal.</div>
                : (
                  <div className="grid gap-[10px]">
                    {products.map((product) => {
                      const imageUrl = getImageUrl(product.image)

                      return (
                        <article className="grid min-w-0 grid-cols-[52px_minmax(0,1fr)_auto] items-center gap-3 rounded-[11px] border border-system-grey-200 p-[10px] max-[680px]:grid-cols-[43px_minmax(0,1fr)]" key={product.id}>
                          <div className="grid size-[52px] place-items-center overflow-hidden rounded-lg bg-system-grey-100 font-serif text-primary-800 max-[680px]:size-[43px]">
                            {imageUrl
                              ? <img alt="" className="size-full object-cover" src={imageUrl} />
                              : <span aria-hidden="true">KM</span>}
                          </div>
                          <div className="min-w-0">
                            <strong className="block overflow-hidden text-ellipsis whitespace-nowrap text-[13px]">{product.name}</strong>
                            <small className="mt-1 block overflow-hidden text-ellipsis whitespace-nowrap text-caption-c2-caption text-system-grey-600">{formatPrice(product.price500g)} · készlet: {product.stock} db</small>
                          </div>
                          <div className="flex gap-[6px] max-[680px]:col-start-2">
                            <Button className="min-h-9 px-[11px] text-xs" onClick={() => setEditingProduct(product)} variant="secondary">Szerkesztés</Button>
                            <Button className="min-h-9 px-[11px] text-xs" onClick={() => handleDelete(product)} variant="danger">Törlés</Button>
                          </div>
                        </article>
                      )
                    })}
                  </div>
                )}
            </section>
          </div>
        )}
      </section>
    </div>
  )
}

export default ProductManagePage
