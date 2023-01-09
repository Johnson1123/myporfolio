import React from 'react'
import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FcAcceptDatabase } from 'react-icons/fc'

const Container = styled.div`
    width: 100%;
    height: 100px;
    padding: 1rem 1rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 3rem 1rem;
    width: 85%;
    background: #fff;
    border: 1px solid #d3d3d3;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -50px;
    margin: 0 auto;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
    @media only screen and (max-width: 900px) {
        width: 95%;
        flex-wrap: wrap;
        justify-content: center;
    }
`
const WorkBox = styled.div`
    width: 33%;
    border: 1px solid #d3d3d3;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem 2rem;
    border-radius: 10px;
    @media only screen and (max-width: 900px) {
        width: 33%;
    }
`
const IconBox = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: #2DCDDF;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        font-size: 40px;
        color: #f3f3f3;
    }
    @media only screen and (max-width: 900px) {
        svg{
            font-size: 30px;
            color: #f3f3f3;
        }
    }
`
const HeaderText = styled.h2`
    line-height: 2;
    margin-top: 20px;
    font-size: 30px;
    @media only screen and (max-width: 900px) {
        font-size: 22px;
    }
`
const WorkText = styled.p`
    line-height: 1.3;
    margin-top: 25px;
    font-size: 18px;
    @media only screen and (max-width: 900px) {
        font-size: 16px;
        min-height: 100px;
    }
`
const WorkLanguageText = styled.p`
    line-height: 1.3;
    margin-top: 40px;
    font-size: 18px;
    color: #6C00FF;
    font-weight: 600;
`
const WorkLanguage = styled.p`
    line-height: 1.3;
    margin-top: 20px;
    font-size: 18px;
    @media only screen and (max-width: 900px) {
       min-height: 70px;
    }
`


const Works = () => {
  return (
    <Container>
        <Wrapper>          
            <WorkBox>
                <IconBox><FaReact /></IconBox>
                <HeaderText>Frontend Developer</HeaderText>
                <WorkText>I design clean and beatiful pages as per client requirement using necessary technology</WorkText>
                <WorkLanguageText>Languages I speak:</WorkLanguageText>
                <WorkLanguage>Html5, Css3, Taiwind, Sass, Git, Javascript and React.js.</WorkLanguage>
                <WorkLanguageText>Dev Tools.</WorkLanguageText>
                <WorkLanguage>Vs Code, Bootstrap, Github, Chrome Dev Tools, Terminal and Vercel</WorkLanguage>
            </WorkBox>
            <WorkBox>
                <IconBox><FaNodeJs /></IconBox>
                <HeaderText>Backend Developer</HeaderText>
                <WorkText>
                    I use neccessary languages to build dynamic web pages as per client 
                    requirement with effective and efficient functionalities.
                </WorkText>
                <WorkLanguageText>Languages I speak:</WorkLanguageText>
                <WorkLanguage>Node.js, Express, Mongo Db, Mysqli etc.</WorkLanguage>
                <WorkLanguageText>Dev Tools.</WorkLanguageText>
                <WorkLanguage>Vs Code, Github, Chrome Dev Tools, Terminal and Heroku</WorkLanguage>
            </WorkBox>
            <WorkBox>
                <IconBox><FcAcceptDatabase /></IconBox>
                <HeaderText>Full-Stack Developer</HeaderText>
                <WorkText>
                    I design clean and beatiful pages using necessary technology
                     with Dynamic functionalities using backend technologies
                </WorkText>
                <WorkLanguageText>Languages I speak:</WorkLanguageText>
                <WorkLanguage>Html5, Css3, Taiwind, Sass, Git, Javascript and React.js.</WorkLanguage>
                <WorkLanguageText>Dev Tools.</WorkLanguageText>
                <WorkLanguage>Vs Code, Bootstrap, Github, Chrome Dev Tools, Terminal, Vercel and Heroku</WorkLanguage>
            </WorkBox>
        </Wrapper>
    </Container>
  )
}
export default Works