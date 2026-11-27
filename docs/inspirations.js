const searchPanel = document.querySelector(".catalog-search");
const search = document.querySelector("#search");
const status = document.querySelector("#catalog-status");
const sections = [...document.querySelectorAll("main section")];
const entries = [...document.querySelectorAll("[data-entry]")];

function filterCatalog() {
  const words = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  let matchCount = 0;
  for (const entry of entries) {
    const text = entry.textContent.toLocaleLowerCase();
    const topic = entry.closest("section").querySelector("h2").textContent.toLocaleLowerCase();
    entry.hidden = !words.every(word => text.includes(word) || topic.includes(word));
    if (!entry.hidden) matchCount++;
  }
  for (const section of sections) {
    section.hidden = !section.querySelector("[data-entry]:not([hidden])");
  }
  status.textContent = matchCount ? `${matchCount} ${matchCount === 1 ? "entry" : "entries"}` : "No entries match your search.";
}

searchPanel.hidden = false;
search.addEventListener("input", filterCatalog);
filterCatalog();
