import { useState, useEffect } from 'react'
import TeacherSideBar from './SideBar'
import axios from 'axios'

import { AttendanceContainer, Content, AttendanceContent, AttendanceHeader, AttendanceList, AttendanceItem, StudentName, CheckboxLabel, Divider, SubmitButton } from '../../styles/AttendanceStyles';

const TeacherAttendance = () => {
    return (
        <AttendanceContainer>
            <TeacherSideBar />
            <Content>
                <AttendanceContent>
                    <AttendanceHeader>Attendance</AttendanceHeader>
                    <AttendanceList>
                        <AttendanceItem>
                            <StudentName></StudentName>
                            <CheckboxLabel>
                                <input
                                    type='checkbox'
                                />
                                Present
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <input
                                    type='checkbox'
                                />
                                Absent
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <input
                                    type='checkbox'
                                />
                                Absent with apology
                            </CheckboxLabel>
                        </AttendanceItem>
                    </AttendanceList>
                    <SubmitButton>Submit</SubmitButton>
                </AttendanceContent>
            </Content>
        </AttendanceContainer>
    )
}

export default TeacherAttendance