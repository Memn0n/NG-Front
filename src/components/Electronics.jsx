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
const EleCont = styled.div`
    width: 350px;
    height: 500px;
    margin: 20px;
    background-color: darkorange;
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
background-color:  white;
color: #333;
transition: 0.3s ease;
text-decoration: none;

&:hover {
  background-color: #000;
  color: khaki;
}
`;



const Electronics = () => {
  return (
    <Container>
        <Heading>ELECTRONICS</Heading>
        <Motto>reliable power backups</Motto>
        <Wrapper>
            <EleCont>
                <Image src='https://i.ibb.co/Gd6CmQR/172c5a66900994c190862a87326cb7aa.jpg'/>
                <Info>
                    <Title>Router power backup</Title>
                    <Price>R850</Price>
                    <Button href='https://gumtree.co.za/a-other-electronics/roodepoort/wifi-power-backup-ups/10012013057031013115434709' target='_blank'>
                        ORDER NOW</Button>
                </Info>
            </EleCont>

            <EleCont>
                <Image src='https://i.ibb.co/4mkPv59/a7c111c874a1ced2f611c1c1b8b4da80.jpg'/>
                <Info>
                    <Title>UPS Inverter 120000mAh</Title>
                    <Price>R5000</Price>
                    <Button href="https://gumtree.co.za/a-generators-solar-power/roodepoort/lithium-battery-ups/10012013061471013115434709" target='_blank'>
                        ORDER NOW</Button>
                </Info>
            </EleCont>

            <EleCont>
                <Image src='https://i.ibb.co/TBgFXKr/pexels-markus-winkler-4072683.jpg'/>
                <Info>
                    <Title>Power Bank 40000mAh</Title>
                    <Price>R1000</Price>
                    <Button href='https://gumtree.co.za/a-other-electronics/roodepoort/power-bank/10012013016921013115434709' target='_blank'>
                        ORDER NOW</Button>
                </Info>
            </EleCont>
        </Wrapper>
    </Container>
  )
}

export default Electronics