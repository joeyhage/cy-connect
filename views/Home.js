const React = require('react');
const moment = require('moment');

class Home extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			studentOrgs: populateStuorgTable(props.pageProps.stuorgDetails),
			upcomingEvents: populateEventTable(props.pageProps.stuorgEvents)
		}
	}

	render() {
		return (
			<div className='container'>
				<div className="tabs" style={{display: 'block', margin: 'auto', width: '83%'}}>
					<ul>
						<li><a href="#upcoming">Your Upcoming Events</a></li>
						<li><a href="#stuorgs">Your Student Organizations</a></li>
					</ul>
				</div>
				<div className="columns is-mobile" style={{marginTop: '10vh'}}>
					<div className="column is-10-desktop is-10-tablet is-12-mobile">
						<h3 id="upcoming" style={style.h3}>Your Upcoming Events</h3>
						<div className="box">
							<table className='table is-striped is-hoverable'>
								<thead>
								<tr>
									<th>StuOrg Name</th>
									<th>Event Name</th>
									<th>Event Date</th>
									<th>Event Location</th>
									<th>Description</th>
									<th>Cost</th>
								</tr>
								</thead>
								<tbody>
									{this.state.upcomingEvents}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="columns is-mobile" style={{marginTop: '5vh'}}>
					<div className="column is-6-desktop is-8-tablet is-10-mobile">
						<h3 id="stuorgs" style={style.h3}>Your Student Organizations</h3>
						<div className="box">
							<table className='table is-striped is-hoverable'>
								<thead>
								<tr>
									<th>StuOrg Name</th>
									<th>Category</th>
								</tr>
								</thead>
								<tbody>
									{this.state.studentOrgs}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const populateStuorgTable = stuorgDetails => {
	console.dir(stuorgDetails);
	if (stuorgDetails) {
		return stuorgDetails.map((stuorg, index) => (
				<tr key={stuorg.stuorgId}>
					<td>{stuorg.stuorgName}</td>
					<td>{stuorg.category}</td>
				</tr>
			)
		);
	}
};

const populateEventTable = stuorgEvents => {
	console.dir(stuorgEvents);
	if (stuorgEvents) {
		return stuorgEvents.map((event, index) => (
				<tr key={event.eventId}>
					<td>{event.stuorgName}</td>
					<td>{event.eventName}</td>
					<td>{moment(event.date).format('MMM D, YY')}</td>
					<td>{event.location}</td>
					<td>{event.description}</td>
					<td>{event.cost}</td>
				</tr>
			)
		);
	}
};

const red = '#C21D2f';
const style = {
	h3: {
		color: red,
		fontWeight: 'bold',
		fontSize: '20px'
	}
};

module.exports = Home;