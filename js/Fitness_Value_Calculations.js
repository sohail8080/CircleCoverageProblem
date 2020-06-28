
function GENETIC_ALGO_To_Evaluate_FitnessValue_Of_Generation_With_Binary_CrossOver(iteration_count, top_records_list, prev_gen_record_list, all_records_list) {

    //console.log("top 4 records after random generation evaluation");
    //Print_Generation_Result_Table(top4_records_list);
    //console.log("top record after random generation  evaluation ");
    //Print_Generation_Result_Table(top_records_list);

    var Generation_Result_Table = [];// result of generation with fitness value
    var maxfitnessvalue = -99999999999;
    var maxfitnessvalueindex = -1
    var maxfitnessvaluerecord = null;

    // Binary Cross Over takes 4 values and return 8 values
    var top4_generation = [];


    if (prev_gen_record_list == null || prev_gen_record_list.length <= 0) {

        // Case Ist Iteration
        if (all_records_list == null || all_records_list.length <= 0) {
            alert("error:GENETIC_ALGO_To_Evaluate_FitnessValue_Of_Generation_With_Binary_CrossOver");
        }

        //for (var i = 0; i < all_records_list.length; i++) {
        //    top4_generation[i] = all_records_list[i][1];
        //}

        top4_generation[0] = all_records_list[0][1];
        top4_generation[1] = all_records_list[1][1];
        top4_generation[2] = all_records_list[2][1];
        top4_generation[3] = all_records_list[3][1];
    }
    else {


        //var counter = 0;

        //if (prev_gen_record_list.length > 4) {
        //    counter = 4;
        //}
        //else {
        //    counter = prev_gen_record_list.length;
        //}


        for (var i = 0; i < prev_gen_record_list.length; i++) {
            top4_generation[i] = prev_gen_record_list[i][1];
        }

        //top4_generation[0] = prev_gen_record_list[0][1];
        //top4_generation[1] = prev_gen_record_list[1][1];
        //top4_generation[2] = prev_gen_record_list[2][1];
        //top4_generation[3] = prev_gen_record_list[3][1];
    }

    //top4_generation[0] = top4_records_list[top4_records_list.length - 4][1];
    //top4_generation[1] = top4_records_list[top4_records_list.length - 3][1];
    //top4_generation[2] = top4_records_list[top4_records_list.length - 2][1];
    //top4_generation[3] = top4_records_list[top4_records_list.length - 1][1];

    console.log("===============");
    console.log("Iteration [" + [iteration_count+1] + "] Top 4 Records before Binary Cross-Over ");
    Print_Generation(top4_generation);
    console.log("===============");

    // Binary Cross Over takes 4 values and return 8 values
    var generation = Crossover_Generation_Of_Four(top4_generation);

    console.log("Iteration [" + [iteration_count+1] + "] New Generation after Binary Cross-Over ");
    Print_Generation(generation);
    console.log("===============");

    var Top_Record_Result = [];
    Top_Record_Result[0] = [];


    for (var i = 0; i < generation.length; i++) {

        var record = generation[i];
        
        var FitnessValue = FindFitnessValueOfRecord(record);

        if (FitnessValue > maxfitnessvalue) {

            maxfitnessvalue = FitnessValue;
            maxfitnessvalueindex = i;
            maxfitnessvaluerecord = record;

            Top_Record_Result[0][0] = FitnessValue;
            Top_Record_Result[0][1] = record;

        }

        var Record_Result = [];
        Record_Result[0] = FitnessValue;
        Record_Result[1] = record;

        Generation_Result_Table[i] = Record_Result;

    }

    console.log("Iteration [" + [iteration_count+1] + "] Binary Cross Over Generation results");
    Print_Generation_Result_Table(Generation_Result_Table);
    console.log("===============");


    //var Generation_Top4_Result_Table = Sort_Generation_Result_Table_Return_Top4_Records(Generation_Result_Table);

        // following sort will eliminate duplicate records present in the table
    // duplication means same Fitness Value & Points, all such points will be removed   
    var Generation_Top4_Result_Table = Sort_Generation_Result_Table(Generation_Result_Table);

    //console.log("===============");
    console.log("Iteration [" + [iteration_count+1] + "] Sorted Binary Cross Over Generation results");
    Print_Generation_Result_Table(Generation_Top4_Result_Table);
    console.log("===============");

    var r1 = Merge_Generation_Result_Tables(all_records_list, Generation_Top4_Result_Table);
        // following sort will eliminate duplicate records present in the table
    // duplication means same Fitness Value & Points, all such points will be removed
    var sortedr1 = Sort_Generation_Result_Table(r1);
    console.log("Iteration [" + [iteration_count + 1] + "] Detailed Fitness Value Result Table Up-To-Now");
    console.log("===============");
    Print_Generation_Result_Table(sortedr1);


    var r2 = Merge_Generation_Result_Tables(top_records_list, Top_Record_Result);
    // following sort will eliminate duplicate records present in the table
    // duplication means same Fitness Value & Points, all such points will be removed
    var sortedr2 = Sort_Generation_Result_Table(r2);
    console.log("Iteration [" + [iteration_count + 1] + "] Iteration Top Fitness Value Results Table Up-To-Now");
    console.log("===============");
    Print_Generation_Result_Table(sortedr2);


    var master_record = [];

    master_record[0] = Generation_Top4_Result_Table;// sorted generation table of this iteration
    master_record[1] = Top_Record_Result;// topper of this iteration
    master_record[2] = sortedr1; // sorted generation table of all iterations
    master_record[3] = sortedr2; // sorted generation table of TOPPERS all iterations

    return master_record;
    //master_record[3][0][1] // this record to show on screen
    //return sortedr2[0][1];
}



