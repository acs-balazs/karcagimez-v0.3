import { useState } from 'react'
import Button from '../../../components/ui/Button/Button.jsx'
import Input from '../../../components/ui/Input/Input.jsx'
import { api, formatPrice, getImageUrl } from '../../../services/api.js'

const emptyProduct = {
  name: '',
  desc: '',
  image: '',
  price1kg: '',
  price500g: '',
  stock: '',
}

function ProductForm({ product, onCancel, onSave }) {
  const [values, setValues] = useState(() => product
    ? {
        name: product.name || '',
        desc: product.desc || '',
        image: product.image || '',
        price1kg: String(product.price1kg ?? ''),
        price500g: String(product.price500g ?? ''),
        stock: String(product.stock ?? ''),
      }
    : emptyProduct)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [uploadMessage, setUploadMessage] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setValues((currentValues) => ({ ...currentValues, [name]: value }))
  }

  async function handleImageUpload(event) {
    const file = event.target.files?.[0]
    event.target.value = ''

    if (!file) {
      return
    }

    setUploading(true)
    setError('')
    setUploadMessage('')

    try {
      const image = await api.uploadProductImage(file)
      setValues((currentValues) => ({ ...currentValues, image }))
      setUploadMessage(`Feltöltve: ${file.name}`)
    } catch (uploadError) {
      setError(uploadError.message || 'A kép feltöltése nem sikerült.')
    } finally {
      setUploading(false)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSaving(true)
    setError('')

    try {
      await onSave({
        name: values.name.trim(),
        desc: values.desc.trim() || null,
        image: values.image.trim() || null,
        price1kg: Number(values.price1kg),
        price500g: Number(values.price500g),
        stock: Number(values.stock),
      }, product?.id)
    } catch (saveError) {
      setError(saveError.message || 'A termék mentése nem sikerült.')
    } finally {
      setSaving(false)
    }
  }

  const imageUrl = getImageUrl(values.image)

  return (
    <form className="grid gap-[13px]" onSubmit={handleSubmit}>
      <Input autoComplete="off" label="Termék neve" name="name" onChange={updateField} required value={values.name} />
      <Input as="textarea" label="Leírás" name="desc" onChange={updateField} value={values.desc} />
      <Input label="Kép URL vagy elérési út" name="image" onChange={updateField} placeholder="/images/termek.jpg" value={values.image} />
      <label className="grid gap-[7px]">
        <span className="text-body-b3-body font-bold text-system-grey-800">Vagy tölts fel egy képet</span>
        <input accept="image/*" className="w-full text-button-font-small text-system-grey-600 file:mr-[10px] file:min-h-[39px] file:cursor-pointer file:rounded-lg file:border file:border-system-grey-300 file:bg-system-grey-100 file:px-[13px] file:font-[inherit] file:font-bold file:text-primary-900" disabled={uploading || saving} onChange={handleImageUpload} type="file" />
        {uploadMessage && <small className="text-caption-c2-caption text-system-grey-600">{uploadMessage}</small>}
      </label>
      {imageUrl && (
        <div className="grid size-[52px] place-items-center overflow-hidden rounded-lg bg-system-grey-100 font-serif text-primary-800">
          <img alt="Termékkép előnézete" className="size-full object-cover" src={imageUrl} />
        </div>
      )}
      <div className="grid grid-cols-2 gap-3">
        <Input label={`Ár · 1 kg${values.price1kg ? ` (${formatPrice(Number(values.price1kg))})` : ''}`} min="0" name="price1kg" onChange={updateField} required type="number" value={values.price1kg} />
        <Input label={`Ár · 500 g${values.price500g ? ` (${formatPrice(Number(values.price500g))})` : ''}`} min="0" name="price500g" onChange={updateField} required type="number" value={values.price500g} />
      </div>
      <Input label="Készlet (db)" min="0" name="stock" onChange={updateField} required type="number" value={values.stock} />
      {error && <p className="m-0 rounded-lg border border-system-red-200 bg-system-red-50 px-3 py-[10px] text-button-font-small text-system-red-900" role="alert">{error}</p>}
      <div className="flex flex-wrap gap-[9px] pt-[3px]">
        <Button disabled={saving || uploading} type="submit">
          {saving ? 'Mentés…' : product ? 'Módosítások mentése' : 'Termék létrehozása'}
        </Button>
        {product && <Button onClick={onCancel} variant="secondary">Mégse</Button>}
      </div>
    </form>
  )
}

export default ProductForm
