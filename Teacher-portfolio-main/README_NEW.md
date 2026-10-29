# E-Portfolio PPG Prajabatan Informatika 2026

Selamat datang di E-Portfolio profesional untuk Program Pendidikan Guru (PPG) Prajabatan Informatika Universitas Islam Makassar.

## 📋 Isi Portfolio

Portfolio ini mencakup 8 bagian utama:

1. **HOME** - Halaman penyambutan dengan profil singkat
2. **PROFIL** - Identitas, latar belakang, motivasi, dan filosofi pendidikan
3. **PRAKTIK** - Dokumentasi 3 siklus praktik mengajar dengan perbaikan berkelanjutan
4. **ARTEFAK** - Koleksi pembelajaran termasuk RPP, media, LKPD, video, dan dokumentasi
5. **PENILAIAN** - Tabel penilaian Guru Pamong & Dosen Pembimbing dengan grafik perkembangan
6. **REFLEKSI** - Analisis pengalaman praktik dan pembelajaran utama
7. **VISI** - Model guru yang dituju dan framework pembelajaran abad 21
8. **PENUTUP** - Kesimpulan dan komitmen ke depan

## 🚀 Cara Menggunakan

### Langkah 1: Mengganti File Lama dengan File Baru

Portfolio ini telah diupdate dengan 3 file baru yang perlu menggantikan file lama:

**File Baru:**
- `index_new.html` → menggantikan `index.html`
- `css/style_new.css` → menggantikan `css/style.css`
- `js/script_new.js` → menggantikan `js/script.js`

**Cara mengganti:**

1. **Backup file lama (opsional):**
   ```
   Rename atau copy file lama dengan suffix "_backup"
   Contoh: index_backup.html, style_backup.css, script_backup.js
   ```

2. **Ganti nama file baru:**
   - Rename `index_new.html` → `index.html`
   - Rename `css/style_new.css` → `css/style.css`
   - Rename `js/script_new.js` → `js/script.js`

3. **Hapus file lama (jika sudah tidak perlu):**
   ```
   Delete: index_backup.html, style_backup.css, script_backup.js
   Delete: css/owl.carousel.css (tidak perlu lagi)
   Delete: css/owl.theme.default.min.css (tidak perlu lagi)
   Delete: js/jquery.js (tidak perlu lagi)
   Delete: js/Jquery3.4.1.min.js (tidak perlu lagi)
   Delete: js/owl.carousel.js (tidak perlu lagi)
   ```

### Langkah 2: Membuka Portfolio

1. Buka file `index.html` di browser Anda (double-click atau drag ke browser)
2. Portfolio akan terbuka dengan desain modern dan responsif

### Langkah 3: Personalisasi Portfolio

Edit file `index.html` untuk menambahkan konten personal Anda:

**Bagian yang perlu disesuaikan:**

#### A. DATA PRIBADI (HERO SECTION)
```html
<p class="intro-subtitle">PPG Prajabatan Informatika Gelombang 1 2026</p>
<h1 class="intro-title">Andi Khozin Mubarak, S.Kom</h1>
<p class="intro-nim">NIM: 25086085004</p>
<p class="intro-inst">Universitas Islam Makassar</p>
```

#### B. FOTO PROFIL
```html
<img src="image/me.png" alt="Andi Khozin Mubarak" class="profile-image" loading="lazy">
```
Ganti `image/me.png` dengan path foto Anda

#### C. KONTEN PROFIL, PRAKTIK, ARTEFAK
- Sesuaikan teks di setiap section
- Tambahkan data artefak pembelajaran Anda
- Update tabel penilaian dengan nilai Anda

## 🎨 Fitur-Fitur

✨ **Fitur Interaktif:**
- ☀️ Dark Mode / Light Mode toggle (disimpan di localStorage)
- 🎯 Navbar aktif sesuai scroll position
- 📱 Menu hamburger responsif untuk mobile
- 🎬 Smooth scroll navigation
- ⬆️ Back-to-top button
- 🔍 Filter artefak berdasarkan kategori
- 📊 Animasi progress bar
- 🎨 Scroll-reveal animations

## 📱 Responsivitas

Portfolio ini fully responsive untuk:
- 📱 **Mobile** (< 512px)
- 📱 **Tablet** (512px - 768px)
- 🖥️ **Desktop** (> 768px)

## 🎨 Desain System

