import { ChooseUserContainer, UserSection, Title, Button } from '../styles/ChooseUserStyles'
import { Link } from 'react-router-dom'

const ChooseUser = () => {
    return (
        <ChooseUserContainer>
            <UserSection>
                <Title>Admin</Title>
                <Button to="/admin-signin">Login as Admin</Button>
            </UserSection>
            <UserSection>
                <Title>Student</Title>
                <Button to="/student-signin">Login as Student</Button>
            </UserSection>
            <UserSection>
                <Title>Teacher</Title>
                <Button to="/teacher-signin">Login as Teacher</Button>
            </UserSection>
        </ChooseUserContainer>
    )
}

export default ChooseUser