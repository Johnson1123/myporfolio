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
    @media only screen and (min-width: 900px) {
        width: 50%;
        margin: 0 auto;
      }
`
const LinkImg = styled.a`
    text-decoration: none;
    cursor: pointer;
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
const WorkText = styled.p`
    font-size: 24px;
    margin: 30px 0;
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
const InputDiv = styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
`
const InputCon = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    @media only screen and (min-width: 900px) {
        width: 48%;
      }
`
const TextAreaCon = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`
const Label = styled.label`
    font-size: 18px;
    line-height: 2.3;
`
const Input = styled.input`
    width: 100%;
    height: 55px;
    border-radius: 5px;
    outline: none;
    position: relative;
    border: 1px solid #d3d3d3;
    &:focus{
        padding: 15px;
    }
`
const Datalist = styled.datalist`
    position: absolute;

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
    height: 55px;
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


function Project() {
  return (
    <Container>
        <Wrapper>
            <LogoDiv><LinkImg href='/'><Logo src={images.logo}/></LinkImg></LogoDiv>
            <MyImgCon>
                <MyImgBox><MyImg src={images.myimg} /></MyImgBox>
            </MyImgCon>
            <WorkText>I’m excited to learn about your project. Ready to get started?</WorkText>
            <Form>
                <InputDiv>
                    <InputCon>
                        <Label>Name</Label>
                        <Input type='text' autoFocus></Input>
                    </InputCon>
                    <InputCon>
                        <Label>Email</Label>
                        <Input type='email' autoFocus></Input>
                    </InputCon>
                </InputDiv>
                <InputDiv>
                    <InputCon>
                        <Label>Type of project</Label>
                        <Input list="browsers" name="browser" id="browser" />
                        <Datalist id="browsers" >
                            <option value="FIgma, Xd convertion" />
                            <option value="React, Redux & Redux Toolkit" />
                            <option value="Responsive design" />
                            <option value="Web Application" />
                            <option value="Mobile Application" />
                        </Datalist>
                    </InputCon>
                    <InputCon>
                        <Label>Budget</Label>
                        <Input list="budget" name="budget" id="budgets" />
                        <Datalist id="budget" >
                            <option value="$1000 or Less" />
                            <option value="$5000" />
                            <option value="$10000" />
                            <option value="$15000 or More" />
                        </Datalist>
                    </InputCon>
                </InputDiv>
                
                <TextAreaCon>
                    <Label>Massege</Label>
                    <TextArea rows='10'></TextArea>
                </TextAreaCon>
            </Form>
            <FormBtn>Submit</FormBtn>
        </Wrapper>
    </Container>
  )
}

export default Project;