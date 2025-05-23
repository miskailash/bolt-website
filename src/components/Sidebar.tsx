import { Link, useLocation } from 'react-router-dom';
import { 
  ClipboardList, 
  PlusCircle, 
  Eye, 
  UserPlus,
  Users,
  LogOut
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { logout, isAdmin } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    {
      title: 'Task Management',
      icon: <ClipboardList size={18} />,
      children: [
        { name: 'Add Task', path: '/add-task', icon: <PlusCircle size={16} /> },
        { name: 'View Task', path: '/view-task', icon: <Eye size={16} /> },
        { name: 'Assign Task', path: '/assign-task', icon: <UserPlus size={16} /> },
      ],
    },
  ];

  if (isAdmin) {
    menuItems.push({
      title: 'Administration',
      icon: <Users size={18} />,
      children: [
        { name: 'User Management', path: '/user-management', icon: <Users size={16} /> },
      ],
    });
  }

  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <img 
          src="https://images.pexels.com/photos/20440051/pexels-photo-20440051.jpeg" 
          alt="TopGuard Logo" 
          className="h-12 object-contain"
        />
      </div>
      
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-2">
          {menuItems.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-700">
                <span className="mr-2">{item.icon}</span>
                {item.title}
              </div>
              
              <div className="ml-6 space-y-1">
                {item.children.map((child, childIdx) => (
                  <Link
                    key={childIdx}
                    to={child.path}
                    className={`flex items-center px-3 py-2 text-sm rounded-md ${
                      isActive(child.path)
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-2">{child.icon}</span>
                    {child.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          
          <button
            onClick={logout}
            className="flex items-center w-full px-3 py-2 mt-4 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
          >
            <LogOut size={18} className="mr-2" />
            Log out
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;