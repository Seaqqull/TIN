class Student {
    constructor(firstName, lastName, id, grades) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }

    get AVG() {
        return (this.grades.reduce((accumulator, num) => accumulator + num, 0)) / this.grades.length;
    };

    get fullname() {
        return this.firstName + " " + this.lastName;
    }

    set fullnale(completeName) {
        let names = completeName.split(" ");

        this.firstName = names[0] || "";
        this.lastName = names[1] || "";
    }
}

let student = new Student("Dmytro", "Zherdiev", 0, [1, 2, 3, 4, 5]);
printStudent(student);

console.log("");
student.fullname = "Adam Smith";
printStudent(student);


function printStudent(givenStudent) {
    console.log("Student with id=" + givenStudent['id']);
    console.log("Has name: " + givenStudent['firstName'] + " and surname: " + givenStudent['lastName']);
    console.log("Average grade: " + givenStudent.AVG);
}