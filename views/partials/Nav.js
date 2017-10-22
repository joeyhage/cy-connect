const React = require('react');

class Nav extends React.Component {

	render() {
		return (
			<nav className="navbar is-warning" role="navigation" aria-label="main navigation"
				 style={{backgroundColor:style.red}}>
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						<img
							src="https://cdn.glitch.com/d7caa6e3-7152-40ff-9cce-fd94636631bc%2FUntitled.png?1508555216206"/>
					</a>
					{this.props.path !== '/login' &&
						<button className="button navbar-burger" id="navBurger">
							<span/>
							<span/>
							<span/>
						</button>
					}
				</div>
				{this.props.path !== '/login' &&
					<div className="navbar-menu" id="navMenu">
						<div className="navbar-start">
							<a href="/" className={`navbar-item ${this.isActivePage('/')}`}>
								Home
							</a>
							<a href="/stuorgs" className={`navbar-item ${this.isActivePage('/stuorgs')}`}>
								Student Organizations
							</a>
							<a href="/events" className={`navbar-item ${this.isActivePage('/events')}`}>
								Events
							</a>
						</div>
						<div className="navbar-end">
							<div className="navbar-item has-dropdown is-hoverable">
								<a className="navbar-link">
									{this.props.pageProps.user.firstName}
								</a>
								<div className="navbar-dropdown is-right">
									<a href="/profile" className={`navbar-item ${this.isActivePage('/profile')}`}>
										Profile
									</a>
									<a href="/logout" className="navbar-item">
										Logout
									</a>
								</div>
							</div>
						</div>
					</div>
				}
			</nav>
		);
	}

	isActivePage(path) {
		return path === this.props.path ? 'is-active' : '';
	}
}

const style = {
	red: '#C21D2f'
};

module.exports = Nav;