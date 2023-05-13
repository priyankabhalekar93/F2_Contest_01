/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
];

function fstudent(student) {
    if (student.marks > 50) {

        console.log(student)
    }

}

function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(fstudent)
}

function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(fstudent)
}

function addData() {
    //Write your code here, just console.log
    var sobj = { id: 4, name: "susan", age: "20", marks: 45 }
    arr.push(sobj);
    console.log(arr);
}

function removeFailedStudent() {
    //Write your code here, just console.log
}

function concatenateArray() {


    let arr1 = [
        { id: 5, name: "priya", age: "17", marks: 88 },
        { id: 6, name: "riya", age: "21", marks: 82 },
        { id: 7, name: "sam", age: "18", marks: 33 },
    ];

    var finalarr = [];

    arr.forEach(function(item) { finalarr.push(item) });
    arr1.forEach(function(item) {
        finalarr.push(item);
    });

    console.log(finalarr);
}