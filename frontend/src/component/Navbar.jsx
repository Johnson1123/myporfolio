import React from 'react'
import styled from 'styled-components'
import logo from '../asset/favicon.png'
const Container = styled.div`
    width: 85%;
    height: 100px;
    padding: 1rem 1rem;
    overflow: hidden;
    @media only screen and (max-width: 767px) {
      width: 95%;
    }
`
const Wrapper = styled.div`
    padding: 10px 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 900px) {
      padding: 20px 0;
    }
`
const Left = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Right = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
`
const LinkImg = styled.a`
    text-decoration: none;
    cursor: pointer;
`
const Logo = styled.img`
  height: 40px;
`
const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`
const Navlist = styled.a`
  border: none;
  background: none;
  margin-right: 1rem;
  padding: 0 .5rem;
  font-size: 20px;
  font-weight: 500;
  color: #3C79F5;
  &:hover, &:active{
    color: #d3d3d3;
  }
`
const Sayhello = styled.a`
  background: transparent;
  padding: .4rem 1rem;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid #3C79F5;
  margin-left: auto;
  margin-top: .4rem;
  text-decoration: none;
  color: #3C79F5;
  cursor: pointer;
  &:hover{
    background: #3C79F5;
    color: #fff;
  }
  @media only screen and (max-width: 767px) {
    padding: .5rem 1rem;
  }
`
export default function Navbar() {
  return (
    <Container>
        <Wrapper>
          <Left>
            <LinkImg href='/'><Logo src={logo} /></LinkImg>
            <Nav>
              <Navlist href='#profile'>Author</Navlist>
              <Navlist href='#skills'>Skills</Navlist>
              <Navlist href='#Work'>Works</Navlist>
              <Navlist href='#testimonial'>Testimonial</Navlist>
            </Nav>
          </Left>
          <Right>
            <Sayhello href='/contact'>Say Hello</Sayhello>
          </Right>
        </Wrapper>
    </Container>
  )
}
