import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data';
import { bigtab, mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    margin-top: 8px;
    width: 99%;
    height: 88vh;
    display: flex;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: -3px 3px 5px #333;

    ${mobile({
      width: "97%",
      height: '480px'
    })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=> props.slideIndex *  -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 89vh;
  display: flex;
  align-items: center;
  background: #${props => props.bg};

  ${bigtab({
    display: "block",
    background: `${props => props.bg2}`,
  })}
`;
const ImgContainer = styled.div`
  height: 100%;
  flex:1;

  ${bigtab({
    display: "none",
  })}
`;
const Image = styled.img`
  height: 100%;
`;
const InfoContainer = styled.div`
  flex:1;
  padding: 50px;
  margin-top: -50px;
  margin-left: -100px;

  ${bigtab({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "0",
    padding: "0",
    position: "relative",
  })}
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 400;
  color: #7fffd3;
  text-shadow: -3px 3px 5px #000;

  ${mobile({
    fontSize: "40px",
    marginTop: "20px"
  })}
`;
const ImgContainer2 = styled.div`
  display: none;

  ${bigtab({
    display: "block",
    marginTop: "20px"
  })}
`;
const Image2 = styled.img`
  width: 100px;
  height 100px;
`;
const Desc = styled.p`
  width: 80%;
  color: #fff;
  font-size: 24px;
  text-shadow: -3px 3px 4px #000;
  padding: 10px;
  border-radius: 10px;
  text-decoration: underline;
  letter-spacing: 3px;
  background-color: #333;

  ${mobile({
    fontSize: "20px",
    marginTop: "20px"
  })}
`;
const Button = styled.button`
width: 150px;
padding: 10px;
font-size: 18px;
font-weight: 600;
margin-left: 10px;
margin-top: 20px;
cursor: pointer;
border-radius: 8px;
border-width: 0.5px;
border-color: transparent;
box-shadow: -2px 2px 1px #333; 
background-color:  #00fff;
color: #333;
transition: 0.3s ease;

&:hover {
  background-color: #000;
  color: khaki;
}

${mobile({
  fontSize: "20px",
  marginTop: "20px"

})}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((slideIndex) => (slideIndex < 2 ? slideIndex + 1 : 0));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg} bg2={item.bg2}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <ImgContainer2>
                <Image2 src={item.img2}/>
              </ImgContainer2>
              <Desc>{item.desc}</Desc>
              <Link to="/contact"><Button>{item.button}</Button></Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
    </Container>
  );
};
export default Slider;