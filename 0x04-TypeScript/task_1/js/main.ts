export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const teacher1: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

interface printTeacherFunction {
  (firstName: string, lastName: string) : string;
}

const  printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}

export interface StudentClassInterface {
  workOnHoneWork(): string;
  displayName(): string;
}
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomeWork(): string {
    return 'Currently working';
  }

  displayName(): string {
    return `${this.firstName}`;
  }
}

console.log(teacher1);
console.log(director1);
console.log(printTeacher('John', 'Doe'));