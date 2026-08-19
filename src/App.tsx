import { useEffect, useRef } from 'react'
import { SiteHeader } from './components/SiteHeader'
import { Hero } from './components/Hero'
import { About, Stack, Ticker, Work } from './components/Sections'
import { History, Contact } from './components/History'
import { Shell } from './components/Shell'
import { useFinePointer, useReveal, useScrollTokens } from './lib/hooks'
import './App.css'

/** A soft dot that trails the pointer and swells over anything clickable. */
function PointerDot() {
  const dot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.classList.add('dot-on')

    let x = 0
    let y = 0
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let raf = 0

    const onMove = (event: MouseEvent) => {
      tx = event.clientX
      ty = event.clientY
      const node = dot.current
      if (!node) return
      const overActive = !!(event.target as Element).closest('a, button, .tile, .hist__row, input')
      node.classList.toggle('wide', overActive)
    }

    const tick = () => {
      x += (tx - x) * 0.2
      y += (ty - y) * 0.2
      const node = dot.current
      if (node) node.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      document.body.classList.remove('dot-on')
    }
  }, [])

  return <div className="dot-cursor" ref={dot} aria-hidden="true" />
}

export default function App() {
  const finePointer = useFinePointer()

  useScrollTokens(292, 196)
  useReveal()

  return (
    <>
      <a className="skip" href="#whoami">
        Skip to content
      </a>

      {finePointer && <PointerDot />}

      <SiteHeader />

      <main>
        <Hero />
        <Ticker />
        <About />
        <Work />
        <Stack />
        <History />
        <Shell />
        <Contact />
      </main>
    </>
  )
}
