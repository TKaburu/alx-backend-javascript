var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "Paris"
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 23,
    location: "New York"
};
var studentsList = [student1, student2];
// Render a table
var table = document.createElement("table");
// Iterate over studentsList and create a new row for each student
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    // Create and append first name cell
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    // Create and append location cell
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    // Append row to table
    table.appendChild(row);
});
// Append table to body
document.body.appendChild(table);
