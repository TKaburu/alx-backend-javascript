const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  try {
    // read the database file synchronously
    const content = fs.readFileSync(path.resolve(filePath), 'utf8');
    // split the content into lines & make sure the line is not empty
    const lines = content.split('\n').filter((line) => line.trim() !== '');
    const numberOfStudents = lines.length - 1;
    console.log(`Number of students: ${numberOfStudents}`);

    const students = lines.slice(1).map((line) => line.split(','));
    const fields = {}; // will group students according to their fields

    // get the name and field of the student
    students.forEach((student) => {
      const firstname = student[0].trim();
      const field = student[3].trim();
      // if field already exsists add the name to the field
      if (field in fields) {
        fields[field].push(firstname);
      } else {
        fields[field] = [firstname];
      }
    });

    // loop through the field
    for (const [field, firstnames] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
    }
  } catch (err) {
    // i database is not available throw an error
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents
