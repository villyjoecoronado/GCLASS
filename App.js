"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, BookOpen, Calendar, ClipboardList, Settings, Bell, 
  Search, Menu, X, Sparkles, LogOut, CheckSquare, Send, 
  MessageSquare, FileText, Camera, Video, Moon, Sun, TrendingUp, 
  CheckCircle, Activity, Zap
} from 'lucide-react';

// --- PREMIUM UI CSS-IN-JS (Bubbly Typography + Perfect Dark Mode Background Fix) ---
const injectProfessionalStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --font-family: 'Arial', sans-serif;
      --font-weight-heading: 700;
      --font-weight-body: 600;
      --letter-spacing-tight: 0em;
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
      font-style: normal !important;
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
      font-family: var(--font-family) !important;
      font-weight: var(--font-weight-heading) !important;
      font-style: normal !important;
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

    .heading-large {
      font-size: 28px;
      font-weight: var(--font-weight-heading);
      letter-spacing: var(--letter-spacing-tight);
      line-height: var(--line-height-heading);
      color: var(--color-primary) !important;
    }

    .heading-medium {
      font-size: 24px;
      font-weight: var(--font-weight-heading);
      letter-spacing: var(--letter-spacing-tight);
      line-height: var(--line-height-heading);
      color: var(--color-primary) !important;
    }

    .body-text {
      font-size: 16px;
      font-weight: var(--font-weight-body);
      line-height: var(--line-height-body);
      letter-spacing: var(--letter-spacing-normal);
      color: var(--color-primary) !important;
    }

    .caption-text {
      font-size: 14px;
      font-weight: var(--font-weight-body);
      line-height: var(--line-height-body);
      letter-spacing: var(--letter-spacing-normal);
      color: var(--color-secondary) !important;
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
      background-color: rgba(0,0,0,0.05);
    }
    
    body.dark-mode .sidebar-item:hover {
      background-color: rgba(255,255,255,0.05);
    }

    .sidebar-item.active {
      background-color: #e8f0fe;
      border: 1px solid #c2e7ff;
      font-weight: 600;
      margin: 2px 4px;
    }

    .sidebar-label {
      font-size: 14px;
      font-weight: 600;
      color: var(--color-primary);
    }

    .sidebar-sublabel {
      font-size: 12px;
      font-weight: 500;
      color: var(--color-secondary);
      margin-top: 2px;
    }

    .sidebar-icon {
      width: 20px;
      height: 20px;
      color: var(--color-secondary);
      flex-shrink: 0;
    }

    .sidebar-avatar {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      color: white;
      font-size: 14px;
      flex-shrink: 0;
    }

    .sidebar-separator {
      height: 1px;
      background-color: var(--border-light);
      margin: 8px 16px;
    }

    .sidebar-section-title {
      font-size: 12px;
      font-weight: 600;
      color: var(--color-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 8px 16px;
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
      border-bottom: 1px solid var(--border-light);
    }

    .premium-card {
      background: var(--card-bg);
      border-radius: 1rem;
      border: 1px solid var(--border-light);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
    }

    /* Course cards */
    .course-card {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .course-card:hover {
      transform: translateY(-4px);
    }

    /* Sidebar activation animation fixes */
    .sidebar-item {
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
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

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideInFromRight {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .animate-fade-in {
      animation: fadeIn 0.3s ease-out;
    }

    .animate-slide-in-from-right {
      animation: slideInFromRight 0.5s ease-out;
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
  
  // Registration State
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  // Auth Screen Dark Mode (separate from dashboard dark mode)
  const [authDarkMode, setAuthDarkMode] = useState(false);
  
  // Mock User Credentials Database
  const [userCredentials, setUserCredentials] = useState([
    { name: "Admin User", email: "admin", password: "admin" }
  ]);
  
  // Navigation State
  const [activeNav, setActiveNav] = useState('Home');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
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
  const [courseTab, setCourseTab] = useState('stream');
  const [classroomTab, setClassroomTab] = useState('Stream');
  const [searchQuery, setSearchQuery] = useState('');
  const [aiMessage, setAiMessage] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [selectedDate, setSelectedDate] = useState(19);
  const [calendarMonth, setCalendarMonth] = useState("May 2026");
  const [currentYear] = useState(new Date().getFullYear());
  
  // GCR Notification Toggle States
  const [allowEmail, setAllowEmail] = useState(true);
  const [commentsOnPosts, setCommentsOnPosts] = useState(true);
  const [classesEnrolled, setClassesEnrolled] = useState(true);
  const [invitations, setInvitations] = useState(true);
  const [dueDateReminders, setDueDateReminders] = useState(true);
  
  // Language State
  const [currentLang, setCurrentLang] = useState('en');
  
  // Language Dictionary
  const languageDictionary = {
    en: {
      welcome: "Welcome back",
      courses: "Your Courses",
      settings: "Settings",
      profile: "Profile",
      notifications: "Notifications",
      languageSettings: "Language Settings",
      accountSettings: "Account Settings",
      change: "Change",
      emailNotifications: "Email notifications",
      commentsOnPosts: "Comments on posts",
      classesEnrolled: "Classes you're enrolled in",
      invitations: "Invitations to classes",
      dueDateReminders: "Due date reminders",
      customizeExperience: "Customize your experience",
      selectLanguage: "Select Language",
      home: "Home",
      calendar: "Calendar",
      gemini: "Gemini",
      todo: "To-do"
    },
    tl: {
      welcome: "Mabuting pagbabalik",
      courses: "Iyong mga Kurso",
      settings: "Mga Setting",
      profile: "Profile",
      notifications: "Mga Notification",
      languageSettings: "Mga Setting ng Wika",
      accountSettings: "Mga Setting ng Account",
      change: "Baguhin",
      emailNotifications: "Mga notification sa email",
      commentsOnPosts: "Mga komento sa post",
      classesEnrolled: "Mga klase na iyong pinasok",
      invitations: "Mga imbitasyon sa klase",
      dueDateReminders: "Mga paalala sa due date",
      customizeExperience: "I-customize ang iyong karanasan",
      selectLanguage: "Pumili ng Wika",
      home: "Home",
      calendar: "Calendar",
      gemini: "Gemini",
      todo: "To-do"
    },
    es: {
      welcome: "Bienvenido de nuevo",
      courses: "Tus Cursos",
      settings: "Ajustes",
      profile: "Perfil",
      notifications: "Notificaciones",
      languageSettings: "Configuración de Idioma",
      accountSettings: "Configuración de Cuenta",
      change: "Cambiar",
      emailNotifications: "Notificaciones por correo",
      commentsOnPosts: "Comentarios en publicaciones",
      classesEnrolled: "Clases en las que estás inscrito",
      invitations: "Invitaciones a clases",
      dueDateReminders: "Recordatorios de fecha de entrega",
      customizeExperience: "Personaliza tu experiencia",
      selectLanguage: "Seleccionar Idioma",
      home: "Inicio",
      calendar: "Calendario",
      gemini: "Gemini",
      todo: "Tareas"
    }
  };
  
  const t = languageDictionary[currentLang];
  
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
    { id: 1, code: 'SP 101', title: 'SOCIAL ISSUES AND PROFESSIONAL PRACTICES', section: 'BSIT 3J', color: 'bg-[#134e4a]', professor: 'Cynthia B. Dulagan', progress: 70, meetLink: 'https://meet.google.com/soc-issues-prof', room: 'RM 401', sched: 'Tue/Thu 1:00-2:30PM', announcement: 'I have already recorded your midterm grades and attendance.' },
    { id: 2, code: 'CAPSTONE 1', title: 'PROJECT MANAGEMENT', section: 'BSIT 3J', color: 'bg-[#1e1b4b]', professor: 'SHERYL ANN RICAFORT', progress: 45, meetLink: 'https://meet.google.com/cap-stone-one', room: 'Lab 302', sched: 'Mon/Wed 8:00-10:00AM', announcement: 'Please submit your Chapter 2 drafts by Saturday.' },
    { id: 3, code: 'SIA 101', title: 'SYSTEM INTEGRATION AND ARCHITECTURE', section: 'BSIT 3J', color: 'bg-[#2d1b33]', professor: 'Toni D. Granado', progress: 30, meetLink: 'https://meet.google.com/sia-sys-integ', room: 'Lab 305', sched: 'Fri 9:00-12:00PM', announcement: 'Prepare for the hands-on lab next week.' },
    { id: 4, code: 'TECH 32', title: 'TECHNOPRENEURSHIP', section: 'BSIT 3J', color: 'bg-[#064e3b]', professor: 'Katherine C. Baggay', progress: 85, meetLink: 'https://meet.google.com/tech-nopre-neur', room: 'RM 202', sched: 'Mon 1:00-4:00PM', announcement: 'Pitch deck presentations start on Monday.' },
    { id: 5, code: 'MRC 22', title: 'METHODS OF RESEARCH IN COMPUTING', section: 'BSIT 3J', color: 'bg-[#4c1d95]', professor: 'Toni D. Granado', progress: 10, meetLink: 'https://meet.google.com/mrc-research-met', room: 'RM 405', sched: 'Wed 2:00-5:00PM', announcement: 'Finalize your research titles for approval.' },
    { id: 6, code: 'WS 102', title: 'WEB PROGRAMMING', section: 'BSIT 3J', color: 'bg-[#1e293b]', professor: 'Roclyn Yamson', progress: 60, meetLink: 'https://meet.google.com/web-prog-react', room: 'Lab 301', sched: 'Tue 8:00-11:00AM', announcement: "Don't forget to push your React projects to GitHub." },
    { id: 7, code: 'ED 101', title: 'EMBEDDED SYSTEMS/ROBOTICS', section: 'BSIT 3J', color: 'bg-[#134e4a]', professor: 'Edmar Tan', progress: 50, meetLink: 'https://meet.google.com/ed-robotics-sys', room: 'Lab 402', sched: 'Thu 9:00-12:00PM', announcement: 'Bring your Arduino kits on our face-to-face class.' },
    { id: 8, code: 'NET 102', title: 'NETWORK ADMINISTRATION AND MAINTENANCE', section: 'BSIT 3J', color: 'bg-[#2d1b33]', professor: 'Harvey Rey B. Del Rosario', progress: 20, meetLink: 'https://meet.google.com/et-net-admin-mnt', room: 'Lab 306', sched: 'Sat 8:00-11:00AM', announcement: 'Server configuration quiz is scheduled for Tuesday.' }
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
    
    // Check against mock user credentials
    const user = userCredentials.find(u => u.email === username && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user.name);
    } else if (username === "admin" && password === "admin") {
      // Fallback for demo
      setIsLoggedIn(true);
      setCurrentUser(username);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Validate all fields are filled
    if (!registerData.name || !registerData.email || !registerData.password || !registerData.confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    
    // Validate password matches confirm password
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    // Check if email already exists
    const emailExists = userCredentials.some(u => u.email === registerData.email);
    if (emailExists) {
      alert("An account with this email already exists");
      return;
    }
    
    // Add new user to credentials array
    const newUser = {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password
    };
    
    setUserCredentials([...userCredentials, newUser]);
    
    // Clear registration fields
    setRegisterData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    
    // Show success alert and switch to login mode
    alert("Registration successful! You can now log in.");
    setIsRegisterMode(false);
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
    setCourseTab('overview');
  };

  const handleSubjectSelect = (course) => {
    setSelectedCourseDetail(course);
    setActiveItem(course.id);
    setActiveNav('Subject');
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

  const getProfessorAvatar = (professorName) => {
    const femaleNames = ['Sheryl', 'Toni', 'Katherine', 'Cynthia'];
    const maleNames = ['Edmar', 'Harvey', 'Roclyn'];
    
    const firstName = professorName.split(' ')[0];
    
    if (femaleNames.some(name => professorName.includes(name))) {
      return `https://api.dicebear.com/7.x/adventurer/svg?seed=${firstName}&gender=female`;
    } else if (maleNames.some(name => professorName.includes(name))) {
      return `https://api.dicebear.com/7.x/adventurer/svg?seed=${firstName}&gender=male`;
    } else {
      return `https://api.dicebear.com/7.x/adventurer/svg?seed=${firstName}`;
    }
  };
  
  const LoginScreen = () => {
    return (
      <div className={`min-h-screen flex items-center justify-center p-4 relative overflow-hidden transition-all duration-300 ${authDarkMode ? 'bg-[#0e1322]' : 'bg-gradient-to-br from-indigo-100 via-sky-50 to-emerald-100'}`}>
        {/* Ambient Glows for Dark Mode */}
        {authDarkMode && (
          <>
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </>
        )}
        {/* Subtle Flow Patterns for Light Mode */}
        {!authDarkMode && (
          <>
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl" />
            </div>
          </>
        )}
        <div className={`w-full max-w-sm sm:max-w-md mx-auto p-8 rounded-2xl shadow-2xl transition-all duration-300 relative z-10 ${authDarkMode ? 'bg-slate-900/95 border border-slate-800' : 'bg-white/95 border border-gray-200'}`}>
          {/* Dark Mode Toggle */}
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setAuthDarkMode(!authDarkMode)}
              className="p-2 rounded-lg transition-all duration-200 hover:scale-105"
            >
              {authDarkMode ? (
                <Sun size={20} className="text-cyan-300" />
              ) : (
                <Moon size={20} className="text-slate-700" />
              )}
            </button>
          </div>

          {/* School Logo */}
          <img src="/PTCLOGO.webp" alt="PTC Logo" className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-0 object-contain drop-shadow-md" />

          {/* University Typography */}
          <h1 className={`font-bold uppercase tracking-wide text-2xl sm:text-3xl lg:text-4xl drop-shadow-sm mb-2 text-center transition-all duration-300 ${authDarkMode ? 'text-white' : 'text-slate-950'}`} style={{ color: authDarkMode ? '#ffffff' : undefined }}>PATEROS TECHNOLOGICAL COLLEGE</h1>
          <p className={`font-semibold text-sm mb-2 text-center transition-all duration-300 ${authDarkMode ? 'text-cyan-200' : 'text-slate-950'}`} style={{ color: authDarkMode ? '#a5f3fc' : undefined }}>Learning Management System</p>
          <p className={`font-medium text-xs mb-6 text-center transition-all duration-300 ${authDarkMode ? 'text-slate-200' : 'text-slate-950'}`} style={{ color: authDarkMode ? '#e2e8f0' : undefined }}>Access for Teachers, Administrators, and Students</p>
          
          {!isRegisterMode ? (
            // Login Form
            <form onSubmit={handleLogin} className="space-y-4">
              <input 
                key="login-username"
                id="login-username"
                type="text" 
                placeholder="Student ID / Email" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className={`w-full px-4 py-3 border rounded-xl outline-none transition-all focus:border-blue-500 text-sm font-medium ${authDarkMode ? 'bg-slate-900/90 border-slate-700 placeholder:text-slate-400' : 'bg-white border-gray-300 placeholder:text-gray-500'}`} 
                style={{ color: authDarkMode ? '#ffffff' : '#0f172a' }}
                required
              />
              <input 
                key="login-password"
                id="login-password"
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className={`w-full px-4 py-3 border rounded-xl outline-none transition-all focus:border-blue-500 text-sm font-medium ${authDarkMode ? 'bg-slate-900/90 border-slate-700 placeholder:text-slate-400' : 'bg-white border-gray-300 placeholder:text-gray-500'}`} 
                style={{ color: authDarkMode ? '#ffffff' : '#0f172a' }}
                required
              />
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-md active:scale-[0.99]">
                Sign In
              </button>
            </form>
          ) : (
            // Registration Form
            <form onSubmit={handleRegister} className="space-y-4">
              <input 
                key="register-fullname"
                id="register-fullname"
                name="name"
                type="text" 
                placeholder="Full Name" 
                value={registerData.name} 
                onChange={(e) => setRegisterData(prev => ({ ...prev, name: e.target.value }))} 
                className={`w-full px-4 py-3 border rounded-xl outline-none transition-all focus:border-blue-500 text-sm font-medium ${authDarkMode ? 'bg-slate-900/90 border-slate-700 placeholder:text-slate-400' : 'bg-white border-gray-300 placeholder:text-gray-500'}`} 
                style={{ color: authDarkMode ? '#ffffff' : '#0f172a' }}
                required
              />
              <input 
                key="register-email"
                id="register-email"
                name="email"
                type="email" 
                placeholder="Email Address" 
                value={registerData.email} 
                onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))} 
                className={`w-full px-4 py-3 border rounded-xl outline-none transition-all focus:border-blue-500 text-sm font-medium ${authDarkMode ? 'bg-slate-900/90 border-slate-700 placeholder:text-slate-400' : 'bg-white border-gray-300 placeholder:text-gray-500'}`} 
                style={{ color: authDarkMode ? '#ffffff' : '#0f172a' }}
                required
              />
              <input 
                key="register-password"
                id="register-password"
                name="password"
                type="password" 
                placeholder="Password" 
                value={registerData.password} 
                onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))} 
                className={`w-full px-4 py-3 border rounded-xl outline-none transition-all focus:border-blue-500 text-sm font-medium ${authDarkMode ? 'bg-slate-900/90 border-slate-700 placeholder:text-slate-400' : 'bg-white border-gray-300 placeholder:text-gray-500'}`} 
                style={{ color: authDarkMode ? '#ffffff' : '#0f172a' }}
                required
              />
              <input 
                key="register-confirm-password"
                id="register-confirm-password"
                name="confirmPassword"
                type="password" 
                placeholder="Confirm Password" 
                value={registerData.confirmPassword} 
                onChange={(e) => setRegisterData(prev => ({ ...prev, confirmPassword: e.target.value }))} 
                className={`w-full px-4 py-3 border rounded-xl outline-none transition-all focus:border-blue-500 text-sm font-medium ${authDarkMode ? 'bg-slate-900/90 border-slate-700 placeholder:text-slate-400' : 'bg-white border-gray-300 placeholder:text-gray-500'}`} 
                style={{ color: authDarkMode ? '#ffffff' : '#0f172a' }}
                required
              />
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-md active:scale-[0.99]">
                Create Account
              </button>
            </form>
          )}

          <div className="mt-6">
            {!isRegisterMode ? (
              <button 
                onClick={() => setIsRegisterMode(true)}
                className={`text-sm font-semibold hover:underline transition-all ${authDarkMode ? 'text-cyan-200' : 'text-slate-950'}`}
                style={{ color: authDarkMode ? '#a5f3fc' : undefined }}
              >
                Don't have an account? Register here
              </button>
            ) : (
              <button 
                onClick={() => setIsRegisterMode(false)}
                className={`text-sm font-semibold hover:underline transition-all ${authDarkMode ? 'text-cyan-200' : 'text-slate-950'}`}
                style={{ color: authDarkMode ? '#a5f3fc' : undefined }}
              >
                Already have an account? Log in here
              </button>
            )}
          </div>

          <p className={`text-xs mt-4 text-center transition-all duration-300 ${authDarkMode ? 'text-slate-200' : 'text-slate-950'}`} style={{ color: authDarkMode ? '#e2e8f0' : undefined }}>Demo Admin: admin / admin</p>
        </div>
      </div>
    );
  };

  // =========================================================================
  // --- SIDEBAR COMPONENT: GOOGLE CLASSROOM STYLE ---
  // =========================================================================
  const Sidebar = () => {
    const navigationItems = [
      { id: 'Home', name: t.home, icon: Home },
      { id: 'Calendar', name: t.calendar, icon: Calendar },
      { id: 'Gemini', name: t.gemini, icon: Sparkles },
      { id: 'Tasks', name: t.todo, icon: CheckSquare },
    ];

    // Separate courses to list them under "Enrolled"
    const activeEnrolledCourses = courses || [];

    return (
      <>
        {isMobileSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}
        
        <motion.aside
          initial={false}
          animate={{ 
            width: isMobileSidebarOpen ? '288px' : (window.innerWidth >= 768 ? '288px' : '0px'),
            opacity: isMobileSidebarOpen ? 1 : (window.innerWidth >= 768 ? 1 : 0),
            transform: isMobileSidebarOpen ? 'translateX(0)' : (window.innerWidth >= 768 ? 'translateX(0)' : 'translateX(-100%)')
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="h-full border-r z-50 overflow-hidden flex-shrink-0 fixed inset-y-0 left-0 md:relative md:translate-x-0 md:w-64 md:block transition-transform duration-300"
          style={{ backgroundColor: 'var(--sidebar-bg)', borderColor: 'var(--border-light)' }}
        >
          <div className="flex flex-col h-full min-w-[288px]">
            {/* Nav links rendering loop */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveNav(item.id);
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 transition-all border-none cursor-pointer text-left font-semibold text-sm hover:scale-[1.02] hover:shadow-lg rounded-2xl ${isActive && isDarkMode ? 'shadow-[0_2px_12px_rgba(59,130,246,0.3)]' : ''}`}
                    style={{
                      backgroundColor: isActive 
                        ? (isDarkMode ? 'rgba(59, 130, 246, 0.2)' : '#e0f2fe') 
                        : 'transparent',
                      color: isActive 
                        ? (isDarkMode ? '#ffffff' : '#0369a1') 
                        : (isDarkMode ? '#cbd5e1' : 'var(--color-primary)'),
                      transform: isActive ? 'scale(1.02)' : 'scale(1)',
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: isActive ? (isDarkMode ? '#ffffff' : '#0369a1') : (isDarkMode ? '#94a3b8' : 'var(--color-secondary)') }} />
                    <span>{item.name}</span>
                  </button>
                );
              })}

              {/* ENROLLED / SUBJECTS LIST SECTION (Google Classroom Matching Layout) */}
              <div className="mt-4">
                <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300" style={{ color: 'var(--color-muted)' }}>
                  Enrolled
                </div>
                <div className="mt-1 space-y-1">
                  {activeEnrolledCourses.map((course) => {
                    // Generate a miniature color circle indicator matching the main card theme color
                    const colorMap = {
                      'bg-[#134e4a]': '#134e4a',
                      'bg-[#1e1b4b]': '#1e1b4b',
                      'bg-[#2d1b33]': '#2d1b33',
                      'bg-[#064e3b]': '#064e3b',
                      'bg-[#4c1d95]': '#4c1d95',
                      'bg-[#1e293b]': '#1e293b',
                    };
                    const bgCircleColor = colorMap[course.color] || '#4b5563';
                    const isActive = activeItem === course.id;

                    return (
                      <button
                        key={course.id}
                        onClick={() => {
                          handleSubjectSelect(course);
                          setIsMobileSidebarOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl text-left text-sm font-medium hover:scale-[1.02] hover:shadow-md transition-all duration-150 group border-none cursor-pointer ${isActive && isDarkMode ? 'shadow-[0_2px_12px_rgba(59,130,246,0.3)]' : ''}`}
                        style={{
                          backgroundColor: isActive 
                            ? (isDarkMode ? 'rgba(59, 130, 246, 0.2)' : '#e0f2fe') 
                            : 'transparent',
                          color: isActive 
                            ? (isDarkMode ? '#ffffff' : '#0369a1') 
                            : (isDarkMode ? '#cbd5e1' : 'var(--color-primary)'),
                        }}
                      >
                        {/* Miniature Colored Circle with Initial letter */}
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm shrink-0 group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: bgCircleColor }}
                        >
                          {course.code.charAt(0)}
                        </div>
                        {/* Subject Code and Section Row */}
                        <div className="overflow-hidden flex-1">
                          <p className="truncate font-semibold m-0 leading-tight" style={{ color: isActive ? (isDarkMode ? '#ffffff' : '#0369a1') : (isDarkMode ? '#cbd5e1' : 'var(--color-primary)') }}>
                            {course.code}
                          </p>
                          <p className="text-[11px] truncate m-0 opacity-70" style={{ color: isActive ? (isDarkMode ? '#ffffff' : '#0369a1') : (isDarkMode ? '#94a3b8' : 'var(--color-muted)') }}>
                            {course.section}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </nav>

            {/* Bottom Settings Track */}
            <div className="p-4 border-t" style={{ borderColor: 'var(--border-light)' }}>
              <button 
                onClick={() => setActiveNav('Settings')}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left font-semibold text-sm hover:scale-[1.02] hover:shadow-md transition-all duration-150 border-none cursor-pointer"
                style={{ color: 'var(--color-primary)' }}
              >
                <Settings className="w-5 h-5" style={{ color: 'var(--color-secondary)' }} />
                <span>Settings</span>
              </button>
              <button 
                onClick={() => setActiveNav('Archived')}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left font-semibold text-sm hover:scale-[1.02] hover:shadow-md transition-all duration-150 border-none cursor-pointer mt-1"
                style={{ color: 'var(--color-primary)' }}
              >
                <BookOpen className="w-5 h-5" style={{ color: 'var(--color-secondary)' }} />
                <span>Archived classes</span>
              </button>
              <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all border-none cursor-pointer font-bold text-sm mt-2">
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </motion.aside>
      </>
    );
  };

  // =========================================================================
  // --- SUB-VIEW RESTORATION: CALENDAR & TASKS WITH PERFECT DARK MODE ---
  // =========================================================================

  const CalendarView = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentMonth = "May 2026";
    
    // Simple mock matrix for rendering days
    const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
      <div className="p-4 md:p-6 lg:p-8 h-[calc(100vh-64px)] overflow-y-auto transition-colors duration-300" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="mb-4">
          <button
            onClick={() => setActiveNav('Home')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border-none cursor-pointer text-sm font-semibold hover:scale-105 transition-all duration-200"
            style={{ 
              background: 'var(--gradient-electric)', 
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
            }}
          >
            ← Return to Dashboard
          </button>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold m-0" style={{ color: 'var(--color-primary)' }}>Academic Calendar</h2>
          <p className="m-0 mt-1 text-sm" style={{ color: 'var(--color-secondary)' }}>Track your class schedules and events</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <motion.div 
            whileHover={{ translateY: -2 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-2 rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-200"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold m-0" style={{ color: 'var(--color-primary)' }}>{currentMonth}</h3>
            </div>
            
            <div className="grid grid-cols-7 gap-2 text-center font-bold text-xs mb-4" style={{ color: 'var(--color-muted)' }}>
              {daysOfWeek.map(day => <div key={day}>{day}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map(day => (
                <motion.div 
                  key={day} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 border rounded-xl text-center text-sm font-medium relative min-h-[50px] flex flex-col justify-between cursor-pointer transition-all duration-200"
                  style={{ borderColor: 'var(--border-light)', color: 'var(--color-primary)' }}
                >
                  <span>{day}</span>
                  {day === 19 && (
                    <div className="w-2 h-2 rounded-full mx-auto mt-1" title="Today" style={{ background: 'var(--gradient-electric)' }} />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.div 
              whileHover={{ translateY: -2 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border p-4 shadow-sm hover:shadow-lg transition-all duration-200"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
            >
              <h3 className="text-sm font-bold mb-3" style={{ color: 'var(--color-primary)' }}>Schedules Today</h3>
              <p className="text-xs m-0" style={{ color: 'var(--color-muted)' }}>No synchronous sessions recorded for today.</p>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  const TasksView = () => {
    return (
      <div className="p-4 md:p-6 lg:p-8 h-[calc(100vh-64px)] overflow-y-auto transition-colors duration-300" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="mb-4">
          <button
            onClick={() => setActiveNav('Home')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border-none cursor-pointer text-sm font-semibold hover:scale-105 transition-all duration-200"
            style={{ 
              background: 'var(--gradient-electric)', 
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
            }}
          >
            ← Return to Dashboard
          </button>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold m-0" style={{ color: 'var(--color-primary)' }}>Tasks & Assignments</h2>
          <p className="m-0 mt-1 text-sm" style={{ color: 'var(--color-secondary)' }}>Manage your academic tasks and deadlines</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <motion.div 
              whileHover={{ translateY: -2 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-200"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold m-0 text-base" style={{ color: 'var(--color-primary)' }}>Pending Tasks</h3>
                <span className="text-xs px-2.5 py-1 rounded-full font-bold" style={{ background: 'var(--gradient-electric)', color: '#ffffff' }}>Active</span>
              </div>
              
              <div className="space-y-3">
                {tasks && tasks.length > 0 ? (
                  tasks.map(task => (
                    <motion.div 
                      key={task.id}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all duration-200 hover:shadow-md"
                      style={{ borderColor: 'var(--border-light)' }}
                    >
                      <div>
                        <h4 className="text-sm font-bold m-0" style={{ color: 'var(--color-primary)' }}>{task.title}</h4>
                        <p className="text-xs m-0 mt-1" style={{ color: 'var(--color-muted)' }}>Due: {task.dueDate}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded-md font-medium" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--color-secondary)' }}>
                          {task.priority}
                        </span>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-sm text-center py-6" style={{ color: 'var(--color-muted)' }}>Hooray! No pending tasks found.</p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  // --- COURSES VIEW ---
  const CoursesView = () => (
    <div className="p-4 md:p-6 lg:p-8 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="mb-6">
        <button
          onClick={() => setActiveNav('Home')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border-none cursor-pointer text-sm font-semibold hover:scale-105 transition-all duration-200 mb-4"
          style={{ 
            background: 'var(--gradient-electric)', 
            color: '#ffffff',
            boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
          }}
        >
          ← Return to Dashboard
        </button>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-family)' }}>
          All Courses
        </h2>
        <p className="text-gray-600 dark:text-gray-400">Browse and manage your enrolled courses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
            onClick={() => handleCourseClick(course)}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all"
          >
            <div className={`h-24 ${course.color} p-4 relative overflow-hidden`}>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-white/10"></div>
              <span className="text-white text-xs font-semibold">{course.code}</span>
              <h3 className="text-white font-bold text-sm mt-1 line-clamp-2" style={{ color: '#ffffff' }}>{course.title}</h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{course.professor}</p>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>{course.room}</span>
                <span>{course.progress}% complete</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  // --- SETTINGS VIEW ---
  const SettingsView = () => (
    <div className="p-4 md:p-6 lg:p-8 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="mb-6">
        <button
          onClick={() => setActiveNav('Home')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border-none cursor-pointer text-sm font-semibold hover:scale-105 transition-all duration-200 mb-4"
          style={{ 
            background: 'var(--gradient-electric)', 
            color: '#ffffff',
            boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
          }}
        >
          ← Return to Dashboard
        </button>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-family)' }}>
          {t.settings}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{t.customizeExperience}</p>
      </div>

      <div className="max-w-2xl space-y-6">
        {/* Profile Card */}
        <motion.div 
          whileHover={{ translateY: -2 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-200"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
        >
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-primary)' }}>{t.profile}</h3>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg" style={{ background: 'var(--gradient-electric)' }}>
              {currentUser ? currentUser.charAt(0).toUpperCase() : 'S'}
            </div>
            <div className="flex-1">
              <p className="font-medium text-lg" style={{ color: 'var(--color-primary)' }}>{currentUser || 'Student'}</p>
              <p className="text-sm" style={{ color: 'var(--color-muted)' }}>BSIT 3J • 3rd Year</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-blue-600 hover:underline text-sm font-medium">
              {t.change}
            </button>
            <span style={{ color: 'var(--border-light)' }}>|</span>
            <button className="text-blue-600 hover:underline text-sm font-medium">
              {t.accountSettings}
            </button>
          </div>
        </motion.div>

        {/* Global Notifications Grid */}
        <motion.div 
          whileHover={{ translateY: -2 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-200"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
        >
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-primary)' }}>{t.notifications}</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium" style={{ color: 'var(--color-primary)' }}>{t.emailNotifications}</p>
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Receive email notifications for updates</p>
              </div>
              <button
                onClick={() => setAllowEmail(!allowEmail)}
                className={`relative w-14 h-7 rounded-full transition-colors ${allowEmail ? 'bg-blue-600' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${allowEmail ? 'translate-x-8' : 'translate-x-1'}`}></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium" style={{ color: 'var(--color-primary)' }}>{t.commentsOnPosts}</p>
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Get notified when someone comments</p>
              </div>
              <button
                onClick={() => setCommentsOnPosts(!commentsOnPosts)}
                className={`relative w-14 h-7 rounded-full transition-colors ${commentsOnPosts ? 'bg-blue-600' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${commentsOnPosts ? 'translate-x-8' : 'translate-x-1'}`}></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium" style={{ color: 'var(--color-primary)' }}>{t.classesEnrolled}</p>
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Updates for your enrolled classes</p>
              </div>
              <button
                onClick={() => setClassesEnrolled(!classesEnrolled)}
                className={`relative w-14 h-7 rounded-full transition-colors ${classesEnrolled ? 'bg-blue-600' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${classesEnrolled ? 'translate-x-8' : 'translate-x-1'}`}></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium" style={{ color: 'var(--color-primary)' }}>{t.invitations}</p>
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Class invitations and requests</p>
              </div>
              <button
                onClick={() => setInvitations(!invitations)}
                className={`relative w-14 h-7 rounded-full transition-colors ${invitations ? 'bg-blue-600' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${invitations ? 'translate-x-8' : 'translate-x-1'}`}></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium" style={{ color: 'var(--color-primary)' }}>{t.dueDateReminders}</p>
                <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Reminders for upcoming due dates</p>
              </div>
              <button
                onClick={() => setDueDateReminders(!dueDateReminders)}
                className={`relative w-14 h-7 rounded-full transition-colors ${dueDateReminders ? 'bg-blue-600' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${dueDateReminders ? 'translate-x-8' : 'translate-x-1'}`}></div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Language Settings */}
        <motion.div 
          whileHover={{ translateY: -2 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-200"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
        >
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-primary)' }}>{t.languageSettings}</h3>
          <div className="space-y-3">
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>{t.selectLanguage}</p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentLang('en')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${currentLang === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                English
              </button>
              <button
                onClick={() => setCurrentLang('tl')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${currentLang === 'tl' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Tagalog
              </button>
              <button
                onClick={() => setCurrentLang('es')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${currentLang === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Español
              </button>
            </div>
          </div>
        </motion.div>

        {/* Appearance */}
        <motion.div 
          whileHover={{ translateY: -2 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition-all duration-200"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
        >
          <h3 className="font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Appearance</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium" style={{ color: 'var(--color-primary)' }}>Dark Mode</p>
              <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Toggle dark theme for better night viewing</p>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`relative w-14 h-7 rounded-full transition-colors ${isDarkMode ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${isDarkMode ? 'translate-x-8' : 'translate-x-1'}`}></div>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );

  // --- SUBJECT VIEW (Google Classroom Style) ---
  const SubjectView = () => {
    if (!selectedCourseDetail) return <DashboardHome />;

    const tabs = ['Stream', 'Classwork', 'People'];

    return (
      <div className="p-4 md:p-6 lg:p-8 h-[calc(100vh-64px)] overflow-y-auto transition-colors duration-300" style={{ backgroundColor: 'var(--bg-main)' }}>
        {/* RTD Row */}
        <div className="mb-4">
          <button
            onClick={() => setActiveNav('Home')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border-none cursor-pointer text-sm font-semibold hover:scale-105 transition-all duration-200"
            style={{ 
              background: 'var(--gradient-electric)', 
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
            }}
          >
            ← Return to Dashboard
          </button>
        </div>

        {/* Premium Gradient Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl p-5 mb-4 shadow-lg"
          style={{ 
            background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)',
            minHeight: '140px'
          }}
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">
                  {selectedCourseDetail.code}
                </span>
                <span className="text-white/60">•</span>
                <span className="text-white/80 text-sm font-medium">
                  {selectedCourseDetail.section}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-family)' }}>
                {selectedCourseDetail.title}
              </h1>
              <p className="text-white/80 text-sm">{selectedCourseDetail.professor}</p>
            </div>
          </div>
        </motion.div>

        {/* Classroom Nav Tabs */}
        <div className="flex gap-2 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setClassroomTab(tab)}
              className="px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 border-none cursor-pointer"
              style={{
                background: classroomTab === tab 
                  ? 'var(--gradient-electric)' 
                  : 'var(--bg-secondary)',
                color: classroomTab === tab 
                  ? '#ffffff' 
                  : 'var(--color-primary)',
                boxShadow: classroomTab === tab 
                  ? '0 4px 12px rgba(79, 70, 229, 0.3)' 
                  : 'none'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Sidebar Panel */}
          <div className="space-y-4">
            {/* Meet Card */}
            <motion.div
              whileHover={{ translateY: -2 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border p-4 shadow-sm hover:shadow-lg transition-all duration-200"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl" style={{ background: 'var(--gradient-electric)' }}>
                  <Video size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm" style={{ color: 'var(--color-primary)' }}>Meet</h3>
                  <p className="text-xs" style={{ color: 'var(--color-muted)' }}>Video integration</p>
                </div>
              </div>
              <button
                onClick={() => window.open(selectedCourseDetail.meetLink, '_blank')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-white rounded-xl text-sm font-semibold hover:shadow-lg active:scale-[0.98] transition-all duration-200"
                style={{ background: 'var(--gradient-electric)' }}
              >
                <Camera size={16} />
                Join
              </button>
            </motion.div>

            {/* Upcoming Tasks */}
            <motion.div
              whileHover={{ translateY: -2 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border p-4 shadow-sm hover:shadow-lg transition-all duration-200"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
            >
              <h3 className="font-bold text-sm mb-4" style={{ color: 'var(--color-primary)' }}>Upcoming Tasks</h3>
              <div className="space-y-3">
                {tasks.slice(0, 3).map(task => (
                  <div
                    key={task.id}
                    className="p-3 rounded-xl border transition-all duration-200 hover:shadow-md cursor-pointer"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-light)' }}
                  >
                    <div className="flex items-start gap-2">
                      <CheckSquare size={14} style={{ color: task.completed ? 'var(--color-muted)' : '#0369a1' }} />
                      <div className="flex-1">
                        <p className="text-xs font-medium" style={{ color: 'var(--color-primary)' }}>{task.title}</p>
                        <p className="text-[10px] mt-1" style={{ color: 'var(--color-muted)' }}>Due: {task.dueDate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Stream Feed Panel */}
          <div className="lg:col-span-2 space-y-4">
            {/* Announce Input */}
            <motion.div
              whileHover={{ translateY: -2 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border p-3 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'var(--gradient-electric)' }}>
                  {currentUser ? currentUser.charAt(0).toUpperCase() : 'S'}
                </div>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Announce something to your class...</p>
                </div>
              </div>
            </motion.div>

            {/* Announcement Stream */}
            <div className="space-y-4">
              {[
                { name: 'Prof. Toni D. Granado', avatar: 'T', date: 'May 19, 2026', message: 'I have already recorded your midterm grades and attendance. Please check your student portal for updates.' },
                { name: 'Cynthia B. Dulagan', avatar: 'C', date: 'May 18, 2026', message: 'Please submit your Chapter 5 drafts by Saturday. Make sure to include all required references.' },
                { name: 'Prof. Toni D. Granado', avatar: 'T', date: 'May 17, 2026', message: 'Prepare for the hands-on lab next week. We will be covering system integration patterns.' }
              ].map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ translateY: -2 }}
                  className="rounded-2xl border p-4 shadow-sm hover:shadow-lg transition-all duration-200"
                  style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'var(--gradient-electric)' }}>
                      {post.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold" style={{ color: 'var(--color-primary)' }}>{post.name}</p>
                        <p className="text-xs" style={{ color: 'var(--color-muted)' }}>{post.date}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm mb-4" style={{ color: 'var(--color-secondary)' }}>{post.message}</p>
                  <div className="flex items-center gap-2 pt-3 border-t" style={{ borderColor: 'var(--border-light)' }}>
                    <input
                      type="text"
                      placeholder="Add class comment..."
                      className="flex-1 px-3 py-2 rounded-xl text-sm outline-none transition-all focus:ring-2"
                      style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--color-primary)', borderColor: 'var(--border-light)' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- MAIN CONTENT RENDERER ---
  const renderMainContent = () => {
    switch(activeNav) {
      case 'Home':
        return <DashboardHome />;
      case 'Courses':
        return <CoursesView />;
      case 'Calendar':
        return <CalendarView />;
      case 'Tasks':
        return <TasksView />;
      case 'Settings':
        return <SettingsView />;
      case 'Subject':
        return <SubjectView />;
      default:
        return <DashboardHome />;
    }
  };

  // --- DASHBOARD HOME (original dashboard content) ---
  const DashboardHome = () => (
    <div className="p-4 md:p-6 lg:p-8 h-[calc(100vh-64px)] overflow-y-auto">
      {/* Welcome Header Greeting */}
      <div className="mb-6">
        <h2 className="font-bold text-xl sm:text-2xl tracking-tight mb-2 text-slate-800 dark:text-white" style={{ fontFamily: 'var(--font-family)' }}>
          {t.welcome}, {currentUser || 'User'}! 👋
        </h2>
        <p className="font-medium text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Here is what's happening with your courses today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ translateY: -2 }}
          transition={{ duration: 0.2 }}
          className="p-4 rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-200"
          style={{ background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)', borderColor: 'transparent' }}
        >
          <div className="flex items-center justify-between mb-2">
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
          className="p-4 rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-200"
          style={{ background: 'linear-gradient(135deg, #10b981, #059669)', borderColor: 'transparent' }}
        >
          <div className="flex items-center justify-between mb-2">
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
          className="p-4 rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-200"
          style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', borderColor: 'transparent' }}
        >
          <div className="flex items-center justify-between mb-2">
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
          className="p-4 rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-200"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', borderColor: 'transparent' }}
        >
          <div className="flex items-center justify-between mb-2">
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

      {/* Course Grid - Google Classroom Style */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-xl text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-family)' }}>
            {t.courses}
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">{filteredCourses.length} enrolled</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ translateY: -4, boxShadow: '0 20px 40px rgba(79, 70, 229, 0.15)' }}
              onClick={() => handleCourseClick(course)}
              className="group rounded-3xl overflow-hidden cursor-pointer border transition-all duration-200"
              style={{ minHeight: '240px', backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-light)' }}
            >
              {/* Google Classroom Style Banner Header */}
              <div 
                className={`relative h-24 ${course.color} p-4 flex flex-col justify-between`}
                style={{ 
                  backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)` 
                }}
              >
                {/* Top row - Code and Section */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-white text-xs font-semibold tracking-wide uppercase">
                      {course.code}
                    </span>
                    <span className="mx-2 text-slate-100">•</span>
                    <span className="text-white text-xs font-medium">
                      {course.section}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <BookOpen size={14} className="text-white" />
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-white font-bold text-base sm:text-lg md:text-xl leading-tight line-clamp-2 pr-4"
                    style={{ fontFamily: "'Arial', sans-serif", color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                  {course.title}
                </h3>
                
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/10"></div>
                
                {/* Professor Avatar Badge */}
                <div className="absolute bottom-0 right-3 translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-white dark:border-slate-800 shadow-md object-cover overflow-hidden bg-white">
                  <img 
                    src={getProfessorAvatar(course.professor)} 
                    alt={course.professor}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-4 flex flex-col gap-3">
                {/* Professor Info */}
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full ${course.color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                    {course.professor.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base font-medium truncate" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-family)' }}>
                      {course.professor}
                    </p>
                    <p className="text-xs sm:text-sm" style={{ color: 'var(--color-muted)' }}>{course.sched}</p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between items-center text-xs sm:text-sm mb-1.5">
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
                
                {/* Latest Announcement Preview */}
                <div className="rounded-xl p-2.5 border transition-all duration-200 hover:shadow-md" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-light)' }}>
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
                
                {/* Action Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(course.meetLink, '_blank');
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white rounded-xl text-sm font-semibold hover:shadow-lg active:scale-[0.98] transition-all duration-200"
                  style={{ fontFamily: 'var(--font-family)', background: 'var(--gradient-electric)' }}
                >
                  <Video size={16} />
                  Join Meet
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- DASHBOARD WRAPPER (with header) ---
  const Dashboard = () => (
    <div className="flex-1 overflow-auto">
      {/* Header */}
      <header className={`sticky top-0 z-30 border-b transition-all duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}
              style={{ borderColor: 'var(--border-light)' }}>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}
            >
              <Menu size={20} className={isDarkMode ? 'text-slate-100' : 'text-gray-900'} />
            </button>
            <div className="flex items-center gap-2">
              <img src="/PTCLOGO.webp" alt="PTC Logo" className="w-8 h-8 object-contain" />
              <h1 className={`font-bold uppercase tracking-wide text-[11px] sm:text-xs md:text-sm drop-shadow-sm ${isDarkMode ? 'text-white' : 'text-slate-950'}`} style={{ fontFamily: "'Arial', sans-serif" }}>
                PATEROS TECHNOLOGICAL COLLEGE
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className={`hidden md:flex items-center gap-2 px-3 py-2 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
              <Search size={16} className={isDarkMode ? 'text-slate-300' : 'text-gray-500'} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className={`bg-transparent outline-none text-sm w-48 ${isDarkMode ? 'text-slate-100 placeholder:text-slate-400' : 'text-gray-900 placeholder:text-gray-500'}`}
                style={{ fontFamily: 'var(--font-family)' }}
              />
            </div>
            
            {/* Notifications */}
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className={`relative p-2 rounded-lg ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-100'}`}
            >
              <Bell size={20} className={isDarkMode ? 'text-slate-100' : 'text-gray-900'} />
              {getUnreadCount() > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {getUnreadCount()}
                </span>
              )}
            </button>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg"
            >
              {isDarkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content - Render based on activeNav */}
      <main className="h-[calc(100vh-64px)] overflow-y-auto">
        {renderMainContent()}
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
  if (!isLoggedIn) {
    return <LoginScreen />;
  }

  return (
    <div className="flex h-screen overflow-hidden transition-colors duration-300" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--color-primary)', fontFamily: "'Arial', sans-serif" }}>
      <Sidebar />
      <Dashboard />
      <NotificationDropdown />
      <CourseModal />
      <FloatingChat />
    </div>
  );
};

export default App;
