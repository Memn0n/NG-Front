import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { tab } from '../responsive';

const Container = styled.div``;

const Heading = styled.h1`
    font-size: 50px;
    font-weight: 400;
    text-align: center;
    text-shadow: -3px 3px 5px #333;

    ${tab({
        fontSize: '34px'
    })}
`;
const Main = styled.div`
    display: flex;
    
    ${tab({
        flexDirection: 'column'
    })}
`
const Mainleft = styled.p`
    width: 40%;
    padding: 20px;
    font-size: 20px;
    border-radius: 8px;
    margin: 20px 0;
    text-shadow: -1px 1px 2px #333;

    ${tab({
        width: '90%',
        margin:'20px',
        padding: '0',
        textAlign:'center',
        marginRight:'auto',
        marginLeft:'auto'
    })}
`;

const Mainright = styled.div`
   ${tab({
        justifyContent:"center",
        alignItems:"center",
        marginRight:'auto',
        marginLeft:'auto',
        marginTop:'-30px'
   })}
`;
const MainImage = styled.img`
width: 500px;
height: 400px;

${tab({
    width: '350px',
    height: '250px'
})}
`; 
const Hr = styled.hr`
    width: 88%;
    margin-letf: auto;
    margin-right: auto;
`;

const Cctv = styled.div`
    display: flex;

    ${tab({
        flexDirection: 'column'
    })}
`;
const CctvLeft = styled.div`
    width: 50%;

    ${tab({
        width: '90%',
        margin:'20px',
        padding: '0',
        textAlign:'center',
        marginRight:'auto',
        marginLeft:'auto'
    })}
`;
const CctvLeftTitle = styled.h2`
    font-size: 28px;
    font-weight: 400;
    text-align: center;
    text-shadow: -2px 2px 3px #333;
`;
const CctvLeftText = styled.p`
padding: 20px;
font-size: 20px;
border-radius: 8px;
margin: 20px 0;
text-shadow: -1px 1px 2px #333;


`;

const CctvRight = styled.div`
    width: 50%;
    margin: 100px 0 0 100px;

    ${tab({
        width: '90%',
        justifyContent:"center",
        alignItems:"center",
        marginRight:'auto',
        marginLeft:'auto',
        marginTop:'-30px'
   })}
`;
const CctvRightImgContainer = styled.div`
    width: 400px;
    height: 350px;
    margin-bottom: 50px;
    box-shadow: -3px 3px 3px #333;

    ${tab({
        width: '350px',
        height: '300px'
    })}
`;
const CctvImg = styled.img`
    width: 400px;
    height: 350px;
    
    ${tab({
        width: '350px',
        height: '300px'
    })}
`;






const Lights = styled.div`
    display: flex;

    ${tab({
        flexDirection: 'column'
    })}
`;
const LightsLeft = styled.div`
    width: 50%;

    ${tab({
        width: '90%',
        margin:'20px',
        padding: '0',
        textAlign:'center',
        marginRight:'auto',
        marginLeft:'auto'
    })}
`;
const LightsLeftTitle = styled.h2`
    font-size: 28px;
    font-weight: 400;
    text-align: center;
    text-shadow: -2px 2px 3px #333;
`;
const LightsLeftText = styled.p`
padding: 20px;
font-size: 20px;
border-radius: 8px;
margin: 20px 0;
text-shadow: -1px 1px 2px #333;
`;

const LightsRight = styled.div`
    width: 50%;
    margin: 100px 0;

    ${tab({
        width: '90%',
        justifyContent:"center",
        alignItems:"center",
        marginRight:'auto',
        marginLeft:'auto',
        marginTop:'-30px'
   })}
`;
const LightsRightImgContainer = styled.div`
    width: 400px;
    height: 350px;
    margin-bottom: 50px;
    box-shadow: -3px 3px 3px #333;

    ${tab({
        width: '350px',
        height: '300px'
    })}
`;
const LightsImg = styled.img`
    width: 400px;
    height: 350px;

    ${tab({
        width: '350px',
        height: '300px'
    })}
`;

