import { AlertTriangle, Clock, CheckCircle } from 'lucide-react';
import TaskTable from '../components/TaskTable';
import StatusCard from '../components/StatusCard';
import { useTaskData } from '../hooks/useTaskData';

const TaskReport = () => {
  const { tasks } = useTaskData();
  
  const pendingTasks = tasks.filter(task => task.status === 'Pending');
  const inProgressTasks = tasks.filter(task => task.status === 'In-progress');
  const completedTasks = tasks.filter(task => task.status === 'Completed');
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Task Report</h1>
        <div className="flex items-center text-sm text-gray-500">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Task Report</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatusCard 
          title="Pending" 
          count={pendingTasks.length} 
          icon={<AlertTriangle size={24} className="text-red-500" />} 
          bgColor="bg-red-100" 
          textColor="text-red-600" 
        />
        
        <StatusCard 
          title="In-progress" 
          count={inProgressTasks.length} 
          icon={<Clock size={24} className="text-amber-500" />} 
          bgColor="bg-amber-100" 
          textColor="text-amber-600" 
        />
        
        <StatusCard 
          title="Completed" 
          count={completedTasks.length} 
          icon={<CheckCircle size={24} className="text-green-500" />} 
          bgColor="bg-green-100" 
          textColor="text-green-600" 
        />
      </div>
      
      <div>
        <h2 className="text-xl font-medium text-gray-800 mb-4">Task-Report</h2>
        <TaskTable tasks={tasks} />
      </div>
    </div>
  );
};

export default TaskReport;