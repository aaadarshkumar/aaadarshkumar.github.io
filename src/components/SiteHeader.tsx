import { Blocks, History, Layers, Mail, Terminal, TrendingUp } from 'lucide-react'
import { useStuck } from '../lib/hooks'
import { fullName, monogram } from '../data'

const NAV = [
  { label: '/growth', href: '#growth', Icon: TrendingUp },
  { label: '/build', href: '#build', Icon: Blocks },
  { label: '/stack', href: '#stack', Icon: Layers },
  { label: '/history', href: '#history', Icon: History },
  { label: '/shell', href: '#shell', Icon: Terminal },
  { label: '/contact', href: '#contact', Icon: Mail },
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
        {NAV.map(({ label, href, Icon }) => (
          <a key={href} href={href}>
            <Icon size={13} strokeWidth={1.8} aria-hidden="true" />
            {label}
          </a>
        ))}
        <span className="chrome__prog" aria-hidden="true">
          <span />
        </span>
      </nav>
    </header>
  )
}