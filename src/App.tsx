import React, { useEffect, useRef } from 'react'
import TopNav from './components/TopNav'
import HeroAbout from './components/HeroAbout'
import About from './components/About'
import Blog from './components/Blog'
import Experience from './components/Experience'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Trajectory from './components/Trajectory'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { scrollToId } from './utils/scroll'

export default function App(): JSX.Element {
  const mainRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const main = mainRef.current
    if (!main) return

    function handleClick(e: MouseEvent) {
      // Try to find an anchor in the event path to be robust to icons/elements inside links
      const path = (e.composedPath && e.composedPath()) || (e as any)._path || []
      let anchor: HTMLAnchorElement | null = null

      if (path && path.length) {
        for (const node of path) {
          try {
            if (!node || !(node as Element).closest) continue
            const a = (node as Element).closest('a[href^="#"]') as HTMLAnchorElement | null
            if (a) {
              anchor = a
              break
            }
          } catch (_) {
            // ignore
          }
        }
      }

      // fallback to target.closest
      if (!anchor) {
        const target = e.target as Element
        anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null
      }

      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      e.preventDefault()
      // use scrollToId which accounts for sticky nav offset
      try {
        scrollToId(href)
      } catch (err) {
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const observerOptions = { threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100')
          entry.target.classList.remove('opacity-0', 'translate-y-10')
        }
      })
    }, observerOptions)

    // listen on the whole document so nav links (outside <main>) are handled
    document.addEventListener('click', handleClick)
    main.querySelectorAll('section').forEach(section => {
      section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10')
      observer.observe(section)
    })

    return () => {
      document.removeEventListener('click', handleClick)
      observer.disconnect()
    }
  }, [])

  return (
    <div>
      <TopNav />
      <main ref={el => (mainRef.current = el)} className="max-w-container-max mx-auto px-gutter">
        <HeroAbout />
        <Experience />
        <Timeline />
        <Skills />
        <Trajectory />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
