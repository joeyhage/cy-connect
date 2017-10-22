const React = require('react');
const moment = require('moment');

class Home extends React.Component {

	render() {
		return (
			<div className='container'>
				<div className="columns is-mobile" style={{marginTop: '20px'}}>
					<div className="column is-1-tablet is-1-mobile"/>
					<div className="column is-5-desktop is-10-tablet is-10-mobile">
						<h3 style={style.h3}>Your Upcoming Events</h3>
						{populateEventTable(this.props.pageProps.stuorgEvents, 0)}
					</div>
					<div className="column is-1-desktop is-1-tablet is-1-mobile"/>
					<div className="column is-5-desktop is-10-tablet is-10-mobile">
						<h3 style={style.h3}>Your Student Organizations</h3>
						{populateStuorgTable(this.props.pageProps.stuorgDetails, 0)}
					</div>
				</div>
			</div>
		);
	}
}

const populateStuorgTable = (stuorgDetails, startIndex) => {
	if (stuorgDetails) {
		const slice = stuorgDetails[startIndex + 5] ? stuorgDetails.slice(startIndex, startIndex + 5) : stuorgDetails;

		return slice.map(stuorg => (
			<div key={stuorg.stuorgId} className="home card" style={{margin:'20px 0'}}>
				<header className="card-header" style={{backgroundColor:'#ffd83d'}}>
					<p className="card-header-title">
						<span>{stuorg.stuorgName} - {stuorg.category}</span>
					</p>
					<a className="card-header-icon" aria-label="details">
						Details
						<span className="icon"><i className="fa fa-info-circle" aria-hidden="true"/></span>
					</a>
				</header>
			</div>
		));
	}
};

const populateEventTable = (stuorgEvents, startIndex) => {
	if (stuorgEvents) {
		const slice = stuorgEvents[startIndex + 5] ? stuorgEvents.slice(startIndex, startIndex + 5) : stuorgEvents;

		return slice.map(event => (
			<div key={event.eventId} className="home card" style={{margin:'20px 0'}}>
				<header className="card-header" style={{backgroundColor:'#ffd83d'}}>
					<p className="card-header-title">
						<span>{event.eventName} - {moment(event.date).format('MMM D, YYYY')}</span>
					</p>
				</header>
				<div className="card-content">
					<div className="content">
						<p style={{fontWeight:'bold'}}>{event.stuorgName}</p>
						<p><strong>Location:</strong> {event.location}</p>
						<p className="event-details is-hidden" style={{fontWeight:'bold'}}>Description:</p>
						<p className="event-details is-hidden">{event.description}</p>
						<p className="event-details is-hidden"><strong>Cost:</strong> {event.cost}</p>
					</div>
				</div>
				<footer className="card-footer" style={{backgroundColor:'whitesmoke'}}>
					<a className="card-header-icon" aria-label="details">
						Details
						<span className="icon"><i className="fa fa-info-circle" aria-hidden="true"/></span>
					</a>
				</footer>
			</div>
		));
	}
};

const style = {
	h3: {
		color: '#C21D2f',
		fontWeight: 'bold',
		fontSize: '20px'
	}
};

module.exports = Home;