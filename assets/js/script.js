const anchorTags = document.querySelectorAll("a");

anchorTags.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();

    anchor.style.transition = "opacity 0.8s";
    anchor.style.opacity = 0.2;

    setTimeout(() => {
      window.location.href = anchor.href;
    }, 500);
  });
});