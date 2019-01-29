// MVP GOAL: Prevent nav items from refreshing the page
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", e => {
    // Target anchors that refresh the page...aka have href="#"
    // Otherwise, let me behave normally
    if (e.target.href === "#") e.preventDefault();
  }); // Event listener
}); // forEach
// end MVP

// MVP GOAL: use stopProp to prevent event from bubbling
// Parent event listener
document.querySelector("header div").addEventListener("click", e => {
  console.log("Parent: ", e.target);
});
// Child event listener
document.getElementsByTagName("nav")[0].addEventListener("click", e => {
  // mouseenter instead of mouseover so children (anchor tags) won't inherent
  console.log("Child: ", e.target);
  e.stopPropagation(); // child only!  Commented out: logs Child & Parent.
});
// end MVP
