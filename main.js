const formButton = document.getElementById("formButton")
const imgApproved = '<img src="./images/aprovado.png" alt="emoji">'
const imgDisapproved = '<img src="./images/reprovado.png" alt="emoji">'
let arrayNotes = [];
let arrayNames = [];
const minNote = parseFloat(prompt('Digite a nota de corte'));

let line = '';

formButton.addEventListener("click", function(e){
    e.preventDefault();

    addLine();
    increaseTable();
    calculateAverage();
    increaseTFoot();
});

function addLine() {
    const inputActivityName = document.getElementById("activityName");
    const inputActivityNote = document.getElementById("activityNote");

    console.log(arrayNames.includes(inputActivityName.value));

    if (arrayNames.includes(inputActivityName.value)) {
        alert (`A atividade ${inputActivityName.value} já foi inserida`);
    } else {

    arrayNotes.push(parseFloat(inputActivityNote.value));
    arrayNames.push(inputActivityName.value);

    line = `<tr>`
    line += `<td>${inputActivityName.value}</td>`
    line += `<td>${inputActivityNote.value}</td>`
    line += `<td>${inputActivityNote.value >= minNote ? imgApproved : imgDisapproved}</td>`
    line += `</tr>`
    }
}

function increaseTable() {
    let table = document.querySelector('tbody');
    table.innerHTML += line;
}

function calculateAverage() {
    let sumGrades = 0;
    for (let i = 0; i < arrayNotes.length; i++) {
        sumGrades += arrayNotes[i];
    }

    return sumGrades/arrayNotes.length;
}

function increaseTFoot() {
    document.querySelector('#finalNote').innerHTML = calculateAverage();
    const result = document.querySelector('.resultado');

    if (calculateAverage() >= minNote) {
        
        result.innerHTML = 'Aprovado!';
        result.style.color = '#fff';
        result.style.backgroundColor = '#009432'; 

    } else {
        result.innerHTML = 'Reprovado';
        result.style.color = '#fff';
        result.style.backgroundColor = 'red';
    }
}