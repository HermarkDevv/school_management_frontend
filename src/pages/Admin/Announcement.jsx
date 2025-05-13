import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import axios from 'axios'

import { AnnouncementContainer, Content, Title, AnnouncementForm, AnnouncementContent, FormGroup, Label, TextArea, Button, AnnouncementList, AnnouncementItem } from '../../styles/AnnouncementStyles';

const Announcement = () => {
    return (
        <AnnouncementContainer>
            <SideBar />
            <Content>
                <Title>Announcement</Title>
                <AnnouncementForm>
                    <FormGroup>
                        <Label htmlFor='announcement'>Announcement:</Label>
                        <TextArea

                            required
                            rows={4}
                            cols={50}
                        />
                    </FormGroup>
                    <Button type='submit'>Send Announcement</Button>
                </AnnouncementForm>

                {/* To display announcement */}
                <h2>Announcement</h2>
                <AnnouncementList>

                </AnnouncementList>
            </Content>
        </AnnouncementContainer>
    )
}

export default Announcement