
function FindFitnessValueOfRecord_With_GridDrawings(record) {

    var pointtofind1 = record[0];
    var pointtofind2 = record[1];
    var pointtofind3 = record[2];
    var pointtofind4 = record[3];

    // Create one dimensional array
    var grid = GetGrid();

    // points array covered by rectangle, no need for this
    var pointcoverage1 = FindCoveragePoints(pointtofind1, grid);
   // Rectangle coverage inside grid = 9 - Rectangle coverage outside grid
    var CoverageInsideGrid1 = FindCoverage(pointtofind1, grid);
     //Rectangle coverage outside grid
    var CoverageOutsideGrid1 = FindCoverageOutsideGrid(pointtofind1, grid);
    DrawPointOnGrid(pointtofind1, grid);

    document.write("===============================================");

    // points array covered by rectangle, no need for this
    var pointcoverage2 = FindCoveragePoints(pointtofind2, grid);
    // Rectangle coverage inside grid = 9 - Rectangle coverage outside grid
    var CoverageInsideGrid2 = FindCoverage(pointtofind2, grid);
     //Rectangle coverage outside grid
    var CoverageOutsideGrid2 = FindCoverageOutsideGrid(pointtofind2, grid);
    DrawPointOnGrid(pointtofind2, grid);

    document.write("===============================================");

    // points array covered by rectangle, no need for this
    var pointcoverage3 = FindCoveragePoints(pointtofind3, grid);
    // Rectangle coverage inside grid = 9 - Rectangle coverage outside grid
    var CoverageInsideGrid3 = FindCoverage(pointtofind3, grid);
     //Rectangle coverage outside grid
    var CoverageOutsideGrid3 = FindCoverageOutsideGrid(pointtofind3, grid);
    DrawPointOnGrid(pointtofind3, grid);

    document.write("===============================================");

    // points array covered by rectangle, no need for this
    var pointcoverage4 = FindCoveragePoints(pointtofind4, grid);
     // Rectangle coverage inside grid = 9 - Rectangle coverage outside grid
    var CoverageInsideGrid4 = FindCoverage(pointtofind4, grid);
    //Rectangle coverage outside grid
    var CoverageOutsideGrid4 = FindCoverageOutsideGrid(pointtofind4, grid);
    DrawPointOnGrid(pointtofind4, grid);

    //Coverage With Overlapping but Outside Grid is substracted.
    var CoverageWithOverlapping = CoverageInsideGrid1 + CoverageInsideGrid2 + CoverageInsideGrid3 + CoverageInsideGrid4;

    document.write("===============================================");

    document.write("<br>");
    document.write("<br>");
    document.write("<b> Total Inside Grid Coverage with Overlapping ::::::" + "</b>" + CoverageWithOverlapping);
    document.write("<br>");
    document.write("<br>");


    document.write("===============================================");

    var overlapping12 = FindOverlapping(pointtofind1, pointcoverage1, pointtofind2, pointcoverage2);
    var overlapping13 = FindOverlapping(pointtofind1, pointcoverage1, pointtofind3, pointcoverage3);
    var overlapping14 = FindOverlapping(pointtofind1, pointcoverage1, pointtofind4, pointcoverage4);

    var overlapping23 = FindOverlapping(pointtofind2, pointcoverage2, pointtofind3, pointcoverage3);
    var overlapping24 = FindOverlapping(pointtofind2, pointcoverage2, pointtofind4, pointcoverage4);

    var overlapping34 = FindOverlapping(pointtofind3, pointcoverage3, pointtofind4, pointcoverage4);

    var totaloverlapping = overlapping12 + overlapping13 + overlapping14 + overlapping23 + overlapping24 + overlapping34;

    document.write("===============================================");

    document.write("<br>");
    document.write("<br>");
    document.write("<b> Total Overlapping among all rectangles ::::::" + "</b>" + totaloverlapping);
    document.write("<br>");
    document.write("<br>");

    document.write("===============================================");


    var OverallCoverageOutsideGrid = CoverageOutsideGrid1 + CoverageOutsideGrid2 + CoverageOutsideGrid3 + CoverageOutsideGrid4;


    document.write("<br>");
    document.write("<br>");
    document.write("<b> Total Coverage outside grid ::::::" + "</b>" + OverallCoverageOutsideGrid);
    document.write("<br>");
    document.write("<br>");

    document.write("===============================================");



    var OverallCoverageWithoutOverlapping = CoverageWithOverlapping - totaloverlapping;
    //var OverallCoverageWithoutOverlapping = FindOverallCoverage(pointcoverage1, pointcoverage2, pointcoverage3, pointcoverage4);


    document.write("<br>");
    document.write("<br>");
    document.write("<b> Total Inside Grid Coverage without overlapping (Fitness Value):::: " + "</b>" + OverallCoverageWithoutOverlapping);   
    document.write("<br>");
    document.write("<br>");

    document.write("===============================================");


    return OverallCoverageWithoutOverlapping;

}







