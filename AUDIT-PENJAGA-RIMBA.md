# Penjaga Rimba — audit dan perbaikan kamera

Tanggal: 1 November 2026. Sumber: `v1-penjaga-rimba-main (1).zip`.

Perangkat tujuan berdasarkan informasi pengguna: Hisense 75WM61FE, 75 inci, Android 13 bawaan, RAM 16 GB, penyimpanan 256 GB. Versi browser dan spesifikasi kamera belum diketahui. Panel fisik belum diperiksa.

## Hasil perbaikan

Kontrol Penjaga Rimba tetap berupa **menahan telapak sekitar 0,36 detik** pada jawaban. Tidak diubah menjadi mekanisme tiga pukulan. Bank 75 soal IPAS dan mode permainan tetap dipertahankan.

| Temuan pada versi awal | Tindakan |
|---|---|
| Kamera tidak diminta menghadap pengguna; browser HP bebas memilih kamera belakang. | Mendahulukan kamera depan, menambahkan pilihan belakang dan kamera perangkat/USB, serta tombol cermin. Kamera tertentu dipilih dengan ID tepat. |
| Deteksi model sinkron berjalan di jalur yang sama dengan animasi. | Pemrosesan model dipindahkan ke Worker jika didukung; hanya satu bingkai diproses dalam satu waktu agar tidak mengantre. Browser yang tidak mendukungnya memakai jalur kompatibilitas. |
| Kamera 640×360 hanya diminta sebagai preferensi, sehingga resolusi nyata dapat lebih besar. | Masukan model dibatasi secara nyata hingga 640×480 dan rasio gambar dipertahankan. |
| Dua tangan selalu diminta, meningkat menjadi empat pada duel. | Satu tangan untuk solo/lomba; dua tangan untuk duel/kooperatif. Gunakan satu tangan per pemain pada duel. |
| Progres tahan mengikuti jumlah putaran animasi, dan masih bertambah selama masa toleransi ketika tangan tidak terlihat. | Progres sekarang hanya bertambah di antara hasil kamera baru yang menunjukkan target sama. Hasil baru yang tidak mendeteksi target langsung membatalkan progres. |
| Hasil tangan lama dipertahankan saat tidak ada deteksi; ketika video berhenti berubah, beberapa jalur kode tidak menghapus posisi lama. | Hasil kedaluwarsa tidak dapat memilih jawaban. Bingkai berulang tidak memberi kredit tahan. Hasil model yang tiba terlalu terlambat dibuang. |
| Pada sensor lambat, kursor bisa kedaluwarsa sebelum hasil berikutnya tiba. | Riwayat pengamatan dipisahkan dari kursor yang tampil. Kontinuitas hanya dihitung dari hasil baru dengan jeda pengambilan maksimum 500 ms; tidak ada kredit dari bingkai yang hanya diulang. |
| ZIP awal belum memuat model/WASM lokal. Jalur `import("aset/vendor/...")` juga merupakan penunjuk modul tanpa awalan relatif yang sesuai untuk browser. | Model, pustaka, dan WASM SIMD/tanpa SIMD disertakan. Jalur modul dibangun relatif terhadap berkas pemuat sehingga dapat digunakan pada hosting subfolder. |
| Kamera/model tidak dibersihkan secara terpadu saat kembali ke menu atau membatalkan pemuatan. | Track kamera, model, dan Worker ditutup; respons lama setelah pembatalan dibuang. |

Optimasi yang sudah ada pada versi awal—overlay maksimal 1280 piksel, loop sekitar 30 fps, dan penghilangan blur di atas video—dipertahankan. Penanda tangan sekarang digambar setelah pembaruan deteksi. Tampilan latihan dirapikan untuk memuat pilihan kamera dan indikator kinerja.

Pilihan awal pada Android adalah **Kompatibel (CPU)**. Mode **Otomatis** mencoba GPU lalu CPU bila inisialisasi GPU gagal. Mode otomatis tidak melakukan benchmark untuk mencari mesin tercepat. Bila GPU dapat dimuat tetapi lambat atau bermasalah saat berjalan, pilih CPU dan muat ulang.

## Pengujian

**21 tes otomatis lulus**, meliputi:

- Kamera depan/belakang, cadangan kamera USB, ID kamera tertentu, penolakan izin, penghentian dan pembatalan pemuatan.
- Batas resolusi, pemetaan video `contain` dan cermin, hasil kedaluwarsa, serta satu bingkai aktif.
- Tahan 360 ms dengan hasil baru, video membeku, tangan hilang, pergantian target, jeda panjang, fase membaca/jeda permainan, serta sensor lambat dengan perubahan latensi.
- Kontinuitas saat kursor kedaluwarsa di antara dua pengamatan kamera yang masih sah.

Pengujian integrasi Chrome desktop dengan **kamera simulasi dan model MediaPipe asli** berhasil pada GPU/Worker, CPU/Worker, dan CPU/Kompatibilitas. Akses internet eksternal diblokir saat pengujian, sehingga model dan pustaka dimuat dari berkas paket melalui localhost.

