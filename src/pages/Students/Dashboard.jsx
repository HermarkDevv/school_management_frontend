import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import axios from 'axios'

import { StudentDashboardContainer, Content, Section, SectionTitle, Card, CardContainer, CardTitle, CardContent } from '../../styles/DashboardStyles'



const StudentDashboard = () => {
    return (
        <StudentDashboardContainer>
            <SideBar />
            <Content>
                <Section>
                    <SectionTitle>Overview</SectionTitle>
                    <CardContainer>
                        <Card>
                            <CardTitle>Assignments</CardTitle>
                            <CardContent>50</CardContent>
                        </Card>
                        <Card>
                            <CardTitle>Performance</CardTitle>
                            <CardContent>520</CardContent>
                        </Card>
                        <Card>
                            <CardTitle>Term</CardTitle>
                            <CardContent>2</CardContent>
                        </Card>
                    </CardContainer>
                </Section>

                <Section>
                    <SectionTitle>Recent Activity</SectionTitle>
                </Section>

                <Section>
                    <SectionTitle>Upcoming Event</SectionTitle>
                </Section>

            </Content>

        </StudentDashboardContainer>
    )
}

export default StudentDashboard