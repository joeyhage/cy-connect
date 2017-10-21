const React = require('react');

class Registration extends React.Component {

	render() {
		return (
      
      
      <div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input class="input is-success" type="text" placeholder="John Doe" value=""/>
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-danger" type="email" placeholder="example@email.com" value=""/>
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-warning"></i>
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Password"/>
            <span className="icon is-small is-left">
              <i className="fa fa-lock"></i>
            </span>
          </p>
        </div>


        <div className="field">
          <label className="label">Position</label>
          <div className="control">
            <div className="select">
              <select>
                <option>President</option>
                <option>Vice-President</option>
                <option>Secretary</option>
                <option>Treasurer</option>
                <option>Student Member</option>
              </select>
            </div>
          </div>
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