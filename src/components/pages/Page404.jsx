import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Page404 = () => {
  return (
    
    <Wrapper>
    <Title> 404 </Title>

    <Link to="/"> Go to home page</Link>
   
    </Wrapper>
 
  )
}


const Wrapper = styled.div`
width: 100wv;
height:2000px;
background-color: black;
`; 

const Title= styled.h1`
color:red;
font-size:10rem;
`

export default Page404

