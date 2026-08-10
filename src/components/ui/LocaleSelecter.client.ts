const localeSelecter = document.querySelector<HTMLElement>(
  "[data-locale-selector]",
);

document.addEventListener("click", (event) => {
  if (localeSelecter && !localeSelecter.contains(event.target as Node)) {
    localeSelecter.removeAttribute("open");
  }
});
