// I want the blocks to start a timer.  Which means I need to remove that
// listener once the timer starts.  That means it has to be its own listener
// so the others don't deactivate as well
Array.from(document.getElementsByClassName("block")).forEach(block =>
  block.addEventListener("mousedown", startTimer)
);
function startTimer(block) {
  startInterval();
  removeTimerEvents();
}
function removeTimerEvents() {
  Array.from(document.getElementsByClassName("block")).forEach(block =>
    block.removeEventListener("mousedown", startTimer)
  );
}

// Allowing the boxes to move while clicked
Array.from(document.getElementsByClassName("block")).forEach(block => {
  block.addEventListener(
    "mousedown",
    // Closure to protect the x position
    (() => {
      // Objects are references so .bind will pass the REFERENCE instead
      // of the static value if I were to use x = 0
      let pos = { x: 0 };
      return manageInterval.bind(this, pos); // Nested Function
    })()
  );
}); // foreach

function manageInterval(pos, e) {
  const interval = 50;
  let movement = setInterval(moveBoxes, interval);
  window.addEventListener("mouseup", () => {
    clearInterval(movement);
    const order = {
      "block--red": 1,
      "block--blue": 2,
      "block--green": 3,
      "block--pink": 4,
      "block--gray": 5
    };
    const color = e.target.className.split(" ")[1];
    e.target.style.order = order[color];
  });

  function moveBoxes() {
    //console.log(e.target);
    pos.x += 2;
    e.target.style.order = 0;
    e.target.style.transform = `matrix(0, -1, 1, 0, ${pos.x}, 0)`;
  } // moveBoxes
}
