
//1
function Get_PlusSign_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    point1[0] = center_x + rd_x;
    point1[1] = center_y;

    point2[0] = center_x - rd_x;
    point2[1] = center_y;

    point3[0] = center_x;
    point3[1] = center_y + rd_y;

    point4[0] = center_x;
    point4[1] = center_y - rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//2
function Get_CrossSign_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];


    point1[0] = center_x - rd_x;
    point1[1] = center_y - rd_y;

    point2[0] = center_x + rd_x;
    point2[1] = center_y + rd_y;

    point3[0] = center_x + rd_x;
    point3[1] = center_y - rd_y;

    point4[0] = center_x - rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//3
function Get_Y_Sign_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //(c,c) (c-rd, c-rd) (c+rd, c-rd) (c, c+rd)

    point1[0] = center_x;
    point1[1] = center_y;

    point2[0] = center_x - rd_x;
    point2[1] = center_y - rd_y;

    point3[0] = center_x + rd_x;
    point3[1] = center_y - rd_y;

    point4[0] = center_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//4
function Get_Right_Tilted_Y_Sign_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //(c, c)(c + rd, c - rd), (c + rd, c + rd), (c - rd, c)

    point1[0] = center_x;
    point1[1] = center_y;

    point2[0] = center_x + rd_x;
    point2[1] = center_y - rd_y;

    point3[0] = center_x + rd_x;
    point3[1] = center_y + rd_y;

    point4[0] = center_x - rd_x;
    point4[1] = center_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//5
function Get_Inverted_Y_Sign_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    // (c,c) (c, c-rd) (c+rd, c+rd) (c-rd, c+rd)

    point1[0] = center_x;
    point1[1] = center_y;

    point2[0] = center_x;
    point2[1] = center_y - rd_y;

    point3[0] = center_x + rd_x;
    point3[1] = center_y + rd_y;

    point4[0] = center_x - rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//6
function Get_Left_Tilted_Y_Sign_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //(c, c)(c - rd, c - rd)(c + rd, c)(c - rd, c + rd)

    point1[0] = center_x;
    point1[1] = center_y;

    point2[0] = center_x - rd_x;
    point2[1] = center_y - rd_y;

    point3[0] = center_x + rd_x;
    point3[1] = center_y;

    point4[0] = center_x - rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//7
function Get_T_Sign_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //(c-rd, c-rd) (c, c-rd) (c+rd, c-rd) (c, c+rd)

    point1[0] = center_x - rd_x;
    point1[1] = center_y - rd_y;

    point2[0] = center_x;
    point2[1] = center_y - rd_y;

    point3[0] = center_x + rd_x;
    point3[1] = center_y - rd_y;

    point4[0] = center_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//8
function Get_Right_Tilted_T_Sign_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //(c + rd, c - rd)(c + rd, c)(c - rd, c)(c + rd, c + rd)

    point1[0] = center_x + rd_x;
    point1[1] = center_y - rd_y;

    point2[0] = center_x + rd_x;
    point2[1] = center_y;

    point3[0] = center_x - rd_x;
    point3[1] = center_y;

    point4[0] = center_x + rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//9
function Get_Inverted_T_Sign_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    // (c, c-rd) (c, c+rd) (c+rd, c+rd) (c-rd, c+rd)

    point1[0] = center_x;
    point1[1] = center_y - rd_y;

    point2[0] = center_x;
    point2[1] = center_y + rd_y;

    point3[0] = center_x + rd_x;
    point3[1] = center_y + rd_y;

    point4[0] = center_x - rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//10
function Get_Left_Tilted_T_Sign_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //  (c-rd, c-rd) (c-rd, c) (c+rd, c) (c-rd, c+rd)

    point1[0] = center_x - rd_x;
    point1[1] = center_y - rd_y;

    point2[0] = center_x - rd_x;
    point2[1] = center_y;

    point3[0] = center_x + rd_x;
    point3[1] = center_y;

    point4[0] = center_x - rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//11
function Get_Top_EQL_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //  (c, c) (c, c-rd) (c+rd, c-rd) (c-rd, c-rd)

    point1[0] = center_x;
    point1[1] = center_y;

    point2[0] = center_x;
    point2[1] = center_y - rd_y;

    point3[0] = center_x + rd_x;
    point3[1] = center_y - rd_y;

    point4[0] = center_x - rd_x;
    point4[1] = center_y - rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//12
