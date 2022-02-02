interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "Joe",
    lastName: "Doe",
    age: 18,
    location: "World1"
};
let student2: Student = {
    firstName: "Doe",
    lastName: "Joe",
    age: 19,
    location: "World2"
};

let studentsList: Student[] = [student1, student2];

let table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach(student => {
    let newRow = document.createElement('tr');
    let cell = document.createElement('td');

    cell.innerHTML = student.lastName;
    newRow.appendChild(cell);

    cell.innerHTML = student.location;
    newRow.appendChild(cell);

    table.appendChild(newRow);
});

