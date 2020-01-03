const slidersImage = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  slidersImage.forEach(img => {
    let slideInY = window.scrollY + window.innerHeight - img.height / 2;
    let isHalfShowed = slideInY >= img.offsetTop;
    let imgBottomY = img.offsetTop + img.height;
    let isPassed = window.scrollY > imgBottomY;
    if (isHalfShowed && !isPassed) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));

function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    let context = this,
      args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
