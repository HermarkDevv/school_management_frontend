import { useState, useEffect } from 'react'
import TeacherSideBar from './SideBar'
import axios from 'axios'

import { TeacherDashboardContainer, Content, Section, SectionTitle, CardContainer, Card, CardTitle, CardContent } from '../../styles/DashboardStyles'
import SideBar from '../Admin/SideBar'


const TeacherDashboard = () => {
    return (
        <TeacherDashboardContainer>
            <TeacherSideBar />
            <Content>
                <Section>
                    <SectionTitle>Overview</SectionTitle>
                    <CardContainer>
                        <Card>
                            <CardTitle>Total Students</CardTitle>
                            <CardContent>500</CardContent>
                        </Card>
                        <Card>
                            <CardTitle>Total Teachers</CardTitle>
                            <CardContent>52</CardContent>
                        </Card>
                        <Card>
                            <CardTitle>Total Classes</CardTitle>
                            <CardContent>40</CardContent>
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
        </TeacherDashboardContainer>
    )
}

export default TeacherDashboard