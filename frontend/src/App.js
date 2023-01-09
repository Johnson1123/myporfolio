import React from "react";
import styled from 'styled-components'
import Footer from "./component/Footer";
import Intro from "./component/Intro";
import Navbar from "./component/Navbar";
import Profile from "./component/Profile";
import Recentwork from "./component/Recentwork";
import Testimonial from "./component/Testimonial";
import Works from "./component/Works";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 900px) {
    height: auto;
    min-height: 50vh;
  }
`

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
      </Container>
      <Container>
        <Profile />
      </Container> 
      <Container>
        <Works />
      </Container> 
      <Container>
        <Recentwork />
      </Container>
      <Container>
        <Testimonial />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
