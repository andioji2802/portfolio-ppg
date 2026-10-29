# 🔧 PANDUAN PENGGANTIAN FILE

## Ringkas: File Baru Sudah Siap! ✅

Saya telah membuat 3 file portfolio baru yang profesional dan modern. Sekarang tinggal mengganti file lama dengan file baru.

---

## 📋 DAFTAR FILE BARU

| File Lama | → | File Baru | Fungsi |
|-----------|---|-----------|--------|
| `index.html` | → | `index_new.html` | Struktur HTML semantic |
| `css/style.css` | → | `css/style_new.css` | Styling modern & responsive |
| `js/script.js` | → | `js/script_new.js` | Interaktivitas penuh |

---

## 🎯 LANGKAH PENGGANTIAN (Copy-Paste Method)

### **Cara Tercepat: File Explorer**

1. **Buka File Explorer** (Windows: Win+E)

2. **Navigasi ke folder:**
   ```
   Documents\PPG PRAJABATAN\PPL SMK TELKOM\Teacher-portfolio-main
   ```

3. **Untuk index.html:**
   - Klik kanan `index.html` lama → **Rename** → `index_backup.html`
   - Klik kanan `index_new.html` → **Rename** → `index.html`

4. **Untuk CSS:**
   - Klik kanan `css/style.css` lama → **Rename** → `style_backup.css`
   - Klik kanan `css/style_new.css` → **Rename** → `style.css`

5. **Untuk JavaScript:**
   - Klik kanan `js/script.js` lama (jika ada) → **Rename** → `script_backup.js`
   - Klik kanan `js/script_new.js` → **Rename** → `script.js`

6. **Selesai!** ✅

---

## 🗑️ BERSIHKAN FILE LAMA (Opsional)

File-file ini bisa dihapus karena tidak lagi digunakan:

```
❌ index_backup.html       (backup file lama)
❌ style_backup.css        (backup file lama)
❌ script_backup.js        (backup file lama)
❌ css/owl.carousel.css    (tidak lagi digunakan)
❌ css/owl.theme.default.min.css
❌ js/jquery.js            (tidak lagi digunakan)
❌ js/Jquery3.4.1.min.js
❌ js/owl.carousel.js
```

---

## ✨ FITUR-FITUR BARU

Setelah mengganti file, portfolio Anda akan memiliki:

✅ **Desain Modern:**
- Tema akademik profesional
- Warna hijau elegan + biru + aksen kuning
- Glassmorphism effects
- Smooth animations

✅ **Interaktivitas Penuh:**
- 🌙 Dark mode / Light mode toggle (terus aktif)
- 🎯 Navbar otomatis highlight sesuai scroll
- 📱 Menu hamburger untuk mobile
- ⬆️ Tombol back-to-top
- 🔍 Filter artefak by kategori
- 📊 Animasi progress bar
- 🎬 Scroll animations otomatis

✅ **Responsif Sempurna:**
- Mobile (< 512px)
- Tablet (512px - 768px)
- Desktop (> 768px)

✅ **Tanpa jQuery:**
- Hanya vanilla JavaScript
- Loading lebih cepat
- Tidak perlu library eksternal

---

## 🚀 SETELAH PENGGANTIAN FILE

### 1️⃣ Test Portfolio

```
Buka: index.html di browser
```

**Pastikan:**
- ✅ Navbar muncul dengan benar
- ✅ Hamburger menu muncul di mobile
- ✅ Smooth scroll bekerja
- ✅ Dark mode toggle berfungsi
- ✅ Filter artefak bekerja
- ✅ Semua section visible

### 2️⃣ Personalisasi Konten

Edit `index.html` untuk:
- Nama: Andi Khozin Mubarak, S.Kom
- NIM: 25086085004
- Universitas: Universitas Islam Makassar
- Foto profil: `image/me.png`
- Semua konten teks

### 3️⃣ Tambah Artefak Anda