function FindFitnessValueOfRecord(record) {

    var pointtofind1 = record[0];
    var pointtofind2 = record[1];
    var pointtofind3 = record[2];
    var pointtofind4 = record[3];

    // Create one dimensional array
    var grid = GetGrid();

    var pointcoverage1 = FindCoveragePoints(pointtofind1, grid);
    var CoverageInsideGrid1 = FindCoverage(pointtofind1, grid);
    var CoverageOutsideGrid1 = FindCoverageOutsideGrid(pointtofind1, grid);
    //DrawPointOnGrid(pointtofind1, grid);

    //document.write("===============================================");


    var pointcoverage2 = FindCoveragePoints(pointtofind2, grid);
    var CoverageInsideGrid2 = FindCoverage(pointtofind2, grid);
    var CoverageOutsideGrid2 = FindCoverageOutsideGrid(pointtofind2, grid);
    //DrawPointOnGrid(pointtofind2, grid);

    //document.write("===============================================");


    var pointcoverage3 = FindCoveragePoints(pointtofind3, grid);
    var CoverageInsideGrid3 = FindCoverage(pointtofind3, grid);
    var CoverageOutsideGrid3 = FindCoverageOutsideGrid(pointtofind3, grid);
    //DrawPointOnGrid(pointtofind3, grid);

    //document.write("===============================================");


    var pointcoverage4 = FindCoveragePoints(pointtofind4, grid);
    var CoverageInsideGrid4 = FindCoverage(pointtofind4, grid);
    var CoverageOutsideGrid4 = FindCoverageOutsideGrid(pointtofind4, grid);
    //DrawPointOnGrid(pointtofind4, grid);


    var CoverageWithOverlapping = CoverageInsideGrid1 + CoverageInsideGrid2 + CoverageInsideGrid3 + CoverageInsideGrid4;

    //document.write("================= Start Statement ==============================");

   // document.write("<br>");
   // document.write("<br>");
   // document.write("<b> Total Coverage with Overlapping ::::::" + "</b>" + CoverageWithOverlapping);
   // document.write("<br>");
   // document.write("<br>");


   //document.write("===============================================");

    var overlapping12 = FindOverlapping(pointtofind1, pointcoverage1, pointtofind2, pointcoverage2);
    var overlapping13 = FindOverlapping(pointtofind1, pointcoverage1, pointtofind3, pointcoverage3);
    var overlapping14 = FindOverlapping(pointtofind1, pointcoverage1, pointtofind4, pointcoverage4);

    var overlapping23 = FindOverlapping(pointtofind2, pointcoverage2, pointtofind3, pointcoverage3);
    var overlapping24 = FindOverlapping(pointtofind2, pointcoverage2, pointtofind4, pointcoverage4);

    var overlapping34 = FindOverlapping(pointtofind3, pointcoverage3, pointtofind4, pointcoverage4);

    var totaloverlapping = overlapping12 + overlapping13 + overlapping14 + overlapping23 + overlapping24 + overlapping34;

    //document.write("===============================================");

    document.write("<br>");
    document.write("<br>");
    document.write("<b> Total Overlapping among all rectangles ::::::" + "</b>" + totaloverlapping);
    document.write("<br>");
    document.write("<br>");

    //document.write("===============================================");

    var OverallCoverageWithoutOverlapping = CoverageWithOverlapping - totaloverlapping;
    //var OverallCoverageWithoutOverlapping = FindOverallCoverage(pointcoverage1, pointcoverage2, pointcoverage3, pointcoverage4);


    //document.write("<br>");
    //document.write("<br>");
    //document.write("<b> Total Coverage without overlapping ::::::" + "</b>" + OverallCoverageWithoutOverlapping);
    //document.write("<br>");
    //document.write("<br>");

    //document.write("===============================================");

    var OverallCoverageOutsideGrid = CoverageOutsideGrid1 + CoverageOutsideGrid2 + CoverageOutsideGrid3 + CoverageOutsideGrid4;


    //document.write("<br>");
    //document.write("<br>");
    //document.write("<b> Total Coverage outside grid ::::::" + "</b>" + OverallCoverageOutsideGrid);
    //document.write("<br>");
    //document.write("<br>");

    //document.write("===============================================");


    var FitnessValue = OverallCoverageWithoutOverlapping;


    //document.write("<br>");
    //document.write("<br>");
    //document.write("<b> Fitness Value ::::::" + "</b>" + FitnessValue);
    //document.write("<br>");
    //document.write("<br>");

    //document.write("===============================================");

    return FitnessValue;

}

