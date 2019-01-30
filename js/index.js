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
// 1 mouseenter
document.querySelectorAll(".shadow").forEach(element =>
  element.addEventListener("mouseenter", e => {
    const duration = 0.5;
    const animations = {
      boxShadow: "7px 8px 5px 1px rgba(100, 100, 100, 0.2)"
    };
    TweenMax.to(e.target, duration, animations); // STRETCH: Green Sock
    //e.target.style.border = "1px solid black";
  })
);
// 2 mouseleave
document.querySelectorAll(".shadow").forEach(element =>
  element.addEventListener("mouseleave", e => {
    e.target.style.boxShadow = "none";
    //e.target.style.border = "none";
  })
);
//3 click
document.getElementsByTagName("h1")[0].addEventListener("click", e => {
  e.target.classList.toggle("underline");
});
//4 dblclick
Array.from(document.getElementsByTagName("img")).forEach(img =>
  img.addEventListener("dblclick", e => {
    e.target.style.display = "none";
  })
);
//5 copy --> only works on highlight & Ctrl+C
Array.from(document.getElementsByTagName("img")).forEach(img =>
  img.addEventListener("copy", e => {
    alert("Please don't steal our images");
  })
);
//6 resize
window.addEventListener("resize", e => {
  if (window.innerWidth < 500) console.log("Switch to mobile view");
});
//7 contextmenu
window.addEventListener("contextmenu", e => {
  alert(
    "I'm one of those annoying sites that tries to stop you from right-clicking"
  );
  e.preventDefault();
});
//8 keydown
let keystrokes = "";
window.addEventListener("keydown", e => {
  keystrokes += e.key;
  console.log(`hackin ur life: ${keystrokes}`);
});
//9 mousemove
const allElements = document.body.getElementsByTagName("*");
const logElementInterest = {};
Array.from(allElements).forEach(element =>
  element.addEventListener("mousemove", e => {
    const key = `${element.tagName}_${element.className}`;
    logElementInterest[key] = logElementInterest[key]
      ? (logElementInterest[key] += 1)
      : 1;
    console.log(logElementInterest);
    e.stopPropagation(); // no bubble!
  })
);
//10 beforeprint
window.addEventListener("beforeprint", () => alert("Print!"));

// STRETCH: Green Sock
const screenWidth = window.innerWidth;
TweenMax.from("h1", 1.1, { y: -100 });
TweenMax.staggerFrom("nav a", 0.5, { x: screenWidth / 2 }, 0.2);

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
