# Panduan Domain, Hosting, dan VPS

## 1. Domain

Domain adalah alamat/nama website (contoh: `namakamu.com`) yang menggantikan alamat IP server yang sulit diingat.

**Kapan wajib:**
- Website atau layanan yang diakses publik lewat browser
- Butuh SSL/HTTPS (SSL certificate butuh domain untuk validasi, tidak bisa langsung dipasang di IP polos)
- Mau branding yang mudah diingat (client-facing, portfolio, dsb)

**Kapan tidak wajib:**
- Layanan yang diakses lewat aplikasi pihak ketiga seperti bot Telegram/Discord/WhatsApp
- Dashboard internal yang cukup diakses lewat IP + port

**Kisaran harga:**
| Ekstensi | Harga/tahun |
|---|---|
| .com / .net | ~$10-15 (~Rp160.000-250.000) |
| .id | ~Rp200.000-300.000 |

Bisa dibeli di Niagahoster, Namecheap, Cloudflare, atau langsung dari provider hosting saat beli paket (kadang termasuk gratis 1 tahun).

---

## 2. Hosting (Shared Hosting)

Shared hosting adalah layanan menyimpan file website di server yang **dipakai bersama banyak user lain**, dengan resource (CPU, RAM, storage) dibagi rata dan tanpa isolasi penuh antar akun.

**Karakteristik:**
- Pakai control panel (cPanel/DirectAdmin), tinggal klik-klik, tanpa setup manual
- Software/stack terbatas sesuai yang disediakan provider
- Kalau user lain di server yang sama "boros" resource, situs kamu bisa ikut lemot (noisy neighbor)
- Harga umum: Rp15.000 - Rp50.000/bulan tergantung provider

**Cocok untuk:**
- Website statis, company profile, portfolio
- WordPress skala kecil-menengah
- Landing page

**Kapan upgrade ke VPS:**
- Trafik mulai tinggi dan shared hosting kerasa lemot
- Butuh install software/stack custom (Node.js app, database khusus, dll)
- Perlu isolasi resource penuh

---

## 3. VPS (Virtual Private Server)

VPS adalah hasil pembagian **satu server fisik** menjadi beberapa server virtual yang terisolasi lewat teknologi virtualisasi (hypervisor). Beda dari shared hosting, tiap VPS punya:

- OS sendiri
- Resource (CPU/RAM) yang dialokasikan khusus, tidak saling ganggu
- Akses root penuh — bisa install apa saja (Node.js, PostgreSQL, Docker, custom stack, dll)

**Diagram konsep:**
```
Server Fisik
   ├── Shared Hosting → dipecah jadi akun-akun tanpa isolasi penuh
   └── VPS → dipecah jadi virtual machine terisolasi (via hypervisor)
```

**Trade-off vs shared hosting:**
- Lebih mahal
- Butuh setup manual (server config, security, firewall) kecuali pakai managed VPS
- Jauh lebih fleksibel dan scalable

**Cocok untuk:**
- Aplikasi custom, API
- AI agent self-hosted (Hermes Agent, OpenClaw, dll)
- Project yang butuh environment spesifik

---

## 4. Jenis-Jenis VPS: Perbandingan Harga & Spek

Kurs acuan: 1 USD ≈ Rp17.600, 1 EUR ≈ Rp20.400 (kurs September 2026, bisa berubah).

| Provider | vCPU | RAM | Storage | Harga asli/bln | IDR | USD | EUR |
|---|---|---|---|---|---|---|---|
| Hostinger KVM1 | 1 | 4 GB | 50 GB NVMe | Rp116.900 | Rp116.900 | ~$6.64 | ~€5.73 |
| Hostinger KVM2 | 2 | 8 GB | 100 GB NVMe | Rp155.900 | Rp155.900 | ~$8.86 | ~€7.64 |
| Hetzner CX22 | 2 | 4 GB | 40 GB NVMe | €7.99 | ~Rp163.000 | ~$9.24 | €7.99 |
| Hetzner CX32 | 4 | 8 GB | 80 GB NVMe | ~€6.80-13 | ~Rp139.000-265.000 | ~$7.90-15 | €6.80-13 |
| Contabo Cloud VPS | 4 | 8 GB | 200 GB NVMe | €4.50 | ~Rp91.800 | ~$5.20 | €4.50 |
| DigitalOcean entry | 1 | 1 GB | 25 GB SSD | $4.00 | ~Rp70.400 | $4.00 | ~€3.53 |

### Catatan per provider

**Hostinger**
- One-click deploy untuk aplikasi populer (termasuk AI agent seperti Hermes Agent/OpenClaw)
- Support 24/7
- Lokasi data center terdekat: Singapura (~38ms dari Indonesia)
- Harga naik saat perpanjangan (contoh: KVM1 jadi Rp193.900/bln setelah periode diskon)

**Hetzner**
- Price-per-spek terbaik secara global untuk pasar Eropa/US
- **Tidak ada data center di Asia** — hanya Jerman, Finlandia, dan Amerika Serikat
- Latency ke Indonesia tinggi (150-250ms+), kurang ideal untuk aplikasi yang butuh respons cepat
- Tidak ada SLA uptime formal, ekosistem managed service terbatas
- Ada penyesuaian harga per 1 April 2026 (CX22 naik dari €5.99 ke €7.99)

**Contabo**
- Resource per harga paling besar di kelasnya (storage 200GB di entry tier)
- Ada data center Singapura — cocok untuk latency ke Indonesia
- Risiko noisy neighbor (CPU steal, IOPS di bawah ekspektasi saat server ramai)
- Support hanya lewat ticket, respons 24-72 jam
- Direkomendasikan untuk dev/staging atau project personal, bukan production dengan SLA ketat

**DigitalOcean**
- Dokumentasi dan kualitas support dinilai terbaik dibanding kompetitor budget
- Ada data center Singapura
- Spek entry-level kecil untuk harganya dibanding Contabo/Hetzner

---

## 5. Rekomendasi untuk Indonesia

Karena latensi ke server sangat berpengaruh untuk pengalaman pengguna, provider dengan data center **Singapura** jadi prioritas: Hostinger, Contabo, dan DigitalOcean. Hetzner meski murah dan speknya bagus, kurang ideal karena tidak punya data center di Asia.

- **Spek terbaik per harga + latency rendah** → Contabo Cloud VPS (Singapura)
- **Kemudahan setup + support responsif** → Hostinger (one-click deploy, Singapura)
- **Dokumentasi & reliabilitas terbaik** → DigitalOcean (Singapura), meski spek entry-nya lebih kecil
