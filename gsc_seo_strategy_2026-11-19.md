# Catatan Perubahan SEO: Alasan dan Data (19 November 2026)

**Properti**: `sc-domain:orangutanadventuresumatra.com` (GSC) dan `https://orangutanadventuresumatra.com/` (Bing Webmaster Tools)
**Sumber data**: GSC lewat MCP (data tersedia 27 Mei – 17 Nov 2026), URL Inspection API untuk seluruh 150 URL sitemap, Bing Webmaster API (data mulai 1 Okt 2026), dan crawl live 155 URL pada 19 Nov 2026.
**Commit terkait**: `c98b836` (noindex zh/id, lang, judul, link internal) dan commit berikutnya yang membawa catatan ini (konsolidasi "Sumatra orangutan tours").

Catatan ini menjelaskan **kenapa** setiap perubahan dibuat, supaya keputusan berikutnya bisa diukur, bukan ditebak.

---

## 1. Kondisi situs: 6 bulan data GSC

| Bulan | Klik | Impresi | Impresi/hari | Posisi rata-rata | Impresi non-brand | Posisi non-brand |
|---|---|---|---|---|---|---|
| Jun | 68 | 861 | 29 | 12,8 | 276 | 28 |
| Jul | 40 | 1.820 | 59 | 13,0 | 706 | 19 |
| **Agu** | 66 | **2.727** | **88** | 16,0 | **1.184** | 21 |
| Sep | 79 | 1.452 | 48 | 15,7 | 476 | 34 |
| Okt | 36 | 1.034 | 33 | 19,1 | 318 | 34 |
| Nov (1–17) | 37 | 931 | 55 | 20,1 | 314 | 40 |

Poin penting:

- **Hampir semua klik berasal dari pencarian nama brand.** Dalam 6 bulan, query non-brand yang terlihat di GSC cuma menghasilkan sekitar 19 klik. Query "orangutan adventure sumatra" saja menyumbang 110 dari 337 klik, dan 61% klik berasal dari Indonesia.
- **Puncak traffic di Agustus, lalu turun sejak akhir Agustus.** Posisi non-brand memburuk dari 19 (Jul) ke 40 (Nov). Dua minggu terakhir (2–15 Nov) impresi naik lagi ke 346 dan 408 per minggu, tanda pemulihan pertama sejak Agustus.
- **Google hanya meng-index 28 dari 150 URL sitemap (19%).** 86 URL berstatus "Discovered – currently not indexed" dan 34 URL "unknown to Google". Halaman trek: hanya 1 dari 66 yang ter-index. Bing meng-index 145 URL, jadi masalahnya spesifik di Google.
- **Backlink eksternal: 0** (Bing backlinks dan `AnchorCount` bernilai 0). Ini kemungkinan besar alasan utama Google pelit meng-crawl situs ini.

---

## 2. Perubahan di commit `c98b836`

### 2.1 Halaman produk zh/id dibuat `noindex, follow` dan dikeluarkan dari sitemap

**Apa:** halaman trek, booking, treks index, dan essential-information untuk locale `zh` dan `id` (28 URL). Sitemap turun dari 151 jadi 123 URL. hreflang di halaman produk sekarang hanya en/de/fr/nl + x-default. Homepage dan blog zh/id tetap di-index. Logikanya ada di `productPageLocales` di `app/seo.ts`.

**Kenapa:**
- Semua halaman ini berstatus "Discovered – not indexed" atau "unknown" di Google, dengan 0 impresi di GSC dan hanya 1 impresi di Bing selama 6 minggu.
- Halaman trek rata-rata cuma sekitar 300 kata, sementara blog sekitar 1.000 kata. Ekspansi 6 bahasa pada 15 Okt menambah ~100 URL tipis sekaligus.
- Memotong URL yang tidak bernilai membantu Google fokus meng-crawl versi en/de/fr/nl yang sudah punya impresi.
- Homepage dan blog zh tetap dipertahankan karena mendapat traffic dari Bing lewat query bahasa Mandarin.

**Kapan dibalik:** kalau konten zh/id sudah lebih dalam, tambahkan locale-nya ke `productPageLocales`.

