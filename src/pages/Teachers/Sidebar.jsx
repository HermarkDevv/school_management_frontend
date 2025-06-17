import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsGraphUp, BsPeople, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent, BsQuestionSquare, BsPerson } from 'react-icons/bs'
import { SidebarContainer, SidebarHeader, SidebarNav, SidebarNavItem, StyledLink, SidebarIcon, Logo, ToggleButton, ToggleIcon } from '../../styles/SidebarStyles'
import logo from '../../assets/logo.jpg'

const TeacherSideBar = () => {

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
                    <StyledLink to='/teacher/dashboard'> Dashboard </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsPeople /> </SidebarIcon>
                    <StyledLink to='/teacher/classes'> Classes </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsPeople /> </SidebarIcon>
                    <StyledLink to='/teacher/students'> Students </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsPerson /> </SidebarIcon>
                    <StyledLink to='/teacher/teachers'> Teachers </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsFileText /> </SidebarIcon>
                    <StyledLink to='/teacher/assignment'> Assignments </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsBook /> </SidebarIcon>
                    <StyledLink to='/teacher/exam'> Exams </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsGraphUp /> </SidebarIcon>
                    <StyledLink to='/teacher/performance'> Performance </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsCalendar /> </SidebarIcon>
                    <StyledLink to='/teacher/attendance'> Attendance </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsBook /> </SidebarIcon>
                    <StyledLink to='/teacher/library'> Library </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsChatDots /> </SidebarIcon>
                    <StyledLink to='/teacher/announcement'> Announcement </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsCalendarEvent /> </SidebarIcon>
                    <StyledLink to='/teacher/events'> Events and Calender </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsGear /> </SidebarIcon>
                    <StyledLink to='/teacher/settings'> Settings and Profile </StyledLink>
                </SidebarNavItem>
                <ToggleButton onClick={toggleSidebar}>
                    <ToggleIcon isOpen={isOpen}>🔼</ToggleIcon>
                </ToggleButton>
            </SidebarNav>

        </SidebarContainer>
    )
}

export default TeacherSideBar