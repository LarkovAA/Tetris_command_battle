let coordinate_shapes = [
    [[3, 1], [4, 1], [5, 1], [6, 1]], // Фигура I
    [[4, 2], [4, 1], [5, 1], [5, 2]], // Фигура O
    [[4, 2], [5, 1], [5, 2], [6, 1]], // Фигура S
    [[4, 1], [4, 2], [3, 1], [5, 2]], // Фигура Z
    [[5, 1], [5, 2], [5, 3], [6, 3]], // Фигура L
    [[5, 1], [5, 2], [5, 3], [4, 3]], // Фигура J
    [[3, 1], [4, 1], [5, 3], [4, 2]], // Фигура T
]

let sh = coordinate_shapes[3]

let shape = {
    'one': sh[0],
    'two': sh[1],
    'three': sh[2],
    'foure': sh[3]
}

for (el in shape) {
    let coordin = document.querySelector(`[data-x='${shape[el][0]}'][data-y='${shape[el][1]}']`)
    coordin.classList.add('shape')
}

for (el of [5, 6, 7, 8, 9]) {
    let numb = 29
    let coordin = document.querySelector(`[data-x='${el}'][data-y='${numb}']`)
    coordin.classList.remove('shape')
    coordin.classList.add('coloringField')
}

for (el of [5, 6, 7]) {
    let numb = 28
    let coordin = document.querySelector(`[data-x='${el}'][data-y='${numb}']`)
    coordin.classList.remove('shape')
    coordin.classList.add('coloringField')
}

for (el of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]) {
    for (el2 of [0, 9]) {
        let coordin = document.querySelector(`[data-x='${el2}'][data-y='${el}']`)
        coordin.classList.remove('shape')
        coordin.classList.add('coloringField')
    }

}

check_became_figure_for_the_occupied_position()