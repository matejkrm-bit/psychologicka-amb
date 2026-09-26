/**
 * Centralized content for the klinika web.
 *
 * Team member records use only supplied factual content. Czech bracketed
 * placeholders mark fields still awaiting real values; do not infer them.
 */

export interface TeamMember {
  slug: string
  name: string
  role: string
  introduction?: string
  education?: string[]
  training?: string[]
  workExperience?: string[]
  phone?: string
  email?: string
  membership?: string
  image?: string
  imagePosition?: string
  imageAspectRatio?: string
}

const PLACEHOLDER_NAME = '[JMÉNO A PŘÍJMENÍ]'
const PLACEHOLDER_ROLE = '[ODBORNÁ ROLE / SPECIALIZACE]'

export const teamMembers: TeamMember[] = [
  {
    slug: 'clen-1',
    name: 'Mgr. Lenka Krmíčková',
    role: 'Klinická psycholožka a gestaltterapeutka',
    introduction:
      'Diagnostika a psychoterapie u dospívajících a dospělých',
    membership:
      'Členka Asociace klinických psychologů ČR a České společnosti pro gestaltterapii',
    education: [
      '2021 Atestace v oboru psychoterapie',
      '2020 Atestace v oboru klinická psychologie',
      '2006–2011 Magisterské studium psychologie (Filozofická fakulta MU Brno)',
      '2004–2009 Magisterské studium speciální pedagogiky – Logopedie/Surdopedie (Pedagogická fakulta MU Brno)',
    ],
    training: [
      '2024–2025 Základní výcvik EMDR (ČIPE, Praha)',
      '2023–2025 Výcvik v gestalt práci s tělem (Talia Bar-Yoseph Levine)',
      '2020 Kurz Diagnostika inteligence u dětí (PhDr. Dana Krejčířová)',
      '2019 Kurz Disharmonický vývoj osobnosti a Psychosexuální vývoj a jeho odchylky (PhDr. Karolína Malá, IKP)',
      '2018 Vývojové aspekty Rorschachovy metody a její užití u dětí (PhDr. Dana Krejčířová, IKP)',
      '2017–2018 Certifikovaný kurz Wechslerovy škály (PhDr. Dana Krejčířová, PhDr. Karolína Malá, IKP)',
      '2016–2017 Certifikovaný kurz MMPI-2 (Mgr. Václav Šnorek, IKP)',
      '2016 Akreditovaný kurz Trauma – kurz práce s traumatizovaným klientem (Remedium Praha)',
      '2014 Základní kurz autogenního tréninku (Mgr. et Mgr. Veronika Víchová)',
      '2014 Základní kurz krizové intervence (PhDr. Ludvík Běťák)',
      '2013–2017 Psychoterapeutický výcvik v Gestalt psychoterapii zakončený zkouškou (Institut Dialog)',
      '2013–2014 Kurz Psycholog ve zdravotnictví (MU Brno)',
      '2010–2012 Základní kurz Rorschachovy metody (PhDr. Anton Polák, PhDr. Igor Obuch)',
    ],
    workExperience: [
      'Od 2023 Ambulance klinické psychologie Mgr. Lenka Krmíčková',
      '2019–2022 Ambulance klinické psychologie Jabok, s.r.o.',
      '2015–2019 Klinická psychologie a psychoterapie s.r.o., Brno + Profero, ambulance klinické psychologie, Kyjov',
      '2013–2015 Psychiatrická nemocnice Brno, oddělení pro léčbu závislostí a oddělení akutního mužského příjmu',
    ],
    phone: '+420 608 612 377',
    email: 'krmlenka@gmail.com',
    image:
      'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/i00xcpue08y8hbwncrsp08o5/shbap755y9awuvwy04v2ngeh/o5FSyQ2EAUbzm7ki35azs.jpg',
    imagePosition: 'center top',
    imageAspectRatio: '4 / 4.7',
  },
  {
    slug: 'clen-2',
    name: 'Mgr. Barbora Šenovská',
    role: 'Psycholožka v předatestační přípravě a psychoterapeutka ve výcviku PCA',
    introduction:
      'Diagnostika dospělých a psychoterapie dětí, dospívajících i dospělých',
    education: [
      '2014–2020 Masarykova univerzita, Fakulta sociálních studií, obor Psychologie',
    ],
    training: [
      '2024–dosud Předatestační příprava v klinické psychologii',
      '2021–dosud Psychoterapeutický výcvik Český Institut PCA Brno, z. s.',
    ],
    workExperience: [
      '2025–dosud Soukromá praxe',
      '2023–dosud Ambulance klinické psychologie',
      '2020–2023 Školní psycholog',
    ],
    phone: '608 839 784',
    image:
      'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/i00xcpue08y8hbwncrsp08o5/shbap755y9awuvwy04v2ngeh/ZQd-VzRdR-SEo-C8bf5K3.jpg',
  },
  {
    slug: 'clen-3',
    name: 'Mgr. Jana Kopecká',
    role: 'Psycholožka a psychoterapeutka ve výcviku v gestalt modalitě',
    introduction:
      'psychoterapie dospělých a dospívajících, v gestalt modalitě',
    education: [
      '2006–2011 Magisterské studium psychologie, Filozofická fakulta MU Brno',
    ],
    training: [
      '2025 Kurz Disharmonický vývoj osobnosti, IKP (PhDr. Karolína Malá)',
      '2024 Kurz Psycholog ve zdravotnictví, SLEA',
      '2022–2027 Psychoterapeutický výcvik v Gestalt terapii, Dialog (CZGPTI)',
      '2012–2016 Sebezkušenostní výcvik SUR – Korektivní, resocializační a socioterapeutická práce se skupinou, NÚV',
      '2012–2013 Kurz Rodina v procesu změny, SOFT (PhDr. Hana Vyhnálková)',
      '2011 Kurz Test ruky (Mgr. Zdeněk Altman)',
      '2010–2013 Základní kurz Rorschachovy metody (PhDr. Anton Polák a PhDr. Igor Obuch)',
      '2009–2010 Kurz Úvod do komunikačních teorií v psychologii a psychoterapii (Institut komunikační psychologie a psychoterapie, o.s., Brno)',
    ],
    workExperience: [
      '2024–dosud Ambulance klinické psychologie, Mgr. Lenka Krmíčková',
      '2022–2025 Středisko výchovné péče Hlinky, Brno, Celodenní program',
      '2011–2022 Diagnostický ústav pro mládež Veslařská, Brno',
    ],
    phone: '774 951 816',
    image:
      'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/i00xcpue08y8hbwncrsp08o5/shbap755y9awuvwy04v2ngeh/pH-Cxl74YkNKfl_-_S1S_.jpg',
    imagePosition: 'center 30%',
  },
  {
    slug: 'clen-4',
    name: 'Mgr. Jan Moos',
    role: 'Psycholog v psychoterapeutickém výcviku SUR',
    introduction:
      'Psychoterapie dospělých osob',
    education: [
      '2018–2024 Masarykova univerzita, Filozofická fakulta, magisterské studium jednooborové psychologie',
    ],
    training: [
      '2023–dosud Psychoterapeutický výcvik v psychodynamické psychoterapii, SUR, Institut pro vzdělávání v psychoterapii, z. s.',
      '2023 Výcvik komplexní krizové intervence, Modrá linka, z. s.',
    ],
    workExperience: [
      '2025–dosud Psycholog v Ambulanci klinické psychologie',
      '2021–2025 Psycholog v nízkoprahovém centru, Společnost Podané ruce o.p.s.',
      '2016–2017 Psychiatrické oddělení, Krajská nemocnice Liberec',
    ],
    phone: '792 378 868',
    image:
      'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/i00xcpue08y8hbwncrsp08o5/shbap755y9awuvwy04v2ngeh/t1Cc_NpQh2PAydAke8L47.jpg',
    imagePosition: 'center 30%',
  },
  {
    slug: 'clen-5',
    name: 'Mgr. Jana Ondráčková',
    role: 'Psycholožka v předatestační přípravě a psychoterapeutka ve logoterapeutickém výcviku',
  },
]

