document.addEventListener('keyup', function (event) {
    if (event.key == 'ArrowLeft') {
        let move = true
        for (el in shape) {
            for (dc in dict_coloringField) {
                if (((shape[el][0] - 1) < 0) || ((shape[el][0] - 1 == dict_coloringField[dc][0]) && (shape[el][1] == dict_coloringField[dc][1]))) {
                    move = false

                }
            }

        }
        if (move) {
            finding_a_form_class_and_deleting_it()
            checking_for_being_on_a_filled_cell()
            checking_out_of_the_field_by_y()
            if (starting_the_automatic_movement_of_the_shape) {
                adding_a_form_class_by_new_coordinates(0, '-')
            }

        }
    }
    if (event.key == 'ArrowRight') {
        let move = true
        for (el in shape) {
            for (dc in dict_coloringField) {
                if (((shape[el][0] - 1) < 0) || ((shape[el][0] + 1 == dict_coloringField[dc][0]) && (shape[el][1] == dict_coloringField[dc][1]))) {
                    move = false

                }
            }
        }
        if (move) {
            finding_a_form_class_and_deleting_it()
            checking_for_being_on_a_filled_cell()
            checking_out_of_the_field_by_y()
            if (starting_the_automatic_movement_of_the_shape) {
                adding_a_form_class_by_new_coordinates(0, '+')
            }

        }
    }

    if (event.key == 'ArrowDown') {
        finding_a_form_class_and_deleting_it()
        checking_for_being_on_a_filled_cell()
        checking_out_of_the_field_by_y()
        if (starting_the_automatic_movement_of_the_shape) {
            adding_a_form_class_by_new_coordinates(1, '+')
        }
    }
})