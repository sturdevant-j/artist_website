
function scaleContainer() {
    const containers = document.querySelectorAll(".imageContainer");
    const imgs = document.querySelectorAll(".imageContainer img");
    if (containers && imgs) {
        const containerMaxHeight = "max-height: " + self.innerHeight + "px";
        const imgMaxHeight = "max-height: " + (self.innerHeight - 64) + "px";
        containers.forEach(container => container.setAttribute("style", containerMaxHeight))
        imgs.forEach(img => img.setAttribute("style", imgMaxHeight))
    }
}

function setAltTags() {
    const imgs = document.querySelectorAll(".imageContainer img");
    if (imgs) {
        imgs.forEach(img => img.setAttribute("alt", img.getAttribute("title")));
    }
}

window.addEventListener("resize", function () {
    scaleContainer();
});

scaleContainer();
setAltTags();

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
});
