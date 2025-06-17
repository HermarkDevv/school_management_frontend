import { useState, useEffect } from 'react'
import TeacherSideBar from './SideBar'
import axios from 'axios'


import { TeachersContainer, Content, TeachersContent, TeachersHeader, TeacherList, TeacherItem, AddTeacherButton } from './../../styles/TeachersStyles';
import SideBar from '../Admin/SideBar';

const TeacherTeachers = () => {
    return (
        <TeachersContainer>
            <TeacherSideBar />
            <Content>
                <TeachersContent>
                    <TeachersHeader>Teachers</TeachersHeader>
                    <TeacherList>
                        {/* List of teachers will appear here.*/}
                    </TeacherList>
                </TeachersContent>
            </Content>
        </TeachersContainer>
    )
}

export default TeacherTeachers