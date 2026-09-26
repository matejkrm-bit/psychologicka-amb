import { createFileRoute, Link } from '@tanstack/react-router'
import { ClinicShell, PageIntro } from '../components/clinic-layout'
import { insuranceProviders } from '../components/clinic-content'

export const Route = createFileRoute('/sluzby')({ component: SluzbyPage })

function SluzbyPage() {
  return (
    <ClinicShell>
      <PageIntro
        title="Služby"
        intro="Ambulance klinické psychologie Mgr. Lenka Krmíčková je nestátní zdravotnické zařízení nabízející psychologickou diagnostiku, psychoterapii a krizové intervence klientům níže uvedených pojišťoven."
      />

      {/* Service cards */}
      <section
        aria-label="Přehled služeb"
        className="clinic-shell pb-12 sm:pb-16"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <article
            className="clinic-card flex flex-col p-6"
            aria-label="Psychologická diagnostika (vyšetření)"
          >
            <h2 className="font-serif text-xl font-medium text-clinic-ink">
              Psychologická diagnostika (vyšetření)
            </h2>

            <dl className="mt-5 flex flex-1 flex-col gap-4 text-sm">
              <div>
                <dt className="font-medium text-clinic-ink">Informace</dt>
                <dd className="mt-1 text-clinic-muted">
                  Vyšetření poskytují{' '}
                  <Link
                    to="/tym/$clen"
                    params={{ clen: 'clen-1' }}
                    className="text-clinic-link underline-offset-4 transition-colors hover:underline"
                  >
                    Mgr. Lenka Krmíčková
                  </Link>{' '}
                  a{' '}
                  <Link
                    to="/tym/$clen"
                    params={{ clen: 'clen-2' }}
                    className="text-clinic-link underline-offset-4 transition-colors hover:underline"
                  >
                    Mgr. Barbora Šenovská
                  </Link>
                  .
                </dd>
              </div>
              <div>
                <dt className="font-medium text-clinic-ink">Průběh</dt>
                <dd className="mt-1 text-clinic-muted">
                  Poskytujeme vyšetření pacientům od 15 let. Vyšetření dítěte
                  vyžaduje doprovod zákonného zástupce. Obvykle probíhá 2–3
                  sezení. S sebou přineste doporučení ošetřujícího lékaře,
                  příslušnou zdravotnickou dokumentaci a brýle na čtení.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-clinic-ink">Úhrada</dt>
                <dd className="mt-1 text-clinic-muted">
                  Hrazeno z veřejného zdravotního pojištění.
                </dd>
              </div>
            </dl>
          </article>

          <article
            className="clinic-card flex flex-col p-6"
            aria-label="Psychoterapie"
          >
            <h2 className="font-serif text-xl font-medium text-clinic-ink">
              Psychoterapie
            </h2>

            <dl className="mt-5 flex flex-1 flex-col gap-4 text-sm">
              <div>
                <dt className="font-medium text-clinic-ink">Informace</dt>
                <dd className="mt-1 text-clinic-muted">
                  Psychoterapii poskytují všichni psychologové ambulance.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-clinic-ink">Průběh</dt>
                <dd className="mt-1 text-clinic-muted">
                  Sezení trvá 45 minut, obvykle každý týden ve stejný čas.
                  Odklad nebo zrušení sezení je třeba ohlásit telefonicky nebo
                  SMS.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-clinic-ink">Úhrada</dt>
                <dd className="mt-1 text-clinic-muted">
                  Hrazeno z veřejného zdravotního pojištění.
                </dd>
              </div>
            </dl>
          </article>

          <article
            className="clinic-card flex flex-col p-6"
            aria-label="Krizová intervence"
          >
            <h2 className="font-serif text-xl font-medium text-clinic-ink">
              Krizová intervence
            </h2>

            <dl className="mt-5 flex flex-1 flex-col gap-4 text-sm">
              <div>
                <dt className="font-medium text-clinic-ink">Informace</dt>
                <dd className="mt-1 text-clinic-muted">
                  Krizovou intervenci poskytují všichni psychologové ambulance.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-clinic-ink">Průběh</dt>
                <dd className="mt-1 text-clinic-muted">
                  Sezení trvá 45–50 minut. Urgentní péče po náročné životní
                  události, obvykle 2–3 sezení.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-clinic-ink">Úhrada</dt>
                <dd className="mt-1 text-clinic-muted">
                  Hrazeno z veřejného zdravotního pojištění.
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </section>

      {/* Photo row */}
      <section
        aria-label="Fotografie z ambulance"
        className="clinic-shell pb-12 sm:pb-16"
      >
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          <figure>
            <img
              src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/i00xcpue08y8hbwncrsp08o5/shbap755y9awuvwy04v2ngeh/6IEn01I7iZAH0febBHTaM.jpg"
              alt="Figurky při hře v ambulanci"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </figure>
          <figure>
            <img
              src="https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/i00xcpue08y8hbwncrsp08o5/shbap755y9awuvwy04v2ngeh/WTdi6PPNvy3-axj-HgR-c.jpg"
              alt="Karty a pomůcky v ambulanci"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </figure>
        </div>
      </section>

      <p className="clinic-shell pb-12 text-sm leading-relaxed text-clinic-muted sm:pb-16">
        Pracujeme v souladu s Etickým kodexem Asociace klinických psychologů
        ČR.
      </p>

      {/* Insurance / payment notice */}
      <section
        aria-label="Úhrada a zdravotní pojišťovny"
        className="clinic-shell pb-12 sm:pb-16"
      >
        <div className="clinic-card p-8">
          <h2 className="font-serif text-xl font-medium text-clinic-ink">
            Úhrada služeb
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-clinic-ink-soft">
            Všechny služby jsou hrazeny z veřejného zdravotního pojištění.
            Smlouvy jsou uzavřeny s VZP, ZPMV ČR, ČPZP a OZP. Klienty VoZP a
            RZP do péče přijmout nemůžeme.
          </p>
        </div>
      </section>

      {/* Insurance logos */}
      <section
        aria-label="Smluvní zdravotní pojišťovny"
        className="clinic-shell pb-20 sm:pb-28"
      >
        <ul className="grid grid-cols-2 gap-6 gap-y-8 sm:grid-cols-4 sm:gap-8">
          {insuranceProviders.items.map((provider) => (
            <li key={provider.name}>
              <div className="flex aspect-[4/3] items-center justify-center">
                <img
                  src={provider.logo}
                  alt={`Logo zdravotní pojišťovny ${provider.name}`}
                  loading="lazy"
                  className="h-16 w-full object-contain mix-blend-multiply sm:h-20"
                  style={{ transform: `scale(${provider.logoScale})` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </ClinicShell>
  )
}