// Count all the coverage points of all 4 rectangles, and eliminate the duplicate
// this is redundant functionality, as done already.
// Coverage Count by All Rectangles - Overlapping among all rectangles
function FindOverallCoverage(pointcoverage1, pointcoverage2, pointcoverage3, pointcoverage4) {

    //var alllength = pointcoverage1.length + pointcoverage2.length + pointcoverage3.length + pointcoverage4.length;

    var allarray = [];
    var allarraycounter = 0;

    for (var i = 0; i < pointcoverage1.length; i++) {

        if (!PointAlreadyExist(allarray, pointcoverage1[i])) {
            //alert("point added");
            allarray[allarraycounter] = pointcoverage1[i];
            allarraycounter++;
        }
    }

    for (var i = 0; i < pointcoverage2.length; i++) {

        if (!PointAlreadyExist(allarray, pointcoverage2[i])) {
            //alert("point added");
            //allarray.concat(pointcoverage2[i]);
            allarray[allarraycounter] = pointcoverage2[i];
            allarraycounter++;
        }
    }

    for (var i = 0; i < pointcoverage3.length; i++) {

        if (!PointAlreadyExist(allarray, pointcoverage3[i])) {
            //alert("point added");
            //allarray.concat(pointcoverage3[i]);
            allarray[allarraycounter] = pointcoverage3[i];
            allarraycounter++;
        }
    }

    for (var i = 0; i < pointcoverage4.length; i++) {

        if (!PointAlreadyExist(allarray, pointcoverage4[i])) {
            //alert("point added");
            //allarray.concat(pointcoverage4[i]);
            allarray[allarraycounter] = pointcoverage4[i];
            allarraycounter++;
        }
    }

    return allarray.length;

}


function PointAlreadyExist(allarray, point) {

    var flag = false;

    for (var i = 0; i < allarray.length; i++) {

        if (allarray[i][0] == point[0] && allarray[i][1] == point[1]) {
            flag = true;
            break;
        }

    }

    return flag;

}


