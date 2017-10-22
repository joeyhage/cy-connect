const React = require('react');

class Nav extends React.Component {

	render() {
		const {user} = this.props.pageProps;
		return (
			<nav className="navbar is-warning" role="navigation" aria-label="main navigation"
				 style={{backgroundColor:style.red, borderBottom:'2px solid black'}}>
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						<img
							src="https://cdn.glitch.com/d7caa6e3-7152-40ff-9cce-fd94636631bc%2FChecky.png?1508629154312"/>
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
							{user.adminRoles && Boolean(user.adminRoles.length) &&
								<a href="/admin-dashboard" className={`navbar-item ${this.isActivePage('/admin-dashboard')}`}>
									Admin Dashboard
								</a>
							}
						</div>
						<div className="navbar-end">
							<div className="navbar-item has-dropdown is-hoverable">
								<a className="navbar-link">
									{user.firstName}
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