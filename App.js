import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, BookOpen, Calendar, ClipboardList, Settings, Bell, 
  Search, Menu, X, Plus, Sparkles, LogOut, ChevronRight,
  UserCircle, CheckSquare, Send, MessageSquare, FileText, Camera,
  Video, Moon, Sun, TrendingUp, Users, CheckCircle, Activity, Zap
} from 'lucide-react';

// --- PREMIUM UI CSS-IN-JS ---
const injectProfessionalStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --font-family: 'SF Pro Display', 'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      --font-weight-heading: 600;
      --font-weight-body: 500;
      --letter-spacing-tight: -0.02em;
      --letter-spacing-normal: 0em;
      --line-height-body: 1.5;
      --line-height-heading: 1.3;
      
      /* Light Mode Colors */
      --bg-main-light: #ffffff;
      --bg-secondary-light: #f8fafc;
      --bg-tertiary-light: #f1f5f9;
      --card-bg-light: #ffffff;
      --sidebar-bg-light: #ffffff;
      --color-primary-light: #0f172a;
      --color-secondary-light: #64748b;
      --color-muted-light: #94a3b8;
      --border-light-light: #e2e8f0;
      --border-dark-light: #e2e8f0;
      --highlight-light: #e8f0fe;
      --highlight-border-light: #c2e7ff;
      
      /* Dark Mode Colors */
      --bg-main-dark: #121212;
      --bg-secondary-dark: #1e1e1e;
      --bg-tertiary-dark: #2d2d2d;
      --card-bg-dark: #1e1e1e;
      --sidebar-bg-dark: #1e1e1e;
      --color-primary-dark: #e8eaed;
      --color-secondary-dark: #9aa0a6;
      --color-muted-dark: #5f6368;
      --border-light-dark: #333333;
      --border-dark-dark: #424242;
      --highlight-dark: #2d3748;
      --highlight-border-dark: #4a5568;
      --accent-dark: #bb86fc;
      
      /* Default to light mode */
      --bg-main: var(--bg-main-light);
      --bg-secondary: var(--bg-secondary-light);
      --bg-tertiary: var(--bg-tertiary-light);
      --card-bg: var(--card-bg-light);
      --sidebar-bg: var(--sidebar-bg-light);
      --color-primary: var(--color-primary-light);
      --color-secondary: var(--color-secondary-light);
      --color-muted: var(--color-muted-light);
      --border-light: var(--border-light-light);
      --border-dark: var(--border-dark-light);
      --highlight: var(--highlight-light);
      --highlight-border: var(--highlight-border-light);
      --accent: var(--accent-dark);
    }
    
    /* Dark mode styles */
    body.dark-mode {
      --bg-main: var(--bg-main-dark);
      --bg-secondary: var(--bg-secondary-dark);
      --bg-tertiary: var(--bg-tertiary-dark);
      --card-bg: var(--card-bg-dark);
      --sidebar-bg: var(--sidebar-bg-dark);
      --color-primary: var(--color-primary-dark);
      --color-secondary: var(--color-secondary-dark);
      --color-muted: var(--color-muted-dark);
      --border-light: var(--border-light-dark);
      --border-dark: var(--border-dark-dark);
      --highlight: var(--highlight-dark);
      --highlight-border: var(--highlight-border-dark);
      --accent: var(--accent-dark);
      transition: background-color 0.3s ease, color 0.3s ease;
    }  

    * {
      box-sizing: border-box;
    }

    body {
      font-family: var(--font-family);
      font-weight: var(--font-weight-body);
      background-color: var(--bg-main);
      color: var(--color-primary);
      line-height: var(--line-height-body);
      letter-spacing: var(--letter-spacing-normal);
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-family);
      font-weight: var(--font-weight-heading);
      line-height: var(--line-height-heading);
      letter-spacing: var(--letter-spacing-tight);
      margin: 0;
      margin-bottom: 0.75rem;
      color: var(--color-primary);
    }

    h1 { font-size: 28px; }
    h2 { font-size: 26px; }
    h3 { font-size: 24px; }
    h4 { font-size: 22px; }
    h5 { font-size: 20px; }
    h6 { font-size: 18px; }

    /* Subject banner font fixes */
    .course-card .course-title {
      font-size: 14px !important;
      line-height: 1.2 !important;
      font-weight: 600 !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    .course-card .course-code {
      font-size: 12px !important;
      line-height: 1.1 !important;
      font-weight: 500 !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    /* Mobile optimization */
    @media (max-width: 768px) {
      .course-card .course-title {
        font-size: 12px !important;
      }
      .course-card .course-code {
        font-size: 10px !important;
      }
    }

    p {
      font-family: var(--font-family);
      font-weight: var(--font-weight-body);
      line-height: var(--line-height-body);
      letter-spacing: var(--letter-spacing-normal);
      margin: 0;
      margin-bottom: 1rem;
      color: var(--color-primary);
    }

    .text-secondary {
      color: var(--color-secondary);
    }

    .text-muted {
      color: var(--color-muted);
    }

    .heading-large {
      font-size: 28px;
      font-weight: var(--font-weight-heading);
      letter-spacing: var(--letter-spacing-tight);
      line-height: var(--line-height-heading);
      color: var(--color-primary);
    }

    .heading-medium {
      font-size: 24px;
      font-weight: var(--font-weight-heading);
      letter-spacing: var(--letter-spacing-tight);
      line-height: var(--line-height-heading);
      color: var(--color-primary);
    }

    .body-text {
      font-size: 16px;
      font-weight: var(--font-weight-body);
      line-height: var(--line-height-body);
      letter-spacing: var(--letter-spacing-normal);
      color: var(--color-primary);
    }

    .caption-text {
      font-size: 14px;
      font-weight: var(--font-weight-body);
      line-height: var(--line-height-body);
      letter-spacing: var(--letter-spacing-normal);
      color: var(--color-secondary);
    }

    /* Google Classroom Sidebar Styles */
    .sidebar-item {
      minHeight: 60px;
      padding: 12px 16px;
      margin: 2px 8px;
      border-radius: 25px;
      transition: all 0.2s ease;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 12px;
      position: relative;
    }

    .sidebar-item:hover {
      background-color: #f1f3f4;
    }

    .sidebar-item.active {
      background-color: #e8f0fe;
      border: 1px solid #c2e7ff;
      font-weight: 500;
      margin: 2px 4px;
    }

    .sidebar-label {
      font-size: 14px;
      font-weight: 500;
      color: #202124;
      font-family: var(--font-family);
    }

    .sidebar-sublabel {
      font-size: 12px;
      font-weight: 400;
      color: #5f6368;
      font-family: var(--font-family);
      margin-top: 2px;
    }

    .sidebar-icon {
      width: 20px;
      height: 20px;
      color: #5f6368;
      flex-shrink: 0;
    }

    .sidebar-avatar {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      color: white;
      font-size: 14px;
      font-family: var(--font-family);
      flex-shrink: 0;
    }

    .sidebar-separator {
      height: 1px;
      background-color: #e0e0e0;
      margin: 8px 16px;
    }

    .sidebar-section-title {
      font-size: 12px;
      font-weight: 500;
      color: #5f6368;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 8px 16px;
      font-family: var(--font-family);
    }

    .glass {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .glass-header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
    }

    .premium-card {
      background: white;
      border-radius: var(--radius-xl);
      border: 1px solid var(--border);
      box-shadow: var(--shadow-sm);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
    }

    .premium-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      border-color: var(--google-blue);
    }

    /* Course cards */
    .course-card {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .course-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--google-blue), #2563eb);
      transform: translateY(-100%);
      transition: transform 0.3s ease;
    }

    .course-card:hover::before {
      transform: translateY(0);
    }

    .course-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
    }

    /* Sidebar */
    .sidebar-item {
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      border-radius: var(--radius-lg);
      position: relative;
      overflow: hidden;
    }

    .sidebar-item::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: var(--google-blue);
      transform: translateX(-100%);
      transition: transform 0.2s ease;
    }

    .sidebar-item:hover::before,
    .sidebar-item.active::before {
      transform: translateX(0);
    }

    /* Animations */
    @keyframes slideDownFadeIn {
      from { 
        opacity: 0; 
        transform: translateY(-20px) scale(0.95); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0) scale(1); 
      }
    }

    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0) scale(1); }
      to { opacity: 0; transform: translateY(-10px) scale(0.95); }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .animate-fade-in {
      animation: fadeIn 0.3s ease-out;
    }

    .animate-slide-in {
      animation: slideIn 0.3s ease-out;
    }

    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background: var(--bg-secondary);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--border);
      border-radius: var(--radius-md);
      border: 2px solid var(--bg-secondary);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: var(--text-muted);
    }

    /* Focus styles */
    *:focus {
      outline: 2px solid var(--google-blue);
      outline-offset: 2px;
    }

    button:focus,
    input:focus,
    textarea:focus,
    select:focus {
      outline: 2px solid var(--google-blue);
      outline-offset: 2px;
    }

    /* Text truncation */
    .truncate {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Responsive grid */
    .container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    @media (min-width: 640px) {
      .container { padding: 0 1.5rem; }
    }

    @media (min-width: 1024px) {
      .container { padding: 0 2rem; }
    }

    /* Loading states */
    .loading {
      position: relative;
      overflow: hidden;
    }

    .loading::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
      animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
      100% { left: 100%; }
    }
  `;
  document.head.appendChild(style);
};

// --- MAIN APP COMPONENT ---
const App = () => {
  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  
  // Navigation State
  const [activeNav, setActiveNav] = useState('Home');
  const [view, setView] = useState("dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  
  // UI State
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [selectedCourseDetail, setSelectedCourseDetail] = useState(null);
  const [courseTab, setCourseTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [aiMessage, setAiMessage] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Data States
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete Chapter 5 Quiz", completed: false, dueDate: "2026-04-25", priority: 'high' },
    { id: 2, title: "Submit Lab Report", completed: true, dueDate: "2026-04-23", priority: 'medium' },
    { id: 3, title: "Review Lecture Notes", completed: false, dueDate: "2026-04-26", priority: 'low' }
  ]);
  
  const [notifications, setNotifications] = useState([
    { id: 1, title: "New Assignment", message: "SP 101 - Chapter 5 Quiz posted", time: "2 min ago", read: false, type: "assignment" },
    { id: 2, title: "Grade Posted", message: "Your midterm grade is available", time: "1 hour ago", read: false, type: "grade" },
    { id: 3, title: "Class Update", message: "Schedule change for tomorrow", time: "3 hours ago", read: true, type: "update" }
  ]);

  // Enhanced Course data
  const courses = [
    { id: 1, code: 'SP 101', title: 'SOCIAL ISSUES AND PROFESSIONAL PRACTICES', section: 'BSIT 3J', color: 'bg-green-600', professor: 'Cynthia B. Dulagan', progress: 70, meetLink: 'https://meet.google.com/soc-issues-prof', room: 'RM 401', sched: 'Tue/Thu 1:00-2:30PM', announcement: 'I have already recorded your midterm grades and attendance.' },
    { id: 2, code: 'CAPSTONE 1', title: 'PROJECT MANAGEMENT', section: 'BSIT 3J', color: 'bg-blue-600', professor: 'SHERYL ANN RICAFORT', progress: 45, meetLink: 'https://meet.google.com/cap-stone-one', room: 'Lab 302', sched: 'Mon/Wed 8:00-10:00AM', announcement: 'Please submit your Chapter 2 drafts by Saturday.' },
    { id: 3, code: 'SIA 101', title: 'SYSTEM INTEGRATION AND ARCHITECTURE', section: 'BSIT 3J', color: 'bg-slate-600', professor: 'Toni D. Granado', progress: 30, meetLink: 'https://meet.google.com/sia-sys-integ', room: 'Lab 305', sched: 'Fri 9:00-12:00PM', announcement: 'Prepare for the hands-on lab next week.' },
    { id: 4, code: 'TECH 32', title: 'TECHNOPRENEURSHIP', section: 'BSIT 3J', color: 'bg-cyan-700', professor: 'Katherine C. Baggay', progress: 85, meetLink: 'https://meet.google.com/tech-nopre-neur', room: 'RM 202', sched: 'Mon 1:00-4:00PM', announcement: 'Pitch deck presentations start on Monday.' },
    { id: 5, code: 'MRC 22', title: 'METHODS OF RESEARCH IN COMPUTING', section: 'BSIT 3J', color: 'bg-sky-800', professor: 'Toni D. Granado', progress: 10, meetLink: 'https://meet.google.com/mrc-research-met', room: 'RM 405', sched: 'Wed 2:00-5:00PM', announcement: 'Finalize your research titles for approval.' },
    { id: 6, code: 'WS 102', title: 'WEB PROGRAMMING', section: 'BSIT 3J', color: 'bg-teal-700', professor: 'Roclyn Yamson', progress: 60, meetLink: 'https://meet.google.com/web-prog-react', room: 'Lab 301', sched: 'Tue 8:00-11:00AM', announcement: "Don't forget to push your React projects to GitHub." },
    { id: 7, code: 'ED 101', title: 'EMBEDDED SYSTEMS/ROBOTICS', section: 'BSIT 3J', color: 'bg-blue-500', professor: 'Edmar Tan', progress: 50, meetLink: 'https://meet.google.com/ed-robotics-sys', room: 'Lab 402', sched: 'Thu 9:00-12:00PM', announcement: 'Bring your Arduino kits on our face-to-face class.' },
    { id: 8, code: 'NET 102', title: 'NETWORK ADMINISTRATION AND MAINTENANCE', section: 'BSIT 3J', color: 'bg-blue-700', professor: 'Harvey Rey B. Del Rosario', progress: 20, meetLink: 'https://meet.google.com/et-net-admin-mnt', room: 'Lab 306', sched: 'Sat 8:00-11:00AM', announcement: 'Server configuration quiz is scheduled for Tuesday.' }
  ];
  
  const [filteredCourses, setFilteredCourses] = useState(courses);
  
  // Effects
  useEffect(() => injectProfessionalStyles(), []);
  
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    setFilteredCourses(courses);
  }, []);

  // Essential Functions
  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) return;
    
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      setCurrentUser(username);
    }
  };

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setCurrentUser("");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCourseClick = (course) => {
    setSelectedCourseDetail(course);
    setShowCourseModal(true);
    setCourseTab('overview');
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(course => 
        course.code.toLowerCase().includes(query.toLowerCase()) ||
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.professor.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  };

  const getUnreadCount = () => {
    return notifications.filter(n => !n.read).length;
  };

  const handleNotificationClick = (notification) => {
    setNotifications(notifications.map(n => 
      n.id === notification.id ? { ...n, read: true } : n
    ));
  };

  const sendAiMessage = () => {
    if (!aiMessage.trim()) return;
    
    setIsAiLoading(true);
    setTimeout(() => {
      setAiResponse("I understand you're asking about: " + aiMessage + ". I'm here to help you with your studies, assignments, and course navigation!");
      setIsAiLoading(false);
    }, 1500);
  };
  
  // --- LOGIN SCREEN COMPONENT ---
  const LoginScreen = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="p-8 rounded-3xl shadow-2xl w-full max-w-md border text-center transition-all duration-300"
        style={{
          backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
          borderColor: isDarkMode ? '#333333' : '#F3F4F6'
        }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Sparkles size={32} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-family)' }}>EduPulse</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">Next generation learning platform</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="text" 
            placeholder="Student ID" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 border-2 border-transparent rounded-xl outline-none transition-all"
            style={{
              backgroundColor: isDarkMode ? '#374151' : '#F9FAFB',
              color: isDarkMode ? '#E8EAED' : '#111827',
              fontFamily: 'var(--font-family)'
            }}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border-2 border-transparent rounded-xl outline-none transition-all"
            style={{
              backgroundColor: isDarkMode ? '#374151' : '#F9FAFB',
              color: isDarkMode ? '#E8EAED' : '#111827',
              fontFamily: 'var(--font-family)'
            }}
          />
          <button 
            type="submit" 
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg active:scale-[0.98]"
            style={{ fontFamily: 'var(--font-family)' }}
          >
            Sign In
          </button>
        </form>
        
        <p className="text-xs text-gray-500 mt-6">Demo: admin / admin</p>
      </motion.div>
    </div>
  );

  if (!isLoggedIn) return <LoginScreen />;

  // --- SIDEBAR COMPONENT ---
  const Sidebar = () => {
    const navigationItems = [
      { id: 'Home', name: 'Dashboard', icon: Home },
      { id: 'Courses', name: 'Courses', icon: BookOpen },
      { id: 'Calendar', name: 'Calendar', icon: Calendar },
      { id: 'Tasks', name: 'Tasks', icon: ClipboardList },
      { id: 'Settings', name: 'Settings', icon: Settings },
    ];

    return (
      <>
        {/* Mobile overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <motion.aside
          initial={false}
          animate={{ x: isSidebarOpen ? 0 : -280 }}
          className="fixed left-0 top-0 h-full w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-50 lg:translate-x-0 lg:static lg:z-auto"
        >
          <div className="flex flex-col h-full">
            {/* HEADER */}
            <header className="sticky top-0 z-30 border-b transition-all duration-300"
                    style={{ backgroundColor: 'var(--sidebar-bg)', borderColor: 'var(--border-light)' }}>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">EP</span>
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-family)' }}>EduPulse</h2>
                    <p className="text-xs text-gray-500">Learning Platform</p>
                  </div>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  ×
                </button>
              </div>
            </header>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveNav(item.id);
                      setSidebarOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all"
                    style={{
                      backgroundColor: isActive 
                        ? (isDarkMode ? 'rgba(26, 115, 232, 0.2)' : '#E8F0FE')
                        : 'transparent',
                      color: isActive
                        ? (isDarkMode ? '#FFFFFF' : '#1A73E8')
                        : (isDarkMode ? '#E8EAED' : '#3C4043'),
                      marginHorizontal: isActive ? 10 : 0,
                      borderRadius: 25
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: isActive ? (isDarkMode ? '#FFFFFF' : '#1A73E8') : (isDarkMode ? '#E8EAED' : '#3C4043') }} />
                    <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-family)' }}>{item.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-all"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-family)' }}>Sign Out</span>
              </button>
            </div>
          </div>
        </motion.aside>
      </>
    );
  };

  
  // --- DASHBOARD COMPONENT ---
  const Dashboard = () => (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b bg-white dark:bg-gray-900 transition-all duration-300"
              style={{ borderColor: 'var(--border-light)' }}>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <Menu size={20} />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-family)' }}>
                Welcome back, {currentUser || 'Student'}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">BSIT 3J • 3rd Year</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Search size={16} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="bg-transparent outline-none text-sm w-48"
                style={{ fontFamily: 'var(--font-family)' }}
              />
            </div>
            
            {/* Notifications */}
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <Bell size={20} />
              {getUnreadCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {getUnreadCount()}
                </span>
              )}
            </button>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen size={20} className="text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{courses.length}</span>
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Courses</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle size={20} className="text-green-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{tasks.filter(t => t.completed).length}</span>
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Completed Tasks</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Activity size={20} className="text-yellow-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{getUnreadCount()}</span>
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Unread Notifications</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp size={20} className="text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">85%</span>
            </div>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400">Average Progress</div>
          </motion.div>
        </div>

        {/* Course Grid */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'var(--font-family)' }}>
            Your Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -4 }}
                onClick={() => handleCourseClick(course)}
                className="course-card bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer hover:shadow-lg transition-all"
              >
                <div className={`h-2 ${course.color}`}></div>
                <div className="p-4">
                  <div className="course-code text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {course.code}
                  </div>
                  <div className="course-title text-sm font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {course.title}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    {course.professor}
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <div 
                        className={`${course.color} h-1.5 rounded-full transition-all duration-500`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(course.meetLink, '_blank');
                    }}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all"
                  >
                    <Video size={12} />
                    Join Meet
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );

  // --- NOTIFICATION DROPDOWN ---
  const NotificationDropdown = () => (
    <AnimatePresence>
      {showNotifications && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="absolute right-4 top-16 w-80 rounded-2xl shadow-2xl border z-50 overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
        >
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-family)' }}>Notifications</h3>
              <button onClick={() => setShowNotifications(false)} className="text-gray-400 hover:text-gray-600">
                <X size={16} />
              </button>
            </div>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <Bell size={32} className="mx-auto mb-2 opacity-20" />
                <p>No notifications</p>
              </div>
            ) : (
              notifications.map(notification => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={() => handleNotificationClick(notification)}
                  className={`p-4 border-b cursor-pointer transition-colors border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 ${!notification.read ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      notification.type === 'assignment' ? 'bg-blue-100 text-blue-600' :
                      notification.type === 'grade' ? 'bg-green-100 text-green-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {notification.type === 'assignment' ? <FileText size={16} /> :
                       notification.type === 'grade' ? <CheckSquare size={16} /> :
                       <Bell size={16} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 dark:text-white text-sm" style={{ fontFamily: 'var(--font-family)' }}>{notification.title}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{notification.message}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{notification.time}</p>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // --- COURSE MODAL ---
  const CourseModal = () => {
    if (!showCourseModal || !selectedCourseDetail) return null;
    
    return (
      <AnimatePresence>
        {showCourseModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowCourseModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-family)' }}>{selectedCourseDetail.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{selectedCourseDetail.code} • {selectedCourseDetail.section}</p>
                  </div>
                  <button onClick={() => setShowCourseModal(false)} className="text-gray-400 hover:text-gray-600">
                    <X size={24} />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-96">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Instructor</p>
                      <p className="font-medium text-gray-900 dark:text-white">{selectedCourseDetail.professor}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Schedule</p>
                      <p className="font-medium text-gray-900 dark:text-white">{selectedCourseDetail.sched}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Room</p>
                      <p className="font-medium text-gray-900 dark:text-white">{selectedCourseDetail.room}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Progress</p>
                      <p className="font-medium text-gray-900 dark:text-white">{selectedCourseDetail.progress}%</p>
                    </div>
                  </div>
                  
                  {/* Google Meet Integration */}
                  <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-600 rounded-lg">
                        <Video size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-family)' }}>Google Meet Integration</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Join your virtual classroom instantly</p>
                      </div>
                    </div>
                    <button
                      onClick={() => window.open(selectedCourseDetail.meetLink, '_blank')}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                    >
                      <Camera size={20} />
                      Join Google Meet Class
                    </button>
                  </div>
                  
                  {/* Announcement */}
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'var(--font-family)' }}>Latest Announcement</h4>
                    <p className="text-gray-600 dark:text-gray-300">{selectedCourseDetail.announcement}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  // --- FLOATING CHAT ---
  const FloatingChat = () => (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-96 rounded-2xl shadow-2xl border overflow-hidden bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Zap size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold" style={{ fontFamily: 'var(--font-family)' }}>AI Assistant</h3>
                    <p className="text-xs text-white/80">Always here to help</p>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white">
                  <X size={16} />
                </button>
              </div>
            </div>
            
            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Zap size={16} className="text-white" />
                  </div>
                  <div className="max-w-[80%] bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-sm">
                    <p className="text-sm" style={{ fontFamily: 'var(--font-family)' }}>Hey! 👋 I'm your AI assistant. How can I help you today?</p>
                  </div>
                </div>
                
                {aiResponse && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Zap size={16} className="text-white" />
                    </div>
                    <div className="max-w-[80%] bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-sm border border-purple-200 dark:border-purple-800">
                      <p className="text-sm" style={{ fontFamily: 'var(--font-family)' }}>{aiResponse}</p>
                    </div>
                  </motion.div>
                )}
                
                {isAiLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Zap size={16} className="text-white" />
                    </div>
                    <div className="max-w-[80%] bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={aiMessage}
                  onChange={(e) => setAiMessage(e.target.value)}
                  placeholder="Ask anything..."
                  className="flex-1 px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  style={{ fontFamily: 'var(--font-family)' }}
                  onKeyPress={(e) => e.key === 'Enter' && sendAiMessage()}
                />
                <button
                  onClick={sendAiMessage}
                  disabled={isAiLoading || !aiMessage.trim()}
                  className="p-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white disabled:opacity-50 hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all"
      >
        <MessageSquare size={24} />
        {getUnreadCount() > 0 && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
            {getUnreadCount()}
          </div>
        )}
      </motion.button>
    </div>
  );

  // --- MAIN RETURN ---
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900" style={{ fontFamily: 'var(--font-family)' }}>
      <Sidebar />
      <Dashboard />
      <NotificationDropdown />
      <CourseModal />
      <FloatingChat />
    </div>
  );
};

