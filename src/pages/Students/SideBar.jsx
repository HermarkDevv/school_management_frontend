import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsGraphUp, BsPeople, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent, BsQuestionSquare, BsPerson } from 'react-icons/bs'
import { SidebarContainer, SidebarHeader, SidebarNav, SidebarNavItem, StyledLink, SidebarIcon, Logo, ToggleButton, ToggleIcon } from '../../styles/SidebarStyles'
import logo from '../../assets/logo.jpg'

const StudentSideBar = () => {

    const [isOpen, setIsOpen] = useState(true)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <SidebarContainer style={{ width: isOpen ? '250px' : '80px' }}>
            <SidebarHeader>
                <Logo src={logo} alt='Logo' />
            </SidebarHeader>
            <SidebarNav>
                <SidebarNavItem>
                    <SidebarIcon> <BsGraphUp /> </SidebarIcon>
                    <StyledLink to='/student/dashboard'> Dashboard </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsFileText /> </SidebarIcon>
                    <StyledLink to='/student/assignment'> Assignments </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsBook /> </SidebarIcon>
                    <StyledLink to='/student/exam'> Exams </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsGraphUp /> </SidebarIcon>
                    <StyledLink to='/student/performance'> Performance </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsCalendar /> </SidebarIcon>
                    <StyledLink to='/student/attendance'> Attendance </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsBook /> </SidebarIcon>
                    <StyledLink to='/student/library'> Library </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsChatDots /> </SidebarIcon>
                    <StyledLink to='/student/announcement'> Announcement </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsCalendarEvent /> </SidebarIcon>
                    <StyledLink to='/student/events'> Events and Calender </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsGear /> </SidebarIcon>
                    <StyledLink to='/student/settings'>Student Profile </StyledLink>
                </SidebarNavItem>
                <ToggleButton onClick={toggleSidebar}>
                    <ToggleIcon isOpen={isOpen}>🔼</ToggleIcon>
                </ToggleButton>
            </SidebarNav>

        </SidebarContainer>
    )
}

export default StudentSideBar