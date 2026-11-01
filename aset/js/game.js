
(function(){
  const frame=document.getElementById('game-frame');
  const stage=document.getElementById('arena-container');
  function fitStage(){
    const s=Math.min(document.documentElement.clientWidth/1600,window.innerHeight/900);
    frame.style.width=(1600*s)+'px';frame.style.height=(900*s)+'px';
    stage.style.setProperty('--game-scale',s);
  }
  fitStage();window.addEventListener('resize',fitStage);
  document.addEventListener('fullscreenchange',fitStage);
  window.visualViewport?.addEventListener('resize',fitStage);
})();

/* ============================================================================
   1. BANK PEMBELAJARAN IPAS KELAS V SD (75 SOAL UNIK: 25 MUDAH, 25 SEDANG, 25 SULIT)
   Topik: Ekosistem, Rantai Makanan, Jaring-jaring Makanan, dan Prediksi Populasi
   ============================================================================ */
const DEFAULT_QUESTION_BANK = [
  // ==================== TINGKAT MUDAH (25 SOAL: M01 - M25) ====================
  {
    id: "M01", difficulty: "Mudah",
    question: "Di ekosistem sawah, tanaman padi mampu membuat makanan sendiri melalui fotosintesis. Peran padi adalah...",
    options: ["Produsen", "Konsumen I", "Konsumen II", "Pengurai"],
    correctIndex: 0,
    explanation: "Tumbuhan hijau seperti padi berperan sebagai produsen karena menghasilkan makanan sendiri lewat fotosintesis."
  },
  {
    id: "M02", difficulty: "Mudah",
    question: "Sumber energi utama bagi seluruh produsen di Bumi untuk memulai rantai makanan adalah...",
    options: ["Cahaya matahari", "Angin kencang", "Batu mineral", "Embun pagi"],
    correctIndex: 0,
    explanation: "Cahaya matahari adalah sumber energi utama yang digunakan tumbuhan untuk berfotosintesis."
  },
  {
    id: "M03", difficulty: "Mudah",
    question: "Belalang memakan daun padi di sawah. Dalam rantai makanan, belalang menempati posisi sebagai...",
    options: ["Konsumen tingkat I", "Produsen utama", "Pengurai tanah", "Konsumen puncak"],
    correctIndex: 0,
    explanation: "Pemakan langsung tumbuhan (herbivora) seperti belalang disebut konsumen tingkat I."
  },
  {
    id: "M04", difficulty: "Mudah",
    question: "Jamur dan bakteri yang menguraikan bangkai makhluk hidup menjadi zat hara tanah berperan sebagai...",
    options: ["Dekomposer (Pengurai)", "Produsen", "Konsumen tingkat I", "Predator puncak"],
    correctIndex: 0,
    explanation: "Dekomposer atau pengurai mengembalikan nutrisi dari sisa makhluk hidup ke dalam tanah."
  },
  {
    id: "M05", difficulty: "Mudah",
    question: "Manakah di bawah ini yang termasuk komponen abiotik (benda tak hidup) di dalam ekosistem hutan?",
    options: ["Air, tanah, dan cahaya", "Pohon jati dan rusa", "Rumput dan cacing", "Jamur dan semut"],
    correctIndex: 0,
    explanation: "Komponen abiotik adalah unsur tak hidup seperti air, tanah, udara, suhu, dan cahaya matahari."
  },
  {
    id: "M06", difficulty: "Mudah",
    question: "Kelompok hewan yang hanya memakan tumbuhan atau produsen di dalam ekosistem disebut...",
    options: ["Herbivora", "Karnivora", "Omnivora", "Insektivora"],
    correctIndex: 0,
    explanation: "Herbivora adalah hewan pemakan tumbuhan, misalnya kambing, kelinci, dan ulat."
  },
  {
    id: "M07", difficulty: "Mudah",
    question: "Pada rantai makanan: Rumput -> Kelinci -> Ular -> Elang, siapakah yang berperan sebagai konsumen puncak?",
    options: ["Burung elang", "Kelinci putih", "Tanaman rumput", "Ular sawah"],
    correctIndex: 0,
    explanation: "Elang berada di ujung rantai makanan dan tidak memiliki pemangsa alami lagi, sehingga disebut konsumen puncak."
  },
  {
    id: "M08", difficulty: "Mudah",
    question: "Di ekosistem laut, organisme mikroskopis yang berperan sebagai produsen utama penghasil makanan adalah...",
    options: ["Fitoplankton", "Ikan hiu", "Udang kecil", "Terumbu batu"],
    correctIndex: 0,
    explanation: "Fitoplankton adalah plankton tumbuhan yang berfotosintesis dan menjadi produsen utama di perairan."
  },
  {
    id: "M09", difficulty: "Mudah",
    question: "Hubungan antara bunga mawar dan lebah madu yang saling menguntungkan kedua pihak disebut...",
    options: ["Simbiosis mutualisme", "Simbiosis parasitisme", "Simbiosis komensalisme", "Kompetisi ruang"],
    correctIndex: 0,
    explanation: "Lebah mendapat nektar dan bunga terbantu penyerbukannya, sehingga keduanya untung (mutualisme)."
  },
  {
    id: "M10", difficulty: "Mudah",
    question: "Tali putri yang menempel dan menyerap sari makanan dari tanaman pagar menunjukkan hubungan...",
    options: ["Simbiosis parasitisme", "Simbiosis mutualisme", "Simbiosis komensalisme", "Rantai produsen"],
    correctIndex: 0,
    explanation: "Tali putri untung karena mengambil sari makanan, sedangkan tanaman pagar dirugikan (parasitisme)."
  },
  {
    id: "M11", difficulty: "Mudah",
    question: "Ikan remora yang berenang di dekat tubuh ikan hiu agar aman dari pemangsa tanpa merugikan hiu adalah...",
    options: ["Simbiosis komensalisme", "Simbiosis parasitisme", "Simbiosis mutualisme", "Predasi laut"],
    correctIndex: 0,
    explanation: "Ikan remora diuntungkan sedangkan hiu tidak untung maupun rugi (komensalisme)."
  },
  {
    id: "M12", difficulty: "Mudah",
    question: "Ulat memakan daun sawi, lalu burung pipit memakan ulat tersebut. Burung pipit berperan sebagai...",
    options: ["Konsumen tingkat II", "Produsen daun", "Konsumen tingkat I", "Pengurai bangkai"],
    correctIndex: 0,
    explanation: "Karena memakan konsumen tingkat I (ulat), burung pipit menduduki peran konsumen tingkat II."
  },
  {
    id: "M13", difficulty: "Mudah",
    question: "Kumpulan dari beberapa rantai makanan yang saling berhubungan di dalam satu ekosistem disebut...",
    options: ["Jaring-jaring makanan", "Piramida batu", "Komunitas tunggal", "Habitat sempit"],
    correctIndex: 0,
    explanation: "Di alam, satu makhluk hidup dapat memakan lebih dari satu jenis makanan sehingga membentuk jaring-jaring makanan."
  },
  {
    id: "M14", difficulty: "Mudah",
    question: "Urutan perpindahan energi yang tepat pada ekosistem kebun di bawah ini adalah...",
    options: ["Bayam -> Ulat -> Ayam -> Musang", "Ulat -> Bayam -> Ayam -> Musang", "Ayam -> Ulat -> Bayam -> Musang", "Musang -> Ayam -> Ulat -> Bayam"],
    correctIndex: 0,
    explanation: "Rantai makanan selalu dimulai dari produsen (bayam), dilanjutkan ulat, ayam, hingga musang."
  },
  {
    id: "M15", difficulty: "Mudah",
    question: "Katak di sawah memakan serangga seperti belalang. Berdasarkan jenis makanannya, katak tergolong...",
    options: ["Karnivora (Pemakan hewan)", "Herbivora (Pemakan daun)", "Produsen air", "Dekomposer lumpur"],
    correctIndex: 0,
    explanation: "Katak dewasa memakan serangga atau hewan kecil lainnya sehingga tergolong karnivora/insektivora."
  },
  {
    id: "M16", difficulty: "Mudah",
    question: "Tikus sawah yang memakan bulir padi kemudian dimangsa oleh ular. Peristiwa ular memangsa tikus disebut...",
    options: ["Predasi", "Mutualisme", "Komensalisme", "Fotosintesis"],
    correctIndex: 0,
    explanation: "Predasi adalah hubungan antara pemangsa (predator) yaitu ular dan hewan buruannya (mangsa) yaitu tikus."
  },
  {
    id: "M17", difficulty: "Mudah",
    question: "Di ekosistem padang rumput Afrika, zebra memakan rumput dan singa memangsa zebra. Singa berperan sebagai...",
    options: ["Predator / Konsumen II", "Produsen rumput", "Konsumen tingkat I", "Pengurai tanah"],
    correctIndex: 0,
    explanation: "Singa memangsa herbivora (zebra), sehingga singa menjadi predator atau konsumen tingkat II."
  },
  {
    id: "M18", difficulty: "Mudah",
    question: "Apa manfaat utama cacing tanah dan jamur pengurai bagi tanaman di hutan?",
    options: ["Menyuburkan tanah dengan zat hara", "Menghalangi sinar matahari", "Memangsa daun muda", "Mengeringkan air sungai"],
    correctIndex: 0,
    explanation: "Pengurai dan detritivor mengolah sisa organik menjadi humus yang kaya zat hara bagi tumbuhan."
  },
  {
    id: "M19", difficulty: "Mudah",
    question: "Tanaman anggrek yang menempel di cabang pohon mangga untuk mendapat sinar matahari tanpa merugikan mangga adalah...",
    options: ["Simbiosis komensalisme", "Simbiosis parasitisme", "Simbiosis mutualisme", "Kompetisi akar"],
    correctIndex: 0,
    explanation: "Anggrek hanya menumpang tempat tinggi tanpa menyerap makanan dari batang pohon mangga (komensalisme)."
  },
  {
    id: "M20", difficulty: "Mudah",
    question: "Burung jalak memakan kutu di punggung kerbau. Kerbau bebas kutu dan jalak kenyang. Hubungan ini adalah...",
    options: ["Simbiosis mutualisme", "Simbiosis parasitisme", "Simbiosis komensalisme", "Predasi padang"],
    correctIndex: 0,
    explanation: "Kedua makhluk hidup sama-sama memperoleh keuntungan langsung (mutualisme)."
  },
  {
    id: "M21", difficulty: "Mudah",
    question: "Di ekosistem sungai, lumut yang menempel di batu tepi sungai berperan sebagai...",
    options: ["Produsen perairan", "Konsumen puncak", "Predator ikan", "Pengurai udara"],
    correctIndex: 0,
    explanation: "Lumut memiliki klorofil dan melakukan fotosintesis sehingga menjadi produsen bagi ikan kecil."
  },
  {
    id: "M22", difficulty: "Mudah",
    question: "Manakah di bawah ini yang merupakan komponen biotik (makhluk hidup) di ekosistem kolam?",
    options: ["Ikan mas, teratai, dan katak", "Air jernih dan kerikil", "Lumpur dan udara", "Cahaya dan suhu hangat"],
    correctIndex: 0,
    explanation: "Ikan mas, bunga teratai, dan katak semuanya adalah makhluk hidup (komponen biotik)."
  },
  {
    id: "M23", difficulty: "Mudah",
    question: "Hewan yang memakan tumbuhan sekaligus memakan hewan lain, seperti ayam dan beruang, disebut...",
    options: ["Omnivora", "Herbivora", "Karnivora murni", "Produsen"],
    correctIndex: 0,
    explanation: "Omnivora adalah makhluk hidup pemakan segala (tumbuhan maupun daging/serangga)."
  },
  {
    id: "M24", difficulty: "Mudah",
    question: "Kutu yang hidup di rambut kucing dan menghisap darahnya merupakan contoh hubungan...",
    options: ["Simbiosis parasitisme", "Simbiosis mutualisme", "Simbiosis komensalisme", "Kerja sama koloni"],
    correctIndex: 0,
    explanation: "Kutu mendapat darah sedangkan kucing gatal dan kekurangan darah (parasitisme)."
  },
  {
    id: "M25", difficulty: "Mudah",
    question: "Apa yang terjadi pada energi saat berpindah dari padi ke belalang, lalu ke katak?",
    options: ["Energi berpindah dari makanan ke pemakannya", "Energi hilang tanpa sisa di padi", "Energi kembali menjadi sinar matahari", "Energi hanya diam di batu"],
    correctIndex: 0,
    explanation: "Rantai makanan adalah proses perpindahan energi kimia makanan dari satu makhluk hidup ke pemakannya."
  },

  // ==================== TINGKAT SEDANG (25 SOAL: S01 - S25) ====================
  {
    id: "S01", difficulty: "Sedang",
    question: "Rantai sawah: Padi -> Tikus -> Ular -> Elang. Jika ular sawah diburu habis-habisan oleh manusia, dampak langsungnya adalah...",
    options: ["Populasi tikus meledak dan panen padi turun", "Populasi tikus punah seketika", "Tanaman padi tumbuh dua kali lipat", "Elang berubah memakan daun padi"],
    correctIndex: 0,
    explanation: "Tanpa ular sebagai predator alami, tikus berkembang biak pesat dan merusak tanaman padi petani."
  },
  {
    id: "S02", difficulty: "Sedang",
    question: "Pada rantai: Rumput -> Belalang -> Katak -> Ular. Jika populasi katak menurun drastis akibat pencemaran air, maka...",
    options: ["Belalang bertambah banyak dan rumput berkurang", "Ular bertambah banyak karena kenyang", "Belalang ikut punah bersama katak", "Rumput tumbuh makin lebat tanpa batas"],
    correctIndex: 0,
    explanation: "Berkurangnya katak membuat pemangsa belalang hilang, sehingga belalang meledak dan menghabiskan rumput."
  },
  {
    id: "S03", difficulty: "Sedang",
    question: "Dalam piramida makanan ekosistem yang sehat dan seimbang, kelompok manakah yang harus memiliki jumlah energi/biomassa terbesar?",
    options: ["Produsen (Tumbuhan hijau)", "Konsumen tingkat I", "Konsumen tingkat II", "Konsumen puncak (Elang/Harimau)"],
    correctIndex: 0,
    explanation: "Produsen berada di dasar piramida makanan dan harus berjumlah paling banyak untuk menopang seluruh konsumen di atasnya."
  },
  {
    id: "S04", difficulty: "Sedang",
    question: "Di hutan terdapat harimau dan macan tutul yang sama-sama berburu rusa di wilayah yang sama. Hubungan antara harimau dan macan tutul adalah...",
    options: ["Kompetisi (Persaingan)", "Simbiosis mutualisme", "Simbiosis parasitisme", "Dekomposisi tanah"],
    correctIndex: 0,
    explanation: "Dua predator berbeda yang memperebutkan sumber makanan (mangsa) yang sama mengalami hubungan kompetisi."
  },
  {
    id: "S05", difficulty: "Sedang",
    question: "Mengapa jaring-jaring makanan di hutan hujan tropis lebih tahan terhadap kepunahan satu jenis hewan dibandingkan rantai makanan tunggal?",
    options: ["Karena konsumen memiliki pilihan makanan alternatif", "Karena di hutan tidak ada predator puncak", "Karena pohon di hutan tidak butuh matahari", "Karena semua hewan hutan memakan batu"],
    correctIndex: 0,
    explanation: "Semakin banyak jalur makanan alternatif pada jaring-jaring makanan, semakin stabil ekosistem saat satu spesies berkurang."
  },
  {
    id: "S06", difficulty: "Sedang",
    question: "Di kebun: Bunga & Daun -> Ulat & Belalang -> Burung Kutilang -> Ular. Jika seluruh ulat mati karena semprotan hama, bagaimana nasib burung kutilang?",
    options: ["Tetap bertahan dengan memakan belalang", "Langsung mati kelaparan hari itu juga", "Berubah menjadi produsen bunga", "Memangsa ular kebun"],
    correctIndex: 0,
    explanation: "Dalam jaring-jaring makanan, burung kutilang masih memiliki sumber pakan alternatif yaitu belalang."
  },
  {
    id: "S07", difficulty: "Sedang",
    question: "Jika kemarau panjang membuat rumput di sabana mengering dan mati, kelompok hewan manakah yang paling pertama merasakan dampak kekurangan makanan?",
    options: ["Herbivora seperti rusa dan zebra", "Karnivora puncak seperti singa", "Burung pemakan bangkai", "Bakteri pengurai di batu"],
    correctIndex: 0,
    explanation: "Herbivora (konsumen I) bergantung langsung pada rumput segar sebagai satu-satunya sumber makanan."
  },
  {
    id: "S08", difficulty: "Sedang",
    question: "Rantai laut: Fitoplankton -> Zooplankton -> Ikan Kecil -> Ikan Tuna -> Hiu. Jika ikan kecil ditangkap berlebihan dengan pukat harimau, maka...",
    options: ["Zooplankton meningkat dan ikan tuna kekurangan mangsa", "Fitoplankton langsung meledak tinggi", "Ikan tuna makin gemuk dan banyak", "Hiu berubah memakan fitoplankton"],
    correctIndex: 0,
    explanation: "Hilangnya ikan kecil mengurangi pemangsa zooplankton dan memutus pasokan makanan bagi ikan tuna."
  },
  {
    id: "S09", difficulty: "Sedang",
    question: "Petani menggunakan pestisida kimia secara berlebihan di sawah hingga membunuh belalang dan katak. Dampak buruk bagi ular sawah adalah...",
    options: ["Populasi ular menurun karena kehilangan mangsa katak", "Populasi ular meningkat tajam", "Ular menjadi kebal dan memakan padi", "Ular bersimbiosis dengan padi"],
    correctIndex: 0,
    explanation: "Kematian katak membuat ular kehilangan salah satu sumber makanan utamanya di sawah."
  },
  {
    id: "S10", difficulty: "Sedang",
    question: "Di ekosistem danau, burung bangau memakan ikan mujair, dan ikan mujair memakan jentik nyamuk. Jika burung bangau banyak diburu, apa dampaknya pada jentik nyamuk?",
    options: ["Jentik nyamuk berkurang karena ikan mujair bertambah banyak", "Jentik nyamuk meledak tanpa kendali", "Ikan mujair ikut punah", "Air danau langsung mengering"],
    correctIndex: 0,
    explanation: "Saat bangau berkurang, populasi ikan mujair meningkat sehingga lebih banyak jentik nyamuk yang dimangsa."
  },
  {
    id: "S11", difficulty: "Sedang",
    question: "Pada jaring makanan, burung ayam-ayaman memakan biji padi sekaligus memakan ulat daun. Dengan demikian, burung tersebut menduduki peran...",
    options: ["Konsumen I dan Konsumen II sekaligus", "Produsen dan Pengurai", "Konsumen puncak saja", "Pengurai dan Konsumen I"],
    correctIndex: 0,
    explanation: "Saat memakan padi ia menjadi Konsumen I, dan saat memakan ulat ia menjadi Konsumen II."
  },
  {
    id: "S12", difficulty: "Sedang",
    question: "Seandainya seluruh dekomposer (jamur dan bakteri pengurai) hilang dari ekosistem hutan, apa yang akan terjadi dalam jangka panjang?",
    options: ["Sampah organik menumpuk dan tanah miskin zat hara", "Pohon tumbuh semakin subur dan cepat", "Herbivora mendapat lebih banyak rumput", "Udara hutan menjadi penuh mineral"],
    correctIndex: 0,
    explanation: "Tanpa pengurai, bangkai dan daun gugur tidak terurai menjadi mineral, sehingga tanah kehabisan nutrisi bagi tumbuhan."
  },
  {
    id: "S13", difficulty: "Sedang",
    question: "Pohon jati menggugurkan daunnya saat musim kemarau. Hubungan peristiwa ini dengan komponen ekosistem adalah...",
    options: ["Adaptasi biotik terhadap perubahan abiotik (ketersediaan air)", "Interaksi predasi antar pohon jati", "Simbiosis parasitisme pohon dengan tanah", "Perubahan pohon menjadi konsumen"],
    correctIndex: 0,
    explanation: "Makhluk hidup (biotik) menyesuaikan diri terhadap berkurangnya air (komponen abiotik) dengan menggugurkan daun."
  },
  {
    id: "S14", difficulty: "Sedang",
    question: "Jika populasi burung hantu di perkebunan kelapa sawit sengaja dilestarikan oleh petani, dampak positif yang diharapkan adalah...",
    options: ["Populasi hama tikus pemakan buah sawit terkendali alami", "Buah kelapa sawit dimakan oleh burung hantu", "Ulat daun bertambah banyak di pohon", "Pohon sawit tidak butuh pupuk lagi"],
    correctIndex: 0,
    explanation: "Burung hantu adalah predator alami tikus, sehingga membantu petani mengendalikan hama tanpa racun kimia."
  },
  {
    id: "S15", difficulty: "Sedang",
    question: "Rantai kebun: Cabai -> Kutu Daun -> Kepik -> Laba-laba -> Burung Prenjak. Jika kepik habis karena penyakit, maka yang terjadi pada tanaman cabai adalah...",
    options: ["Tanaman cabai rusak karena kutu daun berkembang pesat", "Tanaman cabai tumbuh subur tanpa gangguan", "Laba-laba memakan buah cabai", "Kutu daun ikut menghilang"],
    correctIndex: 0,
    explanation: "Kepik adalah pemangsa kutu daun. Tanpa kepik, kutu daun meledak dan merusak daun cabai."
  },
  {
    id: "S16", difficulty: "Sedang",
    question: "Air sungai yang keruh akibat lumpur tambang menghalangi cahaya matahari masuk ke dalam air. Bagaimana dampaknya pada rantai makanan sungai?",
    options: ["Ganggang/fitoplankton sulit berfotosintesis sehingga ikan kekurangan makanan", "Ikan predator makin mudah melihat mangsa", "Produsen air tumbuh semakin lebat di dasar", "Populasi udang meningkat pesat"],
    correctIndex: 0,
    explanation: "Kurangnya cahaya menghambat fotosintesis produsen air, yang berdampak berantai mengurangi makanan ikan."
  },
  {
    id: "S17", difficulty: "Sedang",
    question: "Di ekosistem padang rumput: Rumput -> Kelinci -> Rubah. Jika datang penyakit yang mematikan banyak rubah, perubahan awal yang terjadi adalah...",
    options: ["Populasi kelinci meningkat pesat", "Populasi kelinci langsung punah", "Rumput bertambah tinggi selamanya", "Rubah berubah memakan rumput"],
    correctIndex: 0,
    explanation: "Berkurangnya predator (rubah) menurunkan angka kematian kelinci sehingga populasinya naik."
  },
  {
    id: "S18", difficulty: "Sedang",
    question: "Lebah madu sangat penting di kebun buah apel. Jika populasi lebah menurun drastis karena asap polusi, apa dampaknya bagi pohon apel?",
    options: ["Penyerbukan bunga berkurang sehingga produksi buah apel turun", "Pohon apel menghasilkan buah dua kali lebih besar", "Daun apel berubah menjadi bunga semua", "Akar pohon apel membusuk seketika"],
    correctIndex: 0,
    explanation: "Lebah membantu penyerbukan bunga apel. Tanpa lebah, bunga gagal menjadi buah."
  },
  {
    id: "S19", difficulty: "Sedang",
    question: "Dalam satu jaring makanan: Padi dimakan Tikus dan Burung Pipit; keduanya dimangsa Elang. Hubungan antara Tikus dan Burung Pipit adalah...",
    options: ["Kompetisi memperebutkan bulir padi", "Predasi antara tikus dan pipit", "Simbiosis mutualisme di sawah", "Komensalisme sesama pemakan padi"],
    correctIndex: 0,
    explanation: "Tikus dan burung pipit memiliki makanan yang sama (padi), sehingga keduanya bersaing (kompetisi)."
  },
  {
    id: "S20", difficulty: "Sedang",
    question: "Mengapa jumlah harimau di hutan selalu jauh lebih sedikit dibandingkan jumlah rusa dan tumbuhan?",
    options: ["Agar keseimbangan terjaga karena energi berkurang di tiap tingkat trofik", "Karena harimau tidak suka hidup di hutan lebat", "Karena rusa merupakan predator harimau", "Karena tumbuhan memakan energi harimau"],
    correctIndex: 0,
    explanation: "Hanya sekitar 10% energi yang berpindah ke tingkat trofik berikutnya, sehingga populasi puncak selalu paling sedikit."
  },
  {
    id: "S21", difficulty: "Sedang",
    question: "Di ekosistem rawa: Tanaman Air -> Siput -> Bebek -> Biawak. Jika penduduk menangkap banyak bebek rawa, apa dampak bagi siput dan tanaman air?",
    options: ["Siput bertambah banyak dan tanaman air makin habis dimakan siput", "Siput punah dan tanaman air memenuhi rawa", "Biawak berubah memakan tanaman air", "Siput dan biawak bersimbiosis"],
    correctIndex: 0,
    explanation: "Hilangnya bebek membuat siput kehilangan pemangsa, sehingga siput meledak dan menghabiskan tanaman air."
  },
  {
    id: "S22", difficulty: "Sedang",
    question: "Benalu yang hidup di ranting pohon mangga memiliki daun hijau, tetapi tetap merugikan pohon mangga karena...",
    options: ["Menyerap air dan mineral langsung dari jaringan batang pohon mangga", "Menutupi seluruh akar pohon mangga di dalam tanah", "Memangsa serangga penyerbuk bunga mangga", "Mengeluarkan racun pembunuh cacing tanah"],
    correctIndex: 0,
    explanation: "Akar hisap benalu mengambil air dan zat hara dari pohon inangnya untuk berfotosintesis."
  },
  {
    id: "S23", difficulty: "Sedang",
    question: "Bunga raflesia di hutan Sumatra tidak memiliki klorofil dan hidup menempel pada akar tumbuhan liana. Peran raflesia terhadap liana adalah...",
    options: ["Parasit yang mengambil sari makanan dari akar liana", "Produsen mandiri penghasil oksigen utama", "Pengurai batang pohon yang sudah mati", "Sahabat mutualisme yang menyuburkan liana"],
    correctIndex: 0,
    explanation: "Karena tidak berklorofil, bunga raflesia bergantung sepenuhnya pada sari makanan dari inangnya (liana)."
  },
  {
    id: "S24", difficulty: "Sedang",
    question: "Jika hutan bakau (mangrove) di tepi pantai ditebang habis untuk bangunan, dampak langsung pada jaring makanan pesisir adalah...",
    options: ["Udang, kepiting, dan ikan kecil kehilangan tempat berlindung dan mencari makan", "Populasi ikan besar di laut lepas meningkat dua kali lipat", "Terumbu karang berpindah ke daratan pantai", "Air laut berubah menjadi air tawar"],
    correctIndex: 0,
    explanation: "Akar bakau adalah habitat asuhan (nursery ground) serta sumber nutrisi organik bagi udang, kepiting, dan anak ikan."
  },
  {
    id: "S25", difficulty: "Sedang",
    question: "Di padang rumput, burung elang memangsa ular dan kelinci. Jika populasi ular menurun karena diburu, apa yang kemungkinan dilakukan elang?",
    options: ["Elang lebih banyak memangsa kelinci sehingga populasi kelinci ikut tertekan", "Elang berhenti makan dan berpuasa selamanya", "Elang beralih memakan rumput kering", "Elang membantu ular berkembang biak"],
    correctIndex: 0,
    explanation: "Ketika satu mangsa berkurang, predator akan mengalihkan buruannya ke mangsa alternatif (kelinci)."
  },

  // ==================== TINGKAT SULIT (25 SOAL: H01 - H25) ====================
  {
    id: "H01", difficulty: "Sulit",
    question: "Jaring sawah: Padi dimakan Tikus, Belalang, dan Ulat. Belalang & Ulat dimakan Katak. Katak & Tikus dimakan Ular. Jika Katak punah tetapi Ular tetap banyak, apa dampaknya pada Tikus?",
    options: ["Tikus diburu lebih intensif oleh Ular sehingga populasi tikus menurun", "Tikus tidak terpengaruh sama sekali karena beda jalur", "Tikus bertambah banyak karena dibantu ular", "Tikus berubah memakan belalang dan ulat"],
    correctIndex: 0,
    explanation: "Saat katak hilang, ular kehilangan satu mangsa utama dan mengalihkan seluruh buruannya kepada tikus."
  },
  {
    id: "H02", difficulty: "Sulit",
    question: "Limbah pupuk kimia berlebih masuk ke danau dan memicu ledakan eceng gondok (eutrofikasi) hingga menutup permukaan air. Mengapa ikan di dasar danau justru mati?",
    options: ["Cahaya terhalang dan saat eceng gondok membusuk, bakteri menghabiskan oksigen terlarut", "Eceng gondok memangsa ikan kecil secara langsung di malam hari", "Air danau berubah menjadi terlalu dingin dan membeku", "Ikan keracunan oksigen murni dari daun eceng gondok"],
    correctIndex: 0,
    explanation: "Tertutupnya permukaan menghalangi cahaya bagi fitoplankton, dan pembusukan eceng gondok menguras oksigen air."
  },
  {
    id: "H03", difficulty: "Sulit",
    question: "Sebuah pulau memiliki rantai: Semak -> Rusa -> Serigala. Manusia memburu seluruh serigala demi melindungi rusa. Mengapa 5 tahun kemudian banyak rusa justru mati kelaparan?",
    options: ["Populasi rusa meledak melebihi daya dukung semak hingga makanan habis", "Rusa sedih kehilangan serigala dan berhenti makan", "Semak berubah menjadi beracun saat tidak ada serigala", "Tanah pulau tenggelam ke dasar laut"],
    correctIndex: 0,
    explanation: "Tanpa predator pengendali, populasi rusa meledak (overpopulasi), menghabiskan seluruh semak, lalu mengalami bencana kelaparan."
  },
  {
    id: "H04", difficulty: "Sulit",
    question: "Zat pencemar logam berat (merkuri) dibuang ke laut. Dalam rantai: Plankton -> Ikan Kecil -> Ikan Tuna -> Hiu, organisme manakah yang menumpuk kadar racun tertinggi di tubuhnya?",
    options: ["Ikan Hiu sebagai konsumen puncak (Biomagnifikasi)", "Plankton karena ukurannya paling kecil", "Ikan kecil karena berenang di tepi pantai", "Semua makhluk hidup memiliki kadar racun yang persis sama"],
    correctIndex: 0,
    explanation: "Melalui proses biomagnifikasi, racun yang tidak terurai akan terakumulasi makin pekat pada predator puncak."
  },
  {
    id: "H05", difficulty: "Sulit",
    question: "Ikan nila predator asing dilepas ke danau yang dihuni ikan kecil asli pemakan jentik. Ikan nila memakan anak ikan asli DAN memakan lumut yang sama. Hubungan ikan nila dengan ikan asli adalah...",
    options: ["Predasi sekaligus Kompetisi (memangsa dan merebut makanan)", "Simbiosis mutualisme dan komensalisme", "Hanya komensalisme tanpa dampak populasi", "Dekomposisi berantai di perairan"],
    correctIndex: 0,
    explanation: "Spesies invasif tersebut memangsa anak ikan asli (predasi) sekaligus merebut pakan lumut yang sama (kompetisi)."
  },
  {
    id: "H06", difficulty: "Sulit",
    question: "Terumbu karang hidup bersimbiosis mutualisme dengan alga zooxanthellae. Jika suhu laut naik dan alga keluar dari karang (pemutihan karang), dampak berantai pada ekosistem laut adalah...",
    options: ["Karang mati, ikan karang kehilangan rumah/makanan, dan tangkapan nelayan turun", "Karang tumbuh makin keras dan ikan hiu bertambah banyak", "Alga berubah menjadi ikan kecil pengganti karang", "Air laut menjadi lebih jernih dan kaya nutrisi"],
    correctIndex: 0,
    explanation: "Hilangnya alga membuat karang kelaparan dan mati, meruntuhkan fondasi jaring makanan terumbu karang."
  },
  {
    id: "H07", difficulty: "Sulit",
    question: "Di ekosistem hutan: Pohon Buah -> Orangutan (penyebar biji) -> Harimau. Jika orangutan berkurang drastis karena perburuan, bagaimana dampak jangka panjang terhadap regenerasi pohon buah?",
    options: ["Tumbuhnya pohon buah baru menurun karena biji tidak tersebar jauh di hutan", "Pohon buah tumbuh makin rapat di seluruh sudut hutan", "Biji buah disebarkan oleh harimau ke atas pohon", "Pohon buah tidak membutuhkan biji lagi untuk tumbuh"],
    correctIndex: 0,
    explanation: "Orangutan berperan penting menyebarkan biji lewat kotorannya; tanpa mereka, regenerasi pohon hutan terhambat."
  },
  {
    id: "H08", difficulty: "Sulit",
    question: "Petani menanam satu jenis tanaman saja (monokultur) di lahan luas tanpa tanaman bunga liar di tepinya. Mengapa hama ulat justru lebih mudah meledak dibanding di kebun campuran?",
    options: ["Serangga predator alami (seperti tawon/kepik) kehilangan tempat berlindung dan nektar", "Ulat mampu berfotosintesis di lahan monokultur", "Tanaman monokultur mengundang burung pemakan ulat terlalu banyak", "Tanah monokultur mengubah cacing menjadi ulat"],
    correctIndex: 0,
    explanation: "Keanekaragaman tanaman menyediakan habitat bagi predator alami hama. Lahan monokultur miskin predator pengendali."
  },
  {
    id: "H09", difficulty: "Sulit",
    question: "Pada jaring makanan: Rumput -> Belalang & Kelinci; Belalang -> Katak -> Ular; Kelinci -> Elang; Ular -> Elang. Jika penyakit menyerang kelinci, jalur manakah yang menerima tekanan predasi lebih besar?",
    options: ["Jalur Ular dan Katak, karena Elang lebih sering memangsa Ular", "Jalur Rumput, karena Elang memakan rumput", "Tidak ada jalur yang berubah sama sekali", "Belalang langsung punah dimangsa kelinci"],
    correctIndex: 0,
    explanation: "Saat kelinci berkurang, elang memburu lebih banyak ular, yang kemudian memengaruhi populasi katak dan belalang."
  },
  {
    id: "H10", difficulty: "Sulit",
    question: "Kebakaran hutan menghanguskan semak dan pohon muda, tetapi menyisakan abu mineral di tanah. Urutan pemulihan populasi yang paling logis setelah hujan turun adalah...",
    options: ["Tumbuhan perintis/rumput tumbuh dulu -> Herbivora kembali -> Karnivora datang", "Karnivora datang dulu -> Herbivora menyusul -> Rumput tumbuh terakhir", "Elang dan harimau membuat sarang dulu -> Pohon besar langsung muncul", "Pengurai memakan batu -> Karnivora memakan abu"],
    correctIndex: 0,
    explanation: "Pemulihan ekosistem selalu diawali kembalinya produsen (tumbuhan perintis), diikuti herbivora, lalu karnivora."
  },
  {
    id: "H11", difficulty: "Sulit",
    question: "Berang-berang laut (sea otter) memangsa bulu babi, dan bulu babi memakan hutan rumput laut (kelp). Jika berang-berang laut punah di suatu teluk, apa yang terjadi pada hutan rumput laut?",
    options: ["Hutan rumput laut habis dimakan ledakan populasi bulu babi", "Hutan rumput laut tumbuh makin lebat memenuhi teluk", "Bulu babi ikut punah karena kehilangan berang-berang", "Ikan kecil menggantikan peran berang-berang memangsa hiu"],
    correctIndex: 0,
    explanation: "Berang-berang adalah spesies kunci. Tanpanya, bulu babi meledak dan menggunduli hutan rumput laut."
  },
  {
    id: "H12", difficulty: "Sulit",
    question: "Jika pada suatu rantai makanan: Padi (10.000 satuan energi) -> Tikus (1.000) -> Ular (100) -> Elang (10). Mengapa energi berkurang drastis di setiap perpindahan tingkat trofik?",
    options: ["Sebagian besar energi dipakai untuk gerak, metabolisme, panas tubuh, dan sisa tak tercerna", "Karena ular dan elang membuang 90% makanannya ke sungai", "Karena energi berubah menjadi batu dan tanah liat", "Karena matahari menyerap kembali energi dari tubuh hewan"],
    correctIndex: 0,
    explanation: "Sekitar 90% energi digunakan makhluk hidup untuk aktivitas hidup dan lepas sebagai panas, hanya ~10% tersimpan sebagai biomassa."
  },
  {
    id: "H13", difficulty: "Sulit",
    question: "Di suatu lembah: Pohon Akasia -> Jerapah & Ulat Daun; Ulat -> Burung Kecil -> Elang; Jerapah -> Singa. Jika kemarau panjang mematikan pohon akasia, manakah yang terdampak?",
    options: ["Kedua jalur (Singa maupun Elang) ikut terdampak karena sumber produsennya sama", "Hanya jalur Singa yang terdampak, jalur Elang aman selamanya", "Hanya jalur Elang yang terdampak, Jerapah bisa makan pasir", "Populasi ulat dan burung kecil justru meningkat tajam"],
    correctIndex: 0,
    explanation: "Karena pohon akasia menjadi produsen dasar bagi kedua jalur rantai tersebut, keruntuhan produsen mengguncang seluruh jaring."
  },
  {
    id: "H14", difficulty: "Sulit",
    question: "Kelelawar pemakan buah membantu penyerbukan pohon durian di malam hari, sedangkan burung hantu memangsa tikus di kebun durian. Jika petani memasang jaring yang tidak sengaja menjebak kelelawar dan burung hantu, akibatnya...",
    options: ["Bunga durian gagal berbuah DAN hama tikus merusak kebun", "Pohon durian berbuah lebat dan tikus menghilang sendiri", "Tikus menggantikan tugas kelelawar menyerbuki bunga durian", "Ulat daun berubah menjadi penyerbuk bunga malam hari"],
    correctIndex: 0,
    explanation: "Hilangnya kelelawar menghentikan penyerbukan bunga, sedangkan hilangnya burung hantu membuat populasi tikus meledak."
  },
  {
    id: "H15", difficulty: "Sulit",
    question: "Katak tebu beracun didatangkan ke suatu daerah untuk memakan kumbang hama. Namun, ular dan biawak lokal mati keracunan saat mencoba memangsa katak tebu tersebut. Dampak tak terduga yang muncul adalah...",
    options: ["Predator lokal (ular/biawak) menurun sehingga hama lain seperti tikus ikut meningkat", "Ular dan biawak bersimbiosis mutualisme dengan katak tebu", "Kumbang hama berubah menjadi predator katak tebu", "Ekosistem langsung menjadi seimbang sempurna"],
    correctIndex: 0,
    explanation: "Introduksi spesies beracun tanpa predator alami dapat membunuh predator lokal dan memicu ledakan mangsa lain."
  },
  {
    id: "H16", difficulty: "Sulit",
    question: "Semut rangrang membuat sarang di pohon mangga dan menyerang ulat pemakan daun mangga, namun semut juga melindungi kutu putih penghisap getah demi mendapat cairan manis. Peran semut di ekosistem pohon tersebut...",
    options: ["Menguntungkan pohon dari ulat, tetapi juga membantu kutu putih yang merugikan pohon", "Murni sebagai pengurai daun mangga yang jatuh ke tanah", "Sebagai produsen kedua setelah daun mangga", "Tidak memiliki hubungan apa pun dengan rantai makanan mangga"],
    correctIndex: 0,
    explanation: "Di alam, interaksi antarmakhluk hidup bisa kompleks: semut memangsa ulat (predasi) namun bermutualisme dengan kutu putih."
  },
  {
    id: "H17", difficulty: "Sulit",
    question: "Perubahan iklim membuat bunga di pegunungan mekar 3 minggu lebih cepat, sedangkan burung pemakan serangga baru tiba dari migrasi pada jadwal lama. Apa dampak ketidakcocokan waktu ini?",
    options: ["Serangga meledak saat bunga mekar, tetapi saat burung tiba makanan serangga sudah berkurang", "Burung bermigrasi mundur ke tahun sebelumnya", "Bunga berubah menjadi pemakan serangga", "Serangga menunggu burung datang baru mau makan bunga"],
    correctIndex: 0,
    explanation: "Pergeseran waktu musiman (mismatch fenologi) memutus sinkronisasi antara ketersediaan mangsa dan kebutuhan predator."
  },
  {
    id: "H18", difficulty: "Sulit",
    question: "Di ekosistem sungai Kalimantan: Buah Hutan Jatuh -> Ikan Jelawat -> Burung Elang Sungai. Jika hutan di tepi sungai ditebang habis meskipun air sungai tidak diracun, mengapa ikan jelawat tetap berkurang?",
    options: ["Ikan kehilangan pasokan makanan alami (buah/biji hutan) dari ekosistem darat tepi sungai", "Ikan jelawat naik ke darat mencari pohon yang ditebang", "Burung elang sungai memberi makan ikan jelawat", "Air sungai berubah menjadi air asin karena pohon hilang"],
    correctIndex: 0,
    explanation: "Ekosistem sungai dan hutan tepi sungai (riparian) saling terhubung; banyak ikan sungai bergantung pada buah dan serangga dari pohon tepi."
  },
  {
    id: "H19", difficulty: "Sulit",
    question: "Untuk menekan populasi nyamuk di rawa, warga punya dua pilihan: (A) Menyemprot racun serangga ke seluruh rawa, atau (B) Menebar ikan pemakan jentik lokal. Mengapa pilihan (B) lebih aman bagi jaring makanan?",
    options: ["Ikan lokal menekan jentik secara alami tanpa membunuh serangga penyerbuk dan katak", "Racun serangga hanya membunuh nyamuk dan menyuburkan semua ikan", "Ikan pemakan jentik akan memakan pohon bakau di rawa", "Pilihan A dan B sama-sama memusnahkan seluruh makhluk hidup"],
    correctIndex: 0,
    explanation: "Pengendalian hayati (biologis) dengan spesies lokal menjaga rantai makanan tetap utuh tanpa meracuni organisme non-target."
  },
  {
    id: "H20", difficulty: "Sulit",
    question: "Di ekosistem tanah: Daun Gugur -> Cacing Tanah -> Burung Jalak -> Kucing Hutan. Jika tanah tercemar limbah plastik dan deterjen hingga cacing tanah mati, dampak dua arah yang terjadi adalah...",
    options: ["Kesuburan tanah bagi tumbuhan menurun DAN burung jalak kehilangan sumber pakan", "Daun gugur berubah menjadi pupuk kimia instan", "Burung jalak memakan plastik menggantikan cacing", "Kucing hutan membantu menguraikan daun gugur"],
    correctIndex: 0,
    explanation: "Cacing tanah berperan ganda: membantu proses penguraian nutrisi tanah (ke bawah) dan menjadi mangsa konsumen (ke atas)."
  },
  {
    id: "H21", difficulty: "Sulit",
    question: "Mengapa pembangunan jalan raya lebar yang membelah hutan lebat menjadi dua bagian sempit dapat mengancam kelangsungan hidup harimau (predator puncak)?",
    options: ["Harimau membutuhkan wilayah jelajah luas untuk mencari cukup mangsa herbivora", "Harimau hanya bisa berfotosintesis di hutan yang belum dibelah", "Jalan raya membuat populasi rumput di hutan langsung punah", "Rusa menjadi predator bagi harimau di pinggir jalan"],
    correctIndex: 0,
    explanation: "Fragmentasi habitat mempersempit ruang berburu predator puncak yang memerlukan populasi mangsa besar di area luas."
  },
  {
    id: "H22", difficulty: "Sulit",
    question: "Pada jaring makanan laut kutub: Fitoplankton -> Krill (udang kecil) -> Penguin, Anjing Laut, dan Paus Balin. Mengapa Krill disebut sebagai organisme kunci di ekosistem tersebut?",
    options: ["Karena banyak predator besar bergantung langsung pada Krill sebagai penghubung energi utama", "Karena Krill adalah predator puncak yang memangsa paus", "Karena Krill dapat hidup tanpa fitoplankton dan matahari", "Karena jumlah Krill paling sedikit dibanding paus"],
    correctIndex: 0,
    explanation: "Krill menjadi jembatan utama perpindahan energi dari produsen mikroskopis ke berbagai hewan besar di kutub."
  },
  {
    id: "H23", difficulty: "Sulit",
    question: "Dalam suatu percobaan tertutup, 10 kelinci dimasukkan ke kandang rumput luas tanpa predator. Grafik populasi kelinci awalnya naik tajam, lalu turun drastis. Penyebab turunnya populasi tersebut adalah...",
    options: ["Laju konsumsi rumput melampaui kecepatan tumbuh rumput sehingga terjadi kelaparan", "Kelinci berubah menjadi karnivora yang saling memangsa", "Rumput mengeluarkan gas beracun saat disentuh kelinci", "Cahaya matahari berhenti menyinari kandang"],
    correctIndex: 0,
    explanation: "Ketika populasi herbivora melampaui kapasitas daya dukung produsen, sumber pakan habis dan populasi anjlok."
  },
  {
    id: "H24", difficulty: "Sulit",
    question: "Jamur mikoriza hidup pada akar pohon pinus: jamur membantu akar menyerap air/fosfor, sedangkan pohon pinus memberi hasil fotosintesis pada jamur. Jika tanah diberi fungisida pembunuh jamur, maka...",
    options: ["Pohon pinus tumbuh kerdil karena kesulitan menyerap air dan mineral tanah", "Pohon pinus tumbuh makin cepat karena bebas dari jamur", "Jamur berubah menjadi konsumen puncak di hutan pinus", "Ulat pinus langsung punah bersama jamur"],
    correctIndex: 0,
    explanation: "Memutus simbiosis mutualisme akar-jamur menurunkan kemampuan pohon menyerap nutrisi penting dari tanah."
  },
  {
    id: "H25", difficulty: "Sulit",
    question: "Perhatikan pernyataan berikut: (1) Produsen bertambah, (2) Elang berkurang, (3) Ular diburu manusia, (4) Tikus meledak. Urutan sebab-akibat yang benar saat terjadi perburuan ular di sawah adalah...",
    options: ["(3) Ular diburu -> (4) Tikus meledak & (2) Elang kekurangan mangsa ular", "(1) Produsen bertambah -> (3) Ular diburu -> (4) Tikus punah", "(2) Elang berkurang -> (1) Produsen bertambah -> (4) Tikus meledak", "(4) Tikus meledak -> (1) Produsen bertambah -> (3) Ular diburu"],
    correctIndex: 0,
    explanation: "Perburuan ular (3) menyebabkan mangsanya yaitu tikus meledak (4) dan pemangsa ular yaitu elang kehilangan salah satu makanannya (2)."
  }
];

