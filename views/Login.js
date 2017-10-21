const React = require('react');

class Login extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			netid: '',
			password: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<div className='container'>
				<div className="columns is-mobile">
					<div className="column is-4-desktop is-2-tablet is-1-mobile"/>
					<div className="column is-4-desktop is-8-tablet is-10-mobile box" style={{marginTop:'20vh'}}>
						<h1 style={{textAlign: 'center'}}>Login</h1>
						<form id="login-form">
							<div className="field">
								<label className="label" aria-label>Net-ID</label>
								<div className="control has-icons-left">
									<input className="input" id="netid" type="text" placeholder="Net-ID"
										   pattern="[a-z0-9]{3,8}" name="netid"
										   title="Your Net-ID is 3 to 8 characters long and consists of lowercase letters (and optionally numeric digits)."
										   value={this.state.netid} onChange={this.handleChange}/>
									<span className="icon is-small is-left"><i className="fa fa-user-o"/></span>
								</div>
							</div>

							<div className="field">
								<label className="label">Password</label>
								<div className="control has-icons-left">
									<input className="input" id="password" type="password" placeholder="Password"
										   value={this.state.password} onChange={this.handleChange}/>
									<span className="icon is-small is-left"><i className="fa fa-lock"/></span>
								</div>
							</div>

							<div className="field is-grouped">
								<div className="control">
									<button type="submit" className="button is-link">Login</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}

	handleChange({target}) {
		if (target.id === 'netid') {
			this.setState({netid: target.value});
		} else {
			this.setState({password: target.value});
		}
	}
}

module.exports = Login;