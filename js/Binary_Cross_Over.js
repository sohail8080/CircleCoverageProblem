function Crossover_Generation_Of_Four(g) {

    var new_record = [];

    new_record[0] = Crossover_Two_Decimal_Records(g[0], g[1]);
    new_record[1] = Crossover_Two_Decimal_Records(g[0], g[2]);
    new_record[2] = Crossover_Two_Decimal_Records(g[0], g[3]);
    new_record[3] = Crossover_Two_Decimal_Records(g[1], g[2]);

    new_record[4] = Crossover_Two_Decimal_Records(g[1], g[3]);
    new_record[5] = Crossover_Two_Decimal_Records(g[2], g[3]);
    new_record[6] = Crossover_Two_Decimal_Records(g[1], g[0]);
    new_record[7] = Crossover_Two_Decimal_Records(g[2], g[1]);

    return new_record;
}


//Crossover_Generation_Of_Four
function Crossover_Generation_On_Map(
    generation, //topper_of_previous_generation
    polygon_coverage_on_cartesian_grid,
    grid_length,
    number_of_records_in_each_crossover_generations
) {

    var new_record = [];


    new_record[0] = Crossover_Two_Decimal_Records_Map(generation[0], generation[1], polygon_coverage_on_cartesian_grid, grid_length);
    new_record[1] = Crossover_Two_Decimal_Records_Map(generation[0], generation[2], polygon_coverage_on_cartesian_grid, grid_length);
    new_record[2] = Crossover_Two_Decimal_Records_Map(generation[0], generation[3], polygon_coverage_on_cartesian_grid, grid_length);
    new_record[3] = Crossover_Two_Decimal_Records_Map(generation[1], generation[2], polygon_coverage_on_cartesian_grid, grid_length);

    new_record[4] = Crossover_Two_Decimal_Records_Map(generation[1], generation[3], polygon_coverage_on_cartesian_grid, grid_length);
    new_record[5] = Crossover_Two_Decimal_Records_Map(generation[2], generation[3], polygon_coverage_on_cartesian_grid, grid_length);
    new_record[6] = Crossover_Two_Decimal_Records_Map(generation[1], generation[0], polygon_coverage_on_cartesian_grid, grid_length);
    new_record[7] = Crossover_Two_Decimal_Records_Map(generation[2], generation[1], polygon_coverage_on_cartesian_grid, grid_length);

    return new_record;
}


//Crossover_Generation_Of_Four
function Crossover_Generation_On_Map_Configurable(

    toppers_of_previous_generation, //topper_of_previous_generation
    polygon_coverage_on_cartesian_grid,
    grid_length,
    number_of_records_in_each_crossover_generations
) {

    //console.log("Crossover Generation On Map Configurable 1");

    var new_record = [];
    var index = 0;
    var flag = false;

    while (flag == false) {

        //console.log("Inside While Loop");

        var innerloopcounter = 2;

        for (var i = 1; i < toppers_of_previous_generation.length; i++) {

            //console.log("Inside Outer For Loop");
          
            for (var j = innerloopcounter; j < toppers_of_previous_generation.length; j++) {

                //console.log("Inside Inner For Loop");

                new_record[index] = Crossover_Two_Decimal_Records_Map(
                    toppers_of_previous_generation[i],
                    toppers_of_previous_generation[j],
                    polygon_coverage_on_cartesian_grid,
                    grid_length);

                index++;

                //console.log("I " + i);
                //console.log("J " + j);
                //console.log("INDEX " + index);

                if (index >= number_of_records_in_each_crossover_generations) {                
                    flag = true;
                    break;
                }
            }// inner for loop

            innerloopcounter++;

            if (flag == true) {
                break;
            }
        }// outer for loop
    }// while

    //new_record[0] = Crossover_Two_Decimal_Records_Map(generation[0], generation[1], polygon_coverage_on_cartesian_grid, grid_length);
    //new_record[1] = Crossover_Two_Decimal_Records_Map(generation[0], generation[2], polygon_coverage_on_cartesian_grid, grid_length);
    //new_record[2] = Crossover_Two_Decimal_Records_Map(generation[0], generation[3], polygon_coverage_on_cartesian_grid, grid_length);
    //new_record[3] = Crossover_Two_Decimal_Records_Map(generation[1], generation[2], polygon_coverage_on_cartesian_grid, grid_length);

    //new_record[4] = Crossover_Two_Decimal_Records_Map(generation[1], generation[3], polygon_coverage_on_cartesian_grid, grid_length);
    //new_record[5] = Crossover_Two_Decimal_Records_Map(generation[2], generation[3], polygon_coverage_on_cartesian_grid, grid_length);
    //new_record[6] = Crossover_Two_Decimal_Records_Map(generation[1], generation[0], polygon_coverage_on_cartesian_grid, grid_length);
    //new_record[7] = Crossover_Two_Decimal_Records_Map(generation[2], generation[1], polygon_coverage_on_cartesian_grid, grid_length);

    return new_record;
}


