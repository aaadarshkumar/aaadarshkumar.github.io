import { useStuck } from '../lib/hooks'
import { fullName, monogram } from '../data'

const NAV = [
  { label: '/growth', href: '#growth' },
  { label: '/build', href: '#build' },
  { label: '/stack', href: '#stack' },
  { label: '/history', href: '#history' },
  { label: '/shell', href: '#shell' },
  { label: '/contact', href: '#contact' },
]

export function SiteHeader() {
  const stuck = useStuck()

  return (
    <header className={`chrome${stuck ? ' stuck' : ''}`}>
      <a className="chrome__mark" href="#top">
        <span className="chrome__mono" aria-hidden="true">
          {monogram}
        </span>
        <span className="chrome__name">
          {fullName}
        </span>
      </a>

      <nav className="chrome__nav" aria-label="Sections">
        {NAV.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <span className="chrome__prog" aria-hidden="true">
          <span />
        </span>
      </nav>
    </header>
  )
}