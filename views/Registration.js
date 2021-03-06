const React = require('react');

class Registration extends React.Component {

	render() {
		return (
			<div>
				<div className="field">
					<label className="label">Name</label>
					<div className="control">
						<input className="input is-success" type="text" placeholder="John Doe" value=""/>
					</div>
				</div>
				<div className="field">
					<label className="label">Email</label>
					<div className="control has-icons-left has-icons-right">
						<input className="input is-danger" type="email" placeholder="example@email.com" value=""/>
						<span className="icon is-small is-left"><i className="fa fa-envelope"/></span>
						<span className="icon is-small is-right"><i className="fa fa-warning"/></span>
					</div>
					<p className="help is-danger">This email is invalid</p>
				</div>

				<div className="field">
					<label className="label">Password</label>
					<p className="control has-icons-left">
						<input className="input" type="password" placeholder="Password"/>
						<span className="icon is-small is-left"><i className="fa fa-lock"/></span>
					</p>
				</div>

				<div className="field is-grouped">
					<div className="control">
						<button className="button is-link">Submit</button>
					</div>
					<div className="control">
						<button className="button is-text">Cancel</button>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Registration;