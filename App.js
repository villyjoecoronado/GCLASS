import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { 
Send, User, MessageSquare, X, Moon, Sun, MoreVertical, Folder, Contact2, 
  Grid3X3, ArrowLeft, Video, Info, PlusCircle, MessageCircle, 
  Calendar as CalendarIcon, Home as HomeIcon, BookOpen, CheckCircle2, 
  AlertCircle, Archive, Settings as SettingsIcon, ClipboardList, Camera, Bell, Shield, Languages, HelpCircle,
  ChevronLeft, ChevronRight, Clock, MapPin, ExternalLink, Filter, Check, Globe, Lock, Eye, Zap, Database, 
  Trash2, RefreshCw, Smartphone, Monitor, LogOut, Search, Sparkles, Image as ImageIcon, ScanIcon, 
  Download, Share2, Paperclip, Smile, Mic, PaperclipIcon, FileText, PieChart, Activity, Layers, Cpu, HardDrive, 
  TrendingUp, BarChart3, Fingerprint, Key, MousePointer2, Briefcase, GraduationCap, Award, LifeBuoy,
  Image, Upload
} from 'lucide-react';

const socket = io('http://localhost:5000');

function App() {
// --- CORE AUTH & UI STATES ---
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(true); 
  const [currentUser, setCurrentUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState("dashboard"); 
  const [activeSubject, setActiveSubject] = useState(null);
  // --- ADDITIONAL SETTINGS STATES ---
  const [notifChannels, setNotifChannels] = useState({ academic: true, security: true, system: false, social: true });
  const [criticalAlerts, setCriticalAlerts] = useState(true);
  const [supportTicket, setSupportTicket] = useState(false);
  const [faqSearch, setFaqSearch] = useState("");
  const [aiDiagnostic, setAiDiagnostic] = useState(false);

  // --- SETTINGS CHAIN REACTION STATES ---
  const [isRequestChangeActive, setIsRequestChangeActive] = useState(false);
  const [changeType, setChangeType] = useState(null);
  const [showMetadataAdvanced, setShowMetadataAdvanced] = useState(false);
  const [securityLevel, setSecurityLevel] = useState("Standard");
  const [isKeyRotating, setIsKeyRotating] = useState(false);
  const [showSessionLogs, setShowSessionLogs] = useState(false);
  
  // --- CHAT & MESSAGING STATES ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeChatTab, setActiveChatTab] = useState("messages");

  // --- CALENDAR & TODO STATES ---
  const [todoTab, setTodoTab] = useState("assigned");
  const [selectedDate, setSelectedDate] = useState(6); 
  const [calendarMonth, setCalendarMonth] = useState("April 2026");
  const [isAddingTask, setIsAddingTask] = useState(false);

  // --- SETTINGS & INTERACTIVE STATES ---
  const [settingsTab, setSettingsTab] = useState("profile");
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showKillSessionsModal, setShowKillSessionsModal] = useState(false);
  const [storageUsage, setStorageUsage] = useState(65); 
  const [isSyncing, setIsSyncing] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [showPicOptions, setShowPicOptions] = useState(false);
  const [systemAlerts, setSystemAlerts] = useState(3);
  const fileInputRef = useRef(null);
  
  // --- NOTIFICATION STATES ---
  const [notifications, setNotifications] = useState([
    { id: 1, type: "announcement", title: "Welcome to EduPulse LMS", message: "System is now ready for academic year 2026", time: "2 hours ago", priority: "high", read: false },
    { id: 2, type: "assignment", title: "New Assignment Posted", message: "Chapter 2 Methodology - Capstone 1", time: "5 hours ago", priority: "medium", read: false },
    { id: 3, type: "grade", title: "Grade Posted", message: "Lab Exercise 5 graded - 96/50", time: "1 day ago", priority: "low", read: true }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  // --- ASSIGNMENT STATES ---
  const [assignments, setAssignments] = useState([
    { id: 1, subjectId: "CAP1", title: "Chapter 2 Methodology", type: "Research Paper", dueDate: "April 8, 2026", status: "pending", points: 100, submitted: false },
    { id: 2, subjectId: "WS102", title: "React Portfolio Project", type: "Project", dueDate: "April 10, 2026", status: "pending", points: 150, submitted: false },
    { id: 3, subjectId: "SIA101", title: "Lab Exercise 5", type: "Hands-on", dueDate: "April 7, 2026", status: "submitted", points: 50, submitted: true, grade: 96 },
    { id: 4, subjectId: "TECH32", title: "Business Model Canvas", type: "Presentation", dueDate: "April 6, 2026", status: "graded", points: 100, submitted: true, grade: 92 }
  ]);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  // --- ACADEMIC PROGRESS & ANALYTICS ---
  const [gpa, setGpa] = useState(1.25);
  const [attendance, setAttendance] = useState(98);
  const [totalCredits, setTotalCredits] = useState(124);
  const [completedUnits, setCompletedUnits] = useState(86);

  // STUDENT INFO
  const studentID = "2022-5089";
  const currentYear = "3rd Year";
  const department = "College of Information and Computing Sciences";

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

  // --- DATA ARRAYS ---
 const subjects = [
    { id: 1, name: "SP 101- Social Issues and Professional Practices", instructor: "Cynthia B. Dulagan" },
    { id: 2, name: "Capstone 1", instructor: "Sheryl Ann Ricafort" },
    { id: 3, name: "SIA 101- System Integration and Architecture", instructor: "Toni D. Granado" },
    { id: 4, name: "TECH 32 - Technopreneurship", instructor: "Katherine C. Baggay" },
    { id: 5, name: "MRC 22- Methods of Research in Computing", instructor: "Toni D. Granado" },
    { id: 6, name: "WS 102 Web Programming", instructor: "Roclyn Yamson" },
    { id: 7, name: "ED 101- Embedded Systems/ Robotics", instructor: "Edmar Tan" },
    { id: 8, name: "NET 102- Network Administration and Maintenance", instructor: "Harvey Rey B. Del Rosario" }
  ];

  const languages = [
    "English (US)", "English (UK)", "Spanish", "French", "German", "Japanese", "Korean", "Mandarin", 
    "Filipino", "Italian", "Portuguese", "Russian", "Arabic", "Hindi", "Vietnamese", "Thai", 
    "Dutch", "Greek", "Turkish", "Indonesian", "Malay", "Bengali", "Hebrew", "Polish"
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

  const Notifications = [
    { id: 101, title: "Grade Posted", desc: "Prof. Ricafort posted Midterm for CAP1", time: "2h ago", icon: <Award size={14}/> },
    { id: 102, title: "Class Canceled", desc: "WS 102 Lab session tomorrow is moved", time: "5h ago", icon: <AlertCircle size={14}/> },
    { id: 103, title: "System Update", desc: "EduPulse core updated to v3.0 Stable", time: "1d ago", icon: <Cpu size={14}/> }
  ];

  // --- EFFECTS ---
  useEffect(() => {
    socket.on('receive_private_message', (data) => { setChatLog((prev) => [...prev, data]); });
    return () => socket.off();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showNotifications && !event.target.closest('.notification-dropdown')) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showNotifications]);

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

  const handleAssignmentFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleAssignmentSubmit = () => {
    if (selectedAssignment && uploadedFile) {
      setAssignments(assignments.map(assignment => 
        assignment.id === selectedAssignment.id 
          ? { ...assignment, submitted: true, status: "submitted" }
          : assignment
      ));
      setShowSubmitModal(false);
      setSelectedAssignment(null);
      setUploadedFile(null);
    }
  };

  const openSubmitModal = (assignment) => {
    setSelectedAssignment(assignment);
    setShowSubmitModal(true);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  // --- UI COMPONENTS ---
  const EmptyState = ({ type }) => (
    <div className="flex flex-col items-center justify-center p-20 text-center animate-in fade-in zoom-in duration-700">
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

  const StatCard = ({ icon: Icon, label, value, subValue, colorClass }) => (
    <div className={`p-6 rounded-[2.5rem] border ${darkMode ? 'bg-[#161616] border-[#222222]' : 'bg-white border-slate-200'} flex items-center gap-5 shadow-sm transition-transform hover:scale-[1.02]`}>
      <div className={`p-4 ${colorClass} rounded-[1.5rem] text-white shadow-lg`}><Icon size={24}/></div>
      <div className="text-left">
        <p className="text-[9px] font-black uppercase text-slate-500 leading-none mb-1.5 tracking-widest">{label}</p>
        <p className={`text-2xl font-black leading-none italic mb-1 ${colorClass.replace('bg-', 'text-')}`}>{value}</p>
        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tight">{subValue}</p>
      </div>
    </div>
  );

  // --- LOGIN STATES ---
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // --- LOGIN VALIDATION ---
  const handleLogin = () => {
    if (!email || !password) {
      setLoginError("Please enter both email and password");
      return;
    }
    
    if (!email.includes("@") || !email.includes(".")) {
      setLoginError("Please enter a valid email address");
      return;
    }
    
    if (password.length < 6) {
      setLoginError("Password must be at least 6 characters");
      return;
    }
    
    setIsLoading(true);
    setLoginError("");
    
    // Simulate API call
    setTimeout(() => {
      // Mock validation - accept any valid email/password combo
      setIsLoggedIn(true);
      setCurrentUser(email);
      setIsLoading(false);
    }, 1500);
  };

  const handleForgotPassword = () => {
    const email = prompt("Enter your email address for password reset:");
    if (email && email.includes("@")) {
      alert(`Password reset link sent to ${email}`);
    }
  };

  const handleNewStudent = () => {
    alert("Please contact the registrar's office for new student enrollment.");
  };

  // --- AUTH PAGE ---
  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-6 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-[#f0f2f5]'}`}>
        <div className={`w-full max-w-md p-12 rounded-[3rem] border shadow-[0_40px_100px_rgba(0,0,0,0.4)] animate-in fade-in zoom-in-95 duration-1000 ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200'} text-center relative overflow-hidden`}>
          <div className="absolute top-0 right-0 p-10 opacity-5 -rotate-12"><Cpu size={200}/></div>
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-emerald-500 rounded-[2rem] rotate-12 flex items-center justify-center shadow-2xl shadow-emerald-500/20">
              <Zap size={40} className="text-white -rotate-12 animate-pulse"/>
            </div>
          </div>
          <h1 className="text-4xl font-black italic text-emerald-500 mb-2 tracking-tighter uppercase">EduPulse</h1>
          <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.4em] mb-10">Synchronized Academic OS</p>
          
          {loginError && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
              <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">{loginError}</p>
            </div>
          )}
          
          <div className="space-y-5 text-left relative z-10">
            <div>
               <label className="text-[10px] font-black uppercase text-slate-500 ml-4 mb-2 block tracking-widest">Student Email</label>
               <input 
                 type="email" 
                 placeholder="student@university.edu" 
                 value={email} 
                 onChange={(e) => {
                   setEmail(e.target.value);
                   setLoginError("");
                 }} 
                 className={`w-full border rounded-2xl px-6 py-4 text-sm outline-none transition-all focus:ring-4 focus:ring-emerald-500/10 ${darkMode ? 'bg-[#1a1a1a] border-[#2a2a2a] text-white' : 'bg-slate-50 border-slate-200'} ${loginError && !email ? 'border-red-500' : ''}`}
               />
            </div>
            <div>
               <label className="text-[10px] font-black uppercase text-slate-500 ml-4 mb-2 block tracking-widest">System Password</label>
               <input 
                 type="password" 
                 placeholder="Enter your password" 
                 value={password} 
                 onChange={(e) => {
                   setPassword(e.target.value);
                   setLoginError("");
                 }} 
                 className={`w-full border rounded-2xl px-6 py-4 text-sm outline-none transition-all focus:ring-4 focus:ring-emerald-500/10 ${darkMode ? 'bg-[#1a1a1a] border-[#2a2a2a] text-white' : 'bg-slate-50 border-slate-200'} ${loginError && !password ? 'border-red-500' : ''}`}
               />
            </div>
            <button 
              onClick={handleLogin} 
              disabled={isLoading}
              className={`w-full font-black py-5 rounded-2xl transition-all uppercase text-[11px] tracking-[0.2em] shadow-2xl active:scale-95 mt-4 ${
                isLoading 
                  ? 'bg-slate-600 text-white cursor-not-allowed' 
                  : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-emerald-900/30'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Authenticating...
                </span>
              ) : (
                'Access Dashboard'
              )}
            </button>
            <div className="pt-4 flex justify-between px-2">
               <span onClick={handleForgotPassword} className="text-[9px] font-black text-slate-500 uppercase cursor-pointer hover:text-emerald-500 transition-colors">Forgot Password?</span>
               <span onClick={handleNewStudent} className="text-[9px] font-black text-emerald-500 uppercase cursor-pointer hover:underline">New Student?</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN APP ---
  return (
    <div className={`min-h-screen flex flex-col transition-all duration-700 selection:bg-emerald-500 selection:text-white ${darkMode ? 'bg-[#0a0a0a] text-[#d1d1d1]' : 'bg-[#f8f9fa] text-slate-900'}`}>
      
      {/* NAVBAR */}
      <nav className={`px-10 py-4 flex justify-between items-center border-b sticky top-0 z-[100] transition-colors ${darkMode ? 'bg-[#0f0f0f]/80 border-[#1f1f1f]' : 'bg-white/80 border-slate-200 shadow-sm'} backdrop-blur-2xl`}>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => { setView("dashboard"); setActiveSubject(null); }}>
            <div className="p-2 bg-emerald-500 rounded-xl group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-emerald-500/20"><Grid3X3 size={20} className="text-white"/></div>
            <h1 className="font-black italic text-emerald-500 text-2xl tracking-tighter">EduPulse</h1>
          </div>
          <div className="hidden lg:flex items-center gap-2 bg-emerald-500/5 px-5 py-2 rounded-full border border-emerald-500/10">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></div>
             <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-500">{t("status")}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="relative group cursor-pointer hidden sm:block" onClick={toggleNotifications}>
             <Bell size={20} className="text-slate-500 group-hover:text-emerald-500 transition-colors"/>
             {notifications.filter(n => !n.read).length > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[8px] font-black flex items-center justify-center rounded-full border-2 border-[#0f0f0f]">{notifications.filter(n => !n.read).length}</span>}
             
             {/* Notification Dropdown */}
             {showNotifications && (
               <div className={`notification-dropdown absolute top-12 right-0 w-80 rounded-2xl border shadow-2xl z-50 ${darkMode ? 'bg-[#1a1a1a] border-[#2a2a2a]' : 'bg-white border-slate-200'}`}>
                 <div className="p-4 border-b border-slate-500/10">
                    <h3 className="text-sm font-black uppercase tracking-tighter">Notifications</h3>
                 </div>
                 <div className="max-h-96 overflow-y-auto">
                    {notifications.map(notif => (
                       <div key={notif.id} className={`p-4 border-b border-slate-500/5 hover:bg-emerald-500/5 transition-all cursor-pointer ${!notif.read ? 'bg-emerald-500/5' : ''}`}
                            onClick={() => setNotifications(notifications.map(n => n.id === notif.id ? {...n, read: true} : n))}>
                          <div className="flex items-start gap-3">
                             <div className={`w-2 h-2 rounded-full mt-1.5 ${notif.priority === 'high' ? 'bg-red-500' : notif.priority === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'}`}></div>
                             <div className="flex-1">
                                <p className="text-xs font-black uppercase tracking-tight">{notif.title}</p>
                                <p className="text-[10px] text-slate-500">{notif.message}</p>
                                <p className="text-[8px] text-slate-600">{notif.time}</p>
                             </div>
                          </div>
                       </div>
                    ))}
                 </div>
               </div>
             )}
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className={`p-3 rounded-2xl transition-all active:scale-90 ${darkMode ? 'bg-yellow-500/10 text-yellow-500' : 'bg-blue-500/10 text-blue-500'}`}>{darkMode ? <Sun size={20}/> : <Moon size={20}/>}</button>
          
          <div className="flex items-center gap-4 border-l border-slate-500/10 pl-8">
             <div className="text-right hidden md:block">
              
                <p className="text-[11px] font-black uppercase text-emerald-500 tracking-tighter leading-none mb-1">{currentUser.split('@')[0] || "User_Access"}</p>
                <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none">{studentID}</p>
             </div>
             <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20 overflow-hidden shadow-2xl transition-transform hover:rotate-6 cursor-pointer">
                {profilePic ? <img src={profilePic} className="w-full h-full object-cover" /> : <User size={22}/>}
             </div>
          </div>
          <button onClick={() => setIsLoggedIn(false)} className="hidden xl:block text-[10px] font-black text-red-500/70 hover:text-red-500 uppercase tracking-widest transition-colors">{t("signout")}</button>
        </div>
      </nav>

      <div className="flex flex-1 max-w-[1440px] mx-auto gap-6 p-6 min-h-screen">
        {/* SIDEBAR NAVIGATION */}
        <aside className={`w-52 border-r hidden xl:flex flex-col p-4 overflow-y-auto transition-colors z-40 ${darkMode ? 'bg-[#0f0f0f] border-[#1f1f1f]' : 'bg-[#f1f3f5] border-slate-200'}`}>
          <div className="space-y-2 text-left">
              {[
                { id: 'dashboard', name: t("navHome"), icon: <HomeIcon size={14}/> },
                { id: 'calendar', name: t("navCal"), icon: <CalendarIcon size={14}/> },
                { id: 'todo', name: t("navTodo"), icon: <ClipboardList size={14}/> },
                { id: 'archived', name: t("navArc"), icon: <Archive size={14}/> },
                { id: 'settings', name: t("navSet"), icon: <SettingsIcon size={14}/> },
              ].map(item => (
                <div key={item.id} onClick={() => { setView(item.id); setActiveSubject(null); }} className={`px-2 py-2 rounded-lg text-xs font-black uppercase tracking-widest cursor-pointer flex items-center gap-2 transition-all ${view === item.id ? 'bg-emerald-600 text-white shadow-lg' : (darkMode ? 'text-slate-400 hover:bg-white/5' : 'text-slate-600 hover:bg-white shadow-sm')}`}>
                  {item.icon} <span className="truncate">{item.name}</span>
                </div>
              ))}
          </div>
          <div className="space-y-1">
              {subjects.map(sub => (
                <div key={sub.id} onClick={() => handleSubjectClick(sub)} className={`group px-2 py-1.5 text-xs font-black uppercase tracking-tight cursor-pointer truncate rounded-lg transition-all flex items-center gap-2 ${activeSubject?.id === sub.id ? 'bg-emerald-600 text-white shadow-lg' : (darkMode ? 'hover:bg-white/5 text-slate-400' : 'hover:bg-white text-slate-600 shadow-sm')}`}>
                  <div className={`w-1.5 h-1.5 rounded-full border ${activeSubject?.id === sub.id ? 'bg-white border-white' : 'bg-emerald-500 border-transparent'}`}></div>
                  <div className="flex-1 truncate">{sub.name.split(' ')[0]}</div>
                  <ChevronRight size={10} className={`opacity-0 group-hover:opacity-100 transition-opacity ${activeSubject?.id === sub.id ? 'opacity-100' : ''}`}/>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-slate-500/10 space-y-1 text-left">
              <div onClick={() => setView("todo")} className={`px-2 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest cursor-pointer flex items-center gap-2 transition-all ${view === 'todo' ? 'bg-emerald-600 text-white shadow-lg' : (darkMode ? 'hover:bg-white/5 text-slate-400' : 'hover:bg-white text-slate-600 shadow-sm')}`}>
                <ClipboardList size={12} className="text-emerald-500"/>
                <span>{t("navTodo")}</span>
              </div>
              <div onClick={() => setView("calendar")} className={`px-2 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest cursor-pointer flex items-center gap-2 transition-all ${view === 'calendar' ? 'bg-emerald-600 text-white shadow-lg' : (darkMode ? 'hover:bg-white/5 text-slate-400' : 'hover:bg-white text-slate-600 shadow-sm')}`}>
                <CalendarIcon size={12} className="text-emerald-500"/>
                <span>{t("navCal")}</span>
              </div>
          </div>
        </aside>
        

        {/* MAIN DISPLAY AREA */}
        <main className="flex-1 overflow-y-auto bg-transparent relative custom-scrollbar">
          
          {/* VIEW: DASHBOARD */}
          {view === "dashboard" && (
            <div className="p-4 space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-1000">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-3">
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-1">
                     <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[8px] font-black uppercase rounded-lg border border-emerald-500/20">{department}</span>
                     <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em]">{currentYear}</span>
                  </div>
                  <h1 className="text-xl font-black italic text-emerald-500 tracking-tighter mb-1">{t("welcome")}, {currentUser.split('@')[0] || "Student"}</h1>
                  <p className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.3em]">Academic Dashboard Overview</p>
                </div>
                <div className="flex gap-2">
                  <button className={`px-3 py-1.5 rounded-lg font-black text-xs uppercase tracking-widest transition-all ${darkMode ? 'bg-[#1a1a1a] border-[#2a2a2a] text-slate-400 hover:bg-[#252525]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                    <Filter size={12}/> Filter
                  </button>
                  <button className={`px-3 py-1.5 rounded-lg font-black text-xs uppercase tracking-widest transition-all ${darkMode ? 'bg-[#1a1a1a] border-[#2a2a2a] text-slate-400 hover:bg-[#252525]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                    <Search size={12}/> Search
                  </button>
                </div>
              </div>

              {/* RECENT NOTIFICATIONS & SYSTEM ANALYTICS */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className={`col-span-2 p-4 rounded-xl border text-left ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200'}`}>
                     <div className="flex justify-between items-center mb-3">
                        <h3 className="text-base font-black uppercase italic tracking-tighter text-emerald-500">Live Class Activity</h3>
                        <div className="flex gap-1">
                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                           <span className="text-[7px] font-black text-emerald-500 uppercase">Live</span>
                        </div>
                     </div>
                     <div className="space-y-2">
                        {notifications.map(notif => (
                           <div key={notif.id} className={`p-3 rounded-lg border flex items-center justify-between transition-all hover:translate-x-1 ${darkMode ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-slate-50 border-slate-100'}`}>
                              <div className="flex items-center gap-3">
                                 <div className="p-2 bg-emerald-500 rounded-lg text-white shadow-lg shadow-emerald-500/20">{notif.icon}</div>
                                 <div>
                                    <p className="text-[9px] font-black uppercase tracking-tight leading-none mb-1">{notif.title}</p>
                                    <p className="text-[8px] font-bold text-slate-500 uppercase">{notif.desc}</p>
                                 </div>
                              </div>
                              <div className="text-right">
                                 <p className="text-[7px] font-black text-slate-500">{notif.time}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className={`p-3 rounded-lg border text-left flex flex-col justify-between ${darkMode ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-emerald-500 text-white border-emerald-400'}`}>
                     <div className="space-y-2">
                        <div className="p-2 bg-white/20 rounded-lg w-fit mb-3 shadow-xl"><TrendingUp size={20}/></div>
                        <h3 className="text-base font-black uppercase italic tracking-tighter leading-tight mb-1">Academic Performance</h3>
                        <p className="text-[9px] font-bold opacity-80 leading-relaxed uppercase">You're surpassing 92% of students.</p>
                     </div>
                     <button className="mt-4 py-2 bg-white text-emerald-600 rounded-lg font-black uppercase text-[8px] tracking-[0.2em] shadow-lg hover:scale-[1.02] transition-all">View Transcript</button>
                  </div>
              </div>
            </div>
          )}

          {/* VIEW: CLASS STREAM MODULE */}
          {view === "stream" && activeSubject && (
            <div className="animate-in slide-in-from-right-12 duration-700">
              <div className={`h-80 p-16 flex flex-col justify-end text-left relative overflow-hidden ${activeSubject.color}`}>
                 <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12 scale-[2]"><Layers size={200}/></div>
                 <div className="absolute top-12 left-12 flex gap-4">
                    <button onClick={() => setView("dashboard")} className="p-4 rounded-[1.5rem] bg-black/20 text-white hover:bg-black/40 transition-all backdrop-blur-md border border-white/10"><ArrowLeft size={24}/></button>
                    <div className="p-4 px-6 rounded-[1.5rem] bg-black/20 text-white backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                       <Shield size={16} className="text-emerald-400"/> Authenticated Section
                    </div>
                 </div>
                 <h2 className="text-6xl font-black italic uppercase tracking-tighter text-white mb-2 drop-shadow-2xl">{activeSubject.title}</h2>
                 <div className="flex items-center gap-6">
                    <p className="text-white font-black text-sm uppercase tracking-[0.4em] opacity-90">{activeSubject.code} • Prof. {activeSubject.prof}</p>
                    <div className="h-6 w-px bg-white/20"></div>
                    <p className="text-white font-black text-[10px] uppercase tracking-widest opacity-70 italic">{activeSubject.room} • {activeSubject.sched}</p>
                 </div>
              </div>

              <div className="max-w-7xl mx-auto p-12 grid grid-cols-12 gap-10">
                 <div className="col-span-12 lg:col-span-4 space-y-6">
                    <div className={`p-8 rounded-[3rem] border text-left ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200 shadow-xl'}`}>
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
                        <button className={`w-full py-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all ${darkMode ? 'border-white/10 hover:bg-white/5' : 'border-slate-200 hover:bg-slate-50'}`}>Contact Instructor</button>
                    </div>
                 </div>

                 <div className="col-span-12 lg:col-span-8 space-y-8">
                    <div className={`p-8 rounded-[3rem] border flex items-center gap-6 shadow-2xl ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200'}`}>
                       <div className="w-14 h-14 rounded-[1.5rem] bg-emerald-500/10 flex items-center justify-center text-emerald-500 shadow-inner"><User size={24}/></div>
                       <input type="text" placeholder="Share something with your classmates..." className="flex-1 bg-transparent outline-none text-base font-bold placeholder:text-slate-500/50"/>
                       <div className="flex items-center gap-2">
                          <button className="p-4 rounded-2xl hover:bg-slate-500/10 transition-all text-slate-500"><PaperclipIcon size={20}/></button>
                          <button className="p-4 bg-emerald-500 rounded-2xl text-white shadow-xl shadow-emerald-500/20 hover:scale-105 transition-all"><Send size={22}/></button>
                       </div>
                    </div>
                    
                    {/* Announcement Feed */}
                    <div className={`p-10 rounded-[3rem] border text-left relative overflow-hidden ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200 shadow-xl'}`}>
                       <div className="absolute top-0 right-0 p-8 opacity-5"><MessageSquare size={100}/></div>
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
            <div className="max-w-7xl mx-auto p-12 animate-in fade-in zoom-in-95 duration-1000">
              <SectionHeader icon={CalendarIcon} title={t("navCal")} subtitle="Synchronized Academic Schedule 2026" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4 space-y-8">
                  <div className={`p-10 rounded-[3rem] border ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200 shadow-2xl'}`}>
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

                  <div className={`p-10 rounded-[3rem] border text-left ${darkMode ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
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
                        <div className={`p-16 rounded-[3rem] border-2 border-dashed flex flex-col items-center justify-center opacity-50 ${darkMode ? 'border-[#222222] bg-[#0f0f0f]' : 'border-slate-200 bg-slate-50'}`}>
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
             <div className="p-12 max-w-5xl mx-auto animate-in slide-in-from-bottom-10 duration-700">
                <SectionHeader icon={ClipboardList} title={t("navTodo")} subtitle="Task Management Matrix" />
                <div className="flex gap-8 mb-12 border-b border-slate-500/10">
                   {['assigned', 'missing', 'done'].map(tab => (
                      <button key={tab} onClick={() => setTodoTab(tab)} className={`pb-5 text-[11px] font-black uppercase tracking-[0.2em] px-4 transition-all relative ${todoTab === tab ? 'text-emerald-500' : 'text-slate-500 hover:text-emerald-400'}`}>
                         {tab}
                         {todoTab === tab && <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></span>}
                      </button>
                   ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className={`p-10 rounded-[3rem] border border-dashed flex flex-col items-center justify-center ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-slate-50 border-slate-200'}`}>
                      <div className="p-6 bg-emerald-500/10 rounded-full text-emerald-500 mb-6"><PlusCircle size={32}/></div>
                      <p className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-6 italic">Add Private Task</p>
                      <button className="px-8 py-3 bg-emerald-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl">Create New</button>
                   </div>
                   <div className="flex flex-col items-center justify-center p-10 opacity-30">
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

                  {/* SUBJECTS LIST SECTION */}
                  <div className="space-y-8 animate-in slide-in-from-bottom-6">
                    <div className={`p-10 rounded-[3rem] border ${darkMode ? 'bg-[#121212] border-[#222222]' : 'bg-white border-slate-200 shadow-xl'}`}>
                      <div className="flex items-center gap-6 mb-10">
                        <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-[1.5rem] shadow-inner"><BookOpen size={32}/></div>
                        <div>
                          <p className="text-lg font-black uppercase tracking-tighter italic mb-1">Current Subjects</p>
                          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">3rd Year - College of Information and Computing Sciences</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {subjects.map(sub => (
                          <div key={sub.id} className={`p-6 rounded-[2rem] border transition-all hover:scale-[1.02] cursor-pointer group ${darkMode ? 'bg-white/5 border-white/10 hover:bg-emerald-500/5 hover:border-emerald-500/20' : 'bg-slate-50 border-slate-100 hover:bg-white'}`}
                               onClick={() => handleSubjectClick(sub)}>
                            <div className="flex items-start gap-4">
                              <div className={`w-3 h-3 rounded-full ${sub.color} shadow-lg mt-1`}></div>
                              <div className="flex-1">
                                <p className="text-sm font-black uppercase tracking-tighter mb-1 group-hover:text-emerald-500 transition-colors">{sub.code}</p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">{sub.title}</p>
                                <div className="flex items-center gap-3 text-[9px] font-bold text-slate-600 uppercase">
                                  <span className="flex items-center gap-1">
                                    <User size={12}/> {sub.prof}
                                  </span>
                                  <span>•</span>
                                  <span className="flex items-center gap-1">
                                    <MapPin size={12}/> {sub.room}
                                  </span>
                                </div>
                                <div className="mt-3 flex items-center gap-2">
                                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <div className={`h-full ${sub.color} rounded-full transition-all`} style={{ width: `${sub.progress}%` }}></div>
                                  </div>
                                  <span className="text-[8px] font-bold text-slate-500 uppercase">{sub.progress}%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

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

        {/* FLOATING SYSTEM CHAT (FULL DYNAMIC) */}
        <div className={`fixed bottom-10 right-10 z-[150] transition-all duration-700 transform ${isChatOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'}`}>
           <div className={`w-[450px] h-[650px] rounded-[3.5rem] border shadow-[0_50px_100px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden ${darkMode ? 'bg-[#121212] border-[#252525]' : 'bg-white border-slate-200'}`}>
              <div className="p-8 bg-emerald-600 text-white flex justify-between items-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12"><MessageCircle size={150}/></div>
                 <div className="flex items-center gap-5 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md shadow-inner"><MessageCircle size={24}/></div>
                    <div className="text-left">
                       <p className="text-[12px] font-black uppercase tracking-[0.2em] leading-none mb-1.5 italic">Communication Hub</p>
                       <p className="text-[10px] font-bold opacity-80 uppercase leading-none italic">{activeSubject?.prof || "Global Network"}</p>
                    </div>
                 </div>
                 <button onClick={() => setIsChatOpen(false)} className="p-3 hover:bg-white/20 rounded-2xl transition-all relative z-10"><X size={24}/></button>
              </div>
              <div className="p-4 flex gap-2 border-b border-white/5">
                 <div className="flex gap-2">
                 <button onClick={() => setActiveChatTab("stream")} className={`flex-1 py-3 text-[9px] font-black uppercase tracking-widest rounded-xl transition-all ${activeChatTab === 'stream' ? 'bg-emerald-500/10 text-emerald-500' : 'text-slate-500'}`}>Stream</button>
                 <button onClick={() => setActiveChatTab("classwork")} className={`flex-1 py-3 text-[9px] font-black uppercase tracking-widest rounded-xl transition-all ${activeChatTab === 'classwork' ? 'bg-emerald-500/10 text-emerald-500' : 'text-slate-500'}`}>Classwork</button>
                 <button onClick={() => setActiveChatTab("people")} className={`flex-1 py-3 text-[9px] font-black uppercase tracking-widest rounded-xl transition-all ${activeChatTab === 'people' ? 'bg-emerald-500/10 text-emerald-500' : 'text-slate-500'}`}>People</button>
                 <button onClick={() => setActiveChatTab("grades")} className={`flex-1 py-3 text-[9px] font-black uppercase tracking-widest rounded-xl transition-all ${activeChatTab === 'grades' ? 'bg-emerald-500/10 text-emerald-500' : 'text-slate-500'}`}>Grades</button>
                 <button onClick={() => setActiveChatTab("assignments")} className={`flex-1 py-3 text-[9px] font-black uppercase tracking-widest rounded-xl transition-all ${activeChatTab === 'assignments' ? 'bg-emerald-500/10 text-emerald-500' : 'text-slate-500'}`}>Assignments</button>
              </div>
              </div>
              <div className="flex-1 p-8 overflow-y-auto space-y-6 custom-scrollbar bg-transparent">
                 <div className="text-center p-6 mb-4">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 bg-slate-500/5 px-6 py-2.5 rounded-full border border-white/5 italic">AES-256 E2E Encrypted Session</span>
                 </div>
                 {chatLog.length > 0 ? chatLog.map((msg, i) => (
                    <div key={i} className={`flex flex-col ${msg.sender === currentUser ? 'items-end' : 'items-start'} animate-in slide-in-from-bottom-2`}>
                       <div className={`max-w-[85%] p-5 rounded-[1.8rem] text-sm font-bold leading-relaxed shadow-lg ${msg.sender === currentUser ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-slate-800 text-[#d1d1d1] rounded-tl-none border border-white/5'}`}>
                          {msg.text}
                       </div>
                       <div className="flex items-center gap-2 mt-2 px-1">
                          <span className="text-[9px] font-black uppercase text-slate-500 tracking-tighter opacity-50">{msg.timestamp}</span>
                          {msg.sender === currentUser && <CheckCircle2 size={10} className="text-emerald-500"/>}
                       </div>
                    </div>
                 )) : activeChatTab === 'assignments' ? (
                    <div className="space-y-4">
                       <div className="text-center p-4 mb-4">
                          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-500 bg-emerald-500/5 px-6 py-2.5 rounded-full border border-emerald-500/20 italic">Assignment Center</span>
                       </div>
                       {assignments.filter(assignment => subjects.find(sub => sub.id === assignment.subjectId)).map(assignment => {
                         const subject = subjects.find(sub => sub.id === assignment.subjectId);
                         return (
                           <div key={assignment.id} className={`p-6 rounded-[2rem] border transition-all hover:scale-[1.01] ${darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
                             <div className="flex justify-between items-start mb-4">
                               <div className="flex-1">
                                 <div className="flex items-center gap-3 mb-2">
                                   <span className="px-3 py-1 bg-emerald-600 text-white text-[8px] font-black uppercase rounded-lg">{subject.name.split(' ')[0]}</span>
                                   <span className="px-3 py-1 bg-slate-600 text-white text-[8px] font-black uppercase rounded-lg">{assignment.type}</span>
                                 </div>
                                 <p className="text-sm font-black uppercase tracking-tighter mb-2">{assignment.title}</p>
                                 <div className="flex items-center gap-4 text-[9px] font-bold text-slate-500 uppercase">
                                   <span className="flex items-center gap-1">
                                     <Clock size={12}/> Due: {assignment.dueDate}
                                   </span>
                                   <span>•</span>
                                   <span>{assignment.points} pts</span>
                                 </div>
                               </div>
                               <div className="text-right">
                                 <span className={`px-3 py-1 text-[8px] font-black uppercase rounded-lg ${
                                   assignment.status === 'graded' ? 'bg-emerald-600 text-white' :
                                   assignment.status === 'submitted' ? 'bg-blue-600 text-white' :
                                   'bg-red-600 text-white'
                                 }`}>
                                   {assignment.status}
                                 </span>
                               </div>
                             </div>
                             {assignment.grade && (
                               <div className="mt-3 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                                 <p className="text-[10px] font-black text-emerald-500 uppercase">Grade: {assignment.grade}/{assignment.points}</p>
                               </div>
                             )}
                             {!assignment.submitted && (
                               <button 
                                 onClick={() => openSubmitModal(assignment)}
                                 className="mt-4 w-full py-3 bg-emerald-600 text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-emerald-500 transition-all"
                               >
                                 Submit Assignment
                               </button>
                             )}
                           </div>
                         );
                       })}
                    </div>
                 ) : activeChatTab === 'classwork' ? (
                    <div className="space-y-6">
                       <div className="text-center p-4 mb-4">
                          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-500 bg-blue-500/5 px-6 py-2.5 rounded-full border border-blue-500/20 italic">Class Materials</span>
                       </div>
                       <div className="grid grid-cols-1 gap-4">
                          <div className={`p-6 rounded-[2rem] border transition-all hover:scale-[1.01] cursor-pointer ${darkMode ? 'bg-white/5 border-white/10 hover:bg-blue-500/5' : 'bg-slate-50 border-slate-100 hover:bg-blue-50'}`}>
                             <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                                   <FileText size={20}/>
                                </div>
                                <div className="flex-1">
                                   <p className="text-sm font-black uppercase tracking-tighter">Course Syllabus</p>
                                   <p className="text-[9px] font-bold text-slate-500 uppercase">PDF • 2.4 MB</p>
                                </div>
                                <Download size={16} className="text-blue-500"/>
                             </div>
                          </div>
                          <div className={`p-6 rounded-[2rem] border transition-all hover:scale-[1.01] cursor-pointer ${darkMode ? 'bg-white/5 border-white/10 hover:bg-blue-500/5' : 'bg-slate-50 border-slate-100 hover:bg-blue-50'}`}>
                             <div className="flex items-center gap-4">
                                <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
                                   <ImageIcon size={20}/>
                                </div>
                                <div className="flex-1">
                                   <p className="text-sm font-black uppercase tracking-tighter">Reading Resources</p>
                                   <p className="text-[9px] font-bold text-slate-500 uppercase">ZIP • 15.7 MB</p>
                                </div>
                                <Download size={16} className="text-emerald-500"/>
                             </div>
                          </div>
                       </div>
                    </div>
                 ) : activeChatTab === 'people' ? (
                    <div className="space-y-6">
                       <div className="text-center p-4 mb-4">
                          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-purple-500 bg-purple-500/5 px-6 py-2.5 rounded-full border border-purple-500/20 italic">Classmates</span>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          {['Juan Dela Cruz', 'Maria Santos', 'Jose Reyes', 'Ana Lopez'].map((name, i) => (
                             <div key={i} className={`p-4 rounded-xl border transition-all hover:scale-[1.02] ${darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
                                <div className="flex items-center gap-3">
                                   <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 font-black text-sm">
                                      {name.split(' ').map(n => n[0]).join('')}
                                   </div>
                                   <div className="flex-1">
                                      <p className="text-[10px] font-black uppercase tracking-tighter">{name}</p>
                                      <p className="text-[8px] font-bold text-slate-500 uppercase">Student</p>
                                   </div>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                 ) : activeChatTab === 'grades' ? (
                    <div className="space-y-6">
                       <div className="text-center p-4 mb-4">
                          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-yellow-500 bg-yellow-500/5 px-6 py-2.5 rounded-full border border-yellow-500/20 italic">Academic Performance</span>
                       </div>
                       <div className={`p-6 rounded-[2rem] border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-100'}`}>
                          <div className="text-center mb-6">
                             <p className="text-3xl font-black text-yellow-500">1.25</p>
                             <p className="text-[10px] font-black text-slate-500 uppercase">Current GPA</p>
                          </div>
                          <div className="space-y-3">
                             {assignments.filter(a => a.grade).map(assignment => {
                               const subject = subjects.find(sub => sub.id === assignment.subjectId);
                               return (
                                 <div key={assignment.id} className="flex justify-between items-center p-3 bg-slate-800/30 rounded-lg">
                                   <div>
                                      <p className="text-[10px] font-black uppercase">{assignment.title}</p>
                                      <p className="text-[8px] font-bold text-slate-500">{subject.name.split(' ')[0]}</p>
                                   </div>
                                   <div className="text-right">
                                      <p className="text-lg font-black text-yellow-500">{assignment.grade}</p>
                                      <p className="text-[8px] font-bold text-slate-500">/{assignment.points}</p>
                                   </div>
                                 </div>
                               );
                             })}
                          </div>
                       </div>
                    </div>
                 ) : (
                    <div className="h-full flex flex-col items-center justify-center opacity-20 text-center space-y-4">
                       <Mic size={60} className="text-slate-500"/>
                       <p className="text-[10px] font-black uppercase tracking-widest">No active transmission logs</p>
                    </div>
                 )}
              </div>
              <div className="p-8 border-t border-slate-500/10 bg-transparent flex flex-col gap-4">
                 <div className="flex gap-4">
                    <div className="flex-1 relative">
                       <input 
                          value={message} 
                          onChange={(e) => setMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                          type="text" 
                          placeholder="Type secure transmission..." 
                          className={`w-full border rounded-[1.8rem] px-8 py-5 text-sm font-bold outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all ${darkMode ? 'bg-white/5 border-white/5 text-white' : 'bg-slate-50 border-slate-200'}`}
                       />
                       <div className="absolute right-4 top-4 flex gap-2">
                          <button className="p-1 text-slate-500 hover:text-emerald-500 transition-colors"><Smile size={20}/></button>
                       </div>
                    </div>
                    <button onClick={sendMessage} className="p-5 bg-emerald-600 rounded-[1.8rem] text-white shadow-2xl shadow-emerald-500/30 hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all"><Send size={24}/></button>
                 </div>
                 <div className="flex justify-center gap-6">
                    <button className="text-[9px] font-black uppercase text-slate-500 hover:text-emerald-500 flex items-center gap-2"><Paperclip size={14}/> Attach Doc</button>
                    <button className="text-[9px] font-black uppercase text-slate-500 hover:text-emerald-500 flex items-center gap-2"><Mic size={14}/> Voice Note</button>
                    <button className="text-[9px] font-black uppercase text-slate-500 hover:text-emerald-500 flex items-center gap-2"><ImageIcon size={14}/> Capture</button>
                 </div>
              </div>
           </div>
        </div>

        {/* CHAT TOGGLE BUTTON */}
        {activeSubject && !isChatOpen && (
           <button onClick={() => setIsChatOpen(true)} className="fixed bottom-12 right-12 p-6 bg-emerald-600 text-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(16,185,129,0.4)] hover:scale-110 active:scale-90 transition-all z-[140] animate-bounce hover:rotate-6">
              <MessageCircle size={32}/>
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white text-[10px] font-black flex items-center justify-center rounded-full border-4 border-[#0a0a0a]">1</span>
           </button>
        )}
        </main>
      </div>

      {/* MODAL: PHOTO SOURCE HUB */}
      {showPicOptions && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[300] flex items-center justify-center p-6 animate-in fade-in duration-500">
           <div className={`w-full max-w-md rounded-[4rem] border shadow-[0_60px_120px_rgba(0,0,0,0.7)] overflow-hidden ${darkMode ? 'bg-[#121212] border-[#252525]' : 'bg-white border-slate-200'}`}>
              <div className="p-10 border-b border-slate-500/10 flex justify-between items-center bg-emerald-600 text-white relative">
                <div className="absolute top-0 right-0 p-10 opacity-10"><Camera size={100}/></div>
                <div className="text-left relative z-10">
                   <h3 className="text-2xl font-black uppercase tracking-tighter italic leading-none mb-1">{t("picSource")}</h3>
                   <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Update system biometric profile</p>
                </div>
                <button onClick={() => setShowPicOptions(false)} className="p-3 hover:bg-white/20 rounded-2xl transition-all relative z-10"><X size={32}/></button>
              </div>
              <div className="p-8 space-y-4">
                 <button onClick={() => fileInputRef.current.click()} className={`w-full flex items-center gap-8 p-8 rounded-[2.5rem] transition-all group ${darkMode ? 'bg-white/5 hover:bg-white/10 text-white border border-white/5' : 'bg-slate-50 hover:bg-slate-100 text-slate-800'}`}>
                   <div className="p-4 bg-emerald-500 rounded-[1.8rem] text-white shadow-2xl shadow-emerald-500/30 group-hover:rotate-12 transition-transform"><ImageIcon size={32}/></div>
                   <div className="text-left">
                      <p className="text-sm font-black uppercase tracking-widest">{t("gallery")}</p>
                      <p className="text-[9px] font-bold text-slate-500 uppercase">Upload from Local Drive</p>
                   </div>
                 </button>
                 <button onClick={() => { alert("Initializing Camera Hub..."); setShowPicOptions(false); }} className={`w-full flex items-center gap-8 p-8 rounded-[2.5rem] transition-all group ${darkMode ? 'bg-white/5 hover:bg-white/10 text-white border border-white/5' : 'bg-slate-50 hover:bg-slate-100 text-slate-800'}`}>
                   <div className="p-4 bg-blue-600 rounded-[1.8rem] text-white shadow-2xl shadow-blue-500/30 group-hover:rotate-12 transition-transform"><ScanIcon size={32}/></div>
                   <div className="text-left">
                      <p className="text-sm font-black uppercase tracking-widest">{t("camera")}</p>
                      <p className="text-[9px] font-bold text-slate-500 uppercase">Real-time Biometric Capture</p>
                   </div>
                 </button>
                 <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
              </div>
           </div>
        </div>
      )}

      {/* MODAL: MASSIVE GLOBAL LANGUAGES */}
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
               <div className="p-8 bg-black/10 border-t border-white/5 flex justify-center italic">
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Localization updates require system-wide handshake (3ms latency expected)</p>
               </div>
            </div>
        </div>
      )}

      {/* ASSIGNMENT SUBMISSION MODAL */}
      {showSubmitModal && selectedAssignment && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[300] flex items-center justify-center p-6 animate-in fade-in duration-500">
           <div className={`w-full max-w-lg rounded-[4rem] border shadow-[0_60px_120px_rgba(0,0,0,0.7)] overflow-hidden ${darkMode ? 'bg-[#121212] border-[#252525]' : 'bg-white border-slate-200'}`}>
              <div className="p-10 border-b border-slate-500/10 flex justify-between items-center bg-emerald-600 text-white relative">
                <div className="absolute top-0 right-0 p-10 opacity-10"><Upload size={100}/></div>
                <div className="text-left relative z-10">
                   <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-1">Submit Assignment</h3>
                   <p className="text-[10px] font-bold uppercase opacity-80 leading-none italic">{selectedAssignment.title}</p>
                </div>
                <button onClick={() => setShowSubmitModal(false)} className="p-3 hover:bg-white/20 rounded-2xl transition-all relative z-10"><X size={32}/></button>
              </div>
              <div className="p-8 space-y-6">
                 <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Assignment Details</p>
                    <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                       <div className="flex justify-between items-center mb-3">
                          <span className="text-sm font-black uppercase">{selectedAssignment.title}</span>
                          <span className="px-3 py-1 bg-red-600 text-white text-[8px] font-black uppercase rounded-lg">{selectedAssignment.points} pts</span>
                       </div>
                       <p className="text-[10px] font-bold text-slate-500 uppercase">Due: {selectedAssignment.dueDate}</p>
                    </div>
                 </div>
                 
                 <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Upload File</p>
                    <div className={`p-8 rounded-2xl border-2 border-dashed ${darkMode ? 'border-white/20 bg-white/5' : 'border-slate-300 bg-slate-50'} text-center`}>
                       <input 
                          type="file" 
                          onChange={handleAssignmentFileChange}
                          className="hidden"
                          id="assignment-file-input"
                        />
                       <label htmlFor="assignment-file-input" className="cursor-pointer">
                          {uploadedFile ? (
                             <div className="flex items-center gap-4">
                                <div className="p-3 bg-emerald-500 rounded-xl text-white">
                                   <FileText size={24}/>
                                </div>
                                <div className="text-left">
                                   <p className="text-sm font-black uppercase">{uploadedFile.name}</p>
                                   <p className="text-[10px] font-bold text-slate-500">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                             </div>
                          ) : (
                             <div className="space-y-4">
                                <div className="p-4 bg-emerald-500/10 rounded-full text-emerald-500 w-fit mx-auto">
                                   <Upload size={32}/>
                                </div>
                                <p className="text-[10px] font-black text-slate-500 uppercase">Click to upload or drag and drop</p>
                                <p className="text-[8px] font-bold text-slate-600">PDF, DOC, DOCX, PPT, PPTX (MAX 25MB)</p>
                             </div>
                          )}
                       </label>
                    </div>
                 </div>
                 
                 <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Comments (Optional)</p>
                    <textarea 
                       placeholder="Add any comments for your instructor..."
                       className={`w-full h-24 p-6 rounded-2xl text-xs font-bold uppercase tracking-widest outline-none border ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-800'}`}
                    />
                 </div>
              </div>
              <div className="p-8 border-t border-slate-500/10 flex gap-4">
                 <button onClick={() => setShowSubmitModal(false)} className="flex-1 py-4 bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10 hover:bg-white/10">
                    Cancel
                 </button>
                 <button 
                    onClick={handleAssignmentSubmit}
                    disabled={!uploadedFile}
                    className="flex-1 py-4 bg-emerald-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-2xl shadow-emerald-500/20 hover:bg-emerald-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                    Submit Assignment
                 </button>
              </div>
           </div>
        </div>
      )}
     
    </div>
  );
}

export default App;
