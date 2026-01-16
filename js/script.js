// =========================================
// 1. DATA SIMULASI & MODAL TABEL
// =========================================
// Data ini digunakan untuk fitur "Lihat Data" dan Popup Statistik

const faskesData = {
  "Rumah Sakit": [
    {
      id: 4,
      nama: "RSUD Dr. Saiful Anwar",
      alamat:
        "Jl. Jaksa Agung Suprapto No.2, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65112",
      telp: "+62 815-5560-6668",
    },
    {
      id: 8,
      nama: "RSIA Melati Husada",
      alamat:
        "Jl. Suropati No.12, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65111",
      telp: "0341340033",
    },
  ],
  Klinik: [
    {
      id: 7,
      nama: "Klinik Utama Bunga Melati",
      alamat:
        "Jl. Jaksa Agung Suprapto No.23, Samaan, Kec. Klojen, Kota Malang, Jawa Timur 65112",
      telp: "08113613628",
    },
    {
      id: 14,
      nama: "Laboratorium Klinik Pattimura",
      alamat:
        "Jl. Patimura No.17, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65111",
      telp: "0341324747",
    },
    {
      id: 11,
      nama: "Klinik Pratama Malang",
      alamat:
        "2JCQ+V9W, Kesatrian, Kec. Blimbing, Kota Malang, Jawa Timur 65111",
      telp: "-",
    },
    {
      id: 12,
      nama: "Klinik Obat Dr Medika",
      alamat:
        "Jl. Suropati Gg. 2 No.32, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65111",
      telp: "-",
    },
    {
      id: 2,
      nama: "Klinik Bunga Melati - JA Suprapto",
      alamat:
        "Jl. Jaksa Agung Suprapto No.23, Samaan, Kec. Klojen, Kota Malang, Jawa Timur 65112",
      telp: "08113613623",
    },
  ],
  Apotek: [
    {
      id: 13,
      nama: "Kartika Farma Apotek",
      alamat:
        "Jl. Belakang RSU No.1, Klojen, Kec. Klojen, Malang Kota, Jawa Timur 65111",
      telp: "0341327020",
    },
    {
      id: 10,
      nama: "Apotek Puspa Wijaya",
      alamat: "JL. Panglima Sudirman, No. 185-A, Malang, 65163",
      telp: "0341462372",
    },
    {
      id: 9,
      nama: "Apotek Pajajaran",
      alamat:
        "Jl. Pajajaran No.12, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65111",
      telp: "0341366577",
    },
    {
      id: 6,
      nama: "Apotek Dynasti",
      alamat:
        "Jl. Belakang RSU No.4, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65111",
      telp: "0341343432",
    },
    {
      id: 1,
      nama: "Apotek Dr Cipto",
      alamat:
        "Jl. Dr. Cipto, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65111",
      telp: "0341356777",
    },
    {
      id: 3,
      nama: "Apotek Diponegoro",
      alamat:
        "Jl. Patimura No.1, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65111",
      telp: "08179612900",
    },
    {
      id: 5,
      nama: "Apotek Anggrek Farma",
      alamat:
        "Jl. Pajajaran No.12, Klojen, Kec. Klojen, Kota Malang, Jawa Timur 65111",
      telp: "081357025050",
    },
  ],
};

// --- FUNGSI MODAL TABEL ---
function openModal(kategori) {
  const modal = document.getElementById("dataModal");
  const title = document.getElementById("modalTitle");
  const tbody = document.getElementById("tableBody");

  // Set Judul
  title.innerText = "Data " + kategori;
  tbody.innerHTML = ""; // Bersihkan isi lama

  // Ambil data array
  const data = faskesData[kategori];

  if (data && data.length > 0) {
    data.forEach((item) => {
      const row = `
            <tr>
                <td><span class="id-badge">${item.id}</span></td>
                <td><strong>${item.nama}</strong></td>
                <td>${item.alamat}</td>
                <td>${item.telp}</td>
            </tr>
        `;
      tbody.innerHTML += row;
    });
  } else {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:var(--text-muted);">Data tidak tersedia</td></tr>`;
  }

  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Matikan scroll background
}

function closeModal() {
  document.getElementById("dataModal").style.display = "none";
  document.body.style.overflow = "auto"; // Hidupkan scroll background
}

// =========================================
// 2. LOGIKA DARK MODE & LAINNYA
// =========================================

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  const nextTheme = isDark ? "light" : "dark";

  html.setAttribute("data-theme", nextTheme);

  // Ubah ikon tombol
  document.getElementById("theme-icon").className = isDark
    ? "fa-solid fa-moon"
    : "fa-solid fa-sun";
}

// --- FUNGSI ZOOM GAMBAR LAYOUT ---
function openZoomModal() {
  const modal = document.getElementById("zoomModal");
  const modalImg = document.getElementById("img01");

  const thumbnail = document.querySelector(".layout-thumb");

  if (thumbnail) {
    modal.style.display = "block";
    modalImg.src = thumbnail.src;
    document.body.style.overflow = "hidden";
  } else {
    console.error("Gambar thumbnail tidak ditemukan!");
  }
}

function closeZoomModal() {
  const modal = document.getElementById("zoomModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// --- EVENT LISTENER GLOBAL ---
window.onclick = function (event) {
  const dataModal = document.getElementById("dataModal");
  const zoomModal = document.getElementById("zoomModal");

  if (event.target == dataModal) closeModal();
  if (event.target == zoomModal) closeZoomModal();
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
    closeZoomModal();
  }
});

// Update Angka Statistik Otomatis
document.addEventListener("DOMContentLoaded", () => {
  const countRS = document.getElementById("count-rs");
  const countPusk = document.getElementById("count-pusk");
  const countApt = document.getElementById("count-apt");

  if (countRS) countRS.innerText = faskesData["Rumah Sakit"].length;
  if (countPusk) countPusk.innerText = faskesData["Klinik"].length;
  if (countApt) countApt.innerText = faskesData["Apotek"].length;
});

// =========================================
// 7. LOGIKA FULLSCREEN PETA (TOGGLE)
// =========================================

function toggleMapFullScreen() {
  const mapContainer = document.getElementById("mapContainer");

  // Tambah/Hapus class 'fullscreen-active' pada container peta
  mapContainer.classList.toggle("fullscreen-active");

  // Logic tambahan: Matikan scroll body saat fullscreen agar rapi
  if (mapContainer.classList.contains("fullscreen-active")) {
    document.body.style.overflow = "hidden"; // Kunci scroll website
  } else {
    document.body.style.overflow = "auto"; // Kembalikan scroll website
  }
}
