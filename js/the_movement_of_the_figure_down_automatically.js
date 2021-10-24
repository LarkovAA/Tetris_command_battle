function downward_movement() {
    finding_a_form_class_and_deleting_it()
    checking_for_being_on_a_filled_cell()
    checking_out_of_the_field_by_y()
    if (starting_the_automatic_movement_of_the_shape) {
        adding_a_form_class_by_new_coordinates(1, '+')
    }
    else {
        check_became_figure_for_the_occupied_position()
        clearInterval(interval_downward_movement)
    }
}

let interval_downward_movement = setInterval(downward_movement, 10000)



