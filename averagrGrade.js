function calculateGrade(marks) {
    let sum = 0;
    for (let i of marks) {
        sum += i;
    }
     let marksAverage = sum / marks.length;
     
     if (marksAverage>=0 && marksAverage <=59) {
         return "F";
     } 
     if (marksAverage>=60 && marksAverage <=69){ 
        return "D";
     }
     if (marksAverage>=70 && marksAverage <=79){ 
        return "C";
     }
     if (marksAverage>=80 && marksAverage <=89){ 
        return "B";
     }
     if (marksAverage>=90 && marksAverage <=100){ 
        return "A";
     }
}

const marks = [90, 50];
console.log(calculateGrade(marks))





function calculateAverageOPT(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
     let average = sum / array.length;
     return average;
     }
     
function calculateGradeOPT(array) {
    let average = calculateAverageOPT(array);
     if (average<60) return "F";
     if (average<70) return "D";
     if (average<80) return "C";
     if (average<90) return "B";
    return "A";
}

const array = [90, 50, 50];
console.log(calculateGradeOPT(array))