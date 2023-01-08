const cardBody = document.querySelector(".cart-wrapper").parentElement;
const cardWrapper = document.querySelector(".card-wrapper");
const emptyCart = document.querySelector("[data-cart-empty]");

function toggleCartStatus() {
  if (cardWrapper.children.length > 0) {
    emptyCart.classList.add("none");
  }
}
