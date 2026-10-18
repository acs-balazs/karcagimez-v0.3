import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../services/api.js'

export function useProductCrud(token) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const reload = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const result = await api.getProducts()
      setProducts(Array.isArray(result) ? result : [])
    } catch (requestError) {
      setError(requestError.message || 'A termékek betöltése nem sikerült.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    let isCurrent = true

    api.getProducts()
      .then((result) => {
        if (isCurrent) {
          setProducts(Array.isArray(result) ? result : [])
          setError('')
        }
      })
      .catch((requestError) => {
        if (isCurrent) {
          setError(requestError.message || 'A termékek betöltése nem sikerült.')
        }
      })
      .finally(() => {
        if (isCurrent) {
          setLoading(false)
        }
      })

    return () => {
      isCurrent = false
    }
  }, [])

  const saveProduct = useCallback(async (product, id) => {
    const savedProduct = id
      ? await api.updateProduct(id, product, token)
      : await api.createProduct(product, token)

    setProducts((currentProducts) => {
      if (id) {
        return currentProducts.map((currentProduct) =>
          currentProduct.id === id ? savedProduct : currentProduct,
        )
      }

      return [savedProduct, ...currentProducts]
    })
  }, [token])

  const deleteProduct = useCallback(async (id) => {
    await api.deleteProduct(id, token)
    setProducts((currentProducts) => currentProducts.filter((product) => product.id !== id))
  }, [token])

  return { products, loading, error, reload, saveProduct, deleteProduct }
}
