interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
};

const student1: Student = {
    firstName: "Juan",
    lastName: "Gonzales",
    age: 30,
    location: "Bogota"
};
const student2: Student = {
    firstName: "Pedor",
    lastName: "Gonzales",
    age: 30,
    location: "Bogota"
};

let studentsList: Student[] = [student1, student2];

let table = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach(student => {
    let tr = table.insertRow();
    let tdName = tr.insertCell();
    let tdLocation = tr.insertCell();
    tdName.innerText = student.firstName;
    tdLocation.innerText = student.location;
});
