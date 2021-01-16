import { Fragment } from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <Fragment>


			<header id="header" className="header header-desktop header-1">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3 p-0">
							<div className="header-left">
								<Link href="/">
								<a id="branding_logo">
									<img className="logo" src="/images/logo_alt.png" alt="Logo" title="Nine Studio" />
									<img className="logo-alt" src="/images/logo_alt.png" alt="Logo" title="Nine Studio" />
								</a>
								</Link>
							</div>
						</div>
						<div className="col-md-9 p-0">
							<div className="header-right">
								<nav id="menu" className="menu menu-primary">
									<ul>
										<li className="active">
											<Link href="/"><a >Home</a></Link>
										</li>

										<li>
											<Link href="/"><a>About</a></Link>
										</li>

										<li>
											<Link href="/"><a>Team</a></Link>
										</li>
										<li>
											<Link href="/"><a>Services</a></Link>
										</li>
										<li>
											<Link href="/"><a>Contact</a></Link>
										</li>

									</ul>
								</nav>
								<div id="open-search" className="open-search top-search-btn"><i className="ion-ios-search-strong"></i></div>
							</div>
						</div>
					</div>
				</div>
			</header>


        </Fragment>
    )
}
export default Navbar;
