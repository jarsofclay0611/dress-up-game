// --------------------
// Data you will fill
// --------------------
const ITEMS = {
  top: [
    { id: "top_child1", name: "Neon Shirt", src: "assets/items/tops/top_neonshirt.png", thumb: "assets/thumbs/tops/top_neonshirt_thumb.png" },
    { id: "top_navysweater", name: "Navy Sweater", src: "assets/items/tops/top_navysweater.png", thumb: "assets/thumbs/tops/top_navysweater_thumb.png" },
    { id: "top_blackcoat", name: "Black Coat", src: "assets/items/tops/top_blackcoat.png", thumb: "assets/thumbs/tops/top_blackcoat_thumb.png" },
    { id: "top_navysleeveless", name: "Navy Sleeveless", src: "assets/items/tops/top_navysleeveless.png", thumb: "assets/thumbs/tops/top_navysleeveless_thumb.png" },
    { id: "top_marioshirt", name: "Mario Shirt", src: "assets/items/tops/top_marioshirt.png", thumb: "assets/thumbs/tops/top_marioshirt_thumb.png" },
    { id: "top_stripedshirt", name: "Striped Shirt", src: "assets/items/tops/top_stripedshirt.png", thumb: "assets/thumbs/tops/top_stripedshirt_thumb.png" },
    { id: "top_overalls", name: "Overalls", src: "assets/items/tops/top_overalls.png", thumb: "assets/thumbs/tops/top_overalls_thumb.png" },
    { id: "top_longsleeves", name: "Long Sleeves", src: "assets/items/tops/top_longsleeves.png", thumb: "assets/thumbs/tops/top_longsleeves_thumb.png" },
    { id: "top_italyshirt", name: "Italy Shirt", src: "assets/items/tops/top_italyshirt.png", thumb: "assets/thumbs/tops/top_italyshirt_thumb.png" },
    { id: "top_flowercropped", name: "Flower Cropped", src: "assets/items/tops/top_flowercropped.png", thumb: "assets/thumbs/tops/top_flowercropped_thumb.png" },
    { id: "top_browntop", name: "Brown Top", src: "assets/items/tops/top_browntop.png", thumb: "assets/thumbs/tops/top_browntop_thumb.png" },
  ],

shoes: [
  { id: "no_shoes", name: "paiseh 来不及做鞋子", src: "", thumb: "" }
],

  bottom: [
    { id: "bottom_anotherblackshorts", name: "Another Black Shorts", src: "assets/items/bottoms/bottom_anotherblackshorts.png", thumb: "assets/thumbs/bottoms/bottom_anotherblackshorts_thumb.png" },
    { id: "bottom_cargopants", name: "Cargo Pants", src: "assets/items/bottoms/bottom_cargopants.png", thumb: "assets/thumbs/bottoms/bottom_cargopants_thumb.png" },
        { id: "bottom_blackjorts", name: "Black Jorts", src: "assets/items/bottoms/bottom_blackjorts.png", thumb: "assets/thumbs/bottoms/bottom_blackjorts_thumb.png" },
    { id: "bottom_blackpants", name: "Black Pants", src: "assets/items/bottoms/bottom_blackpants.png", thumb: "assets/thumbs/bottoms/bottom_blackpants_thumb.png" },
    { id: "bottom_blackshorts", name: "Black Shorts", src: "assets/items/bottoms/bottom_blackshorts.png", thumb: "assets/thumbs/bottoms/bottom_blackshorts_thumb.png" },
    { id: "bottom_jeansshorts", name: "Jeans Shorts", src: "assets/items/bottoms/bottom_jeansshorts.png", thumb: "assets/thumbs/bottoms/bottom_jeansshorts_thumb.png" },
    { id: "bottom_blackjeans", name: "Black Jeans", src: "assets/items/bottoms/bottom_blackjeans.png", thumb: "assets/thumbs/bottoms/bottom_blackjeans_thumb.png" },
        { id: "bottom_brownpants", name: "Brown Pants", src: "assets/items/bottoms/bottom_brownpants.png", thumb: "assets/thumbs/bottoms/bottom_brownpants_thumb.png" },

  ],

  acc: [
        { id: "acc_greyjacket", name: "Grey Jacket", src: "assets/items/acc/acc_greyjacket.png", thumb: "assets/thumbs/acc/acc_greyjacket_thumb.png" },

    { id: "acc_plaidshirt", name: "Plaid Shirt", src: "assets/items/acc/acc_plaidshirt.png", thumb: "assets/thumbs/acc/acc_plaidshirt_thumb.png" },
    { id: "acc_blackscarf", name: "Black Scarf", src: "assets/items/acc/acc_blackscarf.png", thumb: "assets/thumbs/acc/acc_blackscarf_thumb.png" },
    { id: "acc_christmashat", name: "Christmas Hat", src: "assets/items/acc/acc_christmashat.png", thumb: "assets/thumbs/acc/acc_christmashat_thumb.png" },
    { id: "acc_nyccap", name: "NYC Cap", src: "assets/items/acc/acc_nyccap.png", thumb: "assets/thumbs/acc/acc_nyccap_thumb.png" },
        { id: "acc_beanie", name: "Beanie", src: "assets/items/acc/acc_beanie.png", thumb: "assets/thumbs/acc/acc_beanie_thumb.png" },

  ],
};

