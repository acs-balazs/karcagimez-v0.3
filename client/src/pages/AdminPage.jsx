import { useState } from 'react'
import SiteLayout from '../components/layout/SiteLayout.jsx'
import Button from '../components/ui/Button/Button.jsx'
import Eyebrow from '../components/ui/Eyebrow/Eyebrow.jsx'
import Input from '../components/ui/Input/Input.jsx'
import { useAuth } from '../context/useAuth.js'
import ProductManagePage from '../features/admin/ProductManagePage.jsx'

function AdminLogin() {
  const { login } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      await login({ username, password })
    } catch (loginError) {
      setError(loginError.message || 'A bejelentkezés nem sikerült.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="mx-auto w-[min(440px,calc(100%_-_36px))]">
      <section className="overflow-hidden rounded-[17px] border border-system-grey-200 bg-system-grey-100 p-8 shadow-sm">
        <Eyebrow>Adminisztráció</Eyebrow>
        <h1 className="mb-[7px] mt-[11px] font-serif text-[34px] font-semibold tracking-[-0.035em]">Bejelentkezés</h1>
        <p className="m-0 text-body-b3-body leading-[1.6] text-system-grey-600">Lépj be a termékek kezeléséhez.</p>
        <form className="mt-[25px] grid gap-[15px]" onSubmit={handleSubmit}>
          <Input autoComplete="username" label="Felhasználónév" name="username" onChange={(event) => setUsername(event.target.value)} required value={username} />
          <Input autoComplete="current-password" label="Jelszó" name="password" onChange={(event) => setPassword(event.target.value)} required type="password" value={password} />
          {error && <p className="m-0 rounded-lg border border-system-red-200 bg-system-red-50 px-3 py-[10px] text-button-font-small text-system-red-900" role="alert">{error}</p>}
          <Button disabled={submitting} type="submit">{submitting ? 'Belépés…' : 'Belépés'}</Button>
        </form>
      </section>
    </div>
  )
}

function AdminPage() {
  const { token } = useAuth()

  return (
    <SiteLayout>
      <div className="pt-16 max-[680px]:pt-[37px]">
        {token ? <ProductManagePage /> : <AdminLogin />}
      </div>
    </SiteLayout>
  )
}

export default AdminPage
