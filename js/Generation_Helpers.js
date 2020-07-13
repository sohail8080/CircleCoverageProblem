// passed table may have duplicate records, means same fitness value & record/4 points
// following sort will eliminate duplicate records present in the table
// duplication means same Fitness Value & Points, all such points will be removed   
function Sort_Generation_Result_Table(Generation_Result_Table) {

    // following array will hold the new generation table
    var New_Generation_Result_Table = [];
    var FitnessValue_List = [];
    var FitnessValue_Sorted_List = [];
    var FitnessValue_All_List = [];

    //var arrindex = 0;
    //for (var i = FitnessValue_List.length - 1; i > FitnessValue_List.length - 5; i--) {

    //    FitnessValue_All_List[arrindex] = FitnessValue_List[i];
    //    arrindex++;
    //}

    for (var i = 0; i < Generation_Result_Table.length; i++) {
        FitnessValue_List[i] = parseInt(Generation_Result_Table[i][0]);
    }

    const compareNumbers = (a, b) => a - b;
    FitnessValue_List.sort(compareNumbers);
    //console.log("fitness array sorting " + FitnessValue_List);
    FitnessValue_List.reverse();
    //console.log("fitness array reverse " + FitnessValue_List);

    // we are taking all value not four
    for (var i = 0; i < FitnessValue_List.length; i++) {
        FitnessValue_All_List[i] = FitnessValue_List[i];
    }

    //console.log("===============");
    //console.log("Sorted Fitness Values  " + FitnessValue_All_List);

    // use this index variable, other wise null records will be inserted and cause hell 
    // of problem
    var index = 0;

    //alert("FitnessValue_All_List.length" + FitnessValue_All_List.length);
    //alert("Generation_Result_Table.length" + Generation_Result_Table.length);

    //alert("FitnessValue_All_List" + FitnessValue_All_List);
    //alert("Generation_Result_Table" + Generation_Result_Table);

    // loop all fitness values those are sorted
    for (var i = 0; i < FitnessValue_All_List.length; i++) {

        // loop whole result table 
        for (var j = 0; j < Generation_Result_Table.length; j++) {

            // if fitness values are matched & record is not already inserted
            // add value to the point
            if (Generation_Result_Table[j][0] == FitnessValue_All_List[i]) {

                //console.log("Sorted Result Table up to now ");
                //Print_Generation_Result_Table(New_Generation_Result_Table);

                var resss = RecordDuplicated(New_Generation_Result_Table, Generation_Result_Table[j][1]);

                //console.log("Fitness Value " + FitnessValue_All_List[i] + " Record to Match " + Generation_Result_Table[j][1] + " Record Duplicated " + resss);
                //console.log("===============");

                if (!resss) {

                    // record not inserted already
                    New_Generation_Result_Table[index] = Generation_Result_Table[j];
                    index++;
                    break;
                }
            }
        }
    }

    return New_Generation_Result_Table;

}


function Sort_Generation_Result_Table_Return_Top4_Records(Generation_Result_Table) {

    var New_Generation_Result_Table = [];
    var FitnessValue_List = [];
    var FitnessValue_Sorted_List = [];
    var FitnessValue_Top4_List = [];

    //var arrindex = 0;
    //for (var i = FitnessValue_List.length - 1; i > FitnessValue_List.length - 5; i--) {

    //    FitnessValue_Top4_List[arrindex] = FitnessValue_List[i];
    //    arrindex++;
    //}

    for (var i = 0; i < Generation_Result_Table.length; i++) {
        FitnessValue_List[i] = parseInt(Generation_Result_Table[i][0]);
    }

    const compareNumbers = (a, b) => a - b;
    FitnessValue_List.sort(compareNumbers);
    //console.log("fitness array sorting " + FitnessValue_List);
    FitnessValue_List.reverse();
    //console.log("fitness array reverse " + FitnessValue_List);


    for (var i = 0; i < 4; i++) {
        FitnessValue_Top4_List[i] = FitnessValue_List[i];
    }

    //console.log("===============");
    //console.log("Top 4 Fitness Values  " + FitnessValue_Top4_List);

    var index = 0;

    for (var i = 0; i < FitnessValue_Top4_List.length; i++) {

        for (var j = 0; j < Generation_Result_Table.length; j++) {

            if (Generation_Result_Table[j][0] == FitnessValue_Top4_List[i]) {
                var resss = RecordDuplicated(New_Generation_Result_Table, Generation_Result_Table[j][1]);

                //console.log("New_Generation_Result_Table" + New_Generation_Result_Table);
                //console.log("Generation_Result_Table[j][1]"+ Generation_Result_Table[j][1]);
                //console.log("Fitness Value " + FitnessValue_Top4_List[i] + " Result " + resss);

                if (!resss) {

                    New_Generation_Result_Table[index] = Generation_Result_Table[j];
                    index++;
                    break;
                }
            }
        }
    }

    return New_Generation_Result_Table;

}


