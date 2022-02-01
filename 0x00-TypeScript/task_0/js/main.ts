interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let studentsList: Array<Student>;

let student1: Student = {
    firstName: "Joe", lastName: "Doe", age: 18, location: "World1"
};
let student2: Student = {
    firstName: "Doe", lastName: "Joe", age: 19, location: "World2"
};

studentsList = [student1, student2];

let table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach(() => {
    let newRow = document.createElement('tr');

    let data = document.createElement('td');
    data.innerHTML = student1.lastName;
    newRow.appendChild(data);

    data = document.createElement('td');
    data.innerHTML = student2.lastName;
    newRow.appendChild(data);

    table.appendChild(newRow);
});
