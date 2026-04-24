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
  Globe, Check, Activity, Key, Moon, Sun, TrendingUp, Users, CheckCircle, Circle
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
      transition: background-color 0.3s ease, color 0.3s ease;
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
  // Inject professional styles on component mount
  useEffect(() => {
    injectProfessionalStyles();
  }, []);
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

  // Apply dark mode to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  
  // Chat & Messaging States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
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
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
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
  
  // Course data
  const courses = [
    { id: 1, code: 'SP 101', title: 'Social Issues', section: 'BSIT 3J', color: 'bg-green-600', professor: 'LMS Admin2' },
    { id: 2, code: 'Capstone 1', title: 'Project Management', section: 'BSIT 3J', color: 'bg-blue-600', professor: 'LMS Admin2' },
    { id: 3, code: 'SIA 101', title: 'System Integration', section: 'BSIT 3J', color: 'bg-slate-600', professor: 'LMS Admin2' },
    { id: 4, code: 'TECH 32', title: 'Technopreneurship', section: 'BSIT 3J', color: 'bg-cyan-700', professor: 'LMS Admin2', assignment: 'Due tomorrow: 6:00 PM - Activity #5' },
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
    return () => socket.off();
  }, []);

  // =================================

  // --- LOGIN SCREEN COMPONENT ---
  const LoginScreen = ({ onLogin }) => (
    <div className="h-screen flex items-center justify-center bg-slate-50 p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-12 rounded-[3rem] shadow-2xl w-full max-w-lg border border-gray-100 text-center">
        <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-100">
          <Sparkles size={40} className="text-white" />
        </div>
        <h1 className="text-4xl font-black mb-3 tracking-tight">EduPulse</h1>
        <p className="text-gray-400 font-medium mb-10 leading-relaxed">The next generation of classroom management.<br/>Enter your credentials to begin.</p>
        <div className="space-y-4 mb-8">
          <input type="text" placeholder="Student ID" className="w-full px-6 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-semibold" />
          <input type="password" placeholder="Password" className="w-full px-6 py-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 outline-none transition-all font-semibold" />
        </div>
        <button onClick={onLogin} className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-[0.98]">
          Sign In to Portal
        </button>
      </motion.div>
    </div>
  );

  if (!isLoggedIn) return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;

  // Utility functions
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfileDropdown(false);
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
      setIsAiLoading(true);
      
      // Generate smart response based on user input and dashboard data
      setTimeout(() => {
        const message = aiMessage.toLowerCase();
        let response = "";
        
        // Check for specific course-related queries
        if (message.includes('assignment') || message.includes('deadline')) {
          const pendingTasks = tasks.filter(t => !t.completed);
          if (pendingTasks.length > 0) {
            response = `You have ${pendingTasks.length} pending assignments. The most urgent is "${pendingTasks[0].title}" due on ${pendingTasks[0].dueDate}. Would you like me to help you organize your study schedule?`;
          } else {
            response = "Great news! You don't have any pending assignments. Keep up the excellent work!";
          }
        } else if (message.includes('course') || message.includes('class')) {
          response = `You're enrolled in ${courses.length} courses this semester. Your most active course is "${courses[0]?.title || 'General Studies'}" with Professor ${courses[0]?.professor || 'Staff'}. Would you like to see your current progress?`;
        } else if (message.includes('grade') || message.includes('gpa')) {
          response = `Your current GPA is ${gpa.toFixed(2)}. You're performing at ${gpa >= 3.5 ? 'an excellent level' : gpa >= 3.0 ? 'a good level' : 'a level that could use improvement'}. Would you like study tips to improve your academic performance?`;
        } else if (message.includes('study') || message.includes('help')) {
          response = `Based on your dashboard, I recommend focusing on your ${tasks.filter(t => !t.completed && t.priority === 'high').length > 0 ? 'high-priority assignments first' : 'course progress and maintaining your current GPA'}. You've spent ${Math.floor(totalTimeInModules / 60)} hours studying this week!`;
        } else if (message.includes('schedule') || message.includes('calendar')) {
          response = "Your schedule shows you have several upcoming deadlines. I can help you create a study plan that balances all your courses. Would you like me to suggest a daily schedule?";
        } else {
          // Default contextual responses based on current navigation
          if (activeNav === 'Courses') {
            response = "I see you're currently viewing your courses. Each course has detailed progress tracking and assignment information. Would you like help with any specific course or assignment?";
          } else if (activeNav === 'Home') {
            response = `Based on your dashboard, you have ${getPendingTasksCount()} pending tasks. Let me help you prioritize them and create an effective study plan.`;
          } else if (activeNav === 'Calendar') {
            response = "I can help you manage your schedule. Your calendar shows upcoming deadlines and events. Would you like me to suggest the best study times?";
          } else {
            const responses = [
              "I'm here to help you succeed! Based on your current progress, you're doing great. What specific challenge can I assist you with?",
              "Looking at your academic performance, I can see you're dedicated to your studies. How can I support your learning journey today?",
              "I've analyzed your dashboard data and you're making excellent progress. What would you like to focus on improving?",
              "Your engagement level is impressive! Is there a particular subject or assignment you'd like to discuss?",
              "I'm monitoring your academic progress and you're on track. How can I help you reach your goals faster?"
            ];
            response = responses[Math.floor(Math.random() * responses.length)];
          }
        }
        
        // Add file summary context if available
        if (Object.keys(fileSummaries).length > 0) {
          response += " I also have access to your uploaded documents for reference.";
        }
        
        setAiResponse(response);
        setIsAiLoading(false);
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

  
  // REUSABLE UI COMPONENTS FOR CODE CONSOLIDATION
  
  // Stat Card Component
  const StatCard = ({ icon, value, title, subtitle, colorClass, bgClass, borderClass }) => (
    <div className={`premium-card p-6 bg-gradient-to-br ${bgClass} ${borderClass}`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 ${colorClass} rounded-xl text-white`}>
          {icon}
        </div>
        <span className={`text-3xl font-bold ${colorClass.replace('bg-', 'text-')}`}>{value}</span>
      </div>
      <h3 className="text-gray-900 font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
    </div>
  );

  // Progress Card Component  
  const ProgressCard = ({ icon, title, value, maxValue, colorClass, bgClass, borderClass, showProgress = true }) => (
    <div className={`premium-card p-6 bg-gradient-to-br ${bgClass} ${borderClass}`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 ${colorClass} rounded-xl text-white`}>
          {icon}
        </div>
        <div className="text-right">
          <span className={`text-2xl font-bold ${colorClass.replace('bg-', 'text-')}`}>{title}</span>
          {showProgress && (
            <p className={`text-sm ${colorClass.replace('bg-', 'text-')}`}>{value} XP</p>
          )}
        </div>
      </div>
      {showProgress && (
        <>
          <div className={`w-full ${colorClass.replace('bg-', '').replace('600', '200')} rounded-full h-2 mb-2`}>
            <div 
              className={`${colorClass} h-2 rounded-full transition-all duration-500`}
              style={{ width: `${(value % 100)}%` }}
            />
          </div>
          <p className={`text-xs ${colorClass.replace('bg-', 'text-')}`}>Next level in {100 - (value % 100)} XP</p>
        </>
      )}
    </div>
  );

  // Activity Item Component
  const ActivityItem = ({ activity }) => (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
      <div className={`w-2 h-2 rounded-full ${
        activity.type === 'achievement' ? 'bg-green-500' :
        activity.type === 'xp' ? 'bg-purple-500' :
        activity.type === 'file' ? 'bg-blue-500' :
        'bg-gray-500'
      }`} />
      <p className="text-sm text-gray-700 flex-1">{activity.description}</p>
      <span className="text-xs text-gray-500">
        {new Date(activity.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </span>
    </div>
  );

  // File Upload Item Component
  const FileUploadItem = ({ file }) => (
    <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-3">
        <FileText size={16} className="text-blue-600" />
        <div>
          <p className="text-sm font-medium text-gray-900">{file.name}</p>
          <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
        </div>
      </div>
      {fileSummaries[file.id] ? (
        <span className="text-xs text-green-600 font-medium">✓ Processed</span>
      ) : (
        <span className="text-xs text-yellow-600 font-medium">Processing...</span>
      )}
    </div>
  );

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
    setActiveNav('Courses');
    addRecentActivity(`Opened course: ${course.title}`, 'course');
  };

  // --- SIDEBAR COMPONENT ---
  const Sidebar = () => {
    const navigationItems = [
      { id: 'Home', name: 'Dashboard', icon: Home },
      { id: 'Courses', name: 'Courses', icon: BookOpen },
      { id: 'Calendar', name: 'Calendar', icon: Calendar },
      { id: 'Assignments', name: 'Assignments', icon: ClipboardList },
      { id: 'Messages', name: 'Messages', icon: MessageSquare },
      { id: 'Grades', name: 'Grades', icon: Award },
      { id: 'Students', name: 'Students', icon: Users },
      { id: 'Resources', name: 'Resources', icon: FileText },
      { id: 'AI Assistant', name: 'AI Assistant', icon: Zap },
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

const DashboardView = ({ onSelect }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    className="container mx-auto px-4 py-8"
  >
    {/* Header Section */}
    <div className="mb-8">
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl font-bold text-gray-900 mb-2"
      >
        Welcome back, {currentUser || 'Scholar'}! 👋
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 text-lg"
      >
        You have {getPendingTasksCount()} assignments due this week.
      </motion.p>
    </div>

    {/* Stats Cards */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
    >
      <div className="premium-card p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-blue-500 rounded-xl text-white">
            <BookOpen size={24} />
          </div>
          <span className="text-3xl font-bold text-blue-600">{courses.length}</span>
        </div>
        <h3 className="text-gray-900 font-semibold">Active Courses</h3>
        <p className="text-gray-600 text-sm mt-1">This semester</p>
      </div>

      <div className="premium-card p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-green-500 rounded-xl text-white">
            <CheckSquare size={24} />
          </div>
          <span className="text-3xl font-bold text-green-600">{gpa.toFixed(2)}</span>
        </div>
        <h3 className="text-gray-900 font-semibold">Current GPA</h3>
        <p className="text-gray-600 text-sm mt-1">Excellent progress</p>
      </div>

      <div className="premium-card p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-purple-500 rounded-xl text-white">
            <Calendar size={24} />
          </div>
          <span className="text-3xl font-bold text-purple-600">{attendance}%</span>
        </div>
        <h3 className="text-gray-900 font-semibold">Attendance</h3>
        <p className="text-gray-600 text-sm mt-1">Great job!</p>
      </div>

      <div className="premium-card p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-orange-500 rounded-xl text-white">
            <ClipboardList size={24} />
          </div>
          <span className="text-3xl font-bold text-orange-600">{getPendingTasksCount()}</span>
        </div>
        <h3 className="text-gray-900 font-semibold">Pending Tasks</h3>
        <p className="text-gray-600 text-sm mt-1">Need attention</p>
      </div>
    </motion.div>

    {/* Gamification Section */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="premium-card p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-500 rounded-xl text-white">
              <Award size={24} />
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-purple-600">Level {userLevel}</span>
              <p className="text-sm text-purple-500">{userXP} XP</p>
            </div>
          </div>
          <div className="w-full bg-purple-200 rounded-full h-2 mb-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(userXP % 100)}%` }}
            />
          </div>
          <p className="text-xs text-purple-600">Next level in {100 - (userXP % 100)} XP</p>
        </div>

        <div className="premium-card p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-500 rounded-xl text-white">
              <CheckCircle size={24} />
            </div>
            <span className="text-2xl font-bold text-green-600">{userBadges.length}</span>
          </div>
          <h3 className="text-gray-900 font-semibold">Badges Earned</h3>
          <div className="flex gap-1 mt-2">
            {userBadges.slice(0, 3).map(badge => (
              <span key={badge.id} className="text-lg">{badge.icon}</span>
            ))}
            {userBadges.length > 3 && (
              <span className="text-xs text-gray-500 self-center">+{userBadges.length - 3}</span>
            )}
          </div>
        </div>

        <div className="premium-card p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-500 rounded-xl text-white">
              <Clock size={24} />
            </div>
            <span className="text-2xl font-bold text-blue-600">{Math.floor(totalTimeInModules / 60)}h {totalTimeInModules % 60}m</span>
          </div>
          <h3 className="text-gray-900 font-semibold">Study Time</h3>
          <p className="text-gray-600 text-sm mt-1">Total engagement</p>
        </div>
      </div>
    </motion.div>

    {/* Recent Activities */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="mb-8"
    >
      <div className="premium-card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Activity size={20} className="text-blue-600" />
          Recent Activities
        </h3>
        <div className="space-y-3">
          {recentActivities.length > 0 ? (
            recentActivities.map(activity => (
              <div key={activity.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'achievement' ? 'bg-green-500' :
                  activity.type === 'xp' ? 'bg-purple-500' :
                  activity.type === 'file' ? 'bg-blue-500' :
                  'bg-gray-500'
                }`} />
                <p className="text-sm text-gray-700 flex-1">{activity.description}</p>
                <span className="text-xs text-gray-500">
                  {new Date(activity.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">No recent activities. Start learning to see your progress!</p>
          )}
        </div>
      </div>
    </motion.div>

    {/* AI Study Buddy Section */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.38 }}
      className="mb-8"
    >
      <div className="premium-card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Cpu size={20} className="text-purple-600" />
          AI Study Buddy - Upload Documents
        </h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
          <input
            type="file"
            id="file-upload"
            multiple
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileUpload}
            className="hidden"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 mb-2">Drop files here or click to upload</p>
            <p className="text-sm text-gray-500">PDF, DOC, DOCX, TXT files supported</p>
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Select Files
            </button>
          </label>
        </div>
        
        {uploadedFiles.length > 0 && (
          <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-3">Uploaded Documents</h4>
            <div className="space-y-2">
              {uploadedFiles.map(file => (
                <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{file.name}</p>
                      <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</p>
                    </div>
                  </div>
                  {fileSummaries[file.id] ? (
                    <span className="text-xs text-green-600 font-medium">✓ Processed</span>
                  ) : (
                    <span className="text-xs text-yellow-600 font-medium">Processing...</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>

    {/* Course Cards */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mb-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Your Courses</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            onClick={() => {
              handleCourseClick(course);
              startModuleTracking(course.id);
              updateCourseProgress(course.id, (courseProgress[course.id] || 0) + 5);
            }}
            className="premium-card course-card cursor-pointer group"
          >
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-2xl p-6 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Sparkles size={60} />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium mb-3">
                  {course.code}
                </span>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm opacity-90">{course.professor}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {course.section}
                </span>
                {course.assignment && (
                  <span className="text-xs bg-yellow-400/20 px-2 py-1 rounded-full">
                    📝 Due soon
                  </span>
                )}
              </div>
            </div>
            
            <div className="p-6">
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-600">Progress</span>
                  <span className="text-xs font-bold text-blue-600">{courseProgress[course.id] || 0}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${courseProgress[course.id] || 0}%` }}
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                      {i === 1 ? '👨‍🏫' : i === 2 ? '👩‍🎓' : '👨‍🎓'}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">
                    +12
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={(e) => { e.stopPropagation(); setView('stream'); setActiveSubject(course); }}
                  className="px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors"
                >
                  Stream
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setView('todo'); }}
                  className="px-3 py-2 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-100 transition-colors"
                >
                  Tasks
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsWhiteboardOpen(true); }}
                  className="px-3 py-2 bg-purple-50 text-purple-600 rounded-lg text-xs font-medium hover:bg-purple-100 transition-colors"
                >
                  Whiteboard
                </button>
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    completeAssignment(course.id);
                    endModuleTracking(course.id);
                  }}
                  className="px-3 py-2 bg-green-50 text-green-600 rounded-lg text-xs font-medium hover:bg-green-100 transition-colors"
                >
                  Complete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Recent Activity */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="premium-card p-6"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {[
          { icon: '📚', title: 'New material posted', course: 'SP 101', time: '2 hours ago' },
          { icon: '✅', title: 'Assignment submitted', course: 'SIA 101', time: '5 hours ago' },
          { icon: '📝', title: 'Quiz graded', course: 'TECH 32', time: '1 day ago' },
        ].map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <span className="text-2xl">{activity.icon}</span>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-600">{activity.course} • {activity.time}</p>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const ClassroomView = ({ subject }) => (
  <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="max-w-6xl mx-auto pb-20">
    <div className="h-80 rounded-[3rem] p-12 flex flex-col justify-end text-white shadow-2xl relative overflow-hidden mb-10" style={{ backgroundColor: subject.color }}>
      <div className="absolute top-0 right-0 p-12 opacity-10"><Sparkles size={250} /></div>
      <h1 className="text-6xl font-black mb-4 tracking-tighter leading-none">{subject.name}</h1>
      <p className="text-2xl font-medium opacity-90">{subject.teacher}</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
          <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">Upcoming Tasks</h4>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1 h-10 bg-blue-500 rounded-full"></div>
              <div>
                <p className="text-sm font-bold text-gray-800">Final Project</p>
                <p className="text-xs text-gray-500 mt-1">Due: Friday, 11:59 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 space-y-8">
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-5 group cursor-pointer hover:border-blue-200 transition-all">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
            <Plus size={24} />
          </div>
          <span className="text-gray-400 font-medium text-lg">Announce something to your class...</span>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden p-8 flex gap-6 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
            <ClipboardList size={28} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-bold text-gray-800">New Assignment: System Documentation</h4>
              <MoreVertical size={20} className="text-gray-300 cursor-pointer" />
            </div>
            <p className="text-gray-500 text-sm mb-6 font-medium">Please upload your PDF documentation following the provided template.</p>
            <div className="flex items-center justify-between pt-6 border-t border-gray-50">
              <button className="text-blue-600 font-bold text-sm hover:underline">Add class comment</button>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">3 Comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

  // --- COURSES DATA ---
  const allCourses = [
    { id: 1, code: 'SP 101', title: 'Social Issues', color: 'bg-green-600', initial: 'SP' },
    { id: 2, code: 'Capstone 1', title: 'Research', color: 'bg-blue-600', initial: 'Ca' },
    { id: 3, code: 'SIA 101', title: 'System Integration', color: 'bg-slate-600', initial: 'SI' },
    { id: 4, code: 'TECH 32', title: 'Technopreneurship', color: 'bg-cyan-700', initial: 'TE' },
    { id: 5, code: 'MRC 22', title: 'Computing Research', color: 'bg-gray-700', initial: 'MR' },
    { id: 6, code: 'WS 102', title: 'Web Programming', color: 'bg-blue-800', initial: 'WS' },
    { id: 7, code: 'ED 101', title: 'Embedded Systems', color: 'bg-emerald-600', initial: 'ED' },
    { id: 8, code: 'NET 102', title: 'Network Admin', color: 'bg-indigo-900', initial: 'NE' },
  ];

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

  // ===== PREMIUM COMPONENTS =====
  const NotificationDropdown = ({ show, onClose, notifications, onNotificationClick, onMarkAllRead }) => {
    const unreadCount = notifications.filter(n => !n.read).length;
    
    return (
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute right-4 top-16 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">Notifications</h3>
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
                    className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors ${
                      !notification.read ? 'bg-blue-50/50' : ''
                    }`}
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
                        <p className="font-medium text-gray-900 text-sm">{notification.title}</p>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
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

  const FloatingChat = ({ show, onToggle, chatTab, onTabChange, aiMessage, onAiMessageChange, onSendAiMessage, aiResponse, isAiLoading }) => {
    // Smart AI response generator based on dashboard data
    const generateSmartResponse = (userMessage) => {
      const message = userMessage.toLowerCase();
      
      // Check for specific course-related queries
      if (message.includes('assignment') || message.includes('deadline')) {
        const pendingTasks = tasks.filter(t => !t.completed);
        if (pendingTasks.length > 0) {
          return `You have ${pendingTasks.length} pending assignments. The most urgent is "${pendingTasks[0].title}" due on ${pendingTasks[0].dueDate}. Would you like me to help you organize your study schedule?`;
        }
        return "Great news! You don't have any pending assignments. Keep up the excellent work!";
      }
      
      if (message.includes('course') || message.includes('class')) {
        return `You're enrolled in ${courses.length} courses this semester. Your most active course is "${courses[0].title}" with Professor ${courses[0].professor}. Would you like to see your current progress?`;
      }
      
      if (message.includes('grade') || message.includes('gpa')) {
        return `Your current GPA is ${gpa.toFixed(2)}. You're performing at ${gpa >= 3.5 ? 'an excellent level' : gpa >= 3.0 ? 'a good level' : 'a level that could use improvement'}. Would you like study tips to improve your academic performance?`;
      }
      
      if (message.includes('study') || message.includes('help')) {
        return `Based on your dashboard, I recommend focusing on your ${tasks.filter(t => !t.completed && t.priority === 'high').length > 0 ? 'high-priority assignments first' : 'course progress and maintaining your current GPA'}. You've spent ${Math.floor(totalTimeInModules / 60)} hours studying this week!`;
      }
      
      if (message.includes('schedule') || message.includes('calendar')) {
        return "Your schedule shows you have several upcoming deadlines. I can help you create a study plan that balances all your courses. Would you like me to suggest a daily schedule?";
      }
      
      // Default contextual responses
      const responses = [
        "I'm here to help you succeed! Based on your current progress, you're doing great. What specific challenge can I assist you with?",
        "Looking at your academic performance, I can see you're dedicated to your studies. How can I support your learning journey today?",
        "I've analyzed your dashboard data and you're making excellent progress. What would you like to focus on improving?",
        "Your engagement level is impressive! Is there a particular subject or assignment you'd like to discuss?",
        "I'm monitoring your academic progress and you're on track. How can I help you reach your goals faster?"
      ];
      
      return responses[Math.floor(Math.random() * responses.length)];
    };

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
                      {/* Premium AI Profile with Sparkle Effect */}
                      <div className="relative">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full flex items-center justify-center">
                            <Zap size={16} className="text-white" />
                          </div>
                        </div>
                        {/* Sparkle Effect */}
                        <div className="absolute -top-1 -right-1">
                          <Sparkles size={16} className="text-yellow-300 animate-pulse" />
                        </div>
                        {/* Gradient Ring Effect */}
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
                  
                  {/* Status Indicator */}
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
                  {/* Welcome Message */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap size={16} className="text-white" />
                    </div>
                    <div className={`max-w-[80%] rounded-2xl p-3 ${
                      darkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'
                    } shadow-sm`}>
                      <p className="text-sm">Hey! 👋 I'm your AI assistant. I can see you're studying ${courses.join(', ')} this semester. How can I help you succeed today?</p>
                    </div>
                  </div>
                  
                  {/* AI Response */}
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
                  
                  {/* Typing Indicator */}
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
                    {/* Input decoration */}
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Sparkles size={16} className={`${
                        darkMode ? 'text-purple-400' : 'text-purple-500'
                      } opacity-50`} />
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onSendAiMessage();
                      // Generate smart response
                      const smartResponse = generateSmartResponse(aiMessage);
                      setTimeout(() => {
                        setAiResponse(smartResponse);
                        setIsAiLoading(false);
                      }, 1500);
                    }}
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
          {/* Background animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Icon */}
          <MessageSquare size={24} className="relative z-10" />
          
          {/* Sparkle effect */}
          <Sparkles size={12} className="absolute top-1 right-1 text-yellow-300 animate-pulse" />
          
          {/* Notification badge */}
          {getUnreadCount() > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
              {getUnreadCount()}
            </div>
          )}
        </motion.button>
      </div>
    );
  };

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
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
                    <p className="text-gray-600">{course.code} • {course.section}</p>
                  </div>
                  <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <X size={24} />
                  </button>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="flex border-b border-gray-100">
                {['overview', 'announcements', 'assignments', 'people', 'files'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`px-6 py-3 font-medium text-sm capitalize transition-colors ${
                      courseTab === tab 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600 hover:text-gray-900'
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
                    <div className="premium-card p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Course Information</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Instructor</p>
                          <p className="font-medium">{course.professor}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Section</p>
                          <p className="font-medium">{course.section}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {courseTab === 'announcements' && (
                  <div className="space-y-4">
                    {courseDetails.announcements.map(announcement => (
                      <div key={announcement.id} className="premium-card p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{announcement.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{announcement.content}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{announcement.author}</span>
                          <span>{announcement.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {courseTab === 'assignments' && (
                  <div className="space-y-4">
                    {courseDetails.assignments.map(assignment => (
                      <div key={assignment.id} className="premium-card p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{assignment.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            assignment.status === 'submitted' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {assignment.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>Due: {assignment.dueDate}</span>
                          <span>{assignment.points} points</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {courseTab === 'people' && (
                  <div className="space-y-4">
                    {courseDetails.people.map(person => (
                      <div key={person.id} className="premium-card p-4">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{person.avatar}</div>
                          <div>
                            <p className="font-medium text-gray-900">{person.name}</p>
                            <p className="text-sm text-gray-600">{person.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {courseTab === 'files' && (
                  <div className="space-y-4">
                    {courseDetails.files.map(file => (
                      <div key={file.id} className="premium-card p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <FileText size={16} className="text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{file.name}</p>
                              <p className="text-sm text-gray-600">{file.size} • {file.uploaded}</p>
                            </div>
                          </div>
                          <button className="text-blue-600 hover:text-blue-700">
                            <Download size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
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
    <div className={`h-screen w-full flex flex-col antialiased transition-all duration-300 overflow-hidden ${
      darkMode 
        ? 'bg-slate-950 text-slate-100' 
        : 'bg-[#f8fafc] text-[#1e293b]'
    }`}>
      
      {/* PREMIUM NAVBAR */}
      <nav className={`h-16 px-6 flex justify-between items-center border-b sticky top-0 z-[100] transition-all duration-300 ${
        darkMode 
          ? 'bg-slate-900 border-slate-800' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
            <Zap size={20} className="text-white"/>
          </div>
          <h1 className={`font-bold text-2xl tracking-wider transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>EduPulse</h1>
        </div>

        {/* RIGHT SIDE: Dark Mode Toggle + Notifications + Profile */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative p-3 rounded-xl transition-all duration-300 ${
              darkMode 
                ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {darkMode ? (
              <Sun size={20} className="animate-pulse" />
            ) : (
              <Moon size={20} />
            )}
            <div className={`absolute inset-0 rounded-xl opacity-0 ${
              darkMode 
                ? 'bg-gradient-to-r from-yellow-400 to-orange-400' 
                : 'bg-gradient-to-r from-blue-400 to-purple-400'
            } transition-opacity duration-300`}></div>
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className={`relative p-3 rounded-xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-800 text-gray-300 hover:bg-slate-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Bell size={20} />
              {getUnreadCount() > 0 && (
                <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
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
        <aside className={`w-[260px] border-r hidden xl:flex flex-col p-3 overflow-y-auto transition-all duration-300 z-40 flex-shrink-0 ${
          darkMode 
            ? 'bg-slate-900 border-slate-800' 
            : 'bg-[#f1f3f5] border-slate-200'
        }`}>
          <nav className="flex-1 px-2 space-y-1">
              {/* HOME DASHBOARD LINK */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveNav('Home'); setView('dashboard'); setActiveSubject(null); }}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-r-full transition-all duration-300 ${
                  activeNav === 'Home'
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-800'
                    : darkMode
                      ? 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Home
                  className={`mr-3 h-5 w-5 transition-colors duration-300 ${
                    activeNav === 'Home' 
                      ? darkMode ? 'text-white' : 'text-blue-700'
                      : darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  size={20}
                />
                <span className="sidebar-link-text">Home Dashboard</span>
              </a>

              {/* CALENDAR LINK */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveNav('Calendar'); setView('calendar'); setActiveSubject(null); }}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-r-full transition-all duration-300 ${
                  activeNav === 'Calendar'
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-800'
                    : darkMode
                      ? 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <CalendarIcon
                  className={`mr-3 h-5 w-5 transition-colors duration-300 ${
                    activeNav === 'Calendar' 
                      ? darkMode ? 'text-white' : 'text-blue-700'
                      : darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  size={20}
                />
                <span className="sidebar-link-text">Calendar</span>
              </a>

              {/* TO-DO LINK */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveNav('Todo'); setView('todo'); setActiveSubject(null); }}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-r-full transition-all duration-300 ${
                  activeNav === 'Todo'
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-800'
                    : darkMode
                      ? 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <ClipboardList
                  className={`mr-3 h-5 w-5 transition-colors duration-300 ${
                    activeNav === 'Todo' 
                      ? darkMode ? 'text-white' : 'text-blue-700'
                      : darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  size={20}
                />
                <span className="sidebar-link-text">To-Do</span>
              </a>

              {/* GAME LINK */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveNav('Game'); setView('game'); setActiveSubject(null); }}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-r-full transition-all duration-300 ${
                  activeNav === 'Game'
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-800'
                    : darkMode
                      ? 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Zap
                  className={`mr-3 h-5 w-5 transition-colors duration-300 ${
                    activeNav === 'Game' 
                      ? darkMode ? 'text-white' : 'text-blue-700'
                      : darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  size={20}
                />
                <span className="sidebar-link-text">Game</span>
              </a>
            </nav>

          <div className={`mt-6 pt-4 border-t transition-colors duration-300 ${
            darkMode ? 'border-slate-700' : 'border-slate-500/10'
          }`}>
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
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-r-full transition-all duration-300 ${
                  activeNav === 'Archived'
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-800'
                    : darkMode
                      ? 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Archive
                  className={`mr-3 h-5 w-5 transition-colors duration-300 ${
                    activeNav === 'Archived' 
                      ? darkMode ? 'text-white' : 'text-blue-700'
                      : darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  size={20}
                />
                {t("navArc")}
              </a>

              {/* SETTINGS LINK */}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveNav('Settings'); setView('settings'); setActiveSubject(null); }}
                className={`group flex items-center px-3 py-2.5 text-sm font-medium rounded-r-full transition-all duration-300 tracking-wider uppercase ${
                  activeNav === 'Settings'
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-800'
                    : darkMode
                      ? 'text-gray-300 hover:bg-slate-800 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Settings
                  className={`mr-3 h-5 w-5 transition-colors duration-300 ${
                    activeNav === 'Settings' 
                      ? darkMode ? 'text-white' : 'text-blue-700'
                      : darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  size={20}
                />
                <span className={`${activeNav === 'Settings' ? 'sidebar-settings-active' : 'sidebar-link-text'}`}>{t("navSet")}</span>
              </a>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <div className={`flex-1 overflow-y-auto custom-scrollbar relative transition-colors duration-300 ${
          darkMode ? 'bg-slate-950' : 'bg-gray-50'
        }`}>
          {/* TOP HEADER BAR */}
          <header className={`sticky top-0 z-40 px-6 py-4 border-b transition-all duration-300 ${
            darkMode 
              ? 'bg-slate-900 border-slate-800' 
              : 'bg-white border-gray-200'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {view !== "dashboard" && activeSubject && (
                  <button 
                    onClick={() => { setView("dashboard"); setActiveSubject(null); }}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      darkMode 
                        ? 'text-gray-300 bg-slate-800 border-slate-700 hover:bg-slate-700' 
                        : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <ArrowLeft size={16} />
                    Back to Dashboard
                  </button>
                )}
                {selectedCourse && (
                  <button 
                    onClick={() => setSelectedCourse(null)}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      darkMode 
                        ? 'text-blue-400 bg-blue-900/30 border-blue-800 hover:bg-blue-900/50' 
                        : 'text-blue-600 bg-blue-50 border-blue-200 hover:bg-blue-100'
                    }`}
                  >
                    <ArrowLeft size={16} />
                    Back to Dashboard
                  </button>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button className={`p-2 rounded-lg transition-all duration-300 ${
                  darkMode 
                    ? 'text-gray-400 hover:text-gray-200 hover:bg-slate-800' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}>
                  <Search size={20} />
                </button>
                <button className={`p-2 rounded-lg transition-all duration-300 relative ${
                  darkMode 
                    ? 'text-gray-400 hover:text-gray-200 hover:bg-slate-800' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}>
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                  S
                </div>
              </div>
            </div>
          </header>

          {/* Clean Navigation Structure */}
          <main className="flex-1 overflow-hidden flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 md:p-8">
              {activeNav === 'Home' && (
                <DashboardView 
                  darkMode={darkMode}
                  currentUser={currentUser}
                  getPendingTasksCount={getPendingTasksCount}
                  subjects={subjects}
                  gpa={gpa}
                  userXP={userXP}
                  totalTimeInModules={totalTimeInModules}
                  recentActivities={recentActivities}
                />
              )}
              {activeNav === 'Courses' && (
                <CoursesView 
                  darkMode={darkMode}
                  subjects={subjects}
                  handleSubjectClick={handleSubjectClick}
                />
              )}
              {activeNav === 'Calendar' && (
                <CalendarView 
                  darkMode={darkMode}
                  events={events}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                />
              )}
              {activeNav === 'Tasks' && (
                <TasksView 
                  darkMode={darkMode}
                  tasks={tasks}
                  toggleTask={toggleTask}
                  addTask={addTask}
                  newTaskTitle={newTaskTitle}
                  setNewTaskTitle={setNewTaskTitle}
                  selectedTaskDate={selectedTaskDate}
                  setSelectedTaskDate={setSelectedTaskDate}
                />
              )}
              {activeNav === 'Settings' && (
                <SettingsView 
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                  notificationsEnabled={notificationsEnabled}
                  setNotificationsEnabled={setNotificationsEnabled}
                  studentID={studentID}
                  currentUser={currentUser}
                />
              )}
            </div>
          </main>

          {/* Floating Chat */}
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
        </div>
      </div>
    </div>
  );
};

// Define View Components
const DashboardView = ({ darkMode, currentUser, getPendingTasksCount, subjects, gpa, userXP, totalTimeInModules, recentActivities }) => {
  return (
    <div className="p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}
      >
        Welcome back, {currentUser || 'Student'}! 👋
      </motion.h1>
      <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        You have {getPendingTasksCount()} assignments due this week.
      </p>
      
      {/* Dashboard Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-500 rounded-lg text-white">
              <BookOpen size={24} />
            </div>
            <span className="text-3xl font-bold text-blue-600">{subjects.length}</span>
          </div>
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Active Courses</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>This semester</p>
        </div>
        
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-500 rounded-lg text-white">
              <CheckSquare size={24} />
            </div>
            <span className="text-3xl font-bold text-green-600">{gpa.toFixed(2)}</span>
          </div>
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Current GPA</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Excellent progress</p>
        </div>
        
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-500 rounded-lg text-white">
              <Award size={24} />
            </div>
            <span className="text-3xl font-bold text-purple-600">{userXP}</span>
          </div>
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Experience Points</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Level {Math.floor(userXP / 100)}</p>
        </div>
        
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-500 rounded-lg text-white">
              <Clock size={24} />
            </div>
            <span className="text-3xl font-bold text-orange-600">{Math.floor(totalTimeInModules / 60)}</span>
          </div>
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Study Hours</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>This week</p>
        </div>
      </div>
      
      {/* Recent Activities */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
        <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent Activities</h3>
        <div className="space-y-3">
          {recentActivities?.slice(0, 5).map(activity => (
            <div key={activity.id} className={`flex items-center gap-3 p-3 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'achievement' ? 'bg-green-500' :
                activity.type === 'xp' ? 'bg-purple-500' :
                'bg-blue-500'
              }`} />
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{activity.description}</p>
              <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                {new Date(activity.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CoursesView = ({ darkMode, subjects, handleSubjectClick }) => {
  return (
    <div className="p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}
      >
        My Courses
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border cursor-pointer hover:shadow-lg transition-all`}
            onClick={() => handleSubjectClick(course)}
          >
            <div className={`${course.color} h-24 rounded-lg mb-4 flex items-center justify-center`}>
              <h3 className="text-white font-bold text-lg">{course.code}</h3>
            </div>
            <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{course.title}</h4>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Prof. {course.prof}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-blue-600">{course.progress}% Complete</span>
              <div className="w-20 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CalendarView = ({ darkMode, events, selectedDate, setSelectedDate }) => {
  return (
    <div className="p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}
      >
        Academic Calendar
      </motion.h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Upcoming Events</h3>
          <div className="space-y-3">
            {events?.map(event => (
              <div key={event.day} className={`p-4 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                <h4 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{event.day} - {event.date}</h4>
                {event.items.map(item => (
                  <div key={item.id} className="flex justify-between items-center mb-2">
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.title}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.type === 'deadline' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                    }`}>{item.type}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border lg:col-span-2`}>
          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Calendar View</h3>
          <div className="grid grid-cols-7 gap-2 text-center">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
              <div key={day} className={`p-2 text-sm font-bold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{day}</div>
            ))}
            {[...Array(30)].map((_, i) => (
              <div key={i} className={`p-3 rounded cursor-pointer transition-colors ${
                selectedDate === i + 1 
                  ? 'bg-blue-600 text-white' 
                  : darkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'
              }`} onClick={() => setSelectedDate(i + 1)}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TasksView = ({ darkMode, tasks, toggleTask, addTask, newTaskTitle, setNewTaskTitle, selectedTaskDate, setSelectedTaskDate }) => {
  return (
    <div className="p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}
      >
        Tasks & Assignments
      </motion.h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
          <h3 className={`text-lg font-bold mb-4 text-red-600`}>Pending</h3>
          <div className="space-y-3">
            {tasks?.filter(t => !t.completed).map(task => (
              <div key={task.id} className={`p-4 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-50'}`}>
                <h4 className={`font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{task.title}</h4>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Due: {task.dueDate}</span>
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                  >
                    Complete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
          <h3 className={`text-lg font-bold mb-4 text-green-600`}>Completed</h3>
          <div className="space-y-3">
            {tasks?.filter(t => t.completed).map(task => (
              <div key={task.id} className={`p-4 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-50'} opacity-75`}>
                <h4 className={`font-medium mb-2 line-through ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{task.title}</h4>
                <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Completed</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
          <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Add New Task</h3>
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
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

const SettingsView = ({ darkMode, setDarkMode, notificationsEnabled, setNotificationsEnabled, studentID, currentUser }) => {
  return (
    <div className="p-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}
      >
        Settings
      </motion.h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Profile Settings</h3>
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Student ID</label>
              <input
                type="text"
                value={studentID}
                disabled
                className={`w-full p-3 rounded-lg ${darkMode ? 'bg-slate-700 text-gray-400' : 'bg-gray-100 text-gray-600'}`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
              <input
                type="email"
                value={currentUser}
                disabled
                className={`w-full p-3 rounded-lg ${darkMode ? 'bg-slate-700 text-gray-400' : 'bg-gray-100 text-gray-600'}`}
              />
            </div>
          </div>
        </div>
        
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Preferences</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Dark Mode</span>
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
              <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email Notifications</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
