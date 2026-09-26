import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ClinicShell,
  PageIntro,
  ProfileAvatar,
} from '../components/clinic-layout'
import { teamMembers } from '../components/clinic-content'

export const Route = createFileRoute('/tym/')({ component: TeamPage })

function TeamPage() {
  return (
    <ClinicShell>
      <PageIntro title="Náš tým" />

      <section className="clinic-shell pb-12 sm:pb-16">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <li key={member.slug}>
              <article className="clinic-card flex h-full flex-col items-center gap-4 p-8 text-center">
                <ProfileAvatar
                  name={member.name}
                  image={member.image}
                  imagePosition={member.imagePosition}
                />
                <div className="space-y-2">
                  <h2 className="font-serif text-xl font-medium text-clinic-ink">
                    {member.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-clinic-muted">
                    {member.role}
                  </p>
                </div>
                <div className="mt-auto w-full space-y-3">
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, '')}`}
                      className="inline-flex w-full items-center justify-center rounded-md border border-clinic-line bg-clinic-paper px-4 py-2 text-sm font-medium text-clinic-ink transition-colors hover:border-clinic-ink"
                    >
                      Telefon: {member.phone}
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex w-full items-center justify-center rounded-md border border-clinic-line bg-clinic-paper px-4 py-2 text-sm font-medium text-clinic-ink transition-colors hover:border-clinic-ink"
                    >
                      {member.email}
                    </a>
                  )}
                  <Link
                    to="/tym/$clen"
                    params={{ clen: member.slug }}
                    className="inline-flex w-full items-center justify-center rounded-md border border-clinic-line bg-clinic-paper px-4 py-2 text-sm font-medium text-clinic-ink transition-colors hover:border-clinic-ink"
                  >
                    Více o mně
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="clinic-shell pb-20 sm:pb-28">
        <img
          src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/i00xcpue08y8hbwncrsp08o5/shbap755y9awuvwy04v2ngeh/5Q4ryqhME3jPHY-WBBu6H.jpg"
          alt="Tým Ambulance klinické psychologie Brno"
          loading="lazy"
          className="mx-auto aspect-[3/2] w-full max-w-xl rounded-2xl border border-clinic-line object-cover object-top"
        />
      </section>
    </ClinicShell>
  )
}
