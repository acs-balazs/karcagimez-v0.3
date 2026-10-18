import { Link } from 'react-router-dom'
import Button from '../../../components/ui/Button/Button.jsx'

function AdminSidebar({ onLogout }) {
  return (
    <aside className="grid content-start self-start overflow-hidden rounded-[17px] border border-system-grey-200 bg-system-grey-100 p-[17px] shadow-sm max-[680px]:flex max-[680px]:items-center max-[680px]:gap-1 max-[680px]:overflow-x-auto max-[680px]:p-2">
      <strong className="mb-[14px] mt-0.5 block text-caption-c1-caption uppercase tracking-[0.16em] text-system-grey-600 max-[680px]:hidden">Vezérlőpult</strong>
      <a className="flex w-full items-center gap-[10px] rounded-lg px-[10px] py-[11px] text-body-b3-body text-system-grey-700 no-underline hover:bg-system-grey-200 hover:text-primary-400 max-[680px]:w-auto max-[680px]:whitespace-nowrap" href="#termeklista"><span aria-hidden="true">▦</span> Termékek</a>
      <a className="flex w-full items-center gap-[10px] rounded-lg px-[10px] py-[11px] text-body-b3-body text-system-grey-700 no-underline hover:bg-system-grey-200 hover:text-primary-400 max-[680px]:w-auto max-[680px]:whitespace-nowrap" href="#termek-urlap"><span aria-hidden="true">＋</span> Új termék</a>
      <Link className="flex w-full items-center gap-[10px] rounded-lg px-[10px] py-[11px] text-body-b3-body text-system-grey-700 no-underline hover:bg-system-grey-200 hover:text-primary-400 max-[680px]:w-auto max-[680px]:whitespace-nowrap" to="/"><span aria-hidden="true">↗</span> Webáruház</Link>
      <Button className="min-h-9 px-[14px] text-xs" onClick={onLogout} variant="secondary">
        Kilépés
      </Button>
    </aside>
  )
}

export default AdminSidebar
