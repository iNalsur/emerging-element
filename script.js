const image = document.getElementById("image");

window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;
    const imageRect = image.getBoundingClientRect();
    const imageTop = imageRect.top;
    const imageBottom = imageRect.bottom;

    if (imageBottom > 0 && imageTop < windowHeight) {
        image.style.opacity = 1;
    } else {
        image.style.opacity = 0;
    }
});