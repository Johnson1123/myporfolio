import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    width: 100%;
    background: #6C00FF;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 900px) {
        height: 55vh;
    }
    @media only screen and (max-width: 767px) {
        min-height: 100vh;
    }
`
const Wrapper = styled.div`
    width: 85%;
    height: 100%;
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
const HeaderText = styled.h2`
    font-size: 24px;
    color: #fff;
    letter-spacing: 1.5px;
    @media only screen and (max-width: 767px) {
        margin-top: 50px;
        font-size: 20px;
    }
`

const ProfileText = styled.p`
    margin-top: 40px;
    font-size: 20px;
    text-align: left;
    color: #fff;
    width: 70%;
    line-height: 1.3;
    @media only screen and (max-width: 900px) {
        font-size: 18px;
        line-height: 1.5;
        text-align: center;
    }
    @media only screen and (max-width: 767px) {
        height: 100vh;
        width: 90%;
    }
`

const Profile = () => {
  return (
    <Container>
        <Wrapper>
            <HeaderText>Hi, I'm Johnson. Nice to Meet you</HeaderText>
            <ProfileText>
                I am a motivated Front-end developer with over two year of experience in web development. 
                Excellent reputation for resolving problems and awesome designs. Eager to contribute to team
                success throught hard work. detailed oriented, and excellent communication skills with a clear 
                understanding of frontend development. An energetic young man motivated to learn, grow and excel
                in web development.
            </ProfileText>
        </Wrapper>
    </Container>
  )
}

export default Profile