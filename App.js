import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, BookOpen, Calendar, ClipboardList, Settings, Bell, 
  Search, Menu, X, Plus, Sparkles, LogOut, MoreVertical,
  ChevronRight, LayoutGrid, UserCircle, Award, AlertCircle, Cpu, Zap, Filter,
  CalendarIcon, PlusCircle, Archive, User, Shield,
  Languages, Database, LifeBuoy, ChevronLeft,
  CheckSquare, Layers, ArrowLeft, Paperclip,
  Send, MessageSquare, FileText, ImageIcon,
  Share2, Clock, ExternalLink, HardDrive,
  Folder, Camera, RefreshCw, Download,
  Globe, Check, Activity, Key, Moon, Sun, TrendingUp, Users, CheckCircle, Circle, Video
} from 'lucide-react';

// --- PREMIUM UI CSS-IN-JS ---
const injectProfessionalStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
    
    :root {
      --bg-main: #ffffff;
      --bg-secondary: #f8fafc;
      --bg-tertiary: #f1f5f9;
      --google-blue: #1a73e8;
      --text-main: #0f172a;
      --text-sub: #475569;
      --text-muted: #94a3b8;
      --border: #e2e8f0;
      --border-light: #f1f5f9;
      --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
      --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
      --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
      --radius-sm: 0.5rem;
      --radius-md: 0.75rem;
      --radius-lg: 1rem;
      --radius-xl: 1.5rem;
    }

    /* Dark Mode Variables */
    body.dark-mode {
      --bg-main: #020617;
      --bg-secondary: #0f172a;
      --bg-tertiary: #1e293b;
      --text-main: #f8fafc;
      --text-sub: #e2e8f0;
      --text-muted: #94a3b8;
      --border: #334155;
      --border-light: #475569;
      --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
      --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4);
      --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.5);
      --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.6);
    }

    * {
      box-sizing: border-box;
    }

    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: var(--bg-main);
      color: var(--text-main);
      line-height: 1.6;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, h5, h6 {
      line-height: 1.25;
      font-weight: 700;
      margin: 0;
      margin-bottom: 0.5rem;
    }

    h1 { font-size: 2.25rem; }
    h2 { font-size: 1.875rem; }
    h3 { font-size: 1.5rem; }
    h4 { font-size: 1.25rem; }
    h5 { font-size: 1.125rem; }
    h6 { font-size: 1rem; }

    p {
      line-height: 1.6;
      margin: 0;
      margin-bottom: 1rem;
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
  // Basic Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSubject, setActiveSubject] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  
  // Navigation State
  const [activeNav, setActiveNav] = useState('Home');
  const [view, setView] = useState("dashboard");
  
  // Dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  
  // Chat & Messaging States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeChatTab, setActiveChatTab] = useState("messages");
  
  // Calendar & Todo States
  const [todoTab, setTodoTab] = useState("assigned");
  const [selectedDate, setSelectedDate] = useState(6);
  const [isAddingTask, setIsAddingTask] = useState(false);
  
  // Settings & Interactive States
  const [settingsTab, setSettingsTab] = useState("profile");
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [profilePic, setProfilePic] = useState(null);
  
  // Advanced Branching State Management
  const [dashboardView, setDashboardView] = useState({ main: 'dashboard', sub: null, detail: null });
  
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
  
  // Missing state variables
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [gpa, setGpa] = useState(1.25);
  const [attendance, setAttendance] = useState(98);
  const [totalCredits, setTotalCredits] = useState(124);
  const [completedUnits, setCompletedUnits] = useState(86);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [username, setUsername] = useState("");
  const [showMetadataAdvanced, setShowMetadataAdvanced] = useState(false);
  const [isRequestChangeActive, setIsRequestChangeActive] = useState(false);
  const [supportTicket, setSupportTicket] = useState("");
  const [aiDiagnostic, setAiDiagnostic] = useState("");
  const [faqSearch, setFaqSearch] = useState("");
  const [changeType, setChangeType] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [selectedCourseDetail, setSelectedCourseDetail] = useState(null);
  const [courseTab, setCourseTab] = useState('overview');
  const [chatTab, setChatTab] = useState('messages');
  const [aiMessage, setAiMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [selectedTaskDate, setSelectedTaskDate] = useState(new Date().toISOString().split('T')[0]);
  const [isKeyRotating, setIsKeyRotating] = useState(false);
  const [showSessionLogs, setShowSessionLogs] = useState(false);
  const [storageUsage, setStorageUsage] = useState(65);
  const [isSyncing, setIsSyncing] = useState(false);
  const [showPicOptions, setShowPicOptions] = useState(false);
  
  // Additional missing states
  const [activeCCTab, setActiveCCTab] = useState('identity');
  const [calendarMonth, setCalendarMonth] = useState('April 2026');
  const [showKillSessionsModal, setShowKillSessionsModal] = useState(false);
  
  // NEW ADVANCED FEATURES STATES
  // AI Study Buddy States
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileSummaries, setFileSummaries] = useState({});
  const [isProcessingFile, setIsProcessingFile] = useState(false);

  // Gamification States
  const [userXP, setUserXP] = useState(0);
  const [userLevel, setUserLevel] = useState(1);
  const [userBadges, setUserBadges] = useState([]);
  const [completedAssignments, setCompletedAssignments] = useState([]);
  const [showLevelUpModal, setShowLevelUpModal] = useState(false);

  // Real-time Collaboration States
  const [whiteboardContent, setWhiteboardContent] = useState('');
  const [sharedNotes, setSharedNotes] = useState([]);
  const [activeCollaborators, setActiveCollaborators] = useState([]);
  const [isWhiteboardOpen, setIsWhiteboardOpen] = useState(false);

  // Smart Attendance States
  const [moduleStartTime, setModuleStartTime] = useState(null);
  const [attendanceData, setAttendanceData] = useState({});
  const [totalTimeInModules, setTotalTimeInModules] = useState(0);

  // Progress Tracker States
  const [courseProgress, setCourseProgress] = useState({});
  const [recentActivities, setRecentActivities] = useState([]);

  // Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  
  // Enhanced Course data with Google Meet links
  const courses = [
    { id: 1, code: 'SP 101', title: 'Social Issues', section: 'BSIT 3J', color: 'bg-green-600', professor: 'Cynthia B. Dulagan', progress: 70, meetLink: 'https://meet.google.com/soc-issues-prof', room: 'RM 401', sched: 'Tue/Thu 1:00-2:30PM', announcement: 'I have already recorded your midterm grades and attendance.' },
    { id: 2, code: 'Capstone 1', title: 'Project Management', section: 'BSIT 3J', color: 'bg-blue-600', professor: 'LMS Admin2', progress: 45, meetLink: 'https://meet.google.com/cap-stone-one', room: 'Lab 302', sched: 'Mon/Wed 8:00-10:00AM', announcement: 'Please submit your Chapter 2 drafts by Saturday.' },
    { id: 3, code: 'SIA 101', title: 'System Integration', section: 'BSIT 3J', color: 'bg-slate-600', professor: 'Toni D. Granado', progress: 30, meetLink: 'https://meet.google.com/sia-sys-integ', room: 'Lab 305', sched: 'Fri 9:00-12:00PM', announcement: 'Prepare for the hands-on lab next week.' },
    { id: 4, code: 'TECH 32', title: 'Technopreneurship', section: 'BSIT 3J', color: 'bg-cyan-700', professor: 'Katherine C. Baggay', progress: 85, meetLink: 'https://meet.google.com/tech-nopre-neur', room: 'RM 202', sched: 'Mon 1:00-4:00PM', announcement: 'Pitch deck presentations start on Monday.' },
    { id: 5, code: 'MRC 22', title: 'Methods of Research', section: 'BSIT 3J', color: 'bg-sky-800', professor: 'Toni D. Granado', progress: 10, meetLink: 'https://meet.google.com/mrc-research-met', room: 'RM 405', sched: 'Wed 2:00-5:00PM', announcement: 'Finalize your research titles for approval.' },
    { id: 6, code: 'WS 102', title: 'Web Programming', section: 'BSIT 3J', color: 'bg-teal-700', professor: 'Roclyn Yamson', progress: 60, meetLink: 'https://meet.google.com/web-prog-react', room: 'Lab 301', sched: 'Tue 8:00-11:00AM', announcement: 'Don\'t forget to push your React projects to GitHub.' }
  ];
  
  const studentID = "2022-5089";
  const currentYear = "3rd Year";
  const department = "College of Information and Computing Sciences";
  
  // Languages
  const languages = ["English (US)", "English (UK)", "Spanish", "French", "German", "Japanese", "Korean", "Mandarin", "Filipino", "Italian", "Portuguese", "Russian", "Arabic", "Hindi", "Vietnamese"];
  
  // System Alerts
  const [systemAlerts, setSystemAlerts] = useState({
    "CRITICAL SYSTEM BREACH": true,
    "DATABASE SYNC ERRORS": true,
    "NEW LOGIN ATTEMPTS": false,
    "PERFORMANCE MONITORING": false,
    "BACKUP STATUS ALERTS": true
  });
  
  // optional safe default
  const dynamicGreeting = "Welcome back";
  
  // Enhanced course data with details
  const [courseDetails, setCourseDetails] = useState({
    announcements: [
      { id: 1, title: "Midterm Exam Schedule", content: "Exam will be on Friday at 2PM", date: "2024-04-20", author: "Prof. Smith" },
      { id: 2, title: "Project Deadline Extended", content: "New deadline is next Monday", date: "2024-04-18", author: "Prof. Johnson" },
    ],
    assignments: [
      { id: 1, title: "Chapter 5 Quiz", dueDate: "2024-04-22", status: "pending", points: 100 },
      { id: 2, title: "Project Proposal", dueDate: "2024-04-25", status: "submitted", points: 200 },
    ],
    people: [
      { id: 1, name: "Prof. Smith", role: "Instructor", avatar: "👨‍🏫" },
      { id: 2, name: "John Doe", role: "TA", avatar: "👨‍🎓" },
      { id: 3, name: "Jane Smith", role: "Student", avatar: "👩‍🎓" },
    ],
    files: [
      { id: 1, name: "Lecture Slides Week 5", type: "pdf", size: "2.5 MB", uploaded: "2024-04-15" },
      { id: 2, name: "Assignment Guidelines", type: "doc", size: "1.2 MB", uploaded: "2024-04-14" },
    ]
  });
  // =============================
  
  // Refs
  const fileInputRef = useRef(null);
  
  // Socket mock
  const socket = {
    on: () => {},
    emit: () => {},
    off: () => {}
  };
  
  // Effects
  useEffect(() => injectProfessionalStyles(), []);
  
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  
  useEffect(() => {
    socket.on('receive_private_message', (data) => { setChatLog((prev) => [...prev, data]); });
    return () => socket.off('receive_private_message');
  }, []);

  // Initialize filtered courses
  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  // =================================

  // Utility functions
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!username || !password) return;
    
    // Simple login validation - you can modify this as needed
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      setCurrentUser(username);
    }
  };

  // --- LOGIN SCREEN COMPONENT ---
  const LoginScreen = () => (
    <form onSubmit={handleLogin} className="h-screen flex items-center justify-center bg-slate-50 p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-12 rounded-[3rem] shadow-2xl w-full max-w-lg border border-gray-100 text-center">
        <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-100">
          <Sparkles size={40} className="text-white" />
        </div>
        <h1 className="text-4xl font-black mb-3 tracking-tight">EduPulse</h1>
        <p className="text-gray-400 font-medium mb-10 leading-relaxed">The next generation of classroom management.<br/>Enter your credentials to begin.</p>
        <div className="space-y-4 mb-8">
          <input 
            type="text" 
            placeholder="Student ID" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-6 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-semibold" 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-6 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-semibold" 
          />
        </div>
        <button type="submit" className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-[0.98]">
          Sign In to Portal
        </button>
      </motion.div>
    </form>
  );

  if (!isLoggedIn) return <LoginScreen />;

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfileDropdown(false);
    setUsername("");
    setPassword("");
  };

  const addTask = () => {
    if (newTaskTitle.trim()) {
      const newTask = {
        id: Date.now(),
        title: newTaskTitle,
        completed: false,
        dueDate: selectedTaskDate,
        priority: 'medium'
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const markAllNotificationsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const handleNotificationClick = (notification) => {
    setNotifications(notifications.map(n => 
      n.id === notification.id ? { ...n, read: true } : n
    ));
    // Navigate to related content based on notification type
    if (notification.type === 'assignment') {
      setActiveNav('Assignments');
    } else if (notification.type === 'grade') {
      setActiveNav('Home');
    }
  };

  const getUnreadCount = () => {
    return notifications.filter(n => !n.read).length;
  };

  const getCompletedTasksCount = () => {
    return tasks.filter(task => task.completed).length;
  };

  const getPendingTasksCount = () => {
    return tasks.filter(task => !task.completed).length;
  };

  const sendAiMessage = async () => {
    if (aiMessage.trim()) {
      // Add user's message to chatMessages array
      setChatMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: aiMessage }]);
      
      setIsAiLoading(true);
      
      // Use setTimeout (1.5s) to add realistic AI response
      setTimeout(() => {
        const message = aiMessage.toLowerCase();
        let response = "";
        
        // Contextual responses based on user input
        if (message.includes('meet') || message.includes('class') || message.includes('video')) {
          response = "I can help you join your Google Meet sessions! Each course has a 'Join Meet' button in the Courses tab. Would you like me to show you how to access your ongoing classes?";
        } else if (message.includes('assignment') || message.includes('task') || message.includes('deadline')) {
          response = "I see you're asking about assignments. You have several pending tasks with upcoming deadlines. Would you like me to help you organize your study schedule or show you the Tasks tab?";
        } else if (message.includes('calendar') || message.includes('schedule')) {
          response = "Your academic calendar shows important deadlines and events. I can help you plan your week better. Would you like me to highlight your upcoming deadlines?";
        } else if (message.includes('help') || message.includes('study')) {
          response = "I'm here to help you succeed! I can assist with assignment tracking, course navigation, Google Meet links, and study planning. What specific challenge are you facing today?";
        } else {
          // Default contextual response
          const responses = [
            "Hello! I'm your EduPulse AI assistant. I can help you navigate your courses, track assignments, and join virtual classes. How can I assist you today?",
            "Welcome back! I've noticed you have several courses with active Google Meet sessions. Need help joining a class or managing your assignments?",
            "I'm here to support your learning journey! I can help you find your course materials, join virtual meetings, and track your academic progress. What would you like to work on?"
          ];
          response = responses[Math.floor(Math.random() * responses.length)];
        }
        
        // Add AI response to chatMessages array
        setChatMessages(prev => [...prev, { id: Date.now(), sender: 'ai', text: response }]);
        
        setAiResponse(response);
        setIsAiLoading(false);
        setAiMessage('');
      }, 1500);
    }
  };

  // NEW ADVANCED FUNCTIONS
  
  // AI Study Buddy Functions
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      type: file.type,
      size: file.size,
      uploadDate: new Date().toISOString()
    }));
    
    setUploadedFiles([...uploadedFiles, ...newFiles]);
    
    // Simulate AI processing and summarization
    newFiles.forEach(file => {
      setIsProcessingFile(true);
      setTimeout(() => {
        const summary = generateFileSummary(file);
        setFileSummaries(prev => ({
          ...prev,
          [file.id]: summary
        }));
        setIsProcessingFile(false);
        
        // Add to recent activities
        addRecentActivity(`Processed document: ${file.name}`, 'file');
        
        // Award XP for file upload
        awardXP(10, 'Document Upload');
      }, 2000);
    });
  };

  const generateFileSummary = (file) => {
    // Simulate AI-generated summary based on file type
    const summaries = {
      'application/pdf': `This PDF document contains comprehensive information about ${file.name.replace('.pdf', '')}. Key topics include theoretical concepts, practical examples, and case studies. Recommended for in-depth study and exam preparation.`,
      'application/msword': `This Word document covers detailed notes on ${file.name.replace('.docx', '').replace('.doc', '')}. Contains structured content with headings, bullet points, and important definitions suitable for quick review.`,
      'text/plain': `This text file contains concise notes about ${file.name.replace('.txt', '')}. Includes key terms, formulas, and summary points ideal for last-minute revision.`
    };
    
    return summaries[file.type] || `Document processed: ${file.name}. Content is now available for AI-assisted study and Q&A.`;
  };

  // Gamification Functions
  const calculateLevel = (xp) => {
    return Math.floor(xp / 100) + 1;
  };

  const awardXP = (amount, activity) => {
    const newXP = userXP + amount;
    const newLevel = calculateLevel(newXP);
    
    setUserXP(newXP);
    
    if (newLevel > userLevel) {
      setUserLevel(newLevel);
      setShowLevelUpModal(true);
      
      // Award badge for level up
      const newBadge = {
        id: Date.now(),
        name: `Level ${newLevel} Achiever`,
        description: `Reached level ${newLevel}`,
        icon: '🏆',
        earnedDate: new Date().toISOString()
      };
      setUserBadges([...userBadges, newBadge]);
      
      // Add to recent activities
      addRecentActivity(`Level up! Now level ${newLevel}`, 'achievement');
    }
    
    // Add to recent activities
    addRecentActivity(`+${amount} XP - ${activity}`, 'xp');
  };

  const completeAssignment = (assignmentId) => {
    if (!completedAssignments.includes(assignmentId)) {
      setCompletedAssignments([...completedAssignments, assignmentId]);
      awardXP(50, 'Assignment Completed');
      
      // Update course progress
      const course = courses.find(c => c.id === assignmentId);
      if (course) {
        setCourseProgress(prev => ({
          ...prev,
          [assignmentId]: (prev[assignmentId] || 0) + 25
        }));
      }
    }
  };

  // Real-time Collaboration Functions
  const updateWhiteboard = (content) => {
    setWhiteboardContent(content);
    
    // Simulate real-time collaboration
    if (Math.random() > 0.7) {
      const collaborator = {
        id: Date.now(),
        name: `Student ${Math.floor(Math.random() * 100)}`,
        avatar: '👤',
        isActive: true
      };
      
      setActiveCollaborators(prev => {
        const exists = prev.find(c => c.id === collaborator.id);
        return exists ? prev : [...prev, collaborator];
      });
    }
  };

  const addSharedNote = (note) => {
    const newNote = {
      id: Date.now(),
      content: note,
      author: 'You',
      timestamp: new Date().toISOString(),
      course: activeNav === 'Courses' ? 'Current Course' : 'General'
    };
    
    setSharedNotes([newNote, ...sharedNotes]);
    awardXP(5, 'Shared Note');
    addRecentActivity(`Added note: ${note.substring(0, 30)}...`, 'collaboration');
  };

  // Smart Attendance Functions
  const startModuleTracking = (moduleId) => {
    setModuleStartTime(Date.now());
    
    // Clear previous tracking if exists
    if (attendanceData[moduleId]) {
      const previousTime = attendanceData[moduleId].totalTime || 0;
      setAttendanceData(prev => ({
        ...prev,
        [moduleId]: {
          ...prev[moduleId],
          totalTime: previousTime,
          lastVisit: new Date().toISOString()
        }
      }));
    }
  };

  const endModuleTracking = (moduleId) => {
    if (moduleStartTime) {
      const timeSpent = Date.now() - moduleStartTime;
      const minutesSpent = Math.floor(timeSpent / 60000);
      
      setAttendanceData(prev => ({
        ...prev,
        [moduleId]: {
          ...prev[moduleId],
          totalTime: (prev[moduleId]?.totalTime || 0) + minutesSpent,
          lastVisit: new Date().toISOString(),
          visits: (prev[moduleId]?.visits || 0) + 1
        }
      }));
      
      setTotalTimeInModules(prev => prev + minutesSpent);
      
      // Award XP for time spent (1 XP per 5 minutes)
      if (minutesSpent >= 5) {
        awardXP(Math.floor(minutesSpent / 5), 'Module Engagement');
      }
      
      setModuleStartTime(null);
    }
  };

  // Progress Tracker Functions
  const addRecentActivity = (description, type) => {
    const activity = {
      id: Date.now(),
      description,
      type,
      timestamp: new Date().toISOString()
    };
    
    setRecentActivities([activity, ...recentActivities].slice(0, 10)); // Keep only last 10 activities
  };

  const updateCourseProgress = (courseId, progress) => {
    setCourseProgress(prev => ({
      ...prev,
      [courseId]: Math.min(100, Math.max(0, progress))
    }));
    
    if (progress >= 100) {
      awardXP(100, 'Course Completed');
      addRecentActivity(`Completed course!`, 'achievement');
    }
  };

  // Search Functions
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

  
  // --- ADVANCED REUSABLE UI COMPONENTS ---
  
  // Stat Card Component
  const StatCard = ({ title, value, subtitle, icon: Icon, color, trend }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} hover:shadow-lg transition-all`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-sm font-medium ${
            trend > 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            <TrendingUp size={16} />
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</div>
      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</div>
      <div className="text-xs text-gray-500 dark:text-gray-500">{subtitle}</div>
    </motion.div>
  );

  // Progress Card Component
  const ProgressCard = ({ title, progress, color, icon: Icon, description }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${color}`}>
            <Icon size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        </div>
        <span className="text-2xl font-bold text-gray-900 dark:text-white">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className={`${color.replace('bg-', 'bg-')} h-2 rounded-full transition-all duration-500`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );

  // Activity Item Component
  const ActivityItem = ({ icon, title, description, time, type }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`flex items-start gap-3 p-4 rounded-lg ${
        darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      } border hover:shadow-md transition-all`}
    >
      <div className={`p-2 rounded-lg ${
        type === 'achievement' ? 'bg-yellow-100 text-yellow-600' :
        type === 'xp' ? 'bg-purple-100 text-purple-600' :
        type === 'collaboration' ? 'bg-blue-100 text-blue-600' :
        type === 'file' ? 'bg-green-100 text-green-600' :
        'bg-gray-100 text-gray-600'
      }`}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 dark:text-white text-sm">{title}</h4>
        <p className="text-xs text-gray-600 dark:text-gray-400">{description}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{time}</p>
      </div>
    </motion.div>
  );

  // File Upload Item Component
  const FileUploadItem = ({ file, summary, isProcessing }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg border ${
        darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
          <FileText size={16} />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 dark:text-white text-sm">{file.name}</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {(file.size / 1024).toFixed(1)} KB • {new Date(file.uploadDate).toLocaleDateString()}
          </p>
          
          {isProcessing ? (
            <div className="mt-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              <span className="text-xs text-blue-600">Processing...</span>
            </div>
          ) : summary ? (
            <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-xs text-blue-800 dark:text-blue-200">
              {summary}
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );

  // Notification Dropdown Component
  const NotificationDropdown = ({ show, onClose, notifications, onNotificationClick, onMarkAllRead }) => {
    const unreadCount = notifications.filter(n => !n.read).length;
    
    return (
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className={`absolute right-4 top-16 w-80 rounded-2xl shadow-2xl border z-50 overflow-hidden ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-100'
            }`}
          >
            <div className={`p-4 border-b ${darkMode ? 'border-slate-700' : 'border-gray-100'}`}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={onMarkAllRead}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Mark all read
                    </button>
                  )}
                  <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <X size={16} />
                  </button>
                </div>
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

  // --- DASHBOARD VIEW COMPONENT ---
  const DashboardView = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    
    const handleCourseClick = (course) => {
      setSelectedCourse(course);
      startModuleTracking(course.id);
    };

    return (
      <div className="p-8 max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-2 text-gray-900 dark:text-white"
        >
          Welcome back, Student! 👋
        </motion.h1>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
          You have {getPendingTasksCount()} assignments due this week.
        </p>
        
        {/* Dashboard Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Courses"
            value={courses.length}
            subtitle="This semester"
            icon={BookOpen}
            color="bg-blue-500"
          />
          
          <StatCard
            title="Current GPA"
            value={gpa.toFixed(2)}
            subtitle="Excellent progress"
            icon={Award}
            color="bg-green-500"
            trend={5.2}
          />
          
          <StatCard
            title="Experience Points"
            value={userXP}
            subtitle={`Level ${userLevel}`}
            icon={Zap}
            color="bg-purple-500"
            trend={12.5}
          />
          
          <StatCard
            title="Study Hours"
            value={Math.floor(totalTimeInModules / 60)}
            subtitle="This week"
            icon={Clock}
            color="bg-orange-500"
            trend={8.3}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Course Progress</h2>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <ProgressCard
                    key={course.id}
                    title={course.code}
                    progress={course.progress}
                    color={course.color}
                    icon={BookOpen}
                    description={`${course.title} • Prof. ${course.professor}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* AI Study Buddy Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">AI Study Buddy</h2>
              
              {/* File Upload Area */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Upload Documents for AI Analysis
                </label>
                <div className={`border-2 border-dashed rounded-lg p-8 text-center ${
                  darkMode ? 'border-slate-600 bg-slate-900' : 'border-gray-300 bg-gray-50'
                }`}>
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <FileText size={48} className="mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Drop files here or click to upload
                    </p>
                    <p className="text-sm text-gray-500">
                      PDF, DOC, TXT files supported
                    </p>
                  </label>
                </div>
              </div>

              {/* Uploaded Files */}
              {uploadedFiles.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Processed Files</h3>
                  {uploadedFiles.map(file => (
                    <FileUploadItem
                      key={file.id}
                      file={file}
                      summary={fileSummaries[file.id]}
                      isProcessing={isProcessingFile}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Recent Activities</h2>
              <div className="space-y-3">
                {recentActivities.length > 0 ? (
                  recentActivities.map(activity => (
                    <ActivityItem
                      key={activity.id}
                      icon={
                        activity.type === 'achievement' ? <Award size={16} /> :
                        activity.type === 'xp' ? <Zap size={16} /> :
                        activity.type === 'collaboration' ? <Users size={16} /> :
                        activity.type === 'file' ? <FileText size={16} /> :
                        <Activity size={16} />
                      }
                      title={activity.description}
                      description={new Date(activity.timestamp).toLocaleString()}
                      time={new Date(activity.timestamp).toLocaleTimeString()}
                      type={activity.type}
                    />
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Activity size={48} className="mx-auto mb-4 opacity-20" />
                    <p>No recent activities</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Gamification Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}
            >
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Achievements</h2>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">Level {userLevel}</div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                  <div 
                    className="bg-purple-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(userXP % 100)}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {userXP % 100} / 100 XP to next level
                </p>
              </div>

              <div className="space-y-2">
                {userBadges.slice(0, 3).map(badge => (
                  <div key={badge.id} className="flex items-center gap-3 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <span className="text-2xl">{badge.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-gray-900 dark:text-white">{badge.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{badge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}
            >
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Actions</h2>
              <div className="space-y-3">
                <button
                  onClick={() => setShowChat(true)}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all"
                >
                  <MessageSquare size={20} />
                  Ask AI Assistant
                </button>
                <button
                  onClick={() => setActiveNav('Tasks')}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all"
                >
                  <ClipboardList size={20} />
                  View Tasks
                </button>
                <button
                  onClick={() => setActiveNav('Calendar')}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg font-medium hover:bg-green-100 dark:hover:bg-green-900/30 transition-all"
                >
                  <Calendar size={20} />
                  Check Calendar
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Course Modal */}
        {selectedCourse && (
          <CourseModal
            show={!!selectedCourse}
            onClose={() => {
              setSelectedCourse(null);
              endModuleTracking(selectedCourse.id);
            }}
            course={selectedCourse}
            courseTab={courseTab}
            onTabChange={setCourseTab}
          />
        )}
      </div>
    );
  };

  // --- COURSES VIEW COMPONENT ---
  const CoursesView = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    
    return (
      <div className="p-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          My Courses
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl border hover:shadow-lg transition-all cursor-pointer ${
                darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
              }`}
              onClick={() => setSelectedCourse(course)}
            >
              <div className={`${course.color} h-24 rounded-lg mb-4 flex items-center justify-center`}>
                <h3 className="text-white font-bold text-lg">{course.code}</h3>
              </div>
              <h4 className="font-bold mb-2 text-gray-900 dark:text-white">{course.title}</h4>
              <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">Prof. {course.professor}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-blue-600">{course.progress}% Complete</span>
                <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(course.meetLink, '_blank');
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all"
              >
                <Camera size={16} />
                Join Meet
              </button>
            </motion.div>
          ))}
        </div>
        
        {/* Course Modal */}
        <CourseModal
          show={!!selectedCourse}
          onClose={() => setSelectedCourse(null)}
          course={selectedCourse}
          courseTab={courseTab}
          onTabChange={setCourseTab}
        />
      </div>
    );
  };

  // --- CALENDAR VIEW COMPONENT ---
  const CalendarView = () => {
    const [selectedDate, setSelectedDate] = useState(15);
    
    
    return (
      <div className="p-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Academic Calendar
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Upcoming Events</h3>
            <div className="space-y-3">
              {events.map(event => (
                <div key={event.day} className={`p-4 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">{event.day} - {event.date}</h4>
                  {event.items.map(item => (
                    <div key={item.id} className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item.title}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.type === 'deadline' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' : 
                        item.type === 'quiz' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                        item.type === 'lab' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                        'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                      }`}>{item.type}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <div className={`p-6 rounded-xl border lg:col-span-2 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Calendar View</h3>
            <div className="grid grid-cols-7 gap-2 text-center">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <div key={day} className="p-2 text-sm font-bold text-gray-600 dark:text-gray-400">{day}</div>
              ))}
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i} 
                  className={`p-3 rounded cursor-pointer transition-colors ${
                    selectedDate === i + 1 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-900 dark:text-gray-100'
                  }`} 
                  onClick={() => setSelectedDate(i + 1)}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- TASKS VIEW COMPONENT ---
  const TasksView = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [tasksList, setTasksList] = useState([
      { id: 1, title: "Complete Chapter 5 Quiz", completed: false, dueDate: "2026-04-25", priority: 'high' },
      { id: 2, title: "Submit Lab Report", completed: true, dueDate: "2026-04-23", priority: 'medium' },
      { id: 3, title: "Review Lecture Notes", completed: false, dueDate: "2026-04-26", priority: 'low' },
      { id: 4, title: "Business Model Canvas", completed: false, dueDate: "2026-04-21", priority: 'high' },
      { id: 5, title: "React Portfolio", completed: true, dueDate: "2026-04-20", priority: 'medium' }
    ]);

    const toggleTask = (id) => {
      setTasksList(tasksList.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    };

    const upcomingTasks = tasksList.filter(t => !t.completed);
    const completedTasks = tasksList.filter(t => t.completed);

    return (
      <div className="p-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Tasks & Assignments
        </motion.h1>
        
        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'upcoming' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400'
            }`}
          >
            Upcoming ({upcomingTasks.length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'completed' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400'
            }`}
          >
            Completed ({completedTasks.length})
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Task List */}
          <div className="lg:col-span-2">
            <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
              <div className="space-y-3">
                {(activeTab === 'upcoming' ? upcomingTasks : completedTasks).map(task => (
                  <div key={task.id} className={`p-4 rounded-lg ${
                    task.completed ? 'bg-gray-50 dark:bg-slate-700 opacity-75' : 'bg-gray-50 dark:bg-slate-700'
                  }`}>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className={`font-medium mb-2 ${
                          task.completed 
                            ? 'line-through text-gray-600 dark:text-gray-400' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {task.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Due: {task.dueDate}</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            task.priority === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' :
                            task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                            'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                          }`}>
                            {task.priority}
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={() => toggleTask(task.id)}
                        className={`px-3 py-1 rounded text-sm transition-all ${
                          task.completed 
                            ? 'bg-gray-200 dark:bg-slate-600 text-gray-600 dark:text-gray-400' 
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                      >
                        {task.completed ? 'Undo' : 'Complete'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Add New Task */}
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Add New Task</h3>
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Task title..."
              className={`w-full p-3 rounded-lg mb-3 ${darkMode ? 'bg-slate-700 text-white' : 'bg-gray-100 text-gray-900'}`}
            />
            <input
              type="date"
              value={selectedTaskDate}
              onChange={(e) => setSelectedTaskDate(e.target.value)}
              className={`w-full p-3 rounded-lg mb-3 ${darkMode ? 'bg-slate-700 text-white' : 'bg-gray-100 text-gray-900'}`}
            />
            <button
              onClick={addTask}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    );
  };

  // --- SETTINGS VIEW COMPONENT ---
  const SettingsView = () => {
    return (
      <div className="p-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Settings
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Settings */}
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Profile Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Student ID</label>
                <input
                  type="text"
                  value={studentID}
                  disabled
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-slate-700 text-gray-400' : 'bg-gray-100 text-gray-600'}`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  value={currentUser}
                  disabled
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-slate-700 text-gray-400' : 'bg-gray-100 text-gray-600'}`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Department</label>
                <input
                  type="text"
                  value={department}
                  disabled
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-slate-700 text-gray-400' : 'bg-gray-100 text-gray-600'}`}
                />
              </div>
            </div>
          </div>
          
          {/* Preferences */}
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Preferences</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${
                    darkMode ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300">Push Notifications</span>
                <button
                  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${
                    notificationsEnabled ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    notificationsEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300">Email Notifications</span>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${
                    emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    emailNotifications ? 'translate-x-6' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700 dark:text-gray-300">Auto-save</span>
                <button
                  onClick={() => setAutoSave(!autoSave)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${
                    autoSave ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    autoSave ? 'translate-x-6' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>
            </div>
          </div>

          {/* Language Settings */}
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Language & Region</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Language</label>
                <select 
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className={`w-full p-3 rounded-lg ${darkMode ? 'bg-slate-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Time Zone</label>
                <select className={`w-full p-3 rounded-lg ${darkMode ? 'bg-slate-700 text-white' : 'bg-gray-100 text-gray-900'}`}>
                  <option value="UTC+8">UTC+8 (Philippines)</option>
                  <option value="UTC+0">UTC+0 (London)</option>
                  <option value="UTC-5">UTC-5 (New York)</option>
                  <option value="UTC-8">UTC-8 (California)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Security</h3>
            <div className="space-y-4">
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                Change Password
              </button>
              <button className="w-full py-3 bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-all">
                Enable Two-Factor Authentication
              </button>
              <button className="w-full py-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition-all">
                Sign Out All Devices
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- CYBER REFLEX GAME COMPONENT ---
  const CyberReflexGame = () => (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cyber Reflex Training</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Improve your reaction time and cybersecurity awareness with interactive training modules.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Quick Response</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Test your reflexes with cybersecurity scenarios</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start Challenge
            </button>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
            <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">Threat Detection</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Identify security threats in simulated environments</p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Practice Mode
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Coming soon: Advanced modules, multiplayer challenges, and leaderboards
          </p>
        </div>
      </div>
    </div>
  );

  // --- HEADER COMPONENT ---
  const Header = () => (
    <header className="glass-header border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and Search */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EP</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">EduPulse</span>
            </div>
            
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search courses, assignments, students..."
                className="pl-10 pr-4 py-2 w-64 lg:w-96 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                {getUnreadCount() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {getUnreadCount()}
                  </span>
                )}
              </button>
              
              {/* Notification Dropdown */}
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-50"
                  >
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                        <div className="flex items-center gap-2">
                          {getUnreadCount() > 0 && (
                            <button
                              onClick={markAllNotificationsRead}
                              className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                            >
                              Mark all read
                            </button>
                          )}
                          <button
                            onClick={() => setShowNotifications(false)}
                            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                          >
                            <X className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">
                          <Bell className="w-8 h-8 mx-auto mb-2 opacity-20" />
                          <p>No notifications</p>
                        </div>
                      ) : (
                        notifications.map(notification => (
                          <motion.div
                            key={notification.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors ${
                              !notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                            }`}
                            onClick={() => {
                              handleNotificationClick(notification);
                              setShowNotifications(false);
                            }}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`w-2 h-2 rounded-full mt-2 ${
                                notification.type === 'assignment' ? 'bg-blue-500' :
                                notification.type === 'grade' ? 'bg-green-500' :
                                notification.type === 'update' ? 'bg-yellow-500' : 'bg-gray-500'
                              }`} />
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                  {notification.title}
                                </h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                  {notification.message}
                                </p>
                                <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                              </div>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                              )}
                            </div>
                          </motion.div>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {profilePic ? (
                  <img src={profilePic} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                ) : (
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>

              <AnimatePresence>
                {showProfileDropdown && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2"
                  >
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Profile Settings
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Account Settings
                    </button>
                    <hr className="my-2 border-gray-200 dark:border-gray-700" />
                    <button 
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

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
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
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
            </div>

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
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="ml-auto w-1 h-6 bg-blue-600 rounded-full"
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

  
  // --- AUTH PAGE ---
  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-6 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-[#f0f2f5]'}`}>
        <div className={`w-full max-w-md p-6 rounded-[3rem] border shadow-[0_40px_100px_rgba(0,0,0,0.4)] animate-in fade-in zoom-in-95 duration-1000 ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200'} text-center relative overflow-hidden`}>
          <div className="absolute top-0 right-0 p-5 opacity-5 -rotate-12"><Cpu size={200}/></div>
          <div className="flex justify-center mb-4"><div className="w-16 h-16 bg-emerald-500 rounded-[2rem] rotate-12 flex items-center justify-center shadow-2xl shadow-emerald-500/20"><Zap size={32} className="text-white -rotate-12 animate-pulse"/></div></div>
          <h1 className="text-4xl font-black italic text-emerald-500 mb-2 tracking-tighter uppercase">EduPulse</h1>
          <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.4em] mb-10">Synchronized Academic OS</p>
          <div className="space-y-5 text-left relative z-10">
            <div>
               <label className="text-[10px] font-black uppercase text-slate-500 ml-4 mb-2 block tracking-widest">Student Credentials</label>
               <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full border rounded-2xl px-6 py-4 text-sm outline-none transition-all focus:ring-4 focus:ring-emerald-500/10 ${darkMode ? 'bg-[#1a1a1a] border-[#2a2a2a] text-white' : 'bg-slate-50 border-slate-200'}`}/>
            </div>
            <div>
               <input type="password" placeholder="System Password" value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full border rounded-2xl px-6 py-4 text-sm outline-none transition-all focus:ring-4 focus:ring-emerald-500/10 ${darkMode ? 'bg-[#1a1a1a] border-[#2a2a2a] text-white' : 'bg-slate-50 border-slate-200'}`}/>
            </div>
            <button onClick={() => { setIsLoggedIn(true); setCurrentUser(email); }} className="w-full bg-emerald-600 text-white font-black py-5 rounded-2xl hover:bg-emerald-500 transition-all uppercase text-[11px] tracking-[0.2em] shadow-2xl shadow-emerald-900/30 active:scale-95 mt-4">Access Dashboard</button>
            <div className="pt-4 flex justify-between px-2">
               <span className="text-[9px] font-black text-slate-500 uppercase cursor-pointer hover:text-emerald-500 transition-colors">Emergency Reset</span>
               <span className="text-[9px] font-black text-emerald-500 uppercase cursor-pointer hover:underline">New Student Access</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
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

  // --- MAIN APP ---
  return (
    // ROOT: Dito nakalagay ang background color para selyado ang ilalim (Void Fix)
    <div className="h-screen w-full flex flex-col antialiased transition-colors duration-500 overflow-hidden bg-[#f8fafc] text-[#1e293b]">
      
      {/* PREMIUM NAVBAR */}
      <nav className="glass-header h-16 px-6 flex justify-between items-center border-b sticky top-0 z-[100]">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
            <Zap size={20} className="text-white"/>
          </div>
          <h1 className="font-bold text-2xl tracking-wider text-gray-900">EduPulse</h1>
        </div>

        {/* RIGHT SIDE: Notifications + Profile */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Bell size={20} className="text-gray-600" />
              {getUnreadCount() > 0 && (
                <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              )}
            </button>
            
            <NotificationDropdown
              show={showNotifications}
              onClose={() => setShowNotifications(false)}
              notifications={notifications}
              onNotificationClick={handleNotificationClick}
              onMarkAllRead={markAllNotificationsRead}
            />
          </div>

          {/* Profile */}
          <button 
            onClick={() => setShowProfileDropdown(!showProfileDropdown)} 
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg hover:scale-105 transition-all"
          >
            {currentUser ? currentUser.charAt(0).toUpperCase() : 'ST'}
          </button>
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden">
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-[260px] border-r hidden xl:flex flex-col p-3 overflow-y-auto transition-colors z-40 flex-shrink-0 bg-[#f1f3f5] border-slate-200">
          <nav className="flex-1 px-2 space-y-1">
              {/* HOME DASHBOARD LINK */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveNav('Home'); setActiveSubject(null); }}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-r-full transition-colors ${
                  activeNav === 'Home'
                    ? 'bg-blue-100 text-blue-800'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Home
                  className={`mr-3 h-5 w-5 ${activeNav === 'Home' ? 'text-blue-700' : 'text-gray-500'}`}
                  size={20}
                />
                <span className="sidebar-link-text">Home Dashboard</span>
              </a>

              {/* CALENDAR LINK */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveNav('Calendar'); setActiveSubject(null); }}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-r-full transition-colors ${
                  activeNav === 'Calendar'
                    ? 'bg-blue-100 text-blue-800'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <CalendarIcon
                  className={`mr-3 h-5 w-5 ${activeNav === 'Calendar' ? 'text-blue-700' : 'text-gray-500'}`}
                  size={20}
                />
                <span className="sidebar-link-text">Calendar</span>
              </a>

              {/* TO-DO LINK */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveNav('Tasks'); setActiveSubject(null); }}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-r-full transition-colors ${
                  activeNav === 'Tasks'
                    ? 'bg-blue-100 text-blue-800'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <ClipboardList
                  className={`mr-3 h-5 w-5 ${activeNav === 'Tasks' ? 'text-blue-700' : 'text-gray-500'}`}
                  size={20}
                />
                <span className="sidebar-link-text">To-Do</span>
              </a>

                          </nav>

          <div className="mt-6 pt-4 border-t border-slate-500/10">
            <div className="flex justify-between items-center px-3 mb-4">
               <p className="sidebar-section-heading">{t("activeCourses")}</p>
               <PlusCircle size={14} className="text-emerald-500 cursor-pointer hover:rotate-90 transition-transform"/>
            </div>
            <div className="space-y-2">
              {subjects.map(sub => (
                <div key={sub.id} onClick={() => handleSubjectClick(sub)} className={`group px-3 py-2.5 text-[9px] font-black uppercase tracking-tight cursor-pointer truncate rounded-[1rem] transition-all flex items-center gap-3 ${activeSubject?.id === sub.id ? `${sub.color} text-white shadow-lg` : (darkMode ? 'hover:bg-white/5 text-slate-400' : 'hover:bg-white text-slate-600 shadow-sm')}`}>
                  <div className={`w-2.5 h-2.5 rounded-full border-2 ${activeSubject?.id === sub.id ? 'bg-white border-white' : `${sub.color} border-transparent`}`}></div>
                  <div className="flex-1 truncate">{sub.code}</div>
                  <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${activeSubject?.id === sub.id ? 'opacity-100' : ''}`}/>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-slate-500/10 space-y-1">
              {/* ARCHIVED LINK */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveNav('Archived'); setView('archived'); setActiveSubject(null); }}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-r-full transition-colors ${
                  activeNav === 'Archived'
                    ? 'bg-blue-100 text-blue-800'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Archive
                  className={`mr-3 h-5 w-5 ${activeNav === 'Archived' ? 'text-blue-700' : 'text-gray-500'}`}
                  size={20}
                />
                {t("navArc")}
              </a>

              {/* SETTINGS LINK */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveNav('Settings'); setView('settings'); setActiveSubject(null); }}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-r-full transition-colors tracking-wider uppercase ${
                  activeNav === 'Settings'
                    ? 'bg-blue-100 text-blue-800'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Settings
                  className={`mr-3 h-5 w-5 ${activeNav === 'Settings' ? 'text-blue-700' : 'text-gray-500'}`}
                  size={20}
                />
                <span className={`${activeNav === 'Settings' ? 'sidebar-settings-active' : 'sidebar-link-text'}`}>{t("navSet")}</span>
              </a>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 overflow-y-auto custom-scrollbar relative">
          {/* TOP HEADER BAR */}
          <header className="glass-header sticky top-0 z-40 px-6 py-4 border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {view !== "dashboard" && activeSubject && (
                  <button 
                    onClick={() => { setView("dashboard"); setActiveSubject(null); }}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ArrowLeft size={16} />
                    Back to Dashboard
                  </button>
                )}
                {selectedCourse && (
                  <button 
                    onClick={() => setSelectedCourse(null)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <ArrowLeft size={16} />
                    Back to Dashboard
                  </button>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <Search size={20} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors relative">
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                  S
                </div>
              </div>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <main className="min-h-screen bg-gray-50">
            
            {/* Navigation Switch with activeNav state handling */}
            {activeNav === 'Home' && <DashboardView />}
            {activeNav === 'Courses' && <CoursesView />}
            {activeNav === 'Calendar' && <CalendarView />}
            {activeNav === 'Tasks' && <TasksView />}
            {activeNav === 'Settings' && <SettingsView />}
            {view === "subjects" && (
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
            )}

          {/* VIEW: CALENDAR HUB */}
          {view === "calendar" && (
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
            )}

          {/* VIEW: GAME */}
          {view === "game" && (
            <div className="flex-1 overflow-y-auto custom-scrollbar relative flex flex-col">
              <CyberReflexGame />
            </div>
          )}


          {/* VIEW: CLASS STREAM MODULE */}
          {view === "stream" && activeSubject && (
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
          )}

          {/* VIEW: CALENDAR HUB */}
          {view === "calendar" && (
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
                    <button onClick={() => setIsAddingTask(true)} className="w-full py-5 bg-emerald-600/10 text-emerald-500 border border-emerald-500/20 rounded-[2rem] font-black uppercase text-[10px] tracking-[0.2em] hover:bg-emerald-600 hover:text-white transition-all shadow-lg">Schedule Event</button>
                  </div>

                  <div className={`p-5 rounded-[2rem] border text-left ${darkMode ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                      <h4 className="text-[10px] font-black uppercase text-slate-500 mb-6 tracking-widest">Upcoming Deadlines</h4>
                      <div className="space-y-6">
                         {events.flatMap(e => e.items).slice(0, 3).map(it => (
                            <div key={it.id} className="flex items-center gap-4">
                               <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
                               <div className="flex-1">
                                  <p className="text-[11px] font-black uppercase tracking-tight">{it.title}</p>
                                  <p className="text-[9px] font-bold text-slate-500 uppercase">{it.subId} • {it.time}</p>
                               </div>
                            </div>
                         ))}
                      </div>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-8">
                  {events.map((day, idx) => (
                    <div key={idx} className={`relative pl-10 border-l-4 text-left transition-all duration-700 ${selectedDate === day.fullDate ? 'opacity-100 translate-x-0' : 'opacity-20 scale-[0.98] -translate-x-4'}`}>
                      <div className={`absolute -left-[14px] top-0 w-6 h-6 rounded-full border-4 shadow-2xl ${selectedDate === day.fullDate ? 'bg-emerald-500 border-emerald-500/30 animate-pulse' : 'bg-slate-700 border-slate-800'}`}></div>
                      <h3 className={`text-lg font-black uppercase tracking-[0.3em] mb-6 italic ${selectedDate === day.fullDate ? 'text-emerald-500' : 'text-slate-500'}`}>{day.day}, {day.date}</h3>
                      {day.items.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {day.items.map(item => (
                            <div key={item.id} onClick={() => handleCalendarEventClick(item.subId)} className={`group p-8 rounded-[2.5rem] border-t-8 transition-all hover:translate-y-[-5px] hover:shadow-2xl cursor-pointer ${item.color.replace('border-', 'border-')} ${darkMode ? 'bg-[#121212] border-x-[#222222] border-b-[#222222]' : 'bg-white border-x-slate-100 border-b-slate-100 shadow-lg'}`}>
                              <div className="flex justify-between items-start mb-6">
                                 <span className="text-[10px] font-black px-4 py-1.5 rounded-full bg-emerald-500 text-white uppercase tracking-widest shadow-lg shadow-emerald-500/20">{item.type}</span>
                                 <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">{item.subId}</span>
                              </div>
                              <h4 className="text-xl font-black uppercase italic tracking-tighter mb-4 group-hover:text-emerald-500 transition-colors">{item.title}</h4>
                              <div className="flex items-center justify-between mt-auto">
                                 <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase"><Clock size={16} className="text-emerald-500"/> {item.time}</div>
                                 <div className="flex items-center gap-2 text-[10px] font-black text-emerald-500 uppercase hover:underline">Module <ExternalLink size={14}/></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className={`p-8 rounded-[2rem] border-2 border-dashed flex flex-col items-center justify-center opacity-50 ${darkMode ? 'border-[#222222] bg-[#0f0f0f]' : 'border-slate-200 bg-slate-50'}`}>
                           <CalendarIcon size={40} className="text-slate-500 mb-4"/>
                           <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] italic">No Academic Assignments</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* VIEW: TO-DO SYSTEM */}
          {view === "todo" && (
             <div className="p-6 max-w-5xl mx-auto animate-in slide-in-from-bottom-10 duration-700">
                <SectionHeader icon={ClipboardList} title={t("navTodo")} subtitle="Task Management Matrix" />
                <div className="flex gap-4 mb-6 border-b border-slate-500/10">
                   {['assigned', 'missing', 'done'].map(tab => (
                      <button key={tab} onClick={() => setTodoTab(tab)} className={`pb-5 text-[11px] font-black uppercase tracking-[0.2em] px-4 transition-all relative ${todoTab === tab ? 'text-emerald-500' : 'text-slate-500 hover:text-emerald-400'}`}>
                         {tab}
                         {todoTab === tab && <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></span>}
                      </button>
                   ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className={`p-5 rounded-[2rem] border border-dashed flex flex-col items-center justify-center ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-slate-50 border-slate-200'}`}>
                      <div className="p-3 bg-emerald-500/10 rounded-full text-emerald-500 mb-3"><PlusCircle size={24}/></div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 italic">Add Private Task</p>
                      <button className="px-8 py-3 bg-emerald-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl">Create New</button>
                   </div>
                   <div className="flex flex-col items-center justify-center p-5 opacity-30">
                      <HardDrive size={60} className="text-slate-500 mb-4 opacity-20"/>
                      <p className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-500">Task Log Empty</p>
                   </div>
                </div>
                <EmptyState type="todo" />
             </div>
          )}
          
          {/* VIEW: ARCHIVE HUB */}
          {view === "archived" && (
             <div className="p-12 max-w-5xl mx-auto">
                <SectionHeader icon={Archive} title={t("navArc")} subtitle="Historical Scholastic Records" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                   {[2023, 2024, 2025].map(year => (
                      <div key={year} className={`p-10 rounded-[3rem] border transition-all hover:scale-[1.05] cursor-pointer text-left relative overflow-hidden group ${darkMode ? 'bg-[#121212] border-[#222222] hover:border-emerald-500/30' : 'bg-white border-slate-200 shadow-lg'}`}>
                         <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Folder size={100}/></div>
                         <h4 className="text-2xl font-black italic text-emerald-500 mb-2">{year}</h4>
                         <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Archive Folder</p>
                         <div className="space-y-2">
                            <p className="text-[9px] font-bold uppercase opacity-60">8 Subjects</p>
                            <p className="text-[9px] font-bold uppercase opacity-60">24 Resources</p>
                         </div>
                      </div>
                   ))}
                </div>
                <EmptyState type="archived" />
             </div>
          )}

         {/* VIEW: SETTINGS & GLOBAL CONFIG (HYPER-INTERACTIVE VERSION) */}
          {view === "settings" && (
            <div className="p-12 max-w-7xl mx-auto animate-in slide-in-from-right-10 duration-700 text-left">
              <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-12 text-emerald-500">{t("ctrlCenter")}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <div className="space-y-3">
                  {[
                    { id: 'profile', name: t("identity"), icon: <User size={20}/> },
                    { id: 'security', name: t("security"), icon: <Shield size={20}/> },
                    { id: 'notifications', name: t("alerts"), icon: <Bell size={20}/> },
                    { id: 'preferences', name: t("interface"), icon: <Languages size={20}/> },
                    { id: 'data', name: t("cloud"), icon: <Database size={20}/> },
                    { id: 'support', name: "Support & Help", icon: <LifeBuoy size={20}/> },
                  ].map(tab => (
                    <button key={tab.id} onClick={() => {
                        setSettingsTab(tab.id);
                        setIsRequestChangeActive(false); // Reset chain on switch
                        setShowMetadataAdvanced(false);
                      }} 
                      className={`w-full flex items-center gap-5 px-8 py-5 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.15em] transition-all relative overflow-hidden group ${settingsTab === tab.id ? 'bg-emerald-600 text-white shadow-2xl shadow-emerald-900/40 translate-x-3' : (darkMode ? 'text-slate-500 hover:bg-white/5' : 'text-slate-600 hover:bg-slate-100')}`}>
                      {tab.icon} {tab.name}
                      {settingsTab === tab.id && <div className="absolute right-0 top-0 h-full w-1.5 bg-white opacity-50"></div>}
                    </button>
                  ))}
                </div>

                <div className="lg:col-span-3">
                  {settingsTab === 'profile' && (
                    <div className="space-y-6">
                      <div className={`p-12 rounded-[3.5rem] border animate-in fade-in slide-in-from-bottom-5 duration-500 relative overflow-hidden ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200 shadow-2xl'}`}>
                        <div className="absolute top-0 right-0 p-12 opacity-5"><User size={250}/></div>
                        <div className="flex flex-col md:flex-row items-center gap-12 mb-16 relative z-10">
                          <div className="relative group">
                            <div className="w-40 h-40 rounded-[3rem] bg-slate-800 border-4 border-emerald-500 flex items-center justify-center overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all group-hover:scale-105 group-hover:rotate-3">
                                {profilePic ? <img src={profilePic} className="w-full h-full object-cover" /> : <User size={80} className="text-white opacity-10"/>}
                            </div>
                            <button onClick={() => setShowPicOptions(true)} className="absolute -bottom-3 -right-3 p-4 bg-emerald-500 rounded-2xl text-white shadow-2xl hover:scale-110 active:scale-90 transition-all border-4 border-[#121212]"><Camera size={24}/></button>
                          </div>
                          <div className="text-center md:text-left">
                            <h3 className="text-4xl font-black uppercase tracking-tighter mb-3 italic">{currentUser.split('@')[0] || "Authenticated_User"}</h3>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                               <span className="px-4 py-1.5 bg-emerald-500 text-white text-[10px] font-black uppercase rounded-xl shadow-lg shadow-emerald-500/20 tracking-widest">Global Account</span>
                               <span className="px-4 py-1.5 bg-blue-500 text-white text-[10px] font-black uppercase rounded-xl shadow-lg shadow-blue-500/20 tracking-widest">{currentYear} Student</span>
                               <span className="px-4 py-1.5 bg-slate-700 text-white text-[10px] font-black uppercase rounded-xl tracking-widest">Verified ID</span>
                            </div>
                            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-6 italic">Member since August 2022 • UID: {studentID}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-12 border-t border-slate-500/10 relative z-10 text-left">
                          <div className="space-y-2">
                             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Academic Primary Email</p>
                             <p className="text-lg font-black italic text-emerald-500 truncate">{currentUser}</p>
                          </div>
                          <div className="space-y-2">
                             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Institutional Identifier</p>
                             <p className="text-lg font-black italic uppercase tracking-tighter">{studentID}</p>
                          </div>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-4 relative z-20">
                           <button onClick={() => setShowMetadataAdvanced(!showMetadataAdvanced)} className="px-8 py-4 bg-emerald-600 text-white rounded-[1.5rem] font-black uppercase text-[10px] tracking-widest shadow-xl hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all">
                             {showMetadataAdvanced ? "Hide System Metadata" : "Update System Metadata"}
                           </button>
                           <button onClick={() => setIsRequestChangeActive(!isRequestChangeActive)} className={`px-8 py-4 rounded-[1.5rem] border font-black uppercase text-[10px] tracking-widest transition-all hover:scale-105 active:scale-95 ${isRequestChangeActive ? 'bg-red-500 border-red-500 text-white shadow-lg shadow-red-500/20' : (darkMode ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-200 text-slate-600 hover:bg-slate-50')}`}>
                             {isRequestChangeActive ? "Abort Request" : "Request Change"}
                           </button>
                        </div>
                      </div>

                      {/* CHAIN REACTION 1: Metadata Advanced Registry Panels */}
                      {showMetadataAdvanced && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in zoom-in-95 duration-500">
                          {['System Logs', 'Registry Edit', 'API Access'].map((item) => (
                            <button key={item} onClick={() => alert(`Accessing ${item} Core...`)} className={`p-8 rounded-[2.5rem] border text-left group transition-all hover:border-emerald-500 ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200 shadow-lg'}`}>
                              <Cpu size={24} className="text-emerald-500 mb-4 group-hover:rotate-12 transition-transform"/>
                              <p className="text-[10px] font-black uppercase tracking-widest">{item}</p>
                              <p className="text-[9px] text-slate-500 font-bold mt-2 uppercase">Status: <span className="text-emerald-500">Encrypted</span></p>
                            </button>
                          ))}
                        </div>
                      )}

                     

                  {/* SUPPORT & HELP HUB */}
                  {settingsTab === 'support' && (
                    <div className="space-y-8 animate-in slide-in-from-bottom-6">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <button onClick={() => setSupportTicket(true)} className="p-10 rounded-[3rem] bg-emerald-600 text-white shadow-2xl shadow-emerald-500/30 hover:scale-[1.02] transition-all text-left group">
                             <LifeBuoy size={40} className="mb-6 group-hover:rotate-45 transition-transform"/>
                             <p className="text-xl font-black uppercase italic tracking-tighter">Open Support Ticket</p>
                             <p className="text-[10px] font-bold uppercase opacity-80 mt-2">Direct Link to IT Admin Hub</p>
                          </button>
                          <button onClick={() => setAiDiagnostic(!aiDiagnostic)} className={`p-10 rounded-[3rem] border text-left hover:scale-[1.02] transition-all ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200'}`}>
                             <Zap size={40} className="mb-6 text-yellow-500 animate-pulse"/>
                             <p className="text-xl font-black uppercase italic tracking-tighter">AI Diagnostics</p>
                             <p className="text-[10px] font-bold text-slate-500 uppercase mt-2">Run system-wide integrity check</p>
                          </button>
                          {settingsTab === 'alerts' && (
  <div className="space-y-6 animate-in slide-in-from-bottom-6">
    <h2 className="text-2xl font-black uppercase italic tracking-tighter text-emerald-500">Alert Configurations</h2>
    <div className={`p-8 rounded-[3rem] border ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-gray-100 shadow-2xl'}`}>
      <div className="space-y-4">
        {['Email Alerts', 'System Push', 'Activity Notification'].map((notif) => (
          <div key={notif} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-transparent hover:border-emerald-500/30 transition-all">
            <span className="font-bold uppercase text-xs italic tracking-widest">{notif}</span>
            <input type="checkbox" defaultChecked className="w-6 h-6 accent-emerald-500 cursor-pointer" />
          </div>
        ))}
        <button className="w-full mt-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase italic tracking-widest rounded-2xl transition-all">
          Update Preferences
        </button>
      </div>
    </div>
  </div>
)}
                       </div>

                       <div className={`p-10 rounded-[3.5rem] border ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200 shadow-xl'}`}>
                          <div className="relative mb-10">
                             <Search className="absolute left-6 top-5 text-slate-500" size={20}/>
                             <input 
                                type="text" 
                                placeholder="Search system documentation..." 
                                value={faqSearch}
                                onChange={(e) => setFaqSearch(e.target.value)}
                                className={`w-full py-5 pl-16 pr-8 rounded-[2rem] text-xs font-bold uppercase tracking-widest outline-none border ${darkMode ? 'bg-white/5 border-white/5 text-white' : 'bg-slate-50 border-slate-200 text-slate-800'}`}
                             />
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                             {['Network Protocols', 'Biometric Resets', 'Cloud Recovery', 'API Integration'].map((faq) => (
                                <button key={faq} className={`flex justify-between items-center p-6 rounded-2xl border transition-all ${darkMode ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-slate-50 border-slate-100 hover:bg-slate-100'}`}>
                                   <span className="text-[10px] font-black uppercase tracking-widest">{faq}</span>
                                   <ExternalLink size={16} className="text-emerald-500"/>
                                </button>
                              
                             ))}
                          </div>
                       </div>

                       {/* CHAIN REACTION: AI Diagnostic Panel */}
                       {aiDiagnostic && (
                         <div className={`p-8 rounded-[3rem] border border-yellow-500/30 bg-yellow-500/5 animate-in zoom-in-95 duration-500`}>
                            <div className="flex items-center gap-4 mb-6">
                               <RefreshCw size={20} className="animate-spin text-yellow-500"/>
                               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500">Scanning System Kernel...</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                               {['UI Engine', 'Socket.io', 'Database', 'Auth Hub'].map(sys => (
                                 <div key={sys} className="p-4 bg-black/20 rounded-xl border border-white/5 text-center">
                                    <p className="text-[8px] font-black text-slate-500 uppercase">{sys}</p>
                                    <p className="text-[10px] font-black text-emerald-500 uppercase">Stable</p>
                                 </div>
                               ))}
                            </div>
                         </div>
                       )}

                       {/* CHAIN REACTION: Support Ticket Modal-style */}
                       {supportTicket && (
                         <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[500] flex items-center justify-center p-6 animate-in fade-in">
                            <div className={`w-full max-w-lg p-12 rounded-[4rem] border ${darkMode ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-slate-200 shadow-2xl'}`}>
                               <div className="flex justify-between items-center mb-8">
                                  <h3 className="text-3xl font-black italic uppercase tracking-tighter text-emerald-500">Ticket Hub</h3>
                                  <button onClick={() => setSupportTicket(false)} className="p-3 hover:bg-white/10 rounded-2xl transition-all"><X size={32}/></button>
                                </div>
                                <div className="space-y-6">
                                   <input type="text" placeholder="Issue Subject" className="w-full p-6 bg-white/5 rounded-[1.5rem] border border-white/10 outline-none text-xs font-bold uppercase tracking-widest"/>
                                   <textarea placeholder="Describe the system anomaly..." className="w-full h-40 p-6 bg-white/5 rounded-[1.5rem] border border-white/10 outline-none text-xs font-bold uppercase tracking-widest resize-none"></textarea>
                                   <button className="w-full py-6 bg-emerald-600 text-white rounded-[2rem] font-black uppercase text-[11px] tracking-[0.2em] shadow-2xl hover:bg-emerald-500 transition-all">Dispatch Ticket</button>
                                </div>
                            </div>
                         </div>
                       )}
                    </div>
                  )}

                      {/* CHAIN REACTION 2: Request Change Interactive Flow */}
                      {isRequestChangeActive && (
                        <div className={`p-10 rounded-[3rem] border border-dashed animate-in slide-in-from-top-4 duration-500 ${darkMode ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-emerald-200 bg-emerald-50'}`}>
                          <div className="flex items-center gap-4 mb-8">
                             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 italic">Modification Matrix Protocol</h4>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Legal Name', 'Course/Year', 'Biometrics', 'Institutional ID'].map(attr => (
                              <button key={attr} onClick={() => setChangeType(attr)} className={`p-5 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all border ${changeType === attr ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg shadow-emerald-500/30' : (darkMode ? 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10' : 'bg-white border-slate-200 text-slate-600')}`}>
                                {attr}
                              </button>
                            ))}
                          </div>
                          {changeType && (
                            <div className="mt-8 pt-8 border-t border-emerald-500/20 animate-in fade-in slide-in-from-bottom-2">
                               <p className="text-[10px] font-bold uppercase mb-6 text-slate-500 italic">System requires valid proof for: <span className="text-emerald-500 underline">{changeType}</span></p>
                               <div className="flex gap-4">
                                  <button onClick={() => alert("Opening secure upload portal...")} className="flex-1 py-5 bg-emerald-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-2xl shadow-emerald-500/20 hover:bg-emerald-500 transition-all">Submit Document</button>
                                  <button onClick={() => setChangeType(null)} className="px-8 py-5 bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10">Reset</button>
                               </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {settingsTab === 'security' && (
                    <div className="space-y-8 animate-in slide-in-from-bottom-6">
                       <div className={`p-10 rounded-[3rem] border ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200 shadow-xl'}`}>
                          <div className="flex justify-between items-center mb-10">
                             <div className="flex items-center gap-6">
                                <div className="p-4 bg-blue-500/10 text-blue-500 rounded-[1.5rem] shadow-inner"><Shield size={32}/></div>
                                <div>
                                   <p className="text-lg font-black uppercase tracking-tighter italic mb-1">Two-Factor Authentication</p>
                                   <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Global Security Level: <span className={twoFactorEnabled ? "text-emerald-500" : "text-red-500"}>{twoFactorEnabled ? "MAXIMUM PROTECTED" : "VULNERABLE"}</span></p>
                                </div>
                             </div>
                             <div onClick={() => setTwoFactorEnabled(!twoFactorEnabled)} className={`w-16 h-9 rounded-full p-1.5 cursor-pointer transition-all duration-500 ${twoFactorEnabled ? 'bg-emerald-500 shadow-[0_0_15px_#10b981]' : 'bg-slate-700'}`}>
                                <div className={`w-6 h-6 rounded-full bg-white shadow-lg transition-all duration-500 transform ${twoFactorEnabled ? 'translate-x-7' : 'translate-x-0'}`}></div>
                             </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 pt-10 border-t border-slate-500/10">
                             <button onClick={() => {
                               setIsKeyRotating(true);
                               setTimeout(() => setIsKeyRotating(false), 3000);
                             }} className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all group">
                               <Key size={16} className={isKeyRotating ? "animate-spin text-emerald-500" : "group-hover:text-emerald-500"}/> 
                               {isKeyRotating ? "Generating New Hash..." : "Rotate Encryption Keys"}
                             </button>
                             
                             <button onClick={() => setShowSessionLogs(!showSessionLogs)} className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${showSessionLogs ? 'bg-emerald-600 text-white' : 'bg-white/5 hover:bg-white/10'}`}>
                               <Activity size={16}/> {showSessionLogs ? "Kill Monitor" : "Monitor Sessions"}
                             </button>
                          </div>
                       </div>

                       {/* CHAIN REACTION 3: Real-time Session Monitoring Logs */}
                       {showSessionLogs && (
                         <div className={`p-8 rounded-[3rem] border animate-in slide-in-from-right-4 duration-500 ${darkMode ? 'bg-black/40 border-white/5' : 'bg-slate-50 border-slate-200 shadow-inner'}`}>
                            <div className="flex justify-between items-center mb-6">
                               <h5 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50 italic">Active System Nodes</h5>
                               <span className="text-[9px] font-bold text-emerald-500 animate-pulse">LIVE STREAMING</span>
                            </div>
                            <div className="space-y-4">
                              {[
                                { node: 'MNL-DATA-SRV-01', status: 'Authorized', ip: '192.168.1.45', time: 'Active Now' },
                                { node: 'QC-MOBILE-ST-04', status: 'Authenticated', ip: '10.0.4.12', time: '2m ago' }
                              ].map((node, i) => (
                                <div key={i} className="flex justify-between items-center p-5 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-all cursor-crosshair">
                                  <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
                                    <div>
                                       <p className="text-[10px] font-black uppercase tracking-widest">{node.node}</p>
                                       <p className="text-[8px] font-bold text-slate-500">{node.ip}</p>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                     <p className="text-[9px] font-black text-emerald-500 uppercase">{node.status}</p>
                                     <p className="text-[8px] font-bold text-slate-500 uppercase">{node.time}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                         </div>
                       )}
                    </div>
                  )}

                  {/* PREFERENCES TAB - Chain Reactions */}
                  {settingsTab === 'preferences' && (
                    <div className="space-y-6 animate-in slide-in-from-bottom-6 duration-500">
                      <div onClick={() => setShowLanguageModal(true)} className={`p-10 rounded-[3rem] border cursor-pointer group hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200 shadow-xl'}`}>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-6 text-left">
                            <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-[1.5rem] shadow-inner group-hover:scale-110 transition-transform"><Globe size={32}/></div>
                            <div>
                              <p className="text-lg font-black uppercase tracking-tighter italic mb-1">System Language Hub</p>
                              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em]">Active Localization: <span className="text-emerald-500 underline">{selectedLanguage}</span></p>
                            </div>
                          </div>
                          <button className="p-4 bg-emerald-500 rounded-2xl text-white shadow-xl shadow-emerald-500/20 group-hover:rotate-12 transition-all"><ChevronRight size={20}/></button>
                        </div>
                      </div>

                      <div className={`p-12 rounded-[3.5rem] border ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200 shadow-xl'}`}>
                          <div className="flex justify-between items-center mb-8 text-left">
                              <div>
                                 <p className="text-sm font-black uppercase tracking-widest italic mb-1">UI Animation Fidelity</p>
                                 <p className="text-[10px] font-bold text-slate-500 uppercase">Current Performance Impact: 12% CPU</p>
                              </div>
                              <span className="text-emerald-500 font-black text-xs uppercase italic tracking-widest">High Fluidity</span>
                          </div>
                          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-1 border border-white/5">
                            <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 w-[90%] rounded-full shadow-[0_0_15px_#10b981]"></div>
                          </div>
                          <div className="flex justify-between mt-4">
                             <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Eco Mode</span>
                             <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest italic">Ultra Performance</span>
                          </div>
                      </div>
                    </div>
                  )}

                  {/* DATA TAB - Remains consistent with Part 9 but with chain enhancements if needed */}
                  {settingsTab === 'data' && (
                     <div className="space-y-8 animate-in slide-in-from-bottom-6">
                        <div className={`p-12 rounded-[3.5rem] border ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200'}`}>
                            <div className="flex justify-between items-center mb-10">
                               <div className="text-left">
                                  <h4 className="text-lg font-black uppercase italic tracking-tighter text-emerald-500 mb-1">Cloud Synchronization Module</h4>
                                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Real-time backup to global edu-servers</p>
                               </div>
                               <div className="text-right">
                                  <p className="text-2xl font-black italic">{storageUsage}%</p>
                                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Allocated Storage Full</p>
                               </div>
                            </div>
                            <div className="h-6 w-full bg-slate-800 rounded-[1.5rem] overflow-hidden mb-10 p-1 border border-white/5">
                               <div className="h-full bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-1000" style={{ width: `${storageUsage}%` }}></div>
                            </div>
                            <div className="flex justify-between items-center">
                               <button onClick={runSync} className="flex items-center gap-4 px-8 py-5 bg-emerald-600 text-white rounded-[2rem] font-black uppercase text-[11px] tracking-[0.2em] shadow-2xl hover:scale-105 transition-all disabled:opacity-50" disabled={isSyncing}>
                                  <RefreshCw size={18} className={isSyncing ? 'animate-spin' : ''}/> {isSyncing ? 'Accessing Satellite...' : t("syncBtn")}
                               </button>
                               <div className="flex gap-4">
                                  <button onClick={() => alert("Decrypting local archive...")} className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all text-slate-500 hover:text-emerald-500"><Download size={20}/></button>
                                  <button onClick={() => alert("Redirecting to Global Edu-Hub...")} className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all text-slate-500 hover:text-blue-500"><ExternalLink size={20}/></button>
                               </div>
                            </div>
                        </div>
                     </div>
                  )}
                </div>
              </div>
            </div>
          )}
            </main>
          </div>
        </div>

      {/* LANGUAGE MODAL */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[300] flex items-center justify-center p-8 animate-in zoom-in duration-500">
            <div className={`w-full max-w-4xl rounded-[4rem] border shadow-[0_60px_150px_rgba(0,0,0,0.8)] overflow-hidden ${darkMode ? 'bg-[#121212] border-[#252525]' : 'bg-white border-slate-200'}`}>
               <div className="p-12 border-b border-slate-500/10 flex justify-between items-center bg-emerald-600 text-white relative">
                 <div className="absolute top-0 right-0 p-12 opacity-10"><Globe size={150}/></div>
                 <div className="text-left relative z-10">
                    <h3 className="text-4xl font-black uppercase tracking-tighter italic leading-none mb-2">{t("langHub")}</h3>
                    <p className="text-[11px] font-bold uppercase opacity-80 tracking-[0.3em]">Select system-wide localization matrix</p>
                 </div>
                 <button onClick={() => setShowLanguageModal(false)} className="p-4 hover:bg-white/20 rounded-[1.5rem] transition-all relative z-10"><X size={36}/></button>
               </div>
               <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-h-[550px] overflow-y-auto custom-scrollbar-emerald">
                  {languages.map(lang => (
                    <button key={lang} onClick={() => { setSelectedLanguage(lang); setShowLanguageModal(false); }} className={`flex items-center justify-between p-6 rounded-[2rem] text-[10px] font-black uppercase tracking-widest transition-all ${selectedLanguage === lang ? 'bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 scale-[1.03] rotate-1' : (darkMode ? 'hover:bg-white/5 text-slate-400 border border-white/5' : 'hover:bg-slate-50 text-slate-600 border border-slate-100')}`}>
                      {lang} {selectedLanguage === lang && <Check size={18} className="animate-in zoom-in"/>}
                    </button>
                  ))}
               </div>
            </div>
        </div>
      )}

      {/* Control Center Dropdown */}
      {showProfileDropdown && (
        <div className="fixed top-14 right-6 z-50 w-80 bg-white shadow-xl rounded-2xl border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Control Center Dropdown / Modal Content */}
          <div className="flex flex-col h-full p-4 bg-white shadow-xl rounded-2xl border border-gray-100">
            
            {/* Top Part: User Info (Gaya ng dati) */}
            <div className="flex flex-col items-center p-6 border-b border-gray-50">
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold mb-3 shadow-inner">
                ST
              </div>
              <p className="font-extrabold tracking-widest text-sm uppercase">JUAN DELA CRUZ</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">STUDENT | BSIT 3J</p>
            </div>

            {/* Middle Part: Quick Actions (Kung meron man) */}
            <div className="flex-1 py-4">
              {/* Dito yung mga dati mong buttons sa control center */}
            </div>

            {/* BOTTOM PART: Eto yung pinapababa mo tol */}
            <div className="mt-auto pt-4 border-t border-gray-100 space-y-2">
              <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group">
                <p className="font-bold text-[11px] tracking-[0.1em] text-gray-700 group-hover:text-blue-600 uppercase">ACCOUNT SETTINGS</p>
                <p className="text-[9px] text-gray-400 leading-tight uppercase tracking-wider">MANAGE PASSWORD AND SECURITY</p>
              </button>
              
              <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-xl transition-colors group">
                <p className="font-bold text-[11px] tracking-[0.1em] text-gray-700 group-hover:text-blue-600 uppercase">CHANGE NAME</p>
                <p className="text-[9px] text-gray-400 leading-tight uppercase tracking-wider">CONTACT ADMIN TO MODIFY NAME</p>
              </button>

              <button onClick={() => { setIsLoggedIn(false); setShowProfileDropdown(false); }} className="w-full mt-4 py-3 bg-red-50 text-red-600 rounded-xl font-black text-[11px] tracking-[0.2em] hover:bg-red-100 transition-all uppercase">
                SIGN OUT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PREMIUM FLOATING COMPONENTS */}
      <FloatingChat
        show={showChat}
        onToggle={() => setShowChat(!showChat)}
        chatTab={chatTab}
        onTabChange={setChatTab}
        aiMessage={aiMessage}
        onAiMessageChange={setAiMessage}
        onSendAiMessage={sendAiMessage}
        aiResponse={aiResponse}
        isAiLoading={isAiLoading}
      />

      <CourseModal
        show={showCourseModal}
        onClose={() => setShowCourseModal(false)}
        course={selectedCourseDetail}
        courseTab={courseTab}
        onTabChange={setCourseTab}
        courseDetails={courseDetails}
      />
    </div>
  );
};

export default App;
