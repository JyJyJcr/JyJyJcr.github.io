{
  const dismissibleDetails = document.querySelectorAll<HTMLElement>(
    "[data-navigation-selector]",
  );

  document.addEventListener("click", (event) => {
    const target = event.target as Node;
    dismissibleDetails.forEach((details) => {
      if (!details.contains(target)) details.removeAttribute("open");
    });
  });
}