### 2.2 Atribut `lang` untuk zh dan id

**Apa:** script di `app/layout.tsx` sekarang membaca daftar `locales`, tidak lagi hardcode `de|fr|nl`.

**Kenapa:** sejak zh dan id ditambahkan, kedua locale itu tetap ber-`lang="en"` bahkan setelah JS jalan. Hasilnya sinyal bahasa bertabrakan dengan header `Content-Language` dan hreflang.

**Batasan:** HTML dari server masih `lang="en"`. Google tidak memakai atribut ini, dan Bing sudah membaca header. Perbaikan di level server perlu root layout dipecah per locale (refactor besar, belum dikerjakan).

### 2.3 Title dan deskripsi `/fr`, plus judul trek yang belum diterjemahkan

**Apa:**
- Title `/fr` jadi "Trek Orang-Outan Sumatra à Bukit Lawang | Dès 55 €" (50 karakter, sebelumnya 69).
- Judul Bat Cave dan Village Tour diterjemahkan untuk de, fr, dan nl.

**Kenapa:**
- Impresi `/fr` turun dari 222 ke 134 dan posisinya dari 9,5 ke 30,6 (28 hari ke 17 Nov dibanding 28 hari sebelumnya).
- Title lama menarget "aventure éducative…", yang dalam 2 bulan menghasilkan 0 klik. Query FR yang benar-benar dicari adalah "orang outan sumatra" dan "trek orang outan sumatra".
- Title lama juga terpotong di hasil pencarian.
- Judul trek bahasa Inggris di halaman de/fr/nl membuat halaman itu terlihat seperti duplikat versi EN.

### 2.4 Link internal dari blog best-time ke halaman trek

**Apa:** `/blog/best-time-to-visit-bukit-lawang-from-europe` sekarang punya link ke `/treks/4-hour`, `/treks/1-day`, `/treks/2-day`, `/treks/3-day`, dan landing page 3-day.

**Kenapa:** halaman ini pemenang terbesar periode terakhir: impresi naik dari 5 ke 181, posisi 5,7, dan posisi 7 untuk "best time to see orangutans in sumatra". Halaman yang sudah ter-index dan kuat adalah jalur tercepat agar Google menemukan halaman trek yang belum pernah di-crawl.

---

## 3. Perubahan di commit ini: konsolidasi "Sumatra orangutan tours"

### 3.1 Heading perbandingan di `/sumatra-orangutan-tour` memakai frasa itu lagi

**Apa:** H2 tabel perbandingan diubah dari "Compare the main Sumatra orangutan trek options" menjadi "Compare Sumatra orangutan tours by length and price".

### 3.2 Frasa "Sumatra orangutan tour(s)" dihapus dari topik homepage

**Apa:** dua frasa ini dihapus dari `coreSearchPhrases` di `app/seo.ts`, yang dipakai untuk `knowsAbout` dan `keywords` di JSON-LD homepage (12 kemunculan). Link homepage ke landing page dengan teks "Sumatra orangutan tours & prices" **tetap dipertahankan**, karena justru memperkuat landing page.

**Kenapa (3.1 dan 3.2):** ini query non-brand terbesar yang pernah dimiliki situs (627 impresi). Riwayatnya di GSC:

| Bulan | Halaman yang ranking | Posisi | Impresi |
|---|---|---|---|
| Jul | `/` (homepage) | 4,8 | 123 |
| Agu | `/sumatra-orangutan-tour` | 12,0 | 324 |
| Sep | `/` dan landing | 17–43 | ~37 |
| Okt | landing dan `/` | 19–41 | ~25 |
| Nov | `/sumatra-orangutan-tour` | 31–46 | ~32 |

- Google berpindah-pindah antara dua halaman milik sendiri untuk query yang sama, lalu keduanya jatuh.
- Commit 14 Agu (`97b736c`) menghapus heading "Compare Sumatra orangutan tours from Bukit Lawang" dari landing page.
- Tujuan perubahan ini: memberi Google satu jawaban yang jelas. Landing page adalah target untuk "Sumatra orangutan tours", sedangkan homepage untuk brand dan "Bukit Lawang orangutan trekking" (sesuai H1 homepage).

