import { useState, useEffect } from 'react'
import StudentSideBar from './SideBar'
import axios from 'axios'

import { LibraryContainer, SidebarContainer, Content, LibraryHeader, BookList, BookItem, BookTitle, BorrowButton } from '../../styles/LibraryStyles'

const StudentLibrary = () => {
    return (
        <LibraryContainer>

            <SidebarContainer>
                <StudentSideBar />
            </SidebarContainer>

            <Content>
                <LibraryHeader>Library</LibraryHeader>
                {/* Below will need to map through books coming from data base */}
                <BookList>

                </BookList>
            </Content>

        </LibraryContainer>
    )
}

export default StudentLibrary