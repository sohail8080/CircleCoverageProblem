
function ClearGrid() {

    GenerateUI();
    return;

    var grid = GetGrid();

    for (var i = 0; i < grid.length; i++) {

        for (var j = 0; j < grid.length; j++) {

            var celldiv = document.getElementById(i + "" + j);

            if (celldiv == null) {
                alert("somthing went wrong at bottom right corner");
            }

            celldiv.setAttribute('style', 'border:solid; border-color:black; display:inline');

        }
    }
}


function DrawPointOnGrid(point, grid) {


    var coverage = new Array(9);
    var totalcoverage = 0;
    var celldiv = null;

    for (var i = 0; i < coverage.length; i++) {
        coverage[i] = new Array(2);
    }

    celldiv = document.getElementById(point[0] + "" + point[1]);

    if (celldiv == null) {
        alert("div not found " + point[0] + "" + point[1]);
        return;
    }

    var sty = celldiv.getAttribute('style') + "; background-color:blue";
    celldiv.setAttribute('style', sty);


    // left of center
    coverage[1][0] = point[0] - 1;
    coverage[1][1] = point[1];

    if (FindPoint(coverage[1], grid)) {

        celldiv = document.getElementById((point[0] - 1) + "" + point[1]);

        if (celldiv == null) {
            alert("somthing went wrong at left of center")
        }

        var sty = celldiv.getAttribute('style') + "; border-left-color:red";
        celldiv.setAttribute('style', sty);

        //celldiv.removeAttribute('style');
        //alert(celldiv.getAttribute('style'));
        //celldiv.setAttribute('style', 'border:solid; border-color:black; display:inline; border-left-color:red');
    }


    // right of center
    coverage[2][0] = point[0] + 1;
    coverage[2][1] = point[1];

    if (FindPoint(coverage[2], grid)) {

        celldiv = document.getElementById((point[0] + 1) + "" + point[1]);

        if (celldiv == null) {
            alert("somthing went wrong at right of center" + (point[0] + 1) + "," + point[1]);
        }

        var sty = celldiv.getAttribute('style') + "; border-right-color:red";
        celldiv.setAttribute('style', sty);

        //celldiv.removeAttribute('style');
        //celldiv.setAttribute('style', 'border:solid; border-color:black; display:inline; border-right-color:red');
    }

    // top of center
    coverage[3][0] = point[0];
    coverage[3][1] = point[1] - 1;

    if (FindPoint(coverage[3], grid)) {

        celldiv = document.getElementById(point[0] + "" + (point[1] - 1));

        if (celldiv == null) {
            alert("somthing went wrong at  top of center")
        }

        var sty = celldiv.getAttribute('style') + "; border-top-color:red";
        celldiv.setAttribute('style', sty);

        //celldiv.removeAttribute('style');
        //celldiv.setAttribute('style', 'border:solid; border-color:black; display:inline; border-top-color:red');
    }


    // top right corner
    coverage[4][0] = point[0] + 1;
    coverage[4][1] = point[1] - 1;

    //alert(coverage[4][0]);

    if (FindPoint(coverage[4], grid)) {

        celldiv = document.getElementById((point[0] + 1) + "" + (point[1] - 1));

        if (celldiv == null) {
            alert("somthing went wrong at  top right corner")
        }

        var sty = celldiv.getAttribute('style') + "; border-top-color:red; border-right-color:red";
        celldiv.setAttribute('style', sty);

        //celldiv.removeAttribute('style');
        //celldiv.setAttribute('style', 'border:solid; border-color:black; display:inline; border-top-color:red; border-right-color:red');

    }

    // top left corner
    coverage[5][0] = point[0] - 1;
    coverage[5][1] = point[1] - 1;

    if (FindPoint(coverage[5], grid)) {

        celldiv = document.getElementById((point[0] - 1) + "" + (point[1] - 1));

        if (celldiv == null) {
            alert("somthing went wrong at top left corner")
        }

        var sty = celldiv.getAttribute('style') + "; border-top-color:red; border-left-color:red";
        celldiv.setAttribute('style', sty);

        //celldiv.removeAttribute('style');
        //celldiv.setAttribute('style', 'border:solid; border-color:black; display:inline; border-top-color:red; border-left-color:red');

    }

    // bottom cell of center
    coverage[6][0] = point[0];
    coverage[6][1] = point[1] + 1;

    //alert((point[1] + 2));

    if (FindPoint(coverage[6], grid)) {

        //alert(coverage[6][1]);
        celldiv = document.getElementById(point[0] + "" + coverage[6][1]);

        if (celldiv == null) {
            alert("somthing went wrong at bottom cell of center")
        }

        var sty = celldiv.getAttribute('style') + "; border-bottom-color:red";
        celldiv.setAttribute('style', sty);

        //celldiv.removeAttribute('style');
        //celldiv.setAttribute('style', 'border:solid; border-color:black; display:inline; border-bottom-color:red');

    }

    // bottom right corner
    coverage[7][0] = point[0] + 1;
    coverage[7][1] = point[1] + 1;

    if (FindPoint(coverage[7], grid)) {

        celldiv = document.getElementById((point[0] + 1) + "" + (point[1] + 1));

        if (celldiv == null) {
            alert("somthing went wrong at bottom right corner")
        }

        var sty = celldiv.getAttribute('style') + "; border-bottom-color:red; border-right-color:red";
        celldiv.setAttribute('style', sty);

        //celldiv.removeAttribute('style');
        //celldiv.setAttribute('style', 'border:solid; border-color:black; display:inline; border-bottom-color:red; border-right-color:red');

    }

    // bottom left corner
    coverage[8][0] = point[0] - 1;
    coverage[8][1] = point[1] + 1;

    if (FindPoint(coverage[8], grid)) {

        celldiv = document.getElementById((point[0] - 1) + "" + (point[1] + 1));

        if (celldiv == null) {
            alert("somthing went wrong at bottom left corner")
        }

        var sty = celldiv.getAttribute('style') + "; border-bottom-color:red; border-left-color:red";
        celldiv.setAttribute('style', sty);
        //celldiv.removeAttribute('style');
        //celldiv.setAttribute('style', 'border:solid; border-color:black; display:inline; border-bottom-color:red; border-left-color:red');

    }

}


