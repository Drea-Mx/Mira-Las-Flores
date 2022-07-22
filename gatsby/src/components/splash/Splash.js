import React from 'react'
import styled from 'styled-components'

const Splash = () => {
    return(
        <SplashContainer>
            <div className='container'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='centro'>
                <img src='/logo.svg' alt='Mira Las Flores' />
                <p>Próximamente</p>
            </div>
        </SplashContainer>
    )
}

const SplashContainer = styled.section`
position: relative;
height: 100vh;
width: 100vw;
.centro {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    text-align: center;
    width: 60%;
    color: white;
    @media (max-width: 680px) {
            width: 80%;
        }
    p {
        text-transform: uppercase;
        letter-spacing: 20px;
        margin-top: 20px;
        @media (max-width: 680px) {
            letter-spacing: 8px;
        }
    }
}
.container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
    &::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        backdrop-filter: blur(80px);
    }
    div {
        position: absolute;
        border-radius: 50%;
        animation: gradient 4s infinite;
        &:nth-child(1) {
            height: 90%;
            width: 80%;
            background-color: #E8D61E;
            left: -50%;
            top: -60%;
            z-index: -7;
        }
        &:nth-child(2) {
            height: 80%;
            width: 70%;
            bottom: -52%;
            left: -40%;
            animation-delay: 2s;
            background-color: #E8AF22;
            z-index: -8;
        }
        &:nth-child(3) {
            height: 105%;
            width: 100%;
            bottom: 15%;
            left: -50%;
            animation-delay: 0.3s;
            background-color: #EE2A63;
            z-index: -9;
        }
        &:nth-child(4) {
            height: 80%;
            width: 35%;
            bottom: 40%;
            left: 28%;
            animation-delay: 1.2s;
            background-color: #F27DAA;
            z-index: -9;
        }
        &:nth-child(5) {
            height: 100%;
            width: 60%;
            bottom: -52%;
            right: -22%;
            animation-delay: 2s;
            background-color: #EE382C;
            z-index: -9;
        }
        &:nth-child(6) {
            height: 65%;
            width: 30%;
            bottom: 15%;
            right: 25%;
            animation-delay: 0.3s;
            background-color: #B6499B;
            z-index: -1;
        }
        &:nth-child(7) {
            height: 50%;
            width: 25%;
            bottom: -10%;
            left: 50%;
            animation-delay: 1.2s;
            background-color: #B42073;
            z-index: -2;
        }
        &:nth-child(8) {
            width: 60%;
            height: 80%;
            top: -15%;
            right: -12%;
            animation-delay: 2s;
            background-color: #E04038;
            z-index: -9;
        }
        &:nth-child(9) {
            height: 65%;
            width: 50%;
            bottom: -15%;
            right: 40%;
            animation-delay: 0.3s;
            background-color: #DB2127;
            z-index:-10;
        }
        &:nth-child(10) {
            height: 50%;
            width: 25%;
            top: 10%;
            left: 10%;
            animation-delay: 1.2s;
            background-color: #B42073;
            z-index: -1;
        }
    }
}
@keyframes gradient{
    70%{
        transform: scale(1.2) translate(50px);
    }
}
`

export default Splash