/* ============================================================================
   2. MANAJER AUDIO (WEB AUDIO API SINTETIS 8-BIT + LOADER FILE OPSIONAL)
   ============================================================================ */
class GameAudioManager {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.musicVolume = 0.28;
    this.sfxVolume = 0.45;
    this.currentMusicKey = null;
    this.musicLoopTimer = null;
    this.activeHtmlAudio = null;
    this.stepIndex = 0;

    this.optionalPaths = {};
    this.fileCacheStatus = {};
    this.htmlAudioElements = {};

    this.loadPreferences();
  }

  loadPreferences() {
    try {
      const savedMute = localStorage.getItem("penjaga_rimba_mute");
      if (savedMute !== null) this.muted = savedMute === "true";
    } catch (e) {}
  }

  savePreferences() {
    try {
      localStorage.setItem("penjaga_rimba_mute", String(this.muted));
    } catch (e) {}
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        try { this.ctx = new AudioCtx(); } catch (e) {}
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  toggleMute() {
    this.initContext();
    this.muted = !this.muted;
    this.savePreferences();
    if (this.muted) {
      this.stopMusic();
    } else if (this.currentMusicKey) {
      const keyToResume = this.currentMusicKey;
      this.currentMusicKey = null;
      this.playMusic(keyToResume);
    }
    return this.muted;
  }

  tryOptionalAudio(key, isLoop = false, onFallback) {
    if (this.fileCacheStatus[key] === "failed") {
      onFallback();
      return;
    }

    const path = this.optionalPaths[key];
    if (!path) {
      onFallback();
      return;
    }

    let audio = this.htmlAudioElements[key];
    if (!audio) {
      audio = new Audio();
      audio.preload = "auto";
      audio.src = path;
      this.htmlAudioElements[key] = audio;
    }

    audio.loop = isLoop;
    audio.volume = isLoop ? this.musicVolume : this.sfxVolume;

    let settled = false;
    const fallbackTrigger = () => {
      if (settled) return;
      settled = true;
      this.fileCacheStatus[key] = "failed";
      onFallback();
    };

    const timer = setTimeout(fallbackTrigger, 350);
    audio.onerror = fallbackTrigger;

    try {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          if (settled) {
            audio.pause();
            return;
          }
          settled = true;
          clearTimeout(timer);
          this.fileCacheStatus[key] = "ready";
          if (isLoop) {
            if (this.currentMusicKey !== key || this.muted) {
              audio.pause();
            } else {
              this.activeHtmlAudio = audio;
            }
          }
        }).catch(fallbackTrigger);
      }
    } catch (err) {
      fallbackTrigger();
    }
  }

  stopMusic() {
    if (this.musicLoopTimer) {
      clearInterval(this.musicLoopTimer);
      this.musicLoopTimer = null;
    }
    if (this.activeHtmlAudio) {
      try {
        this.activeHtmlAudio.pause();
        this.activeHtmlAudio.currentTime = 0;
      } catch (e) {}
      this.activeHtmlAudio = null;
    }
  }

  playMusic(key) {
    this.currentMusicKey = key;
    this.stopMusic();
    if (this.muted) return;
    this.initContext();

    this.tryOptionalAudio(key, true, () => {
      if (this.muted || this.currentMusicKey !== key) return;
      this.startSynthMusicLoop(key);
    });
  }

  startSynthMusicLoop(key) {
    this.stopMusic();
    if (!this.ctx || this.muted) return;

    this.stepIndex = 0;
    const menuNotes = [261.63, 329.63, 392.00, 523.25, 392.00, 329.63, 293.66, 349.23];
    const gameNotes = [329.63, 392.00, 440.00, 523.25, 493.88, 440.00, 392.00, 329.63, 293.66, 349.23, 392.00, 440.00];
    const seq = key === "menu_theme" ? menuNotes : gameNotes;
    const tempoMs = key === "menu_theme" ? 290 : 230;

    this.musicLoopTimer = setInterval(() => {
      if (this.muted || !this.ctx || document.hidden) return;
      const freq = seq[this.stepIndex % seq.length];
      this.playTone(freq, tempoMs / 1000 * 0.75, key === "menu_theme" ? "triangle" : "square", this.musicVolume * 0.45);
      if (this.stepIndex % 2 === 0) {
        this.playTone(freq / 2, tempoMs / 1000 * 0.6, "triangle", this.musicVolume * 0.35);
      }
      this.stepIndex++;
    }, tempoMs);
  }

  playTone(freq, duration, type = "square", gainVal = 0.2, delay = 0) {
    if (!this.ctx || this.muted) return;
    try {
      const now = this.ctx.currentTime + delay;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(gainVal, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration + 0.02);
    } catch (e) {}
  }

  playSfx(key) {
    if (this.muted) return;
    this.initContext();

    this.tryOptionalAudio(key, false, () => {
      if (this.muted || !this.ctx) return;
      switch (key) {
        case "click":
          this.playTone(587.33, 0.09, "square", this.sfxVolume * 0.5);
          break;
        case "correct":
          this.playTone(523.25, 0.11, "square", this.sfxVolume * 0.6, 0);
          this.playTone(659.25, 0.11, "square", this.sfxVolume * 0.6, 0.09);
          this.playTone(783.99, 0.18, "triangle", this.sfxVolume * 0.7, 0.18);
          break;
        case "wrong":
          this.playTone(311.13, 0.16, "sawtooth", this.sfxVolume * 0.5, 0);
          this.playTone(233.08, 0.24, "sawtooth", this.sfxVolume * 0.5, 0.15);
          break;
        case "win":
          [523.25, 659.25, 783.99, 1046.50].forEach((f, idx) => {
            this.playTone(f, 0.22, "square", this.sfxVolume * 0.65, idx * 0.14);
          });
          break;
        case "lose":
          [392.00, 349.23, 329.63, 261.63].forEach((f, idx) => {
            this.playTone(f, 0.24, "triangle", this.sfxVolume * 0.6, idx * 0.16);
          });
          break;
      }
    });
  }
}

