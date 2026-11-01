# Penjaga Rimba — perbaikan kamera IFP dan HP

Acuan perangkat: Hisense 75WM61FE, Android 13 bawaan.

1. Unggah seluruh isi folder ini ke hosting **HTTPS**, termasuk semua isi `aset/`. Jangan membuka HTML langsung atau dari dalam ZIP. Muat ulang halaman setelah mengganti versi.
2. Tekan **Mulai Petualangan**, lalu izinkan kamera di browser dan pengaturan aplikasi Android jika diminta.
3. Pilih kamera yang benar. HP mendahulukan **Depan / otomatis**; tersedia pilihan **Belakang** serta kamera bawaan/USB tertentu.
4. Di Android, mulai dengan **Kompatibel (CPU)**. Tunggu pemanasan sekitar 15 detik, lalu bandingkan dengan **Otomatis** jika masih lambat. Pilih yang lebih lancar pada perangkat Anda.
5. Angkat telapak sampai penanda terlihat, arahkan ke gelembung uji, lalu tahan sampai bar penuh. Permainan akan dimulai. Klik gelembung uji atau tombol Mulai bermain dapat melewati latihan.
6. Kontrol game tetap **menahan telapak sekitar 0,36 detik**, bukan tiga pukulan. Waktu respons nyata mengikuti kecepatan sensor. Jika tangan keluar dari target pada hasil kamera berikutnya, progres dibatalkan.

Indikator `deteksi/dtk` menunjukkan frekuensi hasil sensor; `ms` menunjukkan rata-rata waktu pemrosesan. `Worker` berarti pemrosesan terpisah; `Kompatibilitas` berarti jalur cadangan browser. Gunakan tombol **Cermin** jika arah gerak pratinjau tidak sesuai.

Model dan pustaka sudah disertakan lokal. HTTPS/localhost tetap diperlukan untuk menjalankan halaman dan akses kamera dengan benar. HTTP melalui alamat IP jaringan biasa tidak menggantikan HTTPS. Jika model lokal gagal dimuat, aplikasi mencoba sumber resmi daring sebagai cadangan.

Kamera ditutup saat kembali ke menu/hasil. Untuk mengaktifkan kembali, masuk latihan atau gunakan **Hubungkan kamera** saat bermain. Sentuh, klik, dan keyboard tetap tersedia: P1 Q/W/A/S atau 1/2/3/4; P2 I/O/K/L.

21 tes otomatis dan pengujian sensor asli dengan kamera simulasi telah lulus. Performa serta akurasi pada IFP dan HP fisik belum teruji. Lihat `AUDIT-PENJAGA-RIMBA.md` untuk rincian. Tes logika dapat diulang dengan Node.js: `node --test tests/*.test.cjs`.