const About = () => {
  return (
    <Container>
        <Navbar/>
        <Heading>#KnowAllAboutUs</Heading>
        <Main>
        <Mainleft>
            NG Electronics & Installations was founded in 2022, a company that trades in three domains,
            CCTVs, Electronics and Lights. Our main route of trade is online as the company is still in its
            early stages of business. Our short term goal is to become the leader of installations in 
            surveillance systems around the province of Gauteng. With steady growth, we look to expand to
            other provinces in the space of 12 months. And behind the scenes the company is working hard to
            tackle the issue of unemployment that is crippling the economy of the country. We are
            determined to create jobs as the company grows. 
        </Mainleft>
        <Mainright>
        <MainImage src='https://i.ibb.co/FXWnfGk/My-project-2.png'/>
        </Mainright>
        </Main>
        <Hr/>
        <Cctv>
        <CctvLeft>
            <CctvLeftTitle>CCTV</CctvLeftTitle>
            <CctvLeftText>
            Our company offers a wide range of CCTV equipment, including cameras, recorders, and monitoring
            systems, to ensure that your property is secure and protected around the clock. Our team of experts
            can provide you with the latest technology and solutions that meet your specific needs, whether you
            are looking for indoor or outdoor cameras, wired or wireless systems, or high-definition resolution.
            <br/><br/>
            In addition to equipment, our company also specializes in installations, repairs, and maintenance
            services. We have a team of skilled technicians who can install your CCTV system efficiently and
            effectively, ensuring that it is set up correctly and ready to use. We also offer repair services to
            fix any issues that may arise with your CCTV system, including broken cameras, faulty wiring, or
            malfunctioning software.
            <br/><br/>
            Finally, our maintenance services are designed to keep your CCTV system in top working order,
            providing regular check-ups and software updates to ensure that it is always operating at peak
            performance. This includes routine maintenance and cleaning to prevent dust and debris buildup,
            as well as software updates to ensure that your system is always up-to-date with the latest security
            features and capabilities.
            <br/><br/>
            At our company, we are committed to providing you with the best possible CCTV solutions, 
            installations, repairs, and maintenance services. We pride ourselves on our excellent customer 
            service, and our team is always available to answer any questions or concerns you may have. 
            Contact us today to learn more about how we can help you protect your property with our 
            state-of-the-art CCTV equipment and services.
            </CctvLeftText>
        </CctvLeft>
        <CctvRight>
            <CctvRightImgContainer>
                <CctvImg src='https://i.ibb.co/gtqf1Hm/224ab71b53b3eae66e411c811c09cd54.jpg'/>    
            </CctvRightImgContainer>
            <CctvRightImgContainer>
                <CctvImg src='https://i.ibb.co/DY5yQb4/Cam-3.jpg'/>
            </CctvRightImgContainer>
            <CctvRightImgContainer>
                <CctvImg src='https://i.ibb.co/xFx47Wf/Cam-5.jpg'/>
            </CctvRightImgContainer>
        </CctvRight>
        </Cctv>
        <Hr/>

        <Lights>
        <LightsLeft>
            <LightsLeftTitle>Lights</LightsLeftTitle>
            <LightsLeftText>
            Our rechargeable lights are designed to provide reliable illumination without the need for disposable
            batteries. They come with rechargeable batteries that can be charged using a USB cable or a power 
            outlet, making them convenient and easy to use. These lights are perfect for use during power 
            outages, camping trips, and other outdoor activities where access to electricity may be limited.
            <br/><br/>
            In addition to our rechargeable lights, we also offer a range of solar lights that are powered by 
            the sun. These lights come with built-in solar panels that collect energy from the sun during the 
            day and use it to power the lights at night. They are perfect for outdoor lighting, such as garden 
            paths, patios, and driveways, and can help to reduce your energy costs and carbon footprint.
            <br/><br/>
            Our solar lights are available in a range of styles and designs to suit your needs, including motion 
            sensor lights, floodlights, and pathway lights. They are easy to install and require little 
            maintenance, making them a hassle-free lighting solution for your home or business.
            <br/><br/>
            At our company, we are committed to providing you with high-quality, energy-efficient lighting 
            solutions that are both eco-friendly and cost-effective. Our team of experts can help you choose
            the right lighting products to suit your needs, and we are always available to answer any questions 
            or concerns you may have.
            </LightsLeftText>
        </LightsLeft>
        <LightsRight>
            <LightsRightImgContainer>
                <LightsImg src='https://i.ibb.co/T2pBkz3/uy.jpg'/>    
            </LightsRightImgContainer>
            <LightsRightImgContainer>
                <LightsImg src='https://i.ibb.co/2yWXz5D/cnt.jpg'/>
            </LightsRightImgContainer>
            <LightsRightImgContainer>
                <LightsImg src='https://i.ibb.co/f8sS2XH/pic1.jpg'/>
            </LightsRightImgContainer>
        </LightsRight>
        </Lights>
        <Footer/>
    </Container>
  )
}

export default About