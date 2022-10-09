import React, { useEffect, useState } from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import styled from 'styled-components';

function BackTotop() {
   const [backToTop, setBackToTop] = useState(false)

   useEffect(() => {
     window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            setBackToTop(true)
        } else {
            setBackToTop(false)
        }
     })
   }, [])

   const scroll = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
   }
 
  return (
     <Wrapper>
        {backToTop && (
                <ArrowCircleUpIcon 
                onClick={scroll}
                className='top-button'/>
        )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
 .top-button {
    position: fixed;
    bottom: 15%;
    right: 5%;
    color: white;
    font-size: 43px;
 }
`

export default BackTotop