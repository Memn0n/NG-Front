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
  height: 260px;
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
  height: 250px;
 
`;

const Cctv = () => {

  
  return (
    <Container>
        <Heading>CCTV</Heading>
        <Motto>your security is our number 1 priority</Motto>

        <CctvProducts>
          <CProCont>
            <Image src='https://i.ibb.co/r2Bjjd6/IMG-20230507-WA0004.jpg'/>
          </CProCont>
          <CProCont>
            <Image src='https://i.ibb.co/bXHTSRJ/IMG-20230507-WA0008.jpg'/>
          </CProCont>
          <CProCont>
            <Image src='https://i.ibb.co/nkh4df3/IMG-20230507-WA0003.jpg'/>
          </CProCont>
          <CProCont>
            <Image src='https://i.ibb.co/mN3rHKF/IMG-20230507-WA0006.jpg'/>
          </CProCont>
          <CProCont>
            <Image src='https://i.ibb.co/YpkTLSV/IMG-20230507-WA0011.jpg'/>
          </CProCont>
          <CProCont>
            <Image src='https://i.ibb.co/Y7VCnBT/51a012850d86f62925c8869bba7f6054.jpg'/>
          </CProCont>
        </CctvProducts>
        
        <QForm/>

    </Container>
  )
}

export default Cctv