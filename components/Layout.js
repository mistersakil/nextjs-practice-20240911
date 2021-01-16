import TopSearch from './TopSearch'
import Navbar from './Navbar'
import Footer from './Footer'

import { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
const Layout = ({ children }) => {
    const router = useRouter()
    return (
        <Fragment>
        <Head>
        	<title>Home</title>
        	<link rel="shortcut icon" href="/images/favicon.ico"/>

			<link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css" media="all"/>
			<link rel="stylesheet" href="/css/font-awesome.min.css" type="text/css" media="all" />
			<link rel="stylesheet" href="/css/ionicons.min.css" type="text/css" media="all" />
			<link rel="stylesheet" href="/css/owl.carousel.css" type="text/css" media="all"/>
			<link rel="stylesheet" href="/css/owl.theme.css" type="text/css" media="all"/>
			<link rel="stylesheet" href="/css/settings.css" type="text/css" media="all"/>
			<link rel="stylesheet" href="/css/component.css" type="text/css" media="all"/>
			<link rel="stylesheet" href="/css/slick.css" type="text/css" media="all"/>
			<link rel="stylesheet" href="/css/magnific-popup.css" type="text/css" media="all"/>
			<link rel="stylesheet" href="/css/style.css" type="text/css" media="all"/>
			<link rel="stylesheet" href="/css/custom.css" type="text/css" media="all"/>
        </Head>


        	<div className="site">
        		<TopSearch />
        		<Navbar />
				<div id="main">

        			{children}
				</div>
				<Footer />
			</div>
        <script type="text/javascript" src="/js/jquery.min.js"></script>
		<script type="text/javascript" src="/js/jquery-migrate.min.js"></script>
		<script type="text/javascript" src="/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="/js/modernizr-2.7.1.min.js"></script>
		<script type="text/javascript" src="/js/owl.carousel.min.js"></script>
		<script type="text/javascript" src="/js/imagesloaded.pkgd.min.js"></script>
		<script type="text/javascript" src="/js/isotope.pkgd.min.js"></script>
		<script type="text/javascript" src="/js/jquery.isotope.init.js"></script>
		<script type="text/javascript" src="/js/classie.js"></script>
		<script type="text/javascript" src="/js/modalEffects.js"></script>
		<script type="text/javascript" src="/js/slick.min.js"></script>
		<script type="text/javascript" src="/js/jquery.magnific-popup.min.js"></script>
		<script type="text/javascript" src="/js/script.js"></script>
		<script type="text/javascript" src="/js/jquery.themepunch.tools.min.js"></script>
		<script type="text/javascript" src="/js/jquery.themepunch.revolution.min.js"></script>
		<script type="text/javascript" src="/js/extensions/revolution.extension.video.min.js"></script>
		<script type="text/javascript" src="/js/extensions/revolution.extension.slideanims.min.js"></script>
		<script type="text/javascript" src="/js/extensions/revolution.extension.actions.min.js"></script>
		<script type="text/javascript" src="/js/extensions/revolution.extension.layeranimation.min.js"></script>
		<script type="text/javascript" src="/js/extensions/revolution.extension.kenburn.min.js"></script>
		<script type="text/javascript" src="/js/extensions/revolution.extension.navigation.min.js"></script>
		<script type="text/javascript" src="/js/extensions/revolution.extension.migration.min.js"></script>
		<script type="text/javascript" src="/js/extensions/revolution.extension.parallax.min.js"></script>
        </Fragment>
    )


}
export default Layout;
