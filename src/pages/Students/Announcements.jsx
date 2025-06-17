import { useState, useEffect } from 'react'
import StudentSideBar from './SideBar'
import axios from 'axios'

import { AnnouncementContainer, SidebarContainer, Content, AnnouncementHeader, AnnouncementList, AnnouncementItem, AnnouncementTitle, AnnouncementContent } from '../../styles/AnnouncementStyles'

const StudentAnnouncements = () => {
    return (
        <AnnouncementContainer>

            <SidebarContainer>
                <StudentSideBar />
            </SidebarContainer>

            <Content>
                <AnnouncementHeader>Announcements</AnnouncementHeader>
                {/* Below will need to map through the announcements coming from data base */}
                <AnnouncementList>

                </AnnouncementList>
            </Content>

        </AnnouncementContainer>
    )
}

export default StudentAnnouncements