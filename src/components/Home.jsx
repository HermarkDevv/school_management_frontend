import React from 'react'
import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, GuestButton, HomeContainer, SchoolInfo, SchoolImage, Title, LoremTextContainer, AdminRegisterLink } from '../styles/styles';
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import img1 from '../assets/img1.jpg'
import { LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum()

const Home = () => {
    const navigate = useNavigate()
    const LoremText = lorem.generateParagraphs(1)

    const handleLoginCLick = () => {
        navigate('/choose-user')
    }
    return (
        <>
            <Navbar>
                <Logo src={logo} alt='Logo' />
                <NavigationLinks>
                    <NavLink href='#'>About Us</NavLink>
                    <NavLink href='#'>Products</NavLink>
                    <NavLink href='#'>Contact Us</NavLink>
                </NavigationLinks>
                <ButtonsContainer>
                    <LoginButton onClick={handleLoginCLick}>Sign In</LoginButton>
                    <GuestButton onClick={handleLoginCLick}>Guest Mode</GuestButton>
                </ButtonsContainer>
            </Navbar>
            <HomeContainer>
                <SchoolInfo>
                    <Title> School Management System</Title>
                    <LoremTextContainer>
                        <p>{LoremText}</p>
                    </LoremTextContainer>
                    <AdminRegisterLink>Admin Register</AdminRegisterLink>
                </SchoolInfo>
                <SchoolImage src={img1} alt='Pupils' />
            </HomeContainer>
        </>

    )
}

export default Home