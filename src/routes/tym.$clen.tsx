import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ClinicShell,
  PageIntro,
  PlaceholderImage,
} from '../components/clinic-layout'
import { teamMembers } from '../components/clinic-content'

export const Route = createFileRoute('/tym/$clen')({ component: MemberPage })

function DetailSection({
  title,
  items,
}: {
  title: string
  items: string[] | undefined
}) {
  const empty = !items || items.length === 0
  return (
    <section aria-label={title} className="clinic-card p-8">
      <h2 className="font-serif text-xl font-medium text-clinic-ink">{title}</h2>
      {empty ? (
        <p className="mt-2 text-sm text-clinic-muted">
          [{title.toUpperCase()}]
        </p>
      ) : (
        <ul className="mt-3 space-y-2 text-sm text-clinic-ink-soft">
          {items!.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function MemberPage() {
  const { clen } = Route.useParams()
  const member = teamMembers.find((m) => m.slug === clen)

  if (!member) {
    return (
      <ClinicShell>
        <div className="clinic-shell py-20 sm:py-28">
          <section className="clinic-card mx-auto max-w-xl p-8 text-center sm:p-12">
            <h1 className="clinic-script-title text-3xl sm:text-4xl">
              Profil nebyl nalezen
            </h1>
            <p className="mt-4 text-clinic-muted">
              Člen týmu, kterého hledáte, neexistuje nebo byl odstraněn. Vraťte
              se prosím na přehled týmu.
            </p>
            <Link
              to="/tym"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-clinic-ink px-5 py-2.5 text-sm font-medium text-clinic-paper transition-colors hover:bg-clinic-ink-soft"
            >
              Zpět na tým
            </Link>
          </section>
        </div>
      </ClinicShell>
    )
  }

  const hasIntro = !!member.introduction

  return (
    <ClinicShell>
      <PageIntro
        title={member.name}
        intro={member.role}
      />

      <div className="clinic-shell grid gap-10 pb-20 sm:pb-28 lg:grid-cols-3 lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="w-full rounded-2xl border border-clinic-line object-cover"
              style={{
                aspectRatio: member.imageAspectRatio ?? '4 / 5',
                ...(member.imagePosition
                  ? { objectPosition: member.imagePosition }
                  : {}),
              }}
            />
          ) : (
            <PlaceholderImage
              ratio="4 / 5"
              label="[PROFILOVÁ FOTOGRAFIE]"
            />
          )}
        </div>

        <div className="space-y-6 lg:col-span-2">
          <p
            className="text-base font-semibold leading-snug text-clinic-ink"
            aria-label="Představení"
          >
            {hasIntro ? member.introduction : '[STRUČNÉ PŘEDSTAVENÍ]'}
          </p>

          {member.membership && (
            <p className="text-sm leading-relaxed text-clinic-ink-soft">
              {member.membership}
            </p>
          )}

          <DetailSection title="Vzdělání" items={member.education} />
          <DetailSection
            title="Odborné výcviky a kurzy"
            items={member.training}
          />
          <DetailSection
            title="Pracovní zkušenosti / praxe"
            items={member.workExperience}
          />

          <div
            className={
              member.email
                ? 'grid gap-6 sm:grid-cols-2'
                : 'grid gap-6'
            }
          >
            {member.email && (
              <section aria-label="E-mail" className="clinic-card p-8">
                <h2 className="font-serif text-xl font-medium text-clinic-ink">
                  E-mail
                </h2>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-2 inline-block text-sm text-clinic-link underline-offset-4 transition-colors hover:underline"
                >
                  {member.email}
                </a>
              </section>
            )}
            <section aria-label="Telefon" className="clinic-card p-8">
              <h2 className="font-serif text-xl font-medium text-clinic-ink">
                Telefon
              </h2>
              {member.phone ? (
                <a
                  href={`tel:${member.phone.replace(/\s+/g, '')}`}
                  className="mt-2 inline-block text-sm text-clinic-link underline-offset-4 transition-colors hover:underline"
                >
                  {member.phone}
                </a>
              ) : (
                <p className="mt-2 text-sm text-clinic-muted">[OSOBNÍ TELEFON]</p>
              )}
            </section>
          </div>
        </div>
      </div>

      <div className="clinic-shell pb-20 sm:pb-28">
        <Link
          to="/tym"
          className="inline-flex items-center gap-2 rounded-md border border-clinic-line bg-clinic-paper px-4 py-2 text-sm font-medium text-clinic-ink transition-colors hover:border-clinic-ink"
        >
          <span aria-hidden="true">←</span> Zpět na tým
        </Link>
      </div>
    </ClinicShell>
  )
}
