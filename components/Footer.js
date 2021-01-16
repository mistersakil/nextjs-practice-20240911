import { Fragment } from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <Fragment>
        <footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<a href="./" id="footer_logo">
								<img className="footer-logo-image" src="/images/logo_footer.png" alt="Nine Studio" />
							</a>
							<div className="footer-social">
								<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook" href="#"><i className="fa fa-facebook"></i></a>
								<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter" href="#"><i className="fa fa-twitter"></i></a>
								<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest" href="#"><i className="fa fa-pinterest"></i></a>
								<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram" href="#"><i className="fa fa-instagram"></i></a>
							</div>
						</div>
						<div className="col-md-2">
							<div className="widget">
								<h3 className="widget-title">Our Services</h3>
								<ul>
									<li><a href="#">Equipment Hire</a></li>
									<li><a href="#">Filmming Services</a></li>
									<li><a href="#">Studio Hire</a></li>
									<li><a href="#">Dressing</a></li>
									<li><a href="#">Flexibe Office Space</a></li>
								</ul>
							</div>
						</div>
						<div className="col-md-2">
							<div className="widget">
								<h3 className="widget-title">Quick Links</h3>
								<ul>
									<li><a href="#">My Account</a></li>
									<li><a href="#">View Order</a></li>
									<li><a href="#">About Us</a></li>
									<li><a href="#">Promotions</a></li>
									<li><a href="#">Contact Us</a></li>
								</ul>
							</div>
						</div>
						<div className="col-md-4">
							<div className="widget">
								<h3 className="widget-title">Conect With Us</h3>
								<div className="textwidget">
									<p>A: 14 L.E Goulburn St, Berlin 2000Wm</p>
									<p>P: (+88) 1990 6886</p>
									<p>E: <a href="mailto:contact@9studio.com">contact@9studio.com</a></p>
								</div>
								<div className="footer-gmap">
									<a href="#gmap-popup" className="open-popup-link">Google Map</a>
									<div id="gmap-popup" className="mfp-hide">
										<iframe id="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.0554760559626!2d151.42366529037852!3d-32.80714560754794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b73360bf7441cf9%3A0x7d18a93f0244f271!2s14+Goulburn+St%2C+Abermain+NSW+2326%2C+Australia!5e0!3m2!1sen!2s!4v1482743874873" width="600" height="450" allowfullscreen></iframe>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="copyright-container">
							<div className="col-md-6 p-0">
								<div className="copyright-left">
									Copyright © 2017 <a href="#">NineStudio</a> - All Rights Reserved.
								</div>
							</div>
							<div className="col-md-6 p-0">
								<div className="copyright-right">
									<ul>
										<li><a href="#">Privacy Policy</a></li>
										<li><a href="#">Term And Conditions</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </Fragment>
    )
}
export default Footer;
