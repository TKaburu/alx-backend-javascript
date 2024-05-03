export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
} 

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export const Director = class Director implements DirectorInterface {
  workFromHome() : string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export const Teacher = class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  // if salary is a number and < 500 return Teacher()
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  else {
    return new Director();
    }
  }
