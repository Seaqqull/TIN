let student = new Student("Dmytro", "Zherdiev", 0, [1, 2, 3, 4, 5]);
printStudent(student);

console.log("");
student.fullname = "Adam Smith";
printStudent(student);


function Student(firstName, lastName, id, grades) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
    Object.defineProperties(this, {
        "AVG": {
            "get": function() { return (this.grades.reduce((accumulator, num) => accumulator + num, 0)) / this.grades.length; }
        }
    });
    Object.defineProperties(this, {
        "fullname": {
            "get": function() { return this.firstName + " " + this.lastName; },
            "set": function(completeName) {
                let names = completeName.split(" ");

                this.firstName = names[0] || "";
                this.lastName = names[1] || "";
            }
        }
    });
}

function printStudent(givenStudent) {
    console.log("Student with id=" + givenStudent['id']);
    console.log("Has name: " + givenStudent['firstName'] + " and surname: " + givenStudent['lastName']);
    console.log("Average grade: " + givenStudent.AVG);
}