// --------------------
// Memories (11 outfits)
// --------------------
const MEMORY_OUTFITS = [
  { key: "mrbean", label: "mrbean", match: { top: "top_child1" }, photo: "assets/photos/mrbean.jpeg", caption: "MrBean wannabe" },

  // NOTE: make sure the ids here exist in ITEMS (you have top_child2 / bottom_child2 etc not in your ITEMS list)
  // Keep your list as-is, just ensure IDs match ITEMS exactly.
  { key: "warsaw", label: "warsaw", match: { top: "top_blackcoat", bottom: "bottom_blackpants", acc: ["acc_blackscarf", "acc_beanie"] }, photo: "assets/photos/warsaw.jpeg", caption: "SNOWWWW" },

  { key: "christmas19", label: "Christmas 19", match: { top: "top_stripedshirt", bottom: "bottom_anotherblackshorts", acc: ["acc_christmashat", "acc_plaidshirt"] }, photo: "assets/photos/christmas.jpeg", caption: "Iconic 2019 christmas" },
  { key: "greece", label: "Greece", match: { top: "top_navysleeveless", bottom: "bottom_blackshorts" }, photo: "assets/photos/greece.jpeg", caption: "cant get over this pic" },
  { key: "italy", label: "Italy", match: { top: "top_italyshirt", bottom: "bottom_blackjorts" }, photo: "assets/photos/italy.jpeg", caption: "🤌🤌🍕" },
  { key: "japan", label: "Japan", match: { top: "top_overalls", acc: ["acc_greyjacket", "acc_nyccap"] }, photo: "assets/photos/japan.jpeg", caption: "u already know this is coming, u ate fr" },
  { key: "kl", label: "kl", match: { top: "top_longsleeves", bottom: "bottom_brownpants" }, photo: "assets/photos/kl.jpeg", caption: "kualalumpur2025" },
  { key: "tw1", label: "tw1", match: { top: "top_marioshirt", bottom: "bottom_cargopants" }, photo: "assets/photos/tw1.jpeg", caption: "top 10 photos😭" },
  { key: "austria", label: "austria", match: { top: "top_navysweater" }, photo: "assets/photos/austria.jpeg", caption: "it's like you were in a snowglobe!?" },
  { key: "tw2", label: "tw2", match: { top: "top_flowercropped", bottom: "bottom_jeansshorts" }, photo: "assets/photos/tw2.jpeg", caption: "xiao liu qiu goated" },
  { key: "prague", label: "prague", match: { top: "top_browntop", bottom: "bottom_blackjeans" }, photo: "assets/photos/prague.jpeg", caption: "czeching into Prague" },
];

const FINAL_LETTER =
`生日快乐妹妹！
Happy 23rd birthday!!
What's meant for you won't miss you.
I may not know everything you've been through these few years, but I know the God who was with you.
Always keeping you in prayer.
Love you so so much!
I am forever thankful for February 17th ❤︎`;

TOTAL_MEMORIES = MEMORY_OUTFITS.length

// --------------------
// Save / helpers
// --------------------
const STORAGE_KEY = "wardrobe_of_grace_save_v1";

const defaultSave = {
  unlockedMemories: [],
  letterShown: false, // so it won't spam every time
};

function loadSave() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultSave);
    const parsed = JSON.parse(raw);
    return { ...structuredClone(defaultSave), ...parsed };
  } catch {
    return structuredClone(defaultSave);
  }
}

let save = loadSave();
function saveNow() { localStorage.setItem(STORAGE_KEY, JSON.stringify(save)); }

function matchesOutfit(equipped, target) {
  // Only check fields that exist in target.match
  if (target.top && equipped.top !== target.top) return false;
  if (target.bottom && equipped.bottom !== target.bottom) return false;

  // Accessories: if target.acc exists, require ALL listed accessories
  if (target.acc) {
    const req = Array.isArray(target.acc) ? target.acc : [target.acc];
    const have = equipped.acc ?? [];
    if (!req.every(id => have.includes(id))) return false;
  }

  return true;
}

// --------------------
// DOM
// --------------------
const showLetterBtn = document.getElementById("showLetterBtn");

const grid = document.getElementById("grid");
const tabs = document.querySelectorAll(".tab");
const mirrorBtn = document.getElementById("mirrorBtn");

const layerTop = document.getElementById("layerTop");
const layerBottom = document.getElementById("layerBottom");

const accLayers = [
  document.getElementById("layerAcc1"),
  document.getElementById("layerAcc2"),
  document.getElementById("layerAcc3"),
];

