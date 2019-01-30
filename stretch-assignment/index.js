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
    (() => {
      let xPos = 0;
      return function(e) {
        const interval = 50;
        let movement = setInterval(moveBoxes, interval);
        window.addEventListener("mouseup", () => clearInterval(movement));

        function moveBoxes() {
          //console.log(e.target);
          xPos += 1;
          e.target.style.transform = `matrix(0, -1, 1, 0, ${xPos}, 0)`;
        } // moveBoxes
      }; // Nested Function
    })()
  );
}); // foreach

function manageInterval(e) {}
