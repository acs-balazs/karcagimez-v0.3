import { Link } from 'react-router-dom'
import Brand from './Brand.jsx'

function Footer() {
  return (
    <footer className="mt-[88px] bg-system-grey-100 py-[35px] text-system-white-100 max-[680px]:mt-[60px]">
      <div className="mx-auto flex w-[min(1160px,calc(100%_-_48px))] items-center justify-between gap-[25px] max-[680px]:w-[calc(100%_-_32px)] max-[680px]:flex-col max-[680px]:items-start">
        <Brand footer />
        <p className="m-0 text-[13px] text-system-grey-300">Természetes ízek, gondosan válogatva.</p>
        <nav aria-label="Lábléc navigáció" className="flex gap-[19px] max-[680px]:flex-wrap">
          <Link className="text-[13px] text-system-white-100 no-underline" to="/termekek">Termékek</Link>
          <Link className="text-[13px] text-system-white-100 no-underline" to="/tortenet">Történetünk</Link>
          <Link className="text-[13px] text-system-white-100 no-underline" to="/admin">Admin</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
