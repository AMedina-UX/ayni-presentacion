import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../public/assets');
const PUBLIC_DIR = path.join(__dirname, '../public');

// Mappings of file name in public/assets to the figma server assets URL
const assets = {
  "bg_home.png": "http://localhost:3845/assets/fed9a47566cdb73f3a121a2a537e7785ca443f3e.png",
  "btn_productos.png": "http://localhost:3845/assets/1020168249b993d26d48bf1417e8b8e849215cd1.png",
  "btn_plan.png": "http://localhost:3845/assets/63dd937df2f77c430df00849fa547bd9978225ae.png",
  "btn_bonos.png": "http://localhost:3845/assets/3726536373eae0bae8f192ba3f96e1c7973df042.png",
  "bg_productos.png": "http://localhost:3845/assets/ff0f209ebbed1dd4254d0fbea5023024de74e4a9.png",
  "btn_capucci.png": "http://localhost:3845/assets/f3429ecb1a6a315e72114f859e7a489baf84799d.png",
  "btn_moravi.png": "http://localhost:3845/assets/b558ffa225380b387de8b427d6652dd8596c682a.png",
  "btn_reset.png": "http://localhost:3845/assets/ad667041215b3bcd6b2802861d18cf15066ff7d4.png",
  "bg_capucci.png": "http://localhost:3845/assets/47f453c3e572eedf6fe638dfc193fa41203f75af.png",
  "bg_capucci_formula.png": "http://localhost:3845/assets/2ba3f672bfbd7dda57cb2cd64be7f7ecee9bb542.png",
  "bg_moravi.png": "http://localhost:3845/assets/99c2b29fa5cb7c452d80c9f25cca1f0966ed7ccb.png",
  "bg_moravi_formula.png": "http://localhost:3845/assets/219442497d5fe859774d9053678590c061073d27.png",
  "bg_reset.png": "http://localhost:3845/assets/c27f19603f08e0654feb7a292f7bfbfbea5d1c50.png",
  "bg_reset_formula.png": "http://localhost:3845/assets/4e59d71ddd6b189b045f4f307a8392a1256711db.png",
  "bg_doypacks.png": "http://localhost:3845/assets/04634416e5c6f66ff9feef5935aeac842a9964e0.png",
  "bg_bonos.png": "http://localhost:3845/assets/be5f477c5978fa1569d25752661f0ea3f7d0f0b3.png",
  "bg_bonos_travel.png": "http://localhost:3845/assets/f768e0a17507cc8b7c8e9366fc7e65b942831b7c.png",
  "close.svg": "http://localhost:3845/assets/69389d7f9bcc043d628700a288523a9b0a98ee31.svg",
  "close_inner.svg": "http://localhost:3845/assets/679fd1aa46809870524fca4ca3fe4534bf0558de.svg",
  "arrow_left.svg": "http://localhost:3845/assets/ac16b592d4f816d9792476090e280ac275af45ac.svg",
  "arrow_right.svg": "http://localhost:3845/assets/ff47c860f6bfa65654c0f7afb3e118f313e1853e.svg",
  "arrow_left_inner.svg": "http://localhost:3845/assets/2cd21e57a38eb7af51ea322329ee68f4fc90bb06.svg",
  "arrow_right_inner.svg": "http://localhost:3845/assets/383cf79d1d889be8270867eab66bf79bf0e7ba05.svg",
  "close_alt.svg": "http://localhost:3845/assets/6455ef8e7c6c09471cd9dfa0042dc53c2cb35ad6.svg"
};

// Check and create folders
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

// Download function
async function downloadFile(url, dest) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: status ${res.status}`);
    }
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(buffer));
    console.log(`Successfully downloaded: ${path.basename(dest)}`);
  } catch (err) {
    console.error(`Error downloading ${url}:`, err.message);
  }
}

async function run() {
  console.log("Starting asset download from local Figma server...");
  for (const [filename, url] of Object.entries(assets)) {
    const dest = path.join(ASSETS_DIR, filename);
    await downloadFile(url, dest);
  }

  // Copy generated brand icon to public folder as various required sizes
  const generatedIconPath = "C:\\Users\\agare\\.gemini\\antigravity-ide\\brain\\8b7586d0-7f0b-43b6-8c2f-5750adf227d3\\ayni_brand_icon_1782151526228.png";
  if (fs.existsSync(generatedIconPath)) {
    console.log("Setting up PWA Brand Icons...");
    fs.copyFileSync(generatedIconPath, path.join(PUBLIC_DIR, "icon-512.png"));
    fs.copyFileSync(generatedIconPath, path.join(PUBLIC_DIR, "icon-192.png"));
    fs.copyFileSync(generatedIconPath, path.join(PUBLIC_DIR, "icon-maskable.png"));
    fs.copyFileSync(generatedIconPath, path.join(PUBLIC_DIR, "apple-touch-icon.png"));
    fs.copyFileSync(generatedIconPath, path.join(PUBLIC_DIR, "favicon.png"));
    console.log("All Brand Icons copied to public folder.");
  } else {
    console.warn("Generated brand icon not found at path:", generatedIconPath);
  }
  console.log("Asset setup completed successfully!");
}

run();
