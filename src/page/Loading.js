import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Loading = () => {

 return (
    <SpinnerWrapper>
   <ClipLoader color={"#2b303b"} size={150} />
   </SpinnerWrapper>
 )
}

export default Loading

const SpinnerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`