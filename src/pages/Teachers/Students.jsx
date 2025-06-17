import { useState, useEffect } from 'react'
import TeacherSideBar from './SideBar'
import axios from 'axios'

import { StudentsContainer, Content, StudentsContent, StudentsHeader, StudentList, StudentItem, AddStudentButton, AddStudentForm, AddStudentInput } from './../../styles/StudentsStyles';

const TeacherStudents = () => {
    return (
        <StudentsContainer>
            <TeacherSideBar />
            <Content>
                <StudentsContent>
                    <StudentsHeader>Students</StudentsHeader>
                    <AddStudentForm>
                        <AddStudentInput
                            type='Text'
                            placeholder='Enter Student Name'
                        />
                        <AddStudentInput
                            type='Text'
                            placeholder='Enter Registration Number'
                        />
                        <AddStudentInput
                            type='Text'
                            placeholder='Enter Grade'
                        />
                        <AddStudentButton type='submit'>Add Student </AddStudentButton>
                    </AddStudentForm>

                    <StudentList>

                    </StudentList>

                </StudentsContent>
            </Content>
        </StudentsContainer>
    )
}

export default TeacherStudents