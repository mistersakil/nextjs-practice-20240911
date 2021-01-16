import { Fragment } from 'react'
const TopSearch = () => {
    return (
        <Fragment>
		<div className="noo-spinner">
			<div className="spinner">
				<div className="child double-bounce1"></div>
				<div className="child double-bounce2"></div>
			</div>
		</div>
		<div className="top-search">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<form>
							<input type="search" className="top-search-input" name="s" placeholder="What are you looking for?" />
						</form>
					</div>
				</div>
			</div>
		</div>

        </Fragment>
    )
}
export default TopSearch;
