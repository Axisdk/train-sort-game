const kamniEls = document.querySelectorAll(".kamen");

kamniEls.forEach((kamenEl) => {
    let offsetX, offsetY, isDragging = false;

    kamenEl.style.position = "absolute";

    kamenEl.addEventListener("mousedown", (event) => {
        isDragging = true;
        offsetX = event.clientX - kamenEl.offsetLeft;
        offsetY = event.clientY - kamenEl.offsetTop;
        kamenEl.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (event) => {
        if (isDragging) {
            kamenEl.style.left = `${event.clientX - offsetX}px`;
            kamenEl.style.top = `${event.clientY - offsetY}px`;
        }
    });

    document.addEventListener("mouseup", (event) => {
        isDragging = false;
        kamenEl.style.cursor = "grab";

        // скрываем камень, чтобы получить элемент сзади
        kamenEl.style.visibility = "hidden";
        const elementBehind = document.elementFromPoint(event.clientX, event.clientY);
        // показываем камень
        kamenEl.style.visibility = "visible";

        if (elementBehind) {
            // если это вагон
            if (elementBehind.classList.contains("wagon")
                && elementBehind.dataset.sort === kamenEl.dataset.sort) {
                console.log(kamenEl.textContent, '->', elementBehind.textContent)
                kamenEl.classList.add('kamen-hidden')
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const wagonsEls = document.querySelectorAll('.wagon');

    wagonsEls.forEach(wagonEl => {
        wagonEl.addEventListener('click', () => {
            console.log(wagonEl);
        })
    })

})