function GENETIC_ALGO_To_Evaluate_FitnessValue_Of_Generation_With_MidPoint_CrossOver(iteration_count, top_records_list, prev_gen_record_list, all_records_list) {

    //console.log("top 4 records after random generation evaluation");
    //Print_Generation_Result_Table(top4_records_list);
    //console.log("top record after random generation  evaluation ");
    //Print_Generation_Result_Table(top_records_list);

    var Generation_Result_Table = [];// result of generation with fitness value
    var maxfitnessvalue = -99999999999;
    var maxfitnessvalueindex = -1
    var maxfitnessvaluerecord = null;

    // Mid Point Cross Over takes 8 values and return 8 values
    var top8_generation = [];

    if (prev_gen_record_list == null || prev_gen_record_list.length <= 0) {

        // Case Ist Iteration
        if (all_records_list == null || all_records_list.length <= 0) {
            alert("error:GENETIC_ALGO_To_Evaluate_FitnessValue_Of_Generation_With_MidPoint_CrossOver");
        }

        //for (var i = 0; i < all_records_list.length; i++) {
        //    top8_generation[i] = all_records_list[i][1];
        //}

        top8_generation[0] = all_records_list[0][1];
        top8_generation[1] = all_records_list[1][1];
        top8_generation[2] = all_records_list[2][1];
        top8_generation[3] = all_records_list[3][1];
        top8_generation[4] = all_records_list[4][1];
        top8_generation[5] = all_records_list[5][1];
        top8_generation[6] = all_records_list[6][1];
        top8_generation[7] = all_records_list[7][1];
    }
    else {

        //var counter = 0; 

        //if (prev_gen_record_list.length > 8) {
        //    counter = 8;
        //}
        //else {
        //    counter = prev_gen_record_list.length;
        //}

        for (var i = 0; i < prev_gen_record_list.length; i++) {
            top8_generation[i] = prev_gen_record_list[i][1];
        }

        //top8_generation[0] = prev_gen_record_list[0][1];
        //top8_generation[1] = prev_gen_record_list[1][1];
        //top8_generation[2] = prev_gen_record_list[2][1];
        //top8_generation[3] = prev_gen_record_list[3][1];
        //top8_generation[4] = prev_gen_record_list[4][1];
        //top8_generation[5] = prev_gen_record_list[5][1];
        //top8_generation[6] = prev_gen_record_list[6][1];
        //top8_generation[7] = prev_gen_record_list[7][1];
    }

    console.log("===============");
    console.log("Iteration [" + [iteration_count+1] + "] Top 8 Records before Mid Point Cross Over ");
    Print_Generation(top8_generation);
    console.log("===============");

    // Binary Cross Over takes 4 values and return 8 values
    var generation = MidPoint_CrossOver_Of_Generation(top8_generation);

    console.log("Iteration [" + [iteration_count+1] + "] New Generation after Mid-Point Cross-Over ");
    Print_Generation(generation);
    console.log("===============");

    var Top_Record_Result = [];
    Top_Record_Result[0] = [];


    for (var i = 0; i < generation.length; i++) {

        var record = generation[i];

        // Seperate the evaluation of fitness value and drawing the record
        var FitnessValue = FindFitnessValueOfRecord(record);

        if (FitnessValue > maxfitnessvalue) {

            maxfitnessvalue = FitnessValue;
            maxfitnessvalueindex = i;
            maxfitnessvaluerecord = record;

            Top_Record_Result[0][0] = FitnessValue;
            Top_Record_Result[0][1] = record;

        }

        var Record_Result = [];
        Record_Result[0] = FitnessValue;
        Record_Result[1] = record;

        Generation_Result_Table[i] = Record_Result;

    }

    console.log("Iteration [" + [iteration_count+1] + "] Mid-Point Cross-Over Generation results");
    Print_Generation_Result_Table(Generation_Result_Table);
    console.log("===============");

    var Generation_Top4_Result_Table = Sort_Generation_Result_Table(Generation_Result_Table);

    //console.log("===============");
    console.log("Iteration [" + [iteration_count+1] + "] Sorted Mid-Point Cross-Over Generation result");
    Print_Generation_Result_Table(Generation_Top4_Result_Table);
    console.log("===============");

    var r1 = Merge_Generation_Result_Tables(all_records_list, Generation_Top4_Result_Table);
    var sortedr1 = Sort_Generation_Result_Table(r1);
    console.log("Iteration [" + [iteration_count + 1] + "] Detailed Fitness Value Result Table Up-To-Now");
    console.log("===============");
    Print_Generation_Result_Table(sortedr1);

    var r2 = Merge_Generation_Result_Tables(top_records_list, Top_Record_Result);
    var sortedr2 = Sort_Generation_Result_Table(r2);
    console.log("Iteration [" + [iteration_count + 1] + "] Iteration Top Fitness Value Results Table Up-To-Now");
    console.log("===============");
    Print_Generation_Result_Table(sortedr2);

    //var master_record = [];

    //master_record[0] = Generation_Top4_Result_Table;// sorted generation table of this iteration
    //master_record[1] = Top_Record_Result;// topper of this iteration
    //master_record[2] = sortedr1; // sorted generation table of all iterations
    //master_record[3] = sortedr2; // sorted generation table of TOPPERS all iterations

    var master_record = [];

    master_record[0] = Generation_Top4_Result_Table;// sorted generation table of this iteration
    master_record[1] = Top_Record_Result;// topper of this iteration
    master_record[2] = sortedr1; // sorted generation table of all iterations
    master_record[3] = sortedr2; // sorted generation table of TOPPERS all iterations

    return master_record;
    //master_record[3][0][1] // this record to show on screen
    //return sortedr2[0][1];
}



