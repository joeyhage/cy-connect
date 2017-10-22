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
							{this.state.upcomingEvents}
						</div>
					</div>
				</div>
				<div className="columns is-mobile" style={{marginTop: '5vh'}}>
					<div className="column is-6-desktop is-8-tablet is-10-mobile">
						<h3 id="stuorgs" style={style.h3}>Your Student Organizations</h3>
						<div className="box">
							{this.state.studentOrgs}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const populateStuorgTable = stuorgDetails => {
	if (stuorgDetails) {
		return stuorgDetails.map(stuorg => (
			<tr key={stuorg.stuorgId}>
				<td>{stuorg.stuorgName}</td>
				<td>{stuorg.category}</td>
			</tr>
		));
	}
};

const populateEventTable = stuorgEvents => {
	if (stuorgEvents) {
		return stuorgEvents.map(event => (
			<div key={event.eventId} className="card">
				<header className="card-header">
					<p className="card-header-title">{event.eventName}</p>
					<a href="#" className="card-header-icon" aria-label="more options">
						Info
						<span className="icon"><i className="fa fa-info-circle" aria-hidden="true"/></span>
					</a>
				</header>
				<div className="card-content">
					<div className="content">
						<br/>
						<time dateTime={event.date}>{moment(event.date).format('MMM D, YY')}</time>
					</div>
				</div>
			</div>
		));
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