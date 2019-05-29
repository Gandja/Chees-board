let tab = document.getElementById('table');
let arr = [[2, 1], [2, -1], [-2, 1], [-2, -1], [-1, 2], [-1, -2], [1, 2], [1, -2]];
//create HTML
for (let i = 0; i < 9; i++) {
    let newElement = document.createElement('tr');
    tab.appendChild(newElement);
    for (let j = 0; j < 9; j++) {
        let element = document.createElement('th');
        element.id = i * 10 + j;
        newElement.appendChild(element);
    }
}
// add letters and numbers
for (let i = 1; i < 9; i++) {
    let el = document.getElementById(i);
    el.innerHTML = String.fromCharCode(i + 64);
    el = document.getElementById(i * 10);
    el.innerHTML = i;

}
//add color
for (let i = 11; i < 90; i++) {
    if (i % 10 === 0 || i % 10 === 9) {
        continue;
    } else if ((parseInt(i / 10) + i % 10) % 2 == 0) {
        let el = document.getElementById(i);
        el.style.backgroundColor = 'black';

    }
}

table.onmouseover = function () {

    let target = event.target;
    for (let i = 0; i < 8; i++) {
        let step = parseInt(target.id) + arr[i][0] + arr [i][1] * 10;
        if (step >= 11 && step <= 88 && step % 10 !== 9 && step % 10 !== 0) {
            document.getElementById(step).style.backgroundColor = 'green';
        }
    }
}

table.onmouseout = function () {

    let target = event.target;
    for (let i = 0; i < 8; i++) {
        let step = parseInt(target.id) + arr[i][0] + arr [i][1] * 10;
        if (step >= 11 && step <= 88 && step % 10 !== 9 && step % 10 !== 0) {
            if ((parseInt(step / 10) + step % 10) % 2 === 0) {
                document.getElementById(step).style.backgroundColor = 'black';
            } else {
                document.getElementById(step).style.backgroundColor = '';
            }
        }
    }
}