// The six operations. Text copied from aspire.id/whatwedo/* (lightly edited for
// tense and the corrected RKEF schedule); translations to Indonesian added.
import type { ImageMetadata } from 'astro';
import type { Bi, Status } from '../i18n';
import aerial from '../assets/photos/site-aerial-matarape.jpg';
import bay from '../assets/photos/bay-stockpiles.jpg';
import excavator from '../assets/photos/excavator-loading.jpg';
import haul from '../assets/photos/haul-road.png';

export type Block =
  | { kind: 'text'; title?: Bi; body: Bi<string[]> }
  | { kind: 'facts'; title?: Bi; rows: { label: Bi; value: Bi | string }[]; source?: Bi }
  | { kind: 'list'; title?: Bi; items: Bi<string[]>; columns?: boolean }
  | { kind: 'grades'; title?: Bi; rows: { name: Bi; tons: string; ni: string; fe: string; sio2?: string; mgo?: string; al2o3?: string; co?: string }[]; source: Bi }
  | { kind: 'record'; title?: Bi; rows: { name: string; years: string; body: Bi }[] }
  | { kind: 'tbd'; title: Bi; note: Bi };

export type Project = {
  slug: string;
  no: string;
  code: string;
  entity: string;
  name: Bi;
  stage: Bi;
  status: Status;
  summary: Bi;
  image?: { src: ImageMetadata; alt: Bi };
  blocks: Block[];
  /** Position on the schematic site map (viewBox 0 0 1000 640). */
  map?: { x: number; y: number };
};

