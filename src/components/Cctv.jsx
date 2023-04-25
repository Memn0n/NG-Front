import styled from 'styled-components';
import QForm from './QForm';


const Container = styled.div``;
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

const CctvProducts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const CProCont = styled.div`
  width: 350px;
  height: 240px;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 20px;
  box-shadow: -3px 3px 5px #000;
`;
const Image = styled.img`
  width: 320px;
  height: 230px;
 
`;

const Cctv = () => {

  
  return (
    <Container>
        <Heading>CCTV</Heading>
        <Motto>your security is our number 1 priority</Motto>

        <CctvProducts>
          <CProCont>
            <Image src='https://i.ibb.co/Ptt1Gqh/653674d925715625eef90c9a6a4dc778.jpg'/>
          </CProCont>
          <CProCont>
            <Image src='https://i.ibb.co/0XBQ4XG/76aeb9ccbb1132ad2eb52d329955b3c0.jpg'/>
          </CProCont>
          <CProCont>
            <Image src='https://i.ibb.co/kMKnjQZ/2bef46f17924ccdcdbc9b8083f31b384.jpg'/>
          </CProCont>
          <CProCont>
            <Image src='https://i.ibb.co/G9wNrP3/f8fca4e0601e4060a824d819e910ec86.jpg'/>
          </CProCont>
          <CProCont>
            <Image src='https://i.ibb.co/xDBXCqt/eaf01d97d3fb04f51cd7b9fbaa0bc55c.jpg'/>
          </CProCont>
          <CProCont>
            <Image src='https://i.ibb.co/VgQcLmR/IMG-20230410-124619.jpg'/>
          </CProCont>
        </CctvProducts>
        
        <QForm/>

    </Container>
  )
}

export default Cctv