const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");
const overlayCaption = document.getElementById("overlayCaption");
const overlayClose = document.getElementById("overlayClose");

const letterScreen = document.getElementById("letterScreen");
const letterText = document.getElementById("letterText");
const letterClose = document.getElementById("letterClose");

const memCount = document.getElementById("memCount");
const memTotal = document.getElementById("memTotal");
if (memTotal) memTotal.textContent = String(TOTAL_MEMORIES);

const resetBtn = document.getElementById("resetBtn");

const introScreen = document.getElementById("introScreen");
const startBtn = document.getElementById("startBtn");

if (startBtn && introScreen) {
  startBtn.addEventListener("click", () => {
    introScreen.classList.add("hidden");
  });
}





// --------------------
// Game state
// --------------------
let currentCat = "top";
let equipped = { top: null, bottom: null, acc: [] };

// --------------------
// Rendering
// --------------------
function getAvailableItems(cat) {
  return ITEMS[cat] ?? [];
}

function renderGrid() {
  grid.innerHTML = "";
  const items = getAvailableItems(currentCat);

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const preview = item.thumb ?? item.src;

    card.innerHTML = `
      <div class="thumb"><img src="${preview}" alt="${item.name}"></div>
      <div class="name">${item.name}</div>
    `;

    card.addEventListener("click", () => equipItem(currentCat, item));
    grid.appendChild(card);
  });
}

function redrawAccLayers() {
  accLayers.forEach((layer, i) => {
    const accId = equipped.acc[i];
    if (!accId) {
      layer.removeAttribute("src");
      layer.style.display = "none";
      return;
    }
    const accItem = ITEMS.acc.find(x => x.id === accId);
    layer.src = accItem?.src ?? "";
    layer.style.display = "block";
  });
}

function equipItem(cat, item) {
  if (cat !== "acc") {
    equipped[cat] = item.id;

    if (cat === "top") {
      layerTop.src = item.src;
      layerTop.style.display = "block";
    }
    if (cat === "bottom") {
      layerBottom.src = item.src;
      layerBottom.style.display = "block";
    }
    return;
  }

  // accessories: toggle multi-select
  const idx = equipped.acc.indexOf(item.id);
  if (idx >= 0) equipped.acc.splice(idx, 1);
  else {
    if (equipped.acc.length >= accLayers.length) return;
    equipped.acc.push(item.id);
  }

  redrawAccLayers();
}

function renderProgress() {
  memCount.textContent = String(save.unlockedMemories.length);

  const finishedAll = save.unlockedMemories.length >= TOTAL_MEMORIES;

  if (finishedAll) {
    showLetterBtn.classList.remove("hidden");
  } else {
    showLetterBtn.classList.add("hidden");
  }
}


// --------------------
// Overlay + letter
// --------------------
function showOverlay(imgSrc, caption) {
  overlayImg.src = imgSrc;
  overlayCaption.textContent = caption;
  overlay.classList.remove("hidden");
}

function hideOverlay() {
  overlay.classList.add("hidden");
}


function showLetter() {
  letterText.textContent = FINAL_LETTER;
  letterScreen.classList.remove("hidden");
}

function hideLetter() {
  letterScreen.classList.add("hidden");
}

// --------------------
// Mirror logic
// --------------------
function onMirror() {
  const hasSomething =
    !!equipped.top || !!equipped.bottom || (equipped.acc?.length > 0);

  if (!hasSomething) {
    showOverlay("assets/ui/paper.png", "Try putting on at least one item ✨");
    return;
  }

  for (const m of MEMORY_OUTFITS) {
    if (matchesOutfit(equipped, m.match)) {
      const already = save.unlockedMemories.includes(m.key);

      if (!already) {
        save.unlockedMemories.push(m.key);
        saveNow();
        renderProgress();
      }

      // Show the memory photo
      showOverlay(m.photo, m.caption);

      // If JUST completed all memories → after closing photo, show letter once
      const finishedAll = save.unlockedMemories.length >= TOTAL_MEMORIES;
      if (finishedAll && !save.letterShown) {
        overlayClose.onclick = () => {
          hideOverlay();
          save.letterShown = true;
          saveNow();
          showLetter();
        };
      }

      return;
    }
  }
}

// --------------------
// Events
// --------------------
tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    currentCat = btn.dataset.cat;
    renderGrid();
  });
});

function resetProgress() {
  const confirmReset = confirm("Reset all memories and progress?");
  if (!confirmReset) return;

  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}
resetBtn.onclick = resetProgress;


mirrorBtn.addEventListener("click", onMirror);
overlayClose.onclick = hideOverlay;

letterClose.addEventListener("click", hideLetter);

showLetterBtn.addEventListener("click", showLetter);

// --------------------
// Init
// --------------------
function init() {
  [layerTop, layerBottom].forEach(layer => layer && (layer.style.display = "none"));
  accLayers.forEach(layer => layer && (layer.style.display = "none"));

  renderGrid();
  renderProgress();
}
init();
