/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    export interface Teacher {
      experienceTeachingJava?: number;
    }
  
    export class Java extends Subject {
      public getRequirements(): string {
        return 'Here is the list of requirements for Java';
      }
  
      public getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingJava > 0) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return 'No available teacher';
        }
      }
    }
  }