export const projects: Project[] = [
  {
    slug: 'south-block',
    no: '01',
    code: 'SPR',
    entity: 'PT Stargate Pasific Resources',
    name: { id: 'Tambang Nikel Blok Selatan', en: 'South Block Nickel Mine' },
    stage: { id: 'Penambangan', en: 'Mining' },
    status: 'operating',
    summary: {
      id: 'IUP Produksi 1.213,2 ha berstatus Clear & Clean, dua jeti, dan target 2,4 juta ton bijih kadar tinggi per tahun.',
      en: 'A 1,213.2 ha Clear & Clean production IUP with two jetties, targeting 2.4 million tons of high-grade ore a year.',
    },
    image: { src: excavator, alt: { id: 'Ekskavator memuat bijih laterit ke dump truck di Blok Selatan', en: 'Excavator loading laterite ore into a dump truck at the South Block' } },
    map: { x: 560, y: 410 },
    blocks: [
      {
        kind: 'text',
        title: { id: 'Ikhtisar', en: 'Overview' },
        body: {
          id: [
            'Stargate terletak di antara pusat-pusat pengolahan nikel terbesar di kawasan ini, sehingga biaya angkut bijihnya kompetitif. Stargate telah membangun reputasi di penambangan nikel dan menjadi pemasok pilihan bagi para pelanggannya.',
            'Untuk memenuhi permintaan, Stargate berencana menggandakan kapasitas produksi dan pengapalan menjadi 2,4 juta ton bijih kadar tinggi per tahun, ditambah 4 juta ton bijih kadar menengah dan rendah per tahun.',
            'Strateginya adalah mengoptimalkan NPV tambang dengan memproduksi bijih kadar tinggi sebanyak dan sedini mungkin dari IUP Selatan. Peningkatan kapasitas ini juga sejalan dengan rencana Stargate membangun pabrik RKEF sendiri, yang membutuhkan 600 ribu ton umpan per lini.',
          ],
          en: [
            'Stargate lies between the region’s largest nickel processing centres, giving it competitive freight costs for shipping ore. Stargate has established its reputation in nickel mining and has become a preferred supplier to its customers.',
            'To meet their demand, Stargate plans to double its production and shipping capacity to 2.4 million tons of high-grade ore per year, plus an additional 4 million tons of medium- and low-grade ore per year.',
            'The strategy is to optimise the NPV of the mine by producing high-grade ore as much and as early as possible from the South IUP. The increase also supports Stargate’s own RKEF plant, which requires 600 thousand tons of feed per line.',
          ],
        },
      },
      {
        kind: 'facts',
        title: { id: 'Wilayah izin', en: 'Mining tenement' },
        rows: [
          { label: { id: 'Tahap', en: 'Stage' }, value: { id: 'IUP Produksi', en: 'Production IUP' } },
          { label: { id: 'Status', en: 'Status' }, value: 'Clear & Clean' },
          { label: { id: 'Luas', en: 'Total area' }, value: { id: '1.213,2 ha', en: '1,213.2 ha' } },
          { label: { id: 'Berlaku hingga', en: 'Expiry' }, value: { id: '22 Des 2029 (dapat diperpanjang hingga 2049, per 10 tahun)', en: '22 Dec 2029 (extendable to 2049, 10 years at a time)' } },
        ],
        source: { id: 'aspire.id', en: 'aspire.id' },
      },
      {
        kind: 'text',
        title: { id: 'Perizinan dan lahan', en: 'Permits and land' },
        body: {
          id: [
            'Stargate juga telah memperoleh izin primer dan sekunder lain, termasuk IPPKH kehutanan untuk kedua IUP, izin jeti, dan izin lingkungan. Seluruh kewajiban Stargate kepada pemerintah dalam keadaan baik.',
            'Stargate telah mengamankan seluruh lahan seluas 540 hektare yang diperlukan untuk operasi tambang, termasuk kepemilikan 100% atas area strategis: pelabuhan, jalan akses utama, area pabrik industri mendatang, dan area deposit nikel.',
          ],
          en: [
            'Stargate has also obtained other primary and secondary permits, including forestry IPPKH permits for both IUPs, jetty permits and environmental permits. All of Stargate’s obligations to the government are in good standing.',
            'Stargate has fully secured all 540 hectares of land required for the mining operation, including 100% ownership of strategic areas: ports, the main access road, future industrial plant areas and the nickel deposit areas.',
          ],
        },
      },
      {
        kind: 'text',
        title: { id: 'Infrastruktur tambang', en: 'Mining infrastructure' },
        body: {
          id: [
            'Logistik segala cuaca: jaringan jalan angkut, dua jeti dengan kapasitas muat gabungan hingga 20.000 ton/hari, dan kapasitas penyimpanan total 1,5 juta ton. Jarak dari pit ke stockpile dan jeti 0,5 hingga 1,8 km.',
            'Lokasi tambang dilengkapi base camp dengan akomodasi dan ruang makan, kantor lapangan, preparasi sampel, laboratorium analisis, serta persemaian untuk rehabilitasi dan reforestasi.',
          ],
          en: [
            'All-weather logistics: a network of hauling roads, two jetties with combined loading capacity of up to 20,000 t/day, and total storage capacity of 1.5 million tonnes. Pits are 0.5 to 1.8 km from the stockpiles and jetties.',
            'The mine site has fully equipped base camps with accommodation and dining, a site office, sample preparation, an analysis laboratory and a nursery for rehabilitation and reforestation.',
          ],
        },
      },
      {
        kind: 'facts',
        title: { id: 'Jeti Molore', en: 'Molore Jetty' },
        rows: [
          { label: { id: 'Luas', en: 'Area' }, value: '1.5 ha' },
          { label: { id: 'Slot tongkang', en: 'Barge slots' }, value: '4' },
          { label: { id: 'Kedalaman (draft)', en: 'Tide level (draft)' }, value: '9–12 m' },
          { label: { id: 'Ukuran tongkang', en: 'Barge size' }, value: '270–330 ft' },
        ],
      },
      {
        kind: 'facts',
        title: { id: 'Jeti Lameruru', en: 'Lameruru Jetty' },
        rows: [
          { label: { id: 'Luas', en: 'Area' }, value: { id: '1,6 ha (dapat diperluas +1,2 ha)', en: '1.6 ha (expandable +1.2 ha)' } },
          { label: { id: 'Slot tongkang', en: 'Barge slots' }, value: '2' },
          { label: { id: 'Kedalaman (draft)', en: 'Tide level (draft)' }, value: '10–12 m' },
        ],
      },
      {
        kind: 'grades',
        title: { id: 'Sumber daya dan cadangan', en: 'Resources and reserves' },
        rows: [
          { name: { id: 'Total sumber daya', en: 'Total resources' }, tons: '146,100,000', ni: '1.19', fe: '33.14', co: '0.09' },
          { name: { id: 'Cadangan limonit', en: 'Limonite reserves' }, tons: '92,187,796', ni: '1.0', fe: '37.4', sio2: '12.2', mgo: '3.5', al2o3: '9.2' },
          { name: { id: 'Cadangan saprolit', en: 'Saprolite reserves' }, tons: '23,178,777', ni: '1.7', fe: '26.5', sio2: '22.6', mgo: '8.2', al2o3: '5.9' },
        ],
        source: {
          id: 'Laporan Sumber Daya Mineral JORC oleh RungePincockMinarco, Mei 2014 (untuk penggunaan internal); pernyataan cadangan oleh Stargate.',
          en: 'JORC Mineral Resources Report by RungePincockMinarco, May 2014 (internal use); reserve statement by Stargate.',
        },
      },
      {
        kind: 'tbd',
        title: { id: 'Pembaruan estimasi', en: 'Updated estimate' },
        note: { id: 'Angka sumber daya berasal dari 2014. Ganti dengan pernyataan JORC/KCMI terbaru dan produksi aktual.', en: 'Resource figures date from 2014. Replace with the latest JORC/KCMI statement and actual production.' },
      },
    ],
  },
  {
    slug: 'north-block',
    no: '02',
    code: 'S2',
    entity: 'PT Stargate Dua Pasific Resources',
    name: { id: 'Eksplorasi Blok Utara', en: 'North Block Exploration' },
    stage: { id: 'Eksplorasi', en: 'Exploration' },
    status: 'exploration',
    summary: {
      id: 'IUP 461,1 ha dengan sampel kadar hingga 3,12% Ni; pengeboran sesuai JORC dimulai Juli 2021.',
      en: 'A 461.1 ha IUP with samples up to 3.12% Ni; JORC-compliant drilling began in July 2021.',
    },
    image: { src: haul, alt: { id: 'Jalan angkut dan timbunan bijih di antara hutan dan perbukitan Konawe Utara', en: 'Haul roads and ore piles between forest and the hills of North Konawe' } },
    map: { x: 470, y: 205 },
    blocks: [
      {
        kind: 'text',
        title: { id: 'Ikhtisar', en: 'Overview' },
        body: {
          id: [
            'IUP Utara menunjukkan potensi deposit yang besar dengan kadar tinggi hingga 3,12% nikel dari 30 sumur uji yang dibuat pada 2010.',
            'Stargate memulai program pengeboran eksplorasi sesuai JORC pada Juli 2021 untuk mengonfirmasi potensi deposit kadar tinggi. Program tahap 1 menggunakan grid lubang bor 400x200 m dan infill hingga 50x50 m di area prospektif. Survei GPR juga dilakukan untuk mengidentifikasi lapisan batuan dasar dan membatasi perhitungan deposit.',
            'Hasil sementara dari 144 lubang bor (sekitar 2.880 m sampel) dijadwalkan dilaporkan mulai Desember 2021 hingga April 2022.',
          ],
          en: [
            'The North IUP shows great deposit potential, with high grades of up to 3.12% nickel from 30 test pits dug in 2010.',
            'Stargate commenced a JORC-compliant drilling exploration programme in July 2021 to confirm the high-grade potential. Stage 1 uses a 400x200 m drill-hole grid with infill of up to 50x50 m in prospective areas. A GPR survey is also underway to identify the bedrock layer and delineate the deposit calculation.',
            'Interim results from 144 drill holes (about 2,880 m of samples) were scheduled for reporting from December 2021 to April 2022.',
          ],
        },
      },
      {
        kind: 'facts',
        title: { id: 'Wilayah izin', en: 'Mining tenement' },
        rows: [
          { label: { id: 'Tahap', en: 'Stage' }, value: { id: 'Produksi', en: 'Production' } },
          { label: { id: 'Status IUP', en: 'IUP status' }, value: 'Clear & Clean' },
          { label: { id: 'Luas', en: 'Total area' }, value: { id: '461,1 ha', en: '461.1 ha' } },
          { label: { id: 'Berlaku hingga', en: 'Expiry' }, value: { id: '1 Feb 2031 (dapat diperpanjang hingga 2051, per 10 tahun)', en: '1 Feb 2031 (extendable to 2051, 10 years at a time)' } },
        ],
        source: { id: 'aspire.id', en: 'aspire.id' },
      },
      {
        kind: 'tbd',
        title: { id: 'Hasil pengeboran', en: 'Drilling results' },
        note: { id: 'Tambahkan hasil pengeboran tahap 1 dan estimasi sumber daya Blok Utara.', en: 'Add the stage 1 drilling results and the North Block resource estimate.' },
      },
    ],
  },
  {
    slug: 'mining-services',
    no: '03',
    code: 'RSL',
    entity: 'PT Rajawali Sigi Lestari',
    name: { id: 'Jasa Pertambangan', en: 'Mining Services' },
    stage: { id: 'Jasa tambang', en: 'Mining services' },
    status: 'operating',
    summary: {
      id: 'Perusahaan jasa pertambangan berizin IUJP yang menjalankan tambang nikel dari rekayasa hingga rehabilitasi.',
      en: 'An IUJP-licensed mining services company running nickel mines from engineering to rehabilitation.',
    },
    image: { src: haul, alt: { id: 'Armada dump truck dan ekskavator di jalan angkut', en: 'Dump trucks and excavators on the haul road' } },
    map: { x: 640, y: 470 },
    blocks: [
      {
        kind: 'text',
        title: { id: 'Ikhtisar', en: 'Overview' },
        body: {
          id: [
            'PT RSL adalah perusahaan jasa pertambangan berizin IUJP yang berfokus pada operasi tambang nikel di Konawe Utara, Sulawesi Tenggara.',
            'Tim manajemen kami memiliki rekam jejak dalam membangun dan menuntaskan penambangan bijih nikel dengan standar Good Mining Practice tertinggi. Keahlian dan pengalaman kami di nikel bertujuan membawa setiap operasi tambang ke efisiensi, produktivitas, dan kinerja biaya yang optimal.',
          ],
          en: [
            'PT RSL is an IUJP-licensed mining services company focusing on nickel mine operation in North Konawe, Southeast Sulawesi.',
            'Our management team has a proven track record in constructing and accomplishing nickel ore mining to the highest standards of Good Mining Practice. Our nickel-focused expertise aims to bring each operation to optimal efficiency, productivity and cost performance.',
          ],
        },
      },
      {
        kind: 'list',
        title: { id: 'Layanan', en: 'Services' },
        columns: true,
        items: {
          id: ['Rekayasa tambang', 'Desain tambang', 'Rencana tambang', 'Estimasi tambang', 'Konstruksi tambang', 'Pengupasan lapisan penutup', 'Ekstraksi bijih', 'Pemuatan dan pengangkutan', 'Pengapalan bijih', 'Rekonsiliasi tambang', 'Pemantauan dan pemeliharaan', 'Rehabilitasi tambang'],
          en: ['Mining engineering', 'Mining design', 'Mining plan', 'Mining estimation', 'Mining construction', 'Overburden removal', 'Ore extraction', 'Loading and hauling', 'Ore shipping', 'Mining reconciliation', 'Monitoring and maintenance', 'Mining rehabilitation'],
        },
      },
      {
        kind: 'record',
        title: { id: 'Rekam jejak', en: 'Track record' },
        rows: [
          {
            name: 'Stargate South Block (PT SPR)',
            years: '2017 —',
            body: {
              id: 'Jasa tambang penuh dengan target kapasitas tahunan 2,4 juta ton pengapalan bijih kadar tinggi. Rencana total material tertambang 10 hingga 12 juta ton.',
              en: 'Full mining service with an annual target capacity of 2.4 million tons of high-grade ore shipments. Planned total material mined: 10 to 12 million tons.',
            },
          },
          {
            name: 'Manuran Nickel Mine (PT ASP)',
            years: '2006 — 2014',
            body: {
              id: 'Jasa tambang penuh dengan target kapasitas tahunan 1,2 juta ton pengapalan bijih, dari pengupasan lapisan penutup, penambangan selektif, penimbunan, pengangkutan, hingga transshipment ke kapal induk.',
              en: 'Full mining service with an annual target capacity of 1.2 million tons of ore shipments, from overburden removal, selective mining, stockpiling and hauling to transhipment to mother vessels.',
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'rkef',
    no: '04',
    code: 'SMA',
    entity: 'PT Stargate Mineral Asia',
    name: { id: 'Proyek RKEF 2x33 MVA', en: '2x33 MVA RKEF Project' },
    stage: { id: 'Pengolahan', en: 'Processing' },
    status: 'construction',
    summary: {
      id: 'Smelter feronikel dua lini RKEF oleh Sinosteel: 130.740 ton NPI per tahun, target produksi 2027.',
      en: 'A two-line RKEF ferronickel smelter by Sinosteel: 130,740 tons of NPI a year, production targeted for 2027.',
    },
    image: { src: bay, alt: { id: 'Teluk Matarape dengan timbunan bijih di area Stargate', en: 'Matarape Bay with ore stockpiles in the Stargate area' } },
    map: { x: 330, y: 395 },
    blocks: [
      {
        kind: 'text',
        title: { id: 'Ikhtisar', en: 'Overview' },
        body: {
          id: [
            'Stargate membangun smelter feronikel yang memproduksi Nickel Pig Iron (NPI) di Desa Molore, Kecamatan Langgikima, Kabupaten Konawe Utara, Sulawesi Tenggara.',
            'Bahan baku smelter SMA dipasok oleh SPR, perusahaan saudara SMA. SPR memegang izin tambang di area sekitar 1.674 hektare dengan sumber daya bijih nikel yang sesuai untuk smelter sebesar 24,7 juta wet metric ton (WMT).',
            'Smelter yang dibangun oleh Sinosteel dilengkapi 2 lini Rotary Kiln Electric Furnace (RKEF), dengan basis desain tingkat perolehan kandungan nikel 93%, kapasitas produksi NPI 130.740 ton per tahun (dengan umpan 1,65% Ni), dan kandungan nikel NPI 10%.',
            'Untuk operasi dan pemeliharaan awal, Stargate memberikan kontrak O&M 2 tahun kepada kontraktor EPC demi kelancaran commissioning.',
          ],
          en: [
            'Stargate is building a ferronickel smelter that produces Nickel Pig Iron (NPI) in Molore Village, Langgikima District, North Konawe Regency, Southeast Sulawesi.',
            'Raw material for the SMA smelter is supplied by SPR, a sister company of SMA. SPR holds a mining permit over approximately 1,674 hectares, with a nickel ore resource compatible with the smelter measured at 24.7 million wet metric tons (WMT).',
            'The smelter, constructed by Sinosteel, is equipped with 2 lines of Rotary Kiln Electric Furnace (RKEF), with a design basis of 93% nickel recovery, NPI production capacity of 130,740 tons per year (using 1.65% Ni feedstock) and NPI nickel content of 10%.',
            'For initial operation and maintenance, Stargate has granted the EPC contractor a 2-year O&M contract to ensure smooth commissioning.',
          ],
        },
      },
      {
        kind: 'facts',
        title: { id: 'Tahap I', en: 'Phase I' },
        rows: [
          { label: { id: 'Teknologi', en: 'Technology' }, value: '2x33 MVA RKEF' },
          { label: { id: 'Kontraktor EPC', en: 'EPC contractor' }, value: 'Sinosteel Equipment & Engineering Co. Ltd.' },
          { label: { id: 'Kapasitas', en: 'Capacity' }, value: { id: '130.740 t NPI/tahun (umpan 1,65% Ni)', en: '130,740 t NPI/year (1.65% Ni feed)' } },
          { label: { id: 'Kandungan Ni pada NPI', en: 'NPI nickel content' }, value: '10%' },
          { label: { id: 'Perolehan nikel', en: 'Nickel recovery' }, value: '93%' },
          { label: { id: 'Listrik', en: 'Power' }, value: { id: 'Jaringan PLN Sulawesi; rencana PLTGU PLN 450 MW di lokasi', en: 'PLN Sulawesi grid; planned on-site PLN 450 MW PLTGU' } },
          { label: { id: 'O&M', en: 'O&M' }, value: { id: 'Kontrak 2 tahun oleh kontraktor EPC', en: '2-year contract by the EPC contractor' } },
          { label: { id: 'Target produksi', en: 'Production target' }, value: '2027' },
        ],
        source: { id: 'aspire.id; jadwal produksi: pemberitaan publik 2025', en: 'aspire.id; production schedule: public reporting 2025' },
      },
      {
        kind: 'text',
        title: { id: 'Listrik yang lebih hijau', en: 'Greener power' },
        body: {
          id: [
            'Alih-alih membangun PLTU beremisi karbon tinggi untuk smelter, Stargate bekerja sama dengan PLN untuk sumber listrik yang lebih hijau.',
            'PLN Sulawesi memiliki kelebihan daya 500 MW. Stargate sepakat membeli listrik dari dan berinvestasi bersama PLN membangun jaringan transmisi yang menghubungkan kawasan industri Stargate ke jaringan nasional. PLN juga berencana membangun PLTGU 450 MW sendiri di area Stargate.',
          ],
          en: [
            'Instead of constructing another high-carbon-emission coal power plant for the smelter, Stargate has decided to cooperate with PLN for a greener power source.',
            'PLN Sulawesi has 500 MW of excess power. Stargate has agreed to purchase power from, and co-invest with, PLN to build a transmission line connecting the Stargate industrial park to the grid. PLN also plans to construct its own 450 MW PLTGU in the Stargate area.',
          ],
        },
      },
      {
        kind: 'tbd',
        title: { id: 'Progres konstruksi', en: 'Construction progress' },
        note: { id: 'Tambahkan persentase progres konstruksi, foto lapangan terbaru, dan tonggak commissioning.', en: 'Add construction progress percentage, recent site photography and commissioning milestones.' },
      },
    ],
  },
  {
    slug: 'industrial-park',
    no: '05',
    code: 'SMA',
    entity: 'PT Stargate Mineral Asia',
    name: { id: 'Kawasan Industri Konawe Utara ASPIRE Stargate', en: 'Konawe Utara ASPIRE Stargate Industrial Park' },
    stage: { id: 'Kawasan industri', en: 'Industrial park' },
    status: 'construction',
    summary: {
      id: 'Gerbang menuju deposit nikel terbesar Konawe Utara: lahan industri, pelabuhan laut dalam di Teluk Matarape, dan rencana induk oleh MottMac.',
      en: 'The gate to North Konawe’s largest nickel deposit: industrial land, a deep-water port on Matarape Bay and a MottMac master plan.',
    },
    image: { src: aerial, alt: { id: 'Foto udara area tambang dan jeti Stargate di tepi Teluk Matarape', en: 'Aerial view of the Stargate mine area and jetty on Matarape Bay' } },
    map: { x: 250, y: 470 },
    blocks: [
      {
        kind: 'text',
        title: { id: 'Ikhtisar', en: 'Overview' },
        body: {
          id: [
            'Lahan paling strategis dan sesuai untuk kawasan industri di wilayah kaya nikel ini berada di dalam konsesi Stargate.',
            'Keunggulan Stargate bukan hanya depositnya, tetapi lokasinya. Sesuai namanya, Stargate adalah gerbang menuju deposit nikel terbesar Konawe Utara. Pasokan bijih dari deposit sekitar memiliki biaya angkut rendah melalui jalan darat.',
            'Terletak di jantung Teluk Matarape, pelabuhan Stargate memiliki kedalaman air yang cukup dan area labuh yang aman untuk kapal besar. Sebagai satu-satunya pemilik lahan yang sesuai untuk pabrik berskala besar, Stargate berpeluang menjadi pusat pengolahan nikel terdepan di kawasan ini.',
          ],
          en: [
            'The most strategic and suitable land for an industrial area in the surrounding nickel-rich region is located in Stargate’s concession.',
            'Stargate’s advantage is not its nickel deposit. It is its location: worthy of its name, Stargate is the gate to North Konawe’s largest nickel deposit. Ore supply from the surrounding deposits has low transportation cost over land roads.',
            'Located in the heart of Matarape Bay, Stargate’s port has sufficient water depth and safe anchorage to accommodate large ships. Being the only one with suitable land for sizeable industrial plants, Stargate has the competitive edge to become the leading nickel processing centre in the region.',
          ],
        },
      },
      {
        kind: 'list',
        title: { id: 'Rencana induk (MottMac)', en: 'Master plan (MottMac)' },
        items: {
          id: [
            'Jeti dan pelabuhan: Pelabuhan Molore dan Lameruru, saling terhubung, melayani kapal kargo curah, kapal kontainer, kapal LNG, serta tug dan tongkang',
            'Infrastruktur air: pengolahan air bersih dan pasokan air ke pabrik pengolahan',
            'Pengolahan limbah industri dan air limbah',
            'Gedung kantor pengelola kawasan industri',
            'Stasiun pemadam kebakaran dan tanggap darurat',
            'Area pendukung: bengkel, jasa rekayasa, pabrik kecil',
            'Pusat bisnis di luar gerbang utama kawasan',
            'Kamp dan kota hunian: hunian manajer dan pekerja, hotel, pertokoan',
            'Jalan kawasan industri, telekomunikasi serat optik dan BTS, jaringan distribusi listrik, air minum, air limbah, drainase, dan jaringan gas (akan dikonfirmasi)',
            'Lokasi pembangkit listrik LNG 450 MW dan gardu induk',
            'Pabrik utama: RKEF 4x33 MW; Ni-matte dan NiSO4 atmospheric leaching; HPAL hidrometalurgi 30.000 tpa',
          ],
          en: [
            'Jetty and port: Molore Port and Lameruru Port, interconnected, serving bulk cargo ships, container ships, LNG ships, tugs and barges',
            'Water infrastructure: clean-water treatment and supply to the processing plants',
            'Industrial waste and used-water treatment',
            'Office buildings for industrial park management',
            'Fire-fighting and emergency stations',
            'Supporting facilities: workshops, engineering services, small factories',
            'Business centre outside the main gate of the park',
            'Camp and townsite: residential lodging for managers and workers, hotel, shops',
            'Industrial-zone roads, fibre-optic and BTS telecommunication, power distribution, potable water, waste water and sewerage, drainage, and gas distribution (to be confirmed)',
            'A 450 MW LNG power plant location and substations',
            'Main plants: 4x33 MW RKEF; Ni-matte and NiSO4 atmospheric leaching; 30,000 tpa HPAL hydrometallurgy',
          ],
        },
      },
      {
        kind: 'tbd',
        title: { id: 'Peta tata letak kawasan', en: 'Park layout plan' },
        note: { id: 'Tambahkan peta tata letak rencana induk yang disetujui dan luas kawasan.', en: 'Add the approved master-plan layout drawing and park area.' },
      },
    ],
  },
  {
    slug: 'battery-materials',
    no: '06',
    code: 'II·III',
    entity: 'ASPIRE Stargate',
    name: { id: 'Bahan Baterai Nikel Terbarukan', en: 'Renewable Nickel Battery Materials' },
    stage: { id: 'Tahap II & III', en: 'Phase II & III' },
    status: 'planned',
    summary: {
      id: 'Ni-matte, NiSO4, dan HPAL dengan listrik dari jaringan PLN serta investasi surya dan angin.',
      en: 'Ni-matte, NiSO4 and HPAL, powered from the PLN grid and solar and wind investments.',
    },
    map: { x: 180, y: 360 },
    blocks: [
      {
        kind: 'text',
        title: { id: 'Menuju bahan baterai nikel “hijau”', en: 'Achieving renewable “green” nickel battery materials' },
        body: {
          id: [
            'Terkait perubahan iklim, kami memosisikan diri untuk berkontribusi mencapai emisi karbon dioksida nol bersih. Strategi kami bekerja sama dengan PLN membangun jaringan transmisi yang menghubungkan Kawasan Industri Konawe Utara ASPIRE Stargate ke jaringan nasional Sulawesi membuka peluang luas untuk berinvestasi di energi terbarukan di lokasi lain di Sulawesi.',
          ],
          en: [
            'With respect to climate change, we have positioned ourselves to contribute to achieving net-zero carbon dioxide emissions. Our strategy to cooperate with PLN and build a transmission line connecting the Konawe Utara ASPIRE Stargate Industrial Park to the Sulawesi National Grid opens vast possibilities to invest in renewable energy elsewhere in Sulawesi.',
          ],
        },
      },
      {
        kind: 'list',
        title: { id: 'Tahap II', en: 'Phase II' },
        items: {
          id: ['Pabrik pengolahan Ni-matte dan NiSO4', 'Peningkatan infrastruktur kawasan: jalan utama, jeti, dan pelabuhan laut', 'Investasi ladang surya'],
          en: ['Ni-matte processing plant and NiSO4 processing plant', 'Industrial park infrastructure upgrades: main roads, jetties and seaports', 'Solar farm investments'],
        },
      },
      {
        kind: 'list',
        title: { id: 'Tahap III', en: 'Phase III' },
        items: {
          id: ['Pengolahan hidrometalurgi HPAL 20–30 ktpa sedang dipertimbangkan', 'Perluasan investasi ladang surya', 'Investasi ladang angin'],
          en: ['20–30 ktpa HPAL hydrometallurgy processing is being considered', 'Expansion of solar farm investments', 'Wind farm investments'],
        },
      },
    ],
  },
];

export const statusOrder: Status[] = ['operating', 'construction', 'exploration', 'planned'];
