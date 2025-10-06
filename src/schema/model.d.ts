interface Subject {
  id: number;
  name: string;
  color: string;
  icon: string;
  weight: number;
  category: string;
  tabs: string[];
}

interface Exam {
  id: number;
  name: string;
  weight: number;
  color: string;
  icon: string;
}

interface Goal {
  id?: number;
  examId: number;
  subjectId: number;
  targetScore: number;
  score?: number;
  updateAt?: string;
}
