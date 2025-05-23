export interface Task {
  id: string;
  taskName: string;
  companyName: string;
  assignedBy: string;
  createdOn: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  deadline: string;
  status: 'Pending' | 'In-progress' | 'Completed';
  description?: string;
  completedAt?: string;
}

export interface TaskUpdate {
  status: Task['status'];
  completedAt?: string;
}