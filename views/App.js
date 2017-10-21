const React = require('react');
const Nav = require('./partials/Nav');
const Home = require('./Home');
const Events = require('./Events');
const StuOrgs = require('./StuOrgs');
const Profile = require('./Profile');

class App extends React.Component {
	
	render() {
		return (
			<html>
			<head>
				<title>ISU StuOrg Management - Home</title>
				<meta name="description" content="ISU StuOrg Check-In"/>
				<link id="favicon" rel="icon" href="https://cdn.glitch.com/d7caa6e3-7152-40ff-9cce-fd94636631bc%2FUntitled.png?1508555216206" 
					  type="image/x-icon"/>
				<meta charSet="utf-8"/>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
				<link rel="stylesheet" href="https://cdn.glitch.com/d7caa6e3-7152-40ff-9cce-fd94636631bc%2Fbulma.css?1508558261423"/>
			</head>
			<body>
				<Nav path={this.props.path}/>
				{this.props.path === '/' &&
					<Home/>
				}
				{this.props.path === '/stuorgs' &&
					<StuOrgs/>
				}
				{this.props.path === '/events' &&
					<Events/>
				}
				{this.props.path === '/profile' &&
					<Profile/>
				}
				{this.props.children}
			</body>
			</html>
		);
	}
}

module.exports = App;