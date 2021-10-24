let starting_the_automatic_movement_of_the_shape = true
let further = false
let dict_coloringField = {}
let move = true
/*
    Функция определяет все элементы с классом shape
    Так же функция удалает данный класс из всех элементов
*/
function finding_a_form_class_and_deleting_it() {
    let shepe_el = document.querySelectorAll('.shape');
    for (let el of shepe_el) {
        el.classList.remove('shape');
    }
}

/*
    Функция меняет координады каждого квадрата из shape.
    После на новые координаты мы добавляем класс shape
    Агрумент number принимает значение число от 0 до 1, в зависимости ото того какую координату мы меняем.
    Аргумент direction принимает значение + или - и определяет направление движение формы
*/
function adding_a_form_class_by_new_coordinates(number, direction) {
    if (shape) {
        for (let el in shape) {
            if (direction == '+') {
                shape[el][number] += 1;
            }
            if (direction == '-') {
                shape[el][number] -= 1
            }

            let coordin = document.querySelector(`[data-x='${shape[el][0]}'][data-y='${shape[el][1]}']`);
            coordin.classList.add('shape');
        }
    }

}
/*
    Функция определяет вышла ли фигурка по оси y за пределы поля или нет
*/
function checking_out_of_the_field_by_y() {
    for (el in shape) {
        if (shape[el][1] == 29) {
            further = true
            starting_the_automatic_movement_of_the_shape = false
        }
    }
    if (further) {
        redrawing_the_shape()
        sh = undefined
    }
}

/*
Функция перерисовывает фигуру на ее текушей позиции, устанавлевая ее.
*/
function redrawing_the_shape() {
    for (el in shape) {
        let coordin = document.querySelector(`[data-x='${shape[el][0]}'][data-y='${shape[el][1]}']`)
        coordin.classList.add('coloringField')
    }
}
/*
Функция формирует словарь где указываютьсяч в значение ключей номер поставленного квадрата а значении список координат данного квадрата.
*/
function check_became_figure_for_the_occupied_position() {
    let coloring_field_el = document.querySelectorAll('.coloringField')
    let num = 1
    for (el of coloring_field_el) {
        let x = el.dataset.x
        let y = el.dataset.y
        num = String(num)
        dict_coloringField[num] = [x, y]
        num = +num
        num += 1
    }
}

/*
Функция занимается определением того фигура поставилась на уже заполненые ячейки или нет
*/
function checking_for_being_on_a_filled_cell() {
    for (el in shape) {
        for (fg in dict_coloringField) {
            if ((shape[el][1] + 1) == dict_coloringField[fg][1] && shape[el][0] == dict_coloringField[fg][0]) {
                further = true
                starting_the_automatic_movement_of_the_shape = false
            }
            if (further) {
                redrawing_the_shape()
                sh = undefined
            }
        }
    }
}
