import React from 'react'
import styled from 'styled-components'
import myimg from '../asset/Johnson__onifade.jpeg'

const Container = styled.div`
    width: 85%;
    min-height: calc( 100vh - 100px );
    padding: 2rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 900px) {
        justify-content: flex-start;
        min-height: calc( 50vh - 100px );
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
`
const WhatIWrite = styled.p`
    font-size: 20px;
    @media only screen and (max-width: 900px) {
        font-size: 18px;
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
`
const MyImgBox = styled.div`
    width: 230px;
    height: 230px;
    background: #2DCDDF;
    position: relative;
    border-radius: 50%;
`
const MyImg = styled.img`
    width: 220px;
    height: 220px;
    position: absolute;
    z-index: 1;
    left: 5px;
    top: -5px;
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