function Evaluate_FitnessValue_Of_Seed_Generation_Return_Top4_Records(generation) {

    var Generation_Result_Table = [];// result of generation with fitness value
    var maxfitnessvalue = -1;
    var maxfitnessvalueindex = -1
    var maxfitnessvaluerecord = null;
    var record;
    var FitnessValue;

    for (var i = 0; i < generation.length; i++) {

        record = generation[i];

        // Seperate the evaluation of fitness value and drawing the record
        FitnessValue = FindFitnessValueOfRecord(record);

        if (FitnessValue > maxfitnessvalue) {

            maxfitnessvalue = FitnessValue;
            maxfitnessvalueindex = i;
            maxfitnessvaluerecord = record;
        }

        var Record_Result = [];
        Record_Result[0] = FitnessValue;
        Record_Result[1] = record;

        Generation_Result_Table[i] = Record_Result;

    }

    console.log("Initial Seed Generation Results");
    Print_Generation_Result_Table(Generation_Result_Table);
    console.log("===============");

    //return maxfitnessvaluerecord;

    //var Generation_Top4_Result_Table = Sort_Generation_Result_Table_Return_Top4_Records(Generation_Result_Table);
    var Sorted_Generation_Result_Table = Sort_Generation_Result_Table_Return_Top4_Records(Generation_Result_Table);


    //console.log("===============");
    //console.log("1- top 4 generation result table after sorting ");
    //Print_Generation_Result_Table(Generation_Top4_Result_Table);
    //console.log("===============");

    return Sorted_Generation_Result_Table;


}



function Evaluate_FitnessValue_Of_Seed_Generation_Return_All_Records(generation) {

    var Generation_Result_Table = [];// result of generation with fitness value
    var maxfitnessvalue = -1;
    var maxfitnessvalueindex = -1
    var maxfitnessvaluerecord = null;
    var record;
    var FitnessValue;


    for (var i = 0; i < generation.length; i++) {

        record = generation[i];

        // Seperate the evaluation of fitness value and drawing the record
        FitnessValue = FindFitnessValueOfRecord(record);

        if (FitnessValue > maxfitnessvalue) {

            maxfitnessvalue = FitnessValue;
            maxfitnessvalueindex = i;
            maxfitnessvaluerecord = record;
        }

        var Record_Result = [];
        Record_Result[0] = FitnessValue;
        Record_Result[1] = record;

        Generation_Result_Table[i] = Record_Result;

    }

    console.log("Initial Seed Generation Results");
    Print_Generation_Result_Table(Generation_Result_Table);
    console.log("===============");

    //return maxfitnessvaluerecord;

    var Sorted_Generation_Result_Table = Sort_Generation_Result_Table(Generation_Result_Table);

    //console.log("===============");
    //console.log("1- top 4 generation result table after sorting ");
    //Print_Generation_Result_Table(Generation_Top4_Result_Table);
    //console.log("===============");

    return Sorted_Generation_Result_Table;


}