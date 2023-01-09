window.addEventListener("click", function (event) {
  if (event.target.dataset.action == "minus") {
    const parentNode = event.target.closest(".counter-wrapper");
    let counter = parentNode.querySelector("div[data-counter]");
    Number(counter.textContent) !== 1
      ? (counter.textContent = --counter.textContent)
      : null;
  }

  if (event.target.dataset.action == "plus") {
    const parentNode = event.target.closest(".counter-wrapper");
    let counter = parentNode.querySelector("div[data-counter]");
    counter.textContent = ++counter.textContent;
  }
});
