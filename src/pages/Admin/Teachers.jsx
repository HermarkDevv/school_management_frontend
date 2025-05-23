import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import axios from 'axios'

import { TeachersContainer, Content, TeachersContent, TeachersHeader, TeacherList, TeacherItem, AddTeacherForm, AddTeacherInput, AddTeacherButton } from '../../styles/TeachersStyles';


const Teachers = () => {
    return (
        <TeachersContainer>
            <SideBar />
            <Content>
                <TeachersContent>
                    <TeachersHeader>Teacher</TeachersHeader>
                    <AddTeacherForm>
                        <AddTeacherInput
                            type='text'
                            placeholder='Enter Teacher name'
                        />
                        <AddTeacherInput
                            type='email'
                            placeholder='Enter Teacher Email'
                        />
                        <AddTeacherInput
                            type='text'
                            placeholder='Enter Teacher Subject'
                        />
                        <AddTeacherButton type='submit'>Add Teacher</AddTeacherButton>
                    </AddTeacherForm>
                </TeachersContent>
            </Content>
        </TeachersContainer>
    )
}

export default Teachers