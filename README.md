# 📁 MyStorage - Clone Google Drive

MyStorage merupakan aplikasi penyimpanan file berbasis web yang terinspirasi dari Google Drive. Aplikasi ini dibangun menggunakan Next.js, Prisma ORM, MySQL, Docker, dan MinIO sebagai object storage.

Project ini dibuat untuk memenuhi tugas UAS Mata Kuliah **Cloud Technology & Human Computer Interaction (HCI)**.

---

Akses

```
Public Hosting By AWS EC 2: http://52.200.204.33:3000/
Min io: http://52.200.204.33:9001/
http://localhost:3000
```

## 🚀 Teknologi

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Prisma ORM
- MySQL
- MinIO Object Storage
- Docker & Docker Compose
- FontAwesome

---

## ✨ Fitur

### Folder
- ✅ Membuat Folder
- ✅ Rename Folder
- ✅ Hapus Folder
- ✅ Menampilkan seluruh folder

### File
- ✅ Upload File ke MinIO
- ✅ Preview File
- ✅ Download File
- ✅ Rename File
- ✅ Delete File
- ✅ Share Link File
- ✅ Menampilkan daftar file terbaru

### Dashboard
- ✅ Storage Summary
- ✅ Total Folder
- ✅ Total File
- ✅ Total Storage Used

### Search
- ✅ Search Folder
- ✅ Search File

### UX
- ✅ Loading saat upload
- ✅ Responsive Layout
- ✅ Toast Notification
- ✅ Modern UI

---

# Struktur Project

```
app/
│
├── api/
│   ├── files/
│   ├── folders/
│
├── folder/
│
├── HomeClient.tsx
└── page.tsx

components/
│
├── FileCard.tsx
├── FileTable.tsx
├── FolderGrid.tsx
├── Header.tsx
├── Sidebar.tsx
├── StorageCard.tsx
├── UploadFile.tsx
├── CreateFolderModal.tsx
└── RenameModal.tsx

lib/
│
├── prisma.ts
└── minio.ts

prisma/
│
└── schema.prisma
```

---

# Database

Menggunakan MySQL dengan Prisma ORM.

Tabel utama:

- users
- folders
- files
- storage_usage
- activity_logs
- file_shares

---

# Object Storage

Menggunakan MinIO.

Struktur penyimpanan:

```
mystorage
│
└── folder
    ├── 1
    ├── 2
    ├── 3
    └── ...
```

Contoh object:

```
folder/1/1752658231-asd12f.pdf
```

Metadata file disimpan pada MySQL.

---

# Instalasi

## Clone Repository

```bash
git clone https://github.com/username/mystorage.git
```

Masuk ke project

```bash
cd mystorage
```

Install dependency

```bash
npm install
```

---

# Environment

Buat file `.env`

```env
DATABASE_URL="mysql://root:@localhost:3306/mystorage"

MINIO_ENDPOINT=localhost
MINIO_PORT=9000
MINIO_USE_SSL=false

MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin

NEXT_PUBLIC_MINIO_URL=http://localhost:9000
NEXT_PUBLIC_MINIO_BUCKET=mystorage
```

---

# Prisma

Generate Client

```bash
npx prisma generate
```

Migrasi

```bash
npx prisma migrate dev
```

atau jika database sudah tersedia

```bash
npx prisma db pull
npx prisma generate
```

---

# Menjalankan Project

```bash
npm run dev
```

Akses

```
Public Hosting By AWS EC 2: http://52.200.204.33:3000/
http://localhost:3000
```

---

# Docker

Menjalankan MinIO menggunakan Docker

```bash
docker compose up -d
```

atau

```bash
docker-compose up -d
```

---

# Cara Penggunaan

### Membuat Folder

Klik tombol **New Folder** kemudian masukkan nama folder.

### Upload File

Masuk ke folder kemudian klik **Upload**.

### Rename

Klik menu **⋮** pada file kemudian pilih **Rename**.

### Delete

Klik menu **⋮** kemudian pilih **Delete**.

### Preview

Klik file atau pilih **Preview**.

### Download

Klik menu **Download**.

### Share

Klik menu **Share** untuk menyalin link file.

---

# Screenshot

Tambahkan screenshot aplikasi pada folder berikut:

```
/screenshots
```

Contoh:

```
dashboard.png
folder.png
upload.png
preview.png
share.png
```

---

# Author
I Made Agus Arya Primahesa Putra_2415323002
Made Dwiki Premananda Ariyadnya_2415323008
Wisnu Bagus Indrayani_2415323020
I Komang Yoga Dinanta_2415323030
Gede Satya Budi Dharma Wiguna_2415323022

Politeknik Negeri Bali

Program Studi D3 Manajemen Informatika

2026

---

# Lisensi

Project ini dibuat untuk keperluan akademik pada Mata Kuliah Cloud Technology & HCI.



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started