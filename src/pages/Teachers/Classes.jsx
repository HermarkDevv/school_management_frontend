import { useState, useEffect } from 'react'
import TeacherSideBar from './SideBar'
import axios from 'axios'

import { ClassesContainer, SidebarContainer, Content, ClassesContent, ClassHeader, ClassList, ClassItem } from '../../styles/ClassesStyles';

const TeacherClasses = () => {
    return (
        <ClassesContainer>
            <SidebarContainer>
                <TeacherSideBar />
            </SidebarContainer>

            <Content>
                <ClassHeader>Classes</ClassHeader>
                <ClassList>
                    {/* Here we will map and display all the classes later */}
                </ClassList>
            </Content>
        </ClassesContainer>
    )
}

export default TeacherClasses