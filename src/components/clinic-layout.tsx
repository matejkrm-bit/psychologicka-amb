import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import {
  clinicName,
  clinicianName,
  contactPlaceholders,
  navLinks,
} from './clinic-content'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-clinic-line bg-clinic-ivory/90 backdrop-blur">
      <div className="clinic-shell flex items-center justify-between gap-4 py-4">
        <Link
          to="/"
          className="flex min-w-0 flex-col leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="flex items-center gap-2 font-serif text-lg font-medium text-clinic-ink sm:text-xl">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-clinic-link">
              <path d="M12 22V8M12 13C7 12 5 9 5 5c4 0 7 2 7 6M12 17c5-1 7-4 7-8-4 0-7 2-7 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
            {clinicName}
          </span>
          <span className="text-sm text-clinic-muted">{clinicianName}</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Hlavní navigace" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  activeOptions={{ exact: item.href === '/' }}
                  activeProps={{ 'aria-current': 'page' }}
                  className="rounded-md px-3 py-2 text-sm font-medium text-clinic-ink-soft transition-colors hover:bg-clinic-sage-soft hover:text-clinic-ink data-[status=active]:bg-clinic-sage data-[status=active]:text-clinic-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Otevřít navigaci"
          data-testid="mobile-nav-toggle"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md border border-clinic-line bg-clinic-paper p-2 text-clinic-ink md:hidden"
        >
          <span aria-hidden="true">{open ? 'Zavřít' : 'Menu'}</span>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobilní navigace"
          className="border-t border-clinic-line bg-clinic-ivory md:hidden"
        >
          <ul className="clinic-shell flex flex-col py-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  activeOptions={{ exact: item.href === '/' }}
                  activeProps={{ 'aria-current': 'page' }}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-clinic-ink-soft data-[status=active]:text-clinic-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="clinic-footer relative overflow-hidden border-t border-clinic-line">
      <svg aria-hidden="true" viewBox="0 0 240 180" className="pointer-events-none absolute -right-8 -top-10 h-48 w-64 text-clinic-ink-soft opacity-25 sm:right-8">
        <path d="M28 182C44 112 83 68 157 10M89 118c-26-20-36-46-30-72 29 5 46 26 49 57M129 84c5-30 26-49 56-52 2 29-16 51-45 57M77 145c-29-8-48-26-57-52 29-4 52 12 65 39" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="158" cy="10" r="5" fill="currentColor" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 160 120" className="pointer-events-none absolute -bottom-5 left-4 h-32 w-44 text-clinic-ink-soft opacity-20 sm:left-12">
        <path d="M16 125C49 82 76 46 142 5M59 93C38 78 29 58 33 36c22 7 34 25 33 48M93 58c6-22 21-36 44-39 1 23-13 38-35 42" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <div className="clinic-shell relative grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-2">
          <p className="font-serif text-lg font-medium text-clinic-ink">
            {clinicName}
          </p>
          <p className="text-sm text-clinic-muted">{clinicianName}</p>
          <p className="text-sm text-clinic-muted">
            IČO: {contactPlaceholders.ico}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-clinic-ink">Kontakt</p>
          <p className="text-sm text-clinic-muted">
            {contactPlaceholders.address}, {contactPlaceholders.floor}
          </p>
          <p className="text-sm text-clinic-muted">
            {contactPlaceholders.phone}
          </p>
          <p className="text-sm text-clinic-muted">
            {contactPlaceholders.email}
          </p>
        </div>

        <nav aria-label="Patička">
          <ul className="space-y-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm text-clinic-ink-soft transition-colors hover:text-clinic-link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-clinic-line">
        <p className="clinic-shell py-4 text-xs text-clinic-muted">
          © {year} {clinicName}. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  )
}

export function PageIntro({
  eyebrow: _eyebrow,
  title,
  intro,
}: {
  eyebrow?: string
  title: string
  intro?: string
}) {
  return (
    <section className="clinic-shell relative overflow-hidden py-16 sm:py-24">
      <svg aria-hidden="true" viewBox="0 0 210 150" className="pointer-events-none absolute right-0 top-5 h-40 w-52 text-clinic-link opacity-25 sm:right-10 sm:h-48 sm:w-64">
        <path d="M15 145C46 82 92 46 194 8M71 100C43 88 29 66 30 38c29 6 47 25 49 54M119 65c7-26 28-41 58-43 0 28-19 46-49 50M94 115c-6-20 0-38 20-53 13 21 9 40-8 54" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="194" cy="8" r="5" fill="currentColor" />
      </svg>
      <div className="relative">
        <h1 className="clinic-script-title">{title}</h1>
        {intro && <p className="clinic-script-sub mt-4 max-w-2xl text-lg">{intro}</p>}
      </div>
    </section>
  )
}

export function PlaceholderImage({
  ratio = '16 / 9',
  label = 'Obrázek (placeholder)',
}: {
  ratio?: string
  label?: string
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className="clinic-soft-blob flex w-full items-center justify-center"
      style={{ aspectRatio: ratio }}
    >
      <span className="px-4 text-center text-sm text-clinic-ink-soft">
        {label}
      </span>
    </div>
  )
}

export function ProfileAvatar({
  name,
  image,
  imagePosition,
}: {
  name: string
  image?: string
  imagePosition?: string
}) {
  if (image) {
    return (
      <img
        src={image}
        alt={`Portrét: ${name}`}
        loading="lazy"
        className="h-24 w-24 rounded-full object-cover object-top"
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
      />
    )
  }
  return (
    <svg
      viewBox="0 0 80 80"
      role="img"
      aria-label={`Portrét: ${name}`}
      className="h-24 w-24 rounded-full bg-clinic-sage-soft text-clinic-ink-soft"
    >
      <g fill="currentColor">
        <circle cx="40" cy="32" r="15" />
        <path d="M40 52c-14 0-23 9-25 22h50c-2-13-11-22-25-22z" />
      </g>
    </svg>
  )
}

export function SectionPlaceholder({
  title,
  body,
}: {
  title: string
  body: string
}) {
  return (
    <section
      aria-label={title}
      className="clinic-card border-dashed p-8 text-clinic-muted"
    >
      <h2 className="font-serif text-xl font-medium text-clinic-ink">{title}</h2>
      <p className="mt-2 text-sm">{body}</p>
    </section>
  )
}

export function ClinicShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-clinic-ivory">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
