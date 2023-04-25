import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile2, tab } from '../responsive';
import axios from 'axios';

const Container = styled.div`
    
`;

const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  background-color: green;
  border: 2px solid #333;
  border-radius: 8px;
  box-shadow: -3px 3px 5px #333;
  
  ${tab({
    width: '80%',
  })}

  ${mobile2({
    width: '96%'
  })}
`;
const QuoteTitle = styled.h2`
  text-align: center;
  color: white;
  font-weight: 300;
  margin-top: 30px;
  text-shadow: -1px 1px 1px #000;
`;
const Input = styled.input`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  width: 88%;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
`;
const Button = styled.button`
width: 150px;
padding: 10px;
font-size: 18px;
font-weight: 600;
display: block;
margin: 10px auto;
cursor: pointer;
border-radius: 5px;
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
`;

const QForm = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contact: '',
    address: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://ngap.onrender.com/api/quote', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
    window.alert("Thank you for requesting a quote, Please wait for confirmation.");
    window.location.reload();
  };
  
  

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
          <QuoteTitle>Quote</QuoteTitle>
            <Input placeholder="name" type="text" name="username" required
            value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })}/>
            
            <Input placeholder="email" type="email" name="email" required
            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>

            <Input placeholder="contact" type="contact" name="contact" required
            value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })}/>

            
            <Input placeholder="address" type="address" name="address" required
            value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })}/>

            <Button onSubmit={handleSubmit} type="submit">GET QUOTE</Button>
          </Form>
    </Container>
  )
}

export default QForm