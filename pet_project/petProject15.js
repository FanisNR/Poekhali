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

    for (let newKey in someObject) {
        boxOne.innerHTML += `<div> ключ ${newKey}; </div>`;
        boxTwo.innerHTML += `<div>значение ${someObject[newKey]}; </div>`;
    };
};

const numb = document.getElementById('boxThree');
const d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
const a1 = [];
const a2 = [];
for (let index = 0; index < d.length; index++) {
    if (d[index] % 2 === 0) {
        a1.push(d[index]);
    } else {
        a2.push(d[index]);
    }
}
console.log(a1);
console.log(a2);
numb.innerHTML += `<div>Четные элементы добавил в массив a1 [${a1}],</div>`;
numb.innerHTML += `<div>а нечетные в массив а2 [${a2}]</div>`;