### Warna Utama
- **Primary Green** (#10B981) - Warna utama
- **Secondary Blue** (#0EA5E9) - Warna sekunder
- **Accent Amber** (#F59E0B) - Warna aksen

### Typography
- **Font:** Poppins (dari Google Fonts)
- **Headings:** 700 weight
- **Body:** 400-500 weight

### Komponen
- **Cards** dengan hover effects
- **Buttons** dengan multiple variants
- **Progress bars** dengan animasi
- **Timeline** untuk refleksi
- **Tables** untuk penilaian
- **Badges** untuk kategori

## 📂 Struktur File

```
Teacher-portfolio-main/
├── index.html              ← Main HTML file
├── css/
│   ├── style.css          ← Main CSS file
│   ├── owl.carousel.css    ← (Bisa dihapus)
│   └── owl.theme.default.min.css  ← (Bisa dihapus)
├── js/
│   ├── script.js          ← Main JavaScript file
│   ├── jquery.js          ← (Bisa dihapus)
│   ├── Jquery3.4.1.min.js ← (Bisa dihapus)
│   └── owl.carousel.js    ← (Bisa dihapus)
├── image/
│   ├── me.png            ← Foto profil Anda
│   ├── uim.png           ← Logo UIM
│   └── ppg_uim.png       ← Logo PPG
├── README.md             ← File ini
└── [Additional assets as needed]
```

## 🔧 Customization

### Mengubah Warna

Edit CSS variables di `css/style.css`:

```css
:root {
  --primary: #10B981;      /* Ubah warna hijau utama */
  --secondary: #0EA5E9;    /* Ubah warna biru */
  --accent: #F59E0B;       /* Ubah warna kuning */
}
```

### Mengubah Font

Di bagian `:root`:

```css
--font-primary: 'Nama Font Baru', sans-serif;
```

### Mengubah Spacing/Ukuran

Sesuaikan CSS variables untuk spacing dan ukuran teks.

## 🔐 Keamanan

- Tidak ada data sensitif yang disimpan di localStorage
- Hanya tema preference yang disimpan
- Portfolio bersifat client-side, tidak memerlukan backend

## ⚙️ Browser Compatibility

✅ Tested dan kompatibel dengan:
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

## 📊 Optimasi Performance

- ✅ Lazy loading images
- ✅ CSS variables untuk efficient styling
- ✅ Minimal JavaScript (no jQuery dependency)
- ✅ Optimized animations
- ✅ Print-friendly styles

## 🎓 Bagaimana Menggunakan Portfolio Ini untuk Penilaian

1. **Persiapan:**
   - Sesuaikan semua konten personal
   - Tambahkan artefak pembelajaran Anda
   - Update penilaian dengan nilai sebenarnya

2. **Untuk Presentasi:**
   - Buka di projector/screen
   - Gunakan smooth navigation untuk highlight points
   - Dark mode tersedia untuk kondisi pencahayaan berbeda

3. **Untuk Sharing:**
   - Bisa di-upload ke hosting (GitHub Pages, Netlify, dll)
   - Bisa di-export sebagai PDF (Print → Save as PDF)
   - Bisa di-share sebagai file HTML

## 📝 Tips Pengembangan

1. **Tambah Artefak Baru:**
   - Copy struktur `.artefak-card` di HTML
   - Tambahkan `data-category` yang sesuai
   - JavaScript akan otomatis melakukan filter

2. **Tambah Section Baru:**
   - Tambah `<section class="section" id="nama-section">`
   - Update navbar links
   - Script akan otomatis mendeteksi untuk active state

3. **Update Penilaian:**
   - Edit tabel di section penilaian
   - Update nilai dan progress bars
   - Animasi akan trigger otomatis saat scroll

## 🐛 Troubleshooting

**Q: Dark mode tidak tersimpan?**
A: Pastikan localStorage tidak disabled di browser settings

**Q: Images tidak tampil?**
A: Pastikan path image benar, gunakan relative path dari folder portfolio

**Q: Menu hamburger tidak responsive?**
A: Clear browser cache (Ctrl+Shift+Delete) dan refresh halaman

**Q: Scroll animation tidak berjalan?**
A: Pastikan JavaScript file dimuat dengan benar, check browser console

## 📞 Support

Untuk pertanyaan atau feedback tentang portfolio:
1. Check browser console untuk error messages
2. Pastikan semua file CSS dan JS ter-load (Network tab)
3. Coba clear cache dan refresh

## 📄 Lisensi

Portfolio ini dibuat untuk keperluan akademik PPG Prajabatan Informatika.

## 👨‍🎓 Data Pembuat

**Nama:** Andi Khozin Mubarak, S.Kom
**NIM:** 25086085004
**Program:** PPG Prajabatan Informatika Gelombang 1 2026
**Universitas:** Universitas Islam Makassar
**Tahun:** 2026

---

## 🚀 Next Steps

1. ✅ Ganti nama file (`index_new.html` → `index.html`, dll)
2. 📝 Edit konten untuk personalisasi
3. 📷 Update foto profil
4. 📊 Tambah artefak pembelajaran Anda
5. 🎨 Customize warna jika diperlukan
6. ✨ Test di berbagai device dan browser
7. 📤 Share atau upload ke web hosting

---

**Dibuat dengan ❤️ untuk mendukung perjalanan Anda menjadi guru yang inspiratif.**

*Semoga portfolio ini membantu Anda dalam mempresentasikan perjalanan pembelajaran dan perkembangan profesional Anda.*

Makassar, Mei 2026
