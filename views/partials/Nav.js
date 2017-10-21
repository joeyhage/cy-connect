const React = require('react');

class Nav extends React.Component {

	render() {
		return (
			<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						<img
							src="https://cdn.glitch.com/d7caa6e3-7152-40ff-9cce-fd94636631bc%2FUntitled.png?1508555216206"/>
					</a>

					<button className="button navbar-burger">
						<span/>
						<span/>
						<span/>
					</button>
				</div>
				<div className="navbar-menu">
					<div className="navbar-start">
						<a href="/" className={`navbar-item ${this.isActivePage('/')}`}>
							Home
						</a>
						<a href="/stuorgs"
						   className={`navbar-item ${this.isActivePage('/stuorgs')}`}>
							Student Organizations
						</a>
						<a href="/events" className={`navbar-item ${this.isActivePage('/events')}`}>
							Events
						</a>
					</div>

					<div className="navbar-end">
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">
								User
							</a>

							<div className="navbar-dropdown is-right">
								<a href="/profile"
								   className={`navbar-item ${this.isActivePage('/profile')}`}>
									Profile
								</a>
								<a href="/logout" className="navbar-item">
									Logout
								</a>
							</div>
						</div>
					</div>

				</div>
			</nav>
		);
	}

	isActivePage(path) {
		console.log('Props path', this.props.path);
		console.log('Path', path);
		return path === this.props.path ? 'is-active' : '';
	}
}

module.exports = Nav;