Di section ARTEFAK, tambahkan artefak pembelajaran Anda:
- RPP & Modul
- Media pembelajaran
- LKPD & Penilaian
- Video & Dokumentasi

### 4️⃣ Update Penilaian

Di section PENILAIAN, update:
- Nilai dari Guru Pamong
- Nilai dari Dosen Pembimbing
- Progress bars akan otomatis teranimar

---

## 🎨 JIKA INGIN CUSTOMIZE

### Ubah Warna

Edit `css/style.css`, cari bagian:

```css
:root {
  --primary: #10B981;      /* Hijau utama */
  --secondary: #0EA5E9;    /* Biru */
  --accent: #F59E0B;       /* Kuning */
}
```

### Ubah Font

Di section `:root`:

```css
--font-primary: 'Nama Font Baru', sans-serif;
```

---

## 📊 STRUKTUR FOLDER AKHIR

```
Teacher-portfolio-main/
├── index.html              ← Ganti nama dari index_new.html
├── css/
│   ├── style.css          ← Ganti nama dari style_new.css
│   ├── owl.carousel.css   ← (Bisa dihapus)
│   └── owl.theme.default.min.css  ← (Bisa dihapus)
├── js/
│   ├── script.js          ← Ganti nama dari script_new.js
│   ├── jquery.js          ← (Bisa dihapus)
│   ├── Jquery3.4.1.min.js ← (Bisa dihapus)
│   └── owl.carousel.js    ← (Bisa dihapus)
├── image/
│   ├── me.png
│   ├── uim.png
│   └── ppg_uim.png
├── README.md              ← Dokumentasi utama
├── README_NEW.md          ← Detail dokumentasi
└── INSTALLATION.md        ← File ini

```

---

## 🎓 SIAP UNTUK PENILAIAN

Portfolio Anda sekarang:
- ✅ Profesional dan modern
- ✅ Fully responsive
- ✅ Interaktif dan engaging
- ✅ Mudah dikustomisasi
- ✅ Siap dipresentasikan ke Guru Pamong & Dosen Pembimbing

---

## ❓ TROUBLESHOOTING

### Masalah: File tidak muncul di folder
**Solusi:** 
- Pastikan file sudah di-rename dengan benar
- Refresh file explorer (F5)
- Pastikan folder yang tepat

### Masalah: Portfolio tampil tapi styling tidak muncul
**Solusi:**
- Pastikan file CSS di-rename menjadi `style.css` (bukan `style_new.css`)
- Refresh browser dengan Ctrl+Shift+Del (clear cache)
- Check browser console untuk error

### Masalah: Menu hamburger tidak muncul di mobile
**Solusi:**
- Pastikan file JavaScript di-rename menjadi `script.js`
- Refresh page
- Test di DevTools mobile view (F12 → Toggle device toolbar)

### Masalah: Dark mode tidak tersimpan
**Solusi:**
- Pastikan localStorage tidak disabled
- Try private/incognito mode untuk test
- Check browser privacy settings

---

## 📞 RINGKASAN CEPAT

**Langkah 1:** Rename 3 file
- `index_new.html` → `index.html`
- `style_new.css` → `style.css`
- `script_new.js` → `script.js`

**Langkah 2:** Buka `index.html` di browser

**Langkah 3:** Edit konten sesuai data Anda

**Langkah 4:** Share atau presentasikan! 🎉

---

## 🎉 SELESAI!

Portfolio PPG Prajabatan Informatika Anda sudah siap!

Semoga portfolio ini membantu Anda dalam mempresentasikan perjalanan pembelajaran dan perkembangan sebagai calon guru informatika.

**Sukses untuk penilaian Anda!** 🚀

---

*Dibuat: Mei 2026*
*Untuk: Andi Khozin Mubarak, S.Kom (NIM: 25086085004)*
*Program: PPG Prajabatan Informatika Gelombang 1 2026*
*Universitas: Universitas Islam Makassar*