function FindOverlapping(pointtofind1, pointcoverage1, pointtofind2, pointcoverage2) {

    var overlappingcount = 0;

    for (var i = 0; i < pointcoverage1.length; i++) {

        for (var j = 0; j < pointcoverage2.length; j++) {

            if (pointcoverage1[i][0] == pointcoverage2[j][0] &&
                pointcoverage1[i][1] == pointcoverage2[j][1]) {
                overlappingcount++;
                break;
            }
        }

    }


    document.write("<br>");
    document.write("<br>");
    document.write("<b>Overlapping between rectangles having centers " + "[" + pointtofind1[0] + ", " + pointtofind1[1] + "] & " + "[" + pointtofind2[0] + ", " + pointtofind2[1] + "]:::::::::::::" + "</b>" + overlappingcount);
    document.write("<br>");
    document.write("<br>");



    //document.write("<br>");
    //document.write("<br>");

    //document.write("Overlapping: " + overlappingcount);

    return overlappingcount;

}


function FindCoveragePoints(point, grid) {


    //console.error("grid.length" + grid.length);
    //console.error("grid[0].length"+grid[0].length);


    // coverage rectanlge array will comprise 9 elements
    var coverage = new Array(9);

    // used for not coverage
    var totalcoverage = 0;

     // initialize coverage rectanlge array with 9 elements
    for (var i = 0; i < coverage.length; i++) {
        coverage[i] = new Array(2);
    }

    // 5th poisition- center of coverage rectanlge array
    coverage[4][0] = parseInt(point[0]);
    coverage[4][1] = parseInt(point[1]);

    if (!FindPoint(coverage[4], grid)) {

        //console.error("this center point not found in gird " + coverage[4]);

        coverage[4][0] = "x";
        coverage[4][1] = "x";

        totalcoverage++;
    }

    // 4- left of center
    coverage[3][0] = parseInt(point[0]) - 1;
    coverage[3][1] = parseInt(point[1]);

    if (!FindPoint(coverage[3], grid)) {

        //console.error("this left of center point not found in gird " + coverage[3]);

        coverage[3][0] = "x";
        coverage[3][1] = "x";

        totalcoverage++;
    }

    // 6- right of center
    coverage[5][0] = parseInt(point[0]) + 1;
    coverage[5][1] = parseInt(point[1]);

    if (!FindPoint(coverage[5], grid)) {

        //console.error("this right of center point not found in gird " + coverage[5]);

        coverage[5][0] = "x";
        coverage[5][1] = "x";

        totalcoverage++;
    }

    // 2- top of center
    coverage[1][0] = parseInt(point[0]);
    coverage[1][1] = parseInt(point[1]) - 1;

    if (!FindPoint(coverage[1], grid)) {

        //console.error("this top of center point not found in gird " + coverage[1]);

        coverage[1][0] = "x";
        coverage[1][1] = "x";

        totalcoverage++;
    }


    // 3- top right corner
    coverage[2][0] = parseInt(point[0]) + 1;
    coverage[2][1] = parseInt(point[1]) - 1;

    if (!FindPoint(coverage[2], grid)) {

        //console.error("this top right corner point not found in gird " + coverage[2]);

        coverage[2][0] = "x";
        coverage[2][1] = "x";

        totalcoverage++;
    }

    // 1- top left corner
    coverage[0][0] = parseInt(point[0]) - 1;
    coverage[0][1] = parseInt(point[1]) - 1;

    if (!FindPoint(coverage[0], grid)) {

        //console.error("this top left corner point not found in gird " + coverage[0]);

        coverage[0][0] = "x";
        coverage[0][1] = "x";

        totalcoverage++;
    }

    // 8- bottom cell of center
    coverage[7][0] = parseInt(point[0]);
    coverage[7][1] = parseInt(point[1]) + 1;

    if (!FindPoint(coverage[7], grid)) {

        //console.error("this bottom cell of center point not found in gird " + coverage[7]);

        coverage[7][0] = "x";
        coverage[7][1] = "x";

        totalcoverage++;
    }

    // 9- bottom right corner
    coverage[8][0] = parseInt(point[0]) + 1;
    coverage[8][1] = parseInt(point[1]) + 1;

    if (!FindPoint(coverage[8], grid)) {

        //console.error("this bottom right corner point not found in gird " + coverage[8]);

        coverage[8][0] = "x";
        coverage[8][1] = "x";

        totalcoverage++;
    }


    // 7- bottom left corner
    coverage[6][0] = parseInt(point[0]) - 1;
    coverage[6][1] = parseInt(point[1]) + 1;

    if (!FindPoint(coverage[6], grid)) {

        //console.error("this bottom left corner point not found in gird " + coverage[6]);

        coverage[6][0] = "x";
        coverage[6][1] = "x"; 
        
        totalcoverage++;
    }

    // total no. of points covered out of 9 within innver rectangle
    totalcoverage = 9 - totalcoverage;

    // array to hold coverage points
    var coveragearray = new Array(totalcoverage);

    // initialize array to hold coverage points
    for (var i = 0; i < coveragearray.length; i++) {
        coveragearray[i] = new Array(2);
    }

    var innercounter = 0;

    for (var i = 0; i < coverage.length; i++) {

        if (coverage[i][0] != "x") {

            coveragearray[innercounter][0] = coverage[i][0];
            coveragearray[innercounter][1] = coverage[i][1];
            innercounter++;

        }

    }


    document.write("<br>");
    document.write("<br>");
    document.write("<b>Rectangle with center " + "[" + point[0] + ", " + point[1] + "]" + " Coverage Map</b>");
    document.write("<br>");


    for (var i = 0; i < coverage.length; i++) {

        if (i % 3 == 0) { document.write("<br>"); }
        document.write("[" + coverage[i][0] + "," + coverage[i][1] + "]");

    }


    document.write("<br>");
    document.write("<br>");
    document.write("<b>Rectangle with center " + "[" + point[0] + ", " + point[1] + "]" + " Coverage Points</b>");
    document.write("<br>");
    document.write("<br>");

    for (var i = 0; i < coveragearray.length; i++) {
        document.write("[" + coveragearray[i][0] + "," + coveragearray[i][1] + "]");
    }

    return coveragearray;

}


