// Company facts. Source: aspire.id (copied as-is unless noted), corrected October 2026
// with public reporting on the 2023 acquisition and the RKEF schedule.
// Anything unknown is marked TO UPDATE, never invented.
import type { Bi } from '../i18n';

export const company = {
  legalName: 'PT Anugerah Surya Pacific Resources',
  brand: 'ASPIRE Stargate',
  short: 'ASPIRE',
  member: 'Member of Astra',
  url: 'https://www.aspire.id',
  email: 'nickel@stargate.aspire.id',
  careersEmail: 'career@aspire.id',
  careersPortal: 'https://stargo.odoo.com/jobs',
  phone: null as string | null, // TO UPDATE: switchboard number
  hq: {
    building: 'Pacific Century Place #18-10A',
    street: 'Jl. Jend. Sudirman Kav 52-53, SCBD',
    city: 'Jakarta 12190',
    country: { id: 'Indonesia', en: 'Indonesia' } as Bi,
    maps: 'https://www.google.com/maps/search/?api=1&query=Pacific+Century+Place+SCBD+Jakarta',
  },
  site: {
    village: 'Molore',
    district: 'Langgikima',
    regency: { id: 'Kabupaten Konawe Utara', en: 'North Konawe Regency' } as Bi,
    province: { id: 'Sulawesi Tenggara', en: 'Southeast Sulawesi' } as Bi,
    bay: { id: 'Teluk Matarape', en: 'Matarape Bay' } as Bi,
  },
  purpose: {
    id: 'Mari membangun bangsa melalui perjalanan kita yang murni dan terbarukan, bersama-sama.',
    en: 'Let’s build our nations through our pure and renewable journey together.',
  } as Bi,
};

// ------------------------------------------------------------------ Timeline
export type Milestone = { year: string; title: Bi; body: Bi; era: 'history' | 'present' | 'future'; source?: Bi };

export const timeline: Milestone[] = [
  {
    year: '2009',
    era: 'history',
    title: { id: 'Stargate mulai menambang', en: 'Stargate begins mining' },
    body: {
      id: 'PT Stargate memulai operasi tambang sebagai usaha patungan setara antara Glencore dan konglomerat tambang nasional, mengapalkan bijih (DSO) hingga larangan ekspor 2014.',
      en: 'PT Stargate commenced mining as an equal joint venture between Glencore and a prominent Indonesian mining conglomerate, shipping direct-shipping ore until the 2014 export ban.',
    },
  },
  {
    year: '2013',
    era: 'history',
    title: { id: 'Akuisisi PT Samudera Sejahtera', en: 'PT Samudera Sejahtera acquisition' },
    body: { id: 'PT Samudera Sejahtera mengakuisisi 100% saham PT Stargate.', en: 'PT Samudera Sejahtera acquired 100% of PT Stargate.' },
  },
  {
    year: '2014',
    era: 'history',
    title: { id: 'Larangan ekspor bijih mentah', en: 'Raw ore export ban' },
    body: { id: 'Pemerintah Indonesia melarang ekspor bijih nikel mentah mulai Januari 2014.', en: 'The Government of Indonesia banned the export of raw nickel ore from January 2014.' },
  },
  {
    year: '2017',
    era: 'present',
    title: { id: 'ASPIRE berdiri', en: 'ASPIRE is established' },
    body: {
      id: 'Pada April 2017 grup ASPIRE mengakuisisi 100% PT Stargate untuk mengembangkannya dari tambang menjadi perusahaan pengolahan nikel: feronikel dan bahan baterai energi baru.',
      en: 'In April 2017 the ASPIRE group acquired 100% of PT Stargate to develop it from a mining-only operation into nickel processing: ferronickel and new-energy battery materials.',
    },
  },
  {
    year: '2021',
    era: 'present',
    title: { id: 'Restrukturisasi dan fondasi industri', en: 'Restructuring and industrial groundwork' },
    body: {
      id: 'Restrukturisasi ASPIREstargate rampung. Perjanjian jual beli listrik dengan PLN dan HOA pembangunan PLTGU 450 MW di lokasi. MottMac ditunjuk merancang rencana induk kawasan industri. Kontrak EPC RKEF 2x33 MVA diberikan kepada Sinosteel.',
      en: 'ASPIREstargate restructuring completed. Power purchase SPA with PLN and an HOA for PLN to build a 450 MW PLTGU on site. MottMac appointed to master-plan the industrial park. EPC contract for the 2x33 MVA RKEF awarded to Sinosteel.',
    },
  },
  {
    year: '2022',
    era: 'present',
    title: { id: 'Tambang kembali beroperasi', en: 'Mining restarts' },
    body: {
      id: 'Proyek tambang di Deposit Selatan (Lameruru dan Molore) dimulai kembali dengan target pengapalan 2,4 juta ton bijih kadar tinggi per tahun; konstruksi RKEF 2x33 MVA dimulai.',
      en: 'Mining restarts in the South Deposit (Lameruru and Molore) targeting 2.4 million tons of high-grade ore shipments a year; construction of the 2x33 MVA RKEF begins.',
    },
  },
  {
    year: '2023',
    era: 'present',
    title: { id: 'Bergabung dengan grup Astra', en: 'Joins the Astra group' },
    body: {
      id: 'PT Danusa Tambang Nusantara, anak usaha PT United Tractors Tbk, mengakuisisi ASPIRE. ASPIRE kini merupakan anggota grup Astra.',
      en: 'PT Danusa Tambang Nusantara, a subsidiary of PT United Tractors Tbk, acquired ASPIRE. ASPIRE is now a member of the Astra group.',
    },
    source: { id: 'Keterbukaan informasi publik, 2023', en: 'Public disclosures, 2023' },
  },
  {
    year: '2027',
    era: 'future',
    title: { id: 'Target produksi RKEF', en: 'RKEF production target' },
    body: {
      id: 'Smelter RKEF dua lini di Molore ditargetkan mulai berproduksi.',
      en: 'The two-line RKEF smelter at Molore is targeted to begin production.',
    },
    source: { id: 'Pemberitaan publik, 2025', en: 'Public reporting, 2025' },
  },
  {
    year: '→',
    era: 'future',
    title: { id: 'Nikel hijau untuk baterai', en: 'Green nickel for batteries' },
    body: {
      id: 'Memproduksi bahan baterai nikel energi baru yang berkelanjutan untuk kendaraan listrik, serta berinvestasi pada energi angin dan surya.',
      en: 'Producing green, sustainable new-energy nickel battery materials for EVs, and investing in renewable wind and solar energy.',
    },
  },
];

