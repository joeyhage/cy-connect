const React = require('react');

class AdminDashboard extends React.Component {

	render() {
		return (
			<div>
				<section className="hero is-info welcome is-small">
					<div className="hero-body">
						<div className="container">
							<h1 className="title">
								Hello, Admin.
							</h1>
							<h2 className="subtitle">
								I hope you are having a great day!
							</h2>
						</div>
					</div>
				</section>
				<p style={{paddingTop:"20px"}}/>
				<div className="w3-container">
					<section className="info-tiles">
						<div className="tile is-ancestor has-text-centered">
							<div className="tile is-parent">
								<article className="tile is-child box">
									<p className="title">439k</p>
									<p className="subtitle">Users</p>
								</article>
							</div>
							<div className="tile is-parent">
								<article className="tile is-child box">
									<p className="title">59k</p>
									<p className="subtitle">Products</p>
								</article>
							</div>
							<div className="tile is-parent">
								<article className="tile is-child box">
									<p className="title">3.4k</p>
									<p className="subtitle">Open Orders</p>
								</article>
							</div>
							<div className="tile is-parent">
								<article className="tile is-child box">
									<p className="title">19</p>
									<p className="subtitle">Exceptions</p>
								</article>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

module.exports = AdminDashboard;