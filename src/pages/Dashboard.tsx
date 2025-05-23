import { ClipboardCheck, Clock, AlertTriangle } from 'lucide-react';
import StatusCard from '../components/StatusCard';
import { useTaskData } from '../hooks/useTaskData';

const Dashboard = () => {
  const { tasks } = useTaskData();
  
  const pendingTasks = tasks.filter(task => task.status === 'Pending');
  const inProgressTasks = tasks.filter(task => task.status === 'In-progress');
  const completedTasks = tasks.filter(task => task.status === 'Completed');
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to your task management dashboard</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          icon={<ClipboardCheck size={24} className="text-green-500" />} 
          bgColor="bg-green-100" 
          textColor="text-green-600" 
        />
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Recent Tasks</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Task Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deadline
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.slice(0, 5).map((task) => (
                <tr key={task.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {task.taskName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task.companyName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${task.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        task.status === 'Pending' ? 'bg-red-100 text-red-800' : 
                        'bg-yellow-100 text-yellow-800'}`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task.deadline}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;