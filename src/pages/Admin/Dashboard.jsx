import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import EventCalendar from './EventCalendar'
import Announcement from './Announcement'
import Performance from './Performance'
import axios from 'axios'
import { AdminDashboardContainer, Content, TopContent, BottomContent, Section, SectionTitle, Card, CardContainer, CardTitle, CardContent } from '../../styles/DashboardStyles';

const AdminDashboard = () => {
    return (
        <AdminDashboardContainer>
            <SideBar></SideBar>
            <Content>
                <TopContent>
                    <Section>
                        <SectionTitle>Overview</SectionTitle>
                        <CardContainer>
                            <Card>
                                <CardTitle>Total Students</CardTitle>
                                <CardContent>50</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Total Teachers</CardTitle>
                                <CardContent>500</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Total Classes</CardTitle>
                                <CardContent>25</CardContent>
                            </Card>
                        </CardContainer>
                    </Section>

                    <Section>
                        <SectionTitle>All Event</SectionTitle>
                    </Section>
                </TopContent>

                <BottomContent>

                    <Performance />

                    <Announcement />

                </BottomContent>

            </Content>

        </AdminDashboardContainer>
    )
}

export default AdminDashboard