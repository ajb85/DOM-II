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
      let pos = { x: 0, y: 0, id: { backTimer: 0, fallTimer: 0 } };
      return manageInterval.bind(this, pos, block);
    })() // self-invoking
  ); // eventListener
}); // foreach

function manageInterval(pos, block, e) {
  // Verify no intervals are running.  If found, kill it
  if (pos.id.fallTimer) {
    clearTimer(pos, "fallTimer");
    //window.removeEventListener("mouseup", onBoxDeclick);
  }

  const order = {
    "block--red": 0,
    "block--blue": 1,
    "block--green": 2,
    "block--pink": 3,
    "block--gray": 4
  };
  const color = e.target.className.split(" ")[1];
  const interval = 50;
  const maxY = -order[color] * 100 - 16 * order[color];
  let movement = setInterval(moveBoxes, interval);

  window.addEventListener("mouseup", onBoxDeclick, { once: true });

  function onBoxDeclick() {
    clearInterval(movement);
    //block.removeEventListener("mousedown", onBoxClick);
    pos.id.fallTimer = setInterval(boxFalls.bind(this, onBoxDeclick), interval);
  }
  function moveBoxes() {
    // Manage box position
    pos.x += 2;
    pos.y = pos.y > maxY ? (pos.y -= 3) : maxY;
    e.target.style.transform = `matrix(0, -1, 1, 0, ${pos.x}, ${pos.y})`;
  } // moveBoxes

  function boxFalls(onBoxDeselect) {
    pos.y = pos.y < 0 ? (pos.y += 8) : 0;
    e.target.style.transform = `matrix(0, -1, 1, 0, ${pos.x}, ${pos.y})`;
    if (!pos.y) {
      clearTimer(pos, "fallTimer");
      //window.removeEventListener("mouseup", onBoxDeclic);
    }
  }
}

function clearTimer(pos, timer) {
  console.log(`Clearing ${timer}: ${pos.id[timer]}`);
  clearInterval(pos.id[timer]);
  pos.id[timer] = 0;
}
