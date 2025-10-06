import Dexie, { type Table } from "dexie";

export class StudyDB extends Dexie {
  subjects!: Table<Subject, number>;
  exams!: Table<Exam, number>;
  goals!: Table<Goal, number>;

  constructor() {
    super("StudyDB");
    this.version(1).stores({
      subjects: "++id, name, category",
      exams: "++id, name",
      goals: "++id,subjectId,examId",
    });
  }
}

export const db = new StudyDB();
