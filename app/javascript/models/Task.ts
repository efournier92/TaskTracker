export class Task {
  id: number;
  title: string;
  description: string;
  isComplete: boolean;
  dueDate: Date;

  constructor(title: string, description: string, dueDate: Date) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}
