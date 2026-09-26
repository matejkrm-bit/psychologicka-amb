import { createFileRoute } from '@tanstack/react-router'
import { ClinicShell } from '../components/clinic-layout'
import {
  clinicName,
  clinicianName,
  insuranceProviders,
} from '../components/clinic-content'

export const Route = createFileRoute('/')({ component: App })

const heroImage =
  'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/i00xcpue08y8hbwncrsp08o5/shbap755y9awuvwy04v2ngeh/fxplJLLhqq2fa5zvS3dlO.jpg'

function App() {
  return (
    <ClinicShell>
      <section
        aria-label="Úvod"
        className="home-hero relative isolate flex flex-col justify-center overflow-hidden bg-clinic-ivory py-10 sm:py-12 lg:py-10"
      >
        {/* Therapy-office photo remains visible beneath a restrained warm tint. */}
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
          className="home-hero-image pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-clinic-ivory/62 via-clinic-ivory/25 to-clinic-ivory/10"
        />

        <div className="clinic-shell relative z-10 flex min-h-[26rem] items-start sm:min-h-[30rem] lg:min-h-[32rem]">
          <div className="w-full max-w-2xl">
            <h1 className="home-hero-title clinic-script-title text-balance">{clinicName}</h1>
            <p className="home-hero-clinician clinic-script-title mt-2 whitespace-normal lg:whitespace-nowrap">
              {clinicianName}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Zdravotní pojišťovny"
        className="border-y border-clinic-line bg-clinic-paper"
      >
        <div className="clinic-shell py-4 sm:py-5">
          <ul className="mx-auto grid max-w-3xl grid-cols-2 items-center gap-x-8 gap-y-3 sm:grid-cols-4">
            {insuranceProviders.items.map((provider, index) => (
              <li
                key={provider.name}
                className="home-insurance-item flex h-24 items-center justify-center overflow-hidden"
                style={{ animationDelay: `${520 + index * 110}ms` }}
              >
                <img
                  src={provider.logo}
                  alt={`Logo zdravotní pojišťovny ${provider.name}`}
                  loading="lazy"
                  className="h-9 w-28 object-contain mix-blend-multiply"
                  style={{ transform: `scale(${provider.logoScale})` }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </ClinicShell>
  )
}
