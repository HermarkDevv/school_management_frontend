import { useState, useEffect } from 'react'
import StudentSideBar from './SideBar'
import axios from 'axios'

import { AssignmentsContainer, SidebarContainer, Content, AssignmentButton, AssignmentCard, AssignmentTitle, AssignmentDescription, AssignmentDoneMessage } from '../../styles/AssignmentsStyles'


const StudentAssignments = () => {
    return (
        <AssignmentsContainer>
            <SidebarContainer>
                <StudentSideBar />
            </SidebarContainer>

            <Content>
                <h1>Assignments</h1>
            </Content>
        </AssignmentsContainer>
    )
}

export default StudentAssignments