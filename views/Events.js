const React = require('react');

class Events extends React.Component {

	render() {
		return (
			<div>
       <div className="w3-container">
				<h1>Upcoming Events</h1>
       </div>
				<div>
					<div className="w3-row w3-container">
						<div className="w3-row">
							<div className="w3-col m3 w3-center">
								<div className="w3-card-4" style={{width:'90%'}}>
									<img src="https://i.imgur.com/3fAd0w8.gif" alt="Norway" style={{width:'100%'}}/>
									<div className="w3-container w3-center">
										<p>MIS Club</p>
									</div>
								</div>
							</div>
							<div className="w3-col m3 w3-center">
								<div className="w3-card-4" style={{width:'90%'}}>
									<img src="https://i.imgur.com/3fAd0w8.gif" alt="Norway" style={{width:'100%'}}/>
									<div className="w3-container w3-center">
										<p>MIS Club</p>
									</div>
								</div>
							</div>
							<div className="w3-col m3 w3-center">
								<div className="w3-card-4" style={{width:'90%'}}>
									<img src="https://i.imgur.com/3fAd0w8.gif" alt="Norway" style={{width:'100%'}}/>
									<div className="w3-container w3-center">
										<p>MIS Club</p>
									</div>
								</div>
							</div>
							<div className="w3-col m3 w3-center">
								<div className="w3-card-4" style={{width:'90%'}}>
									<img src="https://i.imgur.com/3fAd0w8.gif" alt="Norway" style={{width:'100%'}}/>
									<div className="w3-container w3-center">
										<p>MIS Club</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Events;