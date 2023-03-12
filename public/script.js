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
});

closeMenu.addEventListener("click", (e) => {
  e.target.classList.remove("active");
  openMenu.classList.add("active");
  mobileMenu.classList.remove("active");
  mobileMenuOverlay.classList.remove("active");
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