// Loop to display the elements of 2D array.
function PrintGrid(grid) {


    //document.write("<div class='row'>");

    for (var i = 0; i < grid.length; i++) {

        document.write("<div style=''>");

        for (var j = 0; j < grid[i].length; j++) {

            var v1 = grid[i][j][0] + "";
            var v2 = grid[i][j][1] + "";

            if (v1.length == 1) {
                v1 = "0" + v1;
            }

            if (v2.length == 1) {
                v2 = "0" + v2;
            }


            var divid = grid[i][j][0] + "" + grid[i][j][1];
            //alert(divid);
            document.write("<div id = " + divid + " style='border:solid; border-color:black; display:inline'>");
            document.write("[" + v1 + "," + v2 + "]");
            document.write("</div>");

        }

        document.write("</div>");
    }

    //document.write("</div>");

}


function GetGrid() {


    // Create one dimensional array
    var grid = new Array(9);

    // Loop to create 2D array using 1D array
    for (var i = 0; i < grid.length; i++) {
        grid[i] = new Array(9);
    }


    // Loop to initilize 2D array elements.
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            grid[i][j] = new Array(2);
        }
    }


    // Loop to initilize 2D array elements.
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            grid[i][j][0] = j;
            grid[i][j][1] = i;

        }
    }

    return grid;

}


function GetGrid_GridDensity(grid_density) {


    // Create one dimensional array
    var grid = new Array(grid_density);

    // Loop to create 2D array using 1D array
    for (var i = 0; i < grid.length; i++) {
        grid[i] = new Array(grid.length);
    }


    // Loop to initilize 2D array elements.
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid.length; j++) {
            grid[i][j] = new Array(2);
        }
    }


    // Loop to initilize 2D array elements.
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid.length; j++) {
            grid[i][j][0] = j;
            grid[i][j][1] = i;

        }
    }

    return grid;

}

// generates latlong grid based on polygon extent
// grid is logical & has nothing to do spacially positions on map.
// if we rotate it 45 degree anti clock wise, it become spatially like map
// this visual appearance is covered in Print functions
// it is only the matter of understanding, how we visualize grids in mind
function Generate_Lat_Long_Grid(polygon_extent, grid_length) {

    //xmax == Top - right X - coordinate of an extent envelope.
    //xmin == Bottom - left X - coordinate of an extent envelope.
    //ymax == Top - right Y - coordinate of an extent envelope.
    //ymin == Bottom - left Y - coordinate of an extent envelope.

    //var grid_length = 11;
    var grid = [];

    var xmax = polygon_extent.xmax;
    var xmin = polygon_extent.xmin;
    var ymax = polygon_extent.ymax;
    var ymin = polygon_extent.ymin;

    var x_distance = xmax - xmin;
    var y_distance = ymax - ymin;
    var x_interval = (xmax - xmin) / (grid_length - 1);
    var y_interval = (ymax - ymin) / (grid_length - 1);


    for (var i = 0; i < grid_length; i++) {

        var grid_row = [];

        for (var j = 0; j < grid_length; j++) {

            var grid_point = [];

            grid_point[0] = xmin + (j * x_interval);
            grid_point[1] = ymin + (i * y_interval);

            grid_row[j] = grid_point;
        }

        grid[i] = grid_row;

    }

    //console.log(("xmax " + xmax));
    //console.log(("ymax " + ymax));
    //console.log(("xmin " + xmin));
    //console.log(("ymin " + ymin));
    //console.log(("x_distance" + x_distance));
    //console.log(("y_distance" + y_distance));
    //console.log(("x_interval" + x_interval));
    //console.log(("y_interval" + y_interval));

    return grid;
}




