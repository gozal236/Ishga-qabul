// index.html ichidagi <script> blokini alohida faylga ajratadi.
// Maqsad: `node --check` bilan sintaksisni CI'da tekshirish.
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync("index.html", "utf8");

const start = html.indexOf("<script>") + "<script>".length;
const end = html.lastIndexOf("</script>");

if (start < 0 || end <= start) {
  console.error("Xato: index.html ichida <script> bloki topilmadi");
  process.exit(1);
}

fs.mkdirSync(".build", { recursive: true });
fs.writeFileSync(path.join(".build", "app.js"), html.slice(start, end));

console.log("app.js ajratildi:", end - start, "belgi");
