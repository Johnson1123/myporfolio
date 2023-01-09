import React from 'react'
import styled from 'styled-components'
import { images } from '../asset'
import { FaAngleRight } from 'react-icons/fa'


const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 900px) {
        height: 120vh;
        align-items: center;
    }
`
const Wrapper = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 900px) {
        margin-top: 200px;
    }
`
const HeaderText = styled.h2`
    line-height: 2;
    margin-top: 20px;
    font-size: 30px;
`
const RecentText = styled.p`
    font-size: 20px;
    color: #111;
    margin-top: 10px;
    font-weight: 500;
    @media only screen and (max-width: 900px) {
        font-size: 18px;
    }
`
const EmailMe = styled.a`
    text-decoration: none;
`
const WorkContainer = styled.div`
    padding: 1rem;
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    @media only screen and (max-width: 900px) {
        padding: 20px 0;
    }
`
const WorkBox = styled.div`
    width: 32%;
    height:220px;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    &:hover {
        .hover__box{
            display: flex;
        }
    }
    @media only screen and (max-width: 900px) {
        width: 48%
    }
`
const WorkImg = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    object-fit: fill;
`
const BoxTextCon = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(108, 0, 255, .8);
`
const BoxText = styled.h3`
    font-size: 20px;
    color: #111;
    margin-top: 10px;
    font-weight: 600px;
    color: #fff;
`
const HoverBox = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 1rem;
    left: 0;
    top: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #141c3a;
    display: none;
`
const HoverText = styled.p`
    font-size: 20px;
    margin-top: 10px;
    font-weight: 600px;
    color: #fff;
    text-align: center;
    @media only screen and (max-width: 900px) {
        font-size: 16px;
    }
`
const HoverLink = styled.a`
    margin-top: 30px;
    color: #fff;
    text-decoration: none;
    letter-spacing: 1.2px;
    background: transparent;
    padding: .6rem 1.2rem;
    border: 1px solid #6C00FF;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        background: #6C00FF;
    }
    svg{
        margin-left: 3px;
        margin-top: 3px;
    }
`

const Recentwork = () => {
  return (
    <Container>
        <Wrapper>
            <HeaderText>My Recent Works</HeaderText>
            <RecentText>
                Here are a few past design projects I've worked on. Want to see more? 
                <EmailMe href='mailto:onifadejohnson2017@gmail.com'> Email me</EmailMe>
            </RecentText>
            <WorkContainer>
                <WorkBox>
                    <WorkImg src={images.fabrics} />
                    <BoxTextCon>
                        <BoxText>Fabrics & Clothe Website</BoxText>
                    </BoxTextCon>
                    <HoverBox className='hover__box'>
                        <HoverText>
                            Awesome Website to order your breakfast, lunch and dinner with 
                            functionality to setup food roater
                        </HoverText>
                        <HoverLink>Visit Website <FaAngleRight /></HoverLink>
                    </HoverBox>
                </WorkBox>
                <WorkBox>
                    <WorkImg src={images.food} />
                    <BoxTextCon>
                        <BoxText>Food Ordering Website</BoxText>
                    </BoxTextCon>
                    <HoverBox className='hover__box'>
                        <HoverText>
                            Awesome Website to order your breakfast, lunch and dinner with 
                            functionality to setup food roater
                        </HoverText>
                        <HoverLink>Visit Website <FaAngleRight /></HoverLink>
                    </HoverBox>
                </WorkBox>
                <WorkBox>
                    <WorkImg src={images.blog} />
                    <BoxTextCon>
                        <BoxText>Blog & News Website</BoxText>
                    </BoxTextCon>
                    <HoverBox className='hover__box'>
                        <HoverText>
                            Awesome Website to order your breakfast, lunch and dinner with 
                            functionality to setup food roater
                        </HoverText>
                        <HoverLink>Visit Website <FaAngleRight /></HoverLink>
                    </HoverBox>
                </WorkBox>
                <WorkBox>
                    <WorkImg src={images.furnitures} />
                    <BoxTextCon>
                        <BoxText>Furnitures & Chairs Website</BoxText>
                    </BoxTextCon>
                    <HoverBox className='hover__box'>
                        <HoverText>
                            Awesome Website to order your breakfast, lunch and dinner with 
                            functionality to setup food roater
                        </HoverText>
                        <HoverLink>Visit Website <FaAngleRight /></HoverLink>
                    </HoverBox>
                </WorkBox>
                <WorkBox>
                    <WorkImg src={images.groceries} />
                    <BoxTextCon>
                        <BoxText>Groceries & Mall Website</BoxText>
                    </BoxTextCon>
                    <HoverBox className='hover__box'>
                        <HoverText>
                            Awesome Website to order your breakfast, lunch and dinner with 
                            functionality to setup food roater
                        </HoverText>
                        <HoverLink>Visit Website <FaAngleRight /></HoverLink>
                    </HoverBox>
                </WorkBox>
                <WorkBox>
                    <WorkImg src={images.ecommerce} />
                    <BoxTextCon>
                        <BoxText>Ecommerce Website</BoxText>
                    </BoxTextCon>
                    <HoverBox className='hover__box'>
                        <HoverText>
                            Awesome Website to order your breakfast, lunch and dinner with 
                            functionality to setup food roater
                        </HoverText>
                        <HoverLink>Visit Website <FaAngleRight /></HoverLink>
                    </HoverBox>
                </WorkBox>
            </WorkContainer>
        </Wrapper>
    </Container>
  )
}

export default Recentwork