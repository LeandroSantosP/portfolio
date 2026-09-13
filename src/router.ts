export type AppRoute = '/' | '/experience' | '/certificados' | '/contato'

export function getCurrentRoute(): AppRoute {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'

  if (pathname === '/experience' || pathname === '/certificados' || pathname === '/contato') {
    return pathname
  }

  return '/'
}

export function navigateTo(path: string): void {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
