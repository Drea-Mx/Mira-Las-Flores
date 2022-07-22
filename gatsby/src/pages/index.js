import React from "react";
import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import Splash from "../components/splash/Splash";



const IndexPage = ({data}) => {

    return(
        <Layout>
            <Seo title='Mira Las Flores' description='Mira las flores' image='/mira.png' />
            
            <Splash />
        </Layout>
    )
}

export default IndexPage
