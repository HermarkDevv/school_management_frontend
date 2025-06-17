import { useState, useEffect } from 'react'
import StudentSideBar from './SideBar'
import axios from 'axios'

import { PerformanceContainer, SidebarContainer, Content, PerformanceHeader, PerformanceInfo, PerformanceGraphContainer, TotalMarks } from '../../styles/PerformanceStyles'
import { Line } from 'react-chartjs-2'

const StudentPerformance = () => {

    //static data
    const performanceData = {
        month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        marks: [90, 78, 90, 87, 83, 60],
        totalMarks: 520
    }

    //Let's make line chart data here
    const lineChartData = {
        labels: performanceData.month,
        datasets: [
            {
                label: 'Performance Trends',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                data: performanceData.marks
            }
        ]
    }

    return (
        <PerformanceContainer>

            <SidebarContainer>
                <StudentSideBar />
            </SidebarContainer>

            <Content>
                <PerformanceHeader>Performance</PerformanceHeader>
                <PerformanceInfo>
                    <PerformanceGraphContainer>
                        <Line
                            data={lineChartData}
                            options={{
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            }}
                        />
                    </PerformanceGraphContainer>
                    <TotalMarks>Total Marks: {performanceData.totalMarks}</TotalMarks>
                </PerformanceInfo>
            </Content>

        </PerformanceContainer>
    )
}

export default StudentPerformance