import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"


const SliderCarr = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return(
        <SliderContainer>
            <p className="bold title">EXPLORA LOS PÓSTERS</p>
            <Slider {...settings}>
                <div className="slide">
                    <StaticImage
                        src="../../assets/images/andrea.png"
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="FULL_WIDTH"
                    />
                    <div className="info">
                        <p className="lead">DISEÑADO POR Andrea Buendía</p>
                        <p>¡COMPARTE ESTE MENSAJE DE ESPERANZA!</p>
                        <p>DESCARGALO AQUÍ</p>
                        <div className="top">
                            <a href='https://drive.google.com/file/d/1SL0QhI10vEPonVNOAG-pYqM8_lerFr4Y/view?usp=sharing' target='_blank' rel="noreferrer">Story</a>
                            <a href='https://drive.google.com/file/d/1nPuG3_OXQjyEjems12fAtphcGz99OsF0/view?usp=sharing' target='_blank' rel="noreferrer">Post</a>
                        </div>
                        <div className="bot">
                            <a href='https://drive.google.com/file/d/1mDriwdvhhlNSW5CEN_N71nE_TdDGW_qD/view?usp=sharing' target='_blank' rel="noreferrer">IMPRÍMELO</a>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <StaticImage
                        src="../../assets/images/AquiEstoy_Story.jpg"
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="FULL_WIDTH"
                    />
                    <div className="info">
                        <p className="lead">DISEÑADO POR Andrea Balboa</p>
                        <p>¡COMPARTE ESTE MENSAJE DE ESPERANZA!</p>
                        <p>DESCARGALO AQUÍ</p>
                        <div className="top">
                            <a href='https://drive.google.com/file/d/1xC9S6qoums0Obd5QmLbGqSyqK6_XOwMt/view?usp=sharing' target='_blank' rel="noreferrer">Story</a>
                            <a href='https://drive.google.com/file/d/1DsCJBgTIdooPOi_ougezLC-JQI_D1Q7d/view?usp=sharing' target='_blank' rel="noreferrer">Post</a>
                        </div>
                        <div className="bot">
                            <a href='https://drive.google.com/file/d/1FG8yX1RiprShJJj7mjEbepDOfV1vbnuc/view?usp=sharing' target='_blank' rel="noreferrer">IMPRÍMELO</a>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <StaticImage
                        src="../../assets/images/cinthya.jpg"
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="FULL_WIDTH"
                    />
                    <div className="info">
                        <p className="lead">DISEÑADO POR Cinthya Díaz </p>
                        <p>¡COMPARTE ESTE MENSAJE DE ESPERANZA!</p>
                        <p>DESCARGALO AQUÍ</p>
                        <div className="top">
                            <a href='https://drive.google.com/file/d/1Wq0FcWd8YWVOb6A4szjvLqNQ2xdY0p05/view?usp=sharing' target='_blank' rel="noreferrer">Story</a>
                            <a href='https://drive.google.com/file/d/1WnlVIVh5YujveFRZOUGTIx9boiNN3Xgb/view?usp=sharing' target='_blank' rel="noreferrer">Post</a>
                        </div>
                        <div className="bot">
                            <a href='https://drive.google.com/file/d/1WeC6BTuMNIJ7kEPfKmj0TbsItUAoYNBa/view?usp=sharing' target='_blank' rel="noreferrer">IMPRÍMELO</a>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <StaticImage
                        src="../../assets/images/ivan.jpg"
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="FULL_WIDTH"
                    />
                    <div className="info">
                        <p className="lead">DISEÑADO POR Iván Moreno</p>
                        <p>¡COMPARTE ESTE MENSAJE DE ESPERANZA!</p>
                        <p>DESCARGALO AQUÍ</p>
                        <div className="top">
                            <a href='https://drive.google.com/file/d/1L7t7-GwPBVA2HrQtMxARxhqtw5pNl-Fg/view?usp=sharing' target='_blank' rel="noreferrer">Story</a>
                            <a href='https://drive.google.com/file/d/19rtS9oQuwqO6wJPqbP997UrES0Q2nHVf/view?usp=sharing' target='_blank' rel="noreferrer">Post</a>
                        </div>
                        <div className="bot">
                            <a href='https://drive.google.com/file/d/1KWk6lNf-LvSlw_MqHJwO_1JSGqLBxaJB/view?usp=sharing' target='_blank' rel="noreferrer">IMPRÍMELO</a>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <StaticImage
                        src="../../assets/images/jerico.jpg"
                        alt="A dinosaur"
                        placeholder="blurred"
                        layout="FULL_WIDTH"
                    />
                    <div className="info">
                        <p className="lead">DISEÑADO POR Jericó Santillán</p>
                        <p>¡COMPARTE ESTE MENSAJE DE ESPERANZA!</p>
                        <p>DESCARGALO AQUÍ</p>
                        <div className="top">
                            <a href='https://drive.google.com/file/d/1Rlz-U9Fbg6dhSnXRmYRXmH59SJd0tK2U/view?usp=sharing' target='_blank' rel="noreferrer">Story</a>
                            <a href='https://drive.google.com/file/d/1ls9LuLBDzh-_NpuojfL-99y8hY9j4HAQ/view?usp=sharing' target='_blank' rel="noreferrer">Post</a>
                        </div>
                        <div className="bot">
                            <a href='https://drive.google.com/file/d/1YgSt7mW0n6Lf4noy1U8sBX5kVY74n2-B/view?usp=sharing' target='_blank' rel="noreferrer">IMPRÍMELO</a>
                        </div>
                    </div>
                </div>

            
            </Slider>
            
        </SliderContainer>
    )
}

const SliderContainer = styled.div`
margin-top: 100px;
.title {
    font-size: 4rem;
    margin-bottom: 50px;
}
.slick-track {
    display: flex;
}
.slick-slide {
    align-self: center;
}
.slide {
    height: 100%;
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    img {
        height: fit-content;
    }
    .info {
        margin-top: 20px;
        .lead {
            font-weight: 700;
        }
        p {
            margin-bottom: 10px;
        }
        p, a {
            text-transform: uppercase;
        }
        .top {
            margin-top: 20px;
            margin-bottom: 20px;
            a {
                margin-right: 10px;
                margin-left: 10px;
                &:first-child {
                    background-color: #EE2764;
                    color: white;
                    padding: 10px 25px;
                    border-radius: 20px;
                }
                &:last-child {
                    background-color: #F171A0;
                    color: white;
                    padding: 10px 25px;
                    border-radius: 20px;
                }
            }
        }
        .bot {
            padding-bottom: 50px;
            margin-top: 35px;
            a {
                background-color: #EF4034;
                color: white;
                padding: 10px 25px;
                border-radius: 20px;
            }
        }
    }
}
`

export default SliderCarr