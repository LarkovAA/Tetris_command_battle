/*
Формируем игровое поле.
Создаем переменную board с типом пеерменной пустая строка.
В цикле фор создаем игровое поле где в переменную board добавляем тэг tr создавая строку.
После создаем следующий цикл куда добавляем в переменную board тег td для формирования столбцов так же в тег добавляем атрибут data-x и data-y.
После прохода цикла мы сформированный текст добавляем в переменную table в которой указан тег table.
После получаем ссылку на тег body. И в него добавляем текст переменной table. 
*/
let board = ''
for (let y = 0; y < 30; y++) {
    board += '<tr>';
    for (let x = 0; x < 10; x++) {
        board += `<td data-x="${x}" data-y="${y}"></td>`
    }
    board += '</tr>';
}

let table = `<table><tbody>${board}</tbody></table>`

let body_el = document.querySelector('body')

body_el.insertAdjacentHTML('afterbegin', table)