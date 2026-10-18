import { useEffect, useState } from 'react'
import { api } from '../../../services/api.js'

export function useFetchProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

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

  return { products, loading, error }
}
