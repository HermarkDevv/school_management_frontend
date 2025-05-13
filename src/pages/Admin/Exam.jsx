import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import axios from 'axios'

import { ExamContainer, SidebarContainer, Content, ExamHeader, ExamForm, FormLabel, FormInput, AddButton } from '../../styles/ExamStyles';

const Exam = () => {

    const [examData, setExamData] = useState([]);


    // Check for any error in the loop
    const CalculateTotalMarks = () => {
        let total = 0;
        for (let i = 0; i < examData.length; i++) {
            total += examData[i].marks;
        }
        return total;
    }


    return (
        <ExamContainer>
            <SidebarContainer>
                <SideBar />
            </SidebarContainer>
            <Content>
                <ExamHeader>Exam Details</ExamHeader>
                <ExamForm>
                    <FormLabel>Name:</FormLabel>
                    <FormInput
                        type='text'
                        required
                    />
                    <FormLabel>Registration Number:</FormLabel>
                    <FormInput
                        type='text'
                        required
                    />
                    <FormLabel>Class:</FormLabel>
                    <FormInput
                        type='text'
                        required
                    />
                    <FormLabel>Marks:</FormLabel>
                    <FormInput
                        type='number'
                        required
                    />
                    <AddButton type='submit'>Add Exam</AddButton>
                </ExamForm>

                <h2>Total Marks: {CalculateTotalMarks()}</h2>
                <h3>Exam Details:</h3>
                {/* <ul>
                    <li></li>
                </ul> */}
            </Content>
        </ExamContainer>
    )
}

export default Exam