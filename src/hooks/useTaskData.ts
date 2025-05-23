import { useState, useEffect } from 'react';
import { Task, TaskUpdate } from '../types/Task';

// Mock data
const mockTasks: Task[] = [
  {
    id: '1',
    taskName: 'RT',
    companyName: 'companie1',
    assignedBy: 'John Smith',
    createdOn: '2025-04-02',
    startDate: '2025-04-02',
    startTime: '16:29:00',
    endDate: '2025-04-02',
    endTime: '16:29:00',
    deadline: '2025-04-05',
    status: 'Completed',
    description: 'Complete the research task for client',
    completedAt: '2025-04-02 16:29:00'
  },
  {
    id: '2',
    taskName: 'Test',
    companyName: 'Coding Web',
    assignedBy: 'Sarah Johnson',
    createdOn: '2025-04-02',
    startDate: '0000-00-00',
    startTime: '00:00:00',
    endDate: '0000-00-00',
    endTime: '00:00:00',
    deadline: '2025-04-10',
    status: 'Pending',
    description: 'Test the new website functionality'
  },
  {
    id: '3',
    taskName: 'Design Homepage',
    companyName: 'Apex Solutions',
    assignedBy: 'Michael Brown',
    createdOn: '2025-04-01',
    startDate: '2025-04-01',
    startTime: '09:00:00',
    endDate: '2025-04-03',
    endTime: '17:00:00',
    deadline: '2025-04-05',
    status: 'In-progress',
    description: 'Design the homepage for the client website'
  },
  {
    id: '4',
    taskName: 'Data Analysis',
    companyName: 'Data Insights',
    assignedBy: 'Emily Davis',
    createdOn: '2025-03-28',
    startDate: '2025-03-29',
    startTime: '10:00:00',
    endDate: '2025-04-01',
    endTime: '18:00:00',
    deadline: '2025-04-02',
    status: 'Completed',
    description: 'Analyze the quarterly sales data',
    completedAt: '2025-04-01 18:00:00'
  }
];

export const useTaskData = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  
  const updateTaskStatus = (taskId: string, update: TaskUpdate) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId
          ? { ...task, ...update }
          : task
      )
    );
  };

  // In a real app, this would fetch from an API
  useEffect(() => {
    // Simulating API fetch
    const fetchTasks = () => {
      // Mock API delay
      setTimeout(() => {
        setTasks(mockTasks);
      }, 500);
    };
    
    fetchTasks();
  }, []);
  
  return { tasks, setTasks, updateTaskStatus };
};