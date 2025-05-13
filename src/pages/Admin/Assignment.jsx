import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import axios from 'axios'

import { AssignmentsContainer, Content, AssignmentsContent, AssignmentsHeader, AssignmentList, AssignmentItem, AddAssignmentForm, AddAssignmentInput, AddAssignmentTextArea, AddAssignmentButton } from '../../styles/AssignmentsStyles'

const Assignment = () => {
    return (
        <AssignmentsContainer>
            <SideBar />
            <Content>
                <AssignmentsContent>
                    <AssignmentsHeader>Assignments</AssignmentsHeader>
                    <AddAssignmentForm>
                        <AddAssignmentInput
                            type='text'
                            placeholder='Enter assigment title'
                        />
                        <AddAssignmentTextArea
                            placeholder='Enter assignment decription'
                        />
                        <AddAssignmentInput
                            type='text'
                            placeholder='Eneter assignment grade '
                        />
                        <AddAssignmentInput
                            type='text'
                            placeholder='Enter assignment deadline'
                        />
                        <AddAssignmentButton type='submit'>Add Assignment</AddAssignmentButton>
                    </AddAssignmentForm>

                    <AssignmentList></AssignmentList>
                </AssignmentsContent>
            </Content>
        </AssignmentsContainer>
    )
}

export default Assignment