/* ============================================================================
   3. DETEKTOR KHUSUS TELAPAK TANGAN (21 HAND LANDMARKS - ANTI WAJAH / BADAN)
   Menggunakan MediaPipe HandLandmarker untuk mendeteksi 21 titik anatomi telapak
   tangan & jari secara spesifik. Wajah, kepala, bahu, dan badan diabaikan 100%.
   ============================================================================ */
class PalmOnlyDetector extends CameraHandSensor {
  constructor(video, canvas) {
    super(video, canvas);
    this.detectedPalms = []; this.persistedPalms = []; this.particles = [];
    this.palmPersistenceMs = 500; this.modelLoading = false;
  }
  get cameraReady() {return !!this.stream?.getVideoTracks().some(t => t.readyState === 'live');}
  get modelReady() {return this.ready;}
  get modelError() {return this.error;}
  async listCameras() {
    const select = document.getElementById('select-camera'), selected = select.value;
    if (!navigator.mediaDevices?.enumerateDevices) return;
    const devices = await navigator.mediaDevices.enumerateDevices();
    select.replaceChildren(new Option('Depan / otomatis', 'user'), new Option('Belakang', 'environment'));
    devices.filter(d => d.kind === 'videoinput' && d.deviceId).forEach((d,i) =>
      select.add(new Option(d.label || 'Kamera '+(i+1), 'device:'+d.deviceId)));
    if ([...select.options].some(o => o.value === selected)) select.value = selected;
  }
  async startCamera() {
    if (this._cameraPromise) return this._cameraPromise;
    const pending = this.openCamera(); this._cameraPromise = pending;
    try {return await pending;} finally {if (this._cameraPromise === pending) {this._cameraPromise = null;this.modelLoading = false;}}
  }
  async openCamera() {
    this.cameraError = null; this.error = null; this.modelLoading = true;
    this.detectedPalms = []; this.persistedPalms = [];
    const arena = document.getElementById('arena-container'); arena.classList.remove('camera-on');
    const generation = this.generation+1;
    try {
      const ready = await super.start({camera:document.getElementById('select-camera').value || 'user',
        preference:document.getElementById('select-sensor-mode').value === 'CPU' ? 'cpu' : 'auto',
        numHands:['pvp_duel','coop_com'].includes(window.gameApp?.mode) ? 2 : 1});
      if (!ready || generation !== this.generation) return {ok:false,cancelled:true};
      await this.listCameras().catch(() => {});
      if (generation !== this.generation) return {ok:false,cancelled:true};
      arena.classList.add('camera-on');
      document.getElementById('btn-mirror-camera').textContent = this.mirror ? 'Cermin: aktif' : 'Cermin: mati';
      return {ok:true,modelReady:true,delegate:this.delegate};
    } catch (error) {
      // start() increments the generation again when it cleans up a failed start.
      const messages = {NotAllowedError:'Izinkan kamera di setelan browser dan izin aplikasi Android.',
        NotFoundError:'Kamera tidak ditemukan. Pilih kamera yang tersedia atau periksa sambungan USB.',
        NotReadableError:'Kamera sedang dipakai aplikasi lain. Tutup aplikasi tersebut lalu coba lagi.',
        OverconstrainedError:'Kamera yang dipilih tidak tersedia. Pilih kamera lain.'};
      const message = messages[error.name] || error.message;
      if (generation === this.generation || generation+1 === this.generation) this.cameraError = message;
      return {ok:false,error:message};
    } finally {if (generation === this.generation || !this._cameraPromise) this.modelLoading = false;}
  }
  stopCamera() {
    super.stop(); this._cameraPromise = null; this.modelLoading = false;
    this.detectedPalms = []; this.persistedPalms = []; this.particles = []; this.shots = []; this.impacts = [];
    document.getElementById('arena-container').classList.remove('camera-on');
  }
  updateStatus() {
    const label = document.getElementById('sensor-live-detail'), badge = document.getElementById('detector-badge');
    const message = this.cameraError || (this.modelLoading ? 'Memuat kamera dan sensor…' :
      this.ready ? this.statusText() : this.error || 'Kamera belum aktif • sentuh/keyboard tetap tersedia');
    if (label) label.textContent = message;
    if (badge) badge.textContent = this.ready ? this.statusText() : 'Sensor belum siap';
    const pill = document.getElementById('camera-status-pill');
    if (pill) pill.textContent = this.ready ? 'Kamera siap: '+this.cameraLabel : message;
  }
  detectPalmsInFrame() {
    const hands = super.readHands(performance.now()), old = this.persistedPalms;
    this.persistedPalms = hands.map(hand => {
      const previous = old.find(p => p.trackId === hand.trackId), lm = hand.points;
      const radius = Math.max(20, Math.min(80, Math.hypot(lm[9].x-lm[0].x,lm[9].y-lm[0].y)*.95));
      return {x:hand.x,y:hand.y,cx:hand.x,cy:hand.y,radius,span:Math.hypot(lm[5].x-lm[17].x,lm[5].y-lm[17].y),
        landmarks:lm,lastSeen:hand.lastSeen,ttl:500,trackId:hand.trackId,
        flashUntil:previous?.flashUntil || 0,hitProgress:previous?.hitProgress || 0};
    });
    this.detectedPalms = this.persistedPalms; return this.detectedPalms;
  }
  getArenaRect(){return this.cachedRect(this.canvas,"canvas");}
  getVideoDisplayBox() {
    const arenaRect = this.getArenaRect();
    const screenW = arenaRect.width || window.innerWidth || 1;
    const screenH = arenaRect.height || window.innerHeight || 1;
    const vw = this.video.videoWidth || 1280;
    const vh = this.video.videoHeight || 720;

    const videoAspect = vw / vh;
    const screenAspect = screenW / screenH;

    let renderW, renderH, offsetX, offsetY;
    if (screenAspect > videoAspect) {
      renderH = screenH;
      renderW = screenH * videoAspect;
      offsetX = arenaRect.left + (screenW - renderW) / 2;
      offsetY = arenaRect.top;
    } else {
      renderW = screenW;
      renderH = screenW / videoAspect;
      offsetX = arenaRect.left;
      offsetY = arenaRect.top + (screenH - renderH) / 2;
    }
    return {
      renderW,
      renderH,
      offsetX,
      offsetY,
      screenW,
      screenH,
      arenaLeft: arenaRect.left,
      arenaTop: arenaRect.top,
      arenaCenterX: arenaRect.left + screenW * 0.5
    };
  }

