const daftar = document.querySelector("#daftar");
const pesan = document.querySelector("#pesan");

let peserta = [
];

const KEY = "pswi.peserta.v1";

function simpan() {
  try {
    localStorage.setItem(KEY, JSON.stringify(peserta));
  } catch (error) {
    pesan.textContent = "Gagal menyimpan data ke browser.";
  }
}

function render() {
  daftar.replaceChildren();
  for (const p of peserta) {
    const li = document.createElement("li");
    li.textContent = p.nama + " ";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Hapus";
    btn.dataset.id = String(p.id);
    li.append(btn);

    daftar.append(li);
  }
}

try {
  const raw = localStorage.getItem(KEY);
  if (raw !== null) {
    const data = JSON.parse(raw);
    if (!Array.isArray(data) || !data.every(p =>
      Number.isInteger(p.id) && p.id > 0 && typeof p.nama === "string")) {
      throw new Error("Data peserta tidak sesuai");
    }
    peserta = data;
  }
} catch (error) {
  peserta = [];
  pesan.textContent = "Data lokal bermasalah. Periksa/reset key latihan.";
}

render();

daftar.addEventListener("click", event => {
  const btn = event.target.closest("button[data-id]");
  if (!btn || !daftar.contains(btn)) return;
  const id = Number(btn.dataset.id);
  peserta = peserta.filter(p => p.id !== id);
  simpan();
  render();
  if (!peserta.length) {
    pesan.textContent = "Belum ada peserta";
  }
});

if (!pesan.textContent) {
  pesan.textContent = peserta.length ? "" : "Belum ada peserta";
}

const form = document.querySelector("#form-peserta");
let berikutnya = Math.max(0, ...peserta.map(p => p.id)) + 1;

function ubahNama(id, nama) {
  const bersih = nama.trim();
  if (!bersih) return false;
  peserta = peserta.map(p => p.id === id ? { ...p, nama: bersih } : p);
  simpan();
  render();
  return true;
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const nama = String(new FormData(form).get("nama") ?? "").trim();
  if (!nama) {
    pesan.textContent = "Nama harus diisi";
    return;
  }
  pesan.textContent = "";
  peserta.push({ id: berikutnya++, nama });
  simpan();
  render();
  form.reset();
});