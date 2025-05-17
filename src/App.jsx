import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ChooseUser from './components/ChooseUser'
import AdminSignin from './components/AdminSignin'
import StudentSignin from './components/StudentSignin'
import TeacherSignin from './components/TeacherSignin'
import AdminDashboard from './pages/Admin/Dashboard'

import Announcement from './pages/Admin/Announcement'
import Assignment from './pages/Admin/Assignment'
import Attendance from './pages/Admin/Attendance'
import Classes from './pages/Admin/Classes'
import EventCalender from './pages/Admin/EventCalendar'
import Exam from './pages/Admin/Exam'
import Library from './pages/Admin/Library'
import Performance from './pages/Admin/Performance'
import SettingsProfile from './pages/Admin/SettingsProfile'
import SideBar from './pages/Admin/SideBar'
import Students from './pages/Admin/Students'
import Teachers from './pages/Admin/Teachers'

import StudentDashboard from './pages/Students/Dashboard';
import StudentAnnouncememnts from './pages/Students/Announcememnts';
import StudentAssignments from './pages/Students/Assignments';
import StudentAttendance from './pages/Students/Attendance';
import StudentLibrary from './pages/Students/Library';
import StudentPerformance from './pages/Students/Performance';
import StudentProfile from './pages/Students/Profile';
import StudentSideBar from './pages/Students/SideBar';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/choose-user' element={<ChooseUser />} />

        {/* All the sigin-in pages.routes */}
        <Route exact path='/admin-signin' element={<AdminSignin />} />
        <Route exact path='/student-signin' element={<StudentSignin />} />
        <Route exact path='/teacher-signin' element={<TeacherSignin />} />

        {/* All the dashboard pages.routes */}
        <Route exact path='/admin/dashboard' element={<AdminDashboard />} />
        <Route exact path='/student/dashboard' element={<StudentDashboard />} />

        {/* Admin Sections Here*/}
        <Route exact path='/admin/announcement' element={<Announcement />} />
        <Route exact path='/admin/assignment' element={<Assignment />} />
        <Route exact path='/admin/attendance' element={<Attendance />} />
        <Route exact path='/admin/classes' element={<Classes />} />
        <Route exact path='/admin/events' element={<EventCalender />} />
        <Route exact path='/admin/exam' element={<Exam />} />
        <Route exact path='/admin/library' element={<Library />} />
        <Route exact path='/admin/performance' element={<Performance />} />
        <Route exact path='/admin/settings' element={<SettingsProfile />} />
        <Route exact path='/admin/sideBar' element={<SideBar />} />
        <Route exact path='/admin/students' element={<Students />} />
        <Route exact path='/admin/teachers' element={<Teachers />} />

        {/* Student Sections Here */}
        <Route exact path='/student/announcement' element={<StudentAnnouncememnts />} />
        <Route exact path='/student/assignment' element={<StudentAssignments />} />
        <Route exact path='/student/attendance' element={<StudentAttendance />} />
        <Route exact path='/student/library' element={<StudentLibrary />} />
        <Route exact path='/student/performance' element={<StudentPerformance />} />
        <Route exact path='/student/settings' element={<StudentProfile />} />
        <Route exact path='/student/sidebar' element={<StudentSideBar />} />

      </Routes>
    </Router>
  )
}

export default App