  circleIntersectsRect(cx, cy, radius, rect) {
    const closestX = Math.max(rect.left, Math.min(cx, rect.right));
    const closestY = Math.max(rect.top, Math.min(cy, rect.bottom));
    const dist = Math.hypot(cx - closestX, cy - closestY);
    return { hit: dist <= radius, dist };
  }

  analyzeZones(zoneRectsByPlayer) {
    const palms = this.detectPalmsInFrame();
    const result = {
      cameraActive: this.cameraReady && this.video.readyState >= 2,
      modelReady: this.modelReady,
      palmCount: palms.length,
      players: {}
    };

    if (!result.cameraActive || !result.modelReady) return result;

    const box = this.getVideoDisplayBox();
    const isDuel = Object.keys(zoneRectsByPlayer).length === 2;

    for (const [playerKey, zones] of Object.entries(zoneRectsByPlayer)) {
      const pIdx = Number(playerKey);
      const playerPalms = palms.filter(palm => {
        if (!isDuel || isNaN(pIdx)) return true;
        if (pIdx === 0) return palm.x < box.arenaCenterX;
        return palm.x >= box.arenaCenterX;
      });

      const scores = new Array(zones.length).fill(0);
      let bestZoneIdx = -1;
      let bestZoneDist = Infinity;

      for (let z = 0; z < zones.length; z++) {
        const rect = zones[z];
        const rectCenterX = (rect.left + rect.right) / 2;
        const rectCenterY = (rect.top + rect.bottom) / 2;

        for (const palm of playerPalms) {
          const circleCheck = this.circleIntersectsRect(palm.x, palm.y, palm.radius + 18, rect);
          let isHit = circleCheck.hit;

          if (!isHit && palm.landmarks) {
            const keyIndices = [0, 4, 5, 8, 9, 12, 13, 16, 17, 20];
            for (const kIdx of keyIndices) {
              const pt = palm.landmarks[kIdx];
              if (
                pt &&
                pt.x >= rect.left - 18 &&
                pt.x <= rect.right + 18 &&
                pt.y >= rect.top - 18 &&
                pt.y <= rect.bottom + 18
              ) {
                isHit = true;
                break;
              }
            }
          }

          if (isHit) {
            const distToBubbleCenter = Math.hypot(palm.x - rectCenterX, palm.y - rectCenterY);
            if (distToBubbleCenter < bestZoneDist) {
              bestZoneDist = distToBubbleCenter;
              bestZoneIdx = z;
            }
          }
        }
      }

      if (bestZoneIdx !== -1) {
        scores[bestZoneIdx] = 1.0;
      }

      result.players[playerKey] = {
        scores,
        palmDetected: playerPalms.length > 0,
        globalSpike: false
      };
    }

    return result;
  }

