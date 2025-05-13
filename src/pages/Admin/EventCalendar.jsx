import { useState, useEffect } from 'react'
import SideBar from './SideBar'
import axios from 'axios'

import { EventCalendarContainer, Content, CalendarContainer, Events, Event, AddEventForm, EventInput, AddEventButton, ErrorText } from '../../styles/EventCalendarStyles';

const EventCalendar = () => {
    return (
        <EventCalendarContainer>
            <SideBar />
            <Content>
                <h1>Events and Calender</h1>
                <div>Current Time: </div>
                <CalendarContainer>
                    {/* Here we can display the calender */}
                    Calender
                </CalendarContainer>
                <AddEventForm>
                    <h2>Add New Event</h2>
                    <EventInput
                        type='text'
                        placeholder='Enter Event'
                    />
                    <AddEventButton type='submit'>Add Event</AddEventButton>
                </AddEventForm>

                <Events>
                    <h2>Events</h2>
                </Events>

            </Content>
        </EventCalendarContainer>
    )
}

export default EventCalendar