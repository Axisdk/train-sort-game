const glossary = [
    { stone: 'хуй', wagon: 'за щеку' },
    { stone: 'много', wagon: 'не пизди' },
    { stone: 'ибо', wagon: 'нехуй' },
    { stone: 'елочка', wagon: 'гори' },
]

// проверяем относится ли камень к вагону
function checkIntoGlossary(stoneValue, wagonValue) {
    return !!glossary.find((item) =>
        item.stone === stoneValue && item.wagon === wagonValue
    )
}

// проверяем остались ли камни
function checkCountStones() {
    const stones = document.querySelectorAll('.stone')
    const score = document.querySelector('.score-value').textContent
    if (!stones.length) {
        // здесь просто покажи модалку с результатом (score)
        // и кнопку для перезапуска игры (location.reload())
    }
}

// прибавляем счет
function incrementScore() {
    document.querySelector('.score-value').textContent++
}

// рисуем камни
function drawStones() {
    const wrapper = document.querySelector('.stones-wrapper')
    wrapper.innerHTML = glossary.map((item) => {
        return `
            <div class="stone" data-stone="${item.stone}">
                <span class="stone-text">${item.stone}</span>
            </div>
        `
    })
}

// рисуем вагоны и локомотив
function drawWagons() {
    const wrapper = document.querySelector('.train')
    // вагоны
    wrapper.innerHTML = glossary.map((item) => {
        return `
            <div class="wagon" data-wagon="${item.wagon}">
                <p class="wagon-text">${item.wagon}</p>
                <img src="./images/wagon.png" alt="wagon">
                <div class="wagon-wheels">
                    <div class="wagon-wheel wagon-wheel-1">
                        <img src="./images/wheel.png" alt="wheel">
                    </div>
                    <div class="wagon-wheel wagon-wheel-2">
                        <img src="./images/wheel.png" alt="wheel">
                    </div>
                    <div class="wagon-wheel wagon-wheel-3">
                        <img src="./images/wheel.png" alt="wheel">
                    </div>
                    <div class="wagon-wheel wagon-wheel-4">
                        <img src="./images/wheel.png" alt="wheel">
                    </div>
                </div>
            </div>
        `
    })

    // локомотив
    wrapper.innerHTML += `
        <div class="locomotive">
                <div class="locomotive-main">
                    <img src="./images/train.png" alt="train">
                </div>
                <div class="locomotive-wheels">
                    <div class="locomotive-wheel locomotive-wheel-1">
                        <img src="./images/wheel.png" alt="wheel">
                    </div>
                    <div class="locomotive-wheel locomotive-wheel-2">
                        <img src="./images/wheel.png" alt="wheel">
                    </div>
                    <div class="locomotive-wheel locomotive-wheel-3">
                        <img src="./images/wheel.png" alt="wheel">
                    </div>
                    <div class="locomotive-wheel locomotive-wheel-4">
                        <img src="./images/wheel.png" alt="wheel">
                    </div>
                    <div class="locomotive-wheel locomotive-wheel-5">
                        <img src="./images/wheel.png" alt="wheel">
                    </div>
                    <div class="locomotive-wheel locomotive-wheel-6">
                        <img src="./images/wheel.png" alt="wheel">
                    </div>
                    <div class="locomotive-wheel locomotive-wheel-7">
                        <img src="./images/wheel.png" alt="wheel">
                    </div>
                </div>
            </div>
    `
}

// логика игры, слушаем разные события (drag and drop и пр.)
function listenGame() {
    const stones = document.querySelectorAll(".stone");

    stones.forEach((stone) => {
        // флажки
        let offsetX, offsetY, isDragging = false;

        stone.style.position = "absolute";

        // при нажатии
        stone.addEventListener("mousedown", (event) => {
            isDragging = true;
            offsetX = event.clientX - stone.offsetLeft;
            offsetY = event.clientY - stone.offsetTop;
            stone.style.cursor = "grabbing";
        });

        // при перетаскивании
        document.addEventListener("mousemove", (event) => {
            if (isDragging) {
                stone.style.left = `${event.clientX - offsetX}px`;
                stone.style.top = `${event.clientY - offsetY}px`;
            }
        });

        // при отпускании
        document.addEventListener("mouseup", (event) => {
            isDragging = false;
            stone.style.cursor = "grab";

            // скрываем камень, чтобы получить элемент сзади
            stone.style.visibility = "hidden";
            const elementBehind = document.elementFromPoint(event.clientX, event.clientY);
            // показываем камень
            stone.style.visibility = "visible";

            if (elementBehind) {
                // если это вагон
                if (elementBehind.classList.contains("wagon")) {
                    const stoneValue = stone.getAttribute('data-stone');
                    const wagonValue = elementBehind.getAttribute('data-wagon');
                    if (checkIntoGlossary(stoneValue, wagonValue)) {
                        incrementScore()
                    }
                    stone.remove()
                    checkCountStones()
                }
            }
        });
    });

}

document.addEventListener('DOMContentLoaded', () => {
    drawStones()
    drawWagons()
    listenGame()
})
