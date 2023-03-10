import React from 'react'
import styled from 'styled-components'
import { images } from '../asset'
import { HiUserGroup } from 'react-icons/hi'
import { TiSocialFacebook } from 'react-icons/ti'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'

const Container = styled.div`
    height: 100%;
    width: 100%;
    background: #6C00FF;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    @media only screen and (max-width: 900px) {
        height: 60vh;
    }
    @media only screen and (max-width: 767px) {
        height: 100vh;
    }
`
const Wrapper = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    he
`
const ProjectBox = styled.div`
    width: 85%;
    display: flex;
    position: absolute;
    left: 50%;
    top: -40px;
    transform: translateX(-50%);
    justify-content: space-around;
    background: #141c3a;
    align-items: center;
    border-radius: 5px;
    padding: 3rem 1rem;
    @media only screen and (max-width: 767px) {
        flex-direction: column;
    }
`
const HeaderText = styled.p`
    font-size: 20px;
    color: #fff;
    letter-spacing: 1.5px;
    font-weight: 600;
    @media only screen and (max-width: 900px) {
        font-size: 20px;
    }
`
const InteText = styled.p`
    font-size: 20px;
    color: #fff;
    width: 40%;
    letter-spacing: 1.5px;
    font-weight: 600;
    text-align: center;
    @media only screen and (max-width: 900px) {
        font-size: 16px;
    }
    @media only screen and (max-width: 900px) {
        width: 90%;
        margin-top: 20px;
    }
`
const TextButton = styled.a`
    font-size: 20px;
    color: #fff;
    letter-spacing: 1.5px;
    font-weight: 600;
    border: 2px solid #F2DEBA;
    background: transparent;
    padding: .8rem 1.5rem;
    border-radius: 20px;
    cursor: pointer;
    &:hover, &:active{
        background: #F2DEBA;
        color: #111;
    }
    @media only screen and (max-width: 900px) {
        font-size: 18px;
        padding: .5rem 1.1rem;
    }
    @media only screen and (max-width: 767px) {
        margin-top: 20px;
    }
`
const FooImgCon = styled.div`
    height: 50px;
    width: 50px;
    background: #fff;
    padding: .5rem;
    border-radius: 5px;
    margin-top: 150px;
    @media only screen and (max-width: 900px) {
        height: 40px;
        width: 40px;
        margin-top: 150px;
    }
`
const FooImg = styled.img`
    height: 100%;
    width: 100%;
`
const FooText = styled.p`
    font-size: 20px;
    color: #fff;
    letter-spacing: 1.5px;
    font-weight: 600;
    margin-top: 100px;
    @media only screen and (max-width: 900px) {
        font-size: 18px;
        margin-top: 80px;
    }
    @media only screen and (max-width: 767px) {
        text-align: center;
    }
`
const SocialBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-top: 30px;
`
const SocialLink = styled.a`
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: 1px solid #fff;
    margin: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s;
    svg{
        color: #fff;
        font-size: 25px;
        font-weight: 700;
        background: transparent;
        transition: all 1s;
        &:hover{
            co
        }
    }
    &:hover{
        background: #fff;
        svg{
            color: #6C00FF;
        }
    }
    @media only screen and (max-width: 767px) {
        height: 30px;
        width: 30px;
        svg{
            font-size: 18px;
        }
    }
`
const Copyright = styled.p`
    font-size: 20px;
    color: #fff;
    letter-spacing: 1.5px;
    font-weight: 600;
    margin-top: 80px;
    @media only screen and (max-width: 900px) {
        font-size: 18px;
        margin-top: 50px;
    }
`
const LinkImg = styled.a`
    text-decoration: none;
    cursor: pointer;
`
const StyledLogo = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #fff;
    letter-spacing: 1.5px;
    font-weight: 600;
    margin-top: 20px;
    @media only screen and (max-width: 900px) {
        font-size: 18px;
        margin-top: 15px;
    }
`
const StyledImg = styled.img`
    width: 40px;
    margin-left: 10px;
`

function Footer() {
    const time = new Date().getFullYear();
  return (
   <Container>
    <Wrapper>
        <ProjectBox>
            <HeaderText>Start a Project</HeaderText>
            <InteText>Do you need right partner to work with, let's Chat </InteText>
            <TextButton href='/project'><HiUserGroup /> let do this!</TextButton>
        </ProjectBox>
        <FooImgCon><FooImg src={ images.logo } /></FooImgCon>
        <FooText>Clean, Maintainable and high Functional Code</FooText>
        <SocialBox>
            <SocialLink href='https://twitter.com/Dammyjohn8658' target='_blank'><FiTwitter /></SocialLink>
            <SocialLink href=''><AiOutlineInstagram /></SocialLink>
            <SocialLink href='https://github.com/Johnson1123' target='_blank'><FiGithub /></SocialLink>
            <SocialLink href='https://web.facebook.com/johnson.onifade.3701' target='_blank'><TiSocialFacebook /></SocialLink>
            <SocialLink href='https://www.linkedin.com/in/johnson-onifade-558012155/' target='_blank'><FaLinkedinIn /></SocialLink>
        </SocialBox>
        <Copyright>Johnson &copy; {time}</Copyright>
        <StyledLogo>Create with <LinkImg href='https://styled-components.com/'><StyledImg src={images.StyledLogo}/></LinkImg></StyledLogo>
    </Wrapper>
   </Container>
  )
}

export default Footer