// ------------------------------------------------------------------ Values
export const vision: Bi = {
  id: 'Menjadi produsen nikel hijau kelas dunia dengan komitmen dan tekad tertinggi.',
  en: 'Let’s become a world-class green nickel producer with supreme commitment and determination.',
};

export const visionBody: Bi<string[]> = {
  id: [
    'Visi kami saat ini adalah menjadi pemimpin nasional dalam penambangan dan pengolahan nikel dengan komitmen tertinggi terhadap tanggung jawab etis, sosial, dan lingkungan.',
    'Tekad kami adalah memperkaya dan merawat kualitas hidup orang-orang kami dan sumber daya alam melalui peningkatan berkelanjutan atas keunggulan operasional yang efisien.',
  ],
  en: [
    'Our present vision is to be the national leader in nickel mining and processing with supreme commitment to ethical, social and environmental responsibilities.',
    'Our determination is to productively enrich and nourish the quality of lives of our people and natural resources through eternal improvement of our efficient operational excellence.',
  ],
};

export const values: { name: Bi; body: Bi }[] = [
  {
    name: { id: 'Dimulai dari dalam diri', en: 'Starting from within' },
    body: {
      id: 'Tujuan kami menciptakan masa kini yang lebih baik dimulai dari diri dan spiritualitas kami, inti dari perusahaan, keluarga, komunitas, dan lingkungan kami.',
      en: 'Our purpose of creating a better present starts from within ourselves and our spirituality, the core of our corporate, our family, our community and our environment.',
    },
  },
  {
    name: { id: 'Integritas', en: 'Integrity' },
    body: {
      id: 'Tindakan, komunikasi, dan hubungan yang unggul: integritas, rasa hormat, kejujuran, keterbukaan, keadilan, akuntabilitas, dan kepercayaan.',
      en: 'Superior action, communication and relationships of integrity, respect, honesty, openness, fairness, accountability and trust.',
    },
  },
  {
    name: { id: 'Keberanian untuk unggul', en: 'Courage to excel' },
    body: {
      id: 'Keberanian dan tekad untuk unggul dengan imajinasi, berani memikul tanggung jawab lebih besar, dan terus memperbaiki diri.',
      en: 'The courage and determination to excel with imagination, to take on bigger responsibilities and improve ourselves into excellence.',
    },
  },
  {
    name: { id: 'Kepemimpinan', en: 'Leadership' },
    body: {
      id: 'Menumbuhkan kepemimpinan dalam diri setiap orang menjadi kerja tim yang sinergis, saling menguntungkan, dan saling menghormati.',
      en: 'Cultivating the leadership within us into synergic, mutually beneficial and respectful teamwork.',
    },
  },
  {
    name: { id: 'Generasi berikutnya', en: 'The next generation' },
    body: {
      id: 'Kehadiran yang penuh semangat untuk memastikan masa depan yang berhasil bagi generasi berikutnya.',
      en: 'A passionate presence that secures a successful future for our next generation.',
    },
  },
];

export const gcgPrinciples: Bi[] = [
  { id: 'Transparansi', en: 'Transparency' },
  { id: 'Efisiensi', en: 'Efficiency' },
  { id: 'Akuntabilitas', en: 'Accountability' },
  { id: 'Responsibilitas', en: 'Responsibility' },
  { id: 'Independensi', en: 'Independency' },
  { id: 'Kewajaran & kesetaraan', en: 'Fairness & equality' },
];
