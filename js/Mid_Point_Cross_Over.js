function MidPoint_CrossOver_Between_Two_Points(point1, point2) {

    var new_point = [];

    new_point[0] = Math.round((point1[0] + point2[0]) / 2);
    new_point[1] = Math.round((point1[1] + point2[1]) / 2);

    return new_point;
}


function MidPoint_CrossOver_Of_Record(record) {

    var new_record = [];
    
    new_record[0] = MidPoint_CrossOver_Between_Two_Points(record[0], record[1]);
    new_record[1] = MidPoint_CrossOver_Between_Two_Points(record[1], record[2]);
    new_record[2] = MidPoint_CrossOver_Between_Two_Points(record[2], record[3]);
    new_record[3] = MidPoint_CrossOver_Between_Two_Points(record[3], record[0]);

    return new_record;
}



function MidPoint_CrossOver_Of_Generation(generation) {

    var new_generation = [];

    for (var i = 0; i < generation.length; i++) {
        new_generation[i] = MidPoint_CrossOver_Of_Record(generation[i]);
    }

    return new_generation;

}