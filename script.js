const glossary = [
    { stone: "Автоматическая блокировка (АБ)", wagon: "система сигнализации, обеспечивающая автоматическое управление движением поездов." },
    { stone: "Автоматический тормоз", wagon: "тормозная система, приводимая в действие автоматически при нарушении нормальной работы." },
    { stone: "Балластный слой", wagon: "слой щебня или гравия, на который укладывают рельсы для обеспечения устойчивости пути." },
    { stone: "Вагон", wagon: "подвижной состав для перевозки грузов или пассажиров на железной дороге." },
    { stone: "Верхнее строение пути", wagon: "комплекс элементов, обеспечивающих безопасность движения поездов (рельсы, шпалы, скрепления, балласт)." },
    { stone: "Выемка", wagon: "искусственное углубление в земле, предназначенное для прокладки железнодорожного пути." },
    { stone: "Габарит подвижного состава", wagon: "максимальные размеры транспортного средства, допустимые на железной дороге." },
    { stone: "Двухпутная линия", wagon: "железнодорожная линия, состоящая из двух параллельных путей, по которым движение ведется в обоих направлениях." },
    { stone: "Депо", wagon: "предприятие для ремонта, обслуживания и стоянки локомотивов и вагонов." },
    { stone: "Зона таможенного контроля", wagon: "участок, где производится проверка и оформление грузов при международных перевозках." },
    { stone: "Мультимодальные перевозки", wagon: "транспортировка грузов с использованием нескольких видов транспорта (например, железнодорожного и автомобильного)." },
    { stone: "Логистическая цепочка", wagon: "последовательность действий, необходимых для перемещения товара от производителя до конечного потребителя." },
    { stone: "Маршрут", wagon: "установленный путь движения транспорта для доставки грузов или пассажиров." },
    { stone: "Перевалка грузов (перегруз)", wagon: "перемещение грузов с одного вида транспорта на другой в процессе интермодальных перевозок." },
    { stone: "Склад временного хранения (СВХ)", wagon: "помещение, где хранятся товары до их таможенного оформления." },
    { stone: "Аренда вагонов", wagon: "услуга, при которой владельцы вагонов предоставляют их в пользование другим организациям или физическим лицам на определенный срок." },
    { stone: "Транспортно-экспедиционные услуги", wagon: "комплекс услуг, оказываемых экспедиторскими компаниями по организации перевозки грузов различными видами транспорта." },
    { stone: "Дополнительные сборы", wagon: "различные платежи, которые взимаются помимо основной ставки за перевозку грузов или аренду вагонов." },
    { stone: "Станционная работа", wagon: "комплекс операций, выполняемых на железнодорожных станциях, связанных с обслуживанием поездов и вагонов." },
    { stone: "Погрузочно-разгрузочные работы", wagon: "процессы, связанные с перемещением груза в и из транспортных средств, таких как вагоны, автомобили или контейнеры." },
    { stone: "Пломбирование вагонов", wagon: "процесс установки специальных пломб на вагоны после их загрузки, с целью обеспечения сохранности груза." },
    { stone: "Дефектоскоп", wagon: "оборудование для проверки состояния вагонов и рельсов на наличие трещин и других повреждений." },
    { stone: "Инвентарный парк вагонов", wagon: "парк вагонов, находящихся в собственности железной дороги и эксплуатируемых для перевозки грузов и пассажиров." },
    { stone: "Колесная пара", wagon: "узел вагона, состоящий из двух колес и оси, передающий нагрузку на рельсы." },
    { stone: "Кузов вагона", wagon: "основная конструкция вагона, предназначенная для размещения грузов или пассажиров." },
    { stone: "Полувагон", wagon: "открытый грузовой вагон с высокими бортами, используемый для перевозки насыпных и навалочных грузов." },
    { stone: "Ремонтный парк вагонов", wagon: "часть вагонов, временно выведенных из эксплуатации для проведения текущего или капитального ремонта." },
    { stone: "Сцепка вагонов", wagon: "процесс соединения вагонов для формирования железнодорожного состава." },
    { stone: "Тормозной путь", wagon: "расстояние, которое проходит поезд от момента начала торможения до полной остановки." },
    { stone: "Цистерна", wagon: "специализированный вагон для перевозки жидких грузов, таких как нефть, химикаты или вода." }
];
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
        const modal = document.querySelector('.modal');
        modal.classList.add('active');
        const btn = document.querySelector('.btn-reload');
        btn.addEventListener('click', () => {
            location.reload()
        })
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
                <img class="wagon-img" src="./images/wagon.png" alt="wagon">
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
function listenGame(token) {
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
                if (elementBehind.classList.contains("wagon", "wagon-text", "wagon-wheels", "wagon-img")) {
                    const stoneValue = stone.getAttribute('data-stone')
                    const wagonValue = elementBehind.getAttribute('data-wagon')
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
