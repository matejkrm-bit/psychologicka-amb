import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useAction } from 'convex/react'
import { api } from '../../convex/_generated/api'
import {
  ClinicShell,
  PageIntro,
  SectionPlaceholder,
} from '../components/clinic-layout'
import { contactPlaceholders } from '../components/clinic-content'

export const Route = createFileRoute('/kontakt')({ component: KontaktPage })

type FormState = 'ready' | 'loading' | 'success' | 'error'

const inputClassName =
  'w-full rounded-lg border border-clinic-line bg-clinic-paper py-2 pl-9 pr-3 text-sm text-clinic-ink placeholder:text-clinic-muted/70 focus:border-clinic-ink focus:outline-none disabled:opacity-60'

function FieldIcon({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-clinic-muted"
    >
      {children}
    </span>
  )
}

function KontaktPage() {
  const sendContactEmail = useAction(api.contact.sendContactEmail)

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [insurance, setInsurance] = useState('')
  const [serviceType, setServiceType] = useState('')
  const [message, setMessage] = useState('')
  const [state, setState] = useState<FormState>('ready')
  const [feedback, setFeedback] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'loading') return
    setState('loading')
    setFeedback(null)
    const subject = `${name} | ${serviceType} | ${insurance}`
    const composedMessage = [
      message,
      '',
      '',
      `Telefon: ${phone}`,
      `Pojišťovna: ${insurance}`,
      `Typ služby: ${serviceType}`,
    ].join('\n')
    try {
      await sendContactEmail({ email, subject, message: composedMessage })
      setState('success')
      setFeedback(
        'Děkujeme, vaše zpráva byla odeslána ambulanci. Ozveme se vám e-mailem, jakmile to bude možné. Tato zpráva nenahrazuje objednání termínu.',
      )
      setName('')
      setPhone('')
      setInsurance('')
      setServiceType('')
      setMessage('')
    } catch {
      setState('error')
      setFeedback(
        'Zprávu se nepodařilo odeslat. Zkontrolujte vyplněné údaje nebo to zkuste prosím později.',
      )
    }
  }

  const busy = state === 'loading'

  return (
    <ClinicShell>
      <PageIntro title="Kontakt a objednání" />

      <section aria-label="Kontaktní informace" className="clinic-shell pb-20 sm:pb-28">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Kontaktní údaje */}
          <div className="space-y-6">
            <div className="clinic-card p-6">
              <h2 className="font-serif text-xl font-medium text-clinic-ink">
                Kontakt na ambulanci
              </h2>
              <dl className="mt-4 grid gap-4 text-sm">
                <div>
                  <dt className="font-medium text-clinic-ink">Telefon</dt>
                  <dd className="mt-1 text-clinic-muted">
                    <a
                      href={`tel:${contactPlaceholders.phone.replace(/\s+/g, '')}`}
                      className="text-clinic-link underline-offset-4 transition-colors hover:underline"
                    >
                      {contactPlaceholders.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-clinic-ink">E-mail</dt>
                  <dd className="mt-1 text-clinic-muted">
                    <a
                      href={`mailto:${contactPlaceholders.email}`}
                      className="text-clinic-link underline-offset-4 transition-colors hover:underline"
                    >
                      {contactPlaceholders.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-clinic-ink">Adresa</dt>
                  <dd className="mt-1 text-clinic-muted">
                    {contactPlaceholders.address}, {contactPlaceholders.floor}
                  </dd>
                </div>
              </dl>
            </div>

            <SectionPlaceholder
              title="Objednání"
              body="Pokud máte zájem o objednání do péče, vyplňte prosím níže uvedený formulář. K vyšetření přijímáme pacienty všech čtyř uvedených pojišťoven. Do psychoterapie aktuálně přijímáme pouze pacienty ČPZP a OZP, pro ostatní pojišťovny máme naplněnou kapacitu."
            />
          </div>

          <div className="space-y-6">
            <section className="clinic-card relative overflow-hidden p-3 sm:p-4" aria-labelledby="mapa-title">
              <div aria-hidden="true" className="clinic-soft-blob absolute -right-20 -top-16 h-52 w-52 opacity-55" />
              <div aria-hidden="true" className="absolute bottom-6 left-5 h-14 w-14 rounded-full border border-clinic-line bg-clinic-sky-soft opacity-70" />
              <div className="relative flex items-center justify-between gap-4 px-2 pb-3 pt-2">
                <div>
                  <h2 id="mapa-title" className="font-serif text-2xl text-clinic-ink">Masarykova 37, Brno</h2>
                </div>
                <a
                  href="https://mapy.cz/s/jazezagaje"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-md border border-clinic-line bg-clinic-paper px-3 py-2 text-sm font-medium text-clinic-link transition-colors hover:border-clinic-ink"
                >
                  Otevřít v Mapy.cz
                </a>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-clinic-line bg-clinic-sage-soft">
                <iframe
                  title="Interaktivní mapa: Masarykova 37, Brno"
                  src="https://www.google.com/maps?q=Masarykova+37,+Brno&output=embed"
                  className="h-[24rem] w-full border-0 sm:h-[30rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="relative px-2 pt-3 text-sm text-clinic-muted">2. patro</p>
            </section>

          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <img
            src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/i00xcpue08y8hbwncrsp08o5/shbap755y9awuvwy04v2ngeh/ROWiJou8hedm3Gt7_ftoa.png"
            alt="Vchod do budovy ambulance"
            loading="lazy"
            decoding="async"
            className="aspect-[16/9] w-full rounded-xl object-cover"
          />
          <img
            src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/i00xcpue08y8hbwncrsp08o5/shbap755y9awuvwy04v2ngeh/Ozbv3-OOZ23Dtx8el45hO.png"
            alt="Vnitřní vchod do ambulance"
            loading="lazy"
            decoding="async"
            className="aspect-[16/9] w-full rounded-xl object-cover"
          />
        </div>

        {/* Kontaktní formulář */}
        <section
          aria-labelledby="formular-title"
          className="mt-8"
        >
          <div className="clinic-card p-4 sm:p-5">
            <h2
              id="formular-title"
              className="font-serif text-xl font-medium text-clinic-ink"
            >
              Napište nám
            </h2>
            <p className="mt-1.5 text-sm text-clinic-muted">
              Vyplňte formulář a odešlete jej ambulanci. Přes formulář se
              neobjednává termín návštěvy.
            </p>

            <form
              data-testid="contact-form"
              data-state={state}
              onSubmit={handleSubmit}
              className="mt-4 grid gap-3 sm:grid-cols-2"
            >
              <div className="grid gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-clinic-ink"
                >
                  Jméno a příjmení
                </label>
                <div className="relative">
                  <FieldIcon>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </FieldIcon>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    disabled={busy}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jméno a příjmení"
                    className={inputClassName}
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-clinic-ink"
                >
                  Email
                </label>
                <div className="relative">
                  <FieldIcon>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </FieldIcon>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    disabled={busy}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jmeno@example.com"
                    className={inputClassName}
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <label
                  htmlFor="contact-phone"
                  className="text-sm font-medium text-clinic-ink"
                >
                  Telefon
                </label>
                <div className="relative">
                  <FieldIcon>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </FieldIcon>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={phone}
                    disabled={busy}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+420 000 000 000"
                    className={inputClassName}
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <label
                  htmlFor="contact-insurance"
                  className="text-sm font-medium text-clinic-ink"
                >
                  Pojišťovna
                </label>
                <div className="relative">
                  <FieldIcon>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    </svg>
                  </FieldIcon>
                  <select
                    id="contact-insurance"
                    name="insurance"
                    required
                    value={insurance}
                    disabled={busy}
                    onChange={(e) => setInsurance(e.target.value)}
                    className={`${inputClassName} appearance-none`}
                  >
                    <option value="" disabled>
                      Vyberte pojišťovnu
                    </option>
                    <option value="VZP">VZP</option>
                    <option value="ZPMV ČR">ZPMV ČR</option>
                    <option value="ČPZP">ČPZP</option>
                    <option value="OZP">OZP</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-1.5">
                <label
                  htmlFor="contact-service-type"
                  className="text-sm font-medium text-clinic-ink"
                >
                  Typ služby
                </label>
                <div className="relative">
                  <FieldIcon>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </FieldIcon>
                  <select
                    id="contact-service-type"
                    name="serviceType"
                    required
                    value={serviceType}
                    disabled={busy}
                    onChange={(e) => setServiceType(e.target.value)}
                    className={`${inputClassName} appearance-none`}
                  >
                    <option value="" disabled>
                      Vyberte typ služby
                    </option>
                    <option value="Vyšetření">Vyšetření</option>
                    <option value="Psychoterapie">Psychoterapie</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-2 sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-clinic-ink"
                >
                  Zpráva
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  maxLength={5000}
                  rows={3}
                  value={message}
                  disabled={busy}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Napište nám svůj dotaz nebo zprávu…"
                  className="w-full resize-y rounded-lg border border-clinic-line bg-clinic-paper px-3 py-2 text-sm text-clinic-ink placeholder:text-clinic-muted/70 focus:border-clinic-ink focus:outline-none disabled:opacity-60"
                />
              </div>

              {feedback && (
                <p
                  role={state === 'error' ? 'alert' : 'status'}
                  className={
                    state === 'error'
                      ? 'text-sm font-medium text-clinic-ink sm:col-span-2'
                      : 'text-sm text-clinic-muted sm:col-span-2'
                  }
                >
                  {feedback}
                </p>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={busy}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-clinic-ink px-5 py-2.5 text-sm font-medium text-clinic-paper transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {busy ? 'Odesílání…' : 'Odeslat e-mail'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </ClinicShell>
  )
}
