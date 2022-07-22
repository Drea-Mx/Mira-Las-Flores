import React from "react";
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import Splash from "../components/splash/Splash";



const IndexPage = ({data}) => {

    return(
        <Layout>
            <Seo title='Próximamente' description='El proyecto "Mira las Flores", una iniciativa de Mara Osman, tiene como objetivo el generar una comunidad alrededor de la importancia que tiene la salud mental, creando espacios para hablar, y sentirse escuchados, y darnos cuenta que no estamos solos en esto.' image='/mira.png' />
            
            <Splash />
        </Layout>
    )
}

export default IndexPage
