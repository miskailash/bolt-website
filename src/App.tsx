import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import TaskReport from './pages/TaskReport';
import AddTask from './pages/AddTask';
import ViewTask from './pages/ViewTask';
import AssignTask from './pages/AssignTask';
import UserManagement from './pages/UserManagement';
import NotFound from './pages/NotFound';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="task-report" element={<TaskReport />} />
            <Route path="add-task" element={<AddTask />} />
            <Route path="view-task" element={<ViewTask />} />
            <Route path="assign-task" element={<AssignTask />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;