function Generate_Lat_Long_Points_Grid(polygon_extent, grid_length, map) {

    //xmax == Top - right X - coordinate of an extent envelope.
    //xmin == Bottom - left X - coordinate of an extent envelope.
    //ymax == Top - right Y - coordinate of an extent envelope.
    //ymin == Bottom - left Y - coordinate of an extent envelope.

    //var grid_length = 11;
    var grid = [];

    var xmax = polygon_extent.xmax;
    var xmin = polygon_extent.xmin;
    var ymax = polygon_extent.ymax;
    var ymin = polygon_extent.ymin;

    var x_distance = xmax - xmin;
    var y_distance = ymax - ymin;
    var x_interval = (xmax - xmin) / (grid_length - 1);
    var y_interval = (ymax - ymin) / (grid_length - 1);
    var x_point = null;
    var y_point = null;


    for (var i = 0; i < grid_length; i++) {

        var grid_row = [];

        for (var j = 0; j < grid_length; j++) {

            var grid_point = null;

            x_point = xmin + (j * x_interval);
            y_point = ymin + (i * y_interval);

            grid_point = new esri.geometry.Point({ "x": x_point, "y": y_point, "cx": i, "cy": j, "spatialReference": map.spatialReference });

            grid_row[j] = grid_point;
        }

        grid[i] = grid_row;

    }

    //console.log(("xmax " + xmax));
    //console.log(("ymax " + ymax));
    //console.log(("xmin " + xmin));
    //console.log(("ymin " + ymin));
    //console.log(("x_distance" + x_distance));
    //console.log(("y_distance" + y_distance));
    //console.log(("x_interval" + x_interval));
    //console.log(("y_interval" + y_interval));

    return grid;
}




// no use of this method
// we shoudld generated 2D array as we are doing in Generate_Lat_Long_Grid()
// we should visually conceptualize this grid in different dimention.
function Generate_Lat_Long_Grid_Spatially_Like_Map(polygon_extent, grid_length) {

    //xmax == Top - right X - coordinate of an extent envelope.
    //xmin == Bottom - left X - coordinate of an extent envelope.
    //ymax == Top - right Y - coordinate of an extent envelope.
    //ymin == Bottom - left Y - coordinate of an extent envelope.

    //var grid_length = 11;
    var grid = [];

    var xmax = polygon_extent.xmax;
    var xmin = polygon_extent.xmin;
    var ymax = polygon_extent.ymax;
    var ymin = polygon_extent.ymin;

    var x_distance = xmax - xmin;
    var y_distance = ymax - ymin;
    var x_interval = (xmax - xmin) / (grid_length - 1);
    var y_interval = (ymax - ymin) / (grid_length - 1);


    for (var i = grid_length - 1; i >= 0; i--) {

        var grid_row = [];

        for (var j = 0; j < grid_length; j++) {

            var grid_point = [];

            grid_point[0] = xmin + (j * x_interval);
            grid_point[1] = ymin + (i * y_interval);

            grid_row[j] = grid_point;
        }

        grid[i] = grid_row;

    }

    //console.log(("xmax " + xmax));
    //console.log(("ymax " + ymax));
    //console.log(("xmin " + xmin));
    //console.log(("ymin " + ymin));
    //console.log(("x_distance" + x_distance));
    //console.log(("y_distance" + y_distance));
    //console.log(("x_interval" + x_interval));
    //console.log(("y_interval" + y_interval));

    return grid;
}



// generates cartesian grid that is used for mapping
// but if the grid cell contents and cell indexes are same,
// then there is no need of this grid.
function Generate_Cartesian_Grid(grid_length) {

    //var grid_length = 11;
    var grid = [];

    for (var i = 0; i < grid_length; i++) {

        var grid_row = [];

        for (var j = 0; j < grid_length; j++) {

            var grid_point = [];

            grid_point[0] = j;
            grid_point[1] = i;

            grid_row[j] = grid_point;
        }

        grid[i] = grid_row;

    }

    return grid;

}

// no use of this method
// we shoudld generated 2D array as we are doing in Generate_Cartesian_Grid()
// we should visually conceptualize this grid in different dimention.
// Print_Grid_Spatially_Like_Map give same visualizatin as map.
// Random Function/Binary Cross over do not matter dimension of the grid
// Random Function/Binary Cross over do not matter the spacial positions on map
// How ever Shape Seed Function depends upon the dimension of the grid or map positions
// But existing Shape equation works well without changing the equations.
// only differnet is Y become inverse Y, rest remain same

