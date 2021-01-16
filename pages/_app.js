import Layout from '../components/Layout'
import { Fragment } from 'react'


function MyApp({ Component, pageProps }) {
    return (
        <Layout>
	        <Component  { ...pageProps } />

        </Layout>
    )
}
export default MyApp;
