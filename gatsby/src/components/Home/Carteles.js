import React from "react";
import styled from "styled-components";
import SliderCarr from "./SliderCarr";

const Carteles = () => {
    return(
        <CartelesContainer>
            <div className="nav">
                <div className="insta">
                        <a target='_blank' rel="noreferrer" href="https://www.instagram.com/miralasflores.mx/"><span>SÍGUENOS EN</span>
                        <img src='/insta.svg' alt='Mira Las Flores Instagram' />
                        </a>
                </div>
                <div className="logo">
                    <img src='/logoColors.png' alt='Mira Las Flores' />
                </div>
                <div className="video">
                    <button>
                        <span>ver video</span>
                        <img src='/flechaDer.svg' alt='Mira Las Flores' />
                    </button>
                </div>
            </div>
            <div className="contenido">
                <h1>Con la ayuda de 10 diseñadorxs creamos una serie de pósters con mensajes de esperanza</h1>
                <p className="description">Estos pósters están en formato story y post para que puedas compartirlo en tus redes sociales, y también si alguno te gusta esta disponible en formato tabloide para que lo descargues e imprimas.</p>
                <SliderCarr />
            </div>
        </CartelesContainer>
    )
}

const CartelesContainer = styled.section`
padding-top: 50px;
    background-color: #F5F5F5;
    position: relative;
    z-index: 3;
    padding-bottom: 100px;
    .contenido {
        margin-top: 200px;
        color: #EE4069;
        text-align: center;
        h1 {
            font-size: 5vw;
            font-family: "allotrope",sans-serif;
            width: 80%;
            margin: 0 auto 50px;
        }
        p.description {
            font-size: 2rem;
            width: 80%;
            margin: 0 auto 50px;
        }
    }
    .nav {
        position: sticky;
        top: 50px;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        width: 100%;
        .insta {
            margin-left: 50px;
            background: #EE4069;
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
                color: white;
                span {
                line-height: 0;
                margin-right: 10px;
                }
                img {
                    width: 20px;
                    filter: brightness(100);
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
            background: #BE2B63;
            height: fit-content;
            padding: 10px 20px;
            border-radius: 20px;
            transition: transform 100ms ease-in;
            cursor: pointer;
            &:hover {
                transform: scale(1.05);
            }
            button {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #EB884B;
                span {
                    line-height: 0;
                    margin-right: 10px;
                    color: white;
                    text-transform: uppercase;
                }
                img {
                    width: 20px;
                    filter: brightness(100);
                }
            } 
        }
    }
`

export default Carteles