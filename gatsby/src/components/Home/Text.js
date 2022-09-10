import React from "react";
import styled from "styled-components";
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    Move,
    Sticky,
  } from "react-scroll-motion";

const Text = () => {
    const FadeUp = batch(Fade(), Move(), Sticky());

    function scrollYByVh() {
        const clientHeight=window.innerHeight;
        window.scrollBy(0, clientHeight);
      }

    return(
        <TextContainer>
            <div className='containerGradient'>
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
            <div className="contenedor">
                <div className="nav">
                    <div className="insta">
                         <a target='_blank'  rel="noreferrer" href="https://www.instagram.com/miralasflores.mx/"><span>SÍGUENOS EN</span>
                            <img src='/insta.svg' alt='Mira Las Flores Instagram' />
                         </a>
                    </div>
                    <div className="logo">
                        <img src='/logo.svg' alt='Mira Las Flores' />
                    </div>
                    <div className="video">
                        <a href="https://vimeo.com/748356576" target='_blank'  rel="noreferrer">
                            <span>ver video</span>
                            <img src='/flechaDer.svg' alt='Mira Las Flores' />
                        </a>
                    </div>
                </div>
                <button className="desliza" onClick={scrollYByVh}>
                    <span>DESLIZA HACIA ABAJO</span>
                    <img src='./flechaAb.svg' alt='Flecha abajo' />
                </button>
                <ScrollContainer >
                    <ScrollPage page={0}>
                        <Animator animation={FadeUp}>
                            <h1>En el mes mundial para la prevención del suicidio</h1>
                        </Animator>
                    </ScrollPage>
                    
                    <ScrollPage page={1}>
                        <Animator animation={FadeUp}>
                            <h2>Queremos mandar un mensaje de esperanza</h2>
                        </Animator>
                    </ScrollPage>
                    
                    <ScrollPage page={2}>
                        <Animator animation={FadeUp}>
                            <h2>A todos aquellos que estén pasando por un momento difícil</h2>
                        </Animator>
                    </ScrollPage>
                    
                    <ScrollPage page={3}>
                        <Animator animation={FadeUp}>
                            <h2>Y te necesitamos para llegar a ellos</h2>
                        </Animator>
                    </ScrollPage>
                    
                </ScrollContainer>
            </div>
        </TextContainer>
    )
}

const TextContainer = styled.section`
position: relative;
.contenedor {
    .nav {
        position: fixed;
        top: 50px;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        width: 100%;
        @media (max-width: 850px) {
            flex-direction: column;
        }
        .insta {
            margin-left: 50px;
            background: white;
            height: fit-content;
            padding: 10px 20px;
            border-radius: 20px;
            transition: transform 100ms ease-in;
            cursor: pointer;
            &:hover {
                transform: scale(1.05);
            }
            a {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #EB884B;
                span {
                line-height: 0;
                margin-right: 10px;
                }
                img {
                    width: 20px;
                }
            } 
        }
        .logo {
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 40%;
        }
        .video {
            margin-right: 50px;
            background: white;
            height: fit-content;
            padding: 10px 20px;
            border-radius: 20px;
            transition: transform 100ms ease-in;
            cursor: pointer;
            &:hover {
                transform: scale(1.05);
            }
            a {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #EB884B;
                span {
                    line-height: 0;
                    margin-right: 10px;
                    color: #D24D37;
                    text-transform: uppercase;
                }
                img {
                    width: 20px;
                }
            } 
        }
    }
    .desliza {
        position: fixed;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        display: flex;
        flex-direction: column;
        text-align: center;
        cursor: pointer;
        z-index: 1;
        img {
            width: 40px;
            text-align: center;
            margin: 20px auto;
        }
    }
    h2, h1 {
        width: 80vw;
        font-family: "allotrope",sans-serif;
        /* or 108% */
        font-size: 7vw;
        text-align: center;

        color: #FFFFFF; 
        text-transform: uppercase;
    }
}
.containerGradient {
    position: fixed;
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


export default Text