Masukan sintetis pada alur permainan membuktikan bahwa pengamatan pada 0 dan 200 ms belum memilih jawaban, pengulangan hasil 200 ms tidak menambah progres, dan pengamatan baru pada 400 ms menyelesaikan pilihan. Pergantian kamera, penutupan track lama, tombol cermin, keyboard pemain kedua, jeda, hasil, dan kembali ke menu juga diperiksa.

Model sengaja dibuat tidak tersedia: pemuatan selesai dengan kegagalan, kamera ditutup, tombol coba ulang aktif, dan keyboard tetap dapat dipakai. Izin kamera sengaja ditunda lalu dibatalkan: permintaan lama tidak menghidupkan kamera kembali atau menghentikan permintaan pengganti.

Tata letak latihan diperiksa pada viewport 1280×720, 3840×2160, dan HP mendatar 844×390. Tangkapan layar desktop dan HP diperiksa secara visual. Pada viewport 4K, bitmap overlay tetap maksimal 1280 piksel lebar; hit-test menggunakan koordinat tampilan aktual pada arena yang diskalakan.

Pengujian ini memverifikasi kode dan eksekusi model, **bukan akurasi tangan nyata atau kecepatan pada Hisense/HP fisik**. Ukuran layar dan RAM saja tidak menentukan kinerja sensor. Browser, CPU/GPU, kamera, pencahayaan, dan besar telapak di dalam gambar tetap perlu diuji. Audit difokuskan pada kamera dan interaksi permainan, bukan audit keamanan menyeluruh.

Tes dapat diulang dari folder aplikasi dengan Node.js: `node --test tests/*.test.cjs`.

## Memasang dan mencoba

1. Ekstrak ZIP dan unggah seluruh isi folder aplikasi ke hosting **HTTPS**. `index.html` berada di direktori utama; folder `aset/` harus ikut, termasuk `vendor/`, `model/`, dan seluruh berkas JavaScript baru. Muat ulang halaman setelah mengganti versi.
2. Pada IFP Android, buka latihan dan izinkan kamera. Pilih kamera bawaan/USB yang benar dari daftar. Mulai dengan **Kompatibel (CPU)**.
3. Tunggu sekitar 15 detik untuk pemanasan, lalu amati titik tangan dan indikator selama sekitar 30 detik. Coba **Otomatis** dengan posisi, kamera, dan pencahayaan sama. Pilih yang memberi respons lebih baik pada panel tersebut.
4. Arahkan telapak ke gelembung uji; bar penuh akan memulai permainan. Saat bermain, tahan pada jawaban sekitar 0,36 detik. Waktu yang dirasakan dapat lebih panjang sesuai frekuensi hasil sensor dan latensinya.
5. Uji sekurangnya sepuluh pilihan. Tarik tangan sebelum bar penuh: progres harus batal setelah hasil kamera baru menunjukkan tangan keluar. Video membeku tidak boleh menuntaskan progres. Jika tangan sering hilang, dekatkan atau perbaiki pencahayaan agar seluruh telapak terlihat jelas.
6. Di HP, pastikan **Depan / otomatis** memperlihatkan pemain. Coba **Belakang**, kembali ke depan, dan tombol **Cermin**. Pilih nama kamera tertentu bila browser tidak melaporkan arah kamera dengan benar.

`deteksi/dtk` adalah frekuensi hasil sensor, bukan FPS kamera. `ms` adalah waktu pemrosesan model rata-rata. `Worker` menunjukkan proses terpisah; `Kompatibilitas` adalah jalur cadangan yang masih dapat membebani animasi. Catat kedua angka pada CPU dan Otomatis, versi browser, nama kamera, serta jarak pemain jika masih bermasalah.

Berkas sensor tersedia lokal sehingga CDN tidak diperlukan selama paket lengkap. Jika pemuatan lokal gagal, pemuat tetap mencoba sumber resmi daring sebagai cadangan. Versi ini harus dibuka melalui HTTPS atau localhost, bukan dengan klik langsung `file://`; ini bukan aplikasi offline terpasang. Tidak ada hosting yang dipublikasikan atau diubah dalam pekerjaan ini.

## Sumber teknis

- [MediaPipe Hand Landmarker untuk Web](https://developers.google.com/edge/mediapipe/solutions/vision/hand_landmarker/web_js): deteksi sinkron dan penggunaan Worker.
- [MDN facingMode](https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/facingMode): pemilihan arah kamera.
- [MDN getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia): izin, persyaratan kamera, dan penghentian track.

MediaPipe Tasks Vision tetap 0.10.14, dengan model hand_landmarker float16 versi 1. Ambang confidence model asli 0,45/0,45/0,40 dipertahankan. URL sumber tersedia pada `unduh_model.py`; lisensi disertakan dalam `aset/vendor/mediapipe/LICENSE`.
