import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 50px;
`;

const Heading = styled.h1`
    font-size: 40px;
    text-align: center;
    font-weight: 300;
    color: #333;
    text-shadow: -2px 2px 4px #333;
`;

const Motto = styled.p`
    font-size: 18px;
    text-align: center;
    color: orange;
    text-decoration: underline;
    margin-top: -30px;
    margin-bottom: 30px;
    text-shadow: -1px 1px 1px #000;
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;
const LiCont = styled.div`
    width: 350px;
    height: 500px;
    margin: 20px;
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #fff;
    box-shadow: -3px 3px 5px #000;
`;
const Image = styled.img`
    width: 98%;
    height: 320px;
    margin-top: 4px;
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h2`
    font-weight: 300;
    color: #fff;
`;
const Price = styled.p`
    font-size: 20px;
    color: #fff;
    text-align: center;
    margin-top: -10px;
`;

const Button = styled.a`
padding: 5px;
font-size: 18px;
font-weight: 400;
cursor: pointer;
border-radius: 5px;
border-width: 0.5px;
border-color: transparent;
box-shadow: -2px 2px 1px #000; 
background-color: white;
color: #333;
transition: 0.3s ease;
text-decoration: none;

&:hover {
  background-color: #000;
  color: khaki;
}
`;



const Lights = () => {
  return (
    <Container>
        <Heading>LIGHTS</Heading>
        <Motto>light up your home during loadshedding</Motto>
        <Wrapper>

            <LiCont>
                <Image src='https://i.ibb.co/S3v3Wcn/pro5.jpg'/>
                <Info>
                    <Title>Rechargeable lights 60w</Title>
                    <Price>R200</Price>
                    <Button href='https://www.gumtree.co.za/a-chandeliers-hanging-lights/roodepoort/rechargeable-bulb-60w/10012045040181013115434709' target='_blank'> 
                        ORDER NOW</Button>
                </Info>
            </LiCont>

            <LiCont>
                <Image src='https://i.ibb.co/hRRZjPV/pro13.jpg'/>
                <Info>
                    <Title>Rechargeable bulb 40w</Title>
                    <Price>R100</Price>
                    <Button href='https://www.gumtree.co.za/a-chandeliers-hanging-lights/roodepoort/rechargeable-bulb-40w/10012045034161013115434709' target='_blank'>
                        ORDER NOW</Button>
                </Info>
            </LiCont>

            <LiCont>
                <Image src='https://i.ibb.co/hRRZjPV/pro13.jpg'/>
                <Info>
                    <Title>Rechargeable bulb 12w</Title>
                    <Price>R55</Price>
                    <Button href='https://www.gumtree.co.za/a-chandeliers-hanging-lights/roodepoort/rechargeable-bulb/10012045030141013115434709' target='_blank'>
                        ORDER NOW</Button>
                </Info>
            </LiCont>

            <LiCont>
                <Image src='https://i.ibb.co/xgb5Xcy/pro6.jpg'/>
                <Info>
                    <Title>Solar lights 100w</Title>
                    <Price>R850</Price>
                    <Button href='https://www.gumtree.co.za/a-solar-powered-electronics/roodepoort/solar-lights-100w/10012045035641013115434709' target='_blank'>
                        ORDER NOW</Button>
                </Info>
            </LiCont>

            <LiCont>
                <Image src='https://i.ibb.co/g93nW3x/pro7.jpg'/>
                <Info>
                    <Title>Solar lights 200w</Title>
                    <Price>R1050</Price>
                    <Button href='https://www.gumtree.co.za/a-solar-powered-electronics/roodepoort/solar-lights-200w/10012045048231013115434709' target='_blank'>
                        ORDER NOW</Button>
                </Info>
            </LiCont>

            <LiCont>
                <Image src='https://i.ibb.co/vvBw1kj/pro8.jpg'/>
                <Info>
                    <Title>Solar lights 300w</Title>
                    <Price>R1300</Price>
                    <Button href='https://www.gumtree.co.za/a-solar-powered-electronics/roodepoort/solar-lights-300w/10012045046151013115434709' target='_blank'>
                        ORDER NOW</Button>
                </Info>
            </LiCont>
        </Wrapper>
    </Container>
  )
}

export default Lights