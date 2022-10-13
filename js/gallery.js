const lightboxEnabledLast = document.querySelectorAll(".lightbox-enabled-last");
const lightboxArrayLast = Array.from(lightboxEnabledLast);
const lastImageLast = lightboxArrayLast.length - 1;
const lightboxContainerLast = document.querySelector(
  ".lightbox-container-last"
);
const lightboxImageLast = document.querySelector(".lightbox-image-last");
const lightboxBtnsLast = document.querySelectorAll(".lightbox-btn-last");
const lightboxBtnRightLast = document.querySelector("#right-last");
const lightboxBtnLeftLast = document.querySelector("#left-last");
const closeLast = document.querySelector("#close-last");
let activeImageLast;
// Functions
const showLightBoxLast = () => {
  lightboxContainerLast.classList.add("active");
};

const hideLightBoxLast = () => {
  lightboxContainerLast.classList.remove("active");
};

const setActiveImageLast = (image) => {
  lightboxImageLast.src = image.dataset.imgsrc;
  activeImageLast = lightboxArrayLast.indexOf(image);
};

const transitionSlidesLeftLast = () => {
  lightboxBtnLeftLast.focus();
  $(".lightbox-image-last").addClass("slideright");
  setTimeout(function () {
    activeImageLast === 0
      ? setActiveImageLast(lightboxArrayLast[lastImageLast])
      : setActiveImageLast(lightboxArrayLast[activeImageLast - 1]);
  }, 250);

  setTimeout(function () {
    $(".lightbox-image-last").removeClass("slideright");
  }, 500);
};

const transitionSlidesRightLast = () => {
  lightboxBtnRightLast.focus();
  $(".lightbox-image-last").addClass("slideleft");
  setTimeout(function () {
    activeImageLast === lastImageLast
      ? setActiveImageLast(lightboxArrayLast[0])
      : setActiveImageLast(lightboxArrayLast[activeImageLast + 1]);
  }, 250);
  setTimeout(function () {
    $(".lightbox-image-last").removeClass("slideleft");
  }, 500);
};

const transitionSlideHandlerLast = (moveItem) => {
  moveItem.includes("left")
    ? transitionSlidesLeftLast()
    : transitionSlidesRightLast();
};

// Event Listeners
lightboxEnabledLast.forEach((image) => {
  image.addEventListener("click", (e) => {
    showLightBoxLast();
    setActiveImageLast(image);
  });
});
lightboxContainerLast.addEventListener("click", () => {
  hideLightBoxLast();
});
closeLast.addEventListener("click", () => {
  hideLightBoxLast();
});
lightboxBtnsLast.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    transitionSlideHandlerLast(e.currentTarget.id);
  });
});

lightboxImageLast.addEventListener("click", (e) => {
  e.stopPropagation();
});
