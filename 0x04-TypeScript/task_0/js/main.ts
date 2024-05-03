interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName : "John",
    lastName : "Doe",
    age : 25,
    location : "Paris"
  }
  
  const student2: Student = {
    firstName : "Jane",
    lastName : "Doe",
    age : 23,
    location : "New York"
  }
  const studentsList: Student[] = [student1, student2];
  
  // Render a table
  const table = document.createElement("table");
  // Iterate over studentsList and create a new row for each student
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
  // Create and append first name cell
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);
  
  // Create and append location cell
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);
  
  // Append row to table
  table.appendChild(row);
  });
  
  // Append table to body
  document.body.appendChild(table);
