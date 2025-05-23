import { useState } from 'react';
import { Check, AlertCircle, Edit, Info, CheckCircle2 } from 'lucide-react';
import { Task, TaskUpdate } from '../types/Task';

interface TaskTableProps {
  tasks: Task[];
  onUpdateTask?: (taskId: string, update: TaskUpdate) => void;
}

const TaskTable = ({ tasks, onUpdateTask }: TaskTableProps) => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filter tasks based on search term
  const filteredTasks = tasks.filter(task => 
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Calculate pagination
  const indexOfLastTask = currentPage * entriesPerPage;
  const indexOfFirstTask = indexOfLastTask - entriesPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const handleCompleteTask = (taskId: string) => {
    if (onUpdateTask) {
      const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
      onUpdateTask(taskId, { status: 'Completed', completedAt: now });
    }
  };
  
  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    if (status === 'Completed') {
      return <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-800">Completed</span>;
    } else if (status === 'Pending') {
      return <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-800">Pending</span>;
    } else {
      return <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">In-progress</span>;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 flex flex-wrap justify-between items-center border-b">
        <div className="flex items-center mb-2 md:mb-0">
          <select
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            className="border rounded p-1 text-sm"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="ml-2 text-sm text-gray-600">entries per page</span>
        </div>
        
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="border rounded p-2 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sr.no.
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assigned By
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Task Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Task Created on
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Time
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Time
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Deadline
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentTasks.map((task, index) => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {indexOfFirstTask + index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.assignedBy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.companyName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {task.taskName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.createdOn}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.startDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.startTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.endDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.endTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.deadline}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={task.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {task.status === 'Completed' ? (
                    <div className="flex items-center">
                      <Check size={20} className="text-green-600" />
                      <span className="ml-2 text-xs text-gray-500">{task.completedAt}</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      {task.status === 'Pending' ? (
                        <AlertCircle size={20} className="text-amber-600" />
                      ) : (
                        <Info size={20} className="text-amber-600" />
                      )}
                      {onUpdateTask && (
                        <button
                          onClick={() => handleCompleteTask(task.id)}
                          className="text-green-600 hover:text-green-900 p-1"
                          title="Mark as completed"
                        >
                          <CheckCircle2 size={20} />
                        </button>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-4 py-3 flex items-center justify-between border-t">
        <div className="text-sm text-gray-700">
          Showing {indexOfFirstTask + 1} to {Math.min(indexOfLastTask, filteredTasks.length)} of {filteredTasks.length} entries
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(filteredTasks.length / entriesPerPage)))}
              disabled={currentPage === Math.ceil(filteredTasks.length / entriesPerPage)}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TaskTable;