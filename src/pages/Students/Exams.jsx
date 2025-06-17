import { useState, useEffect } from 'react'
import StudentSideBar from './SideBar'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'

import { ExamContainer, SidebarContainer, Content, ExamHeader, ExamResultsContainer, ExamSubject, ExamResult, ExamChartContainer } from '../../styles/ExamStyles'

const StudentExams = () => {

    // Simple exam results data
    const examResultData = {
        subjects: ['Math', 'Science', 'English', 'History'],
        results: [80, 75, 85, 70]
    }

    //Bar chart data
    const barChartData = {
        labels: examResultData.subjects,
        datasets: [
            {
                label: 'Exam Results',
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                borderWidth: 1,
                hoverBackgroundColor: '#0056b3',
                hoverBorderColor: '#0056b3',
                data: examResultData.results
            }
        ]
    }

    const chartOptions = {
        scales: {
            y: {
                type: 'linear',
                beginAtZero: true,
                max: 100 //this 100 because exam results is over 100
            }
        }
    }
    return (
        <ExamContainer>

            <SidebarContainer>
                <StudentSideBar />
            </SidebarContainer>

            <Content>
                <ExamHeader>Exam Results</ExamHeader>
                <ExamResultsContainer>
                    {examResultData.subjects.map((subject, index) => (
                        <div key={index}>
                            <ExamSubject>{subject}</ExamSubject>
                            <ExamResult>Score:{examResultData.results[index]}%</ExamResult>
                        </div>
                    ))}
                    <ExamChartContainer>
                        <Bar
                            // ref={chartRef}
                            data={barChartData}
                            options={chartOptions}
                        />
                    </ExamChartContainer>
                </ExamResultsContainer>
            </Content>

        </ExamContainer>
    )
}

export default StudentExams