function Crossover_Two_Decimal_Records_Map(r1, r2, polygon_coverage_on_cartesian_grid, grid_length) {

    //console.log("Crossover_Two_Decimal_Records_Map");

    var new_record = [];

    new_record[0] = Crossover_Two_Decimal_Points_Map(r1[0], r2[0], polygon_coverage_on_cartesian_grid, grid_length);
    new_record[1] = Crossover_Two_Decimal_Points_Map(r1[1], r2[1], polygon_coverage_on_cartesian_grid, grid_length);
    new_record[2] = Crossover_Two_Decimal_Points_Map(r1[2], r2[2], polygon_coverage_on_cartesian_grid, grid_length);
    new_record[3] = Crossover_Two_Decimal_Points_Map(r1[3], r2[3], polygon_coverage_on_cartesian_grid, grid_length);

    return new_record;
}


function Crossover_Two_Decimal_Records(r1, r2) {

    var new_record = [];

    new_record[0] = Crossover_Two_Decimal_Points(r1[0], r2[0]);
    new_record[1] = Crossover_Two_Decimal_Points(r1[1], r2[1]);
    new_record[2] = Crossover_Two_Decimal_Points(r1[2], r2[2]);
    new_record[3] = Crossover_Two_Decimal_Points(r1[3], r2[3]);

    return new_record;
}


function Crossover_Two_Decimal_Points_Map(p1, p2, polygon_coverage_on_cartesian_grid, grid_length) {

    console.log("Crossover_Two_Decimal_Points_Map");

    var binary_point1 = Convert_Decimal_Point_To_Binary(p1);
    var binary_point2 = Convert_Decimal_Point_To_Binary(p2);

    do {

        // cross over X
        var crossover_x; //= Crossover_Two_Binary_Coordinates(binary_point1[0], binary_point2[0]);

        do {

            crossover_x = Crossover_Two_Binary_Coordinates(binary_point1[0], binary_point2[0]);// binary

            var crossover_xd = Convert_Binary_To_Decimal(crossover_x);// decimal

            //console.error(crossover_xd);

            if (crossover_xd <= 0 || crossover_xd >= (grid_length - 1)) {

                crossover_xd = (crossover_xd % (grid_length - 2)) + 1;

                //console.error("changed to " + crossover_xd);
            }

            var crossover_xds = crossover_xd.toString();

        }
        while (!Validate_Coordinate_On_Grid(crossover_xds, grid_length));


        // cross over Y
        var crossover_y; // = Crossover_Two_Binary_Coordinates(binary_point1[1], binary_point2[1]);

        do {
            //string is returned
            crossover_y = Crossover_Two_Binary_Coordinates(binary_point1[1], binary_point2[1]);

            // string is passed, int is returned
            var crossover_yd = Convert_Binary_To_Decimal(crossover_y);

            //console.error(crossover_yd);

            if (crossover_yd <= 0 || crossover_yd >= (grid_length - 1)) {

                crossover_yd = (crossover_yd % (grid_length - 2)) + 1;

                //console.error("changed to " + crossover_yd);
            }

            var crossover_yds = crossover_yd.toString();
        }
        while (!Validate_Coordinate_On_Grid(crossover_yds, grid_length));

        var decimal_point = [];
        decimal_point[0] = crossover_xd;
        decimal_point[1] = crossover_yd;

    }
    while (!Is_Point_Within_Polygon(polygon_coverage_on_cartesian_grid, decimal_point));


    return decimal_point;
}


