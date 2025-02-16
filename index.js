let homePointEl = document.getElementById("home-point-el");
let guestPointEl = document.getElementById("guest-point-el");

let homeScore = 0;
let guestScore = 0;

function addHomeOne() {
  homeScore += 1;
  homePointEl.textContent = homeScore;
}

function addHomeTwo() {
  homeScore += 2;
  homePointEl.textContent = homeScore;
}

function addHomeThree() {
  homeScore += 3;
  homePointEl.textContent = homeScore;
}

function addGuestOne() {
  guestScore += 1;
  guestPointEl.textContent = guestScore;
}

function addGuestTwo() {
  guestScore += 2;
  guestPointEl.textContent = guestScore;
}

function addGuestThree() {
  guestScore += 3;
  guestPointEl.textContent = guestScore;
}

function resetScore() {
  homePointEl.textContent = 0;
  homeScore = 0;
  guestPointEl.textContent = 0;
  guestScore = 0;
}