function Get_Right_EQL_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //  (c,c) (c+rd, c-rd) (c+rd, c) (c+rd, c+rd)

    point1[0] = center_x;
    point1[1] = center_y;

    point2[0] = center_x + rd_x;
    point2[1] = center_y - rd_y;

    point3[0] = center_x + rd_x;
    point3[1] = center_y;

    point4[0] = center_x + rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//13
function Get_Bottom_EQL_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //  (c, c) (c-rd, c+rd) (c, c+rd) (c+rd, c+rd)

    point1[0] = center_x;
    point1[1] = center_y;

    point2[0] = center_x - rd_x;
    point2[1] = center_y + rd_y;

    point3[0] = center_x;
    point3[1] = center_y + rd_y;

    point4[0] = center_x + rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//14
function Get_Left_EQL_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //  (c, c) (c-rd, c) (c-rd, c-rd)  (c-rd, c+rd) 

    point1[0] = center_x;
    point1[1] = center_y;

    point2[0] = center_x - rd_x;
    point2[1] = center_y;

    point3[0] = center_x - rd_x;
    point3[1] = center_y - rd_y;

    point4[0] = center_x - rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//15
function Get_Left_Bottom_RightAngle_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    // (c, c) (c-rd, c-rd) (c-rd, c+rd) (c+rd, c+rd)

    point1[0] = center_x;
    point1[1] = center_y;

    point2[0] = center_x - rd_x;
    point2[1] = center_y - rd_y;

    point3[0] = center_x - rd_x;
    point3[1] = center_y + rd_y;

    point4[0] = center_x + rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//16
function Get_Right_Bottom_RightAngle_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    // (c, c) (c+rd, c-rd) (c-rd, c+rd) (c+rd, c+rd)

    point1[0] = center_x;
    point1[1] = center_y;

    point2[0] = center_x + rd_x;
    point2[1] = center_y - rd_y;

    point3[0] = center_x - rd_x;
    point3[1] = center_y + rd_y;

    point4[0] = center_x + rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//17
function Get_Right_Top_RightAngle_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    // (c, c) (c-rd, c-rd) (c+rd, c-rd) (c+rd, c+rd)

    point1[0] = center_x;
    point1[1] = center_y;

    point2[0] = center_x - rd_x;
    point2[1] = center_y - rd_y;

    point3[0] = center_x + rd_x;
    point3[1] = center_y - rd_y;

    point4[0] = center_x + rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//18
function Get_Left_Top_RightAngle_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    // (c, c) (c-rd, c-rd) (c+rd, c-rd) (c-rd, c+rd)

    point1[0] = center_x;
    point1[1] = center_y;

    point2[0] = center_x - rd_x;
    point2[1] = center_y - rd_y;

    point3[0] = center_x + rd_x;
    point3[1] = center_y - rd_y;

    point4[0] = center_x - rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//19
function Get_V_Sign_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //(c-rd, c-rd) (c+rd, c-rd) (c-rd+ (rd/2), c+rd) ( c+rd-(rd/2), c+rd)

   

    point1[0] = center_x - rd_x;
    point1[1] = center_y - rd_y;

    point2[0] = center_x + rd_x;
    point2[1] = center_y - rd_y;

    point3[0] = center_x - rd_x + Math.round(rd_x / 2);
    point3[1] = center_y + rd_y;

    point4[0] = center_x + rd_x - Math.round(rd_x / 2);
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//20
function Get_Inverted_V_Sign_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //(c-rd+ (rd/2), c-rd)     ( c+rd - (rd/2)), c-rd)    (c-rd, c+rd) (c+rd, c+rd)

    point1[0] = center_x - rd_x + Math.round(rd_x / 2);
    point1[1] = center_y - rd_y;

    point2[0] = center_x + rd_x - Math.round(rd_x / 2);
    point2[1] = center_y - rd_y;

    point3[0] = center_x - rd_x;
    point3[1] = center_y + rd_y;

    point4[0] = center_x + rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//21
