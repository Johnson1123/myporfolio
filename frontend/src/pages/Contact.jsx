import React from 'react'
import styled from 'styled-components'
import { images } from '../asset'

const Container = styled.div`
    width: 100%;
    height: auto;
`
const Wrapper = styled.div`
    width: 95%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LogoDiv = styled.div`
    width: 100%;
    padding: 1rem 1rem 2rem;
`
const Logo = styled.img`
  height: 40px;
`
const MyImgCon = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const MyImgBox = styled.div`
    width: 150px;
    height: 150px;
    background: #2DCDDF;
    position: relative;
    border-radius: 50%;
`
const MyImg = styled.img`
    width: 140px;
    height: 140px;
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
`
const ThankYou = styled.p`
    font-size: 26px;
    margin: 20px 0;
    margin-top: 50px;
    text-align: center;
    line-height: 1.3;
    font-weight: 500;
    `
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const InputCon = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`
const Label = styled.label`
    font-size: 20px;
    line-height: 2.3;
`
const Input = styled.input`
    width: 100%;
    height: 60px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #d3d3d3;
    &:focus{
        padding: 15px;
    }
`
const TextArea = styled.textarea`
    width: 100%;
    border-radius: 5px;
    outline: none;
    border: 1px solid #d3d3d3;
    &:focus{
        padding: 15px;
    }
`
const FormBtn = styled.button`
    width: 100%;
    height: 60px;
    border: 1px solid #3C79F5;
    border-radius: 20px;
    margin-top: 40px;
    font-size: 22px;
    font-weight: 500;
    color: #3C79F5;
    letter-spacing: 2.7px;
    &:hover{
        color: #fff;
        background: #3C79F5;
    }
`


function Contact() {
  return (
    <Container>
        <Wrapper>
            <LogoDiv><Logo src={images.logo}/></LogoDiv>
            <MyImgCon>
                <MyImgBox><MyImg src={images.myimg} /></MyImgBox>
            </MyImgCon>
            <ThankYou>Thanks for taking the time to reach out. How can I help you today?</ThankYou>
            <Form>
                <InputCon>
                    <Label>Name</Label>
                    <Input type='text' autoFocus></Input>
                </InputCon>
                <InputCon>
                    <Label>Email</Label>
                    <Input type='text'></Input>
                </InputCon>
                <InputCon>
                    <Label>Massege</Label>
                    <TextArea rows='10'></TextArea>
                </InputCon>
            </Form>
            <FormBtn>Submit</FormBtn>
        </Wrapper>
    </Container>
  )
}

export default Contact