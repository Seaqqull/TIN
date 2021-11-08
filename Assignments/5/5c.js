let student = {
    courses: ["TIN", "BYT", "ZPR"]
};

console.log("Prototype");
console.log(student);

let completedStudent = Student("Dmytro", "Zherdiev", 0, student);
console.log("\nComplete student");
console.log(completedStudent);


function Student(firstName, lastName, id, student) {
    return {
        id: id,
        firstName: firstName,
        lastName: lastName,
        courses: [...student['courses']]
    }
}