function FindCoverageOutsideGrid(point, grid) {


    var coverage = new Array(9);
    var totalcoverage = 0;

    for (var i = 0; i < coverage.length; i++) {
        coverage[i] = new Array(2);
    }


    coverage[0][0] = point[0];
    coverage[0][1] = point[1];

    if (!FindPoint(coverage[0], grid)) {
        totalcoverage++;
    }


    coverage[1][0] = point[0] - 1;
    coverage[1][1] = point[1];

    if (!FindPoint(coverage[1], grid)) {
        totalcoverage++;
    }


    coverage[2][0] = point[0] + 1;
    coverage[2][1] = point[1];

    if (!FindPoint(coverage[2], grid)) {
        totalcoverage++;
    }


    coverage[3][0] = point[0];
    coverage[3][1] = point[1] - 1;

    if (!FindPoint(coverage[3], grid)) {
        totalcoverage++;
    }

    coverage[4][0] = point[0] + 1;
    coverage[4][1] = point[1] - 1;

    if (!FindPoint(coverage[4], grid)) {
        totalcoverage++;
    }


    coverage[5][0] = point[0] - 1;
    coverage[5][1] = point[1] - 1;

    if (!FindPoint(coverage[5], grid)) {
        totalcoverage++;
    }


    coverage[6][0] = point[0];
    coverage[6][1] = point[1] + 1;

    if (!FindPoint(coverage[6], grid)) {
        totalcoverage++;
    }

    coverage[7][0] = point[0] + 1;
    coverage[7][1] = point[1] + 1;

    if (!FindPoint(coverage[7], grid)) {
        totalcoverage++;
    }

    coverage[8][0] = point[0] - 1;
    coverage[8][1] = point[1] + 1;

    if (!FindPoint(coverage[8], grid)) {
        totalcoverage++;
    }


    document.write("<b>Rectangle with center " + "[" + point[0] + ", " + point[1] + "]" + " Outside Grid Coverage </b>" + totalcoverage);
    document.write("<br>");
    document.write("<br>");

    return totalcoverage;

}