function Crossover_Two_Decimal_Points(p1, p2) {

    var grid = GetGrid();

    var binary_point1 = Convert_Decimal_Point_To_Binary(p1);
    var binary_point2 = Convert_Decimal_Point_To_Binary(p2);

    // cross over X
    var crossover_x; //= Crossover_Two_Binary_Coordinates(binary_point1[0], binary_point2[0]);

    do {

        crossover_x = Crossover_Two_Binary_Coordinates(binary_point1[0], binary_point2[0]);

        var crossover_xd = Convert_Binary_To_Decimal(crossover_x);

        //console.error(crossover_xd);

        if (crossover_xd <= 0 || crossover_xd >= (grid[0].length - 1)) {

            crossover_xd = (crossover_xd % (grid[0].length - 2)) + 1;

            //console.error("changed to " + crossover_xd);
        }

        var crossover_xds = crossover_xd.toString();

    }
    while (!Validate_X_Coordinate(crossover_xds, grid));


    // cross over Y
    var crossover_y; // = Crossover_Two_Binary_Coordinates(binary_point1[1], binary_point2[1]);

    do {
        //string is returned
        crossover_y = Crossover_Two_Binary_Coordinates(binary_point1[1], binary_point2[1]);

        // string is passed, int is returned
        var crossover_yd = Convert_Binary_To_Decimal(crossover_y);

        //console.error(crossover_yd);

        if (crossover_yd <= 0 || crossover_yd >= (grid.length - 1)) {

            crossover_yd = (crossover_yd % (grid.length - 2)) + 1;

            //console.error("changed to " + crossover_yd);
        }

        var crossover_yds = crossover_yd.toString();
    }
    while (!Validate_Y_Coordinate(crossover_yds, grid));


    var decimal_point = [];
    decimal_point[0] = crossover_xd;
    decimal_point[1] = crossover_yd;


    return decimal_point;
}


function Crossover_Two_Binary_Coordinates(c1, c2) {

    var no_of_characters = Random_No_Of_Chars_To_Take_From_Two_Crossover_Coordinates();

    var c1_start_index = Random_Starting_Index_Of_Coordinates_For_Crossover(no_of_characters[0]);
    var c2_start_index = Random_Starting_Index_Of_Coordinates_For_Crossover(no_of_characters[1]);

    //alert("no_of_characters 1: " + no_of_characters[0]);
    //alert("no_of_characters 2: " + no_of_characters[1]);
    //console.log("no_of_characters one " + no_of_characters[0] + "  c1_start_index: " + c1_start_index);
    //console.log("no_of_characters two " + no_of_characters[1] + "  c2_start_index: " + c2_start_index);

    //alert("01010 = " + "01010".substr(2, 1));

    var value1 = c1.substr(c1_start_index, no_of_characters[0]);
    var value2 = c2.substr(c2_start_index, no_of_characters[1]);

    //console.log(value1);
    //console.log(value2);

    return value1 + value2;

    //return c1.substr(c1_start_index, no_of_characters[0]) + c2.substr(c2_start_index, no_of_characters[1]);

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


function Random_No_Of_Chars_To_Take_From_Two_Crossover_Coordinates() {

    var number = Math.floor((Math.random() * 5) + 1);

    var crossoover_cutpoint = [];

    crossoover_cutpoint[0] = number;
    crossoover_cutpoint[1] = 6 - number;

    //alert("no 1 "+ crossoover_cutpoint[0]);
    //alert("no 2 " + crossoover_cutpoint[1]);

    return crossoover_cutpoint;

}


function Random_Starting_Index_Of_Coordinates_For_Crossover(no_of_characters) {

    // index = 0, 1, 2, ........ (6-no_of_characters)
    // for 1 char, index options out of = 0, 1, 2, 3, 4, 5
    var min = 0;
    var max = 6 - no_of_characters;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}



