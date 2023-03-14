const openMenu = document.querySelector(".open-menu-mobile");
const closeMenu = document.querySelector(".close-menu-mobile");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");

openMenu.addEventListener("click", (e) => {
  e.target.classList.remove("active");
  closeMenu.classList.add("active");
  mobileMenu.classList.add("active");
  mobileMenuOverlay.classList.add("active");
  document.body.classList.add("disable-scroll");
  setTimeout(() => {
    mobileMenu.style.opacity = "1";
    mobileMenuOverlay.style.opacity = "1";
  }, 10);
});

closeMenu.addEventListener("click", (e) => {
  e.target.classList.remove("active");
  openMenu.classList.add("active");
  mobileMenu.style.opacity = "0";
  mobileMenuOverlay.style.opacity = "0";
  setTimeout(() => {
    mobileMenu.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");
  }, 300);

  document.body.classList.remove("disable-scroll");
});

// bookmark button
const bookmarkButton = document.querySelector(".bookmark");
const bookmarkText = document.querySelector(".bookmark-text");
const bookmarkIcon = document.querySelector(".bookmark-icon");
bookmarkButton.addEventListener("click", handleBookMarked);

function handleBookMarked() {
  bookmarkText.classList.toggle("bookmarked-text");
  bookmarkIcon.classList.toggle("bookmarked-icon");
  if (bookmarkText.classList.contains("bookmarked-text")) {
    bookmarkText.innerText = "Bookmarked";
    localStorage.setItem("bookmarked", true);
  } else {
    bookmarkText.innerText = "Bookmark";
    localStorage.setItem("bookmarked", false);
  }
}

// check localstorage for bookmarked or not
if (localStorage.getItem("bookmarked") == "true") {
  handleBookMarked();
}

//showing modal selection and hiding it

//button that says bavk this project
const backButton = document.querySelector(".back");
const modalSelection = document.querySelector(".selection-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModalButton = document.querySelector(".close-modal-button");

backButton.addEventListener("click", () => {
  handleModal("show");
});
closeModalButton.addEventListener("click", () => {
  handleModal("hide");
});

function handleModal(action) {
  if (action === "show") {
    modalSelection.classList.add("active");
    modalOverlay.classList.add("active");
    setTimeout(() => {
      modalSelection.style.opacity = "1";
      modalOverlay.style.opacity = "1";
    }, 10);
  } else if (action === "hide") {
    modalSelection.style.opacity = "0";
    modalOverlay.style.opacity = "0";
    setTimeout(() => {
      modalSelection.classList.remove("active");
      modalOverlay.classList.remove("active");
    }, 300);
  }
}
