import { useState, useEffect } from 'react'
import TeacherSideBar from './SideBar'
import axios from 'axios'

import { AssignmentsContainer, Content, AssignmentsContent, AssignmentsHeader, AssignmentTitle, AssignmentList, AddAssignmentButton, AddAssignmentForm, AddAssignmentInput, AddAssignmentTextArea } from '../../styles/AssignmentsStyles'

const TeacherAssignment = () => {
    return (
        <AssignmentsContainer>
            <TeacherSideBar />
            <Content>
                <AssignmentsHeader>Assignments</AssignmentsHeader>
                <AddAssignmentForm>
                    <AddAssignmentInput
                        type='text'
                        placeholder='Enter Assignment Title'
                    />
                    <AddAssignmentTextArea
                        placeholder='Enter Assignment Description'
                    />
                    <AddAssignmentInput
                        type='text'
                        placeholder='Enter Assignment Grade'
                    />
                    <AddAssignmentInput
                        type='text'
                        placeholder='Enter Assignment Deadline'
                    />
                    <AddAssignmentButton type='submit'>Add Assignment</AddAssignmentButton>
                </AddAssignmentForm>

                <AssignmentList>
                    {/** All the assingment will be displayed here */}
                </AssignmentList>
            </Content>
        </AssignmentsContainer>
    )
}

export default TeacherAssignment