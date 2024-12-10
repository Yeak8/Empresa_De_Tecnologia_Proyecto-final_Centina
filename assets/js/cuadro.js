function openEmailModal() {
    document.getElementById("emailModal").style.display = "block";
  }
  
  function closeEmailModal() {
    document.getElementById("emailModal").style.display = "none";
  }
  
  // Optional: Close modal when clicking outside of it
  window.onclick = function(event) {
    if (event.target == document.getElementById("emailModal")) {
      closeEmailModal();
    }
  };
  