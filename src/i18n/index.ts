// Locale plumbing. Indonesian is the default; both locales are prefixed (/id/, /en/)
// so every page has a clean equivalent in the other language.

export const langs = ['id', 'en'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'id';

/** A value authored in both languages. */
export type Bi<T = string> = { id: T; en: T };

export const htmlLang: Record<Lang, string> = { id: 'id-ID', en: 'en' };
export const ogLocale: Record<Lang, string> = { id: 'id_ID', en: 'en_US' };

/** getStaticPaths for any page under src/pages/[lang]/. */
export const langPaths = () => langs.map((lang) => ({ params: { lang } }));

/** Build a localized href: href('en', 'operations/') → /en/operations/ */
export function href(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  const withSlash = clean === '' || clean.endsWith('/') || clean.includes('#') ? clean : `${clean}/`;
  return `/${lang}/${withSlash}`;
}

/** Swap the locale segment of the current pathname. */
export function switchLang(pathname: string, to: Lang): string {
  const parts = pathname.split('/');
  if (langs.includes(parts[1] as Lang)) parts[1] = to;
  else return `/${to}/`;
  return parts.join('/');
}

export function pick<T>(lang: Lang, v: Bi<T>): T {
  return v[lang];
}

export function formatDate(lang: Lang, d: Date, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) {
  return new Intl.DateTimeFormat(htmlLang[lang], { ...opts, timeZone: 'Asia/Jakarta' }).format(d);
}

export function formatNumber(lang: Lang, n: number, digits = 0) {
  return new Intl.NumberFormat(htmlLang[lang], { maximumFractionDigits: digits, minimumFractionDigits: digits }).format(n);
}

// ---------------------------------------------------------------- UI strings
export const ui = {
  id: {
    skip: 'Lewati ke konten',
    menu: 'Menu',
    close: 'Tutup',
    langName: 'Bahasa Indonesia',
    otherLang: 'English',
    contact: 'Hubungi kami',
    home: 'Beranda',
    breadcrumb: 'Lokasi halaman',
    source: 'Sumber',
    photo: 'Foto',
    toUpdate: 'Perlu diperbarui',
    readMore: 'Selengkapnya',
    allNews: 'Semua berita',
    download: 'Unduh',
    notYet: 'Belum tersedia',
    status: {
      operating: 'Beroperasi',
      construction: 'Konstruksi',
      exploration: 'Eksplorasi',
      planned: 'Direncanakan',
    },
    footer: {
      tagline: 'Nikel terintegrasi dari Konawe Utara, Sulawesi Tenggara.',
      hq: 'Kantor pusat',
      company: 'Perusahaan',
      operations: 'Operasi',
      sustainability: 'Keberlanjutan',
      media: 'Investor & media',
      wbs: 'Laporkan pelanggaran (WBS)',
      rights: 'Hak cipta dilindungi.',
      sitemap: 'Peta situs',
    },
    rail: 'Navigasi bagian halaman',
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    langName: 'English',
    otherLang: 'Bahasa Indonesia',
    contact: 'Contact us',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    source: 'Source',
    photo: 'Photo',
    toUpdate: 'To update',
    readMore: 'Read more',
    allNews: 'All news',
    download: 'Download',
    notYet: 'Not yet available',
    status: {
      operating: 'Operating',
      construction: 'Construction',
      exploration: 'Exploration',
      planned: 'Planned',
    },
    footer: {
      tagline: 'Integrated nickel from North Konawe, Southeast Sulawesi.',
      hq: 'Head office',
      company: 'Company',
      operations: 'Operations',
      sustainability: 'Sustainability',
      media: 'Investors & media',
      wbs: 'Report misconduct (WBS)',
      rights: 'All rights reserved.',
      sitemap: 'Sitemap',
    },
    rail: 'Page sections',
  },
} as const;

export type Status = keyof (typeof ui)['id']['status'];

// ---------------------------------------------------------------- Navigation
export type NavItem = { path: string; label: Bi; children?: NavItem[] };

export const nav: NavItem[] = [
  { path: 'about/', label: { id: 'Tentang Kami', en: 'About' } },
  { path: 'operations/', label: { id: 'Operasi', en: 'Operations' } },
  { path: 'products/', label: { id: 'Produk', en: 'Products' } },
  {
    path: 'sustainability/',
    label: { id: 'Keberlanjutan', en: 'Sustainability' },
    children: [
      { path: 'sustainability/', label: { id: 'Lingkungan & ESG', en: 'Environment & ESG' } },
      { path: 'sustainability/health-safety/', label: { id: 'K3', en: 'Health & Safety' } },
      { path: 'sustainability/community/', label: { id: 'Masyarakat (PPM)', en: 'Community' } },
    ],
  },
  { path: 'governance/', label: { id: 'Tata Kelola', en: 'Governance' } },
  { path: 'investors/', label: { id: 'Investor', en: 'Investors' } },
  { path: 'news/', label: { id: 'Berita', en: 'News' } },
  { path: 'careers/', label: { id: 'Karier', en: 'Careers' } },
];
