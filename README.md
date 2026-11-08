# Spotify Clone

Aplikasi web sederhana yang terinspirasi dari Spotify, dibuat sebagai bagian dari Technical Test Frontend Engineer dengan bantuan AI.

## 1. Gambaran Project

Project ini merupakan kloning sederhana dari halaman utama **[Spotify](https://open.spotify.com/)**, dengan fokus pada tampilan antarmuka bertema gelap, penjelajahan musik, dan pembuatan playlist.

Fitur yang tersedia:
- Menampilkan daftar lagu.
- Menampilkan informasi lagu seperti judul, artis, dan album.
- Membuat playlist dengan nama dan deskripsi.
- Menampilkan antarmuka pemutar musik sederhana.

## 2. Pendekatan dan Teknologi

Pengembangan dilakukan secara bertahap, dimulai dari setup project, pembuatan frontend, pengembangan backend API, integrasi, pengujian, hingga deployment.

**Teknologi dan Tools yang Digunakan:**
- Frontend: React, Vite, JavaScript, CSS
- Backend: Node.js, Express.js
- API: REST API, Fetch API
- Penyimpanan data: In-memory storage menggunakan array JavaScript
- Code Editor: Visual Studio Code
- AI Coding Assistant: ChatGPT
- Version Control: Git dan GitHub
- Deployment: Vercel (frontend dan backend menggunakan project terpisah)

## 3. Keputusan Teknis

- **Component-based architecture:** Antarmuka dibagi menjadi beberapa komponen React berdasarkan tanggung jawab masing-masing agar kode lebih terstruktur dan mudah dikelola.
- **REST API:** Komunikasi antara frontend dan backend menggunakan Fetch API.
- **In-memory storage:** Data lagu dan playlist disimpan sementara menggunakan array JavaScript tanpa database eksternal.
- **Validasi form:** Pembuatan playlist dilengkapi validasi nama dan deskripsi.
- **Music player sederhana:** Pemutar musik hanya menampilkan antarmuka dan interaksi play/pause tanpa memutar audio sebenarnya.
- **Deployment terpisah:** Frontend dan backend di-deploy sebagai dua project Vercel yang berbeda.

## 4. Dokumentasi API

Base URL lokal: `http://localhost:3000`

### GET /api/tracks

Digunakan untuk mengambil daftar lagu yang tersedia.

**Contoh Request:**

```http
GET /api/tracks
```

**Contoh Response — 200 OK:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Blinding Lights",
      "artist": "The Weeknd",
      "album": "After Hours",
      "cover": "https://example.com/cover.jpg",
      "duration": "3:20"
    }
  ]
}
```

### POST /api/playlists

Digunakan untuk membuat playlist baru.

**Contoh Request:**

```http
POST /api/playlists
Content-Type: application/json
```

Request Body:

```json
{
  "name": "My Favorite Songs",
  "description": "Kumpulan lagu favorit saya"
}
```

**Contoh Response — 201 Created:**

```json
{
  "success": true,
  "message": "Playlist created successfully",
  "data": {
    "id": "generated-id",
    "name": "My Favorite Songs",
    "description": "Kumpulan lagu favorit saya"
  }
}
```

**Validasi:** API mengembalikan status `400 Bad Request` jika nama playlist kosong, nama melebihi 50 karakter, atau deskripsi melebihi 200 karakter.

## 5. Cara Menjalankan Project Secara Lokal

### Persyaratan

Pastikan sudah menginstal:
- Node.js
- npm
- Git

### Clone Repository

```bash
git clone URL_REPOSITORY_GITHUB_KAMU
cd spotify-clone
```

### Menjalankan Backend

```bash
cd backend
npm install
```

Buat file `.env` di dalam folder `backend`:

```env
PORT=3000
```

Jalankan backend:

```bash
npm run dev
```

Backend berjalan di `http://localhost:3000`.

### Menjalankan Frontend

Buka terminal baru dari folder utama project:

```bash
cd frontend
npm install
```

Buat file `.env` di dalam folder `frontend`:

```env
VITE_API_URL=http://localhost:3000
```

Jalankan frontend:

```bash
npm run dev
```

Frontend berjalan di `http://localhost:5173`.

## 6. Batasan Project

- Data playlist disimpan sementara menggunakan in-memory storage dan dapat hilang ketika server backend dimulai ulang atau instance berubah.
- Pemutar musik hanya berupa tampilan antarmuka dan belum mendukung pemutaran audio sebenarnya.
- Project tidak menggunakan Spotify API resmi.

## 7. Deployment

Project di-deploy menggunakan dua project Vercel yang terpisah:

- Frontend: React + Vite.
- Backend: Node.js + Express.

Frontend terhubung dengan backend melalui environment variable `VITE_API_URL`.

## Pembuat

Dikembangkan sebagai bagian dari Technical Test Frontend Engineer.