const React = require('react');

class AdminDashboard extends React.Component {

	constructor(props) {
		super(props);

		console.log(JSON.stringify(props));
		this.state = {
			upcomingEvents: populateEventTable(props.pageProps.stuorgEvents)
		}
	}

	render() {
		return (
			<div>
				<section className="hero  welcome is-small">
					<div className="hero-body">
						<div className="container">
							<h1 className="title">Hello, {this.props.pageProps.user.firstName}</h1>
							<h2 className="subtitle">I hope you are having a great day!</h2>
						</div>
					</div>
				</section>
				<p style={{paddingTop: '20px'}}/>
				<div className="container">
					<div className="columns">
						<div className="column is-6">
							<div className="card">
								<header className="card-header">
									<p className="card-header-title">Event Search</p>
								</header>
								<div className="card-content">
									<div className="content">
										<div className="control has-icons-left has-icons-right">
											<input type="text" className="input is-large" placeholder=""/>
											<span className="icon is-medium is-left">
                                            <i className="fa fa-search"/>
                                        </span>
											<span className="icon is-medium is-right">
                                            <i className="fa fa-check"/>
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
										<div className="control has-icons-left has-icons-right">
											<input type="text" className="input is-large" placeholder=""/>
											<span className="icon is-medium is-left">
                                            <i className="fa fa-search"/>
                                        </span>
											<span className="icon is-medium is-right">
                                            <i className="fa fa-check"/>
                                        </span>
										</div>
									</div>
								</div>
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
											 {this.state.upcomingEvents}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="info-tiles">
						<div className="title is-vertical is-8">
							<div className="tile is-ancestor has-text-centered">
								<div className="tile is-parent ">
									<article className="tile is-child box">
										<p className="title">439k</p>
										<p className="subtitle">Users</p>
									</article>
								</div>
								<div className="tile is-parent is-vertical">
									<article className="tile is-child box">
										<p className="title">19</p>
										<p className="subtitle">Exceptions</p>
									</article>
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

const populateEventTable = stuorgEvents => {
	console.dir(stuorgEvents);
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


