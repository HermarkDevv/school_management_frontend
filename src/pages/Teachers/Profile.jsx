import { useState, useEffect } from 'react'
import TeacherSideBar from './SideBar'
import axios from 'axios'

import { ProfileContainer, SidebarContainer, Content, ProfileHeader, ProfileDetail, ProfileDetails, ProfileLabel, ProfileInfo, EditButton } from '../../styles/SettingsProfileStyles';

const TeacherProfile = () => {
    const teacherInfo = {
        name: 'Jogn Doe',
        email: 'johndoe@gmail.com',
        phone: '12345678',
        address: 'Lagos,Nigeria.',
        qualification: 'Bsc'
    }


    return (
        <ProfileContainer>
            <SidebarContainer>
                <TeacherSideBar />
            </SidebarContainer>
            <Content>
                <ProfileHeader>Profile Details</ProfileHeader>
                <ProfileDetails>
                    <ProfileLabel>Name: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.name}</ProfileInfo>

                    <ProfileLabel>Email: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.email}</ProfileInfo>

                    <ProfileLabel>Phone: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.phone}</ProfileInfo>

                    <ProfileLabel>Address: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.address}</ProfileInfo>

                    <ProfileLabel>Qualification: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>

                </ProfileDetails>

                <EditButton>Edit Profile</EditButton>
            </Content>
        </ProfileContainer>
    )
}

export default TeacherProfile