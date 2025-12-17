import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// --- IMPORTS PHẦN CAPSTONE (BlogDash) ---
import { AuthProvider } from './blogdash/AuthContext';
import Login from './blogdash/Login';
import DashboardLayout from './blogdash/DashboardLayout';
import PostList from './blogdash/PostList';
import PostDetail from './blogdash/PostDetail';
import ProtectedRoute from './blogdash/ProtectedRoute';

// --- IMPORTS PHẦN BÀI TẬP (Exercises) ---
// Đảm bảo bạn đã tạo file Layout.jsx trong folder components
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import UserProfile from './components/UserProfile';

const router = createBrowserRouter([
  // =========================================================
  // PHẦN A: CAPSTONE PROJECT (BLOGDASH) - Trang chủ "/"
  // =========================================================
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <PostList />
          },
          {
            path: "post/:postId",
            element: <PostDetail />
          }
        ]
      }
    ]
  },

  // =========================================================
  // PHẦN B: BÀI TẬP THỰC HÀNH (LAB EXERCISES) - "/exercises"
  // =========================================================
  {
    path: "/exercises",
    element: <Layout />, // Component này chứa ThemeContext
    children: [
      {
        index: true, // Tương ứng với /exercises
        element: <Home />, 
      },
      {
        path: "about", // Tương ứng với /exercises/about
        element: <About />,
      },
      {
        path: "users/:userId", // Tương ứng với /exercises/users/123
        element: <UserProfile />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Bọc toàn bộ App trong AuthProvider để phần BlogDash hoạt động */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);