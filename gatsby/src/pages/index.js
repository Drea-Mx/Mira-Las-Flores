import React from "react";
import Carteles from "../components/Home/Carteles";
import Text from "../components/Home/Text";
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'



const IndexPage = ({data}) => {

    return(
        <Layout>
            <Seo title='Mira Las Flores' description='El proyecto "Mira las Flores", una iniciativa de Mara Osman, tiene como objetivo el generar una comunidad alrededor de la importancia que tiene la salud mental, creando espacios para hablar, y sentirse escuchados, y darnos cuenta que no estamos solos en esto.' image='/mira.png' />
            <Text />
            <Carteles />
        </Layout>
    )
}

export default IndexPage
