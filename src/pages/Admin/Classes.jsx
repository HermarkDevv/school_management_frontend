import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import axios from 'axios'
import { ClassesContainer, Content, ClassesContent, ClassHeader, ClassList, ClassItem, AddClassButton, AddClassForm, AddClassInput } from '../../styles/ClassesStyles';

const Classes = () => {
    return (
        <ClassesContainer>
            <SideBar />
            <Content>
                <ClassesContent>
                    <ClassHeader>Classes</ClassHeader>
                    <AddClassForm>
                        <AddClassInput
                            type='text'
                            placeholder='Enter Class Name'
                        />
                        <AddClassButton type='submit'>Add Class</AddClassButton>
                        <ClassList>

                        </ClassList>
                    </AddClassForm>
                </ClassesContent>
            </Content>
        </ClassesContainer>
    )
}

export default Classes