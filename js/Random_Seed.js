function GetRandomPoint() {

    var grid = GetGrid();

    var point = new Array(2);

    //var min_x = 0;
    //var max_x = grid[0].length - 1;
    //var min_y = 0;
    //var max_y = grid.length - 1;

    // for adding buffer
    var buffer = 1;
    var min_x = 0 + buffer;
    var max_x = grid[0].length - 1 - buffer;
    var min_y = 0 + buffer;
    var max_y = grid.length - 1 - buffer;

    //var min_x = 1;
    //var max_x = grid[0].length - 2;
    //var min_y = 1;
    //var max_y = grid.length - 2;


    point[0] = Math.floor(Math.random() * (max_x - min_x + 1)) + min_x;
    point[1] = Math.floor(Math.random() * (max_y - min_y + 1)) + min_y;


    return point;

}



function GetRandomPoint_Map(grid_length, polygon_coverage_on_cartesian_grid, grid_buffer_x, grid_buffer_y) {

    var point;

    do {
        point = new Array(2);

        // static buffer
        //var buffer = 4;  
        //var min_x = 0 + buffer;
        //var max_x = grid_length - 1 - buffer;
        //var min_y = 0 + buffer;
        //var max_y = grid_length - 1 - buffer;


        var min_x = 0 + grid_buffer_x;
        var max_x = grid_length - 1 - grid_buffer_x;
        var min_y = 0 + grid_buffer_y;
        var max_y = grid_length - 1 - grid_buffer_y;


        point[0] = Math.floor(Math.random() * (max_x - min_x + 1)) + min_x;
        point[1] = Math.floor(Math.random() * (max_y - min_y + 1)) + min_y;
    }
    while (!Is_Point_Within_Polygon(polygon_coverage_on_cartesian_grid, point));

    return point;

}




function GetRandomPoint_Map_Polygon(grid_length, polygon_coverage_on_cartesian_grid, grid_buffer_x, grid_buffer_y) {

    var point = [];

    var random_index;
    var min_bound = 0;
    var max_bound = polygon_coverage_on_cartesian_grid.length - 1;

    random_index = Math.floor(Math.random() * (max_bound - min_bound + 1)) + min_bound;
    point = polygon_coverage_on_cartesian_grid[random_index];

    return point;

}






function Is_Point_Within_Polygon(polygon_coverage_on_cartesian_grid, point) {

    var flag = false;

    for (var i = 0; i < polygon_coverage_on_cartesian_grid.length; i++) {

        if (polygon_coverage_on_cartesian_grid[i][0] == point[0] &&
            polygon_coverage_on_cartesian_grid[i][1] == point[1]) {

            flag = true;
            break;
        }
    }

    return flag;

}

function GetRandomRecord() {

    var record = new Array(4);
    record[0] = GetRandomPoint();
    record[1] = GetRandomPoint();
    record[2] = GetRandomPoint();
    record[3] = GetRandomPoint();

    return record;

}



function GetRandomRecord_Map(grid_length, polygon_coverage_on_cartesian_grid, grid_buffer_x, grid_buffer_y) {

    var record = new Array(4);
    record[0] = GetRandomPoint_Map(grid_length, polygon_coverage_on_cartesian_grid, grid_buffer_x, grid_buffer_y);
    record[1] = GetRandomPoint_Map(grid_length, polygon_coverage_on_cartesian_grid, grid_buffer_x, grid_buffer_y);
    record[2] = GetRandomPoint_Map(grid_length, polygon_coverage_on_cartesian_grid, grid_buffer_x, grid_buffer_y);
    record[3] = GetRandomPoint_Map(grid_length, polygon_coverage_on_cartesian_grid, grid_buffer_x, grid_buffer_y);

    return record;

}


function GetRandomRecord_Map_Polygon(grid_length, polygon_coverage_on_cartesian_grid, grid_buffer_x, grid_buffer_y) {

    var record = new Array(4);
    record[0] = GetRandomPoint_Map_Polygon(grid_length, polygon_coverage_on_cartesian_grid, grid_buffer_x, grid_buffer_y);
    record[1] = GetRandomPoint_Map_Polygon(grid_length, polygon_coverage_on_cartesian_grid, grid_buffer_x, grid_buffer_y);
    record[2] = GetRandomPoint_Map_Polygon(grid_length, polygon_coverage_on_cartesian_grid, grid_buffer_x, grid_buffer_y);
    record[3] = GetRandomPoint_Map_Polygon(grid_length, polygon_coverage_on_cartesian_grid, grid_buffer_x, grid_buffer_y);

    return record;

}