function FindCoverage(point, grid) {


    var coverage = new Array(9);
    var totalcoverage = 0;

    for (var i = 0; i < coverage.length; i++) {
        coverage[i] = new Array(2);
    }


    coverage[0][0] = point[0];
    coverage[0][1] = point[1];

    if (!FindPoint(coverage[0], grid)) {
        totalcoverage++;
    }


    coverage[1][0] = point[0] - 1;
    coverage[1][1] = point[1];

    if (!FindPoint(coverage[1], grid)) {
        totalcoverage++;
    }


    coverage[2][0] = point[0] + 1;
    coverage[2][1] = point[1];

    if (!FindPoint(coverage[2], grid)) {
        totalcoverage++;
    }


    coverage[3][0] = point[0];
    coverage[3][1] = point[1] - 1;

    if (!FindPoint(coverage[3], grid)) {
        totalcoverage++;
    }

    coverage[4][0] = point[0] + 1;
    coverage[4][1] = point[1] - 1;

    if (!FindPoint(coverage[4], grid)) {
        totalcoverage++;
    }


    coverage[5][0] = point[0] - 1;
    coverage[5][1] = point[1] - 1;

    if (!FindPoint(coverage[5], grid)) {
        totalcoverage++;
    }


    coverage[6][0] = point[0];
    coverage[6][1] = point[1] + 1;

    if (!FindPoint(coverage[6], grid)) {
        totalcoverage++;
    }

    coverage[7][0] = point[0] + 1;
    coverage[7][1] = point[1] + 1;

    if (!FindPoint(coverage[7], grid)) {
        totalcoverage++;
    }

    coverage[8][0] = point[0] - 1;
    coverage[8][1] = point[1] + 1;

    if (!FindPoint(coverage[8], grid)) {
        totalcoverage++;
    }

    totalcoverage = 9 - totalcoverage;

    document.write("<br>");
    document.write("<br>");
    document.write("<b>Rectangle with center " + "[" + point[0] + ", " + point[1] + "]" + " Coverage </b>" + totalcoverage);
    document.write("<br>");
    document.write("<br>");

    return totalcoverage;

}

// Find point within Grid
function FindPoint(point, grid) {

    //alert(grid.length);
    //alert(grid[0].length)

    if ((point[0] >= 0 && point[0] < grid[0].length) &&
        (point[1] >= 0 && point[1] < grid.length)) {
        return true;
    }

    //console.error(point + " is outside the grid.");

    return false;

}


// Find point within buffer inside the Grid. 
// This buffer is to save the point laying on grid.
function Find_Point_Within_Buffer(point, grid, buffer) {

    //alert(grid.length);
    //alert(grid[0].length)

    if ((point[0] >= buffer && point[0] < grid[0].length - buffer) &&
        (point[1] >= buffer && point[1] < grid.length - buffer)) {
        return true;
    }

    //console.error(point + " is outside the grid.");

    return false;

}



function Validate_X_Coordinate(x, grid) {


    if (x >= 0 && x < grid[0].length) {
        return true;
    }

    return false;
}


function Validate_Coordinate_On_Grid(coordinate, grid_length) {


    if (coordinate >= 0 && coordinate < grid_length) {
        return true;
    }

    return false;
}


function Validate_Y_Coordinate(y, grid) {


    if (y >= 0 && y < grid.length) {
        return true;
    }

    return false;
}



function Validate_X_Coordinate_Within_Buffer(x, grid, buffer) {


    if (x >= buffer && x < grid[0].length-buffer) {
        return true;
    }

    return false;
}


function Validate_Y_Coordinate_Within_Buffer(y, grid, buffer) {


    if (y >= buffer && y < grid.length-buffer) {
        return true;
    }

    return false;
}





function FindPoint2(point, grid) {

    for (var i = 0; i < grid.length; i++) {

        for (var j = 0; j < grid.length; j++) {

            if (grid[i][j][0] == point[0] && grid[i][j][1] == point[1]) {
                return true;
            }

        }
    }

    return false;

}