/** Hlavní navigace webu. */
export const navLinks: { href: string; label: string }[] = [
  { href: '/', label: 'Úvod' },
  { href: '/tym', label: 'Náš tým' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/kontakt', label: 'Kontakt a objednání' },
]

/** Placeholderové služby, nahraditelné na jednom místě. */
export const services: { title: string; description: string }[] = [
  { title: '[NÁZEV SLUŽBY]', description: '[STRUČNÝ POPIS SLUŽBY]' },
  { title: '[NÁZEV SLUŽBY]', description: '[STRUČNÝ POPIS SLUŽBY]' },
  { title: '[NÁZEV SLUŽBY]', description: '[STRUČNÝ POPIS SLUŽBY]' },
]

/** Placeholderové sekce pro budoucí obsah. */
export const sections: { id: string; title: string; body: string }[] = [
  {
    id: 'sekce-1',
    title: '[NADPIS BUDOUCÍ SEKCE]',
    body: '[TEXT BUDOUCÍ SEKCE]',
  },
  {
    id: 'sekce-2',
    title: '[NADPIS BUDOUCÍ SEKCE]',
    body: '[TEXT BUDOUCÍ SEKCE]',
  },
]

export const clinicName = 'Ambulance klinické psychologie Brno'
export const clinicianName = 'Mgr. Lenka Krmíčková'

export const contactPlaceholders = {
  ico: '14071975',
  phone: '+420 608 612 377',
  email: 'krmlenka@gmail.com',
  address: 'Masarykova 37, Brno',
  floor: '2. patro',
}

/** Smluvní zdravotní pojišťovny – faktická data. */
export const insuranceProviders = {
  intro: 'Služby jsou hrazeny z veřejného zdravotního pojištění.',
  items: [
    {
      name: 'VZP',
      logo: 'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/i00xcpue08y8hbwncrsp08o5/shbap755y9awuvwy04v2ngeh/-zn8khKYeHVWT94ZuXh_0.png',
      logoScale: 2.4,
    },
    {
      name: 'ZPMV ČR',
      logo: 'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/i00xcpue08y8hbwncrsp08o5/shbap755y9awuvwy04v2ngeh/RUambqytlQicl08ejwMI4.png',
      logoScale: 0.95,
    },
    {
      name: 'ČPZP',
      logo: 'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/i00xcpue08y8hbwncrsp08o5/shbap755y9awuvwy04v2ngeh/vaRqRjuxouLL0hUKveqiM.png',
      logoScale: 1.45,
    },
    {
      name: 'OZP',
      logo: 'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/i00xcpue08y8hbwncrsp08o5/shbap755y9awuvwy04v2ngeh/RbhsSptOhLp40fVqT1cHw.png',
      logoScale: 1.55,
    },
  ],
}
