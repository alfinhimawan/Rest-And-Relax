# Staycation Web Application

Staycation adalah aplikasi web responsif yang memungkinkan pengguna untuk mencari, menjelajahi, dan memesan berbagai jenis akomodasi seperti hotel, apartemen, dan rumah liburan. Platform ini menawarkan berbagai jenis properti dengan antarmuka yang interaktif dan ramah pengguna.

## Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Fitur](#fitur)
3. [Teknologi yang Digunakan](#teknologi-yang-digunakan)
4. [Instalasi](#instalasi)
5. [Penggunaan](#penggunaan)
6. [Komponen](#komponen)
7. [Kontribusi](#kontribusi)
8. [Lisensi](#lisensi)

## Pendahuluan

Staycation dirancang untuk membantu pengguna mencari dan memesan akomodasi seperti hotel, rumah liburan, atau apartemen dengan fitur-fitur khusus seperti ruang tamu yang luas atau dapur lengkap. Aplikasi ini juga menampilkan testimoni pelanggan dan menyediakan navigasi yang mudah untuk pengalaman pengguna yang lebih baik.

## Fitur

- **Desain Responsif:** Dioptimalkan untuk perangkat desktop dan mobile.
- **Kategori Akomodasi:** Jelajahi berbagai kategori seperti "Hotel dengan Ruang Tamu Besar" atau "Apartemen dengan Set Dapur."
- **Bagian Most Picked:** Menampilkan properti paling populer untuk dilihat oleh pengguna.
- **Happy Stories:** Menampilkan testimoni pelanggan untuk membangun kepercayaan dan menarik pengguna baru.
- **Navigasi yang Mulus:** Navbar yang mudah digunakan untuk akses cepat ke berbagai bagian situs.
- **Animasi Interaktif:** Efek hover dan transisi halus untuk pengalaman yang dinamis dan modern.

## Teknologi yang Digunakan

- **Frontend:**
  - **React.js** - Library JavaScript untuk membangun antarmuka pengguna.
  - **Vite.js** - Alat build yang cepat dan ringan untuk proyek React.js, menggantikan Webpack.
  - **Tailwind CSS** - Framework CSS berbasis utility-first untuk menciptakan desain responsif dan modern.
  - **Framer Motion** - Library animasi yang populer digunakan untuk transisi dan animasi interaktif.
  - **React Scroll** - Memungkinkan scrolling halus untuk navigasi antar bagian.

- **Alat Pengembangan:**
  - **VS Code** - Editor kode yang digunakan dalam proyek ini.
  - **Yarn** - Pengelola paket JavaScript yang lebih cepat dan efisien.

## Instalasi

Untuk menginstal proyek ini secara lokal, ikuti langkah-langkah berikut:

### Prasyarat

- Pastikan **Node.js** sudah terinstal di mesin Anda. Anda bisa mendownloadnya di [sini](https://nodejs.org/).
- Pastikan **Yarn** sudah terinstal. Jika belum, Anda dapat menginstalnya dengan perintah berikut:
  
  ```bash
  npm install --global yarn
  ```

### Langkah-langkah

1. **Clone repositori:**

```bash
git clone https://github.com/alfinhimawan/staycation.git
```

2. **Masuk ke direktori proyek:**

```bash
cd staycation
```

3. **Instal dependensi dengan Yarn:**

```bash
yarn install
```

4. **Jalankan server pengembangan menggunakan Vite.js:**

```bash
yarn dev
```

Ini akan membuka aplikasi di browser Anda pada alamat [http://localhost:5173](http://localhost:5173).

## Penggunaan

Setelah aplikasi berjalan, Anda bisa:

- Menavigasi ke berbagai bagian seperti **Home**, **Most Picked**, **Categories**, dan **Testimonials** menggunakan navbar.
- Menjelajahi berbagai jenis akomodasi yang tersedia di bagian **Most Picked** dan **Happy Stories**.
- Melihat efek hover pada gambar untuk animasi halus dan berinteraksi dengan komponen interaktif lainnya.

## Komponen

### 1. **Navbar**

Navbar mencakup tautan ke berbagai bagian dari situs. Selain itu, terdapat tombol untuk **Login** dan **Sign Up**, meskipun belum terhubung dengan backend.

### 2. **Hero Section**

Bagian hero menampilkan gambar latar belakang besar dengan tombol ajakan untuk mengeksplorasi opsi akomodasi.

### 3. **Most Picked**

Menampilkan grid properti paling populer seperti rumah, apartemen, dan vila. Setiap kartu menampilkan gambar properti, judul, lokasi, dan harga. Pengguna dapat mengklik properti untuk melihat lebih lanjut.

### 4. **Kategori Akomodasi**

Pengguna dapat menjelajahi berbagai jenis akomodasi, seperti **Hotel dengan Ruang Tamu Besar** atau **Apartemen dengan Set Dapur**.

### 5. **Happy Story**

Bagian testimoni yang menyoroti pengalaman positif pelanggan dengan Staycation. Termasuk cerita, rating, dan tombol untuk membaca lebih lanjut tentang pengalaman mereka.

## Kontribusi

Kami menerima kontribusi dari siapa saja yang ingin berkontribusi pada proyek ini! Jika Anda ingin membantu, silakan buka masalah (issue) atau kirimkan pull request.

### Cara Berkontribusi:

1. Fork repositori
2. Buat branch baru (`git checkout -b nama-fitur`)
3. Lakukan perubahan
4. Commit perubahan Anda (`git commit -m 'Menambahkan fitur'`)
5. Push ke branch (`git push origin nama-fitur`)
6. Buat pull request

Pastikan kode Anda mengikuti gaya yang ada dan sudah lulus linting.

## Lisensi

Proyek ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

---

### Penghargaan

- **React.js** - https://reactjs.org/
- **Vite.js** - https://vitejs.dev/
- **Tailwind CSS** - https://tailwindcss.com/
- **Framer Motion** - https://www.framer.com/motion/
- **React Scroll** - https://www.npmjs.com/package/react-scroll

---

Jika Anda memiliki pertanyaan atau membutuhkan dukungan, jangan ragu untuk menghubungi pemelihara proyek ini.

---