function Get_Left_Angle_Bracket_Shape_Record(center_x, center_y, rd_x, rd_y) {

    
    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //(c - rd, c - rd + (rd / 2))(c - rd, c + rd - (rd / 2))(c + rd, c - rd)(c + rd, c + rd)


    point1[0] = center_x - rd_x;
    point1[1] = center_y - rd_y + Math.round(rd_y/2);

    point2[0] = center_x - rd_x;
    point2[1] = center_y + rd_y - Math.round(rd_y/2);

    point3[0] = center_x + rd_x;
    point3[1] = center_y - rd_y;

    point4[0] = center_x + rd_x;
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//22
function Get_Right_Angle_Bracket_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //(c-rd, c-rd)   (c-rd, c+rd) (c+rd, c-rd+(rd/2))  (c+rd, c+rd -(rd/2))

    point1[0] = center_x - rd_x;
    point1[1] = center_y - rd_y;

    point2[0] = center_x - rd_x;
    point2[1] = center_y + rd_y;

    point3[0] = center_x + rd_x;
    point3[1] = center_y - rd_y + Math.round(rd_y/2);

    point4[0] = center_x + rd_x;
    point4[1] = center_y + rd_y - Math.round(rd_y/2);

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//23
function Get_Vertical_Lines_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //(c-rd + (rd/2), c-rd) (c+rd - (rd/2), c-rd) (c-rd + (rd/2), c+rd)  (c+rd - (rd/2), c+rd)

    point1[0] = center_x - rd_x + Math.round(rd_x / 2);
    point1[1] = center_y - rd_y;

    point2[0] = center_x + rd_x - Math.round(rd_x / 2);
    point2[1] = center_y - rd_y;

    point3[0] = center_x - rd_x + Math.round(rd_x / 2);
    point3[1] = center_y + rd_y;

    point4[0] = center_x + rd_x - Math.round(rd_x / 2);
    point4[1] = center_y + rd_y;

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//24
function Get_Horizontal_Lines_Shape_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    //(c-rd, c-rd + (rd/2))     (c-rd, c+rd - (rd/2))     (c+rd, c-rd+ (rd/2))     (c+rd, c+rd - (rd/2))

    point1[0] = center_x - rd_x;
    point1[1] = center_y - rd_y + Math.round(rd_y / 2);

    point2[0] = center_x - rd_x;
    point2[1] = center_y + rd_y - Math.round(rd_y / 2);

    point3[0] = center_x + rd_x;
    point3[1] = center_y - rd_y + Math.round(rd_y / 2);

    point4[0] = center_x + rd_x;
    point4[1] = center_y + rd_y - Math.round(rd_y / 2);

    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}

//25
function Get_Half_Rectangle_Within_Record(center_x, center_y, rd_x, rd_y) {

    var shape_record = [];

    var point1 = [];
    var point2 = [];
    var point3 = [];
    var point4 = [];

    // (c-rd + (rd/2), c-rd + (rd/2))            (c + rd - (rd/2), c + rd - (rd/2))        
    // (c - rd + (rd / 2), c + rd - (rd / 2))    (c + rd - (rd / 2), c - rd + (rd / 2)) 


    point1[0] = center_x - rd_x + Math.round(rd_x / 2);
    point1[1] = center_y - rd_y + Math.round(rd_y / 2);

    point2[0] = center_x + rd_x - Math.round(rd_x / 2);
    point2[1] = center_y + rd_y - Math.round(rd_y / 2);

    point3[0] = center_x - rd_x + Math.round(rd_x / 2);
    point3[1] = center_y + rd_y - Math.round(rd_y / 2);

    point4[0] = center_x + rd_x - Math.round(rd_x / 2);
    point4[1] = center_y - rd_y + Math.round(rd_y / 2);


    shape_record[0] = point1;
    shape_record[1] = point2;
    shape_record[2] = point3;
    shape_record[3] = point4;

    return shape_record;
}