export default App;
                  <Bell size={32} className="mx-auto mb-2 opacity-20" />
                  <p>No notifications</p>
                </div>
              ) : (
                notifications.map(notification => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => onNotificationClick(notification)}
                    className={`p-4 border-b cursor-pointer transition-colors ${
                      darkMode ? 'border-slate-700 hover:bg-slate-700' : 'border-gray-50 hover:bg-gray-50'
                    } ${!notification.read ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        notification.type === 'assignment' ? 'bg-blue-100 text-blue-600' :
                        notification.type === 'grade' ? 'bg-green-100 text-green-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {notification.type === 'assignment' ? <FileText size={16} /> :
                         notification.type === 'grade' ? <CheckSquare size={16} /> :
                         <Bell size={16} />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 dark:text-white text-sm">{notification.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{notification.message}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{notification.time}</p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      )}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  // Floating Chat Component (Meta AI-style)
  const FloatingChat = ({ show, onToggle, chatTab, onTabChange, aiMessage, onAiMessageChange, onSendAiMessage, aiResponse, isAiLoading }) => {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className={`mb-4 w-96 rounded-2xl shadow-2xl border overflow-hidden transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-900 border-slate-700' 
                  : 'bg-white border-gray-100'
              }`}
            >
              {/* Meta AI-Style Header */}
              <div className={`p-4 border-b ${
                darkMode 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 border-slate-700' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 border-gray-100'
              } text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full flex items-center justify-center">
                            <Zap size={16} className="text-white" />
                          </div>
                        </div>
                        <div className="absolute -top-1 -right-1">
                          <Sparkles size={16} className="text-yellow-300 animate-pulse" />
                        </div>
                        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-400 to-blue-400 opacity-50 animate-spin" 
                             style={{ animationDuration: '3s' }}></div>
                      </div>
                      <div>
                        <h3 className="font-semibold">Meta AI Assistant</h3>
                        <p className="text-xs text-white/80">Always here to help</p>
                      </div>
                    </div>
                    <button 
                      onClick={onToggle} 
                      className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-white/90">Online • Smart Mode Active</span>
                  </div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className={`h-96 overflow-y-auto transition-colors duration-300 ${
                darkMode ? 'bg-slate-900' : 'bg-gray-50'
              }`}>
                <div className="p-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap size={16} className="text-white" />
                    </div>
                    <div className={`max-w-[80%] rounded-2xl p-3 ${
                      darkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'
                    } shadow-sm`}>
                      <p className="text-sm">Hey! 👋 I'm your AI assistant. I can help you with course navigation, assignment tracking, Google Meet links, and study planning. How can I assist you today?</p>
                    </div>
                  </div>
                  
                  {aiResponse && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 relative">
                        <Zap size={16} className="text-white" />
                        <Sparkles size={12} className="absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
                      </div>
                      <div className={`max-w-[80%] rounded-2xl p-3 ${
                        darkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'
                      } shadow-sm border ${
                        darkMode ? 'border-purple-500/20' : 'border-purple-200'
                      }`}>
                        <p className="text-sm leading-relaxed">{aiResponse}</p>
                        <div className="flex gap-2 mt-2">
                          <button className={`text-xs px-2 py-1 rounded-full ${
                            darkMode 
                              ? 'bg-slate-700 text-purple-400 hover:bg-slate-600' 
                              : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                          } transition-colors`}>
                            👍 Helpful
                          </button>
                          <button className={`text-xs px-2 py-1 rounded-full ${
                            darkMode 
                              ? 'bg-slate-700 text-blue-400 hover:bg-slate-600' 
                              : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                          } transition-colors`}>
                            🔄 Regenerate
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {isAiLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap size={16} className="text-white" />
                      </div>
                      <div className={`max-w-[80%] rounded-2xl p-3 ${
                        darkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'
                      } shadow-sm`}>
                        <div className="flex gap-1">
                          <div className={`w-2 h-2 rounded-full ${
                            darkMode ? 'bg-purple-400' : 'bg-purple-500'
                          } animate-bounce`} style={{ animationDelay: '0ms' }}></div>
                          <div className={`w-2 h-2 rounded-full ${
                            darkMode ? 'bg-purple-400' : 'bg-purple-500'
                          } animate-bounce`} style={{ animationDelay: '150ms' }}></div>
                          <div className={`w-2 h-2 rounded-full ${
                            darkMode ? 'bg-purple-400' : 'bg-purple-500'
                          } animate-bounce`} style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
              
              {/* Enhanced Input */}
              <div className={`p-4 border-t transition-colors duration-300 ${
                darkMode ? 'border-slate-700 bg-slate-800' : 'border-gray-100 bg-white'
              }`}>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={aiMessage}
                      onChange={(e) => onAiMessageChange(e.target.value)}
                      placeholder="Ask anything about your studies..."
                      className={`w-full px-4 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 pr-10 transition-colors duration-300 ${
                        darkMode 
                          ? 'bg-slate-700 text-white placeholder-gray-400 focus:ring-purple-500/50' 
                          : 'bg-gray-100 text-gray-900 placeholder-gray-500 focus:ring-purple-500/30'
                      }`}
                      onKeyPress={(e) => e.key === 'Enter' && onSendAiMessage()}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Sparkles size={16} className={`${
                        darkMode ? 'text-purple-400' : 'text-purple-500'
                      } opacity-50`} />
                    </div>
                  </div>
                  <button
                    onClick={onSendAiMessage}
                    disabled={isAiLoading || !aiMessage.trim()}
                    className={`p-3 rounded-2xl transition-all duration-300 ${
                      isAiLoading || !aiMessage.trim()
                        ? darkMode 
                          ? 'bg-slate-700 text-gray-500 cursor-not-allowed'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                    }`}
                  >
                    <Send size={16} />
                  </button>
                </div>
                
                {/* Quick Actions */}
                <div className="flex gap-2 mt-3">
                  <button 
                    onClick={() => onAiMessageChange("What are my upcoming deadlines?")}
                    className={`text-xs px-3 py-1.5 rounded-full transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    📅 Deadlines
                  </button>
                  <button 
                    onClick={() => onAiMessageChange("How can I improve my grades?")}
                    className={`text-xs px-3 py-1.5 rounded-full transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    📈 Study Tips
                  </button>
                  <button 
                    onClick={() => onAiMessageChange("Help me plan my study schedule")}
                    className={`text-xs px-3 py-1.5 rounded-full transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-slate-700 text-gray-300 hover:bg-slate-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    📚 Schedule
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Enhanced Floating Button */}
        <motion.button
          onClick={onToggle}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <MessageSquare size={24} className="relative z-10" />
          <Sparkles size={12} className="absolute top-1 right-1 text-yellow-300 animate-pulse" />
          {getUnreadCount() > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
              {getUnreadCount()}
            </div>
          )}
        </motion.button>
      </div>
    );
  };

  // Course Modal Component with Google Meet Integration
  const CourseModal = ({ show, onClose, course, courseTab, onTabChange, courseDetails }) => {
    if (!show || !course) return null;
    
    return (
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{course.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{course.code} • {course.section}</p>
                  </div>
                  <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <X size={24} />
                  </button>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="flex border-b border-gray-100 dark:border-slate-700">
                {['overview', 'announcements', 'assignments', 'people', 'files'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`px-6 py-3 font-medium text-sm capitalize transition-colors ${
                      courseTab === tab 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-96">
                {courseTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Instructor</p>
                        <p className="font-medium text-gray-900 dark:text-white">{course.professor}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Section</p>
                        <p className="font-medium text-gray-900 dark:text-white">{course.section}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Schedule</p>
                        <p className="font-medium text-gray-900 dark:text-white">{course.sched}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Room</p>
                        <p className="font-medium text-gray-900 dark:text-white">{course.room}</p>
                      </div>
                    </div>
                    
                    {/* Google Meet Integration */}
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-600 rounded-lg">
                          <Video size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">Google Meet Integration</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Join your virtual classroom instantly</p>
                        </div>
                      </div>
                      <button
                        onClick={() => window.open(course.meetLink, '_blank')}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all"
                      >
                        <Camera size={20} />
                        Join Google Meet Class
                      </button>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                        Link: {course.meetLink}
                      </p>
                    </div>
                  </div>
                )}
                
                {courseTab === 'announcements' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Latest Announcement</h4>
                      <p className="text-gray-600 dark:text-gray-300">{course.announcement}</p>
                    </div>
                  </div>
                )}
                
                {courseTab === 'assignments' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Upcoming Assignments</h4>
                      <p className="text-gray-600 dark:text-gray-300">No assignments posted yet.</p>
                    </div>
                  </div>
                )}
                
                {courseTab === 'people' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Class Members</h4>
                      <p className="text-gray-600 dark:text-gray-300">Loading class roster...</p>
                    </div>
                  </div>
                )}
                
                {courseTab === 'files' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Course Materials</h4>
                      <p className="text-gray-600 dark:text-gray-300">No files uploaded yet.</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  // ===== PREMIUM FUNCTIONS =====
  const handleCourseClick = (course) => {
    setSelectedCourseDetail(course);
    setShowCourseModal(true);
    setCourseTab('overview');
  };

  // --- SIDEBAR COMPONENT ---
  const Sidebar = () => {
    const navigationItems = [
      { id: 'Home', name: 'Dashboard', icon: Home },
      { id: 'Courses', name: 'Courses', icon: BookOpen },
      { id: 'Calendar', name: 'Calendar', icon: Calendar },
      { id: 'Tasks', name: 'Tasks', icon: ClipboardList },
      { id: 'Settings', name: 'Settings', icon: Settings },
    ];

    return (
      <>
        {/* Mobile overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <motion.aside
          initial={false}
          animate={{ x: isSidebarOpen ? 0 : -280 }}
          className="fixed left-0 top-0 h-full w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-50 lg:translate-x-0 lg:static lg:z-auto"
        >
          <div className="flex flex-col h-full">
            {/* HEADER */}
            <header className="sticky top-0 z-30 border-b transition-all duration-300"
                    style={{ backgroundColor: 'var(--sidebar-bg)', borderColor: 'var(--border-light)' }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">EP</span>
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 dark:text-white">EduPulse</h2>
                    <p className="text-xs text-gray-500">Learning Platform</p>
                  </div>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  ×
                </button>
              </div>
            </header>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveNav(item.id);
                      setSidebarOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all"
                    style={{
                      backgroundColor: isActive 
                        ? (isDarkMode ? 'rgba(26, 115, 232, 0.2)' : '#E8F0FE')
                        : 'transparent',
                      color: isActive
                        ? (isDarkMode ? '#FFFFFF' : '#1A73E8')
                        : (isDarkMode ? '#E8EAED' : '#3C4043'),
                      marginHorizontal: isActive ? 10 : 0,
                      borderRadius: 25
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: isActive ? (isDarkMode ? '#FFFFFF' : '#1A73E8') : (isDarkMode ? '#E8EAED' : '#3C4043') }} />
                    <span className="text-sm font-medium">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="ml-auto w-1 h-6 rounded-full"
                        style={{ backgroundColor: isActive ? (isDarkMode ? '#1A73E8' : '#2563EB') : 'transparent' }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white">
                <h3 className="font-bold text-sm mb-1">Upgrade to Pro</h3>
                <p className="text-xs opacity-90 mb-3">Get unlimited access to all features</p>
                <button className="w-full bg-white text-blue-600 rounded-lg py-2 text-xs font-bold hover:bg-gray-50 transition-colors">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </motion.aside>
      </>
    );
  };

  // =============================

// --- SUB-COMPONENTS (FIXED SPACING) ---

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl sidebar-item font-semibold text-sm ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
    <Icon size={20} strokeWidth={active ? 3 : 2} />
    <span className="truncate">{label}</span>
  </button>
);


  // --- THE MASSIVE GLOBAL TRANSLATION ENGINE ---
  const translations = {
    "English (US)": {
      navHome: "Home Dashboard", navCal: "Calendar", navTodo: "To-do List", navArc: "Archived", navSet: "System Settings",
      welcome: "Welcome back", activeCourses: "Active Courses", signout: "Sign Out", ctrlCenter: "Control Center",
      emptyTodo: "Nothing on your to-do list right now", emptyArc: "Nothing on your archived items right now",
      checkBack: "Check back later for new assignments", picSource: "Photo Source", gallery: "Gallery", camera: "Camera",
      status: "System Online", gpa: "Current GPA", attend: "Attendance", identity: "Identity & Credentials",
      security: "Security & Access", alerts: "Alert Configurations", interface: "System Interface", cloud: "Cloud & Sync",
      units: "Completed Units", research: "Research Progress", syncBtn: "Force System Sync", langHub: "Global Translation Hub",
      stream: "Stream", classwork: "Classwork", people: "People", joinMeet: "Join Meet"
    },
    "English (UK)": {
      navHome: "Home Dashboard", navCal: "Calendar", navTodo: "To-do List", navArc: "Archived", navSet: "System Settings",
      welcome: "Welcome back", activeCourses: "Active Courses", signout: "Sign Out", ctrlCenter: "Control Centre",
      emptyTodo: "Nothing on your to-do list right now", emptyArc: "Nothing on your archived items right now",
      checkBack: "Check back later for new assignments", picSource: "Photo Source", gallery: "Gallery", camera: "Camera",
      status: "System Online", gpa: "Current GPA", attend: "Attendance", identity: "Identity & Credentials",
      security: "Security & Access", alerts: "Alert Configurations", interface: "System Interface", cloud: "Cloud & Sync",
      stream: "Stream", classwork: "Classwork", people: "People", joinMeet: "Join Meet"
    },
    "Spanish": {
      navHome: "Panel de Inicio", navCal: "Calendario", navTodo: "Lista de Tareas", navArc: "Archivado", navSet: "Ajustes del Sistema",
      welcome: "Bienvenido de nuevo", activeCourses: "Cursos Activos", signout: "Cerrar Sesión", ctrlCenter: "Centro de Control",
      emptyTodo: "Nada en tu lista de tareas ahora", emptyArc: "Nada en tus archivos ahora",
      checkBack: "Vuelve más tarde para nuevas tareas", picSource: "Fuente de Foto", gallery: "Galería", camera: "Cámara",
      status: "Sistema en Línea", gpa: "GPA Actual", attend: "Asistencia", identity: "Identidad",
      security: "Seguridad", alerts: "Alertas", interface: "Interfaz", cloud: "Sincronización",
      stream: "Novedades", classwork: "Trabajo en clase", people: "Personas", joinMeet: "Unirse a Meet"
    },
    "French": {
      navHome: "Tableau de Bord", navCal: "Calendrier", navTodo: "Liste de Tâches", navArc: "Archivé", navSet: "Paramètres",
      welcome: "Bon retour", activeCourses: "Cours Actifs", signout: "Déconnexion", ctrlCenter: "Centre de Contrôle",
      emptyTodo: "Rien sur votre liste pour l'instant", emptyArc: "Rien dans les archives",
      checkBack: "Revenez plus tard", picSource: "Source Photo", gallery: "Galerie", camera: "Caméra",
      status: "Système en Ligne", gpa: "GPA Actuel", attend: "Présence", identity: "Identité",
      security: "Sécurité", alerts: "Alertes", interface: "Interface", cloud: "Nuage",
      stream: "Flux", classwork: "Travaux", people: "Personnes", joinMeet: "Rejoindre Meet"
    },
    "German": {
      navHome: "Dashboard", navCal: "Kalender", navTodo: "Aufgabenliste", navArc: "Archiviert", navSet: "Systemeinstellungen",
      welcome: "Willkommen zurück", activeCourses: "Aktive Kurse", signout: "Abmelden", ctrlCenter: "Kontrollzentrum",
      emptyTodo: "Nichts auf deiner Liste", emptyArc: "Nichts im Archiv",
      checkBack: "Später wiederkommen", picSource: "Fotoquelle", gallery: "Galerie", camera: "Kamera",
      status: "System Online", gpa: "Aktueller GPA", attend: "Anwesenheit", identity: "Identität",
      security: "Sicherheit", alerts: "Warnungen", interface: "Oberfläche", cloud: "Cloud",
      stream: "Stream", classwork: "Kursmaterial", people: "Personen", joinMeet: "Meet beitreten"
    },
    "Japanese": {
      navHome: "ダッシュボード", navCal: "カレンダー", navTodo: "ToDoリスト", navArc: "アーカイブ済み", navSet: "システム設定",
      welcome: "おかえりなさい", activeCourses: "現在のコース", signout: "サインアウト", ctrlCenter: "コントロールセンター",
      emptyTodo: "現在、ToDoリストには何もありません", emptyArc: "アーカイブされたアイテムはありません",
      checkBack: "新しい課題については、後で確認してください", picSource: "写真源", gallery: "ギャラリー", camera: "カメラ",
      status: "システムオンライン", gpa: "現在のGPA", attend: "出席率", identity: "身元と資格",
      security: "セキュリティ", alerts: "通知設定", interface: "インターフェース", cloud: "クラウド同期",
      stream: "ストリーム", classwork: "授業", people: "メンバー", joinMeet: "会議に参加"
    },
    "Korean": {
      navHome: "대시보드", navCal: "캘린더", navTodo: "할 일 목록", navArc: "보관됨", navSet: "시스템 설정",
      welcome: "다시 오신 것을 환영합니다", activeCourses: "활성 코스", signout: "로그아웃", ctrlCenter: "제어 센터",
      emptyTodo: "현재 할 일 목록에 아무것도 없습니다", emptyArc: "보관된 항목이 없습니다",
      checkBack: "나중에 다시 확인하십시오", picSource: "사진 출처", gallery: "갤러리", camera: "카메라",
      status: "시스템 온라인", gpa: "현재 GPA", attend: "출석", identity: "신원 및 자격",
      security: "보안", alerts: "경고 설정", interface: "인터페이스", cloud: "클라우드 동기화",
      stream: "스트림", classwork: "수업 과제", people: "사용자", joinMeet: "Meet 참여"
    },
    "Mandarin": {
      navHome: "仪表板", navCal: "日历", navTodo: "待办事项", navArc: "已归档", navSet: "系统设置",
      welcome: "欢迎回来", activeCourses: "进行中的课程", signout: "退出登录", ctrlCenter: "控制中心",
      emptyTodo: "待办事项列表为空", emptyArc: "归档列表为空",
      checkBack: "稍后再来查看新任务", picSource: "照片来源", gallery: "相册", camera: "相机",
      status: "系统在线", gpa: "当前平均分", attend: "出勤率", identity: "身份与凭证",
      security: "安全与访问", alerts: "警报配置", interface: "系统界面", cloud: "云同步",
      stream: "动态", classwork: "课堂作业", people: "成员", joinMeet: "加入会议"
    },
    "Filipino": {
      navHome: "Pangunahing Dashboard", navCal: "Kalendaryo", navTodo: "Listahan ng Gawain", navArc: "Naka-archive", navSet: "Settings ng System",
      welcome: "Maligayang pagbabalik", activeCourses: "Mga Aktibong Kurso", signout: "Mag-logout", ctrlCenter: "Sentro ng Kontrol",
      emptyTodo: "Wala pang laman ang iyong listahan", emptyArc: "Walang naka-archive sa ngayon",
      checkBack: "Bumalik muli para sa mga bagong takdang-aralin", picSource: "Pinagmulan ng Larawan", gallery: "Gallery", camera: "Kamera",
      status: "Online ang System", gpa: "Kasalukuyang GPA", attend: "Attendance", identity: "Identidad",
      security: "Seguridad", alerts: "Mga Alerto", interface: "Interface ng System", cloud: "Cloud Sync",
      units: "Nakumpletong Units", research: "Progreso ng Research", syncBtn: "Puersahang Sync", langHub: "Sentro ng Pagsasalin",
      stream: "Daloy", classwork: "Gawaing Aralin", people: "Mga Tao", joinMeet: "Sumali sa Meet"
    },
    "Italian": {
      navHome: "Cruscotto", navCal: "Calendario", navTodo: "Cose da fare", navArc: "Archivio", navSet: "Impostazioni",
      welcome: "Bentornato", activeCourses: "Corsi Attivi", signout: "Disconnetti", ctrlCenter: "Centro di Controllo",
      emptyTodo: "Nulla nella lista per ora", emptyArc: "Nulla in archivio",
      checkBack: "Controlla più tardi", picSource: "Fonte Foto", gallery: "Galleria", camera: "Fotocamera",
      status: "Sistema Online", gpa: "GPA Attuale", attend: "Presenza", identity: "Identità",
      security: "Sicurezza", alerts: "Avvisi", interface: "Interfaccia", cloud: "Cloud",
      stream: "Stream", classwork: "Lavori del corso", people: "Persone", joinMeet: "Partecipa a Meet"
    },
    "Portuguese": {
      navHome: "Painel Principal", navCal: "Calendário", navTodo: "Lista de Tarefas", navArc: "Arquivado", navSet: "Configurações",
      welcome: "Bem-vindo de volta", activeCourses: "Cursos Ativos", signout: "Sair", ctrlCenter: "Centro de Controlo",
      emptyTodo: "Nada na sua lista agora", emptyArc: "Nada nos arquivos",
      checkBack: "Verifique mais tarde", picSource: "Fonte da Foto", gallery: "Galeria", camera: "Câmera",
      status: "Sistema Online", gpa: "GPA Atual", attend: "Presença", identity: "Identidade",
      security: "Segurança", alerts: "Alertas", interface: "Interface", cloud: "Nuvem",
      stream: "Mural", classwork: "Trabalhos", people: "Pessoas", joinMeet: "Participar no Meet"
    },
    "Russian": {
      navHome: "Панель управления", navCal: "Календарь", navTodo: "Список задач", navArc: "Архив", navSet: "Настройки системы",
      welcome: "С возвращением", activeCourses: "Активные курсы", signout: "Выйти", ctrlCenter: "Центр управления",
      emptyTodo: "В списке задач пока ничего нет", emptyArc: "В архиве ничего нет",
      checkBack: "Проверьте позже для новых заданий", picSource: "Источник фото", gallery: "Галерея", camera: "Камера",
      status: "Система онлайн", gpa: "Текущий GPA", attend: "Посещаемость", identity: "Личность и учетные данные",
      security: "Безопасность", alerts: "Настройки уведомлений", interface: "Интерфейс системы", cloud: "Облако и синхронизация",
      stream: "Лента", classwork: "Задания", people: "Пользователи", joinMeet: "Присоединиться к Meet"
    },
    "Arabic": {
      navHome: "لوحة التحكم", navCal: "التقويم", navTodo: "قائمة المهام", navArc: "الأرشيف", navSet: "إعدادات النظام",
      welcome: "مرحباً بعودتك", activeCourses: "الدورات النشطة", signout: "تسجيل الخروج", ctrlCenter: "مركز التحكم",
      emptyTodo: "لا يوجد شيء في قائمة المهام الآن", emptyArc: "لا يوجد شيء في الأرشيف الآن",
      checkBack: "تحقق لاحقًا من المهام الجديدة", picSource: "مصدر الصورة", gallery: "المعرض", camera: "الكاميرا",
      status: "النظام متصل", gpa: "المعدل التراكمي الحالي", attend: "الحضور", identity: "الهوية والاعتمادات",
      security: "الأمن والوصول", alerts: "تكوينات التنبيه", interface: "واجهة النظام", cloud: "السحابة والمزامنة",
      stream: "الساحة", classwork: "المهام الدراسية", people: "الأشخاص", joinMeet: "الانضمام إلى Meet"
    },
    "Hindi": {
      navHome: "होम डैशबोर्ड", navCal: "कैलेंडर", navTodo: "कार्य सूची", navArc: "संग्रहित", navSet: "सिस्टम सेटिंग्स",
      welcome: "वापस स्वागत है", activeCourses: "सक्रिय पाठ्यक्रम", signout: "साइन आउट", ctrlCenter: "नियंत्रण केंद्र",
      emptyTodo: "अभी आपकी सूची में कुछ नहीं है", emptyArc: "अभी कुछ भी संग्रहीत नहीं है",
      checkBack: "नए कार्यों के लिए बाद में देखें", picSource: "फोटो स्रोत", gallery: "ग্যালरी", camera: "कैमरा",
      status: "सिस्टम ऑनलाइन", gpa: "वर्तमान जीपीए", attend: "उपस्थिति", identity: "पहचान",
      security: "सुरक्षा", alerts: "अलर्ट", interface: "इंटरफ़ेस", cloud: "क्लाउड सिंक",
      stream: "स्ट्रीम", classwork: "कक्षा का कार्य", people: "लोग", joinMeet: "मीट में शामिल हों"
    },
    "Vietnamese": {
      navHome: "Bảng Điều Khiển", navCal: "Lịch", navTodo: "Việc Cần Làm", navArc: "Lưu Trữ", navSet: "Cài Đặt Hệ Thống",
      welcome: "Chào mừng trở lại", activeCourses: "Khóa Học Hoạt Động", signout: "Đăng Xuất", ctrlCenter: "Trung Tâm Điều Khiển",
      emptyTodo: "Không có gì trong danh sách việc cần làm", emptyArc: "Không có mục lưu trữ nào",
      checkBack: "Kiểm tra lại sau để xem bài tập mới", picSource: "Nguồn Ảnh", gallery: "Bộ Sưu Tập", camera: "Máy Ảnh",
      status: "Hệ Thống Trực Tuyến", gpa: "GPA Hiện Tại", attend: "Chuyên Cần", identity: "Danh Tính",
      security: "Bảo Mật", alerts: "Cảnh Báo", interface: "Giao Diện", cloud: "Đồng Bộ Đám Mây",
      stream: "Luồng", classwork: "Bài tập trên lớp", people: "Mọi người", joinMeet: "Tham gia Meet"
    },
    "Thai": {
      navHome: "แดชบอร์ด", navCal: "ปฏิทิน", navTodo: "รายการสิ่งที่ต้องทำ", navArc: "เก็บถาวร", navSet: "ตั้งค่าระบบ",
      welcome: "ยินดีต้อนรับกลับ", activeCourses: "คอร์สที่กำลังเรียน", signout: "ออกจากระบบ", ctrlCenter: "ศูนย์ควบคุม",
      emptyTodo: "ไม่มีรายการในสิ่งที่ต้องทำตอนนี้", emptyArc: "ไม่มีรายการที่เก็บถาวรตอนนี้",
      checkBack: "กลับมาตรวจสอบงานใหม่ในภายหลัง", picSource: "แหล่งที่มาของรูปภาพ", gallery: "แกลเลอรี", camera: "กล้อง",
      status: "ระบบออนไลน์", gpa: "เกรดเฉลี่ยปัจจุบัน", attend: "การเข้าเรียน", identity: "ข้อมูลตัวตน",
      security: "ความปลอดภัย", alerts: "การแจ้งเตือน", interface: "อินเตอร์เฟซ", cloud: "ซิงค์คลาวด์",
      stream: "สตรีม", classwork: "งานของชั้นเรียน", people: "ผู้คน", joinMeet: "เข้าร่วม Meet"
    },
    "Dutch": {
      navHome: "Dashboard", navCal: "Kalender", navTodo: "Takenlijst", navArc: "Gearchiveerd", navSet: "Systeeminstellingen",
      welcome: "Welkom terug", activeCourses: "Actieve Cursussen", signout: "Uitloggen", ctrlCenter: "Controlecentrum",
      emptyTodo: "Niets op je takenlijst momenteel", emptyArc: "Momenteel geen gearchiveerde items",
      checkBack: "Kom later terug voor nieuwe opdrachten", picSource: "Fotobron", gallery: "Galerij", camera: "Camera",
      status: "Systeem Online", gpa: "Huidig GPA", attend: "Aanwezigheid", identity: "Identiteit",
      security: "Beveiliging", alerts: "Waarschuwingen", interface: "Interface", cloud: "Cloud Sync",
      stream: "Updates", classwork: "Schoolwerk", people: "Mensen", joinMeet: "Deelnemen aan Meet"
    },
    "Greek": {
      navHome: "Πίνακας Ελέγχου", navCal: "Ημερολόγιο", navTodo: "Λίστα Εργασιών", navArc: "Αρχειοθετημένα", navSet: "Ρυθμίσεις Συστήματος",
      welcome: "Καλώς ήρθατε πίσω", activeCourses: "Ενεργά Μαθήματα", signout: "Αποσύνδεση", ctrlCenter: "Κέντρο Ελέγχου",
      emptyTodo: "Τίποτα στη λίστα εργασιών σας αυτή τη στιγμή", emptyArc: "Τίποτα στα αρχειοθετημένα στοιχεία σας",
      checkBack: "Ελέγξτε αργότερα για νέες εργασίες", picSource: "Πηγή Φωτογραφίας", gallery: "Γκαλερί", camera: "Κάμερα",
      status: "Σύστημα Online", gpa: "Τρέχον GPA", attend: "Παρουσίες", identity: "Ταυτότητα",
      security: "Ασφάλεια", alerts: "Ειδοποιήσεις", interface: "Διεπαφή", cloud: "Συγχρονισμός",
      stream: "Ροή", classwork: "Εργασίες τάξης", people: "Άτομα", joinMeet: "Συμμετοχή στο Meet"
    },
    "Turkish": {
      navHome: "Ana Panel", navCal: "Takvim", navTodo: "Yapılacaklar Listesi", navArc: "Arşivlendi", navSet: "Sistem Ayarları",
      welcome: "Tekrar hoş geldiniz", activeCourses: "Aktif Kurslar", signout: "Oturumu Kapat", ctrlCenter: "Kontrol Merkezi",
      emptyTodo: "Yapılacaklar listenizde şu an bir şey yok", emptyArc: "Arşivinizde şu an bir şey yok",
      checkBack: "Yeni ödevler için daha sonra kontrol edin", picSource: "Fotoğraf Kaynağı", gallery: "Galeri", camera: "Kamera",
      status: "Sistem Çevrimiçi", gpa: "Mevcut GPA", attend: "Katılım", identity: "Kimlik",
      security: "Güvenlik", alerts: "Uyarılar", interface: "Arayüz", cloud: "Bulut Senkronizasyonu",
      stream: "Akış", classwork: "Sınıf Çalışmaları", people: "Kişiler", joinMeet: "Meet'e Katıl"
    },
    "Indonesian": {
      navHome: "Dasbor Utama", navCal: "Kalender", navTodo: "Daftar Tugas", navArc: "Diarsipkan", navSet: "Pengaturan Sistem",
      welcome: "Selamat datang kembali", activeCourses: "Kursus Aktif", signout: "Keluar", ctrlCenter: "Pusat Kontrol",
      emptyTodo: "Tidak ada daftar tugas saat ini", emptyArc: "Tidak ada item yang diarsipkan",
      checkBack: "Periksa lagi nanti untuk tugas baru", picSource: "Sumber Foto", gallery: "Galeri", camera: "Kamera",
      status: "Sistem Online", gpa: "IPK Saat Ini", attend: "Kehadiran", identity: "Identitas",
      security: "Keamanan", alerts: "Peringatan", interface: "Antarmuka", cloud: "Sinkronisasi Cloud",
      stream: "Forum", classwork: "Tugas Kelas", people: "Anggota", joinMeet: "Gabung Meet"
    },
    "Malay": {
      navHome: "Papan Pemuka", navCal: "Kalendar", navTodo: "Senarai Tugas", navArc: "Diarkibkan", navSet: "Tetapan Sistem",
      welcome: "Selamat kembali", activeCourses: "Kursus Aktif", signout: "Log Keluar", ctrlCenter: "Pusat Kawalan",
      emptyTodo: "Tiada apa-apa dalam senarai tugas anda", emptyArc: "Tiada item dalam arkib",
      checkBack: "Semak semula nanti untuk tugasan baru", picSource: "Sumber Foto", gallery: "Galeri", camera: "Kamera",
      status: "Sistem Dalam Talian", gpa: "GPA Semasa", attend: "Kehadiran", identity: "Identiti",
      security: "Keselamatan", alerts: "Amaran", interface: "Antaramuka", cloud: "Senkronisasi Awan",
      stream: "Aliran", classwork: "Kerja Kelas", people: "Orang", joinMeet: "Sertai Meet"
    },
    "Bengali": {
      navHome: "হোম ড্যাশবোর্ড", navCal: "ক্যালেন্ডার", navTodo: "কাজের তালিকা", navArc: "আর্কাইভ করা", navSet: "সিস্টেম সেটিংস",
      welcome: "ফিরে আসার জন্য স্বাগতম", activeCourses: "সক্রিয় কোর্স", signout: "সাইন আউট", ctrlCenter: "কন্ট্রোল সেন্টার",
      emptyTodo: "আপনার কাজের তালিকায় এখন কিছু নেই", emptyArc: "আর্কাইভ করা আইটেমগুলিতে কিছু নেই",
      checkBack: "নতুন অ্যাসাইনমেন্টের জন্য পরে চেক করুন", picSource: "ছবির উৎস", gallery: "গ্যালারি", camera: "ক্যামেরা",
      status: "সিস্টেম অনলাইন", gpa: "বর্তমান GPA", attend: "উপস্থিতি", identity: "পরিচয়",
      security: "নিরাপত্তা", alerts: "সতর্কতা", interface: "ইন্টারফেস", cloud: "ক্লাউড সিঙ্ক",
      stream: "স্ট্রিম", classwork: "ক্লাসের কাজ", people: "মানুষ", joinMeet: "মিটে যোগ দিন"
    },
    "Hebrew": {
      navHome: "לוח בקרה", navCal: "לוח שנה", navTodo: "רשימת מטלות", navArc: "בארכיון", navSet: "הגדרות מערכת",
      welcome: "ברוך שובך", activeCourses: "קורסים פעילים", signout: "התנתק", ctrlCenter: "מרכז בקרה",
      emptyTodo: "אין שום דבר ברשימת המטלות כרגע", emptyArc: "אין פריטים בארכיון כרגע",
      checkBack: "בדוק שוב מאוחר יותר למטלות חדשות", picSource: "מקור תמונה", gallery: "גלריה", camera: "מצלמה",
      status: "מערכת מחוברת", gpa: "ממוצע ציונים נוכחי", attend: "נוכחות", identity: "זהות",
      security: "אבטחה", alerts: "התראות", interface: "ממשק", cloud: "סנכρον ענן",
      stream: "זרם", classwork: "עבודת כיתה", people: "אנשים", joinMeet: "הצטרף ל-Meet"
    },
    "Polish": {
      navHome: "Panel Główny", navCal: "Kalendarz", navTodo: "Lista Zadań", navArc: "Zarchiwizowane", navSet: "Ustawienia Systemu",
      welcome: "Witaj z powrotem", activeCourses: "Aktywne Kursy", signout: "Wyloguj", ctrlCenter: "Centrum Sterowania",
      emptyTodo: "Nic nie ma na Twojej liście zadań", emptyArc: "Nic nie ma w archiwum",
      checkBack: "Sprawdź później nowe zadania", picSource: "Źródło Zdjęcia", gallery: "Galeria", camera: "Aparat",
      status: "System Online", gpa: "Aktualne GPA", attend: "Obecność", identity: "Tożsamość",
      security: "Bezpieczeństwo", alerts: "Alerty", interface: "Interfejs", cloud: "Synchronizacja",
      stream: "Strumień", classwork: "Zadania", people: "Osoby", joinMeet: "Dołącz do Meet"
    }
  };

  // --- DYNAMIC TRANSLATION WRAPPER ---
  const t = (key) => {
    const langSet = translations[selectedLanguage] || translations["English (US)"];
    return langSet[key] || translations["English (US)"][key] || key;
  };

      
  
    // =============================

  // --- DATA ARRAYS ---

  const subjects = [
    { 
      id: "CAP1", 
      code: "Capstone 1", 
      title: "Capstone Project & Research 1", 
      prof: "Sheryl Ann Ricafort", 
      color: "bg-blue-600", 
      shadowColor: "rgba(37, 99, 235, 0.5)", 
      announcement: "Please submit your Chapter 2 drafts by Saturday.", 
      room: "Lab 302", 
      sched: "Mon/Wed 8:00-10:00AM", 
      progress: 45,
      meetLink: "https://meet.google.com/cap-stone-one" // Idinagdag
    },
    { 
      id: "SP101", code: "SP 101", title: "Social Issues and Professional Practices", 
      prof: "Cynthia B. Dulagan", color: "bg-emerald-600", shadowColor: "rgba(16, 185, 129, 0.5)", 
      announcement: "I have already recorded your midterm grades and attendance.", 
      room: "RM 401", sched: "Tue/Thu 1:00-2:30PM", progress: 70,
      meetLink: "https://meet.google.com/soc-issues-prof" // Idinagdag
    },
    { 
      id: "SIA101", code: "SIA 101", title: "System Integration and Architecture", 
      prof: "Toni D. Granado", color: "bg-slate-600", shadowColor: "rgba(71, 85, 105, 0.5)", 
      announcement: "Prepare for the hands-on lab next week.", 
      room: "Lab 305", sched: "Fri 9:00-12:00PM", progress: 30,
      meetLink: "https://meet.google.com/sia-sys-integ" // Idinagdag
    },
    { 
      id: "TECH32", code: "TECH 32", title: "Technopreneurship", 
      prof: "Katherine C. Baggay", color: "bg-cyan-700", shadowColor: "rgba(14, 116, 144, 0.5)", 
      announcement: "Pitch deck presentations start on Monday.", 
      room: "RM 202", sched: "Mon 1:00-4:00PM", progress: 85,
      meetLink: "https://meet.google.com/tech-nopre-neur" // Idinagdag
    },
    { 
      id: "MRC22", code: "MRC 22", title: "Methods of Research in Computing", 
      prof: "Toni D. Granado", color: "bg-sky-800", shadowColor: "rgba(7, 89, 133, 0.5)", 
      announcement: "Finalize your research titles for approval.", 
      room: "RM 405", sched: "Wed 2:00-5:00PM", progress: 10,
      meetLink: "https://meet.google.com/mrc-research-met" // Idinagdag
    },
    { 
      id: "WS102", code: "WS 102", title: "Web Programming", 
      prof: "Roclyn Yamson", color: "bg-teal-700", shadowColor: "rgba(15, 118, 110, 0.5)", 
      announcement: "Don't forget to push your React projects to GitHub.", 
      room: "Lab 301", sched: "Tue 8:00-11:00AM", progress: 60,
      meetLink: "https://meet.google.com/web-prog-react" // Idinagdag
    },
    { 
      id: "ED101", code: "ED 101", title: "Embedded Systems / Robotics", 
      prof: "Edmar Tan", color: "bg-blue-500", shadowColor: "rgba(59, 130, 246, 0.5)", 
      announcement: "Bring your Arduino kits on our face-to-face class.", 
      room: "Lab 402", sched: "Thu 9:00-12:00PM", progress: 50,
      meetLink: "https://meet.google.com/ed-robotics-sys" // Idinagdag
    },
    { 
      id: "ET102", code: "ET 102", title: "Network Admin & Maintenance", 
      prof: "Harvey Rey B. Del Rosario", color: "bg-blue-700", shadowColor: "rgba(29, 78, 216, 0.5)", 
      announcement: "Server configuration quiz is scheduled for Tuesday.", 
      room: "Lab 306", sched: "Sat 8:00-11:00AM", progress: 20,
      meetLink: "https://meet.google.com/et-net-admin-mnt" // Idinagdag
    }
  ];

  const events = [
    { day: "Monday", date: "April 6", fullDate: 6, items: [
      { id: 1, type: "Assignment", title: "Business Model Canvas", subId: "TECH32", time: "11:59 PM", color: "border-cyan-700", status: "Open" },
      { id: 2, type: "Quiz", title: "Midterm Review", subId: "SIA101", time: "1:30 PM", color: "border-slate-600", status: "Timed" }
    ]},
    { day: "Tuesday", date: "April 7", fullDate: 7, items: [
      { id: 3, type: "Hands-on", title: "Server Config Lab", subId: "ET102", time: "9:00 AM", color: "border-blue-700", status: "Face-to-Face" }
    ]},
    { day: "Wednesday", date: "April 8", fullDate: 8, items: [
      { id: 4, type: "Submission", title: "Chapter 2 Methodology", subId: "CAP1", time: "5:00 PM", color: "border-blue-600", status: "Critical" },
      { id: 5, type: "Meeting", title: "Group Sync-up", subId: "MRC22", time: "8:00 PM", color: "border-sky-800", status: "Online" }
    ]},
    { day: "Thursday", date: "April 9", fullDate: 9, items: [] },
    { day: "Friday", date: "April 10", fullDate: 10, items: [
      { id: 6, type: "Project", title: "React Portfolio", subId: "WS102", time: "11:59 PM", color: "border-teal-700", status: "Final" }
    ]}
  ];

  const notificationTemplates = [
    { id: 101, title: "Grade Posted", desc: "Prof. Ricafort posted Midterm for CAP1", time: "2h ago", icon: <Award size={14}/> },
    { id: 102, title: "Class Canceled", desc: "WS 102 Lab session tomorrow is moved", time: "5h ago", icon: <AlertCircle size={14}/> },
    { id: 103, title: "System Update", desc: "EduPulse core updated to v3.0 Stable", time: "1d ago", icon: <Cpu size={14}/> }
  ];

  // --- HANDLERS ---
  const handleSubjectClick = (sub) => { 
    setActiveSubject(sub); 
    setView("stream"); 
    setIsChatOpen(false); 
  };

  const handleCalendarEventClick = (subId) => {
    const targetSub = subjects.find(s => s.id === subId || s.code.replace(/\s/g, '') === subId);
    if (targetSub) handleSubjectClick(targetSub);
  };

  const sendMessage = () => {
    if (message.trim() && activeSubject) {
      const msgData = { 
        sender: currentUser, 
        text: message, 
        subjectId: activeSubject.id, 
        to: activeSubject.prof, 
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      };
      socket.emit('send_private_msg', msgData);
      setChatLog([...chatLog, msgData]);
      setMessage("");
    }
  };

  const runSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSystemAlerts(0);
    }, 2500);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => { setProfilePic(reader.result); setShowPicOptions(false); };
      reader.readAsDataURL(file);
    }
  };

  // --- UI COMPONENTS ---
  const EmptyState = ({ type }) => (
    <div className="flex flex-col items-center justify-center p-10 text-center animate-in fade-in zoom-in duration-700">
      <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${darkMode ? 'bg-emerald-500/5' : 'bg-emerald-50'}`}>
        <Sparkles size={40} className="text-emerald-500 opacity-50" />
      </div>
      <h3 className="text-lg font-black uppercase tracking-tighter mb-2 italic">{type === 'todo' ? t("emptyTodo") : t("emptyArc")}</h3>
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t("checkBack")}</p>
    </div>
  );

  const SectionHeader = ({ icon: Icon, title, subtitle }) => (
    <div className="flex justify-between items-center mb-10">
      <div className="flex items-center gap-4 text-left">
        <div className="p-4 bg-emerald-500/10 rounded-3xl text-emerald-500 shadow-xl shadow-emerald-500/5"><Icon size={32}/></div>
        <div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-emerald-500 leading-none mb-1">{title}</h2>
          <p className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase italic">{subtitle}</p>
        </div>
      </div>
      <div className="flex gap-2">
         <button className={`p-3 rounded-2xl border transition-all ${darkMode ? 'bg-[#1a1a1a] border-[#2a2a2a] hover:bg-[#252525]' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>
            <Filter size={18}/>
         </button>
         <button className={`p-3 rounded-2xl border transition-all ${darkMode ? 'bg-[#1a1a1a] border-[#2a2a2a] hover:bg-[#252525]' : 'bg-white border-slate-200 hover:bg-slate-50'}`}>
            <Search size={18}/>
         </button>
      </div>
    </div>
  );

  
    const renderCCContent = () => {
    switch(activeCCTab) {
      case 'identity':
        return (
          <div className="flex flex-col lg:flex-row items-start gap-10 p-2 animate-fade-in">
            
            {/* The Main Profile Picture/Square (with VS, keep as is) */}
            <div className="relative group cursor-pointer" onClick={() => document.getElementById('photo-upload').click()}>
              <div className="w-32 h-32 bg-emerald-500 rounded-[35px] flex items-center justify-center text-white text-4xl font-black shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-1">
                {profilePic ? (
                  <img src={profilePic} alt="Profile" className="w-full h-full object-cover rounded-[35px]" />
                ) : (
                  'VS'
                )}
                <input
                  id="photo-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setProfilePic(reader.result);
                        alert("Profile photo uploaded successfully!");
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>
              {/* EMERALD BADGE - PURE ICON ONLY */}
              <div className="absolute -bottom-2 -right-2 bg-[#10b981] p-2.5 rounded-2xl border-4 border-black dark:border-[#0a0c10] shadow-xl flex items-center justify-center transition-all group-hover:scale-110">
                
                {/* GAGAMIT TAYO NG ACTUAL ICON, HINDI TEXT STRING */}
                <svg 
                  className="w-5 h-5 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>

              </div>
            </div>

            {/* INFO CONTENT AREA */}
            <div className="flex-1 w-full space-y-8">
              <div>
                <h2 className="font-syne text-5xl font-black italic text-white tracking-tighter uppercase">VS CORONADO</h2>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="px-5 py-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-black rounded-full uppercase tracking-widest">GLOBAL ACCOUNT</span>
                  <span className="px-5 py-1.5 bg-blue-600/20 border border-blue-600/40 text-blue-400 text-[10px] font-black rounded-full uppercase tracking-widest">3RD YEAR STUDENT</span>
                  <span className="px-5 py-1.5 bg-purple-600/20 border border-purple-600/40 text-purple-400 text-[10px] font-black rounded-full uppercase tracking-widest">COMPUTER SCIENCE</span>
                </div>
              </div>

              {/* METADATA BOXES - FIXED SPACING */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-[25px] flex flex-col gap-1">
                  <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">Academic Primary Email</span>
                  <span className="text-emerald-400 font-bold italic text-sm truncate uppercase tracking-tight">
                    vscoronado@paterostechnological...
                  </span>
                </div>
                
                <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-[25px] flex flex-col gap-1">
                  <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">Institutional Identifier</span>
                  <span className="text-white font-bold text-sm tracking-widest uppercase">2022-5089</span>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex justify-end gap-4 pt-4">
                <button onClick={() => setShowMetadataAdvanced(!showMetadataAdvanced)} className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-inter font-black text-[11px] tracking-[0.15em] uppercase transition-all shadow-lg shadow-emerald-900/20">
                  {showMetadataAdvanced ? "Hide System Metadata" : "UPDATE SYSTEM METADATA"}
                </button>
                <button onClick={() => alert("Request change initiated! Contact admin for approval.")} className="px-10 py-4 bg-transparent border border-slate-700 hover:bg-slate-800 text-white rounded-full font-inter font-black text-[11px] tracking-[0.15em] uppercase transition-all">
                  REQUEST CHANGE
                </button>
              </div>
            </div>
          </div>
        );
      case 'security':
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="font-syne italic text-xl text-white uppercase">SECURITY & ACCESS</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">TWO-FACTOR AUTHENTICATION</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={twoFactorEnabled}
                      onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </div>
                <p className="text-[10px] text-slate-400">Enhance account security with 2FA</p>
              </div>
              
              <button 
                onClick={() => setShowKillSessionsModal(true)}
                className="w-full p-4 bg-red-600/10 border border-red-500/20 rounded-xl hover:bg-red-600/20 transition-all text-left"
              >
                <p className="font-black text-red-500 text-xs tracking-widest uppercase">KILL ALL SESSIONS</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase">TERMINATE ALL ACTIVE DEVICES</p>
              </button>
            </div>
          </div>
        );
      case 'alerts':
        return (
          <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-4">
            <h3 className="font-syne italic text-xl text-white uppercase">ALERT CONFIGURATIONS</h3>
            {[
              "CRITICAL SYSTEM BREACH", 
              "DATABASE SYNC ERRORS", 
              "NEW LOGIN ATTEMPTS",
              "SECURITY VIOLATIONS",
              "PERFORMANCE MONITORING",
              "BACKUP STATUS ALERTS"
            ].map((alert, index) => (
              <div key={alert} className="flex justify-between items-center p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:bg-slate-800/30 transition-all cursor-pointer">
                <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">{alert}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    defaultChecked={index < 2}
                    onChange={(e) => {
                      const alerts = {...systemAlerts};
                      alerts[index] = e.target.checked;
                      setSystemAlerts(alerts);
                    }}
                  />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            ))}
            
            <button onClick={() => alert("Advanced alert settings coming soon!")} className="w-full p-4 bg-emerald-600/10 border border-emerald-500/20 rounded-xl hover:bg-emerald-600/20 transition-all text-left">
              <p className="font-black text-emerald-500 text-xs tracking-widest uppercase">CONFIGURE ADVANCED ALERTS</p>
              <p className="text-[10px] text-slate-400 mt-1 uppercase">CUSTOMIZE NOTIFICATION RULES AND TRIGGERS</p>
            </button>
          </div>
        );
      case 'interface':
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="font-syne italic text-xl text-white uppercase">SYSTEM INTERFACE</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">DARK MODE</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={darkMode}
                      onChange={(e) => setDarkMode(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </div>
                <p className="text-[10px] text-slate-400">Toggle dark/light theme</p>
              </div>
              
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">COMPACT VIEW</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </div>
                <p className="text-[10px] text-slate-400">Reduce UI spacing</p>
              </div>
            </div>
          </div>
        );
      case 'cloud':
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="font-syne italic text-xl text-white uppercase">CLOUD & SYNC</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">AUTO-SYNC</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </div>
                <p className="text-[10px] text-slate-400">Sync data across devices</p>
              </div>
              
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">STORAGE USED</span>
                  <span className="text-xs font-bold text-emerald-400">{storageUsage}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{width: `${storageUsage}%`}}></div>
                </div>
                <p className="text-[10px] text-slate-400 mt-2">6.5GB of 10GB used</p>
              </div>
              
              <button 
                onClick={() => setIsSyncing(true)}
                className="w-full p-4 bg-emerald-600/10 border border-emerald-500/20 rounded-xl hover:bg-emerald-600/20 transition-all text-left"
              >
                <p className="font-black text-emerald-500 text-xs tracking-widest uppercase">FORCE SYNC NOW</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase">{isSyncing ? 'SYNCING...' : 'MANUAL DATA SYNCHRONIZATION'}</p>
              </button>
            </div>
          </div>
        );
      case 'support':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            <div onClick={() => alert("Opening admin support ticket...")} className="p-8 bg-slate-900/40 border border-slate-800 rounded-[30px] hover:bg-slate-900/60 cursor-pointer group transition-all">
              <h3 className="font-syne italic font-black text-xl text-emerald-500 group-hover:translate-x-2 transition-transform">SUPPORT HUB</h3>
              <p className="text-[10px] text-slate-400 font-bold mt-2 tracking-widest uppercase">Direct line to technical support</p>
            </div>
            <div onClick={() => alert("Loading system documentation...")} className="p-8 bg-slate-900/40 border border-slate-800 rounded-[30px] hover:bg-slate-900/60 cursor-pointer group transition-all">
              <h3 className="font-syne italic font-black text-xl text-blue-500 group-hover:translate-x-2 transition-transform">DOCUMENTATION</h3>
              <p className="text-[10px] text-slate-400 font-bold mt-2 tracking-widest uppercase">System guides and technical logs</p>
            </div>
            <div onClick={() => alert("Opening FAQ portal...")} className="p-8 bg-slate-900/40 border border-slate-800 rounded-[30px] hover:bg-slate-900/60 cursor-pointer group transition-all">
              <h3 className="font-syne italic font-black text-xl text-purple-500 group-hover:translate-x-2 transition-transform">FAQS</h3>
              <p className="text-[10px] text-slate-400 font-bold mt-2 tracking-widest uppercase">Frequently asked questions</p>
            </div>
            <div onClick={() => alert("Checking system status...")} className="p-8 bg-slate-900/40 border border-slate-800 rounded-[30px] hover:bg-slate-900/60 cursor-pointer group transition-all">
              <h3 className="font-syne italic font-black text-xl text-orange-500 group-hover:translate-x-2 transition-transform">SYSTEM STATUS</h3>
              <p className="text-[10px] text-slate-400 font-bold mt-2 tracking-widest uppercase">Check platform health</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                VS
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight dark:text-white">VS CORONADO</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Student ID: 2022-5089</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-slate-700 rounded-2xl">
                <h4 className="font-bold text-sm uppercase tracking-wider mb-2 dark:text-white">Current GPA</h4>
                <p className="text-3xl font-bold text-emerald-600">1.25</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-slate-700 rounded-2xl">
                <h4 className="font-bold text-sm uppercase tracking-wider mb-2 dark:text-white">Attendance</h4>
                <p className="text-3xl font-bold text-blue-600">98%</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => setShowMetadataAdvanced(!showMetadataAdvanced)} className="px-8 py-4 bg-emerald-600 text-white rounded-[1.5rem] font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all">
                {showMetadataAdvanced ? "Hide System Metadata" : "Update System Metadata"}
              </button>
            </div>
          </div>
        );
    }
  };

  // --- ADVANCED DASHBOARD BRANCHING SYSTEM ---
  const renderDashboardContent = () => {
    if (dashboardView.main === 'dashboard') {
      return (
        <div className="animate-in fade-in zoom-in duration-500">
           <h1 className="font-syne text-6xl font-black italic text-white mb-8 tracking-tighter">
             SYSTEM OVERVIEW
           </h1>
           {/* Grid of clickable summary cards */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {['ACADEMIC STATUS', 'SYSTEM UPTIME', 'NETWORK LOGS'].map(card => (
               <div 
                 key={card}
                 onClick={() => setDashboardView({ ...dashboardView, main: card })}
                 className="p-8 bg-slate-900/50 border border-slate-800 rounded-[35px] hover:border-emerald-500 hover:bg-emerald-500/5 transition-all cursor-pointer group"
               >
                 <p className="font-inter font-black text-[10px] tracking-[0.3em] text-slate-500 group-hover:text-emerald-400 uppercase">{card}</p>
                 <p className="font-syne text-3xl text-white mt-2">ACTIVE</p>
               </div>
             ))}
           </div>
        </div>
      );
    }

    // Branching View for a Subject (e.g., CAPSTONE 1)
    return (
      <div className="animate-in slide-in-from-right-10 duration-500 space-y-10">
        <div className="flex items-center gap-4">
          <button onClick={() => setDashboardView({ main: 'dashboard', sub: null })} className="text-emerald-500 font-black font-inter text-xs tracking-widest hover:underline">BACK TO ROOT</button>
          <span className="text-slate-700">/</span>
          <h2 className="font-syne text-4xl font-black italic text-white uppercase">{dashboardView.main}</h2>
        </div>

        {/* CHAIN REACTION BRANCHES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'LECTURE MATERIALS', icon: 'folder', color: 'bg-blue-600' },
            { title: 'SOURCE CODES', icon: 'terminal', color: 'bg-purple-600' },
            { title: 'QUIZ RESULTS', icon: 'analytics', color: 'bg-emerald-600' },
            { title: 'TEAM CHAT', icon: 'forum', color: 'bg-orange-600' }
          ].map((branch) => (
            <button 
              key={branch.title}
              onClick={() => setDashboardView({ ...dashboardView, sub: branch.title })}
              className="p-10 rounded-[40px] border border-slate-800 bg-slate-900/20 hover:scale-105 hover:bg-slate-900 transition-all flex flex-col items-center gap-4 group"
            >
              <div className={`${branch.color} p-4 rounded-2xl shadow-lg shadow-black/50 group-hover:rotate-12 transition-transform`}>
                <span className="material-icons text-white">{branch.icon}</span>
              </div>
              <p className="font-inter font-black text-[9px] tracking-widest text-slate-400 group-hover:text-white uppercase">
                {branch.title}
              </p>
            </button>
          ))}
        </div>

        {/* SUB-BRANCH CONTENT (The Deepest Layer) */}
        {dashboardView.sub && (
          <div className="mt-12 p-10 bg-black border border-emerald-500/30 rounded-[50px] animate-in slide-in-from-bottom-10">
            <h3 className="font-syne text-2xl font-black text-emerald-500 italic mb-6">INTERNAL_FILES / {dashboardView.sub}</h3>
            <div className="space-y-4">
               {[1, 2, 3].map(i => (
                 <div key={i} className="flex justify-between p-4 border-b border-slate-900 hover:bg-slate-900/50 cursor-pointer">
                   <span className="text-slate-300 font-inter font-bold text-xs">MODULE_0{i}_DRAFT.PDF</span>
                   <span className="text-emerald-500 font-black text-[9px]">OPEN FILE</span>
                 </div>
               ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // --- SUBJECTS VIEW COMPONENT ---
  const SubjectsView = () => {
    return (
      <div className="p-8">
        {/* HEADER */}
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-3xl font-light text-gray-900 mb-2"
          >
            {dynamicGreeting}
          </motion.h1>
          <p className="text-gray-600">Manage your courses and assignments</p>
        </div>

        {/* SUBJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((s, index) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: -5,
                transition: { duration: 0.3 }
              }}
              onClick={() => handleSubjectClick(s)}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer overflow-hidden border border-gray-200"
            >
              {/* CARD HEADER */}
              <div className={`${s.color} h-28 p-5 relative`}>
                <h3 className="text-lg font-semibold text-white">
                  {s.code}
                </h3>
                <p className="text-white/90 text-sm mt-1">{s.title}</p>
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <User size={16} className="text-gray-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{s.prof}</span>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    s.progress >= 75 ? 'bg-green-100 text-green-800' :
                    s.progress >= 50 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {s.progress}%
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {s.sched}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} />
                    {s.progress}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  // --- CALENDAR VIEW COMPONENT ---
  const CalendarViewComponent = () => {
    return (
      <div className="max-w-7xl mx-auto p-6 animate-in fade-in zoom-in-95 duration-1000">
        <SectionHeader icon={CalendarIcon} title={t("navCal")} subtitle="Synchronized Academic Schedule 2026" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 space-y-8">
            <div className={`p-5 rounded-[2rem] border ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200 shadow-2xl'}`}>
              <div className="flex justify-between items-center mb-10">
                 <button onClick={() => setCalendarMonth("March 2026")} className="p-3 hover:bg-emerald-500 hover:text-white rounded-2xl transition-all"><ChevronLeft size={20}/></button>
                 <span className="text-sm font-black uppercase tracking-[0.3em] italic text-emerald-500">{calendarMonth}</span>
                 <button onClick={() => setCalendarMonth("May 2026")} className="p-3 hover:bg-emerald-500 hover:text-white rounded-2xl transition-all"><ChevronRight size={20}/></button>
              </div>
              <div className="grid grid-cols-7 gap-4 text-center mb-8">
                {['S','M','T','W','T','F','S'].map(d => <span key={d} className="text-[11px] font-black text-slate-500 opacity-50">{d}</span>)}
                {[...Array(30)].map((_, i) => (
                  <div key={i} onClick={() => setSelectedDate(i+1)} className={`text-[11px] font-black py-3.5 rounded-2xl cursor-pointer transition-all ${selectedDate === i+1 ? 'bg-emerald-600 text-white shadow-2xl shadow-emerald-500/30 scale-110' : (darkMode ? 'hover:bg-white/10 text-slate-300' : 'hover:bg-slate-100 text-slate-600')}`}>
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-8 space-y-8">
            <div className={`p-5 rounded-[2rem] border text-left ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200 shadow-2xl'}`}>
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-base font-black uppercase italic tracking-tighter text-emerald-500">Events for {selectedDate} {calendarMonth}</h3>
                 <button onClick={() => setShowAddEventModal(true)} className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-black text-[10px] tracking-widest hover:bg-emerald-500 transition-all">
                   ADD EVENT
                 </button>
              </div>
              <div className="space-y-4">
                 {events.flatMap(e => e.items).filter(item => item.date === selectedDate).map(item => (
                    <div key={item.id} className={`p-4 rounded-xl border-l-4 ${darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'} ${item.type === 'deadline' ? 'border-red-500' : 'border-emerald-500'}`}>
                       <div className="flex justify-between items-start">
                          <div>
                             <p className="text-[11px] font-black uppercase tracking-tight">{item.title}</p>
                             <p className="text-[9px] font-bold text-slate-500 uppercase">{item.subId} · {item.time}</p>
                          </div>
                          <span className={`text-[9px] font-black px-2 py-1 rounded ${item.type === 'deadline' ? 'bg-red-500/20 text-red-600' : 'bg-emerald-500/20 text-emerald-600'}`}>
                             {item.type}
                          </span>
                       </div>
                    </div>
                 ))}
                 {events.flatMap(e => e.items).filter(item => item.date === selectedDate).length === 0 && (
                    <div className="text-center py-8">
                       <p className="text-slate-500 font-bold text-sm">No events scheduled</p>
                    </div>
                 )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- STREAM VIEW COMPONENT ---
  const StreamView = () => {
    if (!activeSubject) return null;
    
    return (
      <div className="animate-in slide-in-from-right-12 duration-700">
        <div className={`h-60 p-8 flex flex-col justify-end text-left relative overflow-hidden ${activeSubject.color}`}>
           <div className="absolute top-0 right-0 p-5 opacity-10 rotate-12 scale-[2]"><Layers size={150}/></div>
           <h2 className="text-6xl font-black italic uppercase tracking-tighter text-white mb-2 drop-shadow-2xl">{activeSubject.title}</h2>
           <div className="flex items-center gap-6">
              <p className="text-white font-black text-sm uppercase tracking-[0.4em] opacity-90">{activeSubject.code} • Prof. {activeSubject.prof}</p>
              <div className="h-6 w-px bg-white/20"></div>
              <p className="text-white font-black text-[10px] uppercase tracking-widest opacity-70 italic">{activeSubject.room} • {activeSubject.sched}</p>
           </div>
        </div>

        <div className="max-w-7xl mx-auto p-6 grid grid-cols-12 gap-5">
           <div className="col-span-12 lg:col-span-4 space-y-6">
              <div className={`p-4 rounded-[2rem] border text-left ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200 shadow-xl'}`}>
                 <h4 className="text-[12px] font-black uppercase text-emerald-500 mb-6 tracking-[0.2em] flex items-center gap-3"><ClipboardList size={18}/> Modules & Tasks</h4>
                 <div className="space-y-6">
                    <div className="border-l-4 border-emerald-500 pl-5 group cursor-pointer">
                       <p className="text-[10px] font-black text-emerald-500 uppercase mb-1">Upcoming Deadline</p>
                       <p className="text-sm font-black uppercase tracking-tight group-hover:underline">Laboratory Activity 05</p>
                       <p className="text-[9px] font-bold text-slate-500 uppercase mt-2">Due in 14 Hours</p>
                    </div>
                    <div className="border-l-4 border-slate-500/30 pl-5 opacity-60">
                       <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Completed</p>
                       <p className="text-sm font-black uppercase tracking-tight line-through">Preliminary Exam</p>
                       <p className="text-[9px] font-bold text-slate-500 uppercase mt-2">Graded: 96/100</p>
                    </div>
                 </div>
                 <button className="w-full mt-10 py-5 rounded-[2rem] bg-emerald-600 text-white font-black uppercase text-[10px] tracking-[0.2em] shadow-xl shadow-emerald-900/30 hover:bg-emerald-500 transition-all flex items-center justify-center gap-3">
                    <PlusCircle size={18}/> Submit Work
                 </button>
              </div>
              <div className={`p-8 rounded-[3rem] border text-left ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200'}`}>
                  <h4 className="text-[12px] font-black uppercase text-slate-500 mb-6 tracking-widest">Instructor Info</h4>
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-black text-lg italic shadow-inner">P</div>
                     <div>
                        <p className="text-sm font-black uppercase">{activeSubject.prof}</p>
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Lead Researcher</p>
                     </div>
                  </div>
                  <button className={`w-full py-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all ${darkMode ? 'border-white/10 hover:bg-white/5' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>Contact Instructor</button>
              </div>
           </div>

           <div className="col-span-12 lg:col-span-8 space-y-8">
              <div className={`p-8 rounded-[3rem] border flex items-center gap-6 shadow-2xl ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200'}`}>
                 <div className="w-14 h-14 rounded-[1.5rem] bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-inner"><User size={24}/></div>
                 <input type="text" placeholder="Share something with your classmates..." className="flex-1 bg-transparent outline-none text-base font-bold placeholder:text-slate-500/50"/>
                 <div className="flex items-center gap-2">
                    <button className="p-4 rounded-2xl hover:bg-slate-500/10 transition-all"><Paperclip size={20}/></button>
                    <button className="p-4 bg-emerald-500 rounded-2xl text-white shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all"><Send size={22}/></button>
                 </div>
              </div>
              
              {/* Announcement Feed */}
              <div className={`p-5 rounded-[2rem] border text-left relative overflow-hidden ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200 shadow-xl'}`}>
                 <div className="absolute top-0 right-0 p-4 opacity-5"><MessageSquare size={80}/></div>
                 <div className="flex items-center gap-5 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white font-black shadow-lg">P</div>
                    <div>
                       <p className="text-sm font-black uppercase tracking-tight italic">Prof. {activeSubject.prof}</p>
                       <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Posted 2 Days Ago • Global Announcement</p>
                    </div>
                 </div>
                 <div className={`p-8 rounded-[2rem] mb-8 border-l-4 border-emerald-500 ${darkMode ? 'bg-white/5' : 'bg-slate-50'}`}>
                    <p className="text-base font-black leading-relaxed italic text-emerald-500">"{activeSubject.announcement}"</p>
                 </div>
                 <div className="flex gap-4 mb-10">
                    <div className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase flex items-center gap-3 transition-all cursor-pointer ${darkMode ? 'bg-white/5 border border-white/10 hover:bg-white/10' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                       <FileText size={16} className="text-emerald-500"/> Syllabus_Outline.pdf
                    </div>
                    <div className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase flex items-center gap-3 transition-all cursor-pointer ${darkMode ? 'bg-white/5 border border-white/10 hover:bg-white/10' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                       <ImageIcon size={16} className="text-blue-500"/> Reading_Resources.zip
                    </div>
                 </div>
                 <div className="pt-8 border-t border-slate-500/10 flex justify-between items-center">
                    <div className="flex items-center gap-4 text-[10px] font-black text-slate-500 uppercase tracking-widest cursor-pointer hover:text-emerald-500 group">
                       <MessageSquare size={16} className="group-hover:rotate-12 transition-transform"/> 24 Class Comments
                    </div>
                    <div className="flex gap-2">
                       <button className="p-3 rounded-xl hover:bg-slate-500/10 transition-all"><Share2 size={18}/></button>
                       <button className="p-3 rounded-xl hover:bg-slate-500/10 transition-all"><MoreVertical size={18}/></button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    );
  };

  // --- MAIN APP ---
  return (
    <div className="h-screen w-full flex flex-col antialiased transition-colors duration-500 overflow-hidden"
         style={{ backgroundColor: 'var(--bg-main)', color: 'var(--color-primary)' }}>
      { !isLoggedIn ? (
        /* PASTE ALL MY EXISTING LOGIN UI HERE */
        <LoginScreen />
      ) : (
        /* SHOW THE ACTUAL SYSTEM/DASHBOARD HERE */
        <div className="h-screen w-full flex flex-col transition-all duration-300"
             style={{ backgroundColor: 'var(--bg-main)' }}>
          {/* GOOGLE CLASSROOM STYLE HEADER */}
          <header className="sticky top-0 z-30 border-b transition-all duration-300"
                  style={{ backgroundColor: 'var(--sidebar-bg)', borderColor: 'var(--border-light)' }}>
            <div className="flex items-center justify-between px-6 py-4">
              {/* Left Side */}
              <div className="flex items-center gap-4">
                {/* Menu Toggle */}
                <button 
                  onClick={() => setSidebarOpen(!isSidebarOpen)}
                  className="lg:hidden p-2 rounded-lg transition-all duration-300"
                  style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--color-primary)' }}
                >
                  <Menu size={20} />
                </button>
                
                {/* Logo and Title */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <BookOpen size={18} className="text-white" />
                  </div>
                  <div>
                    {activeSubject ? (
                      <>
                        <h1 className="heading-medium" style={{ color: 'var(--color-primary)' }}>Classroom</h1>
                        <p className="caption-text text-muted" style={{ color: 'var(--color-muted)' }}>{activeSubject.code} • {activeSubject.section}</p>
                      </>
                    ) : (
                      <>
                        <h1 className="heading-medium" style={{ color: 'var(--color-primary)' }}>EduPulse Classroom</h1>
                        <p className="caption-text text-muted" style={{ color: 'var(--color-muted)' }}>BSIT 3J • {currentYear}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                {isDarkMode ? (
                  <Sun size={20} style={{ color: 'var(--color-primary)' }} />
                ) : (
                  <Moon size={20} style={{ color: 'var(--color-primary)' }} />
                )}
              </button>
              
              {/* Search */}
              <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <Search size={16} style={{ color: 'var(--color-muted)' }} />
                <input 
                  type="text" 
                  placeholder="Search classes..." 
                  className="ml-2 bg-transparent outline-none text-sm w-48"
                  style={{ color: 'var(--color-primary)' }}
                />
              </div>
              
              {/* Notifications */}
              <button 
                onClick={() => showNotifications ? handleCloseNotifications() : setShowNotifications(true)}
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Bell size={20} className="text-gray-600" />
                {getUnreadCount() > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
              
              {/* Profile */}
              <button 
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                {currentUser ? currentUser.charAt(0).toUpperCase() : 'S'}
              </button>
            </div>
          </div>
        </header>

        {/* Sub-Navigation Tabs - Only show when subject is active */}
        {activeSubject && (
          <div className="border-b transition-all duration-300" 
               style={{ backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff', borderColor: isDarkMode ? '#333333' : '#e0e0e0' }}>
            <div className="flex justify-center items-center h-14 px-6">
              <div className="flex gap-8 items-center">
                <button 
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
                    view === 'stream' 
                      ? 'text-blue-600 border-blue-600' 
                      : 'text-gray-500 border-transparent hover:text-gray-700'
                  }`}
                  onClick={() => setView('stream')}
                >
                  Stream
                </button>
                <button 
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
                    view === 'classwork' 
                      ? 'text-blue-600 border-blue-600' 
                      : 'text-gray-500 border-transparent hover:text-gray-700'
                  }`}
                  onClick={() => setView('classwork')}
                >
                  Classwork
                </button>
                <button 
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 border-b-2 ${
                    view === 'people' 
                      ? 'text-blue-600 border-blue-600' 
                      : 'text-gray-500 border-transparent hover:text-gray-700'
                  }`}
                  onClick={() => setView('people')}
                >
                  People
                </button>
              </div>
            </div>
          </div>
        )}

          {/* MAIN CONTENT */}
          <div className="flex-1 flex overflow-hidden transition-all duration-300"
               style={{ backgroundColor: activeSubject ? '#f8f9fa' : 'var(--bg-main)' }}>
            {/* Sidebar */}
            <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 border-r transition-transform duration-300 mt-16 lg:mt-0`}
                  style={{ backgroundColor: 'var(--sidebar-bg)', borderColor: 'var(--border-light)' }}>
              {/* Header */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <BookOpen size={18} className="text-white" />
                  </div>
                  <div>
                    <h1 className="heading-medium">EduPulse</h1>
                    <p className="sidebar-sublabel">Learning Platform</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="px-2">
                <button
                  onClick={() => setActiveNav('Home')}
                  className={`sidebar-item ${activeNav === 'Home' ? 'active' : ''}`}
                >
                  <Home size={20} className="sidebar-icon" style={{ color: activeNav === 'Home' ? (isDarkMode ? '#202124' : '#1A73E8') : (isDarkMode ? '#FFFFFF' : '#3C4043') }} />
                  <span className="sidebar-label" style={{ color: activeNav === 'Home' ? (isDarkMode ? '#202124' : '#1A73E8') : (isDarkMode ? '#FFFFFF' : '#3C4043') }}>Home</span>
                </button>
                
                <button
                  onClick={() => setActiveNav('Calendar')}
                  className={`sidebar-item ${activeNav === 'Calendar' ? 'active' : ''}`}
                >
                  <CalendarIcon size={20} className="sidebar-icon" style={{ color: activeNav === 'Calendar' ? (isDarkMode ? '#202124' : '#1A73E8') : (isDarkMode ? '#FFFFFF' : '#3C4043') }} />
                  <span className="sidebar-label" style={{ color: activeNav === 'Calendar' ? (isDarkMode ? '#202124' : '#1A73E8') : (isDarkMode ? '#FFFFFF' : '#3C4043') }}>Calendar</span>
                </button>
                
                <button
                  onClick={() => setActiveNav('Tasks')}
                  className={`sidebar-item ${activeNav === 'Tasks' ? 'active' : ''}`}
                >
                  <ClipboardList size={20} className="sidebar-icon" style={{ color: activeNav === 'Tasks' ? (isDarkMode ? '#202124' : '#1A73E8') : (isDarkMode ? '#FFFFFF' : '#3C4043') }} />
                  <span className="sidebar-label" style={{ color: activeNav === 'Tasks' ? (isDarkMode ? '#202124' : '#1A73E8') : (isDarkMode ? '#FFFFFF' : '#3C4043') }}>To-do</span>
                </button>
                
                <button
                  onClick={() => setActiveNav('Grades')}
                  className={`sidebar-item ${activeNav === 'Grades' ? 'active' : ''}`}
                >
                  <Award size={20} className="sidebar-icon" style={{ color: activeNav === 'Grades' ? (isDarkMode ? '#202124' : '#1A73E8') : (isDarkMode ? '#FFFFFF' : '#3C4043') }} />
                  <span className="sidebar-label" style={{ color: activeNav === 'Grades' ? (isDarkMode ? '#202124' : '#1A73E8') : (isDarkMode ? '#FFFFFF' : '#3C4043') }}>Grades</span>
                </button>
              </nav>
              
              {/* Separator */}
              <div className="sidebar-separator"></div>
              
              {/* Enrolled Section */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="sidebar-section-title">Enrolled</h3>
                  <ChevronRight size={16} className="sidebar-icon" />
                </div>
                
                {/* Class List with Avatars */}
                <div className="max-h-96 overflow-y-auto space-y-2" style={{ scrollbarWidth: 'none' }}>
                  {courses.map((course, index) => (
                    <div 
                      key={course.id} 
                      className="sidebar-item"
                      onClick={() => handleSubjectSelect(course)}
                      style={{
                        backgroundColor: activeItem === course.id 
                          ? (isDarkMode ? 'rgba(26, 115, 232, 0.2)' : 'rgb(239, 246, 255)')
                          : 'transparent'
                      }}
                    >
                      <div className={`sidebar-avatar ${course.color}`}>
                        {course.code.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="sidebar-label" style={{ 
                          maxWidth: '120px', 
                          overflow: 'hidden', 
                          textOverflow: 'ellipsis', 
                          whiteSpace: 'nowrap',
                          color: activeItem === course.id 
                            ? (isDarkMode ? '#202124' : '#000000')
                            : (isDarkMode ? '#FFFFFF' : '#000000')
                        }}>{course.code}</div>
                        <div className="sidebar-sublabel" style={{ 
                          overflow: 'hidden', 
                          textOverflow: 'ellipsis', 
                          whiteSpace: 'nowrap',
                          color: activeItem === course.id 
                            ? (isDarkMode ? '#202124' : '#000000')
                            : (isDarkMode ? '#FFFFFF' : '#6B7280')
                        }}>{course.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Profile Section */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t transition-all duration-300"
                   style={{ borderColor: 'var(--border-light)', backgroundColor: 'var(--sidebar-bg)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                    {currentUser ? currentUser.charAt(0).toUpperCase() : 'S'}
                  </div>
                  <div className="flex-1">
                    <p className="sidebar-label" style={{ color: 'var(--color-primary)' }}>{currentUser || 'Student'}</p>
                    <p className="sidebar-sublabel" style={{ color: 'var(--color-muted)' }}>{studentID}</p>
                  </div>
                  <button onClick={handleLogout} className="sidebar-icon" style={{ color: 'var(--color-muted)' }}>
                    <LogOut size={18} />
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto transition-colors duration-300" style={{ backgroundColor: 'var(--bg-main)', scrollbarWidth: 'none' }}>
              <div className="max-w-7xl mx-auto p-6">
                {activeNav === 'Home' && !activeSubject && (
                  <div className="animate-in fade-in duration-500" style={{ scrollbarWidth: 'none' }}>
                    {/* Welcome Header */}
                    <div className="mb-8">
                      <h2 className="heading-large mb-2">Welcome back, {currentUser || 'Student'}!</h2>
                      <p className="body-text text-secondary">You have {getPendingTasksCount()} assignments due this week.</p>
                    </div>

                    {/* Subject Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ scrollbarWidth: 'none' }}>
                      {courses.map((course) => (
                        <div 
                          key={course.id}
                          className="cursor-pointer transition-all duration-200 hover:scale-105"
                          onClick={() => handleSubjectSelect(course)}
                        >
                          <div className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border transition-all duration-300"
                               style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}>
                            {/* Colored Header */}
                            <div className={`${course.color} h-32 relative`}>
                              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                              <div className="absolute bottom-3 left-4 text-white">
                                <h3 className="text-lg font-black uppercase tracking-tight mb-1">{course.code}</h3>
                                <p className="text-sm font-bold uppercase tracking-wider opacity-90 mb-1">{course.section}</p>
                                <p className="text-xs font-medium uppercase tracking-wide opacity-80 leading-tight">{course.title}</p>
                              </div>
                              {/* Circular Avatar */}
                              <div className="absolute bottom-3 right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-lg font-black text-gray-800">{course.code.charAt(0)}</span>
                              </div>
                            </div>
                            
                            {/* White/Dark Body */}
                            <div className="p-4 relative" style={{ backgroundColor: 'var(--card-bg)' }}>
                              <div className="mb-8">
                                <h4 className="text-sm font-medium uppercase mb-2" style={{ color: 'var(--color-primary)' }}>PROFESSOR</h4>
                                <p className="text-sm font-bold" style={{ color: 'var(--color-primary)' }}>{course.professor}</p>
                              </div>
                              
                              {/* Folder/Assignment Icons at Bottom-Right */}
                              <div className="absolute bottom-4 right-4 flex gap-2" style={{ color: 'var(--color-muted)' }}>
                                <Folder size={16} />
                                <FileText size={16} />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeNav === 'Home' && activeSubject && (
                  <div className="animate-in slide-in-from-right-12 duration-700">
                    {/* Green Banner */}
                    <div className="mx-6 mt-6">
                      <div className={`${activeSubject.color} rounded-2xl p-8 flex flex-col justify-end text-left relative overflow-hidden h-60`}>
                        <div className="absolute top-0 right-0 p-5 opacity-10 rotate-12 scale-[2]">
                          <Layers size={100} className="text-white" />
                        </div>
                        <div className="max-w-7xl">
                          <h2 className="text-5xl lg:text-6xl font-black italic uppercase tracking-tighter text-white mb-2 drop-shadow-2xl flex-shrink-0" 
                              style={{ 
                                flexWrap: 'wrap',
                                wordBreak: 'break-word',
                                maxWidth: '100%',
                                paddingRight: '60px',
                                lineHeight: 1.1
                              }}>
                            {activeSubject.code} - {activeSubject.title}
                          </h2>
                          <div className="flex items-center gap-6">
                            <p className="text-white font-black text-sm uppercase tracking-[0.4em] opacity-90">{activeSubject.section} • Prof. {activeSubject.professor}</p>
                            <div className="h-6 w-px bg-white/20"></div>
                            <p className="text-white font-black text-[10px] uppercase tracking-widest opacity-70 italic">{activeSubject.room} • {activeSubject.sched}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-5">
                      {/* Left Sidebar */}
                      <div className="col-span-12 lg:col-span-4 space-y-6">
                        {/* Meet Card */}
                        <div className="bg-white rounded-2xl border shadow-xl p-6 transition-all duration-300"
                             style={{ borderColor: isDarkMode ? '#333333' : '#e0e0e0' }}>
                          <h4 className="text-[12px] font-black uppercase mb-6 tracking-[0.2em] flex items-center gap-3"
                              style={{ color: 'var(--accent)' }}>
                            <Video size={18} className="mr-2" />
                            MEET
                          </h4>
                          <div className="space-y-4">
                            <div className="border-l-4 pl-5 group cursor-pointer transition-all duration-300"
                                 style={{ borderColor: 'var(--accent)' }}>
                              <p className="text-[10px] font-black uppercase mb-1 tracking-tight" style={{ color: 'var(--color-primary)' }}>Upcoming Deadline</p>
                              <p className="text-sm font-black uppercase tracking-tight group-hover:underline" style={{ color: 'var(--color-primary)' }}>Laboratory Activity 05</p>
                              <p className="text-[9px] font-bold uppercase mt-2" style={{ color: 'var(--color-muted)' }}>Due in 14 Hours</p>
                            </div>
                            <div className="border-l-4 pl-5 opacity-60 transition-all duration-300"
                                 style={{ borderColor: 'var(--border-light)' }}>
                              <p className="text-[10px] font-black uppercase mb-1 tracking-tight" style={{ color: 'var(--color-muted)' }}>Completed</p>
                              <p className="text-sm font-black uppercase tracking-tight line-through" style={{ color: 'var(--color-muted)' }}>Preliminary Exam</p>
                              <p className="text-[9px] font-bold uppercase mt-2" style={{ color: 'var(--color-muted)' }}>Graded: 96/100</p>
                            </div>
                          </div>
                          <button className="w-full mt-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-xl transition-all flex items-center justify-center gap-3"
                                  style={{ 
                                    backgroundColor: 'var(--accent)', 
                                    color: 'white',
                                    boxShadow: '0 10px 15px -3px rgba(187, 134, 252, 0.3)'
                                  }}>
                            <PlusCircle size={18} className="mr-2" />
                            Submit Work
                          </button>
                        </div>

                        {/* Instructor Info */}
                        <div className="bg-white rounded-3xl border p-8 transition-all duration-300"
                             style={{ borderColor: isDarkMode ? '#333333' : '#e0e0e0' }}>
                          <h4 className="text-[12px] font-black uppercase mb-6 tracking-widest" style={{ color: 'var(--color-muted)' }}>Instructor Info</h4>
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg italic shadow-inner transition-all duration-300"
                                 style={{ backgroundColor: 'rgba(187, 134, 252, 0.2)', color: 'var(--accent)' }}>
                              {activeSubject.code.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-black uppercase" style={{ color: 'var(--color-primary)' }}>{activeSubject.professor}</p>
                              <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: 'var(--color-muted)' }}>Lead Researcher</p>
                            </div>
                          </div>
                          <button className="w-full py-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all hover:opacity-80"
                                  style={{ borderColor: 'var(--border-light)', color: 'var(--color-primary)' }}>
                            Contact Instructor
                          </button>
                        </div>
                      </div>

                      {/* Main Feed */}
                      <div className="col-span-12 lg:col-span-8 space-y-8">
                        {/* New Announcement Bar */}
                        <div className="bg-white rounded-2xl border shadow-xl p-4 mb-8 transition-all duration-300"
                             style={{ borderColor: isDarkMode ? '#333333' : '#e0e0e0' }}>
                          <div className="flex items-center gap-5 mb-8">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black shadow-lg transition-all duration-300"
                                 style={{ backgroundColor: 'var(--accent)' }}>
                              <MessageSquare size={24} className="mr-2" />
                            </div>
                            <input 
                              type="text" 
                              placeholder="Share something with your classmates..." 
                              className="flex-1 bg-transparent outline-none text-base font-bold transition-all duration-300"
                              style={{ color: 'var(--color-primary)', placeholderColor: 'var(--color-muted)' }}
                            />
                            <div className="flex items-center gap-2">
                              <button className="p-4 rounded-2xl hover:opacity-80 transition-all"
                                      style={{ color: 'var(--color-muted)' }}>
                                <Paperclip size={20} />
                              </button>
                              <button className="p-4 rounded-2xl text-white shadow-xl transition-all"
                                      style={{ backgroundColor: 'var(--accent)' }}>
                                <Send size={22} />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Announcement Post */}
                        <div className="bg-white rounded-2xl border shadow-xl p-8 relative overflow-hidden transition-all duration-300"
                             style={{ borderColor: isDarkMode ? '#333333' : '#e0e0e0' }}>
                          <div className="absolute top-0 right-0 p-4 opacity-5">
                            <MessageSquare size={80} />
                          </div>
                          <div className="flex items-start gap-5 mb-8">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black shadow-lg transition-all duration-300"
                                 style={{ backgroundColor: 'var(--accent)' }}>
                              {activeSubject.code.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-black uppercase tracking-tight italic" style={{ color: 'var(--color-primary)' }}>Prof. {activeSubject.professor}</p>
                              <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: 'var(--color-muted)' }}>Posted 2 Days Ago • Global Announcement</p>
                            </div>
                          </div>
                          <div className="p-8 rounded-2xl mb-8 border-l-4 transition-all duration-300"
                               style={{ 
                                 borderColor: 'var(--accent)',
                                 backgroundColor: isDarkMode ? 'rgba(187, 134, 252, 0.1)' : 'var(--bg-tertiary)'
                               }}>
                            <p className="text-base font-black leading-relaxed italic break-words" style={{ color: 'var(--accent)', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                              "{activeSubject.announcement}"
                            </p>
                          </div>
                          <div className="pt-8 border-t flex justify-between items-center transition-all duration-300"
                               style={{ borderColor: 'var(--border-light)' }}>
                            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:opacity-80 group transition-all duration-300"
                                 style={{ color: 'var(--color-muted)' }}>
                              <MessageSquare size={16} className="group-hover:rotate-12 transition-transform" />
                              24 Class Comments
                            </div>
                            <div className="flex gap-2">
                              <button className="p-3 rounded-xl hover:opacity-80 transition-all"
                                      style={{ color: 'var(--color-muted)' }}>
                                <Share2 size={18} />
                              </button>
                              <button className="p-3 rounded-xl hover:opacity-80 transition-all"
                                      style={{ color: 'var(--color-muted)' }}>
                                <MoreVertical size={18} />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Additional Posts */}
                        <div className="space-y-8">
                          <div className="rounded-2xl border shadow-xl p-8 transition-all duration-300"
                               style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}>
                            <div className="flex items-center gap-5 mb-8">
                              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black shadow-lg transition-all duration-300"
                                   style={{ backgroundColor: 'var(--accent)' }}>
                                {activeSubject.code.charAt(0)}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-black uppercase tracking-tight italic" style={{ color: 'var(--color-primary)' }}>Prof. {activeSubject.professor}</p>
                                <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: 'var(--color-muted)' }}>Posted 1 Week Ago • Assignment Reminder</p>
                              </div>
                            </div>
                            <div className="p-8 rounded-2xl border-l-4 transition-all duration-300"
                                 style={{ 
                                   borderColor: 'var(--accent)',
                                   backgroundColor: isDarkMode ? 'rgba(187, 134, 252, 0.1)' : 'var(--bg-tertiary)'
                                 }}>
                              <p className="text-base font-black leading-relaxed" style={{ color: 'var(--color-primary)' }}>Please submit your Chapter 3 exercises by Friday for peer review.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}  

                {activeNav === 'Calendar' && (
                  <div className="text-center py-12">
                    <CalendarIcon size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="heading-medium mb-2">Calendar Coming Soon</h3>
                    <p className="body-text text-secondary">Your academic calendar will appear here.</p>
                  </div>
                )}

                {activeNav === 'Tasks' && (
                  <div>
                    <h3 className="heading-medium mb-4">Your Tasks</h3>
                    {tasks.length > 0 ? (
                      <div className="space-y-3">
                        {tasks.map((task) => (
                          <div key={task.id} className="rounded-lg border p-4 transition-all duration-300"
                               style={{
                                 backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
                                 borderColor: isDarkMode ? '#333333' : '#E5E7EB'
                               }}>
                            <div className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTask(task.id)}
                                className="w-5 h-5 text-blue-600 rounded"
                              />
                              <div className="flex-1">
                                <h4 className={`body-text ${task.completed ? 'text-muted line-through' : ''}`}>{task.title}</h4>
                                <p className="caption-text text-secondary">Due: {task.dueDate}</p>
                              </div>
                              <span className="px-2 py-1 text-xs rounded-full transition-all duration-300"
                                    style={{
                                      backgroundColor: task.priority === 'high' 
                                        ? (isDarkMode ? '#7F1D1D' : '#FEE2E2')
                                        : task.priority === 'medium' 
                                          ? (isDarkMode ? '#78350F' : '#FEF3C7')
                                          : (isDarkMode ? '#14532D' : '#D1FAE5'),
                                      color: task.priority === 'high'
                                        ? (isDarkMode ? '#FCA5A5' : '#991B1B')
                                        : task.priority === 'medium'
                                          ? (isDarkMode ? '#FCD34D' : '#92400E')
                                          : (isDarkMode ? '#6EE7B7' : '#065F46')
                                    }}>
                                {task.priority}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <ClipboardList size={48} className="text-gray-400 mx-auto mb-4" />
                        <h3 className="heading-medium mb-2">No Tasks</h3>
                        <p className="body-text text-secondary">You don't have any tasks yet.</p>
                      </div>
                    )}
                  </div>
                )}

                {activeNav === 'Grades' && (
                  <div className="text-center py-12">
                    <Award size={48} className="text-gray-400 mx-auto mb-4" />
                    <h3 className="heading-medium mb-2">Grades Coming Soon</h3>
                    <p className="body-text text-secondary">Your academic performance will appear here.</p>
                  </div>
                )}
              </div>
            </main>
          </div>

          {/* Notification Dropdown */}
          {(showNotifications || isClosingNotifications) && (
            <div 
              className="absolute top-16 right-4 w-80 rounded-lg shadow-lg border z-50 transition-all duration-300"
              style={{ 
                backgroundColor: isDarkMode ? '#1f1f1f' : '#FFFFFF',
                borderColor: isDarkMode ? '#374151' : '#E5E7EB',
                animation: isClosingNotifications 
                  ? 'fadeOut 0.3s ease-out forwards' 
                  : 'slideDownFadeIn 0.3s ease-out',
                opacity: isClosingNotifications ? 0 : 1,
                transform: isClosingNotifications 
                  ? 'translateY(-10px) scale(0.95)' 
                  : 'translateY(0) scale(1)'
              }}>
              <div className="p-4 border-b transition-colors duration-300"
                   style={{ borderColor: isDarkMode ? '#374151' : '#E5E7EB' }}>
                <h3 className="heading-medium" style={{ color: isDarkMode ? '#FFFFFF' : '#111827' }}>Notifications</h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <div key={notification.id} className="p-4 cursor-pointer transition-colors duration-300"
                         style={{ 
                           borderBottomColor: isDarkMode ? '#374151' : '#E5E7EB'
                         }}>
                      <h4 className="body-text" style={{ color: isDarkMode ? '#FFFFFF' : '#111827' }}>{notification.title}</h4>
                      <p className="body-text text-secondary mt-1" style={{ color: isDarkMode ? '#E5E7EB' : '#6B7280' }}>{notification.message}</p>
                      <p className="caption-text text-muted mt-2" style={{ color: isDarkMode ? '#B0B0B0' : '#9CA3AF' }}>{notification.time}</p>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <Bell size={32} className="text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">No notifications</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Profile Dropdown */}
          {showProfileDropdown && (
            <div className="absolute top-16 right-4 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                    {currentUser ? currentUser.charAt(0).toUpperCase() : 'S'}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{currentUser || 'Student'}</p>
                    <p className="text-sm text-gray-500">{studentID}</p>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 transition-colors">
                  Account Settings
                </button>
                <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 transition-colors">
                  Help & Support
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}

          {/* Course Modal */}
          {showCourseModal && selectedCourseDetail && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
                <div className={`${selectedCourseDetail.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">{selectedCourseDetail.code}</h2>
                      <p className="opacity-90">{selectedCourseDetail.title}</p>
                    </div>
                    <button 
                      onClick={() => setShowCourseModal(false)}
                      className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p style={{ color: 'var(--color-secondary)' }}>Instructor</p>
                      <p style={{ color: 'var(--color-primary)' }}>{selectedCourseDetail.professor}</p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--color-secondary)' }}>Section</p>
                      <p style={{ color: 'var(--color-primary)' }}>{selectedCourseDetail.section}</p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--color-secondary)' }}>Schedule</p>
                      <p style={{ color: 'var(--color-primary)' }}>{selectedCourseDetail.sched}</p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--color-secondary)' }}>Room</p>
                      <p style={{ color: 'var(--color-primary)' }}>{selectedCourseDetail.room}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Latest Announcement</h3>
                    <p style={{ color: 'var(--color-secondary)' }}>{selectedCourseDetail.announcement}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => alert(`Opening assignments for ${selectedCourseDetail.code}`)}
                      className="flex-1 px-4 py-2 rounded-lg transition-colors font-medium"
                      style={{
                        backgroundColor: isDarkMode ? '#374151' : '#F3F4F6',
                        color: isDarkMode ? '#E8EAED' : '#374151'
                      }}
                    >
                      View Assignments
                    </button>
                    <button 
                      onClick={() => window.open(selectedCourseDetail.meetLink, '_blank')}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Join Google Meet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;   
