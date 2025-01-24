function addScoreValue(value) {
    const scoreEl = document.querySelector('#score-value');
    const currentScore = Number(scoreEl.textContent) || 0;
    scoreEl.textContent = (currentScore + value);
}

document.querySelectorAll(".stone").forEach((kamenEl) => {
    let offsetX, offsetY, isDragging = false;

    kamenEl.style.position = "absolute";
    kamenEl.style.left = `${kamenEl.offsetLeft}px`;
    kamenEl.style.top = `${kamenEl.offsetTop}px`;

    kamenEl.addEventListener("mousedown", (event) => {
        isDragging = true;
        offsetX = event.clientX - kamenEl.offsetLeft;
        offsetY = event.clientY - kamenEl.offsetTop;
        kamenEl.style.cursor = "grabbing";

        const onMouseMove = (event) => {
            if (isDragging) {
                kamenEl.style.left = `${event.clientX - offsetX}px`;
                kamenEl.style.top = `${event.clientY - offsetY}px`;
            }
        };

        const onMouseUp = (event) => {
            isDragging = false;
            kamenEl.style.cursor = "grab";

            kamenEl.style.visibility = "hidden";
            const elementBehind = document.elementFromPoint(event.clientX, event.clientY);
            kamenEl.style.visibility = "visible";

            if (elementBehind && elementBehind.classList.contains("wagon")
                && elementBehind.dataset.sort === kamenEl.dataset.sort) {
                addScoreValue(10);
                kamenEl.remove();
                console.log(kamenEl.textContent, "->", elementBehind.textContent);
            }

            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".wagon").forEach((wagonEl) => {
        wagonEl.addEventListener("click", () => {
            console.log(wagonEl);
            kamenEl.remove()
        });
    });
});