function Get_Initial_Generation_By_Shape_Equations() {


    var grid = GetGrid();

    var lenght_y = grid.length;
    var lenght_x = grid[0].length;

    var center_y = Math.floor(lenght_y / 2);
    var center_x = Math.floor(lenght_x / 2);

    var rd_y = center_y - 1;
    var rd_x = center_x - 1;

    //alert("centerx " + center_x);
    //alert("centery " + center_y);

    //alert("radial diff x " + rd_x);
    //alert("radial diff y " + rd_y);


    var set = [];

    set[0] = Get_PlusSign_Shape_Record(center_x, center_y, rd_x, rd_y); //1
    set[1] = Get_CrossSign_Shape_Record(center_x, center_y, rd_x, rd_y); //2
    set[2] = Get_Y_Sign_Shape_Record(center_x, center_y, rd_x, rd_y); //3
    set[3] = Get_Right_Tilted_Y_Sign_Shape_Record(center_x, center_y, rd_x, rd_y); //4
    set[4] = Get_Inverted_Y_Sign_Shape_Record(center_x, center_y, rd_x, rd_y); //5
    set[5] = Get_Left_Tilted_Y_Sign_Shape_Record(center_x, center_y, rd_x, rd_y); //6
    set[6] = Get_T_Sign_Shape_Record(center_x, center_y, rd_x, rd_y); //7
    set[7] = Get_Right_Tilted_T_Sign_Shape_Record(center_x, center_y, rd_x, rd_y); //8
    set[8] = Get_Inverted_T_Sign_Shape_Record(center_x, center_y, rd_x, rd_y); //9
    set[9] = Get_Left_Tilted_T_Sign_Shape_Record(center_x, center_y, rd_x, rd_y); //10
    set[10] = Get_Top_EQL_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y); //11
    set[11] = Get_Right_EQL_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y); //12
    set[12] = Get_Bottom_EQL_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y); //13
    set[13] = Get_Left_EQL_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y); //14
    set[14] = Get_Left_Bottom_RightAngle_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y); //15
    set[15] = Get_Right_Bottom_RightAngle_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y); //16
    set[16] = Get_Right_Top_RightAngle_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y); //17
    set[17] = Get_Left_Top_RightAngle_Triangle_Shape_Record(center_x, center_y, rd_x, rd_y); //18
    set[18] = Get_V_Sign_Shape_Record(center_x, center_y, rd_x, rd_y); //19
    set[19] = Get_Inverted_V_Sign_Shape_Record(center_x, center_y, rd_x, rd_y); //20
    set[20] = Get_Left_Angle_Bracket_Shape_Record(center_x, center_y, rd_x, rd_y);  //21
    set[21] = Get_Right_Angle_Bracket_Shape_Record(center_x, center_y, rd_x, rd_y); //22
    set[22] = Get_Vertical_Lines_Shape_Record(center_x, center_y, rd_x, rd_y); //23
    set[23] = Get_Horizontal_Lines_Shape_Record(center_x, center_y, rd_x, rd_y); //24
    set[24] = Get_Half_Rectangle_Within_Record(center_x, center_y, rd_x, rd_y); //25


    return set;

}




function xGet_Initial_Generation_By_Shape_Equations() {


    var grid = GetGrid();

    var lenght_y = grid.length;
    var lenght_x = grid[0].length;

    var center_y = Math.floor(lenght_y / 2);
    var center_x = Math.floor(lenght_x / 2);

    alert("centerx " + center_x);
    alert("centery " + center_y);

    var set = [];

    set[0] = Get_PlusSign_Shape_Record(4, 3); //1
    set[1] = Get_CrossSign_Shape_Record(4, 3); //2
    set[2] = Get_Y_Sign_Shape_Record(4, 3); //3
    set[3] = Get_Right_Tilted_Y_Sign_Shape_Record(4, 3); //4
    set[4] = Get_Inverted_Y_Sign_Shape_Record(4, 3); //5
    set[5] = Get_Left_Tilted_Y_Sign_Shape_Record(4, 3); //6
    set[6] = Get_T_Sign_Shape_Record(4, 3); //7
    set[7] = Get_Right_Tilted_T_Sign_Shape_Record(4, 3); //8
    set[8] = Get_Inverted_T_Sign_Shape_Record(4, 3); //9
    set[9] = Get_Left_Tilted_T_Sign_Shape_Record(4, 3); //10
    set[10] = Get_Top_EQL_Triangle_Shape_Record(4, 3); //11
    set[11] = Get_Right_EQL_Triangle_Shape_Record(4, 3); //12
    set[12] = Get_Bottom_EQL_Triangle_Shape_Record(4, 3); //13
    set[13] = Get_Left_EQL_Triangle_Shape_Record(4, 3); //14
    set[14] = Get_Left_Bottom_RightAngle_Triangle_Shape_Record(4, 3); //15
    set[15] = Get_Right_Bottom_RightAngle_Triangle_Shape_Record(4, 3); //16
    set[16] = Get_Right_Top_RightAngle_Triangle_Shape_Record(4, 3); //17
    set[17] = Get_Left_Top_RightAngle_Triangle_Shape_Record(4, 3); //18
    set[18] = Get_V_Sign_Shape_Record(4, 3); //19
    set[19] = Get_Inverted_V_Sign_Shape_Record(4, 3); //20
    set[20] = Get_Left_Angle_Bracket_Shape_Record(4, 3);  //21
    set[21] = Get_Right_Angle_Bracket_Shape_Record(4, 3); //22
    set[22] = Get_Vertical_Lines_Shape_Record(4, 3); //23
    set[23] = Get_Horizontal_Lines_Shape_Record(4, 3); //24
    set[24] = Get_Half_Rectangle_Within_Record(4, 3); //25


    return set;

}