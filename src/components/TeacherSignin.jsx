import { useState } from 'react'
import { TeacherSignInContainer, FormContainer, InputField, SubmitButton } from '../styles/TeacherSigninStyles';


const TeacherSignin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignin = () => {
        // Lets simply just log the registration data
        console.log('Teacher Sign In', { email, password })
    }

    return (
        <TeacherSignInContainer>
            <h2>Teacher Sign In</h2>
            <FormContainer>
                <InputField
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <InputField
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <SubmitButton to="/teacher/dashboard" type='button' onClick={handleSignin}> Sign In</SubmitButton>
            </FormContainer>
        </TeacherSignInContainer>
    )
}

export default TeacherSignin