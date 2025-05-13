import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import axios from 'axios'

import { PerformanceContainer, Content, PerformanceContent, SchoolPerformance, IndividualPerformance, PerformanceHeader } from '../../styles/PerformanceStyles'



const Performance = () => {
    // Let put a sample data for school performance reference
    const schoolPerformanceData = {
        averageScore: 85,
        totalStudents: 100
    }

    // Sample data for individual student performance
    const individualPerformanceData = [
        { id: 1, name: 'John Doe', score: 90 },
        { id: 2, name: 'Jane Doe', score: 70 },
        { id: 3, name: 'James Doe', score: 80 },
    ]

    return (
        <PerformanceContainer>
            <SideBar />
            <Content>
                <PerformanceContent>
                    <PerformanceHeader>School Performance</PerformanceHeader>
                    <SchoolPerformance>
                        <p>Average Score: {schoolPerformanceData.averageScore}</p>
                        <p>Total Students: {schoolPerformanceData.totalStudents}</p>
                    </SchoolPerformance>
                    <PerformanceHeader>Individual Performance</PerformanceHeader>
                    <IndividualPerformance>
                        {individualPerformanceData.map((student) => {
                            <p key={student.id}>
                                {student.name}: {student.score}
                            </p>
                        })}
                    </IndividualPerformance>
                </PerformanceContent>
            </Content>
        </PerformanceContainer>
    )
}

export default Performance