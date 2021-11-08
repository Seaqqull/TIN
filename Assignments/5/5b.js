let student = new Student("Dmytro", "Zherdiev", 0, [1, 2, 3, 4, 5]);
printStudent(student);


function Student(firstName, lastName, id, grades) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}

function printStudent(givenStudent) {
    console.log("Student with id=" + givenStudent['id']);
    console.log("Has name: " + givenStudent['firstName'] + " and surname: " + givenStudent['lastName']);
    console.log("Average grade: " + (givenStudent['grades'].reduce((accumulator, num) => accumulator + num, 0)) / givenStudent['grades'].length);
}