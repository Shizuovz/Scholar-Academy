import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogOut, BookOpen, Presentation, Image as ImageIcon, Users, Menu, X } from 'lucide-react';

export const AdminLayout: React.FC = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) => 
    `flex items-center gap-3 px-4 py-3 md:py-2 rounded-lg transition-colors ${
      isActive(path) 
        ? 'bg-primary/10 text-primary font-medium' 
        : 'text-on-surface hover:bg-surface-container'
    }`;

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col md:flex-row w-full overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden bg-surface border-b border-surface-variant p-4 flex justify-between items-center z-20 w-full shrink-0">
        <h1 className="text-xl font-bold text-primary">Admin Dashboard</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-on-surface hover:bg-surface-container rounded-lg">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar overlay for mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-30" onClick={closeMenu} />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-40
        w-64 bg-surface border-r border-surface-variant flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 hidden md:block">
          <h1 className="text-xl font-bold text-primary">Admin Dashboard</h1>
          <p className="text-sm text-secondary truncate mt-1">{user?.email}</p>
        </div>
        <div className="p-6 md:hidden border-b border-surface-variant mb-4">
          <p className="text-sm font-medium text-on-surface truncate">{user?.email}</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          <Link to="/admin/dashboard" onClick={closeMenu} className={linkClass('/admin/dashboard')}>
            <BookOpen size={20} />
            Courses
          </Link>
          <Link to="/admin/initiatives" onClick={closeMenu} className={linkClass('/admin/initiatives')}>
            <Presentation size={20} />
            Initiatives
          </Link>
          <Link to="/admin/media" onClick={closeMenu} className={linkClass('/admin/media')}>
            <ImageIcon size={20} />
            Global Media
          </Link>
          <Link to="/admin/requests" onClick={closeMenu} className={linkClass('/admin/requests')}>
            <Users size={20} />
            Requests
          </Link>
        </nav>
        <div className="p-4 border-t border-surface-variant shrink-0">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 md:py-2 w-full text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-[calc(100vh-73px)] md:h-screen w-full overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-surface-container-low p-4 md:p-6 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
