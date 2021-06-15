let arrg = [
    "кот",
    999,
    {
        type: "animals",
        age: 2
    },
    true,
    function () {
        console.log("Привет, я Кот");
    }
];


resolt = arrg.filter((_, index)=>index%2==0)



const cats = {
    'abyssinian': '😸',
    'american-bobtail' : '🐱',
    'siam': '🙀',
    'bombay' : '😼'
};
for (let cat in cats) {
    if (cat.length > 4) {
        console.log(cats[cat])
    }
}

const someObject = {};

const btn = document.getElementById('btn');
const boxOne = document.getElementById('boxOne');
const boxTwo = document.getElementById('boxTwo');


btn.onclick = function () {
    const newKey = document.getElementById('some-object-key').value;
    const newValue = document.getElementById('some-object-value').value;
    someObject[newKey] = newValue;
    boxOne.innerHTML = ' '; 
    boxTwo.innerHTML = ' '; 

    for (let newKey1 in someObject) {
        boxOne.innerHTML += `<div> ключ ${newKey}; </div>`;
        boxTwo.innerHTML += `<div>значение ${someObject[newKey]}; </div>`;
    };
};

const numb = document.getElementById('boxThree');
const d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
const a1 = [];
const a2 = [];
for (let index = 0; index < d.length; index++) {
    d[index] % 2 ? a2.push(d[index]) : a1.push(d[index]);
}

console.log(a1);
console.log(a2);
numb.innerHTML += `<div>Четные элементы добавил в массив a1 [${a1}],</div>`;
numb.innerHTML += `<div>а нечетные в массив а2 [${a2}]</div>`;


const arr = [
    { rating: "96%", cost: 41.3, name: "Дюна" },
    { rating: "96%", cost: 32.4, name: "Звёздный путь 4" },
    { rating: "96%", cost: 39.6, name: "Доктор Стрэндж и мультивселенная безумия" },
    { rating: "96%", cost: 33.7, name: "Круэлла" },
    { rating: "96%", cost: 33.0, name: "Смерть на Ниле" },
    { rating: "95%", cost: 38.3, name: "Вечные" },
    { rating: "94%", cost: 39.2, name: "Матрица 4" },
    { rating: "94%", cost: 40.8, name: "Главный герой" },
    { rating: "94%", cost: 41.2, name: "Морбиус" },
    { rating: "93%", cost: 32.1, name: "Веном 2" },
    { rating: "93%", cost: 38.7, name: "Джон Уик 4" },
    { rating: "92%", cost: 38.2, name: "Бэтмен" },
    { rating: "92%", cost: 38.3, name: "Тихое место 2" },
    { rating: "92%", cost: 36.0, name: "Не время умирать" },
    { rating: "91%", cost: 41.5, name: "Заклятие 3: По воле дьявола" },
    { rating: "90%", cost: 34.8, name: "Чёрная Вдова" },
    { rating: "90%", cost: 39.0, name: "Охотники за привидениями: Наследники" },
    { rating: "90%", cost: 34.0, name: "Аватар 2" },
    { rating: "88%", cost: 37.6, name: "Неизведанное: Удача Дрейка" },
    { rating: "88%", cost: 36.5, name: "Топ Ган: Мэверик" },
] 
const highPrice = arr.map(item => {
    const container = {};
    container.film= item.name;
    container.cost =  (item.rating.slice(0, -1) >= 92) ? item.cost * 2 : item.cost;
    container.rating = item.rating;
    return container;
})
console.log(highPrice);


const result = arr.filter(item => item.rating.slice(0, -1) <= 90);
console.log(result)



const add = (a, b) =>isNaN(a, b) ? 0 : +a + +b;

console.log(add(1, 2) === 3);
console.log(add(1, '2') === 3);
console.log(add('1', 3) === 4);
console.log(add('2', '2') === 4);
console.log(add(NaN, 2) === 0);
console.log(add('', 2) === 2);
console.log(add() === 0);
console.log(add(true, true) === 2);