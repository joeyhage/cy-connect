const React = require('react');

class AdminDashboard extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedStuorg: '',
			stuorgs: populateStuorgs(props.pageProps.stuorgs)
		}
	}

	render() {
		return (
			<div>
				<section className="hero welcome is-small">
					<div className="hero-body">
						<div className="container">
							<h1 className="title">Hello, {this.props.pageProps.user.firstName}</h1>
						</div>
					</div>
				</section>
				<p style={{paddingTop:'20px'}}/>
				<div className="container">
					<div className="columns">
						<div className="column is-6">
							<div className="card">
								<header className="card-header">
									<p className="card-header-title">Event Search</p>
								</header>
								<div className="card-content">
									<div className="content">
										<div className="control has-icons-left">
											<input type="text" className="input is-large" placeholder=""/>
											<span className="icon is-medium is-left">
												<i className="fa fa-search"/>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="column is-6">
							<div className="card">
								<header className="card-header">
									<p className="card-header-title">Member Search</p>
								</header>
								<div className="card-content">
									<div className="content">
										<div className="control has-icons-left">
											<input type="text" className="input is-large" placeholder=""/>
											<span className="icon is-medium is-left">
                                            	<i className="fa fa-search"/>
                                        	</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<h2 className="title"> Clubs </h2>
					<div className="info-tiles">
						<div className="title is-vertical is-8">
							<div className="tile is-ancestor has-text-centered">
								{this.state.stuorgs}
							</div>
						</div>
					</div>
					<div className="columns">
						<div className="column is-12">
							<div className="card events-card">
								<header className="card-header">
									<p className="card-header-title">Events</p>
								</header>
								<div className="card-table">
									<div className="content">
										<table className="table is-fullwidth is-striped">
											<tbody>
											<tr>
													<td width="5%">
														<i className="fa fa-bell-o"/>
													</td>
													<td>Principal Financial Group</td>
													<td>
														<a className="button is-small is-danger" href="#">Delete</a>
													</td>
												</tr>
												<tr>
													<td width="5%">
														<i className="fa fa-bell-o"/>
													</td>
													<td>Mcdowell LLC</td>
													<td>
														<a className="button is-small is-danger" href="#">Delete</a>
													</td>
												</tr>
												<tr>
													<td width="5%">
														<i className="fa fa-bell-o"/>
													</td>
													<td>Perkins Inc</td>
													<td>
														<a className="button is-small is-danger" href="#">Delete</a>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="myDiv" style={{marginTop:"40px"}}/>
				</div>
			</div>
		);
	}
}

const populateStuorgs = stuorgs => {
	if (stuorgs) {
		return stuorgs.map(stuorg => (
			<div key={stuorg.stuorgId} className="tile is-parent">
				<article className="tile is-child box">
					<p className="title">{stuorg.stuorgName}</p>
				</article>
			</div>
		));
	}
};

const populateEventTable = stuorgEvents => {
	if (stuorgEvents) {
		return stuorgEvents.map((event, index) => (
			<tr key={event.eventId}>
				<td width="5%">
					<i className="fa fa-bell-o"/>
				</td>
				<td>{event.eventName}</td>
				<td>{event.description}</td>
				<td>
					<a className="button is-small is-danger" href="#">Delete</a>
				</td>
			</tr>
			)
		);
	}
};


module.exports = AdminDashboard;
