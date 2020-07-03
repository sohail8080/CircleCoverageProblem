function Mutate_Cartesian_Generation(
    iteration_count,
    cartesian_generation,
    polygon_coverage_on_cartesian_grid,
    grid_length) {

   
    var mutated_cartesian_generation = [];

    for (var i = 0; i < cartesian_generation.length; i++) {

        //mutated_cartesian_generation[i] = Mutate_Cartesian_Record(
        //    cartesian_generation[i][1],
        //    polygon_coverage_on_cartesian_grid,
        //    grid_length);

        mutated_cartesian_generation[i] = [];

        mutated_cartesian_generation[i][0] = 0;

        mutated_cartesian_generation[i][1] = Mutate_Cartesian_Record(
            cartesian_generation[i][1],
            polygon_coverage_on_cartesian_grid,
            grid_length);
    }

    
    return mutated_cartesian_generation;

}


function Generate_Random_Number(min_bound, max_bound) {

    return Math.floor(Math.random() * (max_bound - min_bound + 1)) + min_bound;

}


function Mutate_Cartesian_Record(cartesian_record, polygon_coverage_on_cartesian_grid, grid_length) {

    var mutated_cartesian_record = [];


    //alert("cartesian_record[0]"+ cartesian_record[0]);
    //alert("cartesian_record[1]" + cartesian_record[1]);
    //alert("cartesian_record[2]" + cartesian_record[2]);
    //alert("cartesian_record[3]" + cartesian_record[3]);


    mutated_cartesian_record[0] = Mutate_Cartesian_Point(
        Generate_Random_Number(1, 3),
        cartesian_record[0],
        polygon_coverage_on_cartesian_grid,
        grid_length);

    mutated_cartesian_record[1] = Mutate_Cartesian_Point(
        Generate_Random_Number(1, 3),
        cartesian_record[1],
        polygon_coverage_on_cartesian_grid,
        grid_length);


    mutated_cartesian_record[2] = Mutate_Cartesian_Point(
        Generate_Random_Number(1, 3),
        cartesian_record[2],
        polygon_coverage_on_cartesian_grid,
        grid_length);


    mutated_cartesian_record[3] = Mutate_Cartesian_Point(
        Generate_Random_Number(1, 3),
        cartesian_record[3],
        polygon_coverage_on_cartesian_grid,
        grid_length);


    //mutated_cartesian_record[0] = Mutate_Cartesian_Point_XYZ_Coordinate(        
    //    cartesian_record[0],
    //    polygon_coverage_on_cartesian_grid,
    //    grid_length);


    //mutated_cartesian_record[1] = Mutate_Cartesian_Point_XYZ_Coordinate(
    //    cartesian_record[1],
    //    polygon_coverage_on_cartesian_grid,
    //    grid_length);


    //mutated_cartesian_record[2] = Mutate_Cartesian_Point_XYZ_Coordinate(
    //    cartesian_record[2],
    //    polygon_coverage_on_cartesian_grid,
    //    grid_length);


    //mutated_cartesian_record[3] = Mutate_Cartesian_Point_XYZ_Coordinate(
    //    cartesian_record[3],
    //    polygon_coverage_on_cartesian_grid,
    //    grid_length);


    return mutated_cartesian_record;

}



function Mutate_Cartesian_Point_XYZ_Coordinate(cartesian_point, polygon_coverage_on_cartesian_grid, grid_length) {

    //var bin_x_cord = conver cartesian_point[0];
    //var bin_y_cord = conver cartesian_point[1];

    //var mut_bin_x_cord = conver cartesian_point[0];
    //var mut_bin_y_cord = conver cartesian_point[1];

    //var mut_car_x_cord = conver cartesian_point[0];
    //var mut_car_y_cord = conver cartesian_point[1];


    var mutated_cartesian_point = [];
    var minus_factor = grid_length - 1;
    var flag = false;

    do {

        //if (minus_factor <= 1) {
        //    break;
        //}

        if (minus_factor <= 1) {
            return cartesian_point;
        }


        mutated_cartesian_point[0] = Math.abs(minus_factor - cartesian_point[0]);
        mutated_cartesian_point[1] = Math.abs(minus_factor - cartesian_point[1]);


        flag = Is_Point_Within_Polygon(polygon_coverage_on_cartesian_grid, mutated_cartesian_point);

        if (flag == true) {
            break;
        }


        mutated_cartesian_point[0] = cartesian_point[0];
        mutated_cartesian_point[1] = Math.abs(minus_factor - cartesian_point[1]);


        flag = Is_Point_Within_Polygon(polygon_coverage_on_cartesian_grid, mutated_cartesian_point);


        if (flag == true) {
            break;
        }


        mutated_cartesian_point[0] = Math.abs(minus_factor - cartesian_point[0]);
        mutated_cartesian_point[1] = cartesian_point[1];


        flag = Is_Point_Within_Polygon(polygon_coverage_on_cartesian_grid, mutated_cartesian_point);


        if (flag == true) {
            break;
        }

        minus_factor--;

    } while (flag == false);

    return mutated_cartesian_point;

}



