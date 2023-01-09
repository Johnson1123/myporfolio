import React from 'react'
import styled from 'styled-components'
import { images } from '../asset'

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 900px) {
        height: 75vh;
    }
`
const Wrapper = styled.div`
    width: 85%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const HeaderText = styled.h2`
    line-height: 2;
    margin-top: 20px;
    font-size: 30px;
`
const TestText = styled.p`
    font-size: 22px;
    color: #111;
    margin-top: 10px;
    font-weight: 500;
    @media only screen and (max-width: 900px) {
        font-size: 20px;
    }
`
const TestCon = styled.div`
    padding: 1rem;
    width: 100%;
    display: flex;
    margin-top: 50px;
    Flex-direction: column;
    align-items: center;
    justify-content: center;
`
const TestImgCon = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #6C00FF;
`
const TestImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`
const TestsText = styled.p`
    font-size: 20px;
    width: 60%;
    text-align: center;
    color: #111;
    line-height: 1.5;
    margin-top: 50px;
    @media only screen and (max-width: 900px) {
        width: 70%;
        font-size: 18px;
    }
`
const TestAuthor = styled.div`
    margin-top: 30px;
    display: flex;
    Flex-direction: column;
    align-items: center;
    justify-content: center;
`
const AuthorName =styled.h3`
    margin-top: 20px;
    font-size: 30px;
    font-weight: 400;
`
const AuthorWork =styled.p`
    line-height: 2;
    margin-top: 0px;
    font-size: 20px;
    font-weight: 400;
`
function Testimonial() {
  return (
    <Container>
        <Wrapper>
            <HeaderText>Testimonials</HeaderText>
            <TestText>People I've worked with have said some nice things...</TestText>
            <TestCon>
                <TestImgCon>
                    <TestImg src={ images.peter }/>
                </TestImgCon>
                <TestsText>
                    “Matt's a clear communicator with the tenacity and confidence to really dig in to tricky 
                    design scenarios and the collaborative friction that's needed to produce excellent work.”
                </TestsText>
                <TestAuthor>
                    <AuthorName>Elon Peter</AuthorName>
                    <AuthorWork>Manager, The West Enterprises, Inc.</AuthorWork>
                </TestAuthor>
            </TestCon>
        </Wrapper>
    </Container>
  )
}

export default Testimonial