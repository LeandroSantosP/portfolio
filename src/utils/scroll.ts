export function scrollToId(id: string, offset?: number) {
  const el = document.querySelector(id)
  if (!el) return

  // If offset is not provided, try to use the nav height (sticky header)
  let finalOffset = 0
  if (typeof offset === 'number') {
    finalOffset = offset
  } else {
    const nav = document.querySelector('nav')
    finalOffset = nav ? (nav.getBoundingClientRect().height || 0) : 0
  }

  const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - finalOffset
  window.scrollTo({ top, behavior: 'smooth' })
}
