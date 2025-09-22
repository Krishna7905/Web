document.addEventListener("DOMContentLoaded", () => {
  

  const container = document.querySelector(".container");
  container.insertBefore(searchBox, container.querySelector(".pdf-list"));

  const items = document.querySelectorAll("#pdfList li");

  

  // Modal logic
  const viewer = document.getElementById("pdfViewer");
  const frame = document.getElementById("viewerFrame");
  const closeBtn = document.getElementById("closeBtn");
  const downloadBtn = document.getElementById("downloadBtn");

  let currentPDF = "";

  document.querySelectorAll(".viewBtn").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      currentPDF = link.getAttribute("href");
      frame.src = currentPDF;
      viewer.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    viewer.style.display = "none";
    frame.src = "";
  });

  downloadBtn.addEventListener("click", () => {
    if (currentPDF) {
      const a = document.createElement("a");
      a.href = currentPDF;
      a.download = currentPDF.split("/").pop();
      a.click();
    }
  });

  // Close modal on background click
  viewer.addEventListener("click", e => {
    if (e.target === viewer) {
      viewer.style.display = "none";
      frame.src = "";
    }
  });
});