  spawnParticles(x, y, color = "#FFB300") {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    if (this.particles.length > 40) return;
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12;
      const speed = 2 + Math.random() * 4;
      this.particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1.0, color });
    }
  }

  renderOverlay() {
    const hasContent = this.detectedPalms.length > 0 || this.particles.length > 0;
    if (!hasContent && !this.overlayHadContent) return; // tidak ada yang digambar -> hemat CPU/GPU
    this.overlayHadContent = hasContent;

    const arenaRect = this.getArenaRect();
    const targetW = Math.max(1, Math.round(arenaRect.width));
    const targetH = Math.max(1, Math.round(arenaRect.height));
    // Batasi resolusi kanvas (layar IFP 4K sangat berat bila kanvas ikut 3840x2160)
    const k = Math.min(1, 1280 / targetW);
    const bw = Math.round(targetW * k), bh = Math.round(targetH * k);
    if (this.canvas.width !== bw || this.canvas.height !== bh) {
      this.canvas.width = bw;
      this.canvas.height = bh;
    }
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (!hasContent) return;
    this.ctx.setTransform(k, 0, 0, k, 0, 0);

    this.ctx.save();
    this.ctx.translate(-arenaRect.left, -arenaRect.top);

    for (const palm of this.detectedPalms) {
      const lm = palm.landmarks;
      if (!lm) continue;

      const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4],
        [0, 5], [5, 6], [6, 7], [7, 8],
        [0, 9], [9, 10], [10, 11], [11, 12],
        [0, 13], [13, 14], [14, 15], [15, 16],
        [0, 17], [17, 18], [18, 19], [19, 20],
        [5, 9], [9, 13], [13, 17]
      ];

      this.ctx.save();
      this.ctx.strokeStyle = "rgba(74, 222, 128, 0.85)";
      this.ctx.lineWidth = 3;
      for (const [a, b] of connections) {
        this.ctx.beginPath();
        this.ctx.moveTo(lm[a].x, lm[a].y);
        this.ctx.lineTo(lm[b].x, lm[b].y);
        this.ctx.stroke();
      }

      for (let i = 0; i < lm.length; i++) {
        this.ctx.fillStyle = (i === 4 || i === 8 || i === 12 || i === 16 || i === 20) ? "#FFB300" : "#FFFFFF";
        this.ctx.beginPath();
        this.ctx.arc(lm[i].x, lm[i].y, 4, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.strokeStyle = "#FFB300";
      this.ctx.lineWidth = 4;
      this.ctx.fillStyle = "rgba(255, 179, 0, 0.22)";
      this.ctx.beginPath();
      this.ctx.arc(palm.x, palm.y, palm.radius, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.stroke();

      this.ctx.font = "bold 20px sans-serif";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.fillStyle = "#FFFFFF";
      this.ctx.fillText("🖐️", palm.x, palm.y);
      this.ctx.restore();
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.04;
      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = Math.max(0, p.life);
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      this.ctx.fill();
    }
    this.ctx.globalAlpha = 1;
    this.ctx.restore();
  }
}

/* ============================================================================
   4. ENGINE PERMAINAN UTAMA (PENJAGA RIMBA: GELEMBUNG EKOSISTEM)
   ============================================================================ */
class EcosystemQuadrantGame {
  constructor() {
    this.audio = new GameAudioManager();
    this.detector = new PalmOnlyDetector(
      document.getElementById("webcam-video"),
      document.getElementById("motion-canvas")
    );

    this.questionBank = this.loadBank();
    this.mode = "solo_com";
    this.difficulty = "Mudah";
    this.posture = "seated";
    this.sessionDurationSec = 600;
    this.sessionTimeLeft = 600;
    this.lastCountdownBeepSec = -1;
    this.questionsPerSession = 25;

    this.state = "COVER";
    this.players = [];
    this.comState = null;
    this.tourneyState = null;
    this.sessionHistory = [];

    this.dwellDurationMs = 360;
    this.practiceSelector = new CameraDwellSelector(this.dwellDurationMs);
    this.dwellHoldGraceMs = 300;
    this.cooldownMs = 750;
    this.readPhaseMs = 1200;

    this.pointerMap = new Map();
    this.practiceDwell = 0;
    this.practiceLastMotionAt = 0;
    this.practiceAutoTimer = null;
    this.lastFrameTime = performance.now();

    this.bindEvents();
    this.renderEditorList("ALL");
    requestAnimationFrame((t) => this.mainLoop(t));
  }

