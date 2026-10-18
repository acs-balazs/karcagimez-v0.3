const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/+$/, '')

export class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

async function request(path, { token, body, method = 'GET', isFormData = false } = {}) {
  const headers = {}

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  if (body && !isFormData) {
    headers['Content-Type'] = 'application/json'
  }

  let response

  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers,
      body: body ? (isFormData ? body : JSON.stringify(body)) : undefined,
    })
  } catch (error) {
    const details = error instanceof Error ? ` (${error.message})` : ''
    throw new ApiError(`Nem érhető el a szerver. Ellenőrizd, hogy fut-e a backend${details}`, 0)
  }

  const responseText = await response.text()
  let payload = responseText

  if (responseText) {
    try {
      payload = JSON.parse(responseText)
    } catch {
      payload = responseText
    }
  }

  if (!response.ok) {
    const message = typeof payload === 'string'
      ? payload
      : payload?.message || payload?.error || `Sikertelen kérés (${response.status}).`
    throw new ApiError(message, response.status)
  }

  return payload
}

export const api = {
  getProducts() {
    return request('/api/products')
  },
  getProduct(slug) {
    return request(`/api/products/${encodeURIComponent(slug)}`)
  },
  login(credentials) {
    return request('/api/admin/login', { method: 'POST', body: credentials })
  },
  createProduct(product, token) {
    return request('/api/products', { method: 'POST', body: product, token })
  },
  updateProduct(id, product, token) {
    return request(`/api/products/${encodeURIComponent(id)}`, {
      method: 'PUT',
      body: product,
      token,
    })
  },
  deleteProduct(id, token) {
    return request(`/api/products/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      token,
    })
  },
  async uploadProductImage(file) {
    const extension = file.name.match(/\.[a-zA-Z0-9]+$/)?.[0]?.toLowerCase() || ''
    const filename = `${crypto.randomUUID()}${extension}`
    const formData = new FormData()

    formData.append('filename', filename)
    formData.append('file', file, filename)
    await request('/images', { method: 'POST', body: formData, isFormData: true })

    return `/images/${filename}`
  },
}

export function getImageUrl(image) {
  if (!image) {
    return ''
  }

  if (/^(https?:|data:|blob:)/i.test(image)) {
    return image
  }

  return `${API_BASE_URL}/${image.replace(/^\/+/, '')}`
}

export function formatPrice(price) {
  return new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    maximumFractionDigits: 0,
  }).format(price)
}