function Merge_Generation_Result_Tables(Generation_Result_Table1, Generation_Result_Table2) {

    var Generation_Result_Table_Final = [];

    var index = 0;

    for (var i = 0; i < Generation_Result_Table1.length; i++) {

        Generation_Result_Table_Final[index] = Generation_Result_Table1[i];
        index++;
    }

    for (var i = 0; i < Generation_Result_Table2.length; i++) {

        Generation_Result_Table_Final[index] = Generation_Result_Table2[i];
        index++;
    }

    return Generation_Result_Table_Final;

}


function RecordDuplicated(Generation_Result_Table, Record) {

    //alert("RecordDuplicated");

    if (Generation_Result_Table.length <= 0) {
        return false;
    }

    var flag = true;

    for (var i = 0; i < Generation_Result_Table.length; i++) {

        flag = true;

        for (var j = 0; j < Record.length; j++) {

            //try {
            if ((Generation_Result_Table[i][1][j][0] != Record[j][0]) ||
                (Generation_Result_Table[i][1][j][1] != Record[j][1])) {
                flag = false;
                break;
            }
            //}
            //catch (err) {
            //    console.error(" i =" + i + " j =" + j);
            //    console.error("Generation_Result_Table Length " + Generation_Result_Table.length);
            //    console.error("Generation_Result_Table Full " + Print_Generation_Result_Table(Generation_Result_Table));
            //    console.error("Generation_Result_Table Element at " + [i] + " " + Generation_Result_Table[i]);
            //    console.error("Record " + Record[j]);
            //    //throw err;
            //}
        }

        if (flag == true) {

            //for (var j = 0; j < 4; j++) {
            //    console.error(Generation_Result_Table[i][1][j][0]+ "," + Generation_Result_Table[i][1][j][1]+ "==" + Record[j][0] + "," + Record[j][1]);
            //}

            break;
        }
    }

    return flag;
}


function Print_Generation_Result_Table(Generation_Result_Table) {

    for (var i = 0; i < Generation_Result_Table.length; i++) {

        var flag = false;


        if (Generation_Result_Table[i] == null) {
            console.error("Generation_Result_Table.length " + Generation_Result_Table.length);
            console.error("Full record is null at index " + i);
            flag = true;
            return;
        }

        if (Generation_Result_Table[i][0] == null) {
            console.error("Fitness Value is Null at index " + i);
            flag = true;
        }

        if (Generation_Result_Table[i][1] == null) {
            console.error("Record is Null at index " + i);
            flag = true;
        }

        if (flag == true) { return; }

        console.log("Record " + (i + 1) + " Fitness Value " + Generation_Result_Table[i][0] + " ::  Circle Points " + Generation_Result_Table[i][1]);

    }

}


function Print_Generation(Generation) {

    for (var i = 0; i < Generation.length; i++) {
        console.log([i + 1] + " Record " + Generation[i]);
    }

}


function xxxSort_Generation_Result_Table(Generation_Result_Table) {

    var Sort_Generation_Result_Table = [];
    var FitnessValue_List = [];
    var FitnessValue_Sorted_List = [];

    for (var i = 0; i < Generation_Result_Table.length; i++) {
        FitnessValue_List[i] = Generation_Result_Table[i][0];
    }

    FitnessValue_Sorted_List = FitnessValue_List.sort().reverse();

    var index = 0;

    for (var i = 0; i < FitnessValue_Sorted_List.length; i++) {

        for (var j = 0; j < Generation_Result_Table.length; j++) {

            if (Generation_Result_Table[j][0] == FitnessValue_Sorted_List[i]) {

                Sort_Generation_Result_Table[i] = Generation_Result_Table[j];
                //index++;
                break;

            }
        }
    }

    //console.log("FitnessValue_Sorted_List" + FitnessValue_Sorted_List);
    //console.log(Generation_Result_Table);
    //console.log("Ist" + Sort_Generation_Result_Table[0]);
    //console.log("2nd" + Sort_Generation_Result_Table[1]);
    //console.log("3rd" + Sort_Generation_Result_Table[2]);
    //console.log("4th" + Sort_Generation_Result_Table[3]);

    return Sort_Generation_Result_Table;

}