// Your code goes here

// Prevent nav items from refreshing the page
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", e => {
    // Target anchors that refresh the page...aka have href="#"
    // Otherwise, let me behave normally
    if (e.target.href === "#") e.preventDefault();
  }); // Event listener
}); // forEach
