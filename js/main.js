const openMobileMenu = document.querySelector(".open-menu");
const closeMobileMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu-container");

openMobileMenu.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
});
closeMobileMenu.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

const spansOfBookmarks = document.querySelectorAll(".bookmarks span");
const featuresTapOne = document.querySelector(".features-tap-1");
const featuresTapTwo = document.querySelector(".features-tap-2");
const featuresTapThree = document.querySelector(".features-tap-3");

spansOfBookmarks.forEach((span) => {
  span.addEventListener("click", () => {
    spansOfBookmarks.forEach((e) => {
      e.classList.remove("active");
    });
    span.classList.add("active");

    console.log("Element clicked", span);
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("tap-1")) {
    featuresTapOne.style.display = "flex";
    featuresTapTwo.style.display = "none";
    featuresTapThree.style.display = "none";
  } else if (e.target.classList.contains("tap-2")) {
    featuresTapOne.style.display = "none";
    featuresTapTwo.style.display = "flex";
    featuresTapThree.style.display = "none";
  } else if (e.target.classList.contains("tap-3")) {
    featuresTapOne.style.display = "none";
    featuresTapTwo.style.display = "none";
    featuresTapThree.style.display = "flex";
  }
});

const questionContainers = document.querySelectorAll(".question-container");

// Variable to keep track of the currently open answer
let openAnswer = null;

questionContainers.forEach((container) => {
  const arrowIcon = container.querySelector("i");
  const theAnswer = container.nextElementSibling; // Assuming the answer is the next sibling element

  container.addEventListener("click", (e) => {
    // Check to close the previously open answer
    if (openAnswer && openAnswer !== theAnswer) {
      openAnswer.classList.remove("open");
      openAnswer.classList.add("close");
      openAnswer.style.display = "none";
      const prevArrowIcon =
        openAnswer.previousElementSibling.querySelector("i");
      prevArrowIcon.classList.toggle("fa-angle-down");
      prevArrowIcon.classList.toggle("fa-angle-up");
    }

    if (theAnswer.classList.contains("close")) {
      theAnswer.classList.remove("close");
      theAnswer.classList.add("open");
      theAnswer.style.display = "block";
      arrowIcon.classList.toggle("fa-angle-down");
      arrowIcon.classList.toggle("fa-angle-up");
      // Update the currently open answer
      openAnswer = theAnswer;
    } else if (theAnswer.classList.contains("open")) {
      theAnswer.classList.remove("open");
      theAnswer.classList.add("close");
      theAnswer.style.display = "none";
      arrowIcon.classList.toggle("fa-angle-down");
      arrowIcon.classList.toggle("fa-angle-up");
      // Update the currently open answer to null
      openAnswer = null;
    }
  });
});

// Form validation
const form = document.querySelector(".form-segment");
const errorFormContainer = document.querySelector(".input-field");
const inputElement = document.querySelector(".input-field input");
const errorMsg = document.querySelector(".error-msg");
const errorImg = document.querySelector(".email-field img");

const pattern = /^[a-zA-Z0-9_.+-]+@[a-z]+\.[a-z]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputElement.value.trim() === "") {
    errorFormContainer.classList.add("error");
    errorMsg.style.display = "block";
    errorImg.style.display = "block";
  } else if (!pattern.test(inputElement.value.trim())) {
    errorFormContainer.classList.add("error");
    errorMsg.style.display = "block";
    errorImg.style.display = "block";
  } else if (containsSymbol(inputElement.value.trim())) {
    errorFormContainer.classList.add("error");
    errorMsg.style.display = "block";
    errorImg.style.display = "block";
  } else {
    errorFormContainer.classList.remove("error");
    errorMsg.style.display = "none";
    errorImg.style.display = "none";
  }
});

function containsSymbol(value) {
  const symbolRegex = /^[!@#$%^&*(),.":{}|<>]/;

  return symbolRegex.test(value);
}