function Get_Initial_Generation_By_Random_Function() {

    var set = new Array(8);

    set[0] = GetRandomRecord();
    set[1] = GetRandomRecord();
    set[2] = GetRandomRecord();
    set[3] = GetRandomRecord();
    set[4] = GetRandomRecord();
    set[5] = GetRandomRecord();
    set[6] = GetRandomRecord();
    set[7] = GetRandomRecord();

    return set;

}




function Get_Initial_LatLong_Generation_By_Random_Function_Map(
    grid_length,
    polygon_coverage_on_latlong_grid,
    random_generation_record_count,
    grid_buffer_x,
    grid_buffer_y) {

    var generation = new Array(random_generation_record_count);
    var random_index;
    var min_bound = 0;
    var max_bound = polygon_coverage_on_latlong_grid.length - 1;

    for (var i = 0; i < random_generation_record_count; i++) {

        random_index = Math.floor(Math.random() * (max_bound - min_bound + 1)) + min_bound;
        generation[i] = polygon_coverage_on_latlong_grid[random_index];

    }

    return generation;

}


function Generate_Random_Number(min_bound, max_bound) {

    return Math.floor(Math.random() * (max_bound - min_bound + 1)) + min_bound;

}




//function Get_Initial_Cartesian_Generation_By_Random_Function_Map_Polygon(
//    grid_length,
//    polygon_coverage_on_cartesian_grid,
//    random_generation_record_count,
//    grid_buffer_x,
//    grid_buffer_y) {


//    var generation = new Array(random_generation_record_count);
//    var random_index;
//    var min_bound = 0;
//    var max_bound = polygon_coverage_on_cartesian_grid.length - 1;

//    for (var i = 0; i < random_generation_record_count; i++) {

//        random_index = Math.floor(Math.random() * (max_bound - min_bound + 1)) + min_bound;
//        generation[i] = polygon_coverage_on_cartesian_grid[random_index];

//    }

//    return generation;

//}




function Get_Initial_Cartesian_Generation_By_Random_Function_Map_Polygon(grid_length, polygon_coverage_on_cartesian_grid, random_generation_record_count, grid_buffer_x, grid_buffer_y) {

    var generation = new Array(random_generation_record_count);

    for (var i = 0; i < random_generation_record_count; i++) {

        generation[i] = GetRandomRecord_Map_Polygon(grid_length, polygon_coverage_on_cartesian_grid, grid_buffer_x, grid_buffer_y);

    }

    return generation;

}






function Get_Initial_Generation_By_Random_Function_Map(grid_length, polygon_coverage_on_cartesian_grid, random_generation_record_count, grid_buffer_x, grid_buffer_y) {

    var generation = new Array(random_generation_record_count);

    for (var i = 0; i < random_generation_record_count; i++) {

        generation[i] = GetRandomRecord_Map(grid_length, polygon_coverage_on_cartesian_grid, grid_buffer_x, grid_buffer_y);

    }

    return generation;

}




//function Get_Initial_Generation_Of_One_Record_By_Random_Function(grid) {

//    var generation = new Array(1);

//    generation[0] = GetRandomRecord_Map(grid);

//    return generation;

//}


//function Get_Initial_Generation_By_Random_Function_GridDensity(grid_density) {

//    var set = new Array(8);

//    set[0] = GetRandomRecord_GridDensity(grid_density);
//    set[1] = GetRandomRecord_GridDensity(grid_density);
//    set[2] = GetRandomRecord_GridDensity(grid_density);
//    set[3] = GetRandomRecord_GridDensity(grid_density);
//    set[4] = GetRandomRecord_GridDensity(grid_density);
//    set[5] = GetRandomRecord_GridDensity(grid_density);
//    set[6] = GetRandomRecord_GridDensity(grid_density);
//    set[7] = GetRandomRecord_GridDensity(grid_density);

//    return set;

//}






function GetRecordFromUI() {

    var pointtofind1 = new Array(2);
    pointtofind1[0] = parseInt(document.getElementById("txtRectOneX").value);
    pointtofind1[1] = parseInt(document.getElementById("txtRectOneY").value);


    var pointtofind2 = new Array(2);
    pointtofind2[0] = parseInt(document.getElementById("txtRectTwoX").value);
    pointtofind2[1] = parseInt(document.getElementById("txtRectTwoY").value);


    var pointtofind3 = new Array(2);
    pointtofind3[0] = parseInt(document.getElementById("txtRectThreeX").value);
    pointtofind3[1] = parseInt(document.getElementById("txtRectThreeY").value);

    var pointtofind4 = new Array(2);
    pointtofind4[0] = parseInt(document.getElementById("txtRectFourX").value);
    pointtofind4[1] = parseInt(document.getElementById("txtRectFourY").value);

    var record = new Array(4);
    record[0] = pointtofind1;
    record[1] = pointtofind2;
    record[2] = pointtofind3;
    record[3] = pointtofind4;

    return record;

}