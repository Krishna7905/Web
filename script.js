// Add search filter functionality
document.addEventListener("DOMContentLoaded", () => {
  // Create Search Box
  const searchBox = document.createElement("input");
  searchBox.type = "search";
  searchBox.placeholder = "Search PDFs...";
  searchBox.style.marginBottom = "15px";
  searchBox.style.padding = "8px";
  searchBox.style.width = "100%";

  const container = document.querySelector(".container");
  container.insertBefore(searchBox, container.querySelector(".pdf-list"));

  const items = document.querySelectorAll("#pdfList li");

  // Search filter logic
  searchBox.addEventListener("input", () => {
    const q = searchBox.value.toLowerCase();
    items.forEach(li => {
      li.style.display = li.innerText.toLowerCase().includes(q) ? "" : "none";
    });
  });

  // Modal viewer logic
  const viewer = document.getElementById("pdfViewer");
  const frame = document.getElementById("viewerFrame");
  const closeBtn = document.getElementById("closeBtn");

  document.querySelectorAll(".viewBtn").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      frame.src = link.getAttribute("href");
      viewer.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    viewer.style.display = "none";
    frame.src = ""; // stop PDF from staying loaded
  });

  // Close modal on background click
  viewer.addEventListener("click", e => {
    if (e.target === viewer) {
      viewer.style.display = "none";
      frame.src = "";
    }
  });
});
