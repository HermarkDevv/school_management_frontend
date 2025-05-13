import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsGraphUp, BsPeople, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent, BsQuestionSquare, BsPerson } from 'react-icons/bs'
import { SidebarContainer, SidebarHeader, SidebarNav, SidebarNavItem, StyledLink, SidebarIcon, Logo, ToggleButton, ToggleIcon } from '../../styles/SidebarStyles'
import logo from '../../assets/logo.jpg'

const SideBar = () => {

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
                    <StyledLink to='/admin/dashboard'> Dashboard </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsPeople /> </SidebarIcon>
                    <StyledLink to='/admin/classes'> Classes </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsPeople /> </SidebarIcon>
                    <StyledLink to='/admin/students'> Students </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsPerson /> </SidebarIcon>
                    <StyledLink to='/admin/teachers'> Teachers </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsFileText /> </SidebarIcon>
                    <StyledLink to='/admin/assignment'> Assignments </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsBook /> </SidebarIcon>
                    <StyledLink to='/admin/exam'> Exams </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsGraphUp /> </SidebarIcon>
                    <StyledLink to='/admin/performance'> Performance </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsCalendar /> </SidebarIcon>
                    <StyledLink to='/admin/attendance'> Attendance </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsBook /> </SidebarIcon>
                    <StyledLink to='/admin/library'> Library </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsChatDots /> </SidebarIcon>
                    <StyledLink to='/admin/announcement'> Announcement </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsCalendarEvent /> </SidebarIcon>
                    <StyledLink to='/admin/events'> Events and Calender </StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon> <BsGear /> </SidebarIcon>
                    <StyledLink to='/admin/settings'> Settings and Profile </StyledLink>
                </SidebarNavItem>
                <ToggleButton onClick={toggleSidebar}>
                    <ToggleIcon isOpen={isOpen}>🔼</ToggleIcon>
                </ToggleButton>
            </SidebarNav>

        </SidebarContainer>
    )
}

export default SideBar