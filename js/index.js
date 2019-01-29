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

// MVP GOAL: 10 unique event listeners

// This code is just to have some fun!  It adds a random listener to every element on the page and logs when its triggered!

// const events = {
//   focus: true,
//   blur: true,
//   cut: true,
//   copy: true,
//   paste: true,
//   auxclick: true,
//   click: true,
//   contextmenu: true,
//   dblclick: true,
//   mousedown: true,
//   mouseenter: true,
//   mouseleave: true,
//   mousemove: true,
//   mouseover: true,
//   mouseout: true,
//   mouseup: true,
//   //select: { form: ["input", "textarea"] }, // Requires a form, which I don't have
//   wheel: true,
//   drag: true,
//   dragend: true,
//   dragstart: true
// };
// const allElements = document.body.getElementsByTagName("*");
// const elementCount = allElements.length;
// let newEvents = Object.keys(events);
// const eventLog = {};
//
// Array.from(allElements).forEach(element => {
//   const i = Math.round(Math.random() * (newEvents.length - 1));
//   if (!newEvents.length) {
//     newEvents = Object.keys(events);
//   }
//   element.addEventListener(
//     newEvents[i],
//     e =>
//       console.log(
//         `${e.target.tagName} ${e.target.className} has been triggered by ${
//           [...newEvents][i]
//         }`
//       ) // Console log
//   ); // listener
//   eventLog[`${element.tagName} ${element.className}`] = [...newEvents][i];
//   newEvents.splice(i, 1); // Remove from the index
// });
//
// function logEvent(e, event) {}
// console.log("Events: ", eventLog);
