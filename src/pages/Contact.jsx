import styled from "styled-components"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { bigtab, mobile, mobile2, tab} from "../responsive";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Container = styled.div``;
const Title = styled.h1`
    font-size: 50px;
    font-weight: 400;
    text-align: center;
    text-shadow: -3px 3px 5px #333;

    ${tab({
        fontSize: '34px'
    })}
`;
const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;

  ${bigtab({flexDirection: "column"})};
`;
const Left = styled.div` 
  width: 30%;
  ${bigtab({width: "60%", margin: "20px auto"})};
  ${mobile({width: "90%"})};
  ${mobile2({width: "96%"})};
`;
const H1 = styled.h1`
  font-weight: 300;
`;
const H2 = styled.h2`
  font-weight: 300;
`;
const H3 = styled.h3``;
const Dets = styled.div`
`;
const Li = styled.li`
display: flex;
justify-content: space-between;
`;
const P = styled.p`
`;
const Right = styled.div`
  width: 100%
  ${bigtab({width: "100%", margin: "20px auto"})};
`;
const Iframe = styled.iframe`
`;

const Contact = () => {
  return (
    <Container>
      <Navbar/>
      <Title>#contactUS</Title>
      <ContactContainer>
        <Left>
          <H1>GET IN TOUCH</H1>
          <H2>Visit one of our agency locations or contact us today</H2>
          <H3>Head Offices</H3>
          <Dets>
            <Li>
              <FaMapMarkerAlt/>
              <P>Johannesburg, Gauteng</P>
            </Li>
            <Li>
              <FaEnvelope/>
              <P>nyakameragroup@gmail.com</P>
            </Li>
            <Li>
              <FaPhone/>
              <P>+27 81 430 7404</P>
            </Li>
            <Li>
              <FaClock/>
              <P>Monday to Saturday: 09:00 to 19:00</P>
            </Li>
          </Dets>
        </Left>
        <Right>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d114584
            .73585386139!2d28.04002455!3d-26.1715215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1669386971509
            !5m2!1sen!2sza" width="100%" height="450"  allowfullscreen="" loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></Iframe>
        </Right>
      </ContactContainer>
      <Footer/>
    </Container>
  )
}

export default Contact