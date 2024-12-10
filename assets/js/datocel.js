function openQuoteModal() {
  document.getElementById("quoteModal").style.display = "block";
}

function closeQuoteModal() {
  document.getElementById("quoteModal").style.display = "none";
}

// Optional: Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == document.getElementById("quoteModal")) {
    closeQuoteModal();
  }
};
