
const data = {
  "Şaqalatlar": [
    { ad: "TWIX", kod: "271 6262", sekil: "TWIX.png" },
    { ad: "SNICKERS", kod: "271 6261", sekil: "SNICKERS.png" },
    { ad: "BOUNTY", kod: "271 6263", sekil: "BOUNTY.png" },
    { ad: "RAHAT FINDIQLI KARAMEL", kod: "271 8258", sekil: "RAHAT-FİNDİQLİ-KARAMEL.png" },
    { ad: "KDV FENSİ SÜDLÜ TOFFİ", kod: "271 8022", sekil: "KDV-FENSİ-SUDLU-TOFFİ.png" },
    { ad: "ROSHEN JONNY KROCKER", kod: "271 8299", sekil: "ROSHEN-JONNY-KROCKER.png" }
  ],
  "Toyuq məhsulları": [
    { ad: "SİYƏZƏN QIRMIZI PAKET", kod: "271 6068" },
     { ad: "SİYƏZƏN SARI PAKET", kod: "271 5994" },
      { ad: "SİYƏZƏN GÖY PAKET", kod: "271 6351" },
      { ad: "SİYƏZƏN BUD DİBİ", kod: "271 5998" },
      { ad: "SİYƏZƏN BUD BUTULKA", kod: "271 6784" },
      { ad: "SİYƏZƏN FARŞ", kod: "271 6715" },
      { ad: "SİYƏZƏN CİYƏR", kod: "271 5999" },
      { ad: "SİYƏZƏN PƏTƏNƏ", kod: "271 6786" },
      { ad: "SİYƏZƏN QANAD", kod: "271 5997" },
      { ad: "SİYƏZƏN FİLE", kod: "271 5996" },
      { ad: "SİYƏZƏN TƏZƏ TOYUQ", kod: "271 6035" },
      { ad: "SƏBA GÖY PAKET", kod: "271 6708" },
      { ad: "MƏRCAN DONMUŞ TOYUQ", kod: "271 6951" },
      { ad: "MƏRCAN FİLE QABDA", kod: "271 6953" }
   
  ],
  "Kolbasa": [
    { ad: "NƏFİS DAD SERVALAT", kod: "271 5949" },
    { ad: "TƏKDAD SERVALAT", kod: "271 7025" },
    { ad: "C/M BEST BEEF SERVALAT", kod: "271 6403" },
    { ad: "C/M OVCULAR SEDEF KRAKOV", kod: "271 6230" },
    { ad: "C/M OVCULAR SEDEF SERVALAT", kod: "271 6644" }
  ],
  "Sosiska": [
    { ad: "NƏFİS DAD SOSİSKA", kod: "271 6871" },
    { ad: "HALALDAD EKSTRA SOSİSKA", kod: "271 6140" },
    { ad: "HALALDAD KLASSİK SOSİSKA", kod: "271 6426" },
    { ad: "TAMDAD TAVADA SOSİSKA", kod: "271 8219" },
    { ad: "HN MANQALÜSTÜ SOSİSKA", kod: "271 8177" },
    { ad: "BEST BEEF OCAQ SOSİKA", kod: "271 6290" }
  ],
  "Pendir": [
    { ad: "Ağ pendir", kod: "501" }
  ],
  "Meyvə-tərəvəz": [
    { ad: "POMİDOR", kod: "271 6686" },
    { ad: "XİYAR", kod: "271 6639" },
    { ad: "BANAN", kod: "271 6629" },
    { ad: "KARTOF", kod: "271 6631" },
    { ad: "SOĞAN", kod: "271 6685" },
    { ad: "SARIMSAQ", kod: "271 7235" },
    { ad: "ALMA YAŞIL", kod: "271 7988" },
    { ad: "ALMA QIRMIZI ", kod: "271 6536" },
    { ad: "BADAM", kod: "271 7274" },
    { ad: "QARPIZ", kod: "271 7468" },
    { ad: "ŞAFTALI ", kod: "271 7205" },
    { ad: "ŞAFTALI NEKTARI", kod: "271 6370" },
    { ad: "SOĞAN RUS", kod: "271 6640" },
    { ad: "BADIMCAN", kod: "271 7233" },
    { ad: "QARĞIDALI ƏDƏD", kod: "261 5053" },
    { ad: "ÇUĞUNDUR", kod: "271 7665" },
    { ad: "KÖK", kod: "271 8151" },
    { ad: "KƏLƏM ", kod: "271 6688" }
  ]
};

const categoriesDiv = document.getElementById("categories");
const productsSection = document.getElementById("products-section");
const categoryTitle = document.getElementById("category-title");
const productList = document.getElementById("product-list");

Object.keys(data).forEach((category) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerText = category;
  card.onclick = () => showProducts(category);
  categoriesDiv.appendChild(card);
});

function showProducts(category) {
  categoriesDiv.style.display = "none";
  productsSection.classList.remove("hidden");
  categoryTitle.innerText = category;
  productList.innerHTML = "";

  data[category].forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    if (category === "Şaqalatlar") {
      const img = document.createElement("img");
      img.src = "images/" + item.sekil;
      card.appendChild(img);
    }
    const name = document.createElement("p");
    name.innerText = item.ad;
    const code = document.createElement("p");
    code.innerHTML = `<strong>Kod:</strong> ${item.kod}`;
    card.appendChild(name);
    card.appendChild(code);
    productList.appendChild(card);
  });
}

function goBack() {
  productsSection.classList.add("hidden");
  categoriesDiv.style.display = "grid";
}
