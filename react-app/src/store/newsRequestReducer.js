// Локальное состояние массива с новостями

const deafultState = {
    array: [{
        "news_title": "Роспотребнадзор снял все введенные коронавирусные ограничения",
        "news_text": "Роспотребнадзор снимает ограничения, введенные с начала 2020 г. в России из-за пандемии, включая масочный режим. Роспотребнадзор обязал носить маски в местах массового пребывания в октябре 2020 г.",
        "date": "01.07.2022",
        "allData": "Роспотребнадзор снял все введенные коронавирусные ограничения Роспотребнадзор снимает ограничения, введенные с начала 2020 г. в России из-за пандемии, включая масочный режим. Роспотребнадзор обязал носить маски в местах массового пребывания в октябре 2020 г 01.07.2022",
        "id": 1
    },
        {
            "news_title": "Авиакомпании попросили Минтранс РФ вернуть часть самолетов за границу",
            "news_text": "Две российские авиакомпании подали заявки в Министерство транспорта с просьбой вернуть самолеты иностранным лизингодателям, сообщает 1 июля",
            "date": "01.07.2022",
            "allData": "Авиакомпании попросили Минтранс РФ вернуть часть самолетов за границу Две российские авиакомпании подали заявки в Министерство транспорта с просьбой вернуть самолеты иностранным лизингодателям, сообщает 1 июля 01.07.2022",
            "id": 2
        },
        {
            "news_title": "Почему риски обвала Tether/USDT ($66 млрд) растут: анализируем текущие события и возможные последствия",
            "news_text": "Криптозаморозки на рынке продолжаются. Практически каждые несколько недель громко лопается новый криптопроект на десятки миллиардов долларов: Luna/UST, Celsius, Three Arrows Capital. Есть основания полагать, что Tether/USDT может последовать их примеру (и у меня есть мемы, чтобы это доказать!)",
            "date": "01.07.2022",
            "allData": "Почему риски обвала Tether/USDT ($66 млрд) растут: анализируем текущие события и возможные последствия Криптозаморозки на рынке продолжаются. Практически каждые несколько недель громко лопается новый криптопроект на десятки миллиардов долларов: Luna/UST, Celsius, Three Arrows Capital. Есть основания полагать, что Tether/USDT может последовать их примеру (и у меня есть мемы, чтобы это доказать!) 01.07.2022",
            "id": 3
        },
        {
            "news_title": "«Яндекс Еда» в два раза увеличила награду за поиск уязвимостей в сервисе",
            "news_text": "Размер выплат — от 15 тысяч до 1,5 млн рублей. В июле и августе «Яндекс Еда» будет выдавать двойное вознаграждение тем, кто найдёт уязвимости. Деньги можно получить за выявление кражи пользовательских данных, мошенничества с промокодами, накрутки баллов «Яндекс Плюса» и фрода, сообщили в компании.",
            "date": "31.06.2022",
            "allData": "«Яндекс Еда» в два раза увеличила награду за поиск уязвимостей в сервисе Размер выплат — от 15 тысяч до 1,5 млн рублей. В июле и августе «Яндекс Еда» будет выдавать двойное вознаграждение тем, кто найдёт уязвимости. Деньги можно получить за выявление кражи пользовательских данных, мошенничества с промокодами, накрутки баллов «Яндекс Плюса» и фрода, сообщили в компании 31.06.2022",
            "id": 4
        },
        {
            "news_title": "«Ъ»: новая купюра в 100 рублей нескоро попадёт в обращение — её должны научиться распознавать банкоматы и терминалы",
            "news_text": "А их в основном производили иностранные компании, которые ушли из России и вряд ли будут теперь дорабатывать ПО.",
            "date": "02.07.2022",
            "allData": " «Ъ»: новая купюра в 100 рублей нескоро попадёт в обращение — её должны научиться распознавать банкоматы и терминалы А их в основном производили иностранные компании, которые ушли из России и вряд ли будут теперь дорабатывать ПО 02.07.2022",
            "id": 5
        },
        {
            "news_title": "«Магнит» запустил магазины «У дома Плюс» — в дополнение к «У дома», «Экстра» и дискаунтерам «Моя цена»",
            "news_text": "Они будут больше обычных магазинов «у дома», но меньше, чем «Экстра».",
            "date": "31.07.2022",
            "allData": "«Магнит» запустил магазины «У дома Плюс» — в дополнение к «У дома», «Экстра» и дискаунтерам «Моя цена» Они будут больше обычных магазинов «у дома», но меньше, чем «Экстра». 31.07.2022",
            "id": 6
        }]
}

// Action

const ADD_NEWS = "ADD_NEWS"
const CHANGE_TEXT = "CHANGE_TEXT"
const CHANGE_DATE = "CHANGE_DATE"

// Reducer

export const thirdreducer = (state = deafultState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            return {...state, array: [...state.array, action.payload]}
        default:
            return state
    }

}

