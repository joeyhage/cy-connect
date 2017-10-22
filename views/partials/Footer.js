const React = require('react');
const moment = require('moment');

class Footer extends React.Component {
	
	render() {
		return (
			<footer className="footer" style={{marginTop:'20vh'}}>
				<div className="container">
					<div className="content has-text-centered">
						<h4>CyConnect</h4>
						<p>
							&copy;{moment().format('YYYY')} Developed with &#x2764; by Joey Hage, Louis Hamilton, Mariya Karasseva, and Isaac Tetteh
						</p>
					</div>
				</div>
			</footer>	
		);
	}
}

module.exports = Footer;