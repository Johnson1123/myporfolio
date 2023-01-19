import React from 'react'
import styled from 'styled-components'
import myimg from '../asset/Johnson__onifade.jpeg'

const Container = styled.div`
    width: 85%;
    height: calc(100vh - 100px);
    padding: 2rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 900px) {
        justify-content: flex-start;
        height: calc(50vh - 100px);
        min-height: calc( 50vh + 100px );
    }
    @media only screen and (max-width: 767px) {
        min-height: 50vh;
        width: 95%;
    }
`
const WhatIDov = styled.h1`
    font-size: 45px;
    margin: 20px 0;
    margin-top: 100px;
    @media only screen and (max-width: 900px) {
        font-size: 2rem;
        font-weight: 800;
        margin-top: 100px;
    }
    @media only screen and (max-width: 767px) {
        font-size: 1.5rem;
        text-align: center;
        font-weight: 800;
        margin-top: 50px;
        line-height: 1.5;
    }
`
const WhatIWrite = styled.p`
    font-size: 20px;
    @media only screen and (max-width: 900px) {
        font-size: 18px;
    }
    @media only screen and (max-width: 900px) {
        text-align: left;
        line-height: 1.3;
    }
`
const MyImgCon = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    @media only screen and (max-width: 900px) {
        height: auto;
        margin-top: 100px;
    }
    @media only screen and (max-width: 767px) {
        height: auto;
        margin-top: 50px;
    }

`
const MyImgBox = styled.div`
    width: 230px;
    height: 230px;
    background: #2DCDDF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MyImg = styled.img`
    width: 218px;
    height: 218px;
    border-radius: 50%;
`

export default function Intro() {
  return (
    <Container>
        <WhatIDov>Frontend, Backend & Fullstack Web Developer </WhatIDov>
        <WhatIWrite>I write clean, maintainable and readable code, I am an expert in what I do</WhatIWrite>
        <MyImgCon>
            <MyImgBox>
                <MyImg src={ myimg }  alt='Johnson Onifade'/>
            </MyImgBox>
        </MyImgCon>
    </Container>
  )
}