function Generate_Cartesian_Grid_Spatially_Like_Map(grid_length) {

    //var grid_length = 11;
    var grid = [];
    var x_value = 10;
    var y_value = 0;

    for (var i = 0; i < grid_length; i++) {

        var grid_row = [];

        y_value = 0;

        for (var j = 0; j < grid_length; j++) {

            var grid_point = [];

            grid_point[0] = x_value;
            grid_point[1] = y_value;

            grid_row[j] = grid_point;

            y_value++;

        }

        grid[i] = grid_row;

        x_value--;

    }

    return grid;

}


function Print_Grid_Like_Table(grid) {

    for (var i = 0; i < grid.length; i++) {

        var row_value = "[ ";

        for (var j = 0; j < grid.length; j++) {

            row_value = row_value + "[ " + grid[i][j][0] + " , " + grid[i][j][1] + " ]";
        }

        row_value = row_value + " ] ";

        console.log(row_value);

    }


}


function Print_Grid_Spatially_Like_Map(grid) {

    for (var i = grid.length - 1; i >= 0; i--) {

        var row_value = "[";

        for (var j = 0; j < grid.length; j++) {

            row_value = row_value + "[" + grid[i][j][0] + "," + grid[i][j][1] + "]";
        }

        row_value = row_value + "]";

        console.log(row_value);

    }
}

function Print_Grid_Points_Spatially_Like_Map(latlong_grid) {

    for (var i = latlong_grid.length - 1; i >= 0; i--) {

        var row_value = "[";

        for (var j = 0; j < latlong_grid.length; j++) {

            row_value = row_value + "[" + latlong_grid[i][j].x + "," + latlong_grid[i][j].y + "]";
        }

        row_value = row_value + "]";

        console.log(row_value);

    }
}







function Get_Min_Max_Flag(i, j, grid) {

    if (i == 0 && j == 0) {
        return true;
    }

    if (i == (grid.length - 1) && j == (grid.length - 1)) {
        return true;
    }

    if (i == 0 && j == (grid.length - 1)) {
        return true;
    }

    if (i == (grid.length - 1) && j == 0) {
        return true;
    }

}


function Map_Cartesian_Generation_To_LatLong_Generation(
    cartesian_generation,
    latlong_grid,
    number_of_circles) {

    var latlong_generation = [];

    for (var i = 0; i < cartesian_generation.length; i++) {

        latlong_generation[i] = Map_Cartesian_Record_To_LatLong_Record(
            cartesian_generation[i],
            latlong_grid,
            number_of_circles);

    }


    //latlong_generation[0] = Map_Cartesian_Record_To_LatLong_Record(cartesian_generation[0], latlong_grid);
    //latlong_generation[1] = Map_Cartesian_Record_To_LatLong_Record(cartesian_generation[1], latlong_grid);
    //latlong_generation[2] = Map_Cartesian_Record_To_LatLong_Record(cartesian_generation[2], latlong_grid);
    //latlong_generation[3] = Map_Cartesian_Record_To_LatLong_Record(cartesian_generation[3], latlong_grid);
    //latlong_generation[4] = Map_Cartesian_Record_To_LatLong_Record(cartesian_generation[4], latlong_grid);
    //latlong_generation[5] = Map_Cartesian_Record_To_LatLong_Record(cartesian_generation[5], latlong_grid);
    //latlong_generation[6] = Map_Cartesian_Record_To_LatLong_Record(cartesian_generation[6], latlong_grid);
    //latlong_generation[7] = Map_Cartesian_Record_To_LatLong_Record(cartesian_generation[7], latlong_grid);

    return latlong_generation;

}


function Map_Cartesian_Record_To_LatLong_Record(
    cartesian_record,
    latlong_grid,
    number_of_circles) {

    var latlong_record = [];

    for (var i = 0; i < number_of_circles; i++) {

        latlong_record[i] = Map_Cartesian_Point_To_LatLong_Point(cartesian_record[i], latlong_grid);

    }


    //latlong_record[0] = Map_Cartesian_Point_To_LatLong_Point(cartesian_record[0], latlong_grid);
    //latlong_record[1] = Map_Cartesian_Point_To_LatLong_Point(cartesian_record[1], latlong_grid);
    //latlong_record[2] = Map_Cartesian_Point_To_LatLong_Point(cartesian_record[2], latlong_grid);
    //latlong_record[3] = Map_Cartesian_Point_To_LatLong_Point(cartesian_record[3], latlong_grid);

    return latlong_record;

}


function Map_Cartesian_Point_To_LatLong_Point(cartesian_point, latlong_grid) {

    // var zero_index = parseInt(cartesian_point[0]);
    //var one_index = parseInt(cartesian_point[1]);

    return latlong_grid[cartesian_point[0]][cartesian_point[1]];

}

