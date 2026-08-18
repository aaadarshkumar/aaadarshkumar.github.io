import { useEffect, useState } from 'react'

/**
 * Rotates the global --h token from `from` to `to` as the document scrolls,
 * and publishes scroll progress as --p. Every accent on the page reads from
 * these two custom properties, so one rAF-throttled write repaints the lot.
 */
export function useAccentHue(from = 292, to = 196) {
  useEffect(() => {
    const root = document.documentElement
    let raf = 0

    const apply = () => {
      raf = 0
      const max = root.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      root.style.setProperty('--h', (from + (to - from) * p).toFixed(1))
      root.style.setProperty('--p', `${(p * 100).toFixed(1)}%`)
    }

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply)
    }

    apply()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [from, to])
}

/** Adds .seen to every .rise element once it enters the viewport. */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('seen')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )

    const observe = () => document.querySelectorAll('.rise').forEach((el) => io.observe(el))
    observe()
    const t = window.setTimeout(observe, 400)

    return () => {
      io.disconnect()
      window.clearTimeout(t)
    }
  }, [])
}

/** True once the page has scrolled past the hero's top strip. */
export function useStuck(offset = 48) {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return stuck
}

function formatTime(timeZone: string) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date())
}

/** Wall-clock time in a given IANA zone, refreshed every 20 seconds. */
export function useLocalTime(timeZone: string) {
  const [time, setTime] = useState(() => formatTime(timeZone))

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatTime(timeZone)), 20_000)
    return () => window.clearInterval(id)
  }, [timeZone])

  return time
}

/** True when the visitor has a precise pointer and hasn't asked for less motion. */
export function useFinePointer() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const pointer = window.matchMedia('(pointer: fine)')
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const evaluate = () => setFine(pointer.matches && !motion.matches)
    evaluate()
    pointer.addEventListener('change', evaluate)
    motion.addEventListener('change', evaluate)
    return () => {
      pointer.removeEventListener('change', evaluate)
      motion.removeEventListener('change', evaluate)
    }
  }, [])

  return fine
}
