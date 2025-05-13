import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import axios from 'axios'

import { StudentsContainer, Content, StudentsContent, StudentsHeader, StudentList, StudentItem, AddStudentForm, AddStudentInput, AddStudentButton } from '../../styles/StudentsStyles';

const Students = () => {
    return (
        <StudentsContainer>
            <SideBar />
            <Content>
                <StudentsContent>
                    <StudentsHeader>Student</StudentsHeader>
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

export default Students