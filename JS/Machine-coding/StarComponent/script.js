const startContainerElem = document.querySelector(".star_container");
const countElem = document.querySelector("#count");

startContainerElem.addEventListener("click", (event) => {
  const currentStar = event.target;
  if (!currentStar.hasAttribute("idx")) {
    return;
  }
  const rating = parseInt(currentStar.getAttribute("idx"));
  countElem.innerText = rating;
  changeStars(rating);
});

startContainerElem.addEventListener("mouseover", (event) => {
  const currentStar = event.target;
  if (!currentStar.hasAttribute("idx")) {
    return;
  }
  const rating = parseInt(currentStar.getAttribute("idx"));
  changeStars(rating);
});

startContainerElem.addEventListener("mouseleave", (event) => {
  console.log("mouseleave");
  changeStars(parseInt(countElem.innerText));
});

function changeStars(rating) {
  const starArr = document.querySelectorAll(".star");
  for (let i = 0; i < starArr.length; i++) {
    starArr[i].classList.remove("yellow");
  }
  for (let i = 0; i < rating; i++) {
    starArr[i].classList.add("yellow");
  }
}
