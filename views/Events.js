const React = require('react');

class Events extends React.Component {

	render() {
		return (
			<div>
				<div className="w3-container">
					<h1>Upcoming Events</h1>
				</div>
				<div>
					<div className="carousel" data-flickity>
						<div className="carousel-cell">
							<div className="w3-card-5" style={{width: '90%'}}>
								<img src="https://i.imgur.com/3fAd0w8.gif" alt="Norway" width="350px" height="350px"/>
								<div className="w3-container w3-center">
									<p>MIS Club</p>
								</div>
							</div>
						</div>
						<div className="carousel-cell">
							<div className="w3-card-5" style={{width: '90%'}}>
								<img
									src="http://images.wisegeek.com/scientist-in-lab-coat-with-microscope-plants-and-vegetables.jpg"
									alt="Norway" width="350px" height="350px"/>
								<div className="w3-container w3-center">
									<p>Food Science Club</p>
								</div>
							</div>
						</div>
						<div className="carousel-cell">
							<div className="w3-card-4" style={{width: '90%'}}>
								<img src="https://i.imgur.com/3fAd0w8.gif" alt="Norway" width="350px" height="350px"/>
								<div className="w3-container w3-center">
									<p>MIS Club</p>
								</div>
							</div>
						</div>
						<div className="carousel-cell">
							<div className="w3-card-4" style={{width: '90%'}}>
								<img src="https://i.imgur.com/3fAd0w8.gif" alt="Norway" width="350px" height="350px"/>
								<div className="w3-container w3-center">
									<p>MIS Club</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w3-container">
					<h1>Tech Clubs</h1>
				</div>
				<div>
					<div className="w3-row w3-container">
						<div className="w3-row">
							<div className="w3-col m3 w3-center">
								<div className="w3-card-4" style={{width: '90%'}}>
									<img
										src="http://www.phillyyouthmedia.org/wp-content/uploads/2016/01/tech-advances-dance-music.jpg"
										alt="Norway" width="350px" height="350px"/>
									<div className="w3-container w3-center">
										<p>MIS Club</p>
										<p> Location: Gerdin 1125 </p>
										<p> Agenda: Intro to Git </p>
									</div>
								</div>
							</div>

							<div className="w3-col m3 w3-center">
								<div className="w3-card-4" style={{width: '90%'}}>
									<img
										src="http://www.eduonix.com/blog/wp-content/uploads/2015/04/15-Most-Popular-Programming-Languages-You-Must-Learn-in-2015.png"
										alt="Norway" width="350px" height="350"/>``
									<div className="w3-container w3-center">
										<p>CSE Club</p>
										<p> Location: Caver 1125 </p>
										<p> Agenda: Intro to Git </p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w3-container">
					<h1>Health and Wellness Clubs</h1>
				</div>
				<div>
					<div className="w3-row w3-container">
						<div className="w3-row">
							<div className="w3-col m3 w3-center">
								<div className="w3-card-4" style={{width: '90%'}}>
									<img
										src="http://www.phillyyouthmedia.org/wp-content/uploads/2016/01/tech-advances-dance-music.jpg"
										alt="Norway" style={{width: '100%'}}/>
									<div className="w3-container w3-center">
										<p>MIS Club</p>
										<p> Location: Carver 1125 </p>
										<p> Agenda: Intro to Git </p>
									</div>
								</div>
							</div>
							<div className="w3-col m3 w3-center">
								<div className="w3-card-4" style={{width: '90%'}}>
									<img
										src="http://www.phillyyouthmedia.org/wp-content/uploads/2016/01/tech-advances-dance-music.jpg"
										alt="Norway" style={{width: '100%'}}/>
									<div className="w3-container w3-center">
										<p>MIS Club</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w3-container">
					<h1>Business Clubs</h1>
				</div>
				<div>
					<div className="w3-row w3-container">
						<div className="w3-row">
							<div className="w3-col m3 w3-center">
								<div className="w3-card-4" style={{width: '90%'}}>
									<img
										src="http://www.eduonix.com/blog/wp-content/uploads/2015/04/15-Most-Popular-Programming-Languages-You-Must-Learn-in-2015.png"
										alt="Norway" style={{width: '100%'}}/>
									<div className="w3-container w3-center">
										<p>Finance Club</p>
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