function Mutate_Cartesian_Point(random_number, cartesian_point, polygon_coverage_on_cartesian_grid, grid_length) {

    var mutated_cartesian_point = [];

    //if (random_number == 1) {
    mutated_cartesian_point = Mutate_Cartesian_Point_XY_Coordinate(cartesian_point, polygon_coverage_on_cartesian_grid, grid_length);
    //}

    if (mutated_cartesian_point.length == 1) { return mutated_cartesian_point; }

    //if (random_number == 2) {
    mutated_cartesian_point = Mutate_Cartesian_Point_X_Coordinate(cartesian_point, polygon_coverage_on_cartesian_grid, grid_length);
    //}

    if (mutated_cartesian_point.length == 1) { return mutated_cartesian_point; }

    //if (random_number == 3) {
    mutated_cartesian_point = Mutate_Cartesian_Point_Y_Coordinate(cartesian_point, polygon_coverage_on_cartesian_grid, grid_length);
    //}


    if (mutated_cartesian_point.length == 0) {
        alert("Mutation Function failed to generated new Point. Using the same point.");
        return cartesian_point;
    }

    return mutated_cartesian_point;

}



function Mutate_Cartesian_Point_XY_Coordinate(cartesian_point, polygon_coverage_on_cartesian_grid, grid_length) {


    var mutated_cartesian_point = [];
    var minus_factor = grid_length - 1;
    var flag = false;

    do {

        if (minus_factor <= 1) {
            break;
        }

        mutated_cartesian_point[0] = Math.abs(minus_factor - cartesian_point[0]);
        mutated_cartesian_point[1] = Math.abs(minus_factor - cartesian_point[1]);

        flag = Is_Point_Within_Polygon(polygon_coverage_on_cartesian_grid, mutated_cartesian_point);

        minus_factor--;

    } while (flag == false);

    return mutated_cartesian_point;

}



function Mutate_Cartesian_Point_X_Coordinate(cartesian_point, polygon_coverage_on_cartesian_grid, grid_length) {

    var mutated_cartesian_point = [];
    var minus_factor = grid_length - 1;
    var flag = false;

    do {

        if (minus_factor <= 1) {
            break;
        }

        mutated_cartesian_point[0] = Math.abs(minus_factor - cartesian_point[0]);
        mutated_cartesian_point[1] = cartesian_point[1];

        flag = Is_Point_Within_Polygon(polygon_coverage_on_cartesian_grid, mutated_cartesian_point);

        minus_factor--;

    } while (flag == false);

    return mutated_cartesian_point;

}



function Mutate_Cartesian_Point_Y_Coordinate(cartesian_point, polygon_coverage_on_cartesian_grid, grid_length) {

    var mutated_cartesian_point = [];
    var minus_factor = grid_length - 1;
    var flag = false;

    do {

        if (minus_factor <= 1) {
            break;
        }

        mutated_cartesian_point[0] = cartesian_point[0];
        mutated_cartesian_point[1] = Math.abs(minus_factor - cartesian_point[1]);

        flag = Is_Point_Within_Polygon(polygon_coverage_on_cartesian_grid, mutated_cartesian_point);

        minus_factor--;

    } while (flag == false);

    return mutated_cartesian_point;

}



function Mutate_Binary_Point(binary_point) {




}



function Mutate_Binary_Coordinate(binary_coordinate) {



}








function Convert_Decimal_Point_To_Binary(point) {

    //point[0] = Convert_Decimal_To_Binary(point[0]);
    //point[1] = Convert_Decimal_To_Binary(point[1]);

    var binary_point = [];
    binary_point[0] = Convert_Decimal_To_Binary(point[0]);
    binary_point[1] = Convert_Decimal_To_Binary(point[1]);
    //alert(binary_point[0] + "," + binary_point[1]);
    return binary_point;
}


function Convert_Binary_Point_To_Decimal(point) {

    //point[0] = Convert_Binary_To_Decimal(point[0]);
    //point[1] = Convert_Binary_To_Decimal(point[1]);

    var decimal_point = [];
    decimal_point[0] = Convert_Binary_To_Decimal(point[0]);
    decimal_point[1] = Convert_Binary_To_Decimal(point[1]);
    //alert(decimal_point[0] + "," + decimal_point[1] );
    return decimal_point;

}


function Convert_Decimal_To_Binary(num) {

    return num.toString(2).padStart(6, "0");


}


function Convert_Binary_To_Decimal(num) {

    while (num.substr(0, 1) == '0' && num.length > 1) { num = num.substr(1, 9999); }

    var result = parseInt(num, 2).toString(10);

    return parseInt(result);
}