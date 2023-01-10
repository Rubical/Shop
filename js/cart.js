const cartWrapper = document.querySelector(".cart-wrapper");
/* Render product in cart */

window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-cart")) {
    const targetEl = event.target.closest(".col-md-6");
    const productInfo = {
      id: targetEl.querySelector(".card").getAttribute("data-id"),
      imgSrc: targetEl.querySelector("img").getAttribute("src"),
      name: targetEl.querySelector(".item-title").textContent,
      amount: targetEl.querySelector("[data-items-in-box]").textContent,
      weight: targetEl.querySelector(".price__weight").textContent,
      counter: targetEl.querySelector("[data-counter]").textContent,
      price: targetEl.querySelector(".price__currency").textContent,
    };

    const elWithSameId = cartWrapper.querySelector(
      `[data-id = "${productInfo.id}"]`
    );
    if (elWithSameId) {
      const counterInCart = elWithSameId.querySelector(`[data-counter]`);
      counterInCart.textContent =
        Number(counterInCart.textContent) + Number(productInfo.counter);
    } else {
      const cartHTML = `
    <div class="cart-item" data-id="${productInfo.id}">
		<div class="cart-item__top">
			<div class="cart-item__img">
				<img src="${productInfo.imgSrc}" alt="${productInfo.name}">
			</div>
			<div class="cart-item__desc">
				<div class="cart-item__title">${productInfo.name}</div>
				<div class="cart-item__weight">${productInfo.amount}/ ${productInfo.weight}</div>
				<div class="cart-item__details">
					<div class="items items--small counter-wrapper">
						<div class="items__control" data-action="minus">-</div>
						<div class="items__current" data-counter="">${productInfo.counter}</div>
						<div class="items__control" data-action="plus">+</div>
					</div>
					<div class="price">
						<div class="price__currency">${productInfo.price}</div>
					</div>
				</div>
			</div>
		</div>
	</div>`;
      cartWrapper.insertAdjacentHTML("beforeend", cartHTML);
    }
    toggleCartStatus();
    calcCartPrice();
  }
});
