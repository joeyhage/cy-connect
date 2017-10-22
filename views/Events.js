const React = require('react');

class Events extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			upcomingEvents: populateEventTable(props.pageProps.events)
		}
	}

	render() {
		return (
			<div>
				<div className="carousel" data-flickity>
					{this.state.upcomingEvents}
				</div>
			</div>
		);
	}
}

const populateEventTable = (events) => {
	if (events) {
		return events.map((event, index) => (
			<div className="carousel-cell" key={event.eventId}>
				<div className="box">
					<article className="media">
						<div className="media-content">
							<div className="content">
								<p> {event.eventName}</p>
							</div>
						</div>
					</article>
				</div>
			</div>
			)
		);
	}
};
module.exports = Events;