**Yang belum terbukti:** penurunan September juga terjadi di hampir semua query non-brand, bukan cuma query ini. Bisa jadi ada faktor lain, misalnya update algoritma Google atau musim. Konsolidasi ini perbaikan berisiko rendah untuk penyebab yang paling terlihat, bukan jaminan pemulihan.

---

## 4. Yang sengaja TIDAK diubah

- **Title homepage.** Sudah 4 kali diganti sejak Juni:
  - 28 Jun: "Bukit Lawang Orangutan Trekking | Orangutan Adventure Sumatra"
  - 6 Jul: "Bukit Lawang Orangutan Trekking | Local Guide"
  - 21 Jul: "Orangutan Adventure Sumatra | Bukit Lawang Trekking"
  - 17 Sep: "Orangutan Adventure Sumatra | Ethical Bukit Lawang Trekking"

  Setiap penggantian mereset cara Google membaca halaman dan membuat dampaknya tidak bisa diukur. **Biarkan stabil minimal sampai pertengahan Januari 2027.**
- **Pilihan URL utama untuk trek 3 hari.** Saat ini ada 3 halaman untuk intent yang sama: `/3-day-bukit-lawang-orangutan-trek` (ter-index, posisi 61), `/treks/3-day-jungle-trek` (belum di-crawl), dan blog itinerary (posisi 16). Perlu keputusan pemilik sebelum ada 301 atau canonical, karena menyangkut hreflang halaman trek.
- **Menggabungkan paket private-N-day ke N-day.** Ini keputusan produk (harga dan layanan berbeda).

---

## 5. Aksi di luar kode yang sudah dilakukan (19 Nov 2026)

- **Sitemap di-submit ulang ke GSC.** Google langsung mengunduhnya (123 URL, 0 error).
- **Sitemap di-submit ulang ke Bing.** Status Success, 123 URL.
- **21 URL prioritas dikirim ke antrean crawl Bing** lewat `submit_urls`.
- **Google Indexing API dicek, tidak dipakai.** API ini belum aktif di project service account, dan Google resmi membatasinya untuk halaman lowongan kerja (JobPosting) dan siaran langsung (BroadcastEvent).

## 6. Yang masih perlu dilakukan manual

1. **Request Indexing di GSC** (hanya lewat UI), sekitar 10 per hari:
   - `/treks/3-day-jungle-trek`
   - `/treks/2-day-jungle-trek`
   - `/treks/1-day-jungle-trek`
   - `/blog/medan-airport-to-bukit-lawang-transport-options` (masih "unknown to Google" padahal halaman teratas di Bing)
   - `/blog/sumatra-orangutan-trekking-cost-price-guide-2026`
   - `/de/treks/3-day-jungle-trek`, `/fr/treks/3-day-jungle-trek`
2. **Backlink.** Mulai dari Google Business Profile, TripAdvisor, direktori wisata Bukit Lawang/Sumatra Utara, dan mitra konservasi. Tanpa sinyal dari luar, Google akan tetap pelit meng-crawl.
3. **Error crawl Bing.** Ada lonjakan 26/30/14 error pada 1–3 Nov. API tidak memberi detail, jadi perlu dicek di UI Bing Webmaster Tools.

## 7. Cara mengukur dan jadwal cek

| Tanggal cek | Yang dilihat | Target |
|---|---|---|
| ~26 Nov 2026 | URL Inspection halaman trek EN: `lastCrawlTime` terisi | Halaman trek mulai di-crawl Google |
| ~3 Des 2026 | Jumlah URL ter-index (inspect seluruh sitemap) | Naik dari 28/150 ke >40/123 |
| ~17 Des 2026 | GSC 28 hari vs 28 hari sebelumnya | Posisi non-brand di bawah 30; "sumatra orangutan tours" kembali ke 2 halaman pertama (posisi <20) di satu URL saja (`/sumatra-orangutan-tour`) |
| ~17 Des 2026 | Impresi locale de dan fr | de tetap tumbuh; fr berhenti turun |

Script analisis yang dipakai (`mcpcall.mjs`, `summarize.mjs`, `year_report.mjs`) ada di folder scratch sesi Claude Code dan tidak ikut di-commit.