  loadBank() {
    try {
      const saved = localStorage.getItem("penjaga_rimba_bank_v1");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (this.validateBankArray(parsed).valid) return parsed;
      }
    } catch (e) {}
    return JSON.parse(JSON.stringify(DEFAULT_QUESTION_BANK));
  }

  saveBank() {
    try {
      localStorage.setItem("penjaga_rimba_bank_v1", JSON.stringify(this.questionBank));
    } catch (e) {}
  }

  validateBankArray(arr) {
    if (!Array.isArray(arr) || arr.length < 15) {
      return { valid: false, msg: "Format JSON harus berupa Array dengan minimal 15 soal." };
    }
    return { valid: true, msg: `Berhasil memuat ${arr.length} soal valid!` };
  }

  buildSessionQuestions(diff, count) {
    const pool = this.questionBank.filter(q => q.difficulty === diff);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length)).map(q => {
      const indexedOpts = q.options.map((text, idx) => ({ text, isCorrect: idx === q.correctIndex }));
      indexedOpts.sort(() => Math.random() - 0.5);
      return {
        id: q.id,
        difficulty: q.difficulty,
        question: q.question,
        options: indexedOpts.map(o => o.text),
        correctIndex: indexedOpts.findIndex(o => o.isCorrect),
        explanation: q.explanation
      };
    });
  }

  bindEvents() {
    const modeSelect=document.getElementById('select-sensor-mode');
    if(/Android/i.test(navigator.userAgent))modeSelect.value='CPU';
    modeSelect.addEventListener('change',()=>this.requestCameraAndUpdateUI());
    document.getElementById('select-camera').addEventListener('change',()=>this.requestCameraAndUpdateUI());
    document.getElementById('btn-camera-live').addEventListener('click',()=>this.requestCameraAndUpdateUI());
    document.getElementById('btn-mirror-camera').addEventListener('click',()=>{
      this.detector.setMirror(!this.detector.mirror);this.resetCameraSelection();
      document.getElementById('btn-mirror-camera').textContent=this.detector.mirror?'Cermin: aktif':'Cermin: mati';
    });
    window.addEventListener('resize',()=>this.resetCameraSelection());
    document.addEventListener('fullscreenchange',()=>this.resetCameraSelection());
    window.addEventListener('pagehide',()=>this.detector.stopCamera());
    document.getElementById("btn-toggle-audio").addEventListener("click", () => {
      const muted = this.audio.toggleMute();
      document.getElementById("audio-icon").textContent = muted ? "🔇" : "🔊";
      document.getElementById("audio-label").textContent = muted ? "Suara Mati" : "Suara Aktif";
      if (!muted && this.state === "COVER") this.audio.playMusic("menu_theme");
    });

    document.getElementById("btn-fullscreen").addEventListener("click", () => {
      this.audio.playSfx("click");
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
    });

    document.getElementById("btn-start-main").addEventListener("click", async () => {
      this.audio.initContext();
      this.audio.playSfx("click");
      this.audio.playMusic("menu_theme");

      this.mode = document.getElementById("select-mode")?.value || "solo_com";
      this.difficulty = document.getElementById("select-diff")?.value || "Mudah";
      this.posture = document.getElementById("select-posture")?.value || "seated";
      const rawDur = document.getElementById("select-duration")?.value;
      const durVal = rawDur !== undefined ? Number(rawDur) : 600;
      this.sessionDurationSec = !isNaN(durVal) && durVal >= 0 ? durVal : 600;

      this.openCalibrationScreen();
    });

    document.getElementById("btn-calib-back").addEventListener("click", () => {
      this.audio.playSfx("click");
      this.clearPracticeTimer();
      this.showScreen("cover-screen");
      this.state = "COVER";
    });

    document.getElementById("btn-retry-cam").addEventListener("click", () => {
      this.audio.playSfx("click");
      this.requestCameraAndUpdateUI();
    });

    document.getElementById("btn-skip-practice").addEventListener("click", () => {
      this.audio.playSfx("click");
      this.clearPracticeTimer();
      this.startConfiguredSession();
    });

    const practiceTarget = document.getElementById("practice-target");
    practiceTarget.addEventListener("click", () => {
      this.audio.playSfx("correct");
      this.clearPracticeTimer();
      this.startConfiguredSession();
    });

    document.getElementById("btn-pause-game").addEventListener("click", () => this.pauseGame());
    document.getElementById("btn-finish-game").addEventListener("click", () => {
      this.audio.playSfx("click");
      this.finishSessionAndShowResults();
    });
    document.getElementById("btn-resume-game").addEventListener("click", () => this.resumeGame());
    document.getElementById("btn-end-from-pause").addEventListener("click", () => {
      this.audio.playSfx("click");
      document.getElementById("pause-modal").classList.add("hidden");
      this.finishSessionAndShowResults();
    });
    document.getElementById("btn-restart-session").addEventListener("click", () => {
      document.getElementById("pause-modal").classList.add("hidden");
      this.startConfiguredSession();
    });
    document.getElementById("btn-quit-to-cover").addEventListener("click", () => {
      document.getElementById("pause-modal").classList.add("hidden");
      this.state = "COVER";
      this.audio.playMusic("menu_theme");
      this.showScreen("cover-screen");
    });

    document.getElementById("btn-switch-posture-live").addEventListener("click", () => {
      this.audio.playSfx("click");
      this.posture = this.posture === "seated" ? "standing" : "seated";
      this.applyPostureClasses();
    });

    document.getElementById("btn-play-again").addEventListener("click", () => {
      this.audio.playSfx("click");
      this.openCalibrationScreen();
    });
    document.getElementById("btn-result-home").addEventListener("click", () => {
      this.audio.playSfx("click");
      this.state = "COVER";
      this.audio.playMusic("menu_theme");
      this.showScreen("cover-screen");
    });

    document.getElementById("btn-open-guide").addEventListener("click", () => {
      this.audio.playSfx("click");
      document.getElementById("guide-modal").classList.remove("hidden");
    });
    document.getElementById("btn-close-guide").addEventListener("click", () => {
      document.getElementById("guide-modal").classList.add("hidden");
    });

    document.getElementById("btn-open-editor").addEventListener("click", () => {
      this.audio.playSfx("click");
      this.renderEditorList("ALL");
      document.getElementById("editor-modal").classList.remove("hidden");
    });
    document.getElementById("btn-close-editor").addEventListener("click", () => {
      document.getElementById("editor-modal").classList.add("hidden");
    });

    document.querySelectorAll(".editor-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".editor-filter-btn").forEach(b => {
          b.classList.remove("bg-amber-500", "text-slate-950");
          b.classList.add("bg-slate-800", "text-white");
        });
        btn.classList.remove("bg-slate-800", "text-white");
        btn.classList.add("bg-amber-500", "text-slate-950");
        this.renderEditorList(btn.dataset.filter);
      });
    });

    document.getElementById("btn-export-json").addEventListener("click", () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.questionBank, null, 2));
      const a = document.createElement("a");
      a.href = dataStr;
      a.download = "bank_soal_ipas_ekosistem_75.json";
      a.click();
    });

    document.getElementById("input-import-json").addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const msgBox = document.getElementById("editor-status-msg");
        msgBox.classList.remove("hidden", "bg-emerald-800", "bg-rose-800");
        try {
          const parsed = JSON.parse(ev.target.result);
          const check = this.validateBankArray(parsed);
          if (!check.valid) {
            msgBox.classList.add("bg-rose-800");
            msgBox.textContent = "❌ Gagal Impor: " + check.msg;
          } else {
            this.questionBank = parsed;
            this.saveBank();
            this.renderEditorList("ALL");
            msgBox.classList.add("bg-emerald-800");
            msgBox.textContent = "✅ " + check.msg;
          }
        } catch (err) {
          msgBox.classList.add("bg-rose-800");
          msgBox.textContent = "❌ File JSON rusak.";
        }
      };
      reader.readAsText(file);
    });

    document.getElementById("btn-reset-bank").addEventListener("click", () => {
      this.questionBank = JSON.parse(JSON.stringify(DEFAULT_QUESTION_BANK));
      this.saveBank();
      this.renderEditorList("ALL");
      const msgBox = document.getElementById("editor-status-msg");
      msgBox.className = "my-2 px-4 py-2 rounded-lg text-xs font-bold bg-emerald-800";
      msgBox.textContent = "✅ Bank soal dikembalikan ke 75 soal standar.";
    });

    window.addEventListener("keydown", (e) => {
      if (this.state !== "PLAYING") return;
      const key = e.key.toUpperCase();
      const p1Map = { "Q": 0, "W": 1, "A": 2, "S": 3, "1": 0, "2": 1, "3": 2, "4": 3 };
      const p2Map = { "I": 0, "O": 1, "K": 2, "L": 3 };

      if (p1Map[key] !== undefined && this.players[0]) {
        this.submitAnswer(0, p1Map[key], true);
      }
      if (p2Map[key] !== undefined) {
        if (this.players[1]) {
          this.submitAnswer(1, p2Map[key], true);
        } else if (this.players[0]) {
          this.submitAnswer(0, p2Map[key], true);
        }
      }
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.audio.stopMusic();
        if (this.state === "PLAYING") this.pauseGame();
      } else if (!this.audio.muted && this.state === "COVER") {
        this.audio.playMusic("menu_theme");
      }
    });
  }

  resetCameraSelection(){
    this.practiceSelector.reset();this.practiceDwell=0;
    this.players.forEach(p=>{p.dwellSelector.reset();p.dwellTarget=-1;p.dwellProgress=0;});
    this.detector.hands=[];this.detector.associationHands=[];this.detector.detectedPalms=[];this.detector.persistedPalms=[];
  }
  showScreen(screenId) {
    if(['cover-screen','results-screen'].includes(screenId)){
      this.detector.stopCamera();this._requestingCamera=null;
      ['select-camera','select-sensor-mode','btn-retry-cam','btn-camera-live','btn-mirror-camera'].forEach(id=>document.getElementById(id).disabled=false);
    }
    ["cover-screen", "calibration-screen", "gameplay-screen", "results-screen"].forEach(id => {
      const el = document.getElementById(id);
      if (id === screenId) el.classList.remove("hidden");
      else el.classList.add("hidden");
    });
  }

  async openCalibrationScreen() {
    this.state = "CALIB";
    this.showScreen("calibration-screen");
    this.resetCameraSelection();
    this.practiceDwell = 0;
    this.practiceLastMotionAt = 0;
    document.getElementById("practice-progress").style.width = "0%";

    const modeTitles = {
      solo_com: "Kalibrasi Solo vs COM (Kesatria Arka)",
      pvp_duel: "Kalibrasi Duel 2 Pemain Serentak (Kiri P1 & Kanan P2)",
      coop_com: "Kalibrasi 2 Pemain Kooperatif vs COM",
      tourney_4p: "Kalibrasi Lomba 4 Pemain (Giliran Setara)"
    };
    document.getElementById("calib-title").textContent = modeTitles[this.mode] || "Kalibrasi Kamera";
    await this.requestCameraAndUpdateUI();
  }

  clearPracticeTimer() {
    if (this.practiceAutoTimer) {
      clearInterval(this.practiceAutoTimer);
      this.practiceAutoTimer = null;
    }
  }

  async requestCameraAndUpdateUI() {
    const pill = document.getElementById("camera-status-pill");
    pill.textContent = "📷 Memuat Kamera & Sensor Telapak Tangan...";
    pill.className = "px-3 py-1.5 rounded-full text-xs font-bold bg-amber-700 text-white";


    if(this._requestingCamera)return;
    const requestToken={};this._requestingCamera=requestToken;
    const controls=['select-camera','select-sensor-mode','btn-retry-cam','btn-camera-live','btn-mirror-camera'];
    controls.forEach(id=>document.getElementById(id).disabled=true);
    this.resetCameraSelection();
    let res;
    try{res=await this.detector.startCamera();}finally{
      if(this._requestingCamera===requestToken){this._requestingCamera=null;controls.forEach(id=>document.getElementById(id).disabled=false);}
    }
    if(res.cancelled||!['CALIB','PLAYING','PAUSED'].includes(this.state))return;

    if (res.ok && res.modelReady) {
      pill.textContent = "✅ Sensor Telapak Tangan Aktif";
      pill.className = "px-3 py-1.5 rounded-full text-xs font-bold bg-green-700 text-white";
    } else if (res.ok && !res.modelReady) {
      pill.textContent = "⚠️ Kamera Aktif (Model Tangan Offline — Gunakan Klik/Sentuh)";
      pill.className = "px-3 py-1.5 rounded-full text-xs font-bold bg-amber-700 text-white";
    } else {
      pill.textContent = res.error || "Kamera belum tersedia — gunakan sentuh/keyboard.";
      pill.className = "px-3 py-1.5 rounded-full text-xs font-bold bg-rose-700 text-white";
    }
  }

  startConfiguredSession() {
    this.resetCameraSelection();
    this.sessionHistory = [];
    this.pointerMap.clear();
    this.sessionTimeLeft = this.sessionDurationSec;
    this.lastCountdownBeepSec = -1;

    if (this.mode === "tourney_4p") {
      this.tourneyState = {
        currentPlayerIdx: 0,
        scores: [0, 0, 0, 0],
        corrects: [0, 0, 0, 0],
        names: ["Pemain 1 (Raka)", "Pemain 2 (Arka)", "Pemain 3 (Sinta)", "Pemain 4 (Bima)"],
        sharedQuestions: this.buildSessionQuestions(this.difficulty, 25)
      };
      this.startSubRoundForTourney();
      return;
    }

    this.tourneyState = null;
    const baseQuestions = this.buildSessionQuestions(this.difficulty, 25);

    if (this.mode === "pvp_duel") {
      const p1Questions = JSON.parse(JSON.stringify(baseQuestions));
      const p2Questions = JSON.parse(JSON.stringify(baseQuestions));
      this.players = [
        this.createPlayerState(0, "P1 • Raka Rimba", p1Questions),
        this.createPlayerState(1, "P2 • Kesatria Arka", p2Questions)
      ];
      this.comState = null;
    } else if (this.mode === "solo_com" || this.mode === "coop_com") {
      const label = this.mode === "coop_com" ? "Tim Raka & Arka (2P)" : "P1 • Raka Rimba";
      this.players = [
        this.createPlayerState(0, label, baseQuestions)
      ];
      const comAccMap = { "Mudah": 0.68, "Sedang": 0.76, "Sulit": 0.82 };
      this.comState = {
        name: "COM • Kesatria Virtual",
        score: 0,
        qIndex: 0,
        correctCount: 0,
        accuracy: comAccMap[this.difficulty] || 0.72,
        nextActionAt: performance.now() + 6500,
        statusText: "Menganalisis..."
      };
    }

    this.launchGameplayUI();
  }

  startSubRoundForTourney() {
    const t = this.tourneyState;
    const pName = t.names[t.currentPlayerIdx];
    this.sessionTimeLeft = this.sessionDurationSec;
    this.lastCountdownBeepSec = -1;
    const roundQuestions = this.buildSessionQuestions(this.difficulty, 25);
    this.players = [
      this.createPlayerState(0, pName, roundQuestions)
    ];
    this.comState = null;
    this.launchGameplayUI();
  }

  createPlayerState(idx, name, questions) {
    const now = performance.now();
    const anchorSeeds = [
      { ax: 0.22, ay: 0.26, vx: 0.045, vy: 0.035, phase: 0.0 },
      { ax: 0.78, ay: 0.26, vx: -0.042, vy: 0.038, phase: 1.6 },
      { ax: 0.22, ay: 0.74, vx: 0.038, vy: -0.042, phase: 3.1 },
      { ax: 0.78, ay: 0.74, vx: -0.044, vy: -0.036, phase: 4.7 }
    ];
    return {
      idx,
      name,
      questions,
      questionIndex: 0,
      answeredCount: 0,
      score: 0,
      correctCount: 0,
      streak: 0,
      finished: false,
      dwellSelector: new CameraDwellSelector(this.dwellDurationMs),
      dwellTarget: -1,
      dwellProgress: 0,
      lastZoneMotionAt: [0, 0, 0, 0],
      cooldownUntil: now + 900,
      readPhaseUntil: now + this.readPhaseMs,
      questionTimeLeft: 30.0,
      feedbackBanner: null,
      feedbackUntil: 0,
      bubbles: anchorSeeds.map((seed, bIdx) => ({
        idx: bIdx, x: seed.ax, y: seed.ay, vx: seed.vx, vy: seed.vy, phase: seed.phase
      }))
    };
  }

  formatDurationMMSS(seconds) {
    if (this.sessionDurationSec === 0) {
      return "♾️ TANPA WAKTU";
    }
    const clamped = Math.max(0, Math.ceil(seconds));
    const mins = Math.floor(clamped / 60);
    const secs = clamped % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  getDurationLabelText() {
    if (this.sessionDurationSec === 0) return "Tanpa Batas Waktu";
    return `${Math.round(this.sessionDurationSec / 60)} Menit`;
  }

  launchGameplayUI() {
    this.state = "PLAYING";
    this.showScreen("gameplay-screen");
    this.audio.playMusic("gameplay_theme");

    const playfield = document.getElementById("arena-playfield");
    playfield.innerHTML = "";

    const isDuel = this.players.length === 2;
    playfield.className = isDuel
      ? "relative flex-1 w-full h-full grid grid-cols-2 divide-x-4 divide-amber-400/70 overflow-hidden"
      : "relative flex-1 w-full h-full flex overflow-hidden";

    this.players.forEach((p, idx) => {
      const vp = document.createElement("div");
      vp.id = `viewport-p${idx}`;
      vp.className = "relative w-full h-full flex flex-col justify-between p-2 md:p-4 pointer-events-none";

      vp.innerHTML = `
        <div class="w-full max-w-4xl mx-auto bg-slate-950/90 border-2 ${idx === 0 ? 'border-emerald-400' : 'border-amber-400'} rounded-2xl px-4 py-2.5 shadow-2xl z-10">
          <div class="flex items-center justify-between text-xs md:text-sm font-extrabold mb-1">
            <span id="vp-qmeta-p${idx}" class="text-amber-300 uppercase">${p.name} • SOAL 1/${p.questions.length}</span>
            <div class="flex items-center gap-2">
              <span id="vp-timer-p${idx}" class="font-mono text-base md:text-lg font-black text-emerald-300">30.0s</span>
            </div>
          </div>
          <p id="vp-qtext-p${idx}" class="text-sm sm:text-base md:text-lg font-extrabold text-white leading-snug">
            Memuat pertanyaan ekosistem...
          </p>
        </div>

        <div id="quad-wrapper-p${idx}" class="relative flex-1 w-full my-1.5 overflow-hidden">
          <div class="face-safe-zone absolute inset-0 m-auto w-28 h-28 md:w-44 md:h-44 flex flex-col items-center justify-center text-center p-2 z-0">
            <span class="text-[10px] font-bold text-white/40 uppercase">Zona Wajah Aman</span>
            <span id="vp-feedback-p${idx}" class="mt-1 hidden px-3 py-1.5 rounded-xl text-xs md:text-sm font-black shadow-lg z-30"></span>
          </div>

          ${[0, 1, 2, 3].map(qIdx => {
            const labels = ["A", "B", "C", "D"];
            const keyHintsP1 = ["Q", "W", "A", "S"];
            const keyHintsP2 = ["I", "O", "K", "L"];
            const keyHint = idx === 0 ? keyHintsP1[qIdx] : keyHintsP2[qIdx];
            const sizeClasses = isDuel
              ? "w-[42%] max-w-[235px] min-h-[76px] max-h-[42%]"
              : "w-[36%] max-w-[290px] min-h-[82px] max-h-[42%]";
            return `
              <div id="quad-p${idx}-${qIdx}" data-player="${idx}" data-quad="${qIdx}" tabindex="0" role="button"
                   class="floating-bubble ${sizeClasses} p-2.5 md:p-3 flex flex-col justify-between z-10 select-none">
                <div class="flex items-center justify-between gap-1">
                  <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-black text-xs shadow">
                    ${labels[qIdx]}
                  </span>
                  <span class="text-[10px] font-bold text-emerald-100 bg-black/60 px-2 py-0.5 rounded-full border border-white/15">
                    🖐️ Telapak / [${keyHint}]
                  </span>
                </div>
                <div id="quad-text-p${idx}-${qIdx}" class="my-1 text-xs sm:text-sm md:text-base font-extrabold text-amber-50 leading-tight text-center px-1 line-clamp-2">
                  Opsi ${labels[qIdx]}
                </div>
                <div class="w-full h-2.5 bg-black/70 rounded-full overflow-hidden border border-white/25">
                  <div id="quad-bar-p${idx}-${qIdx}" class="h-full bg-emerald-400 transition-all duration-75" style="width: 0%;"></div>
                </div>
              </div>
            `;
          }).join("")}
        </div>

        ${(idx === 0 && this.comState) ? `
          <div class="w-full max-w-md mx-auto bg-amber-950/85 border border-amber-400/60 rounded-xl px-3 py-1 flex items-center justify-between gap-2 text-xs z-10">
            <span class="font-extrabold text-amber-300">⚔️ Target Virtual COM:</span>
            <span id="com-live-status" class="text-amber-100 truncate">Menyiapkan strategi...</span>
          </div>
        ` : ""}
      `;

      playfield.appendChild(vp);
    });

    this.applyPostureClasses();
    this.bindQuadrantPointerEvents();
    this.refreshAllPlayerHUDs();
    this.updateFloatingBubblesPhysics(0.016, performance.now());
  }

  applyPostureClasses() {
    const footerHint = document.getElementById("footer-control-hint");
    if (footerHint) {
      footerHint.textContent = this.posture === "seated"
        ? "🪑 Mode Duduk Aktif: Arahkan telapak tangan (🖐️) ke dalam gelembung pilihanmu (~0,36 dtk) atau klik layar."
        : "🧍 Mode Berdiri Aktif: Arahkan telapak tangan (🖐️) ke dalam gelembung orbit luar (~0,36 dtk) atau klik layar.";
    }
  }

  updateFloatingBubblesPhysics(dt, now) {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSeated = this.posture === "seated";
    const anchors = isSeated
      ? [{ x: 0.25, y: 0.26 }, { x: 0.75, y: 0.26 }, { x: 0.25, y: 0.74 }, { x: 0.75, y: 0.74 }]
      : [{ x: 0.20, y: 0.24 }, { x: 0.80, y: 0.24 }, { x: 0.20, y: 0.76 }, { x: 0.80, y: 0.76 }];

    const orbitRadiusX = isSeated ? 0.022 : 0.032;
    const orbitRadiusY = isSeated ? 0.024 : 0.035;

    this.players.forEach((p, pIdx) => {
      const wrapper = document.getElementById(`quad-wrapper-p${pIdx}`);
      if (!wrapper || !p.bubbles) return;
      const wRect = { width: wrapper.clientWidth, height: wrapper.clientHeight };
      if (wRect.width < 20 || wRect.height < 20) return;

      const quadrantBounds = [
        { minX: 0.02, maxX: 0.45, minY: 0.02, maxY: 0.45 },
        { minX: 0.55, maxX: 0.98, minY: 0.02, maxY: 0.45 },
        { minX: 0.02, maxX: 0.45, minY: 0.55, maxY: 0.98 },
        { minX: 0.55, maxX: 0.98, minY: 0.55, maxY: 0.98 }
      ];

      p.bubbles.forEach((b, qIdx) => {
        const el = document.getElementById(`quad-p${pIdx}-${qIdx}`);
        if (!el) return;

        const bWidth = el.offsetWidth || 160;
        const bHeight = el.offsetHeight || 90;
        const isDwellingThis = (p.dwellTarget === qIdx && p.dwellProgress > 0);
        const speedFactor = prefersReduced ? 0 : (isDwellingThis ? 0.0 : 0.55);

        b.phase += dt * 0.95 * speedFactor;
        const anchor = anchors[qIdx];
        const targetX = anchor.x + Math.cos(b.phase + qIdx) * orbitRadiusX;
        const targetY = anchor.y + Math.sin(b.phase * 1.15 + qIdx) * orbitRadiusY;

        if (!isDwellingThis) {
          b.x += (targetX - b.x) * Math.min(1, dt * 4);
          b.y += (targetY - b.y) * Math.min(1, dt * 4);
        }

        // Logical coordinates keep answer lanes stable at every display scale.
        const pad=12, centerGap=110;
        const leftLane=qIdx%2===0, topLane=qIdx<2;
        const laneLeft=leftLane ? pad : wRect.width/2+pad/2;
        const laneRight=leftLane ? wRect.width/2-pad/2 : wRect.width-pad;
        const laneTop=topLane ? pad : (wRect.height+centerGap)/2;
        const laneBottom=topLane ? (wRect.height-centerGap)/2 : wRect.height-pad;
        const px=Math.max(laneLeft,Math.min(laneRight-bWidth,b.x*wRect.width-bWidth/2));
        const py=Math.max(laneTop,Math.min(laneBottom-bHeight,b.y*wRect.height-bHeight/2));
        el.style.transform = 'translate3d('+px.toFixed(1)+'px,'+py.toFixed(1)+'px,0)';

      });
    });
  }

  bindQuadrantPointerEvents() {
    document.querySelectorAll(".floating-bubble[data-player]").forEach(card => {
      const pIdx = Number(card.dataset.player);
      const qIdx = Number(card.dataset.quad);

      card.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.pointerMap.set(e.pointerId, { pIdx, qIdx });
        this.submitAnswer(pIdx, qIdx, true);
      });

      card.addEventListener("keydown", (e) => { if(e.key==="Enter" || e.key===" "){e.preventDefault();this.submitAnswer(pIdx,qIdx,true);} });
      const cleanup = (e) => { this.pointerMap.delete(e.pointerId); };
      card.addEventListener("pointerup", cleanup);
      card.addEventListener("pointercancel", cleanup);
    });
  }

  refreshAllPlayerHUDs() {
    const p1 = this.players[0];
    if (p1) {
      document.getElementById("hud-p1-name").textContent = p1.name;
      document.getElementById("hud-p1-score").textContent = `${p1.score} Poin`;
      document.getElementById("hud-p1-qcount").textContent =
        `Benar: ${p1.correctCount} | Soal #${p1.answeredCount + 1}`;
    }

    const sessionTimerEl = document.getElementById("hud-session-timer");
    if (sessionTimerEl) {
      sessionTimerEl.textContent = this.formatDurationMMSS(this.sessionTimeLeft);
    }

    const p2Box = document.getElementById("hud-p2-box");
    if (this.players[1]) {
      p2Box.classList.remove("hidden");
      document.getElementById("hud-p2-name").textContent = this.players[1].name;
      document.getElementById("hud-p2-score").textContent = `${this.players[1].score} Poin`;
    } else if (this.comState) {
      p2Box.classList.remove("hidden");
      document.getElementById("hud-p2-name").textContent = this.comState.name;
      document.getElementById("hud-p2-score").textContent = `${this.comState.score} Poin`;
    } else if (this.tourneyState) {
      p2Box.classList.remove("hidden");
      document.getElementById("hud-p2-name").textContent = `Giliran ${this.tourneyState.currentPlayerIdx + 1}/4`;
      document.getElementById("hud-p2-score").textContent = "Lomba 4P";
    } else {
      p2Box.classList.add("hidden");
    }

    this.players.forEach((p, idx) => this.renderPlayerQuestion(idx));
  }

  renderPlayerQuestion(idx) {
    const p = this.players[idx];
    if (!p) return;

    const metaEl = document.getElementById(`vp-qmeta-p${idx}`);
    const qTextEl = document.getElementById(`vp-qtext-p${idx}`);

    if (p.finished) {
      if (metaEl) metaEl.textContent = `${p.name} • WAKTU HABIS!`;
      if (qTextEl) qTextEl.textContent = `🎉 Misi selesai! Total Skor: ${p.score} Poin (${p.correctCount} Benar)`;
      for (let q = 0; q < 4; q++) {
        const optEl = document.getElementById(`quad-text-p${idx}-${q}`);
        if (optEl) optEl.textContent = "✓ Selesai";
      }
      return;
    }

    const currentQ = p.questions[p.questionIndex];
    if (!currentQ) return;

    const streakTag = p.streak >= 2 ? ` • 🔥Beruntun x${p.streak}` : "";
    if (metaEl) metaEl.textContent = `${p.name} • SOAL #${p.answeredCount + 1} (${currentQ.id}) • Benar: ${p.correctCount}${streakTag}`;
    if (qTextEl) qTextEl.textContent = currentQ.question;

    for (let q = 0; q < 4; q++) {
      const optEl = document.getElementById(`quad-text-p${idx}-${q}`);
      if (optEl) optEl.textContent = currentQ.options[q];
    }
  }

  submitAnswer(playerIdx, quadIdx, isManualClick = false) {
    const p = this.players[playerIdx];
    if (!p || p.finished || this.state !== "PLAYING") return;

    const now = performance.now();
    if (!isManualClick && now < p.cooldownUntil) return;
    if (isManualClick && now < p.cooldownUntil - (this.cooldownMs - 250)) return;

    const currentQ = p.questions[p.questionIndex];
    if (!currentQ) return;

    const isCorrect = quadIdx === currentQ.correctIndex;
    p.cooldownUntil = now + this.cooldownMs;
    p.dwellSelector.reset();
    p.dwellTarget = -1;
    p.dwellProgress = 0;
    p.lastZoneMotionAt = [0, 0, 0, 0];
    p.answeredCount++;

    const cardEl = document.getElementById(`quad-p${playerIdx}-${quadIdx}`);
    if (cardEl) {
      const rect = cardEl.getBoundingClientRect();
      this.detector.spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, isCorrect ? "#4ADE80" : "#F87171");
    }

    if (isCorrect) {
      p.streak++;
      const speedBonus = Math.ceil(p.questionTimeLeft * 2);
      const streakBonus = Math.min(100, (p.streak - 1) * 20);
      const totalEarned = 100 + speedBonus + streakBonus;
      p.score += totalEarned;
      p.correctCount++;
      this.audio.playSfx("correct");
      const streakMsg = streakBonus > 0 ? ` (🔥Kombo +${streakBonus})` : "";
      this.showPlayerFeedback(playerIdx, `✅ BENAR! +${totalEarned}${streakMsg}`, "bg-emerald-600 text-white");
    } else {
      p.streak = 0;
      const labels = ["A", "B", "C", "D"];
      this.audio.playSfx("wrong");
      this.showPlayerFeedback(playerIdx, `❌ Kurang Tepat (Kunci: ${labels[currentQ.correctIndex]})`, "bg-rose-600 text-white");
    }

    this.sessionHistory.push({
      playerName: p.name,
      qId: currentQ.id,
      question: currentQ.question,
      chosen: currentQ.options[quadIdx] || "Waktu Soal Habis",
      correctAnswer: currentQ.options[currentQ.correctIndex],
      isCorrect,
      explanation: currentQ.explanation
    });

    p.questionIndex++;
    if (p.questionIndex >= p.questions.length) {
      const moreQuestions = this.buildSessionQuestions(this.difficulty, 25);
      p.questions.push(...moreQuestions);
    }

    p.readPhaseUntil = now + this.readPhaseMs;
    p.questionTimeLeft = 30.0;
    this.refreshAllPlayerHUDs();
  }

  showPlayerFeedback(playerIdx, text, colorClasses) {
    const el = document.getElementById(`vp-feedback-p${playerIdx}`);
    if (!el) return;
    el.textContent = text;
    el.className = `mt-1 px-3 py-1.5 rounded-xl text-xs md:text-sm font-black shadow-lg ${colorClasses}`;
    const p = this.players[playerIdx];
    if (p) p.feedbackUntil = performance.now() + 1300;
  }

  checkSessionCompletion() {
    const allDone = this.players.every(p => p.finished);
    if (!allDone) return;

    if (this.tourneyState) {
      const t = this.tourneyState;
      t.scores[t.currentPlayerIdx] = this.players[0].score;
      t.corrects[t.currentPlayerIdx] = this.players[0].correctCount;
      t.currentPlayerIdx++;
      if (t.currentPlayerIdx < 4) {
        setTimeout(() => { this.startSubRoundForTourney(); }, 900);
        return;
      }
    }

    setTimeout(() => { this.finishSessionAndShowResults(); }, 600);
  }

  pauseGame() {
    if (this.state !== "PLAYING") return;
    this.state = "PAUSED";
    this.audio.stopMusic();
    document.getElementById("pause-modal").classList.remove("hidden");
  }

  resumeGame() {
    if (this.state !== "PAUSED") return;
    document.getElementById("pause-modal").classList.add("hidden");
    this.state = "PLAYING";
    this.lastFrameTime = performance.now();
    this.resetCameraSelection();
    this.audio.playMusic("gameplay_theme");
  }

  finishSessionAndShowResults() {
    this.state = "RESULTS";
    this.audio.stopMusic();
    this.showScreen("results-screen");

    const board = document.getElementById("result-scoreboard");
    board.innerHTML = "";
    const titleEl = document.getElementById("result-title");
    const subtitleEl = document.getElementById("result-subtitle");
    const durLabel = this.getDurationLabelText();
    if (subtitleEl) {
      subtitleEl.textContent = `Misi Durasi ${durLabel} (${this.difficulty}) selesai! Berikut perolehan poin dan pembahasan materi IPAS Kelas V SD.`;
    }

    if (this.tourneyState) {
      const t = this.tourneyState;
      let maxScore = -1;
      let winnerName = "";
      t.scores.forEach((sc, idx) => {
        if (sc > maxScore) { maxScore = sc; winnerName = t.names[idx]; }
        board.innerHTML += `
          <div class="bg-emerald-900/80 border-2 border-emerald-400 rounded-2xl p-4 text-center">
            <div class="text-xs font-bold text-amber-200">${t.names[idx]}</div>
            <div class="text-3xl font-black text-white mt-1">${sc} Poin</div>
            <div class="text-xs text-emerald-200 mt-1">Jawaban Benar: ${t.corrects[idx] || 0}</div>
          </div>
        `;
      });
      titleEl.textContent = `🏆 Juara Lomba (${durLabel}): ${winnerName}!`;
      this.audio.playSfx("win");
    } else if (this.players.length === 2) {
      const [p1, p2] = this.players;
      board.innerHTML = `
        <div class="bg-emerald-900/80 border-2 border-emerald-400 rounded-2xl p-4 text-center sm:col-span-2">
          <div class="text-sm font-bold text-emerald-200">${p1.name}</div>
          <div class="text-3xl font-black text-amber-300 mt-1">${p1.score} Poin</div>
          <div class="text-xs text-white mt-1">Benar: ${p1.correctCount} dari ${p1.answeredCount} Soal</div>
        </div>
        <div class="bg-amber-900/80 border-2 border-amber-400 rounded-2xl p-4 text-center sm:col-span-2">
          <div class="text-sm font-bold text-amber-200">${p2.name}</div>
          <div class="text-3xl font-black text-white mt-1">${p2.score} Poin</div>
          <div class="text-xs text-white mt-1">Benar: ${p2.correctCount} dari ${p2.answeredCount} Soal</div>
        </div>
      `;
      if (p1.score > p2.score) {
        titleEl.textContent = `🏆 ${p1.name} Menang Duel (${durLabel})!`;
        this.audio.playSfx("win");
      } else if (p2.score > p1.score) {
        titleEl.textContent = `🏆 ${p2.name} Menang Duel (${durLabel})!`;
        this.audio.playSfx("win");
      } else {
        titleEl.textContent = `🤝 Duel Berakhir SERI (${p1.score} Poin)!`;
        this.audio.playSfx("win");
      }
    } else {
      const p1 = this.players[0];
      const com = this.comState;
      board.innerHTML = `
        <div class="bg-emerald-900/80 border-2 border-emerald-400 rounded-2xl p-4 text-center sm:col-span-2">
          <div class="text-sm font-bold text-emerald-200">${p1.name}</div>
          <div class="text-3xl font-black text-amber-300 mt-1">${p1.score} Poin</div>
          <div class="text-xs text-white mt-1">Benar: ${p1.correctCount} dari ${p1.answeredCount} Soal (${durLabel})</div>
        </div>
        <div class="bg-amber-900/80 border-2 border-amber-400 rounded-2xl p-4 text-center sm:col-span-2">
          <div class="text-sm font-bold text-emerald-200">${com.name}</div>
          <div class="text-3xl font-black text-white mt-1">${com.score} Poin</div>
          <div class="text-xs text-white mt-1">Benar: ${com.correctCount || 0} dari ${com.qIndex} Soal (${durLabel})</div>
        </div>
      `;
      if (p1.score >= com.score) {
        titleEl.textContent = `🏆 Misi Tuntas! Kamu Mengungguli COM!`;
        this.audio.playSfx("win");
      } else {
        titleEl.textContent = `🌱 Sesi Selesai! Ayo Kumpulkan Lebih Banyak Poin!`;
        this.audio.playSfx("lose");
      }
    }

    const reviewContainer = document.getElementById("result-review-list");
    reviewContainer.innerHTML = this.sessionHistory.map((item, idx) => `
      <div class="bg-black/45 border-l-4 ${item.isCorrect ? 'border-emerald-400' : 'border-rose-500'} rounded-xl p-3 text-xs md:text-sm">
        <div class="flex items-center justify-between font-bold text-amber-200">
          <span>#${idx + 1} [${item.qId}] • ${item.playerName}</span>
          <span class="${item.isCorrect ? 'text-emerald-400' : 'text-rose-400'}">${item.isCorrect ? '✓ BENAR' : '✗ KURANG TEPAT'}</span>
        </div>
        <p class="font-bold text-white mt-1">${item.question}</p>
        <p class="text-emerald-200 mt-1">Jawabanmu: <strong>${item.chosen}</strong> | Kunci: <strong>${item.correctAnswer}</strong></p>
        <p class="text-amber-100/90 mt-1 bg-white/5 p-2 rounded-lg">💡 <strong>Pembahasan:</strong> ${item.explanation}</p>
      </div>
    `).join("");
  }

  mainLoop(now) {
    if (now - this.lastFrameTime < 30) {
      requestAnimationFrame((t) => this.mainLoop(t));
      return;
    }
    const dt = Math.min(0.1, (now - this.lastFrameTime) / 1000);
    this.lastFrameTime = now;

    if(now-(this._lastSensorStatus||0)>400){this.detector.updateStatus();this._lastSensorStatus=now;}

    if (this.state === "CALIB") {
      this.updateCalibrationMotion(dt, now);
    } else if (this.state === "PLAYING") {
      this.updateGameplayLoop(now, dt);
    }

    if(["CALIB","PLAYING"].includes(this.state))this.detector.renderOverlay();
    requestAnimationFrame((t) => this.mainLoop(t));
  }

  updateCalibrationMotion(dt,now){
    const rect=document.getElementById('practice-target').getBoundingClientRect();
    const analysis=this.detector.analyzeZones({calib:[rect]});
    const target=analysis.players.calib?.scores[0]>=.5?0:-1;
    const chosen=this.practiceSelector.step(target,this.detector.sampleTime,performance.now(),analysis.cameraActive&&analysis.modelReady);
    this.practiceDwell=this.practiceSelector.elapsed;
    document.getElementById('practice-progress').style.width=this.practiceSelector.progress*100+'%';
    if(chosen===0){this.audio.playSfx('correct');this.clearPracticeTimer();this.startConfiguredSession();}
  }

  updateGameplayLoop(now, dt) {
    const isUnlimitedTime = this.sessionDurationSec === 0;
    const sessionTimerEl = document.getElementById("hud-session-timer");
    const sessionTimerBox = document.getElementById("hud-session-timer-box");

    if (isUnlimitedTime) {
      if (sessionTimerEl) sessionTimerEl.textContent = "♾️ TANPA WAKTU";
      if (sessionTimerBox) {
        sessionTimerBox.className = "flex items-center gap-1.5 px-3 py-1 rounded-xl bg-sky-500 text-slate-950 font-black text-xs md:text-sm shadow-lg border-2 border-sky-200";
      }
    } else {
      this.sessionTimeLeft = Math.max(0, this.sessionTimeLeft - dt);
      if (sessionTimerEl) {
        sessionTimerEl.textContent = this.formatDurationMMSS(this.sessionTimeLeft);
      }
      if (sessionTimerBox) {
        if (this.sessionTimeLeft <= 10) {
          sessionTimerBox.className = "flex items-center gap-1.5 px-3 py-1 rounded-xl bg-rose-600 text-white font-black text-xs md:text-sm shadow-lg border-2 border-rose-200 animate-pulse";
          const ceilSec = Math.ceil(this.sessionTimeLeft);
          if (ceilSec > 0 && ceilSec !== this.lastCountdownBeepSec) {
            this.lastCountdownBeepSec = ceilSec;
            this.audio.playTone(880, 0.06, "square", 0.15);
          }
        } else if (this.sessionTimeLeft <= 60) {
          sessionTimerBox.className = "flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-xs md:text-sm shadow-lg border-2 border-amber-200";
        } else {
          sessionTimerBox.className = "flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs md:text-sm shadow-lg border-2 border-emerald-200";
        }
      }

      if (this.sessionTimeLeft <= 0) {
        this.players.forEach((p, idx) => {
          p.finished = true;
          this.renderPlayerQuestion(idx);
        });
        this.checkSessionCompletion();
        return;
      }
    }

    this.updateFloatingBubblesPhysics(dt, now);

    const zoneRectsByPlayer = {};
    this.players.forEach((p, idx) => {
      if (p.finished) return;
      const rects = [];
      for (let q = 0; q < 4; q++) {
        const el = document.getElementById(`quad-p${idx}-${q}`);
        if (el) rects.push(el.getBoundingClientRect());
      }
      if (rects.length === 4) zoneRectsByPlayer[idx] = rects;
    });

    const motionResult = this.detector.analyzeZones(zoneRectsByPlayer);
    const lightEl = document.getElementById("lighting-indicator");
    if (lightEl) {
      if (!motionResult.cameraActive || !motionResult.modelReady) {
        lightEl.textContent = "🖐️ Mode Sentuh/Keyboard";
        lightEl.className = "font-bold text-amber-300";
      } else if (motionResult.palmCount > 0) {
        lightEl.textContent = `🖐️ ${motionResult.palmCount} Telapak Tangan Terdeteksi`;
        lightEl.className = "font-bold text-emerald-300";
      } else {
        lightEl.textContent = "🖐️ Angkat Telapak Tangan ke Kamera";
        lightEl.className = "font-bold text-amber-200";
      }
    }

    this.players.forEach((p, idx) => {
      if (p.finished) return;

      if (p.feedbackUntil && now > p.feedbackUntil) {
        const fbEl = document.getElementById(`vp-feedback-p${idx}`);
        if (fbEl) fbEl.classList.add("hidden");
        p.feedbackUntil = 0;
      }

      const timerEl = document.getElementById(`vp-timer-p${idx}`);

      const isReadingPhase = now < p.readPhaseUntil;
      if (isReadingPhase) {
        p.dwellProgress = 0;
        p.dwellTarget = -1;
      } else {
        if (isUnlimitedTime) {
          if (timerEl) timerEl.textContent = "♾️ Santai";
        } else {
          p.questionTimeLeft = Math.max(0, p.questionTimeLeft - dt);
          if (timerEl) timerEl.textContent = `${p.questionTimeLeft.toFixed(1)}s`;

          if (p.questionTimeLeft <= 0) {
            this.submitAnswer(idx, -1, false);
            return;
          }
        }
      }

      const pMotion = motionResult.players[idx];
      const hoveredQuad=pMotion?pMotion.scores.findIndex(score=>score>=.5):-1;
      const chosen=p.dwellSelector.step(hoveredQuad,this.detector.sampleTime,performance.now(),
        !isReadingPhase&&now>=p.cooldownUntil&&motionResult.cameraActive&&motionResult.modelReady);
      p.dwellTarget=p.dwellSelector.target;p.dwellProgress=p.dwellSelector.progress;
      if(chosen!==-1){this.submitAnswer(idx,chosen,false);return;}

      for (let q = 0; q < 4; q++) {
        const cardEl = document.getElementById(`quad-p${idx}-${q}`);
        const barEl = document.getElementById(`quad-bar-p${idx}-${q}`);
        if (!cardEl || !barEl) continue;

        cardEl.classList.toggle("global-spike-warn", Boolean(pMotion?.globalSpike));
        if (p.dwellTarget === q && p.dwellProgress > 0) {
          cardEl.classList.add("active-dwell");
          barEl.style.width = `${Math.min(100, p.dwellProgress * 100)}%`;
        } else {
          cardEl.classList.remove("active-dwell");
          barEl.style.width = "0%";
        }
      }
    });

    if (this.comState && (isUnlimitedTime || this.sessionTimeLeft > 0)) {
      if (now >= this.comState.nextActionAt) {
        const isComCorrect = Math.random() < this.comState.accuracy;
        this.comState.qIndex++;
        if (isComCorrect) {
          this.comState.score += 118;
          this.comState.correctCount = (this.comState.correctCount || 0) + 1;
        }
        const comStatusEl = document.getElementById("com-live-status");
        if (comStatusEl) {
          comStatusEl.textContent = isComCorrect
            ? `COM menjawab benar Soal #${this.comState.qIndex} (+118 Poin)`
            : `COM meleset pada Soal #${this.comState.qIndex}`;
        }
        document.getElementById("hud-p2-score").textContent = `${this.comState.score} Poin`;
        this.comState.nextActionAt = now + 6200 + Math.random() * 2000;
      }
    }
  }

  renderEditorList(filterDiff = "ALL") {
    const container = document.getElementById("editor-list-container");
    if (!container) return;

    const filtered = filterDiff === "ALL"
      ? this.questionBank
      : this.questionBank.filter(q => q.difficulty === filterDiff);

    document.getElementById("editor-count-label").textContent =
      `Menampilkan ${filtered.length} dari total ${this.questionBank.length} soal`;

    container.innerHTML = filtered.map((q) => `
      <div class="bg-slate-950/90 border border-white/15 rounded-xl p-3 flex flex-col gap-2">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-black text-xs">${q.id}</span>
            <span class="px-2 py-0.5 rounded bg-emerald-800 text-emerald-200 font-bold text-xs">${q.difficulty}</span>
          </div>
          <span class="text-xs text-amber-300 font-bold">Kunci: Opsi ${["A", "B", "C", "D"][q.correctIndex]}</span>
        </div>
        <input type="text" data-id="${q.id}" data-field="question" value="${q.question.replace(/"/g, '&quot;')}"
               class="editor-input w-full bg-slate-900 text-white text-xs md:text-sm font-bold p-2 rounded border border-white/20">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
          ${q.options.map((opt, oIdx) => `
            <div class="flex items-center gap-1.5 mt-1">
              <span class="font-bold ${oIdx === q.correctIndex ? 'text-emerald-400' : 'text-slate-400'}">${["A", "B", "C", "D"][oIdx]}:</span>
              <input type="text" data-id="${q.id}" data-opt="${oIdx}" value="${opt.replace(/"/g, '&quot;')}"
                     class="editor-opt-input flex-1 bg-slate-900 text-white p-1.5 rounded border border-white/15">
            </div>
          `).join("")}
        </div>
        <div class="text-[11px] text-emerald-200/90">
          <strong>Pembahasan:</strong> ${q.explanation}
        </div>
      </div>
    `).join("");

    container.querySelectorAll(".editor-input").forEach(inp => {
      inp.addEventListener("change", () => {
        const item = this.questionBank.find(x => x.id === inp.dataset.id);
        if (item) { item.question = inp.value.trim(); this.saveBank(); }
      });
    });

    container.querySelectorAll(".editor-opt-input").forEach(inp => {
      inp.addEventListener("change", () => {
        const item = this.questionBank.find(x => x.id === inp.dataset.id);
        const oIdx = Number(inp.dataset.opt);
        if (item && item.options[oIdx] !== undefined) {
          item.options[oIdx] = inp.value.trim();
          this.saveBank();
        }
      });
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.gameApp = new EcosystemQuadrantGame();
});
