"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, BookOpen, Calendar, ClipboardList, Settings, Bell, 
  Search, Menu, X, Sparkles, LogOut, CheckSquare, Send, 
  MessageSquare, FileText, Camera, Video, Moon, Sun, TrendingUp, 
  Users, CheckCircle, Activity, Zap, Plus, Award, Layers, 
  ChevronRight, User, Filter, ChevronLeft, PlusCircle, Paperclip,
  Share2, MoreVertical, Folder, ImageIcon, AlertCircle, Cpu, Zap as ZapIcon
} from 'lucide-react';

// --- PREMIUM UI CSS-IN-JS (Bubbly Typography + Perfect Dark Mode Background Fix) ---
const injectProfessionalStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

    :root {
      --font-family: 'Plus Jakarta Sans', 'Fredoka', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      --font-weight-heading: 700;
      --font-weight-body: 600;
      --letter-spacing-tight: -0.01em;
      --letter-spacing-normal: 0.01em;
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
      
      /* Dark Mode Colors (Deep Rich Dark Setup) */
      --bg-main-dark: #0f172a;
      --bg-secondary-dark: #1e293b;
      --bg-tertiary-dark: #334155;
      --card-bg-dark: #1e293b;
      --sidebar-bg-dark: #0f172a;
      --color-primary-dark: #f8fafc;
      --color-secondary-dark: #cbd5e1;
      --color-muted-dark: #94a3b8;
      --border-light-dark: #334155;
      --border-dark-dark: #424242;
      --highlight-dark: #2d3748;
      --highlight-border-dark: #4a5568;
      --accent-dark: #bb86fc;
      
      /* Electric Gradient Premium Tokens */
      --gradient-electric: linear-gradient(135deg, #4f46e5, #0ea5e9);
      --gradient-electric-hover: linear-gradient(135deg, #4338ca, #0284c7);
      --gradient-premium: linear-gradient(135deg, #7c3aed, #2563eb);
      --gradient-premium-hover: linear-gradient(135deg, #6d28d9, #1d4ed8);
      
      /* Default Core Variables mapped to Light Mode */
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
    
    /* Strict Dark mode style overrides when .dark-mode class is active */
    body.dark-mode, .dark-mode, :root.dark-mode {
      --bg-main: var(--bg-main-dark) !important;
      --bg-secondary: var(--bg-secondary-dark) !important;
      --bg-tertiary: var(--bg-tertiary-dark) !important;
      --card-bg: var(--card-bg-dark) !important;
      --sidebar-bg: var(--sidebar-bg-dark) !important;
      --color-primary: var(--color-primary-dark) !important;
      --color-secondary: var(--color-secondary-dark) !important;
      --color-muted: var(--color-muted-dark) !important;
      --border-light: var(--border-light-dark) !important;
      --border-dark: var(--border-dark-dark) !important;
      --highlight: var(--highlight-dark) !important;
      --highlight-border: var(--highlight-border-dark) !important;
      --accent: var(--accent-dark) !important;
    }  

    /* Global Typography Override for Bubbly & Bouncy Feel */
    * {
      box-sizing: border-box;
      font-family: var(--font-family) !important;
    }

    body {
      font-family: var(--font-family) !important;
      font-weight: var(--font-weight-body);
      background-color: var(--bg-main) !important;
      color: var(--color-primary) !important;
      line-height: var(--line-height-body);
      letter-spacing: var(--letter-spacing-normal);
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    }

    h1, h2, h3, h4, h5, h6, .app-brand-title {
      font-family: 'Fredoka', var(--font-family) !important;
      font-weight: var(--font-weight-heading) !important;
      line-height: var(--line-height-heading);
      letter-spacing: var(--letter-spacing-tight);
      margin: 0;
      margin-bottom: 0.75rem;
      color: var(--color-primary) !important;
    }

    h1 { font-size: 28px; }
    h2 { font-size: 26px; }
    h3 { font-size: 24px; }
    h4 { font-size: 22px; }
    h5 { font-size: 20px; }
    h6 { font-size: 18px; }

    /* Custom Input elements dynamic font assignment */
    input, select, textarea, button {
      font-family: var(--font-family) !important;
    }

    p {
      font-family: var(--font-family) !important;
      font-weight: var(--font-weight-body);
      line-height: var(--line-height-body);
      letter-spacing: var(--letter-spacing-normal);
      margin: 0;
      margin-bottom: 1rem;
      color: var(--color-primary) !important;
    }

    .text-secondary {
      color: var(--color-secondary) !important;
    }

    .text-muted {
      color: var(--color-muted) !important;
    }

    /* Google Classroom Sidebar Styles - TASK 1 REFACTORED */
    .sidebar-pill-active {
      background-color: #e0f2fe;
      color: #0369a1;
      font-weight: 600;
    }

    body.dark-mode .sidebar-pill-active {
      background-color: #082f49;
      color: #06b6d4;
    }

    .sidebar-menu-item {
      padding: 10px 16px;
      margin: 4px 8px;
      border-radius: 20px;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 500;
      color: var(--color-secondary);
    }

    .sidebar-menu-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .sidebar-menu-item.active {
      background-color: #e0f2fe;
      color: #0369a1;
      font-weight: 600;
    }

    body.dark-mode .sidebar-menu-item.active {
      background-color: #082f49;
      color: #06b6d4;
    }

    .subject-badge {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: bold;
      color: white;
      flex-shrink: 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    /* Stream Tab Navigation - TASK 2 */
    .stream-nav-tab {
      padding: 8px 16px;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.2s ease;
      color: var(--color-secondary);
    }

    .stream-nav-tab.active {
      background: var(--gradient-electric);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      border-bottom-color: #0ea5e9;
      color: #0ea5e9;
    }

    body.dark-mode .stream-nav-tab.active {
      color: #0ea5e9;
    }

    .stream-nav-tab:hover {
      transform: translateY(-1px);
    }

    /* Stream Announcement Card */
    .stream-post-card {
      border: 1px solid var(--border-light);
      border-radius: 12px;
      background-color: var(--card-bg);
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .stream-post-card:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    body.dark-mode .stream-post-card:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    }

    /* Micro-interactions - TASK 3 */
    .bouncy-button {
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }

    .bouncy-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    .bouncy-button:active {
      transform: scale(0.98);
    }

    .rounded-premium {
      border-radius: 20px;
    }

    .rounded-premium-lg {
      border-radius: 24px;
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
      background: var(--border-light);
      border-radius: 4px;
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

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in {
      animation: fadeIn 0.3s ease-out;
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
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeStreamTab, setActiveStreamTab] = useState('Stream');
  
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });
  
  // UI State
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [selectedCourseDetail, setSelectedCourseDetail] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [aiMessage, setAiMessage] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  
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
  
  // --- Theme Sync Effect Fix ---
  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    if (isDarkMode) {
      root.classList.add('dark', 'dark-mode');
      body.classList.add('dark', 'dark-mode');
    } else {
      root.classList.remove('dark', 'dark-mode');
      body.classList.remove('dark', 'dark-mode');
    }
  }, [isDarkMode]);

  // Inject Styles on Mount
  useEffect(() => {
    injectProfessionalStyles();
  }, []);

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

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setCurrentUser("");
    setActiveNav('Home');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCourseClick = (course) => {
    setSelectedCourseDetail(course);
    setShowCourseModal(true);
  };

  const handleSubjectSelect = (course) => {
    setSelectedCourseDetail(course);
    setActiveItem(course.id);
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

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPendingTasksCount = () => {
    return tasks.filter(t => !t.completed).length;
  };
  
  const LoginScreen = () => {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 transition-all duration-300" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div 
          className="p-8 rounded-3xl shadow-2xl w-full max-w-md border text-center transition-all duration-300"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Sparkles size={32} className="text-white" />
          </div>

          <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>EduPulse</h1>
          <p className="text-sm mb-8" style={{ color: 'var(--color-secondary)' }}>Next generation learning platform</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="text" 
              placeholder="Student ID" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="w-full px-4 py-3 border rounded-xl outline-none transition-all focus:border-blue-500 text-sm font-medium" 
              style={{ backgroundColor: 'var(--bg-main)', color: 'var(--color-primary)', borderColor: 'var(--border-light)' }} 
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full px-4 py-3 border rounded-xl outline-none transition-all focus:border-blue-500 text-sm font-medium" 
              style={{ backgroundColor: 'var(--bg-main)', color: 'var(--color-primary)', borderColor: 'var(--border-light)' }} 
              required
            />
            <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-md active:scale-[0.99]">
              Sign In
            </button>
          </form>

          <p className="text-xs mt-6" style={{ color: 'var(--color-muted)' }}>Demo Admin: admin / admin</p>
        </div>
      </div>
    );
  };

  // =========================================================================
  // --- TASK 1: REFACTORED SIDEBAR (GOOGLE CLASSROOM STYLE) ---
  // =========================================================================
  const Sidebar = () => {
    const navigationItems = [
      { id: 'Home', name: 'Home', icon: Home, label: 'Home' },
      { id: 'Calendar', name: 'Calendar', icon: Calendar, label: 'Calendar' },
      { id: 'Chat', name: 'Gemini', icon: ZapIcon, label: 'Gemini' },
    ];

    const colorMap = {
      'bg-green-600': '#16a34a',
      'bg-blue-600': '#2563eb',
      'bg-slate-600': '#475569',
      'bg-cyan-700': '#0891b2',
      'bg-sky-800': '#0c4a6e',
      'bg-teal-700': '#0f766e',
      'bg-blue-500': '#3b82f6',
      'bg-blue-700': '#1d4ed8',
    };

    return (
      <>
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        <motion.aside
          initial={false}
          animate={{ x: isSidebarOpen ? 0 : -280 }}
          className="fixed left-0 top-0 h-full w-72 border-r z-50 lg:translate-x-0 lg:static lg:z-auto transition-colors duration-300 flex flex-col"
          style={{ backgroundColor: 'var(--sidebar-bg)', borderColor: 'var(--border-light)' }}
        >
          {/* Main Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {/* Top Menu Items */}
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = (item.id === 'Chat' && isChatOpen) || activeNav === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (item.id === 'Chat') {
                      setIsChatOpen(!isChatOpen);
                    } else {
                      setActiveNav(item.id);
                    }
                    setSidebarOpen(false);
                  }}
                  className={`sidebar-menu-item w-full border-none ${isActive ? 'active' : ''}`}
                  style={{
                    backgroundColor: isActive ? '#e0f2fe' : 'transparent',
                    color: isActive ? '#0369a1' : 'var(--color-secondary)',
                  }}
                >
                  <Icon size={20} />
                  <span className="font-medium text-sm">{item.label}</span>
                </motion.button>
              );
            })}

            {/* Enrolled Courses Section Header */}
            <div className="pt-4 pb-2">
              <p className="px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-muted)' }}>
                Enrolled
              </p>
            </div>

            {/* Enrolled Courses List */}
            <div className="space-y-1">
              {courses.map((course) => {
                const bgCircleColor = colorMap[course.color] || '#4b5563';
                const isActive = activeItem === course.id;

                return (
                  <motion.button
                    key={course.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      handleSubjectSelect(course);
                      setSidebarOpen(false);
                    }}
                    className={`sidebar-menu-item w-full border-none group`}
                    style={{
                      backgroundColor: isActive ? '#e0f2fe' : 'transparent',
                      color: isActive ? '#0369a1' : 'var(--color-secondary)',
                    }}
                  >
                    {/* Circular Badge */}
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="subject-badge"
                      style={{ backgroundColor: bgCircleColor }}
                    >
                      {course.code.charAt(0)}
                    </motion.div>
                    {/* Course Info */}
                    <div className="overflow-hidden flex-1 text-left">
                      <p className="truncate text-sm font-semibold m-0 leading-tight">
                        {course.code}
                      </p>
                      <p className="text-xs truncate m-0 opacity-70">
                        {course.section}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Additional Items */}
            <div className="pt-4 pb-2">
              <p className="px-4 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-muted)' }}>
                Other
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setActiveNav('Tasks');
                setSidebarOpen(false);
              }}
              className={`sidebar-menu-item w-full border-none`}
              style={{
                backgroundColor: activeNav === 'Tasks' ? '#e0f2fe' : 'transparent',
                color: activeNav === 'Tasks' ? '#0369a1' : 'var(--color-secondary)',
              }}
            >
              <CheckSquare size={20} />
              <span className="font-medium text-sm">To-do</span>
            </motion.button>
          </nav>

          {/* Bottom Settings Section */}
          <div className="p-4 border-t space-y-2" style={{ borderColor: 'var(--border-light)' }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setActiveNav('Settings');
                setSidebarOpen(false);
              }}
              className={`sidebar-menu-item w-full border-none`}
              style={{
                backgroundColor: activeNav === 'Settings' ? '#e0f2fe' : 'transparent',
                color: activeNav === 'Settings' ? '#0369a1' : 'var(--color-secondary)',
              }}
            >
              <Settings size={20} />
              <span className="font-medium text-sm">Settings</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogout}
              className="sidebar-menu-item w-full border-none bg-red-500/10 text-red-600 hover:bg-red-500/20"
            >
              <LogOut size={20} />
              <span className="font-medium text-sm">Sign Out</span>
            </motion.button>
          </div>
        </motion.aside>
      </>
    );
  };

  // =========================================================================
  // --- TASK 2: SUBJECT VIEW WITH RTD BUTTON & STREAM LAYOUT ---
  // =========================================================================
  const SubjectStreamView = ({ course }) => {
    return (
      <div className="flex-1 overflow-auto flex flex-col" style={{ backgroundColor: 'var(--bg-main)' }}>
        {/* TASK 2.1: RTD Button Row - SEPARATED & NON-OVERLAPPING */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-0 z-20 p-4 border-b" 
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
        >
          <motion.button
            whileHover={{ scale: 1.02, x: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSelectedCourseDetail(null);
              setActiveItem(null);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border-none cursor-pointer text-sm font-semibold transition-all bouncy-button"
            style={{ 
              background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)', 
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
            }}
          >
            <ChevronLeft size={16} />
            Return to Dashboard
          </motion.button>
        </motion.div>

        {/* TASK 2.2: PREMIUM GRADIENT BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl border-none m-4 mb-0 text-white relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)' }}
        >
          {/* Decorative Background */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs font-semibold opacity-90 uppercase tracking-wide m-0">{course.code} • {course.section}</p>
                <h2 className="text-3xl font-bold mt-2 mb-0 leading-tight">{course.title}</h2>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <BookOpen size={24} className="text-white" />
              </div>
            </div>
            <p className="text-sm opacity-80 m-0">Instructed by {course.professor} • {course.room}</p>
          </div>
        </motion.div>

        {/* TASK 2.3: CLASSROOM HORIZONTAL NAV TABS */}
        <div className="px-4 pt-4 flex gap-0 border-b" style={{ borderColor: 'var(--border-light)' }}>
          {['Stream', 'Classwork', 'People'].map((tab) => {
            const isActive = activeStreamTab === tab;
            return (
              <motion.button
                key={tab}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveStreamTab(tab)}
                className="stream-nav-tab border-none bg-transparent px-4 py-3"
                style={{
                  color: isActive ? '#0ea5e9' : 'var(--color-secondary)',
                  borderBottom: isActive ? '3px solid #0ea5e9' : '3px solid transparent',
                  fontWeight: isActive ? '700' : '600',
                }}
              >
                {tab}
              </motion.button>
            );
          })}
        </div>

        {/* TASK 2.4: TWO-COLUMN LAYOUT - Stream Feed */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
            
            {/* LEFT SIDEBAR: Meet Card + Upcoming Tasks */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4 lg:col-span-1"
            >
              {/* Meet Integration Card */}
              <motion.div 
                whileHover={{ translateY: -4, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
                className="stream-post-card p-4 bouncy-button"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Video size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-base m-0" style={{ color: 'var(--color-primary)' }}>Google Meet</h3>
                </div>
                <p className="text-xs mb-4 m-0" style={{ color: 'var(--color-muted)' }}>Join the live classroom session</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open(course.meetLink, '_blank')}
                  className="w-full py-2 rounded-2xl text-white font-semibold text-sm border-none cursor-pointer bouncy-button"
                  style={{ background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)' }}
                >
                  Join Now
                </motion.button>
              </motion.div>

              {/* Upcoming Tasks Card */}
              <motion.div 
                whileHover={{ translateY: -4 }}
                className="stream-post-card p-4 bouncy-button"
              >
                <h3 className="font-bold text-base mb-3 m-0" style={{ color: 'var(--color-primary)' }}>Upcoming</h3>
                {tasks.slice(0, 2).map(task => (
                  <div key={task.id} className="mb-3 pb-3 border-b" style={{ borderColor: 'var(--border-light)' }}>
                    <p className="text-xs font-semibold m-0 line-clamp-2" style={{ color: 'var(--color-secondary)' }}>
                      {task.title}
                    </p>
                    <p className="text-xs m-0 mt-1" style={{ color: 'var(--color-muted)' }}>Due: {task.dueDate}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT PANEL: Stream Feed */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-4"
            >
              {/* Announce Something */}
              <motion.div 
                whileHover={{ translateY: -2 }}
                className="stream-post-card p-4 bouncy-button"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                    {currentUser.charAt(0).toUpperCase()}
                  </div>
                  <input 
                    type="text"
                    placeholder="Announce something to your class..."
                    className="flex-1 bg-transparent outline-none text-sm border-none"
                    style={{ color: 'var(--color-secondary)' }}
                    readOnly
                  />
                </div>
              </motion.div>

              {/* Announcements Stream */}
              <div className="space-y-4">
                {/* Post 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ translateY: -2 }}
                  className="stream-post-card overflow-hidden bouncy-button"
                >
                  {/* Post Header */}
                  <div className="p-4 border-b" style={{ borderColor: 'var(--border-light)' }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                          {course.professor.split(' ')[0].charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-sm m-0" style={{ color: 'var(--color-primary)' }}>Prof. {course.professor}</p>
                          <p className="text-xs m-0" style={{ color: 'var(--color-muted)' }}>Posted 1 hour ago</p>
                        </div>
                      </div>
                      <button className="p-1 border-none bg-transparent cursor-pointer">
                        <MoreVertical size={18} style={{ color: 'var(--color-muted)' }} />
                      </button>
                    </div>
                  </div>
                  {/* Post Body */}
                  <div className="p-4 border-b" style={{ borderColor: 'var(--border-light)' }}>
                    <p className="text-sm leading-relaxed m-0" style={{ color: 'var(--color-secondary)' }}>
                      {course.announcement}
                    </p>
                  </div>
                  {/* Comment Section */}
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex gap-2 items-center text-xs font-semibold mb-3" style={{ color: 'var(--color-muted)' }}>
                      <Users size={14} />
                      <span>2 class comments</span>
                    </div>
                    {/* Comment Input */}
                    <div className="flex items-center gap-2">
                      <input 
                        type="text"
                        placeholder="Add a comment..."
                        className="flex-1 px-3 py-2 bg-white dark:bg-gray-700 rounded-full text-xs border-none outline-none"
                        style={{ color: 'var(--color-primary)' }}
                      />
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 border-none bg-transparent cursor-pointer"
                        style={{ color: 'var(--color-secondary)' }}
                      >
                        <Send size={14} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* Post 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ translateY: -2 }}
                  className="stream-post-card overflow-hidden bouncy-button"
                >
                  <div className="p-4 border-b" style={{ borderColor: 'var(--border-light)' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                        S
                      </div>
                      <div>
                        <p className="font-bold text-sm m-0" style={{ color: 'var(--color-primary)' }}>System Notification</p>
                        <p className="text-xs m-0" style={{ color: 'var(--color-muted)' }}>3 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm m-0" style={{ color: 'var(--color-secondary)' }}>
                      Assignment deadline extended to Friday. Make sure to submit your work before 5:00 PM.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  // --- DASHBOARD HOME ---
  const DashboardHome = () => (
    <div className="p-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ translateY: -2 }}
          transition={{ duration: 0.2 }}
          className="p-6 rounded-2xl border shadow-sm hover:shadow-lg transition-all bouncy-button"
          style={{ background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)', borderColor: 'transparent' }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <BookOpen size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-white">{courses.length}</span>
          </div>
          <div className="text-sm font-semibold text-white/90">Active Courses</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          whileHover={{ translateY: -2 }}
          className="p-6 rounded-2xl border shadow-sm hover:shadow-lg transition-all bouncy-button"
          style={{ background: 'linear-gradient(135deg, #10b981, #059669)', borderColor: 'transparent' }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <CheckCircle size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-white">{tasks.filter(t => t.completed).length}</span>
          </div>
          <div className="text-sm font-semibold text-white/90">Completed Tasks</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          whileHover={{ translateY: -2 }}
          className="p-6 rounded-2xl border shadow-sm hover:shadow-lg transition-all bouncy-button"
          style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', borderColor: 'transparent' }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <Activity size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-white">{getUnreadCount()}</span>
          </div>
          <div className="text-sm font-semibold text-white/90">Unread Notifications</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          whileHover={{ translateY: -2 }}
          className="p-6 rounded-2xl border shadow-sm hover:shadow-lg transition-all bouncy-button"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', borderColor: 'transparent' }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
              <TrendingUp size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              {Math.round(courses.reduce((sum, c) => sum + c.progress, 0) / courses.length)}%
            </span>
          </div>
          <div className="text-sm font-semibold text-white/90">Average Progress</div>
        </motion.div>
      </div>

      {/* Course Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-family)' }}>
            Your Courses
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">{filteredCourses.length} enrolled</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ translateY: -4, boxShadow: '0 20px 40px rgba(79, 70, 229, 0.15)' }}
              onClick={() => handleSubjectSelect(course)}
              className="group rounded-3xl overflow-hidden cursor-pointer border transition-all duration-200 bouncy-button"
              style={{ minHeight: '280px', backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
            >
              {/* Banner */}
              <div 
                className={`relative h-28 ${course.color} p-5 flex flex-col justify-between`}
                style={{ 
                  backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)` 
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">
                      {course.code}
                    </span>
                    <span className="mx-2 text-white/60">•</span>
                    <span className="text-white/80 text-xs font-medium">
                      {course.section}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <BookOpen size={14} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-white font-bold text-base leading-tight line-clamp-2 pr-4" 
                    style={{ fontFamily: 'var(--font-family)', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                  {course.title}
                </h3>
                
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/10"></div>
              </div>
              
              {/* Card Body */}
              <div className="p-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${course.color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                    {course.professor.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-family)' }}>
                      {course.professor}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--color-muted)' }}>{course.sched}</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="font-medium" style={{ color: 'var(--color-secondary)' }}>Course Progress</span>
                    <span className={`font-bold ${course.progress >= 70 ? 'text-green-600' : course.progress >= 40 ? 'text-yellow-600' : 'text-gray-600'}`}>
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full rounded-full h-2 overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-2 rounded-full"
                      style={{ background: 'var(--gradient-electric)' }}
                    />
                  </div>
                </div>
                
                <div className="rounded-2xl p-3 border transition-all duration-200 hover:shadow-md" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-light)' }}>
                  <div className="flex items-start gap-2">
                    <MessageSquare size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-muted)' }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium mb-1" style={{ color: 'var(--color-muted)' }}>Latest Update</p>
                      <p className="text-xs line-clamp-2 leading-relaxed" style={{ color: 'var(--color-secondary)' }}>
                        {course.announcement}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- DASHBOARD WRAPPER ---
  const Dashboard = () => (
    <div className="flex-1 overflow-auto flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b bg-white dark:bg-gray-900 transition-all duration-300"
              style={{ borderColor: 'var(--border-light)' }}>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg bouncy-button"
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
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg bouncy-button"
            >
              <Bell size={20} />
              {getUnreadCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {getUnreadCount()}
                </span>
              )}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg bouncy-button"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {selectedCourseDetail && activeItem ? (
          <SubjectStreamView course={selectedCourseDetail} />
        ) : (
          <DashboardHome />
        )}
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
              <button onClick={() => setShowNotifications(false)} className="text-gray-400 hover:text-gray-600 border-none bg-transparent cursor-pointer">
                <X size={16} />
              </button>
            </div>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {notifications.map(notification => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => handleNotificationClick(notification)}
                className={`p-4 border-b cursor-pointer transition-colors border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 bouncy-button ${!notification.read ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''}`}
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

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
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsChatOpen(false)} 
                  className="text-white/80 hover:text-white border-none bg-transparent cursor-pointer"
                >
                  <X size={16} />
                </motion.button>
              </div>
            </div>
            
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
              </div>
            </div>
            
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
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={sendAiMessage}
                  disabled={isAiLoading || !aiMessage.trim()}
                  className="p-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white disabled:opacity-50 hover:from-purple-700 hover:to-blue-700 transition-all border-none cursor-pointer bouncy-button"
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all border-none cursor-pointer bouncy-button"
      >
        <MessageSquare size={24} />
      </motion.button>
    </div>
  );

  // --- MAIN RETURN ---
  if (!isLoggedIn) {
    return <LoginScreen />;
  }

  return (
    <div className="flex h-screen overflow-hidden transition-colors duration-300" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--color-primary)' }}>
      <Sidebar />
      <Dashboard />
      <NotificationDropdown />
      <FloatingChat />
    </div>
  );
};

export default App;