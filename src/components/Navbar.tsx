import { Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();
  
  return (
    <header className="bg-white border-b">
      <div className="flex items-center justify-between px-4 py-3">
        <button 
          className="text-gray-500 focus:outline-none md:hidden"
          aria-label="Menu"
        >
          <Menu size={24} />
        </button>
        
        <div className="flex items-center ml-auto">
          <div className="relative">
            <button 
              className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <span className="mr-2">{user?.name || 'User'}</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 14l-5-5h10l-5 5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;